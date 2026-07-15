# 📚 GUÍA RÁPIDA - PROYECTO TERMINADO

## 🎯 ¿Qué hace este sistema?

Es una **herramienta de diagnóstico de fallas web** con:
- 🔍 Búsqueda en tiempo real
- 📂 Filtrado por categorías  
- ⚠️ Sistema de severidad (Crítico, Alto, Medio, Bajo)
- 📞 Formulario de contacto con email automático
- 📱 Diseño responsivo (funciona en PC, tablet, móvil)
- 🎨 Interfaz profesional con Bootstrap 5

---

## ⚡ INICIO RÁPIDO (30 SEGUNDOS)

### Opción A: La más fácil
```powershell
cd C:\Users\USUARIO\Desktop\trabajoIA\Diagnostico-de-fallas
python -m http.server 8000
```
Abre: `http://localhost:8000`

### Opción B: Sin terminal
Haz doble clic en `index.html`

---

## 📁 ARCHIVOS DEL PROYECTO

### 🔴 PRINCIPALES (Necesarios)
| Archivo | Propósito |
|---------|----------|
| `index.html` | 🎨 Página web principal |
| `styles.css` | 🖌️ Estilos y diseño |
| `script.js` | ⚙️ Funcionamiento (buscar, filtrar, diagnosticar) |

### 📘 DOCUMENTACIÓN (Ayuda)
| Archivo | Contenido |
|---------|----------|
| `README.md` | 📖 Documentación completa |
| `COMANDOS.md` | 🚀 Todos los comandos para ejecutar |
| `CORREOS-SIMPLE.md` | 📧 Cómo usar el contacto (RECOMENDADO) |
| `CONTACTO-SETUP.md` | 🔧 Configuración avanzada con Node.js |

### 🟢 CONFIGURACIÓN (Opcionales)
| Archivo | Función |
|---------|---------|
| `.env.example` | 📋 Plantilla de configuración |
| `package.json` | 📦 Dependencias Node.js |
| `server.js` | 🖥️ Servidor Node.js (alternativo) |
| `iniciar-servidor.cmd` | ▶️ Script para Windows |
| `iniciar-servidor.sh` | ▶️ Script para Mac/Linux |

---

## 🎯 CASOS DE USO

### 📌 Solo Quieres Usar la App
**Haz esto:**
1. Copia los 3 archivos: `index.html`, `styles.css`, `script.js`
2. Abre `index.html` en navegador (doble clic)
3. ¡Listo!

✅ Diagnósticos funcionan
✅ Búsqueda funciona
❌ Los correos NO se envían (solo pantalla)

---

### 📌 Quieres Correos Automáticos (Fácil)
**Haz esto:**
1. Copia TODO el proyecto
2. Abre PowerShell/Terminal
3. Ejecuta:
```powershell
cd carpeta/del/proyecto
python -m http.server 8000
```
4. Abre `http://localhost:8000`
5. Haz clic en "Contactar" → Completa formulario → Envía

✅ Diagnósticos funcionan
✅ Búsqueda funciona
✅ Los correos se envían automáticamente
✅ Primera vez: confirma en tu email

---

### 📌 Versión Profesional con Node.js
**Requiere:**
- Instalar Node.js
- Crear archivo `.env`
- Generar contraseña de aplicación en Gmail
- Ejecutar `npm install` y `npm start`

👉 Ve a `CONTACTO-SETUP.md` para instrucciones

---

## 🚀 COMANDOS PRINCIPALES

### Windows PowerShell
```powershell
# Iniciar servidor simple
cd C:\Users\USUARIO\Desktop\trabajoIA\Diagnostico-de-fallas
python -m http.server 8000

# O con Node.js (si instalaste)
npm install
npm start

# Parar servidor
Ctrl+C
```

### Mac/Linux Terminal
```bash
# Iniciar servidor simple
cd ~/Desktop/trabajoIA/Diagnostico-de-fallas
python3 -m http.server 8000

# O con Node.js (si instalaste)
npm install
npm start

# Parar servidor
Ctrl+C
```

---

## 📧 CORREOS: FormSubmit (Servicio Gratuito)

**¿Cómo funciona?**
```
Tu navegador → Formulario → FormSubmit.io → jorbercampana@gmail.com
```

