---
id: wp-new-style-sheet
title: WP New style sheet
slug: /WritePro/commands/wp-new-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP New style sheet.Syntax-->**WP New style sheet** ( *wpDoc* ; *tipoHojaEstilo* ; *nomHojaEstilo* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP New style sheet.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| tipoHojaEstilo | Integer | &#8594;  | Tipo de hoja de estilo |
| nomHojaEstilo | Text | &#8594;  | Nombre de hoja de estilo |
| Resultado | Object | &#8592; | Objeto hoja de estilo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP New style sheet.Summary-->El comando **WP New style sheet** crea un nuevo objeto de hoja de estilo (vacío) para el *wpDoc* designado.<!-- END REF-->

En el parámetro *wpDoc*, pase un documento 4D Write Pro.

El parámetro *tipoHojaEstilo* le permite designar el tipo de hoja de estilo, es decir, la parte de *wpDoc* que se verá afectada por la hoja de estilo. Hay dos tipos disponibles:

* wk type character: aplica atributos de estilo a los caracteres.
* wk type paragraph: aplica atributos de estilo a los párrafos.

Pase un nombre para la hoja de estilo en el parámetro *nomHojaEstilo*. El nombre de la hoja de estilo se almacena con el documento y facilita reutilizar o modificar el estilo. También se puede utilizar con los comandos [WP Get style sheet](wp-get-style-sheet.md) y [WP DELETE STYLE SHEET](wp-delete-style-sheet.md). El nombre de la hoja de estilo debe cumplir las siguientes reglas:

* debe empezar por una letra
* a continuación, puede contener caracteres alfanuméricos, espacios en blanco, caracteres "-" o caracteres unicode >= 128
* debe ser único en el documento, independientemente de su tipo
* no debe empezar por "section", que está reservado
* el carácter "\_" se sustituye por un espacio y se eliminan los espacios finales.

Puede especificar los atributos de la hoja de estilo utilizando el comando [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) o la notación de objetos (consulte *Atributos 4D Write Pro*). Para ver la lista de atributos disponibles, consulte la sección *Style sheet attributes*.

**Notas**: 

* Una hoja de estilo solo modifica la visualización de un caracter o párrafo, no cómo se almacena en el documento. Si se elimina una hoja de estilo, el texto volverá al estilo predeterminado.
* Todo atributo de estilo no definido en la nueva hoja de estilo utilizará automáticamente el estilo Normal. Para más información, consulte *Comandos hoja de estilo*.

#### Ejemplo 

El siguiente código crea y define una hoja de estilo de párrafo:

```4d
 var $styleSheet : Object
 $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 
  //define la configuración de la hoja de estilo
 WP SET ATTRIBUTES($styleSheet;wk font family;"Papyrus")
 WP SET ATTRIBUTES($styleSheet;wk font size;"48pt")
 WP SET ATTRIBUTES($styleSheet;wk text color;"red")
 WP SET ATTRIBUTES($styleSheet;wk text align;wk left)
 
  //Aplica la hoja de estilo al primer párrafo
 var $Paragraphs : Collection
 $Paragraphs:=WP Get elements(wpArea;wk type paragraph)
 If($Paragraphs.length>0)
    WP SET ATTRIBUTES($Paragraphs[0];wk style sheet;$styleSheet)
 End if
```

#### Ver también 

*Acceder a contenidos de documentos por programación*  
[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  