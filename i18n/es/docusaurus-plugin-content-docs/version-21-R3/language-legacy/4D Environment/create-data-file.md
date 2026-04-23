---
id: create-data-file
title: CREATE DATA FILE
slug: /commands/create-data-file
displayed_sidebar: docs
---

<!--REF #_command_.CREATE DATA FILE.Syntax-->**CREATE DATA FILE** ( *rutaAcceso* : Text )<!-- END REF-->
<!--REF #_command_.CREATE DATA FILE.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaAcceso | Text | &#8594; | Nombre o ruta de acceso completa del archivo de datos a abrir |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|13|Modificado|
|6.8|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.CREATE DATA FILE.Summary-->El comando **CREATE DATA FILE** permite crear un nuevo archivo de datos en disco y reemplazar rápidamente el archivo de datos abierto por la aplicación 4D.<!-- END REF--> 

El funcionamiento general de este comando es idéntico al del comando [OPEN DATA FILE](../commands/open-data-file); la única diferencia es que el nuevo archivo de datos designado por el parámetro *rutaAcceso* se crea justo después de que se abre nuevamente la estructura.

Antes de lanzar la operación, el comando verifica que la ruta de acceso no corresponda a un archivo existente.

**4D Server:** a partir de 4D v13, este comando puede ejecutarse con 4D Server. En este contexto, efectúa una llamada interna a [QUIT 4D](../commands/quit-4d) en el servidor (lo que produce la aparición de una caja de diálogo en cada equipo remoto, indicando que el servidor está en proceso de salir) antes de la creación del archivo designado. 

## Ver también 

[OPEN DATA FILE](../commands/open-data-file)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 313 |
| Hilo seguro | yes |


