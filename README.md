# 🔧 Diagnóstico de Fallas - Servidor

Una aplicación web interactiva y responsiva para diagnosticar problemas comunes de servidores. Interfaz moderna con Bootstrap, totalmente funcional en todos los dispositivos.

## 📋 Características

- ✨ **Interfaz moderna y atractiva** con gradientes y animaciones
- 📱 **100% Responsivo** - Funciona perfectamente en teléfonos, tablets y desktops
- 🎨 **Bootstrap 5** - Diseño profesional y consistente
- 🚀 **Separación de código** - HTML, CSS y JavaScript en archivos separados
- 🔍 **Diagnóstico inteligente** - Reconoce palabras clave para identificar errores
- ⚡ **Carga rápida** - Sin dependencias pesadas
- 📦 **Código limpio** - Fácil de mantener y personalizar

## 🗂️ Estructura del Proyecto

```
Diagnostico-de-fallas/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos personalizados
├── script.js           # Lógica de la aplicación
└── README.md           # Este archivo
```

## 🚀 Instalación y Ejecución

### Opción 1: Servidor Local Rápido (Recomendado para desarrollo)

#### En Windows (PowerShell):
```powershell
# Navegar a la carpeta del proyecto
cd "C:\ruta\a\tu\Diagnostico-de-fallas"

# Opción A: Usar Python (si está instalado)
python -m http.server 8000

# Opción B: Usar Node.js (si está instalado)
npx http-server -p 8000

# Opción C: Usar PHP (si está instalado)
php -S localhost:8000
```

Luego abre en tu navegador: `http://localhost:8000`

#### En Mac/Linux (Terminal):
```bash
# Navegar a la carpeta del proyecto
cd /ruta/a/tu/Diagnostico-de-fallas

# Opción A: Usar Python
python3 -m http.server 8000

# Opción B: Usar Node.js
npx http-server -p 8000

# Opción C: Usar PHP
php -S localhost:8000
```

Luego abre en tu navegador: `http://localhost:8000`

### Opción 2: Abrir Directamente en el Navegador

Simplemente **haz doble clic en `index.html`** o arrastra el archivo a tu navegador.

```
⚠️ Nota: Funciona localmente, pero algunos navegadores pueden restriccionar ciertos recursos
```

### Opción 3: Servidor Web Profesional (Producción)

#### Con Apache:
```bash
# Windows
# 1. Instala Apache desde https://httpd.apache.org/docs/current/platform/windows.html
# 2. Copia la carpeta Diagnostico-de-fallas en C:\Apache24\htdocs
# 3. Accede a: http://localhost/Diagnostico-de-fallas

# Mac/Linux
sudo cp -r Diagnostico-de-fallas /var/www/html/
# Accede a: http://localhost/Diagnostico-de-fallas
```

#### Con Nginx:
```bash
# Linux/Mac
sudo cp -r Diagnostico-de-fallas /usr/share/nginx/html/
# Accede a: http://localhost/Diagnostico-de-fallas
```

#### Con Visual Studio Code (Extensión Live Server):
```
1. Abre la carpeta en VS Code
2. Instala la extensión "Live Server" (Five Server)
3. Haz clic derecho en index.html
4. Selecciona "Open with Live Server"
5. Se abrirá automáticamente en tu navegador
```

## 💻 Requisitos Mínimos

- **Navegador moderno** (Chrome, Firefox, Safari, Edge - versión reciente)
- **Conexión a Internet** (para cargar Bootstrap desde CDN)
- **No requiere instalación** de software adicional

## 📱 Dispositivos Soportados

La aplicación se ve perfectamente en:
- 📱 Teléfonos (iPhone, Android) - desde 320px de ancho
- 📖 Tablets (iPad, Android Tablets) - desde 768px de ancho
- 💻 Computadoras (Desktop, Laptop) - desde 992px de ancho
- 🖥️ Pantallas grandes - hasta cualquier resolución

## 🛠️ Instalación de Dependencias (Si no tienes herramientas de servidor)

### Instalar Python:
```powershell
# Windows: Descargar desde https://www.python.org/downloads/
# Luego en PowerShell:
python --version

# Mac: Usar Homebrew
brew install python3

# Linux: Usar apt
sudo apt-get install python3
```

### Instalar Node.js:
```powershell
# Windows: Descargar desde https://nodejs.org/

# Mac: Usar Homebrew
brew install node

# Linux: Usar apt
sudo apt-get install nodejs npm
```

