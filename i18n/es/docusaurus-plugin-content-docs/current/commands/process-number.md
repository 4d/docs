---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *name* {; *} ) : Integer<br/>**Process number** ( *id* {; *} ) : Integer<!-- END REF-->

<!--REF #_command_.Process number.Params-->

| Parámetros | Tipo     |   | Descripción                                                      |
| ---------- | -------- | - | ---------------------------------------------------------------- |
| name       | Text     | → | Nombre del proceso del que se desea obtener el número de proceso |
| id         | Text     | → | ID del proceso del que se desea obtener el número de proceso     |
| \*         | Operador | → | Devuelve el número de proceso del servidor                       |
| Resultado  | Integer  | ← | Process number                                                   |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones           |
| ----------- | ------------------------ |
| 20 R7       | Soporte del parámetro id |

</details>

#### Descripción

<!--REF #_command_.Process number.Summary-->`Process number` returns the number of the process whose *name* or *id* you pass in the first parameter<!-- END REF-->`Process number` returns the number of the process whose *name* or *id* you pass in the first parameter`Process number` devuelve el número del proceso cuyo *name* o *id* pasa en el primer parámetro. Si no se encuentra ningún proceso, `Process number` devuelve 0.

El parámetro opcional \* permite recuperar, de un 4D remoto, el número de un proceso que se ejecuta en el servidor. En este caso, el valor devuelto es negativo. Esta opción es especialmente útil cuando se utilizan los comandos [GET PROCESS VARIABLE](../commands-legacy/get-process-variable.md), [SET PROCESS VARIABLE](../commands-legacy/set-process-variable.md) y [VARIABLE TO VARIABLE](../commands-legacy/variable-to-variable.md).

Si el comando se ejecuta con el parámetro \* desde un proceso en la máquina servidor, el valor devuelto es positivo.

#### Ver también

[GET PROCESS VARIABLE](../commands-legacy/get-process-variable.md)\
[Process state](../commands-legacy/process-state.md)\
[SET PROCESS VARIABLE](../commands-legacy/set-process-variable.md)

#### Propiedades

|                |                                                                     |
| -------------- | ------------------------------------------------------------------- |
| Command number | 372                                                                 |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
