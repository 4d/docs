---
id: wp-reset-attributes
title: WP RESET ATTRIBUTES
displayed_sidebar: docs
---

<!--REF #_command_.WP RESET ATTRIBUTES.Syntax-->**WP RESET ATTRIBUTES** ( *targetObj* ; *...attribName* )<br/>**WP RESET ATTRIBUTES** ( *sectionOrSubsection* {; *...attribName* })<br/>**WP RESET ATTRIBUTES** ( *targetObj* ; *attribColl* )<br/> **WP RESET ATTRIBUTES** ( *sectionOrSubsection* {; *attribColl*})<!-- END REF-->

<!--REF #_command_.WP RESET ATTRIBUTES.Params-->

| Parámetros          | Tipo       |                             | Descripción                                         |
| ------------------- | ---------- | --------------------------- | --------------------------------------------------- |
| targetObj           | Object     | &#8594; | Rango o elemento o documento 4D Write Pro           |
| sectionOrSubsection | Object     | &#8594; | Sección o subsección de un documento 4D Write Pro   |
| attribName          | Text       | &#8594; | Nombre de atributo(s) a eliminar |
| attribColl          | Collection | &#8594; | Colección de atributos a eliminar                   |

<!-- END REF-->

## Descripción

El comando **WP RESET ATTRIBUTES** <!--REF #_command_.WP RESET ATTRIBUTES.Summary--> le permite restablecer el valor de uno o más atributos en el rango, elemento o documento pasado como parámetro.<!-- END REF--> Este comando puede eliminar cualquier tipo de atributo interno de 4D Write Pro: carácter, párrafo, documento, tabla o imagen. Puede pasar el nombre del atributo a restablecer en *attribName* o puede pasar una colección de atributos en *attribColl* para restablecer varios atributos a la vez.

> En el caso de una sección o subsección, el objeto *sectionOrSubsection* puede pasarse solo y todos los atributos se restablecen a la vez.

En el parámetro *targetObj*, puede pasar cualquiera de los dos:

- un rango, o
- un elemento (encabezado / pie de página / cuerpo / tabla / párrafo / imagen anclada / sección / subsección / hoja de estilo), o
- un documento 4D Write Pro

Cuando se elimina un valor de atributo mediante el comando **WP RESET ATTRIBUTES**, se aplica el valor por defecto a *targetObj* o *sectionOrSubsection*. Los valores por defecto aparecen en la sección [4D Write Pro Attributes](../4d-write-pro-attributes).

:::note Notas

- Cuando se aplica **WP RESET ATTRIBUTES** a un objeto sección/subsección, los atributos se heredan de la sección o documento padre.
- Cuando se aplica **WP RESET ATTRIBUTES** a un objeto de hoja de estilo, los atributos se eliminan de la hoja de estilo a menos que sea la hoja de estilo por defecto ("Normal"). En este caso, se aplica al atributo el valor por defecto (la hoja de estilo "Normal" define todos los atributos de la hoja de estilo).
- Cuando *sectionOrSubsection* no es una sección ni una subsección y no se proporciona ningún atributo, se produce un error.

:::

Si el atributo a restablecer no estaba definido en el elemento pasado como parámetro, el comando no hace nada.

## Ejemplo 1

Desea eliminar varios atributos de la siguiente selección:

![](../../assets/en/WritePro/commands/pict2643861.en.png)

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

![](../../assets/en/WritePro/commands/pict2643863.en.png)

## Ejemplo 2

Desea eliminar varios atributos utilizando una colección:

```4d
$myRange:=WP Get selection(*;"WParea")
$myCollection:=New collection(wk font size; wk background color; wk border style)
WP RESET ATTRIBUTES($myRange; $myCollection)
 
```

## Ejemplo 3

```4d
$section:=WP Get section($document; 3)
WP RESET ATTRIBUTES($section) // Se eliminan todos los atributos de la sección
$subSection:=WP Get subsection(WP Get section($document; 3); wk left page)
WP RESET ATTRIBUTES($subSection) // Se eliminan todos los atributos de la subsección
```

## Ver también

[4D Write Pro Attributes](../4d-write-pro-attributes)  
[WP GET ATTRIBUTES](wp-get-attributes.md)  
[WP SET ATTRIBUTES](wp-set-attributes.md)
