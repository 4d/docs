---
id: wp-selection-range
title: WP Selection range
slug: /WritePro/commands/wp-selection-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Selection range.Syntax-->**WP Selection range** ( {* ;} *wpArea* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Selection range.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, wpArea es un nombre de objeto de formulario(cadena). Si se omite, wpArea es un campo de objeto o variable. |
| wpArea | Text | &#8594;  | Nombre del objeto de formulario (si * se especifica) o variable de objeto 4D Write Pro o campo (si se omite *) |
| Resultado | Object | &#8592; | Rango de objeto |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Compatibilidad 

<!--REF #_command_.WP Selection range.Summary-->**WP Selection range** fue nombrado **WP Get selection** en versiones anteriores de 4D Write Pro.<!-- END REF--> Ha sido renombrado por claridad.

#### Descripción 

El comando **WP Selection range** devuelve un nuevo objeto de rango de texto o un objeto imagen basado en el texto seleccionado actualmente en el área *wpArea* de 4D Write Pro.

Si pasa el parámetro opcional *\**, indica que *wpArea* es un nombre de objeto de formulario (cadena). Si no pasa este parámetro, indica que *wpArea* es una variable o campo objeto 4D Write Pro. Si no se pasa un área 4D Write Pro en el parámetro *wpArea*, se devuelve un objeto vacío.

**Nota**: este comando sólo puede utilizarse si *wpArea* está asociada con un objeto de formulario (es decir, se muestra en el formulario/página actual).

Si se selecciona una imagen anclada (imagen en una ubicación fija) en *wpArea*, **WP Selection range** devuelve un objeto de referencia de imagen y no un objeto rango (para más información, consulte la descripción del comando [WP Add picture](../commands/wp-add-picture.md). De lo contrario, **WP Selection range** devuelve un nuevo objeto de rango. Para mayor información sobre objetos de rango, consulte *Comandos de gestión de rangos*.

#### Ejemplo 

Usted desea obtener el texto seleccionado de un área 4D Write Pro:

```4d
 $range:=WP Selection range(*;"WParea")
```

#### Ver también 

[WP Paragraph range](wp-paragraph-range.md)  
[WP Picture range](wp-picture-range.md)  
[WP Text range](wp-text-range.md)  