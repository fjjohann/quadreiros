import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://orjelokkrasusscujfda.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_f2CFtgKOdkoVlYIpM8x3hw_gy0jwOtp";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

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
const registroEditForm = document.querySelector("#registro-edit-form");
const registroEditModal = document.querySelector("#registro-edit-modal");
const registroEditModalOverlay = document.querySelector("#registro-edit-modal-overlay");
const closeRegistroEditModalButton = document.querySelector("#close-registro-edit-modal");
const registroEditArbitro = document.querySelector("#registro-edit-arbitro");
const registroEditSede = document.querySelector("#registro-edit-sede");
const registroEditQuadreiro = document.querySelector("#registro-edit-quadreiro");
const registroEditHora = document.querySelector("#registro-edit-hora");
const registroEditQuantidade = document.querySelector("#registro-edit-quantidade");
const deleteRegistroButton = document.querySelector("#delete-registro-button");

let quadreiros = [];
let registros = [];
let editingQuadreiroId = null;
let editingRegistroId = null;
let currentView = "lancamento";
let syncTimerId = null;
let isSyncing = false;
let realtimeChannel = null;
let deleteRegistroArmed = false;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
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
  const selectedQuadreiro = quadreiroSelect.value;
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

  if (selectedQuadreiro && disponiveis.some((quadreiro) => quadreiro.nome === selectedQuadreiro)) {
    quadreiroSelect.value = selectedQuadreiro;
  }

  renderRegistros();
}

function fillFiltroSede() {
  if (!filtroSede) {
    return;
  }

  const selectedSede = filtroSede.value;
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

  if (selectedSede && sedesUnicas.includes(selectedSede)) {
    filtroSede.value = selectedSede;
  }
}

function fillFiltroQuadreiro() {
  if (!filtroQuadreiro) {
    return;
  }

  const selectedQuadreiro = filtroQuadreiro.value;
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

  if (selectedQuadreiro && quadreirosUnicos.includes(selectedQuadreiro)) {
    filtroQuadreiro.value = selectedQuadreiro;
  }
}

