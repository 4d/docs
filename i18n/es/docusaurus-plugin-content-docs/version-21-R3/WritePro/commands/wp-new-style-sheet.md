---
id: wp-new-style-sheet
title: WP New style sheet
slug: /WritePro/commands/wp-new-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP New style sheet.Syntax-->**WP New style sheet** ( *wpDoc* : Object ; *styleSheetType* : Integer ; *styleSheetName* : Text {; *listLevelCount* : Integer} ) : Object <!-- END REF-->

<!--REF #_command_.WP New style sheet.Params-->

<div class="no-index">

| Parámetros     | Tipo    |                             | Descripción                         |
| -------------- | ------- | --------------------------- | ----------------------------------- |
| wpDoc          | Object  | &#8594; | Documento 4D Write Pro              |
| styleSheetType | Integer | &#8594; | Tipo de hoja de estilo              |
| styleSheetName | Text    | &#8594; | Nombre de la hoja de estilo         |
| listLevelCount | Integer | &#8594; | Número total de niveles jerárquicos |
| Resultado      | Object  | &#8592; | Objeto hoja de estilo               |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                |
| ----------- | --------------------------------------------- |
| 4D 18       | Created                                       |
| 4D 21 R3    | \*Se ha añadido el parámetro *listLevelCount* |

</details>
</div>

## Descripción

<!--REF #_command_.WP New style sheet.Summary-->El comando **WP New style sheet** crea un nuevo objeto (vacío) de hoja de estilo para el *wpDoc* designado.<!-- END REF-->

En el parámetro *wpDoc*, pasa un documento 4D Write Pro.

The *styleSheetType* parameter lets you designate the type of the style sheet, *i.e.* the part of the *wpDoc* that will be affected by the style sheet. Hay dos tipos disponibles:

- wk type character: aplica atributos de estilo a los caracteres.
- wk type paragraph: aplica los atributos de estilo a los párrafos (requerido si quiere crear las [hojas de estilo de lista jerárquica](#hierarchical-list-style-sheet)).

Pase un nombre para la hoja de estilo en el parámetro *styleSheetName*. El nombre de la hoja de estilo se almacena con el documento y facilita la reutilización o la modificación del estilo. El nombre de la hoja de estilo debe cumplir las siguientes reglas: It can also be used with the [WP Get style sheet](../WritePro/commands/wp-get-style-sheet) and [WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet) commands.

- debe empezar por una letra
- puede contener caracteres alfanuméricos, espacios en blanco, caracteres "-" o caracteres unicode >= 128
- debe ser único en el documento independientemente del tipo
- no debe empezar por "section", que está reservado
- el "\_" se sustituye por un espacio y se eliminan los espacios finales.

You can specify the attributes of the style sheet using the [WP SET ATTRIBUTES](../commands/wp-set-attributes) command or the object notation (see [4D Write Pro Attributes](../commands-legacy/4d-write-pro-attributes.md)). For the list of available attributes, see the [Style sheet attributes](../commands-legacy/4d-write-pro-attributes.md#style-sheets) section.

**Notas**:

- Una hoja de estilo sólo modifica la visualización de un carácter o párrafo, no cómo se almacena en el documento. Si se elimina una hoja de estilo, el texto volverá al estilo por defecto.
- Todo atributo de estilo no definido en la nueva hoja de estilo utilizará automáticamente el estilo Normal. Para más información, consulte la página [*Hojas de estilo*](../user-legacy/stylesheets.md).

### Hoja de estilo de lista jerárquica

If the *styleSheetType* parameter is set to `wk type paragraph`, you can optionally pass the *listLevelCount* parameter to create a [hierarchical list style sheet](../user-legacy/stylesheets.md#hierarchical-list-style-sheets).

El parámetro *listLevelCount* define el número total de niveles de la jerarquía. Cuando se especifica (valor ≥ 1), el comando crea automáticamente una hoja de estilo de nivel raíz y las hojas de estilo de nivel inferior correspondientes.

Se aplican los siguientes valores predefinidos:

- `wk list style type` se establece en `wk decimal`
- `wk list level index` se asigna automáticamente (1 para el nivel raíz, incrementado para los subniveles)
- `wk list level count` se fija en el valor especificado para todos los niveles
- `wk margin left` is automatically calculated (0.75 cm × level index or 0.25 inches \* level index, depending on current layout unit): so offset may be different depending if layout unit is metric or inches (for better alignment on default with current Write ruler graduations)

Si el parámetro se omite o se establece en 0, se crea una hoja de estilo de párrafo estándar (no de lista).

## Ejemplo 1

El siguiente código crea y define una hoja de estilo de párrafo:

```4d
 var $styleSheet : Object
 $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 
  //definir la configuración de la hoja de estilo
 WP SET ATTRIBUTES($styleSheet;wk font family;"Papyrus")
 WP SET ATTRIBUTES($styleSheet;wk font size;"48pt")
 WP SET ATTRIBUTES($styleSheet;wk text color;"red")
 WP SET ATTRIBUTES($styleSheet;wk text align;wk left)
 
  //Aplicar la hoja de estilo al primer párrafo
 var $Paragraphs : Collection
 $Paragraphs:=WP Get elements(wpArea;wk type paragraph)
 If($Paragraphs.length>0)
    WP SET ATTRIBUTES($Paragraphs[0];wk style sheet;$styleSheet)
 End if
```

## Ejemplo 2

El siguiente código crea una hoja de estilo de lista jerárquica con 3 niveles:

```4d
var $mainList : Object

$mainList:=WP New style sheet(wpArea; wk type paragraph; "MainList"; 3)

// The command automatically creates:
// - 1 root-level style sheet ("MainList")
// - 2 sub-level style sheets ("MainList lvl 2" and "MainList lvl 3")

```

Resultado:

- La hoja de estilo raíz tiene:
  - `wk list level index` = 1
  - `wk list level count` = 3
  - `wk list style type` = `wk decimal`

- Las hojas de estilo de los subniveles:
  - han incrementado los valores de `wk list level index` (2 y 3)
  - comparte la misma `wk list level count`
  - se indentarán automáticamente (0,75 cm × índice de nivel)
  - hacer referencia a la hoja de estilo raíz mediante `wk root style`

## Ver también

[Style sheets](../user-legacy/stylesheets.md)  
[WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet)  
[WP Get style sheet](../WritePro/commands/wp-get-style-sheet)  
[WP Get style sheets](../WritePro/commands/wp-get-style-sheets)  
[WP IMPORT STYLE SHEETS](../WritePro/commands/wp-import-style-sheets)
