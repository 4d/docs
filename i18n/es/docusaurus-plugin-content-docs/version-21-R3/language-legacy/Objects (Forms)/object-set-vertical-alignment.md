---
id: object-set-vertical-alignment
title: OBJECT SET VERTICAL ALIGNMENT
slug: /commands/object-set-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Syntax-->**OBJECT SET VERTICAL ALIGNMENT** ( * ; *objeto* : Text ; *alineacion* : Integer )<br/>**OBJECT SET VERTICAL ALIGNMENT** ( *objeto* : Field, Variable ; *alineacion* : Integer )<!-- END REF-->
<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594; | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| alineacion | Integer | &#8594; | Código de alineación |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|13|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Summary-->El comando **OBJECT SET VERTICAL ALIGNMENT** modifica por programación el tipo de alineación vertical aplicada al objeto designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.   
  
En *alineacion*, puede pasar una de las siguientes constantes, del tema *Propiedades de los objetos*:  
  
| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Align bottom  | Entero largo | 4     |
| Align center  | Entero largo | 3     |
| Align default | Entero largo | 1     |
| Align top     | Entero largo | 2     |
  
  
La alineación vertical puede aplicarse a los siguientes tipos de objetos de formulario:
* list boxes,
* columnas de list box,
* encabezados y pies de list box.

## Ver también 

[OBJECT Get horizontal alignment](../commands/object-get-horizontal-alignment)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET HORIZONTAL ALIGNMENT](../commands/object-set-horizontal-alignment)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1187 |
| Hilo seguro | no |


