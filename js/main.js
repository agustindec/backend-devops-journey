const grid = document.getElementById("posts-grid");
const filtersEl = document.getElementById("filters");

let allPosts = [];
let activeCategory = "all";

async function loadPosts() {
  try {
    const res = await fetch("posts/index.json");
    if (!res.ok) throw new Error("No se pudo cargar posts/index.json");
    allPosts = await res.json();
    allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    renderFilters();
    renderPosts();
  } catch (err) {
    grid.innerHTML = `<p class="error">Error cargando los posts: ${err.message}</p>`;
  }
}

function renderFilters() {
  const categories = [...new Set(allPosts.map((p) => p.category))].sort();
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.category = cat;
    btn.textContent = cat;
    filtersEl.appendChild(btn);
  });

  filtersEl.addEventListener("click", (e) => {
    if (!e.target.matches(".filter-btn")) return;
    activeCategory = e.target.dataset.category;
    [...filtersEl.children].forEach((b) => b.classList.toggle("active", b === e.target));
    renderPosts();
  });
}

function renderPosts() {
  const posts = allPosts.filter((p) => activeCategory === "all" || p.category === activeCategory);

  if (posts.length === 0) {
    grid.innerHTML = `<p class="empty">Todavía no hay posts en esta categoría.</p>`;
    return;
  }

  grid.innerHTML = posts
    .map(
      (p) => `
    <a class="post-card" href="post.html?post=${encodeURIComponent(p.slug)}">
      <div class="post-card-meta">
        <span class="post-card-category">${escapeHtml(p.category)}</span>
        <span>${formatDate(p.date)}</span>
      </div>
      <h2>${escapeHtml(p.title)}</h2>
      <p>${escapeHtml(p.excerpt || "")}</p>
      <div class="tag-list">
        ${(p.tags || []).map((t) => `<span class="tag">#${escapeHtml(t)}</span>`).join("")}
      </div>
    </a>
  `
    )
    .join("");
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

loadPosts();
