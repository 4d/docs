---
id: dom-set-xml-declaration
title: DOM SET XML DECLARATION
slug: /commands/dom-set-xml-declaration
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML DECLARATION.Syntax-->**DOM SET XML DECLARATION** ( *elementRef* : Text ; *codificacion* : Text {; *autonomo* : Boolean {; *indentacion* : Boolean}} )<!-- END REF-->
<!--REF #_command_.DOM SET XML DECLARATION.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594; | Referencia del elemento XML |
| codificacion | Text | &#8594; | Conjunto de caracteres del documento XML |
| autonomo | Boolean | &#8594; | True = el documento es autónomo False (por defecto) = el documento no es autónomo |
| indentacion | Boolean | &#8594; | ** Obsoleto no utilizar ** |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|12|Renombrar|
|12|Modificado|
|2004|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.DOM SET XML DECLARATION.Summary-->El comando DOM SET XML DECLARATION permite definir diferentes opciones que útiles en la creación del árbol XML designado por *elementRef*.<!-- END REF--> Estas opciones hacen referencia a la codificación y a la propiedad autónoma del árbol: 

* *codificacion*: indica el conjunto de caracteres utilizado en el documento. Por defecto (si no se llama al comando), se utiliza el conjunto de caracteres UTF-8 (Unicode comprimido).  
**Nota:** si pasa un conjunto de caracteres que no soporta los comandos XML de 4D, se utilizará UTF-8\. Consulte *Conjuntos de caracteres* para ver la lista de conjuntos de caracteres soportados (sin embargo se recomienda UTF-8 en la mayoría de los casos).
* *autonomo*: indica si el árbol es autónomo ([True](../commands/true)) o si necesita otros archivos o recursos externos para su funcionamiento ([False](../commands/false)). Por defecto (si el comando no se llama o si se omite el parámetro), el árbol no es autónomo.
**Nota de compatibilidad:** El parámetro *indentacion* se conserva por razones de compatibilidad con las versiones anteriores de 4D pero su uso no se recomienda en 4D v12\. De ahora en adelante, para especificar la indentación del documento, se recomienda utilizar el comando [XML SET OPTIONS](../commands/xml-set-options).

## Ejemplo 

El siguiente ejemplo define la codificación a utilizar y la opción autónomo del elemento *elementRef*: 

```4d
 DOM SET XML DECLARATION(elementRef;"UTF-16";True)
```

## Ver también 

[DOM Create XML Ref](../commands/dom-create-xml-ref)  
[XML SET OPTIONS](../commands/xml-set-options)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 859 |
| Hilo seguro | yes |


