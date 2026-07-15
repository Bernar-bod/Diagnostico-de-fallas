# 🚀 Sistema de Contacto por Correo

Este documento explica cómo configurar y ejecutar el sistema de envío de correos automáticos.

## 📋 Requisitos

- **Node.js** (versión 12 o superior)
- **npm** (viene con Node.js)
- Una cuenta de **Gmail**

## 🔧 Instalación

### Paso 1: Instalar Node.js

**Windows:**
1. Descarga Node.js desde https://nodejs.org/
2. Ejecuta el instalador y sigue los pasos
3. Reinicia tu computadora
4. Verifica la instalación abriendo PowerShell y ejecutando:
```powershell
node --version
npm --version
```

**Mac:**
```bash
brew install node
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install nodejs npm
```

### Paso 2: Instalar dependencias del proyecto

Abre PowerShell/Terminal en la carpeta del proyecto y ejecuta:

```powershell
npm install
```

Esto instalará la librería `nodemailer` necesaria para enviar correos.

### Paso 3: Configurar Gmail

Para que funcione el envío de correos, necesitas:

1. **Habilitar Verificación en dos pasos** en tu cuenta de Gmail:
   - Ve a https://myaccount.google.com/security
   - Busca "Verificación en dos pasos" y actívala

2. **Generar contraseña de aplicación**:
   - Ve a https://myaccount.google.com/apppasswords
   - Selecciona "Correo" y "Windows (o tu dispositivo)"
   - Haz clic en "Generar"
   - Copia la contraseña generada (16 caracteres)

### Paso 4: Crear archivo .env

1. En la carpeta del proyecto, crea un archivo llamado `.env`
2. Copia el contenido del archivo `.env.example`:

```
EMAIL_USER=tu-correo@gmail.com
EMAIL_PASS=contraseña-de-16-caracteres-aquí
PORT=3000
```

3. Reemplaza:
   - `tu-correo@gmail.com` con tu correo de Gmail
   - `contraseña-de-16-caracteres-aquí` con la contraseña generada en el paso anterior

## 🚀 Ejecutar el servidor

### Opción 1: Con Node.js (Recomendado)

**Windows (PowerShell):**
```powershell
cd "C:\Users\USUARIO\Desktop\trabajoIA\Diagnostico-de-fallas"
npm start
```

**Mac/Linux (Terminal):**
```bash
cd /ruta/a/Diagnostico-de-fallas
npm start
```

Verás un mensaje como:
```
✅ Servidor ejecutándose en http://localhost:3000
```

### Opción 2: Con Python (Si prefieres el servidor simple)

```powershell
python -m http.server 8000
```

Abre: `http://localhost:8000`

## 🧪 Probar el sistema

1. Abre http://localhost:3000 en tu navegador
2. Haz clic en el botón "Contactar" en la barra superior
3. Completa el formulario:
   - Nombre
   - Correo
   - Asunto
   - Mensaje
4. Haz clic en "Enviar Mensaje"
5. El correo debería llegar a `jorbercampana@gmail.com`

## ⚠️ Solución de problemas

### Error: "npm not found"
- Instala Node.js desde https://nodejs.org/

### Error: "npm install" falla
```powershell
npm cache clean --force
npm install
```

### El correo no se envía
1. Verifica que el archivo `.env` exista y tenga los datos correctos
2. Asegúrate de que el correo tenga Verificación en dos pasos habilitada
3. Verifica que la contraseña de aplicación sea correcta
4. Revisa la consola del servidor para ver el error exacto

### Gmail rechaza la conexión
- Gmail bloqueó el acceso porque detectó una aplicación desconocida
- Ve a https://myaccount.google.com/lesssecureapps y actívalo
- O usa "Contraseñas de aplicación" como se describe arriba

## 📦 Archivos necesarios

```
Diagnostico-de-fallas/
├── index.html              # Página HTML
├── styles.css              # Estilos CSS
├── script.js               # JavaScript del cliente
├── server.js               # Servidor Node.js
├── package.json            # Dependencias de npm
├── .env                    # Variables de entorno (NO incluir en git)
├── .env.example            # Ejemplo de .env
└── README.md               # Este archivo
```

## 🔐 Seguridad

- **Nunca** compartas tu archivo `.env` con nadie
- **Nunca** hagas commit del archivo `.env` a Git
- Usa "Contraseñas de aplicación" en lugar de tu contraseña real
- Para producción, considera usar variables de entorno del servidor

## 📝 Comandos útiles

```powershell
# Instalar dependencias
npm install

# Iniciar servidor
npm start

# Detener servidor
Ctrl+C

# Ver versión de Node.js
node --version

# Ver versión de npm
npm --version
```

## 🎯 Próximos pasos

- Configura un dominio personalizado
- Despliega en un servidor en la nube (Heroku, AWS, etc.)
- Agrega más campos al formulario
- Configura respuestas automáticas
- Añade validación más robusta

## 💬 Soporte

Si tienes problemas:
1. Revisa los logs en la consola del servidor
2. Verifica la configuración de Gmail
3. Asegúrate de tener las últimas versiones de Node.js
4. Prueba con un correo diferente

---

**¡Tu sistema de contacto está listo! 🎉**
