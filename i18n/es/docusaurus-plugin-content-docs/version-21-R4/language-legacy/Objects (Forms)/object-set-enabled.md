---
id: object-set-enabled
title: OBJECT SET ENABLED
slug: /commands/object-set-enabled
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ENABLED.Syntax-->**OBJECT SET ENABLED** ( * ; *objeto* : Text ; *activo* : Boolean )<br/>**OBJECT SET ENABLED** ( *objeto* : Variable, Field ; *activo* : Boolean )<!-- END REF-->
<!--REF #_command_.OBJECT SET ENABLED.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594; | Nombre del objeto (si se especifica *) o Variable (se se omite *) |
| activo | Boolean | &#8594; | True = objeto(s) activo(s), de lo contrario False |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|12|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.OBJECT SET ENABLED.Summary-->El comando OBJECT SET ENABLED utilizado para activar o desactivar el objeto o grupo de objetos especificado por *objeto* en el formulario actual.<!-- END REF-->   
  
Un objeto activo reacciona a los clics y atajos de teclado.  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable (variable objeto únicamente) en lugar de una cadena.  
  
Pase *True* en el parámetro *activo* para activar los objetos y *False* para desactivarlas.  
  
Este comando se puede aplicar a los siguientes tipos de objetos:  
  
* Botón, Botón por defecto, Botón 3D, Botón invisible, Botón inverso
* Radio botón, Botón de radio 3D, Botón Imagen
* Casilla de selección, Casilla de selección 3D
* Menú pop-up , Lista desplegable, Combo box, Menú/lista desplegable
* Termómetro, Regla
  
**Nota**: este comando no tiene efecto con un objeto al que se le ha asignado una acción estándar (4D se encarga de modificar el estado de este objeto cuando sea necesario), excepto en el caso de las acciones Validar y Cancelar.

## Ver también 

[OBJECT Get enabled](../commands/object-get-enabled)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1123 |
| Hilo seguro | no |


