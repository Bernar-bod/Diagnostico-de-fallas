require('dotenv').config({ path: require('path').join(__dirname, '.env') });

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'CARGADA' : 'NO ENCONTRADA');

const http = require('http');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

// Configurar transporte de correo usando Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Crear servidor
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Servir archivos estáticos
  if (req.method === 'GET') {
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    try {
      const fileContent = fs.readFileSync(filePath);
      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'
      };
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
      res.end(fileContent);
    } catch (err) {
      res.writeHead(404);
      res.end('404 - Archivo no encontrado');
    }
    return;
  }

  // Manejar envío de correos
  if (req.method === 'POST' && req.url === '/api/enviar-contacto') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const datos = JSON.parse(body);
        const { nombre, email, asunto, mensaje } = datos;

        if (!nombre || !email || !asunto || !mensaje) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: false,
            message: 'Faltan campos requeridos'
          }));
          return;
        }

        const mailOptions = {
          from: `"TechSupport" <${process.env.EMAIL_USER}>`,
          to: 'artificialia458@gmail.com',
          replyTo: email,
          subject: `[Contacto] ${asunto} - ${nombre}`,
          html: `
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>De:</strong> ${nombre}</p>
            <p><strong>Correo:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${asunto}</p>
            <hr>
            <p><strong>Mensaje:</strong></p>
            <p>${mensaje.replace(/\n/g, '<br>')}</p>
          `
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error al enviar correo:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              success: false,
              message: error?.message || String(error)
            }));
          } else {
            console.log('Correo enviado:', info.response);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              success: true,
              message: 'Correo enviado correctamente'
            }));
          }
        });

      } catch (error) {
        console.error('Error:', error);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          message: 'Error en la solicitud'
        }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end('404 - No encontrado');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ Servidor ejecutándose en http://localhost:${PORT}`);
});