**Primera vez:**
1. Completa formulario con tu email
2. Haz clic "Enviar"
3. Recibe email de confirmación
4. Haz clic en el link
5. ¡Listo! Desde ahora todos van directamente

**Después:**
- Los correos llegan instantáneamente
- Sin configuraciones adicionales
- Completamente gratis

---

## ✨ CARACTERÍSTICAS PRINCIPALES

### 🔍 Búsqueda
- Busca problemas en tiempo real
- Palabras clave automáticas
- Resultados instantáneos

### 📂 Categorías
- **Servidor**: Problemas de servidor
- **Red**: Problemas de conexión
- **Aplicación**: Errores de aplicación

### ⚠️ Severidad
- 🔴 **CRÍTICO** (rojo) - Urgente
- 🟠 **ALTO** (naranja) - Importante
- 🟡 **MEDIO** (amarillo) - Moderado
- 🟢 **BAJO** (verde) - Menor

### 📱 Responsive
- 💻 Funciona en PC
- 📱 Funciona en móvil
- 📲 Funciona en tablet

---

## 🎨 DISEÑO

- **Bootstrap 5.3.0**: Framework de diseño profesional
- **Navbar**: Barra superior con logo y navegación
- **Sidebar**: Panel lateral con categorías
- **Búsqueda**: Input con filtrado en tiempo real
- **Modal**: Formulario de contacto elegante
- **Colores**: Esquema profesional azul/gris
- **Animaciones**: Transiciones suaves

---

## ⚙️ TECNOLOGÍAS

| Componente | Tecnología |
|-----------|-----------|
| **Frontend** | HTML5 + CSS3 + JavaScript |
| **Framework** | Bootstrap 5.3.0 (CDN) |
| **Email** | FormSubmit.io (gratis) |
| **Servidor** | Python HTTP o Node.js (opcional) |
| **Dependencias** | nodemailer (si usas Node.js) |

---

## 🆘 SOLUCIÓN RÁPIDA DE PROBLEMAS

| Problema | Solución |
|----------|----------|
| "No funciona nada" | Abre `index.html` directamente |
| "Puerto en uso" | `python -m http.server 8080` (otro puerto) |
| "Correos no se envían" | Abre CORREOS-SIMPLE.md |
| "¿Cómo cambio email?" | Modifica `action` en index.html línea ~250 |
| "¿Cómo agrego diagnósticos?" | Edita `script.js` en el array `diagnosticos` |

---

## 📞 CONTACTO

**Correos van a:** `jorbercampana@gmail.com`

**Campos del formulario:**
- Nombre (requerido)
- Email (requerido, tu contacto)
- Asunto (requerido)
- Mensaje (requerido, detalles)

---

## 🎓 ARCHIVOS A LEER SEGÚN NECESIDAD

| Necesidad | Archivo |
|-----------|---------|
| "Solo quiero abrir y usar" | Ninguno (doble clic index.html) |
| "Quiero comandos específicos" | **COMANDOS.md** |
| "No entiendo los correos" | **CORREOS-SIMPLE.md** |
| "Necesito configurar correos avanzado" | **CONTACTO-SETUP.md** |
| "Documentación completa" | **README.md** |

---

## ✅ CHECKLIST FINAL

Antes de usar:
- ✅ Tienes todos los archivos .html, .css, .js
- ✅ Puedes abrir en navegador
- ✅ Lees esta guía rápida
- ✅ Entiendes el flujo de correos

Cuando lo uses:
- ✅ Prueba diagnósticos
- ✅ Prueba búsqueda
- ✅ Prueba filtros
- ✅ Prueba formulario de contacto
- ✅ Verifica que llegue el email

---

## 🚀 PRÓXIMOS PASOS

1. **Lee** `COMANDOS.md` para ver todas las opciones
2. **Ejecuta** `python -m http.server 8000`
3. **Abre** `http://localhost:8000`
4. **Prueba** todo
5. **Disfruta** 🎉

---

**Sistema creado: Sistema profesional de diagnóstico de fallas**
**Versión: 1.0 Completa**
**Estado: ✅ Listo para producción**

*Para más detalles, ve a COMANDOS.md o CORREOS-SIMPLE.md* 📚
