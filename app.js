const seedData = {
  sedes: [
    "Aabb Curitiba",
    "AABB MARINGÁ",
    "Academia Pereira Tennis",
    "AFMM - Associação dos Funcionários Municipais de Maringá",
    "Alphaville Graciosa Clube",
    "APT",
    "Arena GoBeach",
    "Arena Grécia Tennis",
    "Arena Julião",
    "Arena Pé Vermelho",
    "Arena Tennistorm",
    "Associação atlética comercial",
    "ATC Bronoski",
    "ATM ACADEMIA DE TENIS MARINGÁ",
    "ATP Academia de tennis palotina",
    "By tennis",
    "Cascavel Country Club",
    "CCM",
    "Cesão tênis club",
    "CHÁCARA BERCKEMBROCK CLUBE DE TÊNIS",
    "Cianorte Clube",
    "Circulo Militar do Paraná",
    "Clube 3 Marias",
    "Clube Curitibano",
    "Clube dos 30 Marialva",
    "Clube Duque de Caxias",
    "Clube Ponta Lagoa",
    "Clube social recreativo 10 de outubro",
    "COM - Clube Olímpico de Maringá",
    "Country Club de Apucarana CCAP",
    "Country Club de Cornélio Procópio",
    "CURITIBA TENNIS CENTER",
    "DRTT",
    "Eagle Sports Center",
    "Ecoplay",
    "Ecotenis CWB",
    "Ecotênis Iguaçu",
    "Eco Prime",
    "EUROGARDEN ARENA",
    "FICC",
    "FLOW TENNIS PERFORMANCE",
    "Full Tennis",
    "GJ Tênis Clube",
    "Gp tênis",
    "Graciosa Country Club",
    "GTCC / Goioerê Tênis Clube De Campo",
    "Guaíra Country Clube",
    "Harmonia Clube de Campo",
    "HBA",
    "HÍPICO TENNIS CLUB MARINGÁ",
    "IATE CLUBE LONDRINA",
    "IIDM",
    "LCC - Londrina Country Club",
    "M3G Academia de Tênis",
    "Maringá clube",
    "MERCÊS TÊNIS CLUBE",
    "MONET",
    "Nerone",
    "Ninho",
    "Place Sports",
    "PORTO RICO RESORT RESIDENCE",
    "RACKETPARK",
    "RONDON TENIS CLUBE",
    "Santa Mônica clube de campo",
    "Souza racquet club",
    "STAR BEACH",
    "TNS CLUBE",
    "TOSS",
    "TUIUTI ESPORTE CLUBE",
    "Umuarama Country Clube",
    "Yara Country Clube",
  ],
  arbitros: [
    { nome: "JULIO NASCIMENTO", sede: "AABB MARINGÁ" },
    { nome: "HELDER LUDWIG", sede: "AFMM - Associação dos Funcionários Municipais de Maringá" },
    { nome: "RODRIGO DARINI", sede: "Clube dos 30 Marialva" },
    { nome: "PIETRO FELIX", sede: "CCM" },
    { nome: "PHELIPE CONSULO", sede: "COM - Clube Olímpico de Maringá" },
    { nome: "EDERSON SOUZA", sede: "Eco Prime" },
    { nome: "ANTONIO MARCOS SILVA", sede: "EUROGARDEN ARENA" },
    { nome: "THIAGO KULLMAN", sede: "FLOW TENNIS PERFORMANCE" },
    { nome: "THIAGO GRISALT", sede: "ATM ACADEMIA DE TENIS MARINGÁ" },
    { nome: "MATHEUS SOUZA", sede: "Nerone" },
    { nome: "RICARDO DAINEZI", sede: "GJ Tênis Clube" },
    { nome: "HELENA", sede: "Arena GoBeach" },
    { nome: "LEANDRO MORAIS", sede: "HÍPICO TENNIS CLUB MARINGÁ" },
    { nome: "MARCELO PORTIOLI", sede: "Maringá clube" },
    { nome: "DANIEL COTRIN", sede: "MONET" },
    { nome: "ROGER", sede: "RACKETPARK" },
    { nome: "LAERCIO GUIMARAES", sede: "Arena Tennistorm" },
    { nome: "GERSON CARDOSO", sede: "TNS CLUBE" },
    { nome: "MARCUS DIAS", sede: "TOSS" },
  ],
};

