document.addEventListener("DOMContentLoaded", () => {
  // ======== MENÚ Y TEMA ========
  const iconoConfiguracion = document.getElementById("iconoConfiguracion");
  const menuConfiguracion = document.getElementById("menuConfiguracion");
  const iconoUsuario = document.getElementById("iconoUsuario");
  const toggleMenuBtn = document.getElementById("toggleMenuBtn");
  const navegacionTexto = document.querySelector(".textNavegacion");
  const menusLaterales = document.querySelectorAll(".li-Menu-Izquierdo[data-vista]");

  const textosMenu = document.querySelectorAll(".contenedorTextoMenu");
  const buscadorInput = document.querySelector(".inputBuscador");
  const iconoLupa = document.querySelector(".contenedorImgBuscador i");
  const divIzquierdo1 = document.querySelector(".divIzquierdo1");
  const tituloAdmin = document.getElementById("tituloAdmin");

const seccionEjecutar = document.getElementById("seccionEjecutar");
const seccionHistorial = document.getElementById("seccionHistorial");
const menuInicial = document.querySelector('[data-vista="dashboard"]');

const selectCliente = document.getElementById("cliente");
const selectRol = document.getElementById("rol");
const selectModulo = document.getElementById("modulo");
selectCliente.disabled = false;
selectRol.disabled = true;
selectModulo.disabled = true;
 

  function aplicarTema(tema) {
    document.body.classList.remove("tema-black", "tema-blue", "tema-light");
    document.body.classList.add("tema-" + tema);
  }

  window.cambiarTema = function (tema) {
    aplicarTema(tema);
    localStorage.setItem("temaSeleccionado", tema);
  };


function activarMenu(menuSeleccionado) {
  // Eliminar clase .activo de TODOS los menús principales y submenús
  document.querySelectorAll(".ContenedorMenuLateral, .li-Menu-Izquierdo").forEach(menu => {
    menu.classList.remove("activo");
  });

  const submenuDe = menuSeleccionado.getAttribute("data-submenu");

  if (submenuDe) {
    // Activar el menú principal relacionado
    const menuPrincipal = document.querySelector(`.ContenedorMenuLateral[data-menu="${submenuDe}"]`);
    if (menuPrincipal) {
      menuPrincipal.classList.add("activo");
    }

    // También marcar el submenú (opcional)
    menuSeleccionado.classList.add("activo");
  } else {
    // Activar el menú directamente (es principal)
    menuSeleccionado.classList.add("activo");
  }

  const vista = menuSeleccionado.getAttribute("data-vista");
  const titulo = menuSeleccionado.getAttribute("data-titulo") || menuSeleccionado.textContent.trim();

  // Mostrar la sección correspondiente
  if (vista === "historialDeServicios") {
    navegacionTexto.textContent = `Ud. está en: Historial de automatizacion ${titulo}`;
    seccionHistorial.classList.replace("seccionOculta", "seccionVisible");
    seccionEjecutar.classList.replace("seccionVisible", "seccionOculta");
    document.getElementById("seccionDashboard")?.classList.replace("seccionVisible", "seccionOculta");
    cargarHistorial();
  } else if (vista === "ejecutar") {
    navegacionTexto.textContent = `Ud. está en: Ejecutar automatizacion ${titulo}`;
    seccionEjecutar.classList.replace("seccionOculta", "seccionVisible");
    seccionHistorial.classList.replace("seccionVisible", "seccionOculta");
    document.getElementById("seccionDashboard")?.classList.replace("seccionVisible", "seccionOculta");
  } else if (vista === "dashboard") {
    navegacionTexto.textContent = `Ud. está en: ${titulo}`;
    document.getElementById("seccionDashboard")?.classList.replace("seccionOculta", "seccionVisible");
    document.getElementById("seccionEjecutar")?.classList.replace("seccionVisible", "seccionOculta");
    document.getElementById("seccionHistorial")?.classList.replace("seccionVisible", "seccionOculta");
  }
}



  function filtrarMenuLateral() {
    const valor = buscadorInput.value.toLowerCase().trim();
    document.querySelectorAll('.ContenedorMenuLateralWrap').forEach(seccion => {
      let coincidenciaEnSeccion = false;
      seccion.style.display = 'none';
      const titulo = seccion.querySelector('.titulo-menu');
      if (titulo) titulo.style.display = 'none';

      const items = seccion.querySelectorAll('.li-Menu-Izquierdo');
      items.forEach(li => {
        const texto = li.querySelector('span')?.textContent.toLowerCase() || "";
        const coincide = texto.includes(valor);
        li.style.display = coincide ? 'flex' : 'none';
        if (coincide) coincidenciaEnSeccion = true;
      });

      if (coincidenciaEnSeccion) {
        seccion.style.display = 'block';
        if (titulo) titulo.style.display = 'block';
      }
    });
  }

  function restaurarMenu() {
    document.querySelectorAll('.li-Menu-Izquierdo').forEach(li => {
      li.style.display = 'flex';
    });
  }

  iconoConfiguracion?.addEventListener("click", (e) => {
    e.stopPropagation();
    menuConfiguracion.style.display =
      menuConfiguracion.style.display === "flex" ? "none" : "flex";
  });

  window.addEventListener("click", () => {
    menuConfiguracion.style.display = "none";
  });

  iconoUsuario?.addEventListener("click", () => {
    alert("se abre desplegable de usuario");
  });

  toggleMenuBtn?.addEventListener("click", () => {
    document.body.classList.toggle("menu-oculto");
    const isHidden = document.body.classList.contains("menu-oculto");

    if (toggleMenuBtn._tippy) {
      toggleMenuBtn._tippy.setContent(isHidden ? "Mostrar menú lateral" : "Ocultar menú lateral");
    }

    textosMenu.forEach(el => {
      el.style.display = isHidden ? "none" : "flex";
    });

    if (buscadorInput) {
      buscadorInput.parentElement.style.display = isHidden ? "none" : "flex";
    }

    if (tituloAdmin) {
      tituloAdmin.style.display = isHidden ? "none" : "block";
    }
  });

  menusLaterales.forEach((menu) =>
    menu.addEventListener("click", () => activarMenu(menu))
  );

  iconoLupa?.addEventListener("click", filtrarMenuLateral);

  buscadorInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") filtrarMenuLateral();
  });

  buscadorInput?.addEventListener("input", () => {
    if (buscadorInput.value.trim() === '') restaurarMenu();
  });

  const temaGuardado = localStorage.getItem("temaSeleccionado") || "blue";
  aplicarTema(temaGuardado);
  lucide.createIcons();

  document.querySelectorAll('.ContenedorMenuLateralWrap').forEach(menuItem => {
    menuItem.addEventListener('mouseenter', (e) => {
      const submenu = menuItem.querySelector('ul');
      if (submenu) {
        submenu.style.display = 'block';
        const rect = menuItem.getBoundingClientRect();
        const isMenuOculto = document.body.classList.contains('menu-oculto');
        submenu.style.left = isMenuOculto ? `${rect.right - 4}px` : `${rect.right - 15}px`;
        submenu.style.top = `${rect.top}px`;
      }
    });

    menuItem.addEventListener('mouseleave', (e) => {
      const submenu = menuItem.querySelector('ul');
      if (submenu) submenu.style.display = 'none';
    });
  });

  function marcarMenuActivo() {
    const secciones = [
      { id: '', texto: 'Tablero' },
      { id: 'administracion', texto: 'Administración' },
      { id: 'gestion', texto: 'Gestión de Trabajos' },
      { id: 'facturacion', texto: 'Facturación' },
      { id: 'recursos', texto: 'Recursos Humanos' },
      { id: 'reportes', texto: 'Reportes' }
    ];

    const menus = document.querySelectorAll('.ContenedorMenuLateral');
    menus.forEach(menu => menu.classList.remove('activo'));

    const urlActual = window.location.hash.toLowerCase();
    const seccionActiva = secciones.find(sec => urlActual.includes(sec.id));

    if (seccionActiva) {
      menus.forEach(menu => {
        const texto = menu.querySelector('.textoMenuLateral')?.textContent?.toLowerCase();
        if (texto && texto.includes(seccionActiva.texto.toLowerCase())) {
          menu.classList.add('activo');
        }
      });
    }
  }

  marcarMenuActivo();
  window.addEventListener('hashchange', marcarMenuActivo);

  tippy(toggleMenuBtn, {
    theme: 'custom-tooltip',
    placement: 'top',
    animation: 'shift-away',
    delay: [100, 50],
    content: document.body.classList.contains("menu-oculto")
      ? "Mostrar menú lateral"
      : "Ocultar menú lateral"
  });

  tippy('[data-tippy-content]', {
    theme: 'custom-tooltip',
    animation: 'shift-away',
    delay: [100, 50],
    placement: 'top',
  });

