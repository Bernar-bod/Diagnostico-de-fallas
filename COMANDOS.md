# 🚀 COMANDOS PARA EJECUTAR EN OTRA PC

## Sistema de Diagnóstico de Fallas con Contacto por Email

---

## 📋 OPCIÓN 1: La Más Fácil (Recomendada)

### Sin instalar nada, solo abre:

**Windows:**
```powershell
cd C:\Users\USUARIO\Desktop\trabajoIA\Diagnostico-de-fallas
python -m http.server 8000
```

**Mac/Linux:**
```bash
cd ~/Desktop/trabajoIA/Diagnostico-de-fallas
python3 -m http.server 8000
```

Luego abre en tu navegador:
```
http://localhost:8000
```

✨ **Características:**
- ✅ Sin configuraciones
- ✅ Los correos se envían automáticamente
- ✅ Funciona con FormSubmit (servicio gratuito)
- ✅ Primera vez: confirma por email
- ✅ Listo para usar

---

## 📋 OPCIÓN 2: Alternativa Rápida

Solo haz doble clic en `index.html` (no necesitas servidor)

---

## 📋 OPCIÓN 3: Si Quieres Usar Node.js (Avanzado)

### Paso 1: Instalar Node.js

Descarga desde: https://nodejs.org/

### Paso 2: Instalar dependencias

```powershell
cd C:\Users\USUARIO\Desktop\trabajoIA\Diagnostico-de-fallas
npm install
```

### Paso 3: Configurar correo

1. Crea archivo `.env` con:
```
EMAIL_USER=jorbercampana@gmail.com
EMAIL_PASS=tu-contraseña-app-16-caracteres
PORT=3000
```

2. Para obtener `EMAIL_PASS`:
   - Ve a: https://myaccount.google.com/security
   - Activa "Verificación en dos pasos"
   - Ve a: https://myaccount.google.com/apppasswords
   - Genera contraseña para Mail/Windows
   - Copia los 16 caracteres

### Paso 4: Iniciar servidor

```powershell
npm start
```

Abre: `http://localhost:3000`

---

## 📊 Comparación de Opciones

| Característica | Opción 1 | Opción 2 | Opción 3 |
|---|---|---|---|
| **Facilidad** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Instalaciones** | Python | Ninguna | Node.js |
| **Configuraciones** | 0 | 0 | 3+ pasos |
| **Correos automáticos** | ✅ | ✅ | ✅ |
| **Velocidad setup** | 30 seg | 5 seg | 15+ min |
| **Mejor para** | Principiantes | Máxima velocidad | Profesionales |

---

## 🎯 Paso a Paso OPCIÓN 1 (La Recomendada)

### En Windows PowerShell:

```powershell
# 1. Navega a la carpeta del proyecto
cd C:\Users\USUARIO\Desktop\trabajoIA\Diagnostico-de-fallas

# 2. Inicia el servidor (espera 2-3 segundos)
python -m http.server 8000

# 3. Abre navegador en:
# http://localhost:8000

# 4. Haz pruebas
# - Prueba diagnósticos
# - Haz clic en "Contactar"
# - Completa el formulario
# - Envía un mensaje
# - Confirma en tu email
# - ¡Verás el correo en jorbercampana@gmail.com!

# 5. Para detener el servidor:
# Presiona Ctrl+C
```

### En Mac/Linux Terminal:

```bash
# 1. Navega a la carpeta del proyecto
cd ~/Desktop/trabajoIA/Diagnostico-de-fallas

# 2. Inicia el servidor
python3 -m http.server 8000

# 3. Abre navegador en:
# http://localhost:8000

# 4. Igual que arriba...

# 5. Para detener:
# Presiona Ctrl+C
```

---

## 🔐 Primeras Pruebas

### Cuando uses FormSubmit por primera vez:

1. **Completa el formulario** con:
   - Nombre: Tu nombre
   - Correo: Un email válido
   - Asunto: Prueba del sistema
   - Mensaje: Hola, prueba del sistema

2. **Haz clic en "Enviar Mensaje"**

3. **Revisa tu email** (el que pusiste en el campo Correo)
   - Recibirás un email de confirmación
   - Haz clic en el link dentro del email

4. **Después de confirmar**, todos los correos irán directamente a `jorbercampana@gmail.com`

---

## ✅ Indicadores de que Funciona

- ✅ Puedes diagnosticar problemas
- ✅ El modal de contacto se abre
- ✅ El formulario acepta datos
- ✅ Ves mensaje "Enviado" o confirmación
- ✅ El correo llega a la bandeja

---

## ⚠️ Solución de Problemas

### "Port already in use"
```powershell
# Usa otro puerto
python -m http.server 8080
# Abre: http://localhost:8080
```

### "No funciona el diagnóstico"
- Recarga la página (F5)
- Limpia caché (Ctrl+Shift+Del)
- Intenta en otro navegador

### "El correo no se envía"
- Revisa conexión a internet
- Primera vez: confirma en tu email
- Espera 5 minutos si es lenta la conexión

### "¿Cómo cambio a otro puerto?"
```powershell
python -m http.server PUERTO
# Ejemplo para puerto 3000:
python -m http.server 3000
```

---

## 📦 Archivos del Proyecto

```
Diagnostico-de-fallas/
├── index.html                 # Página principal (abrir esto)
├── styles.css                 # Estilos y diseño
├── script.js                  # Lógica y funcionamiento
├── package.json               # Dependencias Node.js (opcional)
├── server.js                  # Servidor Node.js (opcional)
├── .env.example               # Ejemplo configuración (opcional)
├── README.md                  # Documentación completa
├── COMANDOS.md                # Este archivo
├── CORREOS-SIMPLE.md          # Guía de contacto simplificada
└── CONTACTO-SETUP.md          # Guía Node.js (avanzado)
```

---

## 🎉 ¡Resumen Final!

**Para usar en otra PC:**

1. **Opción rápida**: Copia `index.html`, `styles.css`, `script.js` → Abre index.html
2. **Opción recomendada**: Copia TODO → Ejecuta `python -m http.server 8000`
3. **Opción profesional**: Instala Node.js → Sigue CONTACTO-SETUP.md

**Los correos van a:** `jorbercampana@gmail.com`

**Servidor por defecto:** `http://localhost:8000`

**Todo funciona:** ✅ Diagnósticos, ✅ Búsqueda, ✅ Filtros, ✅ Contacto con email

---

**¿Preguntas? Revisa los archivos README.md, CORREOS-SIMPLE.md, o CONTACTO-SETUP.md**

🚀 **¡A disfrutar del sistema!**
