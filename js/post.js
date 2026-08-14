const contentEl = document.getElementById("post-content");
const titleEl = document.getElementById("post-title");

function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get("post");
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" });
}

async function loadPost() {
  const slug = getSlug();
  if (!slug) {
    contentEl.innerHTML = `<p class="error">No se especificó ningún post.</p>`;
    return;
  }

  try {
    const [indexRes, mdRes] = await Promise.all([
      fetch("posts/index.json"),
      fetch(`posts/${slug.split("-")[0]}/${slug}.md`),
    ]);

    if (!indexRes.ok) throw new Error("No se pudo cargar posts/index.json");
    if (!mdRes.ok) throw new Error(`No se encontró posts/${slug.split("-")[0]}/${slug}.md`);

    const index = await indexRes.json();
    const meta = index.find((p) => p.slug === slug);
    const markdown = await mdRes.text();

    const html = marked.parse(markdown);

    titleEl.textContent = meta ? `${meta.title} — Backend con Java` : "Post — Backend con Java";

    contentEl.innerHTML = `
      ${meta ? `
        <h1>${meta.title}</h1>
        <div class="post-meta">${meta.category} · ${formatDate(meta.date)}</div>
      ` : ""}
      <div class="post-body">${html}</div>
    `;

    contentEl.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });

    setupChecklist(slug);
  } catch (err) {
    contentEl.innerHTML = `<p class="error">Error cargando el post: ${err.message}</p>`;
  }
}

function setupChecklist(slug) {
  const checkboxes = contentEl.querySelectorAll('.post-body input[type="checkbox"]');
  if (checkboxes.length === 0) return;

  const storageKey = `checklist:${slug}`;
  const checked = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));

  const progressBar = document.createElement("div");
  progressBar.className = "checklist-progress";
  progressBar.innerHTML = `
    <div class="checklist-progress-bar"><div class="checklist-progress-fill"></div></div>
    <span class="checklist-progress-text"></span>
  `;
  contentEl.querySelector(".post-body").before(progressBar);

  function updateProgress() {
    const total = checkboxes.length;
    const done = [...checkboxes].filter((cb) => cb.checked).length;
    const pct = Math.round((done / total) * 100);
    progressBar.querySelector(".checklist-progress-fill").style.width = `${pct}%`;
    progressBar.querySelector(".checklist-progress-text").textContent = `${done} / ${total} completados (${pct}%)`;
  }

  checkboxes.forEach((cb, i) => {
    cb.disabled = false;
    cb.dataset.index = i;
    cb.checked = checked.has(i);
    cb.closest("li")?.classList.toggle("done", cb.checked);

    cb.addEventListener("change", () => {
      if (cb.checked) {
        checked.add(i);
      } else {
        checked.delete(i);
      }
      localStorage.setItem(storageKey, JSON.stringify([...checked]));
      cb.closest("li")?.classList.toggle("done", cb.checked);
      updateProgress();
    });
  });

  updateProgress();
}

loadPost();