document.addEventListener("DOMContentLoaded", () => {
  cargarHistorial();
});

let filasOriginales = [];
let filasFiltradas = [];
const filasPorPagina = 15;
let paginaActual = 1;

const inputFiltro = document.getElementById("filtroTablaInput");
const cuerpoTabla = document.getElementById("tablaHistorialBody");
const paginacionAbajo = document.getElementById("paginacionTabla");
const paginacionArriba = document.getElementById("paginacionTablaArriba");

function crearFila(row) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${row.usuario}</td>
    <td>${row.cliente}</td>
    <td>${row.rol}</td>
    <td>${row.modulo}</td>
    <td>${row.fecha_inicio ? new Date(row.fecha_inicio).toLocaleString("es-AR") : "-"}</td>
    <td>${row.fecha_fin ? new Date(row.fecha_fin).toLocaleString("es-AR") : "-"}</td>
    <td>${row.estado}</td>
    <td><a href="/report/index.html" target="_blank">Ver Reporte</a></td>
  `;
  return tr;
}

function mostrarPagina(pagina) {
  paginaActual = pagina;
  const inicio = (pagina - 1) * filasPorPagina;
  const fin = inicio + filasPorPagina;

  cuerpoTabla.innerHTML = "";

  if (filasFiltradas.length === 0) {
    const filaVacia = document.createElement("tr");
    const celdaVacia = document.createElement("td");
    celdaVacia.colSpan = 8;
    celdaVacia.style.textAlign = "center";
    celdaVacia.textContent = "No hay resultados para mostrar";
    filaVacia.appendChild(celdaVacia);
    cuerpoTabla.appendChild(filaVacia);
  } else {
    filasFiltradas.slice(inicio, fin).forEach(fila => {
      const tr = crearFila(fila);
      cuerpoTabla.appendChild(tr);
    });
  }

  actualizarPaginacion();
}

function actualizarPaginacion() {
  const totalPaginas = Math.max(1, Math.ceil(filasFiltradas.length / filasPorPagina));

  const renderPag = (contenedor) => {
    contenedor.innerHTML = "";

    const btnAnterior = document.createElement("button");
    btnAnterior.innerHTML = '<i data-lucide="chevron-left"></i>';
    btnAnterior.disabled = paginaActual === 1;
    btnAnterior.onclick = () => mostrarPagina(paginaActual - 1);
    contenedor.appendChild(btnAnterior);

    const numero = document.createElement("span");
    numero.textContent = `${paginaActual} / ${totalPaginas}`;
    numero.style.fontWeight = "bold";
    numero.style.margin = "0 10px";
    contenedor.appendChild(numero);

    const btnSiguiente = document.createElement("button");
    btnSiguiente.innerHTML = '<i data-lucide="chevron-right"></i>';
    btnSiguiente.disabled = paginaActual === totalPaginas;
    btnSiguiente.onclick = () => mostrarPagina(paginaActual + 1);
    contenedor.appendChild(btnSiguiente);
  };

  renderPag(paginacionArriba);
  renderPag(paginacionAbajo);
  lucide.createIcons();
}

inputFiltro?.addEventListener("input", () => {
  const filtro = inputFiltro.value.toLowerCase().trim();

  if (filtro === "") {
    filasFiltradas = [...filasOriginales];
  } else {
    filasFiltradas = filasOriginales.filter(row => 
      row.usuario.includes(filtro) || row.cliente.includes(filtro)
    );
  }

  mostrarPagina(1);
});

async function cargarHistorial() {
  const cuerpoTabla = document.getElementById("tablaHistorialBody");
  try {
    const res = await fetch("/history");
    const data = await res.json();

    if (data.length === 0) {
      cuerpoTabla.innerHTML = '<tr><td colspan="8">Sin ejecuciones registradas.</td></tr>';
      return;
    }

    function parseModulo(modulo) {
      if (!modulo) return ["-", "-", "-"];
      if (modulo === "/") return ["/", "/", "/"];
      const partes = modulo.split("/");
      while (partes.length < 3) partes.push("-");
      return partes;
    }

    function mostrarTextoAmigable(parte, tipo) {
      if (parte === "/") {
        if (tipo === "cliente") return "Todos los clientes";
        if (tipo === "rol") return "Todos los roles";
        if (tipo === "modulo") return "Todos los módulos";
      }
      if (!parte || parte === "-") return "Todos los modulos";
      return parte;
    }

    // ✅ Convertimos los datos en objetos planos para filtrado
    filasOriginales = data.map(item => {
      const partes = parseModulo(item.modulo);
      const cliente = mostrarTextoAmigable(partes[0], "cliente");
      const rol = mostrarTextoAmigable(partes[1], "rol");
      const modulo = mostrarTextoAmigable(partes[2], "modulo");

      return {
        usuario: item.usuario.toLowerCase(),
        cliente: cliente.toLowerCase(),
        rol,
        modulo,
        fecha_inicio: item.fecha_inicio,
        fecha_fin: item.fecha_fin,
        estado: item.estado
      };
    });

    filasFiltradas = [...filasOriginales];
    mostrarPagina(1);
  } catch (error) {
    cuerpoTabla.innerHTML = '<tr><td colspan="8">⚠️ Error cargando historial.</td></tr>';
  }
}

  // aca esta el scrip del ejecutor.

if (menuInicial) activarMenu(menuInicial);

iconoUsuario?.addEventListener("click", () => alert("se abre desplegable de usuario"));


function resetSelect(select, placeholder = "-- Seleccionar --") {
  select.innerHTML = `<option value="">${placeholder}</option>`;
  select.value = "";
}

function agregarOpciones(select, opciones) {
  opciones.forEach((opcion) => {
    const opt = document.createElement("option");
    if (typeof opcion === "object") {
      opt.value = opcion.value;
      opt.textContent = opcion.label;
    } else {
      opt.value = opcion;
      opt.textContent = opcion;
    }
    select.appendChild(opt);
  });
}


selectCliente.addEventListener("change", () => {
  const valorCliente = selectCliente.value;

  selectRol.value = "";
  selectModulo.value = "";
  selectRol.disabled = true;
  selectModulo.disabled = true;
  resetSelect(selectRol, "-- Seleccionar Rol --");
  resetSelect(selectModulo, "-- Seleccionar Módulo --");

  if (valorCliente && valorCliente !== "/") {
    selectRol.disabled = false;

    if (valorCliente === "Primax peru") {
      agregarOpciones(selectRol, [{ label: "NWAdmin", value: "NWAdmin" }]);
      agregarOpciones(selectModulo, [
        { label: "Todos los modulos", value: "/" },
        { label: "flota", value: "flota" }
      ]);
    } else if (valorCliente === "Atio Lab Flota") {
      agregarOpciones(selectRol, [{ label: "NWCompany", value: "NWCompany" }]);
      agregarOpciones(selectModulo, [
        { label: "flota", value: "flota" },
        { label: "administracion", value: "administracion" }
      ]);
    } else if (valorCliente === "LAB Network") {
      agregarOpciones(selectRol, [{ label: "NWAdmin", value: "NWAdmin" }]);
      agregarOpciones(selectModulo, [
        { label: "Todos los modulos", value: "/" },
        { label: "administracion", value: "administracion" },
        { label: "flota", value: "flota" },
        { label: "liquidaciones", value: "liquidaciones" }
      ]);
    }
  }
});

selectRol.addEventListener("change", () => {
  const valorRol = selectRol.value;
  if (valorRol === "/") {
    selectModulo.value = "";
    selectModulo.disabled = true;
  } else {
    selectModulo.disabled = false;
  }
});

let isRunning = false;

window.toggleTest = async function () {
  if (!isRunning) {
    await runTest();
  } else {
    await stopTest();
  }
}

window.runTest = async function () {
  const cliente = selectCliente.value;
  const rol = selectRol.value;
  const modulo = selectModulo.value;
  const usuario = document.getElementById("usuario").value.trim();

  const btnEjecutar = document.getElementById("btnEjecutar");
  const status = document.getElementById("status");
  const reportLink = document.getElementById("reportLink");
  const progressBar = document.getElementById("progressBar");

  if (!usuario) {
    alert("Por favor ingrese el correo del ejecutor.");
    document.getElementById("usuario").style.border = "2px solid red";
    return;
  } else {
    document.getElementById("usuario").style.border = "";
  }

  if (!cliente && !selectCliente.disabled) {
    alert("Por favor selecciona un Cliente.");
    selectCliente.focus();
    return;
  }

  if (!rol && !selectRol.disabled) {
    alert("Por favor selecciona un Rol.");
    selectRol.focus();
    return;
  }

  if (!modulo && !selectModulo.disabled) {
    alert("Por favor selecciona un Módulo.");
    selectModulo.focus();
    return;
  }

  const parts = [cliente, rol, modulo].filter(val => val && val !== "/");
  const module = parts.length ? parts.join("/") : "/";

  isRunning = true;
  btnEjecutar.classList.add("btn-rojo");
  btnEjecutar.innerHTML = `Detener Test
        <i id="iconoTest" class="imgPlayStop" data-lucide="pause" alt="icono"></i>`;
  lucide.createIcons();
  btnEjecutar.disabled = false;

  status.textContent = "Ejecutando...";
  status.className = "";
  reportLink.style.display = "none";
  progressBar.style.width = "0%";

  const etapas = [
    { porcentaje: 30, mensaje: "Iniciando pruebas..." },
    { porcentaje: 60, mensaje: "Preparando reporte..." },
    { porcentaje: 90, mensaje: "Ejecutando pruebas..." },
  ];

  let etapaIndex = 0;
  const simulador = setInterval(() => {
    if (etapaIndex < etapas.length) {
      progressBar.style.width = etapas[etapaIndex].porcentaje + "%";
      status.textContent = etapas[etapaIndex].mensaje;
      etapaIndex++;
    }
  }, 1000);

  try {
    const res = await fetch("/run-tests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ module, usuario, cliente, rol, modulo }),
    });

    const data = await res.json();
    clearInterval(simulador);
    progressBar.style.width = "100%";

    if (res.ok) {
      status.textContent = data.message || "✅ Test ejecutado correctamente.";
      status.className = "success";
      reportLink.href = data.reportUrl;
      reportLink.style.display = "inline-block";
    } else {
      throw new Error(data.error || "Error ejecutando tests");
    }
  } catch (err) {
    clearInterval(simulador);
    progressBar.style.width = "100%";
    status.textContent = "❌ " + err.message;
    status.className = "error";
  } finally {
    isRunning = false;
    btnEjecutar.classList.remove("btn-rojo");
    btnEjecutar.innerHTML = `Ejecutar Test
          <i id="iconoTest" class="imgPlayStop" data-lucide="play" alt="icono"></i>`;
    lucide.createIcons();
    btnEjecutar.disabled = false;

    document.getElementById("usuario").value = "";
    selectCliente.value = "";
    selectRol.value = "";
    selectModulo.value = "";

    selectRol.disabled = true;
    selectModulo.disabled = true;
  }
}

window.stopTest = async function () {
  const btnEjecutar = document.getElementById("btnEjecutar");
  const status = document.getElementById("status");
  const progressBar = document.getElementById("progressBar");

  try {
    const res = await fetch("/stop-tests", { method: "POST" });
    if (res.ok) {
      status.textContent = "⏹️ Ejecución detenida.";
    } else {
      status.textContent = "Error al detener ejecución.";
    }
  } catch (error) {
    status.textContent = "Error al detener ejecución.";
  } finally {
    isRunning = false;
    btnEjecutar.classList.remove("btn-rojo");
    btnEjecutar.innerHTML = `Ejecutar Test
          <i id="iconoTest" class="imgPlayStop" data-lucide="play" alt="icono"></i>`;
    lucide.createIcons();
    progressBar.style.width = "0%";
  }
}

const socket = io();
socket.on("test-progress", (data) => {
  const status = document.getElementById("status");
  const progressBar = document.getElementById("progressBar");

  const match = data.match(/\[(\d+)\/(\d+)\]/);
  if (match) {
    const current = parseInt(match[1]);
    const total = parseInt(match[2]);
    const percent = Math.round((current / total) * 100);
    progressBar.style.width = percent + "%";
    status.textContent = `Progreso: ${current} de ${total}`;
  } else {
    status.textContent = data;
  }
});

async function cargarHistorial() {
  const cuerpoTabla = document.getElementById("tablaHistorialBody");
  try {
    const res = await fetch("/history");
    const data = await res.json();

    if (data.length === 0) {
      cuerpoTabla.innerHTML = '<tr><td colspan="8">Sin ejecuciones registradas.</td></tr>';
      return;
    }

    function parseModulo(modulo) {
      if (!modulo) return ["-", "-", "-"];
      if (modulo === "/") return ["/", "/", "/"];
      const partes = modulo.split("/");
      while (partes.length < 3) partes.push("-");
      return partes;
    }

    function mostrarTextoAmigable(parte, tipo) {
      if (parte === "/") {
        if (tipo === "cliente") return "Todos los clientes";
        if (tipo === "rol") return "Todos los roles";
        if (tipo === "modulo") return "Todos los módulos";
      }
      if (!parte || parte === "-") return "Todos los modulos";
      return parte;
    }

    cuerpoTabla.innerHTML = "";

    data.forEach((item) => {
      const partes = parseModulo(item.modulo);
      const cliente = mostrarTextoAmigable(partes[0], "cliente");
      const rol = mostrarTextoAmigable(partes[1], "rol");
      const modulo = mostrarTextoAmigable(partes[2], "modulo");

      const fila = document.createElement("tr");
      fila.innerHTML = `
            <td>${item.usuario}</td>
            <td>${cliente}</td>
            <td>${rol}</td>
            <td>${modulo}</td>
            <td>${new Date(item.fecha_inicio).toLocaleString("es-AR")}</td>
            <td>${item.fecha_fin ? new Date(item.fecha_fin).toLocaleString("es-AR") : "-"}</td>
            <td>${item.estado}</td>
            <td><a href="/report/index.html" target="_blank" class="report-link">Ver Reporte</a></td>
          `;
      cuerpoTabla.appendChild(fila);
    });
  } catch (error) {
    cuerpoTabla.innerHTML = '<tr><td colspan="8">⚠️ Error cargando historial.</td></tr>';
  }
}
});

