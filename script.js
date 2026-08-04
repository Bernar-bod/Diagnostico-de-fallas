let opcionSeleccionada = null;
let categoriaActual = 'todos';

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

function filtrarCategoria(categoria, evt) {
  categoriaActual = categoria;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (evt && evt.target) evt.target.classList.add('active');
  document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
  if (evt && evt.target && evt.target.classList.contains('sidebar-item')) {
    evt.target.classList.add('active');
  }
  renderizarOpciones();
}

function renderizarOpciones() {
  const container = document.getElementById('opcionesContainer');
  let opcionesFiltradas = diagnosticos.filter(d =>
    categoriaActual === 'todos' || d.categoria === categoriaActual
  );
  container.innerHTML = opcionesFiltradas.map(d => `
    <button class="option-btn" onclick="seleccionarOpcion(this, '${d.opcionDirecta || d.diagnostico}')">
      <span class="emoji">${
        d.opcionDirecta === "Servidor no responde" ? '🖥️' :
        d.opcionDirecta === "Error 500" ? '⚠️' :
        d.opcionDirecta === "Página no carga" ? '🌐' :
        d.opcionDirecta === "Error de conexión" ? '🔗' : '⚙️'
      }</span>
      <div class="text-content">
        <div class="text">${d.opcionDirecta || d.diagnostico}</div>
        <div class="subtext">${d.palabras ? d.palabras.slice(0, 2).join(', ') : ''}</div>
      </div>
    </button>
  `).join('');
}

function seleccionarOpcion(btn, opcion) {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  opcionSeleccionada = opcion;
  ocultarError();
}

function ocultarError() {
  document.getElementById('error-msg').style.display = 'none';
}

function diagnosticar() {
  if (!opcionSeleccionada) {
    document.getElementById('error-msg').style.display = 'block';
    const errorMsg = document.getElementById('error-msg');
    errorMsg.classList.remove('shake');
    void errorMsg.offsetWidth;
    errorMsg.classList.add('shake');
    return;
  }

  const encontrado = diagnosticos.find(d =>
    d.opcionDirecta === opcionSeleccionada || d.diagnostico === opcionSeleccionada
  );

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
    solucion.textContent = 'No pudimos identificar tu error. Usa el chat 💬 para describir tu problema con más detalle.';
  }

  document.getElementById('formulario').style.display = 'none';
  document.getElementById('resultado').classList.add('visible');
  document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
}

function volver() {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
  opcionSeleccionada = null;
  ocultarError();
  document.getElementById('formulario').style.display = 'block';
  document.getElementById('resultado').classList.remove('visible');
  document.querySelector('.card').scrollIntoView({ behavior: 'smooth' });
  renderizarOpciones();
}

function abrirModalContacto(event) {
  event.preventDefault();
  document.getElementById('contactModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function cerrarModalContacto() {
  document.getElementById('contactModal').classList.remove('show');
  document.body.style.overflow = 'auto';
  document.getElementById('contactForm').reset();
}

function toggleMenu() {
  document.getElementById('navbarMenu').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
  renderizarOpciones();
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) cerrarModalContacto();
  });
});

/* ===== CHAT WIDGET ===== */
function toggleChat() {
  const widget = document.getElementById('chatWidget');
  const icon = document.getElementById('chatBtnIcon');
  widget.classList.toggle('open');
  icon.textContent = widget.classList.contains('open') ? '✕' : '💬';
  if (widget.classList.contains('open')) {
    document.getElementById('chatInput').focus();
  }
}

function agregarMensaje(texto, tipo, claseExtra = '') {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-msg ${tipo}`;
  div.innerHTML = `<div class="chat-bubble ${claseExtra}">${texto}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function mostrarTyping() {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.id = 'typingIndicator';
  div.innerHTML = `
    <div class="chat-bubble">
      <div class="chat-typing">
        <span></span><span></span><span></span>
      </div>
    </div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function quitarTyping() {
  const typing = document.getElementById('typingIndicator');
  if (typing) typing.remove();
}

function enviarChat() {
  const input = document.getElementById('chatInput');
  const texto = input.value.trim();
  if (!texto) return;

  agregarMensaje(texto, 'user');
  input.value = '';
  mostrarTyping();

  setTimeout(() => {
    quitarTyping();
    const textoLower = texto.toLowerCase();
    const encontrado = diagnosticos.find(d =>
      (d.opcionDirecta && d.opcionDirecta.toLowerCase().includes(textoLower)) ||
      (d.diagnostico && d.diagnostico.toLowerCase().includes(textoLower)) ||
      (d.palabras && d.palabras.some(p => textoLower.includes(p)))
    );

    if (encontrado) {
      const severidadEmoji = {
        'critical': '🔴', 'high': '🟠', 'medium': '🟡', 'low': '🟢'
      };
      const emoji = severidadEmoji[encontrado.severidad] || '✅';
      agregarMensaje(`
        <div class="diag-title">${emoji} ${encontrado.diagnostico}</div>
        <div class="diag-solucion">${encontrado.solucion}</div>
      `, 'bot', 'success');
    } else {
      agregarMensaje(
        '❌ No pude identificar tu problema. Intenta describir el error con más detalle o usa el formulario principal para seleccionar una categoría.',
        'bot', 'error'
      );
    }
  }, 800);
}

document.addEventListener('click', function(e) {
  const widget = document.getElementById('chatWidget');
  const btn = document.querySelector('.chat-btn');
  if (widget && btn && !widget.contains(e.target) && !btn.contains(e.target)) {
    widget.classList.remove('open');
    document.getElementById('chatBtnIcon').textContent = '💬';
  }
});