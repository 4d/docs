---
id: wp-get-body
title: WP Get body
slug: /WritePro/commands/wp-get-body
displayed_sidebar: docs
---

<!--REF #_command_.WP Get body.Syntax-->**WP Get body** ( *wpDoc* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get body.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| Resultado | Object | &#8592; | Cuerpo 4D Write Pro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get body.Summary-->El comando **WP Get body** devuelve el elemento cuerpo del documento 4D Write Pro *wpDoc*.<!-- END REF-->

Esta referencia se puede pasar a:

* el comando [WP SELECT](wp-select.md) para seleccionar el cuerpo del documento.
* el comando [WP Text range](wp-text-range.md) para definir el cuerpo como un rango.
* los comandos [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) y [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) para manejar los atributos del cuerpo.

#### Ejemplo 

Usted desea copiar la parte del cuerpo de un documento 4D Write Pro a otro documento 4D Write Pro:

```4d
 var $bodySource;$rangeSource;$tempoc;$bodyTarget;$rangeTarget : Object
 
 $bodySource:=WP Get body([TEMPLATES]WPtemplate)
 $rangeSource:=WP Text range($bodySource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $bodyTarget:=WP Get body([Docs]MyWPDoc)
 $rangeTarget:=WP Text range($bodyTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### Ver también 

[WP Text range](wp-text-range.md)  