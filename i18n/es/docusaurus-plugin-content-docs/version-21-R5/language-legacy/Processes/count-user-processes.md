---
id: count-user-processes
title: Count user processes
slug: /commands/count-user-processes
displayed_sidebar: docs
---

<!--REF #_command_.Count user processes.Syntax-->**Count user processes**  : Integer<!-- END REF-->
<!--REF #_command_.Count user processes.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de procesos abiertos (a excepción de los procesos kernel) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL Release 3|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.Count user processes.Summary-->Count user processes devuelve el número de los procesos abiertos directa o indirectamente por el usuario (procesos para los cuales el parámetro *origen* devuelto por el comando Count user processes es mayor o igual a 0).<!-- END REF-->

## Ver también 

[Count tasks](../commands/count-tasks)  
[Count users](../commands/count-users)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 343 |
| Hilo seguro | yes |


