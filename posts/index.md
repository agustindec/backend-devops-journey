# Roadmap de Java puro

Ruta de aprendizaje centrada en **Java SE y el JDK**, sin frameworks de aplicación como Spring Boot. Maven o Gradle, JUnit, un driver JDBC y otras librerías pequeñas aparecen como herramientas, no como sustitutos de los fundamentos.

> Versión recomendada: empezar con una versión **LTS** del JDK. Antes de estudiar una API avanzada, comprobar si es estable, *preview* o incubadora en la versión elegida.

## Cómo recorrerlo

- [ ] Elegir una versión LTS del JDK y usarla durante toda la ruta
- [ ] Escribir código en cada tema; no limitarse a leer
- [ ] Completar el ejercicio de salida de cada fase
- [ ] Mantener cada proyecto en Git con un README y pruebas
- [ ] Volver a medir y refactorizar: primero corrección, después claridad y rendimiento

Las fases 0 a 8 forman el núcleo. Las fases 9 a 13 preparan para construir aplicaciones reales. La fase 14 contiene especializaciones opcionales.

## Fase 0 — Entorno y mecánica de Java

- [ ] Diferencias entre JDK, JVM, JRE y Java SE
- [ ] Instalar y seleccionar un JDK; `java`, `javac`, `jshell`, `jar` y `javadoc`
- [ ] Del código fuente al bytecode: compilar, empaquetar y ejecutar
- [ ] Classpath, paquetes, imports y estructura de un proyecto
- [ ] IDE, debugger, Git y lectura de documentación oficial
- [ ] Maven o Gradle: estructura, dependencias, ciclo de build y tests

**Salida:** aplicación de consola empaquetada como JAR y ejecutable desde terminal.

## Fase 1 — Fundamentos del lenguaje

- [ ] Variables, tipos primitivos, wrappers, conversiones y alcance
- [ ] Operadores, expresiones y precisión numérica (`BigInteger`, `BigDecimal`)
- [ ] Condicionales, bucles y `switch` tradicional y como expresión
- [ ] Métodos, sobrecarga, varargs, recursión y paso por valor
- [ ] Arrays, argumentos de línea de comandos y entrada por consola
- [ ] Convenciones, legibilidad y documentación con Javadoc

**Salida:** calculadora de consola con validación de entradas y varias operaciones.

## Fase 2 — Orientación a objetos y modelado

- [ ] Clases, objetos, estado, comportamiento y constructores
- [ ] Encapsulación, invariantes y modificadores de acceso
- [ ] Métodos y atributos de instancia frente a `static`
- [ ] Inmutabilidad, copias defensivas y `record`
- [ ] Identidad e igualdad: `==`, `equals`, `hashCode` y `toString`
- [ ] Diseño de clases pequeñas y responsabilidades claras

**Salida:** modelo de dominio inmutable para una biblioteca, inventario o agenda.

## Fase 3 — Abstracción y sistema de tipos

- [ ] Herencia, polimorfismo, clases abstractas y `final`
- [ ] Interfaces, métodos `default` y composición sobre herencia
- [ ] Enums con estado y comportamiento
- [ ] `record`, clases selladas y *pattern matching* estable en el JDK elegido
- [ ] Clases anidadas, locales y anónimas
- [ ] Acoplamiento, cohesión e inversión de dependencias sin contenedor

**Salida:** motor de reglas extensible mediante interfaces y composición.

## Fase 4 — Errores, contratos y recursos

- [ ] Jerarquía de `Throwable`; errores frente a excepciones
- [ ] Excepciones comprobadas y no comprobadas; propagación y wrapping
- [ ] Excepciones de dominio y mensajes útiles
- [ ] `try-with-resources`, `AutoCloseable` y excepciones suprimidas
- [ ] Validación de precondiciones, invariantes y valores de retorno
- [ ] Debugging, lectura de stack traces y logging con `System.Logger`

**Salida:** importador de archivos que informe errores recuperables sin perder su causa.

## Fase 5 — Genéricos, colecciones y complejidad

- [ ] Tipos y métodos genéricos, inferencia y borrado de tipos
- [ ] Límites, wildcards y principio PECS
- [ ] `List`, `Set`, `Map`, `Queue`, `Deque` e iteradores
- [ ] Elegir implementaciones según orden, duplicados, acceso y mutabilidad
- [ ] `Comparable`, `Comparator`, ordenamiento y búsqueda
- [ ] Complejidad temporal y espacial; vistas, copias y colecciones inmutables

**Salida:** catálogo en memoria con búsquedas, índices, ordenamientos y estadísticas.

## Fase 6 — Programación funcional y Stream API

- [ ] Lambdas, referencias a métodos y captura de variables
- [ ] Interfaces funcionales estándar y creación de interfaces propias
- [ ] Operaciones intermedias, terminales, evaluación perezosa y reducción
- [ ] `Collector` y agrupaciones; escribir un collector sencillo
- [ ] `Optional`: usos apropiados y abusos frecuentes
- [ ] Efectos secundarios, streams infinitos y paralelismo con criterio
- [ ] Gatherers solo si son estables en el JDK elegido

**Salida:** procesador de datos que genere reportes desde CSV usando streams.

## Fase 7 — APIs esenciales del JDK

- [ ] `String`, text blocks, Unicode, locales y expresiones regulares
- [ ] Fechas, duraciones, zonas horarias y formateo con `java.time`
- [ ] Archivos y directorios con NIO.2: `Path`, `Files` y traversal
- [ ] Streams de bytes y caracteres, buffers, charsets y compresión
- [ ] Configuración con `Properties` y variables de entorno
- [ ] Codificación de datos y formatos: CSV manual; JSON mediante una librería pequeña
- [ ] Evitar Java Serialization para datos persistentes nuevos

