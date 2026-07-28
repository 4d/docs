---
id: get-current-printer
title: Get current printer
slug: /commands/get-current-printer
displayed_sidebar: docs
---

<!--REF #_command_.Get current printer.Syntax-->**Get current printer**  : Text<!-- END REF-->
<!--REF #_command_.Get current printer.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nombre de la impresora actual |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|15 R5|Modificado|
|2003|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.Get current printer.Summary-->El comando **Get current printer**devuelve el nombre de la impresora actual definida en la aplicación 4D.<!-- END REF--> Por defecto, al inicio de 4D, la impresora actual es la impresora definida en el sistema.

Si la impresora actual es administrada utilizando un servidor de impresión (spooler), se devuelve la ruta de acceso completa (bajo Windows) o el nombre del spooler (bajo macOS).

Para obtener la lista de impresoras disponibles como también información adicional, utilice el comando [PRINTERS LIST](../commands/printers-list). Para modificar la impresora actual, utilice el comando [SET CURRENT PRINTER](../commands/set-current-printer).

**Nota:** cuando la constante Generic PDF driver se utiliza con [SET CURRENT PRINTER](../commands/set-current-printer), [Get current printer](../commands/get-current-printer) devuelve "\_4d\_pdf\_printer" o el nombre actual del driver PDF.

## Gestión de errores 

Si no hay ninguna impresora instalada, se genera un error.

## Ver también 

[PRINTERS LIST](../commands/printers-list)  
[SET CURRENT PRINTER](../commands/set-current-printer)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 788 |
| Hilo seguro | no |


