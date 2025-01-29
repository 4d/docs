---
id: wp-get-attributes
title: WP GET ATTRIBUTES
slug: /WritePro/commands/wp-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP GET ATTRIBUTES.Syntax-->**WP GET ATTRIBUTES** ( *rangoObj* ; *nomAtrib* ; *valorAtrib* {; *nomAtrib2* ; *valorAtrib2* ; ... ; *nomAtribN* ; *valorAtribN*} )<!-- END REF-->
<!--REF #_command_.WP GET ATTRIBUTES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rangoObj | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| nomAtrib | Text | &#8594;  | Nombre del atributo a obtener |
| valorAtrib | Texto, Número, Array, Collection, Imagen, Fecha | &#x1F858; | Valor actual de atributo para el rango de texto. |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP GET ATTRIBUTES.Summary-->El comando **WP GET ATTRIBUTES** devuelve el valor de todo atributo en un rango, encabezado, cuerpo, pie, tabla o documento 4D Write Pro.<!-- END REF--> Este comando le permite acceder a todo tipo de atributos internos 4D Write Pro: carácter, párrafo, documento, tabla o imagen.

En *rangoObj*, puede pasar:

* un rango, o
* un elemento (encabezado / pie de página / cuerpo / tabla / párrafo / imagen anclada o en línea / sección /subsección/ hoja de estilo) o
* un documento 4D Write Pro

Para obtener una lista completa de los atributos a pasar en *nomAtrib*, así como también sus respectivos valores, por favor consulte la sección *Atributos 4D Write Pro*.

Si hay diferentes valores para el mismo atributo en el elemento pasado como parámetro, el comando devuelve:

* para valores numéricos, wk mixed
* para un array, un array vacío (paradas de tabulaciones, color si *valorAttib* está definido como array), con la excepción de wk text shadow offset para el cual el valor array siempre contendrá 2 entradas que pueden definirse por separado como wk mixed si cualquier desplazamiento horizontal o vertical (o ambos) se combinan.
* para valores cadena, una cadena vacía
* para valores imagen, una imagen vacía.

**Nota**: si *rangoObj* contiene un párrafo y una hoja de estilo de caracteres, se devuelve el nombre de la hoja de estilo del párrafo.

#### Ejemplo 

Usted quiere conseguir el color de fondo del área seleccionada:

```4d
 $range:=WP Selection range(*;"WParea")
 WP GET ATTRIBUTES($range;wk background color;$bcol)
```

#### Ver también 

*Atributos 4D Write Pro*  
*Constantes 4D Write Pro*  
[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)  
[WP SET ATTRIBUTES](wp-set-attributes.md)  