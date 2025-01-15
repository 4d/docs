---
id: wp-get-header
title: WP Get header
slug: /WritePro/commands/wp-get-header
displayed_sidebar: docs
---

<!--REF #_command_.WP Get header.Syntax-->**WP Get header** ( *objRango* ) | (*wpDoc* ; *indiceSeccion* {; *tipoSubSeccion*} )  -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get header.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango 4D Write Pro |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| indiceSeccion | Integer | &#8594;  | Índice de sección |
| tipoSubSeccion | Integer | &#8594;  | Tipo de subsección (wk first page, wk left page o wk right page) |
| Resultado | Object | &#8592; | Encabezado 4D Write Pro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get header.Summary-->El comando **WP Get header** devuelve el encabezado asociado al rango *objRango* o al *indiceSeccion* del documento *wpDoc*.<!-- END REF--> Si no se encuentra ningún encabezado con respecto a los parámetros, el comando devuelve **Null**.

* Con la primera sintaxis (utilizando el parámetro *objRango*), el comando devuelve el encabezado de la primera página en el rango o sección/subsección pasada en parámetro. Si una subsección está activa en la página, el comando devuelve el encabezado de la subsección activa, por lo que siempre devuelve el encabezado visible.
* Con la segunda sintaxis (utilizando el parámetro *wpDoc*), el comando devuelve el encabezado de la sección *indiceSeccion* especificada (el valor *indiceSeccion* debe ser >=1).  
Si se pasa el parámetro *tipoSubSeccion*, el comando devuelve el encabezado asociado al tipo de subsección especificado. Puede pasar una de las siguientes constantes en el parámetro *tipoSubSeccion*:  

| Constante     | Tipo         | Valor |  
| ------------- | ------------ | ----- |  
| wk first page | Entero largo | 1     |  
| wk left page  | Entero largo | 2     |  
| wk right page | Entero largo | 3     |  
    
Si no se especifica el *tipoSubSeccion*, se devolverá el encabezado de la sección principal. En este caso, si una subsección está activa, el objeto de encabezado de la sección principal está *indefinido* (el encabezado de la sección principal sólo está disponible si no hay ninguna subsección wk first page o wk left page activa).

#### Ejemplo 

Usted desea copiar el encabezado de la primera página de un documento 4D Write Pro a los encabezados de todas las páginas de otro documento 4D Write Pro:

```4d
 var $headerSource;$rangeSource;$tempoc;$headerTarget;$rangeTarget : Object
 
 $headerSource:=WP Get header([TEMPLATES]WPtemplate;1;wk first page) //obtener el encabezado de la primera página de la sección 1
 $rangeSource:=WP Text range($headerSource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $headerTarget:=WP Get header([Docs]MyWPDoc;1) //todas las páginas de la sección 1
 $rangeTarget:=WP Text range($headerTarget;wk start text;wk end text)
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### Ver también 

*Utilizar un área 4D Write Pro*  
[WP DELETE HEADER ](wp-delete-header.md)  
[WP Get footer](wp-get-footer.md)  
[WP New header](wp-new-header.md)  
[WP Text range](wp-text-range.md)  