function openQuadreiroModal() {
  const arbitro = getArbitroByName(arbitroSelect.value);
  editingQuadreiroId = null;
  quadreiroForm.reset();

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

function fillRegistroEditQuadreiros(sede, selectedQuadreiro = "") {
  if (!registroEditQuadreiro) {
    return;
  }

  const disponiveis = quadreiros
    .filter((quadreiro) => quadreiro.sede === sede)
    .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

  registroEditQuadreiro.innerHTML = "";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = disponiveis.length
    ? "Selecione um quadreiro"
    : "Nenhum quadreiro disponivel nessa sede";
  placeholderOption.disabled = true;
  placeholderOption.selected = !selectedQuadreiro;
  registroEditQuadreiro.appendChild(placeholderOption);

  disponiveis.forEach((quadreiro) => {
    const option = document.createElement("option");
    option.value = quadreiro.nome;
    option.textContent = quadreiro.nome;
    registroEditQuadreiro.appendChild(option);
  });

  if (selectedQuadreiro && disponiveis.some((quadreiro) => quadreiro.nome === selectedQuadreiro)) {
    registroEditQuadreiro.value = selectedQuadreiro;
  }
}

function openEditQuadreiroModal(quadreiroId) {
  const quadreiro = quadreiros.find((item) => item.id === quadreiroId);

  if (!quadreiro) {
    return;
  }

  editingQuadreiroId = quadreiro.id;
  quadreiroNome.value = quadreiro.nome;
  quadreiroPix.value = quadreiro.pix || "";
  quadreiroObservacoes.value = quadreiro.observacoes || "";
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

function closeRegistroEditModal() {
  if (!registroEditModal || !registroEditForm) {
    return;
  }

  registroEditModal.classList.add("hidden");
  registroEditModal.setAttribute("aria-hidden", "true");
  registroEditForm.reset();
  editingRegistroId = null;
  deleteRegistroArmed = false;

  if (deleteRegistroButton) {
    deleteRegistroButton.textContent = "Excluir registro";
  }
}

function openEditRegistroModal(registroId) {
  const registro = registros.find((item) => item.id === registroId);

  if (!registro || !registroEditModal) {
    return;
  }

  editingRegistroId = registro.id;
  registroEditArbitro.value = registro.arbitro;
  registroEditSede.value = registro.sede;
  registroEditHora.value = registro.hora;
  registroEditQuantidade.value = String(registro.quantidade);
  fillRegistroEditQuadreiros(registro.sede, registro.quadreiro);
  deleteRegistroArmed = false;

  if (deleteRegistroButton) {
    deleteRegistroButton.textContent = "Excluir registro";
  }

  registroEditModal.classList.remove("hidden");
  registroEditModal.setAttribute("aria-hidden", "false");
  registroEditQuadreiro.focus();
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
        <td class="empty-state" colspan="6">Nenhum registro lancado para essa sede ainda.</td>
      </tr>
    `;
    return;
  }

  registrosBody.innerHTML = registrosFiltrados
    .slice()
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .map(
      (registro) => `
        <tr>
          <td>${escapeHtml(registro.arbitro)}</td>
          <td>${escapeHtml(registro.sede)}</td>
          <td>${escapeHtml(registro.quadreiro)}</td>
          <td>${escapeHtml(registro.hora)}</td>
          <td>${escapeHtml(registro.quantidade)}</td>
          <td>
            <button
              class="row-action-button"
              type="button"
              data-action="edit-registro"
              data-registro-id="${escapeHtml(registro.id)}"
              aria-label="Editar registro de ${escapeHtml(registro.quadreiro)}"
            >
              ...
            </button>
          </td>
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
        <td class="empty-state" colspan="6">Nenhum registro encontrado para os filtros selecionados.</td>
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
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .map(
      (registro) => `
        <tr>
          <td>${escapeHtml(registro.sede)}</td>
          <td>${escapeHtml(registro.quadreiro)}</td>
          <td>${escapeHtml(registro.arbitro)}</td>
          <td>${escapeHtml(registro.hora)}</td>
          <td>${escapeHtml(registro.quantidade)}</td>
          <td>
            <button
              class="row-action-button"
              type="button"
              data-action="edit-registro"
              data-registro-id="${escapeHtml(registro.id)}"
              aria-label="Editar registro de ${escapeHtml(registro.quadreiro)}"
            >
              ...
            </button>
          </td>
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
          <td>${escapeHtml(quadreiro.nome)}</td>
          <td>${escapeHtml(quadreiro.sede)}</td>
          <td>${escapeHtml(quadreiro.pix || "-")}</td>
          <td>${escapeHtml(quadreiro.observacoes || "-")}</td>
          <td>
            <button
              class="row-action-button"
              type="button"
              data-action="edit-quadreiro"
              data-quadreiro-id="${escapeHtml(quadreiro.id)}"
              aria-label="Editar ${escapeHtml(quadreiro.nome)}"
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

  currentView = viewName;
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

function renderAll() {
  fillFiltroSede();
  fillFiltroQuadreiro();
  updateQuadreirosDisponiveis();
  renderRegistros();
  renderPainelRegistros();
  renderQuadreirosTable();
  showView(currentView);
}

async function fetchQuadreiros() {
  const { data, error } = await supabase
    .from("quadreiros")
    .select("*")
    .order("nome", { ascending: true });

  if (error) {
    throw error;
  }

  quadreiros = data || [];
}

async function fetchRegistros() {
  const { data, error } = await supabase
    .from("registros")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  registros = data || [];
}

async function syncRemoteData() {
  if (isSyncing) {
    return;
  }

  isSyncing = true;

  try {
    await Promise.all([fetchQuadreiros(), fetchRegistros()]);
    renderAll();
  } catch (error) {
    console.error("Erro ao sincronizar dados do Supabase:", error);
  } finally {
    isSyncing = false;
  }
}

function startAutoSync() {
  if (syncTimerId) {
    clearInterval(syncTimerId);
  }

  syncTimerId = window.setInterval(() => {
    syncRemoteData();
  }, 10000);
}

function startRealtimeSync() {
  if (realtimeChannel) {
    return;
  }

  realtimeChannel = supabase
    .channel("quadreiros-shared-data")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "quadreiros" },
      () => {
        syncRemoteData();
      },
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "registros" },
      () => {
        syncRemoteData();
      },
    )
    .subscribe((status) => {
      if (status === "SUBSCRIBED") {
        syncRemoteData();
      }
    });
}

async function createQuadreiro(payload) {
  const { error } = await supabase.from("quadreiros").insert(payload);

  if (error) {
    throw error;
  }
}

async function updateQuadreiro(quadreiroId, payload) {
  const { error } = await supabase
    .from("quadreiros")
    .update(payload)
    .eq("id", quadreiroId);

  if (error) {
    throw error;
  }
}

async function renameRegistrosFromQuadreiro(quadreiroAnterior, novoNome) {
  const { error } = await supabase
    .from("registros")
    .update({ quadreiro: novoNome })
    .eq("quadreiro", quadreiroAnterior.nome)
    .eq("sede", quadreiroAnterior.sede);

  if (error) {
    throw error;
  }
}

async function createRegistro(payload) {
  const { error } = await supabase.from("registros").insert(payload);

  if (error) {
    throw error;
  }
}

async function updateRegistro(registroId, payload) {
  const { error } = await supabase
    .from("registros")
    .update(payload)
    .eq("id", registroId);

  if (error) {
    throw error;
  }
}

async function deleteRegistro(registroId) {
  const { error } = await supabase
    .from("registros")
    .delete()
    .eq("id", registroId);

  if (error) {
    throw error;
  }
}

arbitroSelect.addEventListener("change", updateQuadreirosDisponiveis);

quadreiroForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const quadreiroPayload = {
    nome: quadreiroNome.value.trim(),
    pix: quadreiroPix.value.trim(),
    observacoes: quadreiroObservacoes.value.trim(),
    sede: quadreiroSede.value,
  };

  if (!quadreiroPayload.nome || !quadreiroPayload.sede) {
    return;
  }

  try {
    if (editingQuadreiroId) {
      const quadreiroAnterior = quadreiros.find((item) => item.id === editingQuadreiroId);
      await updateQuadreiro(editingQuadreiroId, quadreiroPayload);

      if (quadreiroAnterior && quadreiroAnterior.nome !== quadreiroPayload.nome) {
        await renameRegistrosFromQuadreiro(quadreiroAnterior, quadreiroPayload.nome);
      }
    } else {
      await createQuadreiro(quadreiroPayload);
    }

    await syncRemoteData();
    quadreiroSelect.value = quadreiroPayload.nome;
    closeQuadreiroModal();
  } catch (error) {
    console.error("Erro ao salvar quadreiro:", error);
    window.alert("Nao foi possivel salvar o quadreiro agora.");
  }
});

registroForm.addEventListener("submit", async (event) => {
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
    quantidade: Number(quantidadeInput.value),
  };

  try {
    await createRegistro(novoRegistro);
    await syncRemoteData();
    const arbitroSelecionado = arbitro.nome;
    registroForm.reset();
    arbitroSelect.value = arbitroSelecionado;
    setDefaultHora();
    updateQuadreirosDisponiveis();
  } catch (error) {
    console.error("Erro ao salvar registro:", error);
    window.alert("Nao foi possivel salvar o registro agora.");
  }
});

if (registroEditForm) {
  registroEditForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!editingRegistroId) {
      return;
    }

    const registroAnterior = registros.find((item) => item.id === editingRegistroId);

    if (!registroAnterior) {
      return;
    }

    const registroPayload = {
      quadreiro: registroEditQuadreiro.value,
      hora: registroEditHora.value,
      quantidade: Number(registroEditQuantidade.value),
    };

    if (!registroPayload.quadreiro || !registroPayload.hora || !registroPayload.quantidade) {
      return;
    }

    try {
      await updateRegistro(editingRegistroId, {
        ...registroPayload,
        arbitro: registroAnterior.arbitro,
        sede: registroAnterior.sede,
      });
      await syncRemoteData();
      closeRegistroEditModal();
    } catch (error) {
      console.error("Erro ao atualizar registro:", error);
      window.alert("Nao foi possivel atualizar o registro agora.");
    }
  });
}

if (deleteRegistroButton) {
  deleteRegistroButton.addEventListener("click", async () => {
    if (!editingRegistroId) {
      return;
    }

    if (!deleteRegistroArmed) {
      deleteRegistroArmed = true;
      deleteRegistroButton.textContent = "Clique novamente para excluir";
      return;
    }

    try {
      await deleteRegistro(editingRegistroId);
      await syncRemoteData();
      closeRegistroEditModal();
    } catch (error) {
      console.error("Erro ao excluir registro:", error);
      window.alert("Nao foi possivel excluir o registro agora.");
    }
  });
}

if (openRegisterQuadreiroButton) {
  openRegisterQuadreiroButton.addEventListener("click", openQuadreiroModal);
}

if (closeQuadreiroModalButton) {
  closeQuadreiroModalButton.addEventListener("click", closeQuadreiroModal);
}

if (quadreiroModalOverlay) {
  quadreiroModalOverlay.addEventListener("click", closeQuadreiroModal);
}

if (closeRegistroEditModalButton) {
  closeRegistroEditModalButton.addEventListener("click", closeRegistroEditModal);
}

if (registroEditModalOverlay) {
  registroEditModalOverlay.addEventListener("click", closeRegistroEditModal);
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

if (registrosBody) {
  registrosBody.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action='edit-registro']");

    if (!actionButton) {
      return;
    }

    openEditRegistroModal(actionButton.dataset.registroId);
  });
}

if (painelRegistrosBody) {
  painelRegistrosBody.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action='edit-registro']");

    if (!actionButton) {
      return;
    }

    openEditRegistroModal(actionButton.dataset.registroId);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !quadreiroModal.classList.contains("hidden")) {
    closeQuadreiroModal();
    return;
  }

  if (event.key === "Escape" && registroEditModal && !registroEditModal.classList.contains("hidden")) {
    closeRegistroEditModal();
  }
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    syncRemoteData();
  }
});

fillStaticSelects();
setDefaultHora();
renderAll();
startAutoSync();
startRealtimeSync();
syncRemoteData();
