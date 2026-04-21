---
id: object-get-subform
title: OBJECT GET SUBFORM
slug: /commands/object-get-subform
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SUBFORM.Syntax-->**OBJECT GET SUBFORM** ( * ; *objeto* : Text ; *puntTabla* ; *subFormDet* : Text {; *subFormList* : Text} )<br/>**OBJECT GET SUBFORM** ( *objeto* : Field, Variable ; *puntTabla* ; *subFormDet* : Text {; *subFormList* : Text} )<!-- END REF-->
<!--REF #_command_.OBJECT GET SUBFORM.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594; | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| puntTable | Table | &#8592; | Puntero a la tabla del formulario |
| subFormDet | Text | &#8592; | Nombre del formulario detallado del subformulario |
| subFormList | Text | &#8592; | Nombre del formulario listado del subformulario (formulario tabla) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|16 R6|Modificado|
|13|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.OBJECT GET SUBFORM.Summary-->El comando **OBJECT GET SUBFORM** obtiene los nombres del o de los formulario(s) asociado(s) al objeto subformulario designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
  
En el parámetro *puntTabla*, el comando devuelve un puntero a la tabla del o de los formulario(s) utilizado(s). Si el subformulario utiliza un formulario proyecto, el parámetro contiene [Is nil pointer](../commands/is-nil-pointer).  
  
En el parámetro *subFormDet* y(opcionalmente) en los parámetros *subFormList*, el comando devuelve:

* el nombre del formulario si el subformulario fue creado en el editor de formularios 4D.
* el atributo "nombre" del subformulario si el subformulario se creó a partir de un archivo .json o un objeto 4D.  
En ambos casos, si el atributo "nombre" no está definido, el comando devolverá:  
   * para un archivo .json, el nombre del archivo .json (sin extensión)  
   * para un objeto, "sin título"

Si no hay formulario listado, se devuelve una cadena vacía en el parámetro *subFormList*.

## Ver también 

[OBJECT GET SUBFORM CONTAINER SIZE](../commands/object-get-subform-container-size)  
[OBJECT SET SUBFORM](../commands/object-set-subform)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1139 |
| Hilo seguro | no |


