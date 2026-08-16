# Introducción Linux

## Antes de Linux...

En 1969 **Kenneth Thompson** y **Dennis Ritchie** (ATT&T Bell Labs) desarrollan UNIX OS en ensamblador.

En 1971 Thompson y Ritchie **crean el lenguaje de programación C** y reimplementan UNIX OS proporcionando portabilidad.

ATT&T era el único propietario de UNIX, por ello, en 1983 Richard Stallman **inicia el proyecto GNU (GNU's not UNIX)** para crear un sistema operativo gratuito similar a UNIX OS.

Al mismo tiempo Richard Stallman escribe **GPL (GNU General Public License)**.

GNU nunca llego a ser un sistema operativo estable y completo.

En 1987 Andrew S. Tanenbaum **desarrolla MINIX** un sistema operativo de uso acedémico similar a UNIX OS.

El código de MINIX era de acceso público, sin embargo, no podía modificarse o distribuirse.

Estos sucesos, unidos a la aparición de un nuevo procesador de Intel al que los sistemas operativos anteriores no se adaptaban bien, dieron paso a UNIX.

## Historia de Linux

**LINUX comienza en 1991** como un proyecto personal de un estudiante Finlandés llamado `Linus Torvalds`.

El desarrollo lo realizó en MINIX utilizando el GNU C Compiler.

El **25 de Agosto de 1991**, Linus Torvalds **presenta LINUX al mundo** con la siguiente carta:

> Hello everybody out there using minix -
>
> I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu) for 386(486) AT clones. This has been brewing since april, and is starting to get ready. I'd like any feedback on things people like/dislike in minix, as my OS resembles it somewhat (same physical layout of the file-system (due to practical reasons) among other things).
>
> I've currently ported bash(1.08) and gcc(1.40), and things seem to work. This implies that I'll get something practical within a few months, and I'd like to know what features most people would want. Any sugggestions are welcome, but I won't promise I'll implement them :-)
>
> Linus (torvalds@kruuna.helsinki.fi)
>
> PS. Yes - it's free of any minix code, and it has a multi-threaded fs. It is NOT portable (uses 386 task switching etc), and it probably never will support anything other than AT-harddisks, as that's all I hava :-(.
>
> \- Linus Torvlads

## Conceptos Básicos

`Kernel`:

Programa informático que se encuentra en el **núcleo del sistema operativo** de un ordenador y tiene un control total sobre todo lo que ocurre en el sistema.

Siempre reside en la memoria, facilita las interacciones entre los componentes de hardware y software, gestiona la ejecución de procesos, maneja interrupciones.

Se encarga de una zona separada de la memoria protegida del acceso del software de aplicación o de otras partes menos críticas del sistema operativo.

`Espacio de usuario`:

Los programas de aplicación (navegadores, editores de texto, reproductores de video...) utilizan una zona de memoria separada.

Esta separación evita que los datos del usuario y los del kernel interfieran entre si y provoquen inestabilidad y lentitud.

## Evolución de Linux

Linus Torvalds publica el **primer Kernel de Linux bajo su propia licencia** con ciertas restricciones para actividades comerciales.

Desde el primer momento **Linux incluía software** de aplicación procedente del proyecto **GNU**, por ejemplo, **GNU BASH**.

En 1992 Torvalds decide liberar el **Kernel de Linux bajo la licencia GNU GPL**.

Desde este momento, Torvalds une esfuerzos con los desarrolladores de GNU para integrar Linux con varios componentes de GNU para crear un sistema operativo gratuito funcional y completo.

## Distribuciones de Linux

En 1991 Torvalds **distribuyó la primera versión de Linux (0.01)** únicamente como código fuente.

Más adelante se comenzó a distribuir como una imagen de disquete que contenía el Kernel de Linux y las utilidades de GNU.

La instalación de Linux seguía sin ser una tarea sencilla, a partir de 1992 empiezan a aparecer **nuevas distribuciones del Kernel de Linux con diferente software de aplicación**.

Dos de las distribuciones más populares fueron **Slackware** y **Debian**, presentadas en 1993 y que se consideran las dos distribuciones de Linux más antiguas aún en uso.

Una distribución típica de Linux comprende el kernel de Linux, herramientas y bibliotecas GNU, software adicional, documentación, un sistema de ventanas, un gestor de ventanas y un entorno de escritorio.