const STORAGE_KEYS = {
  quadreiros: "quadreiros-app-data",
  registros: "registros-app-data",
};

const registroForm = document.querySelector("#registro-form");
const arbitroSelect = document.querySelector("#arbitro-select");
const registroSede = document.querySelector("#registro-sede");
const quadreiroSelect = document.querySelector("#quadreiro-select");
const horaInput = document.querySelector("#hora-input");
const quantidadeInput = document.querySelector("#quantidade-input");
const quadreiroForm = document.querySelector("#quadreiro-form");
const quadreiroNome = document.querySelector("#quadreiro-nome");
const quadreiroPix = document.querySelector("#quadreiro-pix");
const quadreiroObservacoes = document.querySelector("#quadreiro-observacoes");
const quadreiroSede = document.querySelector("#quadreiro-sede");
const registrosBody = document.querySelector("#registros-body");
const registrosSection = document.querySelector("#registros-section");
const registrosTitle = document.querySelector("#registros-title");
const lancamentoView = document.querySelector("#lancamento-view");
const registrosView = document.querySelector("#registros-view");
const quadreirosView = document.querySelector("#quadreiros-view");
const showLancamentoButton = document.querySelector("#show-lancamento");
const showRegistrosButton = document.querySelector("#show-registros");
const showQuadreirosButton = document.querySelector("#show-quadreiros");
const filtroSede = document.querySelector("#filtro-sede");
const filtroQuadreiro = document.querySelector("#filtro-quadreiro");
const painelRegistrosBody = document.querySelector("#painel-registros-body");
const totalizadorQuadras = document.querySelector("#totalizador-quadras");
const quadreirosBody = document.querySelector("#quadreiros-body");
const openRegisterQuadreiroButton = document.querySelector("#open-register-quadreiro");
const quadreiroModal = document.querySelector("#quadreiro-modal");
const quadreiroModalOverlay = document.querySelector("#quadreiro-modal-overlay");
const closeQuadreiroModalButton = document.querySelector("#close-quadreiro-modal");
const modalTitle = document.querySelector("#modal-title");
const saveQuadreiroButton = document.querySelector("#save-quadreiro-button");

let quadreiros = normalizeQuadreiros(loadStoredData(STORAGE_KEYS.quadreiros, [
  {
    nome: "Quadreiro Exemplo",
    pix: "exemplo@pix.com",
    observacoes: "Substitua por dados reais.",
    sede: "AABB MARINGÁ",
  },
]));

let registros = loadStoredData(STORAGE_KEYS.registros, []);
let editingQuadreiroId = null;

function loadStoredData(key, fallbackValue) {
  const rawValue = localStorage.getItem(key);

  if (!rawValue) {
    return fallbackValue;
  }

  try {
    const parsed = JSON.parse(rawValue);
    return Array.isArray(parsed) ? parsed : fallbackValue;
  } catch (error) {
    return fallbackValue;
  }
}