**Salida:** analizador de logs que procese archivos grandes sin cargarlos completos en memoria.

## Fase 8 — Calidad, testing y mantenibilidad

- [ ] Pruebas unitarias con JUnit 5, estructura AAA y casos parametrizados
- [ ] Dobles de prueba manuales; Mockito como tema opcional
- [ ] Pruebas de integración, temporales y deterministas
- [ ] Diseño testeable e inyección de dependencias manual por constructor
- [ ] Refactoring, análisis estático, cobertura y límites de la cobertura
- [ ] Contratos, casos límite y property-based testing como extensión

**Salida:** cubrir y refactorizar los proyectos anteriores con una pirámide de pruebas razonable.

## Fase 9 — Persistencia con SQL y JDBC

- [ ] Modelo relacional, claves, restricciones, índices y SQL básico
- [ ] Conexiones, `DataSource`, `PreparedStatement` y `ResultSet`
- [ ] Parámetros seguros y prevención de SQL injection
- [ ] Transacciones, aislamiento, commit, rollback y savepoints
- [ ] Batch, claves generadas y mapeo manual de filas
- [ ] Patrón Repository/DAO, migraciones y pool de conexiones mediante librerías
- [ ] Pruebas de integración contra una base de datos real

**Salida:** aplicación de consola con CRUD, búsquedas y una operación transaccional.

## Fase 10 — Redes y HTTP sin framework

- [ ] TCP/IP, DNS, puertos, sockets y timeouts a nivel conceptual
- [ ] Cliente HTTP del JDK: peticiones síncronas y asíncronas
- [ ] HTTP: métodos, códigos, headers, caché, idempotencia y contenido
- [ ] Servidor HTTP incluido en el JDK para aprendizaje y herramientas internas
- [ ] JSON, validación de entrada y manejo consistente de errores
- [ ] TLS, certificados, secretos y límites de confianza
- [ ] Límites del servidor del JDK y cuándo adoptar una librería o framework

**Salida:** API HTTP pequeña en Java puro y un cliente que la consuma.

## Fase 11 — Concurrencia

- [ ] Procesos, threads, tareas, estados y condiciones de carrera
- [ ] Java Memory Model, visibilidad, atomicidad y *happens-before*
- [ ] Inmutabilidad, confinamiento, `synchronized`, locks y atomics
- [ ] Colecciones concurrentes, bloqueos, deadlocks y cancelación
- [ ] `ExecutorService`, pools, `Future` y planificación de tareas
- [ ] `CompletableFuture`: composición y manejo de errores
- [ ] Virtual threads y concurrencia estructurada cuando corresponda al JDK
- [ ] `Flow` y backpressure como tema avanzado

**Salida:** procesador concurrente con cancelación, timeouts, métricas y pruebas repetibles.

## Fase 12 — JVM, observabilidad y rendimiento

- [ ] Class loading, bytecode, reflexión, anotaciones y proxies del JDK
- [ ] Stack, heap, metaspace, referencias y fugas de memoria
- [ ] Garbage collectors y criterios para elegir, sin memorizar flags
- [ ] JIT, warm-up y por qué un benchmark casero engaña
- [ ] Medición con JMH; diagnóstico con `jcmd`, `jstack`, `jmap` y JFR
- [ ] Logging estructurado, métricas y trazas a nivel conceptual
- [ ] Optimizar a partir de evidencia y definir presupuestos de rendimiento

**Salida:** investigar y documentar un problema real de CPU, memoria o concurrencia.

## Fase 13 — Diseño y distribución de una aplicación

- [ ] Arquitectura por capas o puertos y adaptadores sin framework
- [ ] Separar dominio, casos de uso, infraestructura y entrada/salida
- [ ] Configuración externa, shutdown ordenado y manejo de señales
- [ ] Sistema de módulos (`module-info.java`) y `ServiceLoader`
- [ ] JAR ejecutable, runtime mínimo con `jlink` y empaquetado con `jpackage`
- [ ] Seguridad de dependencias, actualización y reproducibilidad del build
- [ ] CI, contenedores y despliegue como complementos opcionales

**Salida:** proyecto integrador documentado, probado, empaquetado y ejecutable desde cero.

## Fase 14 — Especializaciones opcionales

- [ ] Internacionalización y localización
- [ ] Criptografía y seguridad con las APIs estándar
- [ ] Procesamiento XML, XPath y validación de esquemas
- [ ] Anotaciones y annotation processing
- [ ] JNI, Foreign Function & Memory API o integración nativa
- [ ] Interfaces gráficas con Swing o JavaFX —JavaFX no forma parte del JDK—
- [ ] Reactive Streams, mensajería y sistemas distribuidos a nivel conceptual

## Proyecto integrador sugerido

Construir un sistema de reservas, biblioteca o gestión de gastos con:

- [ ] CLI y API HTTP como adaptadores de entrada
- [ ] Casos de uso y dominio independientes de JDBC y HTTP
- [ ] Persistencia JDBC con migraciones y transacciones
- [ ] Validación, errores de dominio y logging
- [ ] Pruebas unitarias y de integración
- [ ] Una tarea concurrente o programada con cancelación segura
- [ ] Configuración externa y cierre ordenado
- [ ] Build reproducible, JAR ejecutable y documentación de decisiones

## Criterio de finalización

El roadmap no termina al marcar todos los temas. Se considera completado cuando se puede diseñar, probar, diagnosticar y empaquetar una aplicación Java sin depender de un framework para resolver la estructura fundamental.
