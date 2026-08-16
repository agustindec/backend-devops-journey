# Shell Linux

## Comandos Básicos

- `clear`: Limpia el contenido visible de la terminal.
- `history`: Muestra el historial de comandos ejecutados.
- `ls`: Lista los archivos y directorios de la ubicacion actual.
- `pwd`: Muestra la ruta completa del directorio actual.
- `cd`: Cambia el directorio de trabajo.
- `mkdir`: Crea uno o varios directorios.
- `type`: Indica como interpreta el shell un comando (alias, funcion, comando interno o ejecutable).
- `cp`: Copia archivos o directorios de una ubicacion a otra.

## Parametros

Los parametros modifican el comportamiento de un comando y normalmente comienzan con uno o dos guiones. Los argumentos, en cambio, indican sobre que elemento debe actuar el comando, por ejemplo un archivo o un directorio. En `ls -lah Desktop`, `-lah` contiene los parametros y `Desktop` es el argumento.

- `ls -l`: Muestra el contenido en formato largo, con datos como permisos, propietario, tamaño y fecha de modificacion.
- `ls -a`: Incluye las entradas ocultas, cuyos nombres comienzan con un punto (`.`).
- `ls -lah`: Combina `-l`, `-a` y `-h`; muestra todas las entradas en formato largo y expresa los tamanos en unidades faciles de leer, como KB o MB.
- `ls -lah Desktop`: Aplica los mismos parametros al argumento `Desktop`, por lo que muestra el contenido de ese directorio.

## Informacion de los comandos: help, man, info, whatis, apropos

Antes de ejecutar un comando se puede consultar su documentacion para conocer su sintaxis, los parametros disponibles y los argumentos que acepta. Las opciones mas habituales son:

- `comando --help`: Muestra una ayuda breve directamente en la terminal. Suele incluir la sintaxis de uso y una lista de parametros; por ejemplo, `ls --help`.
- `help comando`: Muestra informacion sobre los comandos internos de Bash, como `cd`, `echo` o `export`; por ejemplo, `help cd`.
- `man comando`: Abre el manual completo del comando. Dentro del manual se puede buscar texto con `/palabra`, avanzar entre resultados con `n` y salir con `q`; por ejemplo, `man ls`.
- `info comando`: Presenta documentacion detallada organizada en secciones enlazadas; por ejemplo, `info ls`.
- `whatis comando`: Devuelve una descripcion de una linea que ayuda a identificar rapidamente la funcion del comando; por ejemplo, `whatis grep`.
- `apropos palabra`: Busca comandos relacionados con una palabra en las descripciones de los manuales; por ejemplo, `apropos copy`.

En las paginas de ayuda, la seccion **SYNOPSIS** indica como construir el comando. Los elementos entre corchetes (`[ ]`) son opcionales, los separados por una barra vertical (`|`) representan alternativas y los puntos suspensivos (`...`) indican que un argumento puede repetirse. La seccion **OPTIONS** describe cada parametro y la seccion **ARGUMENTS**, cuando existe, explica los valores admitidos.

## Manejo de comandos y expresiones lógicas

La shell permite escribir varios comandos en una misma línea y controlar cómo se ejecutan. Cuando un comando es largo, se puede dividir en varias líneas con una barra invertida (`\`) al final de cada línea. La barra indica que la instrucción continúa y mejora su legibilidad:

```bash
find /var/log \
  -type f \
  -name "*.log" \
  -mtime -7
```

Para ejecutar varios comandos de forma consecutiva, se separan con punto y coma (`;`). Cada comando se ejecuta sin importar si el anterior terminó correctamente:

```bash
clear; ls -la
```

Los operadores lógicos permiten condicionar la ejecución según el resultado del comando anterior:

- `comando1 && comando2`: ejecuta el segundo comando solo si el primero termina correctamente.
- `comando1 || comando2`: ejecuta el segundo comando solo si el primero falla.
- `comando1 & comando2`: inicia el primer comando en segundo plano y continúa con el segundo sin esperar a que termine.

```bash
mkdir respaldo && cp archivo.txt respaldo/
cd /directorio/inexistente || echo "No se pudo cambiar de directorio"
proceso_largo & ls
```

También se pueden combinar operadores. En el siguiente ejemplo se muestra un mensaje de éxito si la copia termina correctamente y uno de error en caso contrario:

```bash
cp archivo.txt respaldo/ && echo "Copia completada" || echo "Error al copiar"
```

Los comandos pueden agruparse con llaves (`{ ...; }`) o paréntesis (`( ... )`). Las llaves ejecutan el grupo en la shell actual, mientras que los paréntesis lo ejecutan en una subshell, por lo que cambios como `cd` no afectan a la sesión principal:

```bash
(cd /tmp && ls)
```

## Atajos útiles para la shell de Linux

Estos atajos de teclado permiten editar comandos, consultar el historial y controlar procesos con mayor rapidez. La mayoría funcionan en Bash y otras shells que utilizan la biblioteca Readline:

- `Ctrl + A`: mueve el cursor al inicio de la línea.
- `Ctrl + E`: mueve el cursor al final de la línea.
- `Alt + B`: retrocede una palabra.
- `Alt + F`: avanza una palabra.
- `Ctrl + U`: elimina desde la posición del cursor hasta el inicio de la línea.
- `Ctrl + K`: elimina desde la posición del cursor hasta el final de la línea.
- `Ctrl + W`: elimina la palabra anterior al cursor.
- `Ctrl + Y`: pega el último texto eliminado con alguno de los atajos anteriores.
- `Ctrl + L`: limpia la pantalla, de forma equivalente al comando `clear`.
- `Ctrl + R`: busca de forma interactiva un comando en el historial; se puede volver a pulsar para recorrer coincidencias anteriores.
- `Flecha arriba` y `Flecha abajo`: recorren los comandos ejecutados anteriormente.
- `Tab`: completa nombres de comandos, archivos y directorios; al pulsarlo dos veces muestra las opciones disponibles.
- `Ctrl + C`: interrumpe el proceso que se está ejecutando en primer plano.
- `Ctrl + Z`: suspende temporalmente el proceso en primer plano. Se puede reanudar con `fg` o enviarlo a segundo plano con `bg`.
- `Ctrl + D`: cierra la entrada estándar; en una línea vacía, termina la sesión de la shell de forma equivalente a `exit`.

La expansión del historial también permite reutilizar comandos sin volver a escribirlos:

- `!!`: repite el último comando; por ejemplo, `sudo !!` vuelve a ejecutarlo con privilegios administrativos.
- `!n`: ejecuta el comando identificado con el número `n` mostrado por `history`.
- `!texto`: ejecuta el comando más reciente que comienza con `texto`.
