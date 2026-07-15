// Variable que guarda qué botón eligió el usuario
let opcionSeleccionada = null;
let categoriaActual = 'todos';

// Base de datos de diagnósticos con palabras clave y categoría
const diagnosticos = [
  {
    categoria: 'servidor',
    opcionDirecta: "Servidor no responde",
    palabras: ["no responde al ping", "sin conexion", "no conecta", "apagado", "no enciende"],
    diagnostico: "Servidor apagado o sin conexión",
    severidad: 'critical',
    solucion: "El servidor no responde al ping ni está encendido. Enciéndelo y verifica la conexión física de red. Asegúrate de que el cable de red esté conectado y que el servidor esté alimentado."
  },
  {
    categoria: 'aplicacion',
    opcionDirecta: "Error 500",
    palabras: ["500", "error interno", "internal server error"],
    diagnostico: "Error interno del servidor (500)",
    severidad: 'high',
    solucion: "El servidor y el servicio web funcionan, pero la aplicación está fallando internamente. Revisa los logs del backend para identificar el error exacto. Intenta reiniciar el servicio web."
  },
  {
    categoria: 'aplicacion',
    opcionDirecta: "Página no carga",
    palabras: ["no carga", "timeout", "tarda mucho", "lento", "pantalla en blanco"],
    diagnostico: "Tiempo de espera agotado o pantalla en blanco",
    severidad: 'high',
    solucion: "El servidor está tardando demasiado en responder o hay un error en el código. Revisa la carga del servidor, los logs de errores y considera aumentar el timeout de conexión."
  },
  {
    categoria: 'red',
    opcionDirecta: "Error de conexión",
    palabras: ["firewall", "bloqueado", "encendido pero no responde"],
    diagnostico: "Problema de red o firewall",
    severidad: 'high',
    solucion: "El servidor está encendido pero no responde. Revisa las reglas del firewall y la configuración de red. Asegúrate de que el puerto esté abierto."
  },
  {
    categoria: 'servidor',
    palabras: ["servicio caido", "apache caido", "nginx caido", "servicio no funciona"],
    diagnostico: "Servicio web caído",
    severidad: 'high',
    solucion: "El servidor responde a la red, pero el servicio web no está activo. Reinicia el servicio (nginx/apache) y revisa que esté escuchando en el puerto correcto."
  },
  {
    categoria: 'red',
    palabras: ["dns", "no resuelve el dominio", "configuracion del dominio"],
    diagnostico: "Error de configuración o DNS",
    severidad: 'medium',
    solucion: "Hay un problema de configuración o DNS. Revisa el archivo de hosts, los registros DNS y la configuración del dominio. Intenta hacer flush del DNS."
  },
  {
    categoria: 'aplicacion',
    palabras: ["404", "no encontrada", "no encontrado", "pagina no existe"],
    diagnostico: "Página no encontrada (404)",
    severidad: 'low',
    solucion: "La URL solicitada no existe en el servidor. Verifica que la ruta esté escrita correctamente y que el archivo no haya sido movido o eliminado."
  },
  {
    categoria: 'servidor',
    palabras: ["ssl", "certificado", "no seguro", "conexion no privada"],
    diagnostico: "Error de certificado SSL",
    severidad: 'medium',
    solucion: "El certificado de seguridad del sitio está vencido o mal configurado. Verifica su fecha de expiración e instalación. Considera renovar el certificado si es necesario."
  },
  {
    categoria: 'aplicacion',
    palabras: ["base de datos", "mysql", "sql", "conexion a la base", "database", "db"],
    diagnostico: "Error de base de datos",
    severidad: 'high',
    solucion: "Hay un problema de conexión o consulta con la base de datos. Revisa las credenciales de conexión y el estado del servicio. Verifica que el puerto esté correcto."
  }
];

/**
 * Filtra opciones por categoría
 * @param {string} categoria - La categoría a filtrar
 */
function filtrarCategoria(categoria, evt) {
  categoriaActual = categoria;

  // Actualizar botones de tabs
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (evt && evt.target) {
    evt.target.classList.add('active');
  } else {
    // fallback: marcar el tab correspondiente
    const tab = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.textContent.trim().toLowerCase() === categoria);
    if (tab) tab.classList.add('active');
  }

  // Actualizar sidebar
  document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
  if (evt && evt.target && evt.target.classList.contains('sidebar-item')) {
    evt.target.classList.add('active');
  } else {
    const sidebarItem = Array.from(document.querySelectorAll('.sidebar-item')).find(el => el.textContent.includes(categoria));
    if (sidebarItem) sidebarItem.classList.add('active');
  }

  renderizarOpciones();
}


/**
 * Busca problemas en la lista
 */
function buscarProblema() {
  renderizarOpciones();
}

/**
 * Renderiza las opciones según la categoría y búsqueda
 */
function renderizarOpciones() {
  const busqueda = document.getElementById('busqueda').value.toLowerCase();
  const container = document.getElementById('opcionesContainer');
  
  // Filtrar diagnósticos
  let opcionesFiltradas = diagnosticos.filter(d => {
    const cumpleCategoria = categoriaActual === 'todos' || d.categoria === categoriaActual;
    const cumpleBusqueda = !busqueda || 
      (d.diagnostico && d.diagnostico.toLowerCase().includes(busqueda)) ||
      (d.palabras && d.palabras.some(p => p.toLowerCase().includes(busqueda)));
    return cumpleCategoria && cumpleBusqueda;
  });

  // Renderizar botones
  container.innerHTML = opcionesFiltradas.map(d => `
    <button class="option-btn" onclick="seleccionarOpcion(this, '${d.opcionDirecta || d.diagnostico}')">
      <span class="emoji">${d.opcionDirecta === "Servidor no responde" ? '🖥️' : 
                           d.opcionDirecta === "Error 500" ? '⚠️' : 
                           d.opcionDirecta === "Página no carga" ? '🌐' : 
                           d.opcionDirecta === "Error de conexión" ? '🔗' : '⚙️'}</span>
      <div class="text-content">
        <div class="text">${d.opcionDirecta || d.diagnostico}</div>
        <div class="subtext">${d.palabras ? d.palabras.slice(0, 2).join(', ') : 'Diagnóstico personalizado'}</div>
      </div>
    </button>
  `).join('');
}