### Instalar PHP:
```powershell
# Windows: Descargar desde https://www.php.net/downloads.php

# Mac: Usar Homebrew
brew install php

# Linux: Usar apt
sudo apt-get install php
```

## 📝 Pasos Detallados para Otra PC

### Paso 1: Preparar los Archivos
1. Crea una carpeta llamada `Diagnostico-de-fallas`
2. Copia los siguientes archivos en esa carpeta:
   - `index.html`
   - `styles.css`
   - `script.js`

### Paso 2: Elegir Método de Ejecución

**Método Más Fácil (Abrir directamente):**
- Haz doble clic en `index.html`
- La aplicación se abrirá en tu navegador predeterminado

**Método Recomendado (Con servidor local):**

**Para Windows (PowerShell):**
```powershell
# 1. Abre PowerShell
# 2. Navega a la carpeta:
cd C:\Users\USUARIO\Desktop\Diagnostico-de-fallas

# 3. Inicia un servidor (elige uno):
# Opción A: Python
python -m http.server 8000

# Opción B: Node.js
npx http-server -p 8000

# Opción C: PHP
php -S localhost:8000

# 4. Abre en tu navegador:
# http://localhost:8000
```

**Para Mac (Terminal):**
```bash
# 1. Abre Terminal
# 2. Navega a la carpeta:
cd /ruta/a/Diagnostico-de-fallas

# 3. Inicia un servidor:
python3 -m http.server 8000

# 4. Abre en tu navegador:
# http://localhost:8000
```

**Para Linux (Terminal):**
```bash
# 1. Abre Terminal
# 2. Navega a la carpeta:
cd /ruta/a/Diagnostico-de-fallas

# 3. Inicia un servidor:
python3 -m http.server 8000

# 4. Abre en tu navegador:
# http://localhost:8000
```

## 🔧 Personalización

### Cambiar Colores

Abre `styles.css` y busca la sección `:root`:

```css
:root {
  --primary-color: #3182ce;        /* Color principal (azul) */
  --primary-dark: #2b6cb0;         /* Color más oscuro */
  --success-color: #48bb78;        /* Color de éxito (verde) */
  --error-color: #e53e3e;          /* Color de error (rojo) */
  /* ... más colores ... */
}
```

### Agregar Nuevos Diagnósticos

Abre `script.js` y encuentra el array `diagnosticos`. Agrega un nuevo objeto:

```javascript
{
  palabras: ["tu-palabra-clave", "otra-palabra"],
  diagnostico: "Título del diagnóstico",
  solucion: "Descripción detallada de la solución"
}
```

## 🌐 Acceso Remoto

### Compartir en Red Local:
```powershell
# En Windows, obtén tu IP:
ipconfig

# En otra PC de la red, accede a:
http://<tu-ip>:8000
```

### Publicar en Internet (Gratis):

**Opción 1: Usar Netlify**
1. Crea una cuenta en https://www.netlify.com/
2. Arrastra la carpeta `Diagnostico-de-fallas` a Netlify Drop
3. ¡Tu sitio estará en línea!

**Opción 2: Usar GitHub Pages**
1. Sube los archivos a un repositorio en GitHub
2. Habilita GitHub Pages en Settings
3. Tu sitio estará disponible en `https://tuusuario.github.io/Diagnostico-de-fallas`

## 📚 Recursos Útiles

- [Bootstrap 5 Documentación](https://getbootstrap.com/docs/5.3/)
- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

## 🐛 Solución de Problemas

**"No puedo ver los estilos"**
- Asegúrate de que `styles.css` esté en la misma carpeta que `index.html`
- Recarga la página (Ctrl+R o Cmd+R)

**"El script no funciona"**
- Verifica que `script.js` esté en la misma carpeta
- Abre la consola del navegador (F12) para ver errores

**"Bootstrap no se carga"**
- Verifica tu conexión a Internet
- Intenta limpiar el caché del navegador

## 📄 Licencia

Este proyecto es de código abierto y libre para usar, modificar y distribuir.

## 👨‍💻 Autor

Creado con ❤️ para facilitar el diagnóstico de problemas de servidores.

---

**¿Necesitas ayuda?** 
- Revisa el archivo `index.html` para entender la estructura
- Los comentarios en `script.js` explican cada función
- Los comentarios en `styles.css` organizan los estilos por sección

**¡Disfruta diagnosticando! 🚀**
