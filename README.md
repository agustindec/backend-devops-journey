# Backend con Java — blog de estudio

Blog estático (sin frameworks ni build tools) para ir documentando lo que voy aprendiendo de Java y su ecosistema para backend. Los posts se escriben en **Markdown** y se listan/renderizan con JS vanilla.

## Estructura del proyecto

```
.
├── index.html          # portada: lista y filtra los posts
├── post.html           # plantilla que renderiza un post individual
├── about.html          # página "sobre este blog"
├── css/
│   └── styles.css      # estilos de todo el sitio
├── js/
│   ├── main.js         # lógica de la portada (carga posts/index.json, filtros)
│   └── post.js         # lógica de post.html (carga el .md y lo renderiza)
└── posts/
    ├── index.json      # metadatos de todos los posts (título, fecha, categoría, tags)
    ├── bienvenida.md
    └── jvm-y-el-classpath.md
```

No hay backend ni base de datos: todo corre en el navegador. `posts/index.json` funciona como "índice" y cada post es un archivo `.md` aparte. El markdown se renderiza en el cliente con [marked.js](https://marked.js.org/) (CDN) y el resaltado de código con [highlight.js](https://highlightjs.org/) (CDN).

## Cómo agregar un post nuevo

1. Crear el archivo `posts/mi-nuevo-post.md` y escribir el contenido en Markdown (el `#` de nivel 1 no hace falta, el título se toma del JSON — arrancá directo con `##`).
2. Agregar una entrada en `posts/index.json`:

   ```json
   {
     "slug": "mi-nuevo-post",
     "title": "Título del post",
     "date": "2026-07-20",
     "category": "Core Java",
     "tags": ["java", "colecciones"],
     "excerpt": "Resumen de una línea que aparece en la portada."
   }
   ```

   - `slug` tiene que coincidir con el nombre del archivo `.md` (sin extensión).
   - `date` en formato `YYYY-MM-DD`, se usa para ordenar los posts (el más nuevo primero).
   - `category` agrupa los posts y genera automáticamente un botón de filtro en la portada.
   - `tags` es una lista libre, solo decorativa por ahora.

3. Listo. `index.html` lee `posts/index.json` dinámicamente, no hace falta tocar el HTML.

## Cómo agregar una categoría nueva

No hay que declararla en ningún lado: alcanza con usar un valor nuevo en el campo `"category"` de un post en `posts/index.json`. `main.js` arma los botones de filtro leyendo las categorías presentes en ese archivo.

Sugerencias de categorías a medida que avance el temario:

- `Core Java`
- `Diseño orientado a objetos`
- `Persistencia` (SQL / JDBC)
- `Redes y HTTP`
- `Testing`
- `Concurrencia`
- `JVM y rendimiento`
- `Herramientas` (Maven / Gradle / Git / CI)
- `Meta` (posts sobre el blog en sí)

## Cómo agregar una página estática nueva (no un post)

Para páginas fijas tipo `about.html` (que no forman parte del listado de posts):

1. Copiar `about.html` como base.
2. Cambiar el `<title>` y el contenido dentro de `<article class="post-article">`.
3. Agregar el link en la navegación (`<nav class="main-nav">`) de **todos** los HTML (`index.html`, `post.html`, `about.html`, y cualquier página nueva) para mantener el menú consistente.

## Escribir Markdown para los posts

Soportado por `marked.js`: títulos (`##`, `###`), listas, tablas, citas (`>`), enlaces, imágenes y bloques de código con resaltado de sintaxis:

<pre>
```java
public class Ejemplo {
    public static void main(String[] args) {
        System.out.println("Hola");
    }
}
```
</pre>

El lenguaje del bloque (` ```java `, ` ```bash `, ` ```sql `, etc.) determina el resaltado. Por defecto solo está cargado el paquete de sintaxis de Java además del set común de highlight.js; si en algún post hace falta otro lenguaje (ej. `yaml`, `sql`), agregar el script correspondiente en `post.html`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/sql.min.js"></script>
```

## Checklists con progreso persistente

Cualquier post puede incluir listas de tareas con sintaxis GFM (`- [ ] texto`), incluso anidadas:

```markdown
- [ ] Tema principal
  - [ ] Subtema A
  - [ ] Subtema B
```

`js/post.js` detecta los checkboxes del post, los habilita (por defecto Markdown los renderiza deshabilitados) y guarda el estado marcado/no marcado en `localStorage` bajo la clave `checklist:<slug>`. Al volver a entrar al post, los checks marcados se restauran automáticamente y se muestra una barra de progreso arriba del contenido. Es por navegador/dispositivo, no se sincroniza entre equipos.

Ver [posts/index.md](posts/index.md) como ejemplo: es el roadmap completo de temas del blog con checklist anidado.

## Correr el blog en local

Como usa `fetch()` para cargar `posts/index.json` y los `.md`, no alcanza con abrir `index.html` directo con doble click (los navegadores bloquean `fetch` sobre `file://`). Hay que servirlo con un servidor estático simple, por ejemplo:

```bash
# con Python
python -m http.server 8000

# con Node (npx, sin instalar nada)
npx serve .
```

Y abrir `http://localhost:8000`.

## Publicarlo (opcional)

Al ser 100% estático, se puede publicar gratis en **GitHub Pages**:

1. Subir esta carpeta a un repositorio de GitHub.
2. En el repo: *Settings → Pages → Deploy from branch* → elegir la rama y la carpeta raíz.
3. GitHub va a dar una URL pública tipo `https://usuario.github.io/repo/`.

## Roadmap de contenido (ideas)

- [ ] JDK vs JRE vs JVM
- [ ] Colecciones (`List`, `Set`, `Map`) y cuándo usar cada una
- [ ] Streams y programación funcional en Java
- [ ] Maven: ciclo de vida y dependencias
- [ ] Diseño por capas sin framework
- [ ] Inyección de dependencias manual por constructor
- [ ] JDBC: consultas, mapeo y transacciones
- [ ] Testing con JUnit 5 y Mockito
- [ ] Cliente y servidor HTTP con las APIs del JDK
- [ ] Empaquetar una aplicación Java como JAR
