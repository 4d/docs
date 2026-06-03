---
id: object-get-list-reference
title: OBJECT Get list reference
slug: /commands/object-get-list-reference
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get list reference.Syntax-->**OBJECT Get list reference** ( * ; *objeto* : Text {; *tipoLista* : Integer} ) : Integer<br/>**OBJECT Get list reference** ( *objeto* : Variable, Field {; *tipoLista* : Integer} ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get list reference.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594; | Nombre de objeto (si * se especifica) o <br/>Campo o variable (si * se omite) |
| tipoLista | Integer | &#8594; | Tipo de lista: lista de Selección, lista obligatoria o la lista de excluidos |
| Resultado | Integer | &#8592; | Número de referencia de lista |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|14|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.OBJECT Get list reference.Summary-->El comando **OBJECT Get list reference** devuelve el número de referencia (*RefList*) de la lista jerárquica asociada al objeto o grupo de objetos designados por los parámetros *objeto* y *\** .<!-- END REF-->  
  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
  
Por defecto, si omite el parámetro *tipoLista*, el comando devuelve el nombre de la lista de opciones (lista de valores) asociado al objeto. También puede obtener el número de referencia de las listas obligatoria o las listas de excluidos pasando en *tipoLista*, una de las siguientes constantes del tema "*Propiedades de los objetos*":  
  
| Constante     | Tipo         | Valor | Comentario                                                                                         |
| ------------- | ------------ | ----- | -------------------------------------------------------------------------------------------------- |
| Choice list   | Entero largo | 0     | Lista simple de selección de valores (opción "Lista" en la Lista de Propiedades) (por defecto)     |
| Excluded list | Entero largo | 2     | Lista de valores no aceptados para la entrada (Opción "Exclusiones" en la lista de propiedades)    |
| Required list | Entero largo | 1     | Lista sólo los valores aceptados para la entrada (Opción "Obligatoria" en la Lista de Propiedades) |

  
Si no hay una lista jerárquica asociada al objeto para el *tipoLista* definido, el comando devuelve 0.

## Ver también 

[OBJECT Get list name](../commands/object-get-list-name)  
[OBJECT SET LIST BY REFERENCE](../commands/object-set-list-by-reference)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1267 |
| Hilo seguro | no |


