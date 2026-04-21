---
id: dom-get-xml-element-name
title: DOM GET XML ELEMENT NAME
slug: /commands/dom-get-xml-element-name
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ELEMENT NAME.Syntax-->**DOM GET XML ELEMENT NAME** ( *elementRef* : Text ; *nomElement* : Variable )<!-- END REF-->
<!--REF #_command_.DOM GET XML ELEMENT NAME.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594; | Referencia del elemento XML |
| nomElement | Variable | &#8592; | Nombre del elemento |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2004|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.DOM GET XML ELEMENT NAME.Summary-->El comando DOM GET XML ELEMENT NAME devuelve en el parámetro *nomElement*, el nombre del elemento XML designado por *elementRef*.<!-- END REF-->. Si el tipo de variable *nomElement* no está definido, el tipo texto se utiliza de manera predeterminada.

Para mayor información sobre los nombres de elementos XML, consulte la sección *Presentación de los comandos XML DOM*.

## Ejemplo 

Este método devuelve el nombre del elemento $xml\_Element\_Ref:

```4d
 var $xml_Element_Ref : Text
 var $nom : Text
 
 DOM GET XML ELEMENT NAME($xml_Element_Ref;$nom)
```

## Variables y conjuntos del sistema 

Si el comando ha sido ejecutado correctamente, la variable sistema OK toma el valor 1\. Si ocurre un error, toma el valor 0.

## Ver también 

[DOM Get XML element](../commands/dom-get-xml-element)  
[DOM GET XML ELEMENT VALUE](../commands/dom-get-xml-element-value)  
[DOM SET XML ELEMENT NAME](../commands/dom-set-xml-element-name)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 730 |
| Hilo seguro | yes |
| Modifica variables | OK |


