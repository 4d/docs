---
id: wp-table-range
title: WP Table range
slug: /WritePro/commands/wp-table-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Table range.Syntax-->**WP Table range** ( *objRango* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Table range.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango o referencia del elemento o documento 4D Write Pro |
| Resultado | Object | &#8592; | Objeto rango que contiene tablas únicamente |

<!-- END REF-->

#### Compatibilidad 

<!--REF #_command_.WP Table range.Summary-->**WP Table range** fue nombrado **WP Create table range** en versiones anteriores de 4D Write Pro.<!-- END REF--> Se ha renombrado por claridad. 

#### Descripción 

El comando **WP Table range** devuelve un objeto rango que trata solo las tablas contenidas en *objRango* pasado como parámetro. Devolverá un rango de wk type table, incluso si *objRango* pasado como parámetro no contiene una tabla. El objeto de rango de tabla devuelto puede ser utilizado por [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) y [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) para manejar los atributos que se aplican a las tablas y a los contenidos de la tabla.

En el parámetro *objRango*, puede pasar:

* un rango, o
* un elemento (cuerpo / encabezado / pie de página / párrafo / sección / subsección), o
* un documento 4D Write Pro

#### Ejemplo 

Usted desea modificar el aspecto de las tablas en el rango de tabla:

```4d
 tableRange:=WP Table range(myDoc)
  //atributos tabla
 WP SET ATTRIBUTES(tableRange;wk border style;wk solid;wk border color;"Blue";wk border width;"3px")
 WP SET ATTRIBUTES(tableRange;wk table align;wk center)
  //atributos texto   
 WP SET ATTRIBUTES(tableRange;wk font size;12)
 WP SET ATTRIBUTES(tableRange;wk text transform;wk capitalize)
 WP SET ATTRIBUTES(tableRange;wk font bold;wk true)
```

#### Ver también 

[WP Get elements](wp-get-elements.md)  
[WP Text range](wp-text-range.md)  