---
id: wp-reset-attributes
title: WP RESET ATTRIBUTES
slug: /WritePro/commands/wp-reset-attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP RESET ATTRIBUTES.Syntax-->**WP RESET ATTRIBUTES** ( *rangoObj* ; *nomAtrib* {; *nomAtrib2* ; ... ; *nomAtribN*} )<!-- END REF-->
<!--REF #_command_.WP RESET ATTRIBUTES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rangoObj | Objeto | &#x1F852; | Rango o elemento o documento 4D Write Pro |
| nomAtrib | Cadena | &#x1F852; | Nombre del atributo a eliminar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP RESET ATTRIBUTES.Summary-->El comando **WP RESET ATTRIBUTES** permite restaurar el valor de uno o más atributos en el rango, elemento, o documento pasado como parámetro.<!-- END REF--> Este comando puede eliminar cualquier tipo de atributo interno 4D Write Pro: carácter, párrafo, documento, tabla o imagen. 

En el primer parámetro, puede pasar:

* un objeto (*rangoObj*) que puede ser:  
   * un rango o  
   * un elemento (encabezado / pie de página / cuerpo / tabla / párrafo / imagen en línea o anclada / sección / subsección / hoja de estilo) o  
   * documento 4D Write Pro

Cuando un valor de atributo se elimina con el comando **WP RESET ATTRIBUTES**, se reinicializa en el valor predeterminado. Los valores por defecto se listan en la sección *Atributos 4D Write Pro*.

**Notas:** 

* Cuando **WP RESET ATTRIBUTES** se aplica a un objeto sección/sub-sección, los atributos son heredadeos de la sección o documento padre.
* Cuando **WP RESET ATTRIBUTES** se aplica a un objeto hoja de estilo, los atributos se eliminan de la hoja de estilo a menos que sea la hoja de estilo predeterminada ("Normal"). En este caso, el valor predeterminado se aplica al atributo (la hoja de estilo "Normal" define todos los atributos de la hoja de estilo).

Si el atributo a reinicializar no se definió en el elemento pasado como parámetro, el comando no hace nada.

#### Ejemplo 

Usted desea eliminar los diferentes atributos de la siguiente selección:

![](../../assets/en/WritePro/commands/pict2643861.EN.png)

Puede ejecutar:

```4d
 $range:=WP Get selection(*;"WParea")
 WP RESET ATTRIBUTES($range;wk padding)
 WP RESET ATTRIBUTES($range;wk background color)
 WP RESET ATTRIBUTES($range;wk text underline style)
 WP RESET ATTRIBUTES($range;wk margin)
 WP RESET ATTRIBUTES($range;wk border style)
```

El documento resultante es:

![](../../assets/en/WritePro/commands/pict2643863.EN.png)

#### Ver también 

*Atributos 4D Write Pro*  
[WP GET ATTRIBUTES](wp-get-attributes.md)  
[WP SET ATTRIBUTES](wp-set-attributes.md)  