function saveStoredData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function createQuadreiroId() {
  return `quadreiro-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeQuadreiros(items) {
  return items.map((quadreiro) => ({
    ...quadreiro,
    id: quadreiro.id || createQuadreiroId(),
    pix: quadreiro.pix || "",
    observacoes: quadreiro.observacoes || "",
  }));
}

function renderSelectOptions(selectElement, items, placeholder) {
  selectElement.innerHTML = "";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = placeholder;
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  selectElement.appendChild(placeholderOption);

  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    selectElement.appendChild(option);
  });
}

function fillStaticSelects() {
  renderSelectOptions(
    arbitroSelect,
    seedData.arbitros.map((arbitro) => arbitro.nome),
    "Selecione um arbitro",
  );

  renderSelectOptions(
    quadreiroSede,
    seedData.sedes,
    "Selecione um clube sede",
  );

  fillFiltroSede();
  fillFiltroQuadreiro();
}

function getArbitroByName(nome) {
  return seedData.arbitros.find((arbitro) => arbitro.nome === nome);
}

function updateQuadreirosDisponiveis() {
  const arbitro = getArbitroByName(arbitroSelect.value);
  const sede = arbitro ? arbitro.sede : "";
  registroSede.textContent = sede || "Selecione um arbitro";

  const disponiveis = quadreiros.filter((quadreiro) => quadreiro.sede === sede);

  quadreiroSelect.innerHTML = "";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = disponiveis.length
    ? "Selecione um quadreiro"
    : "Nenhum quadreiro disponivel nessa sede";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  quadreiroSelect.appendChild(placeholderOption);

  disponiveis.forEach((quadreiro) => {
    const option = document.createElement("option");
    option.value = quadreiro.nome;
    option.textContent = quadreiro.nome;
    quadreiroSelect.appendChild(option);
  });

  renderRegistros();
}

function fillFiltroSede() {
  if (!filtroSede) {
    return;
  }

  const sedesUnicas = [...new Set(registros.map((registro) => registro.sede))].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );

  filtroSede.innerHTML = `<option value="">Todas as sedes</option>`;

  sedesUnicas.forEach((sede) => {
    const option = document.createElement("option");
    option.value = sede;
    option.textContent = sede;
    filtroSede.appendChild(option);
  });
}

function fillFiltroQuadreiro() {
  if (!filtroQuadreiro) {
    return;
  }

  const quadreirosUnicos = [...new Set(registros.map((registro) => registro.quadreiro))].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );

  filtroQuadreiro.innerHTML = `<option value="">Todos os quadreiros</option>`;

  quadreirosUnicos.forEach((nome) => {
    const option = document.createElement("option");
    option.value = nome;
    option.textContent = nome;
    filtroQuadreiro.appendChild(option);
  });
}

function openQuadreiroModal() {
  const arbitro = getArbitroByName(arbitroSelect.value);
  editingQuadreiroId = null;

  if (arbitro) {
    quadreiroSede.value = arbitro.sede;
  }

  if (modalTitle) {
    modalTitle.textContent = "Novo Quadreiro";
  }

  if (saveQuadreiroButton) {
    saveQuadreiroButton.textContent = "Cadastrar quadreiro";
  }

  quadreiroModal.classList.remove("hidden");
  quadreiroModal.setAttribute("aria-hidden", "false");
  quadreiroNome.focus();
}

function closeQuadreiroModal() {
  quadreiroModal.classList.add("hidden");
  quadreiroModal.setAttribute("aria-hidden", "true");
  quadreiroForm.reset();
  editingQuadreiroId = null;
}

function openEditQuadreiroModal(quadreiroId) {
  const quadreiro = quadreiros.find((item) => item.id === quadreiroId);

  if (!quadreiro) {
    return;
  }

  editingQuadreiroId = quadreiro.id;
  quadreiroNome.value = quadreiro.nome;
  quadreiroPix.value = quadreiro.pix;
  quadreiroObservacoes.value = quadreiro.observacoes;
  quadreiroSede.value = quadreiro.sede;

  if (modalTitle) {
    modalTitle.textContent = "Editar Quadreiro";
  }

  if (saveQuadreiroButton) {
    saveQuadreiroButton.textContent = "Salvar alterações";
  }

  quadreiroModal.classList.remove("hidden");
  quadreiroModal.setAttribute("aria-hidden", "false");
  quadreiroNome.focus();
}

function renderRegistros() {
  const arbitro = getArbitroByName(arbitroSelect.value);

  if (!arbitro) {
    if (registrosSection) {
      registrosSection.classList.add("hidden-section");
    }

    if (registrosBody) {
      registrosBody.innerHTML = "";
    }

    return;
  }

  if (registrosSection) {
    registrosSection.classList.remove("hidden-section");
  }

  if (registrosTitle) {
    registrosTitle.textContent = `Registros recentes - ${arbitro.sede}`;
  }

  const registrosFiltrados = registros.filter((registro) => registro.sede === arbitro.sede);

  if (!registrosBody) {
    return;
  }

  if (!registrosFiltrados.length) {
    registrosBody.innerHTML = `
      <tr>
        <td class="empty-state" colspan="5">Nenhum registro lancado para essa sede ainda.</td>
      </tr>
    `;
    return;
  }

  registrosBody.innerHTML = registrosFiltrados
    .slice()
    .reverse()
    .map(
      (registro) => `
        <tr>
          <td>${registro.arbitro}</td>
          <td>${registro.sede}</td>
          <td>${registro.quadreiro}</td>
          <td>${registro.hora}</td>
          <td>${registro.quantidade}</td>
        </tr>
      `,
    )
    .join("");
}

function renderPainelRegistros() {
  if (!painelRegistrosBody || !totalizadorQuadras) {
    return;
  }

  const sedeSelecionada = filtroSede ? filtroSede.value : "";
  const quadreiroSelecionado = filtroQuadreiro ? filtroQuadreiro.value : "";

  const registrosFiltrados = registros.filter((registro) => {
    const matchSede = !sedeSelecionada || registro.sede === sedeSelecionada;
    const matchQuadreiro = !quadreiroSelecionado || registro.quadreiro === quadreiroSelecionado;
    return matchSede && matchQuadreiro;
  });

  if (!registrosFiltrados.length) {
    painelRegistrosBody.innerHTML = `
      <tr>
        <td class="empty-state" colspan="5">Nenhum registro encontrado para os filtros selecionados.</td>
      </tr>
    `;
    totalizadorQuadras.textContent = "Total de quadras: 0";
    return;
  }

  const totalQuadras = registrosFiltrados.reduce(
    (total, registro) => total + Number(registro.quantidade || 0),
    0,
  );

  painelRegistrosBody.innerHTML = registrosFiltrados
    .slice()
    .reverse()
    .map(
      (registro) => `
        <tr>
          <td>${registro.sede}</td>
          <td>${registro.quadreiro}</td>
          <td>${registro.arbitro}</td>
          <td>${registro.hora}</td>
          <td>${registro.quantidade}</td>
        </tr>
      `,
    )
    .join("");

  totalizadorQuadras.textContent = `Total de quadras: ${totalQuadras}`;
}

function renderQuadreirosTable() {
  if (!quadreirosBody) {
    return;
  }

  const quadreirosOrdenados = quadreiros
    .slice()
    .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

  if (!quadreirosOrdenados.length) {
    quadreirosBody.innerHTML = `
      <tr>
        <td class="empty-state" colspan="5">Nenhum quadreiro cadastrado ainda.</td>
      </tr>
    `;
    return;
  }

  quadreirosBody.innerHTML = quadreirosOrdenados
    .map(
      (quadreiro) => `
        <tr>
          <td>${quadreiro.nome}</td>
          <td>${quadreiro.sede}</td>
          <td>${quadreiro.pix || "-"}</td>
          <td>${quadreiro.observacoes || "-"}</td>
          <td>
            <button
              class="row-action-button"
              type="button"
              data-action="edit-quadreiro"
              data-quadreiro-id="${quadreiro.id}"
              aria-label="Editar ${quadreiro.nome}"
            >
              ...
            </button>
          </td>
        </tr>
      `,
    )
    .join("");
}

function showView(viewName) {
  const showingLancamento = viewName === "lancamento";
  const showingRegistros = viewName === "registros";
  const showingQuadreiros = viewName === "quadreiros";

  lancamentoView.classList.toggle("hidden-section", !showingLancamento);
  registrosView.classList.toggle("hidden-section", !showingRegistros);
  quadreirosView.classList.toggle("hidden-section", !showingQuadreiros);
  showLancamentoButton.classList.toggle("active", showingLancamento);
  showRegistrosButton.classList.toggle("active", showingRegistros);
  showQuadreirosButton.classList.toggle("active", showingQuadreiros);

  if (showingRegistros) {
    fillFiltroSede();
    fillFiltroQuadreiro();
    renderPainelRegistros();
  }

  if (showingQuadreiros) {
    renderQuadreirosTable();
  }
}

function setDefaultHora() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  horaInput.value = `${hours}:${minutes}`;
}

arbitroSelect.addEventListener("change", updateQuadreirosDisponiveis);

quadreiroForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const quadreiroPayload = {
    nome: quadreiroNome.value.trim(),
    pix: quadreiroPix.value.trim(),
    observacoes: quadreiroObservacoes.value.trim(),
    sede: quadreiroSede.value,
  };

  if (editingQuadreiroId) {
    const quadreiroAnterior = quadreiros.find((item) => item.id === editingQuadreiroId);

    quadreiros = quadreiros.map((item) =>
      item.id === editingQuadreiroId
        ? { ...item, ...quadreiroPayload }
        : item,
    );

    if (quadreiroAnterior && quadreiroAnterior.nome !== quadreiroPayload.nome) {
      registros = registros.map((registro) =>
        registro.quadreiro === quadreiroAnterior.nome && registro.sede === quadreiroAnterior.sede
          ? { ...registro, quadreiro: quadreiroPayload.nome }
          : registro,
      );
      saveStoredData(STORAGE_KEYS.registros, registros);
    }
  } else {
    const novoQuadreiro = {
      id: createQuadreiroId(),
      ...quadreiroPayload,
    };

    quadreiros = [...quadreiros, novoQuadreiro];
  }

  saveStoredData(STORAGE_KEYS.quadreiros, quadreiros);

  updateQuadreirosDisponiveis();
  quadreiroSelect.value = quadreiroPayload.nome;
  renderQuadreirosTable();
  fillFiltroQuadreiro();
  renderPainelRegistros();
  renderRegistros();
  closeQuadreiroModal();
});

registroForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const arbitro = getArbitroByName(arbitroSelect.value);

  if (!arbitro) {
    return;
  }

  const novoRegistro = {
    arbitro: arbitro.nome,
    sede: arbitro.sede,
    quadreiro: quadreiroSelect.value,
    hora: horaInput.value,
    quantidade: quantidadeInput.value,
  };

  registros = [...registros, novoRegistro];
  saveStoredData(STORAGE_KEYS.registros, registros);

  const arbitroSelecionado = arbitro.nome;
  fillFiltroSede();
  fillFiltroQuadreiro();
  renderPainelRegistros();
  renderRegistros();
  registroForm.reset();
  arbitroSelect.value = arbitroSelecionado;
  setDefaultHora();
  updateQuadreirosDisponiveis();
});

if (openRegisterQuadreiroButton) {
  openRegisterQuadreiroButton.addEventListener("click", openQuadreiroModal);
}

if (closeQuadreiroModalButton) {
  closeQuadreiroModalButton.addEventListener("click", closeQuadreiroModal);
}

if (quadreiroModalOverlay) {
  quadreiroModalOverlay.addEventListener("click", closeQuadreiroModal);
}

if (showLancamentoButton) {
  showLancamentoButton.addEventListener("click", () => showView("lancamento"));
}

if (showRegistrosButton) {
  showRegistrosButton.addEventListener("click", () => showView("registros"));
}

if (showQuadreirosButton) {
  showQuadreirosButton.addEventListener("click", () => showView("quadreiros"));
}

if (filtroSede) {
  filtroSede.addEventListener("change", renderPainelRegistros);
}

if (filtroQuadreiro) {
  filtroQuadreiro.addEventListener("change", renderPainelRegistros);
}

if (quadreirosBody) {
  quadreirosBody.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action='edit-quadreiro']");

    if (!actionButton) {
      return;
    }

    openEditQuadreiroModal(actionButton.dataset.quadreiroId);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !quadreiroModal.classList.contains("hidden")) {
    closeQuadreiroModal();
  }
});

fillStaticSelects();
renderRegistros();
renderPainelRegistros();
renderQuadreirosTable();
setDefaultHora();