/**
 * Se ejecuta cuando el usuario clickea uno de los botones de opciones rápidas
 * @param {HTMLElement} btn - El botón que fue clickeado
 * @param {string} opcion - La opción seleccionada
 */
function seleccionarOpcion(btn, opcion) {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  opcionSeleccionada = opcion;
  document.getElementById('texto').value = '';
  ocultarError();
}

/**
 * Se ejecuta cuando el usuario escribe en el campo de texto
 */
function limpiarSeleccion() {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
  opcionSeleccionada = null;
  ocultarError();
}

/**
 * Oculta el mensaje de error
 */
function ocultarError() {
  document.getElementById('error-msg').style.display = 'none';
}

/**
 * Se ejecuta cuando el usuario hace clic en "Obtener diagnóstico"
 */
function diagnosticar() {
  const texto = document.getElementById('texto').value.trim().toLowerCase();

  if (!opcionSeleccionada && !texto) {
    document.getElementById('error-msg').style.display = 'block';
    const errorMsg = document.getElementById('error-msg');
    errorMsg.classList.remove('shake');
    void errorMsg.offsetWidth;
    errorMsg.classList.add('shake');
    return;
  }

  let encontrado = null;

  if (opcionSeleccionada) {
    encontrado = diagnosticos.find(d => 
      d.opcionDirecta === opcionSeleccionada || d.diagnostico === opcionSeleccionada
    );
  }

  if (!encontrado && texto) {
    encontrado = diagnosticos.find(d =>
      d.palabras.some(p => texto.includes(p))
    );
  }

  const badge = document.getElementById('resultado-badge');
  const titulo = document.getElementById('resultado-titulo');
  const solucion = document.getElementById('resultado-solucion');

  if (encontrado) {
    const severidadTexto = {
      'critical': '🔴 Crítico',
      'high': '🟠 Alto',
      'medium': '🟡 Medio',
      'low': '🟢 Bajo'
    };
    
    badge.textContent = '✅ ' + (severidadTexto[encontrado.severidad] || 'Diagnóstico encontrado');
    badge.className = 'severity-badge found ' + encontrado.severidad;
    titulo.textContent = encontrado.diagnostico;
    solucion.textContent = encontrado.solucion;
  } else {
    badge.textContent = '❌ No identificado';
    badge.className = 'severity-badge not-found';
    titulo.textContent = 'Error no identificado automáticamente';
    solucion.textContent = 'No pudimos identificar tu error con las palabras clave registradas. Intenta describir el problema con más detalle o contacta a un técnico.';
  }

  document.getElementById('formulario').style.display = 'none';
  document.getElementById('resultado').classList.add('visible');
  
  // Scroll al resultado
  document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Se ejecuta cuando el usuario hace clic en "Hacer otro diagnóstico"
 */
function volver() {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
  opcionSeleccionada = null;
  document.getElementById('texto').value = '';
  document.getElementById('busqueda').value = '';
  ocultarError();
  document.getElementById('formulario').style.display = 'block';
  document.getElementById('resultado').classList.remove('visible');
  
  // Scroll al formulario
  document.querySelector('.card').scrollIntoView({ behavior: 'smooth' });
  
  renderizarOpciones();
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
  renderizarOpciones();
  
  const textarea = document.getElementById('texto');
  if (textarea) {
    textarea.addEventListener('keypress', function(event) {
      if (event.key === 'Enter' && event.ctrlKey) {
        diagnosticar();
      }
    });
  }
  
  // Inicializar EmailJS
  inicializarEmailJS();
  
  // Cerrar modal al hacer clic fuera
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
      cerrarModalContacto();
    }
  });
});

/**
 * Inicializa EmailJS con la configuración necesaria
 */
function inicializarEmailJS() {
  // Este servidor no requiere inicialización
  console.log('✅ Sistema de contacto inicializado');
}

/**
 * Abre el modal de contacto
 * @param {Event} event - El evento del click
 */
function abrirModalContacto(event) {
  event.preventDefault();
  const modal = document.getElementById('contactModal');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal de contacto
 */
function cerrarModalContacto() {
  const modal = document.getElementById('contactModal');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
  document.getElementById('contactForm').reset();
  document.getElementById('formMessage').style.display = 'none';
}

/**
 * Envía el correo de contacto
 * @param {Event} event - El evento del formulario
 */
// FormSubmit maneja todo automáticamente: validación, envío, confirmación
// No se requiere código JavaScript adicional para el envío

/**
 * Muestra un mensaje en el formulario
 * @param {HTMLElement} element - Elemento donde mostrar el mensaje
 * @param {string} texto - Texto del mensaje
 * @param {string} tipo - Tipo de mensaje (success, error, loading)
 */
function mostrarMensaje(element, texto, tipo) {
  element.textContent = texto;
  element.className = 'form-message ' + tipo;
  element.style.display = 'block';
}
