---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *name* : Text {; *} ) : Integer<br/>**Process number** ( *id* : Text {; *} ) : Integer<!-- END REF-->

<!--REF #_command_.Process number.Params-->

| Parámetros | Tipo     |                             | Descripción                                                      |
| ---------- | -------- | --------------------------- | ---------------------------------------------------------------- |
| name       | Text     | &#8594; | Nombre del proceso del que se desea obtener el número de proceso |
| id         | Text     | &#8594; | ID del proceso del que se desea obtener el número de proceso     |
| \*         | Operador | &#8594; | Devuelve el número de proceso del servidor                       |
| Resultado  | Integer  | &#8592; | Process number                                                   |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones           |
| ----------- | ------------------------ |
| 20 R7       | Soporte del parámetro id |

</details>

## Descripción

<!--REF #_command_.Process number.Summary-->The `Process number` command returns the number of the process whose *name* or *id* you pass in the first parameter<!-- END REF-->El comando `Process number` devuelve el número del proceso cuyo *name* o *id* pasa en el primer parámetro. Si no se encuentra ningún proceso, `Process number` devuelve 0.

El parámetro opcional \* permite recuperar, de un 4D remoto, el número de un proceso que se ejecuta en el servidor. En este caso, el valor devuelto es negativo. Esta opción es especialmente útil cuando se utilizan los comandos [GET PROCESS VARIABLE](../commands/get-process-variable), [SET PROCESS VARIABLE](../commands/set-process-variable) y [VARIABLE TO VARIABLE](../commands/variable-to-variable).

Si el comando se ejecuta con el parámetro \* desde un proceso en la máquina servidor, el valor devuelto es positivo.

## Ver también

[GET PROCESS VARIABLE](../commands/get-process-variable)\
[Process state](../commands/process-state)\
[SET PROCESS VARIABLE](../commands/set-process-variable)

## Propiedades

|                   |     |
| ----------------- | --- |
| Número de comando | 372 |
| Hilo seguro       | sí  |



