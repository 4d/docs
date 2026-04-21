---
id: sax-open-xml-element-arrays
title: SAX OPEN XML ELEMENT ARRAYS
slug: /commands/sax-open-xml-element-arrays
displayed_sidebar: docs
---

<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Syntax-->**SAX OPEN XML ELEMENT ARRAYS** ( *documento* : Time ; *etiqueta* : Text {; *arrayNomsAtrib* : Text array ; *arrayValoresAtrib* : Array} {; ...(*arrayNomsAtrib* : Text array, *arrayValoresAtrib* : Array)} )<!-- END REF-->
<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594; | Referencia del documento abierto |
| etiqueta | Text | &#8594; | Nombre del elemento a abrir |
| arrayNomsAtrib | Text array | &#8594; | Array de nombres de atributos |
| arrayValoresAtrib | Array | &#8594; | Array de valores de atributos |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|12|Modificado|
|2004|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Summary-->El comando SAX OPEN XML ELEMENT ARRAYS permite añadir un nuevo elemento en el documento XML cuya referencia se pasa en *document* como también, opcionalmente, atributos y sus valores en forma de arrays.<!-- END REF--> 

Excepto por el soporte de arrays (ver a continuación), este comando es idéntico a [SAX OPEN XML ELEMENT](sax-open-xml-element.md "SAX OPEN XML ELEMENT"). Por favor consulte la descripción de este comando para mayor información sobre su funcionamiento. 

SAX OPEN XML ELEMENT ARRAYS acepta arrays de tipo fecha, numéricos, booleanos e imagen como parámetros *arrayValoresAtrib*. 4D automáticamente realiza todas las conversiones necesarias; puede configurar estas conversiones utilizando el comando [XML SET OPTIONS](xml-set-options.md "XML SET OPTIONS"). 

Opcionalmente, el comando SAX OPEN XML ELEMENT ARRAYS permite pasar pares de atributos y de valores de atributos en forma de arrays en los parámetros *arrayNomsAtrib* y *arrayValoresAtrib*.  
  
Los arrays deben haber sido creados previamente y funcionar por pares. Puede pasar tantos pares de arrays y elementos en cada par como quiera. 

## Ejemplo 

El siguiente método: 

```4d
 ARRAY STRING(80;aNomsAtrib;2)
 ARRAY STRING(80;aValoresAtrib;2)
 vElement:="Libro"
 aNomsAtrib{1}:="Font"
 aValoresAtrib{1}:="Arial"
 aNomsAtrib{2}:="Style"
 aValoresAtrib{2}:="Bold"
 SAX OPEN XML ELEMENT ARRAYS($DocRef;vElemento;tNomsAtrib;tValoresAtrib)
```

... escribirá en el documento: 

```XML
<Book Font="Arial" Style="Bold">
```

## Ver también 

[SAX CLOSE XML ELEMENT](../commands/sax-close-xml-element)  
[SAX OPEN XML ELEMENT](../commands/sax-open-xml-element)  
[XML SET OPTIONS](../commands/xml-set-options)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 921 |
| Hilo seguro | yes |


