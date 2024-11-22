---
id: wp-get-footer
title: WP Get footer
slug: /WritePro/commands/wp-get-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP Get footer.Syntax-->**WP Get footer** ( *objRango* ) | (*wpDoc* ; *indiceSeccion* {; *tipoSubSeccion*} )  -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get footer.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango 4D Write Pro |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| indiceSeccion | Integer | &#8594;  | Índice de sección |
| tipoSubSeccion | Integer | &#8594;  | Subtipo de la sección (wk primera página, wk página de la izquierda, o wk página de la derecha) |
| Resultado | Object | &#8592; | Pie 4D Write Pro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get footer.Summary-->El comando **WP Get footer** devuelve el pie de página asociado al rango *objRango* o al *indiceSeccion* especificado del documento *wpDoc*.<!-- END REF--> Si no se encuentra ningún pie de página con respecto a los parámetros, el comando devuelve **Null**.

* Con la primera sintaxis (utilizando el parámetro *objRango*), el comando devuelve el pie de la primera página en el rango o la sección/subsección pasada en parámetro. Si una subsección está activa en la página, el comando devuelve el pie de la subsección activa, por lo que siempre devuelve el pie de página visible.
* Con la segunda sintaxis (utilizando el parámetro *wpDoc*), el comando devuelve el pie de la sección *indiceSeccion* especificada (el valor *indiceSeccion* debe ser >=1).  
Si se pasa el parámetro *tipoSubSeccion*, el comando devuelve el pie de página asociado al tipo de subsección especificado. Puede pasar una de las siguientes constantes en el parámetro *tipoSubSeccion*:  

| Constante     | Tipo         | Valor |  
| ------------- | ------------ | ----- |  
| wk first page | Entero largo | 1     |  
| wk left page  | Entero largo | 2     |  
| wk right page | Entero largo | 3     |  
 Si no se especifica *tipoSubSeccion*, se devolverá el pie de página de la sección principal. En este caso, si una subsección está activa, el objeto de pie de página de la sección principal no está *definido* (el pie de página de la sección principal sólo está disponible si no hay ninguna subsección wk first page o wk left page activa).

#### Ejemplo 

Usted desea copiar el pie de la primera página de un documento 4D Write Pro en los pies de todas las páginas de otro documento 4D Write Pro:

```4d
 var $footerSource;$rangeSource;$tempoc;$footerTarget;$rangeTarget : Object
 
 $footerSource:=WP Get footer([TEMPLATES]WPtemplate;1;wk first page) //obtiene el pie de la primera página de la sección 1
 $rangeSource:=WP Text range($footerSource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $footerTarget:=WP Get footer([Docs]MyWPDoc;1) //todas las páginas de la sección 1
 $rangeTarget:=WP Text range($footerTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### Ver también 

*Utilizar un área 4D Write Pro*  
[WP DELETE FOOTER](wp-delete-footer.md)  
[WP Get frame](wp-get-frame.md)  
[WP Get header](wp-get-header.md)  
[WP New footer](wp-new-footer.md)  