---
id: wp-get-style-sheet
title: WP Get style sheet
slug: /WritePro/commands/wp-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheet.Syntax-->**WP Get style sheet** ( *wpDoc* : Object ; *styleSheetName* : Text {; *listLevelIndex* : Integer } ) : Object<!-- END REF-->

<!--REF #_command_.WP Get style sheet.Params-->

<div class="no-index">

| Parámetros     | Tipo    |                             | Descripción                                |
| -------------- | ------- | --------------------------- | ------------------------------------------ |
| wpDoc          | Object  | &#8594; | Documento 4D Write Pro                     |
| styleSheetName | Text    | &#8594; | Nombre de la hoja de estilo                |
| listLevelIndex | Integer | &#8594; | Nivel de la hoja de estilo en la jerarquía |
| Resultado      | Object  | &#8592; | Objeto hoja de estilo                      |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                |
| ----------- | --------------------------------------------- |
| 4D 21 R3    | \*Se ha añadido el parámetro *listLevelIndex* |
| 4D 18       | Created                                       |

</details>
</div>

## Descripción

<!--REF #_command_.WP Get style sheet.Summary-->The **WP Get style sheet** command returns the style sheet object designated by the *styleSheetName* or by the style sheet name and the *listLevelIndex* in the case of a [hierarchical list style sheet](../user-legacy/stylesheets.md#hierarchical-list-style-sheets).<!-- END REF-->

En *wpDoc*, pase el documento 4D Write Pro que contiene la hoja de estilo.

El parámetro *styleSheetName* permite especificar el nombre de la hoja de estilo a devolver. Si el nombre de la hoja de estilo no existe en *wpDoc*, se devuelve un objeto null.

Si *styleSheetName* es el nombre del nivel raíz de una hoja de estilo de lista jerárquica, puede especificar opcionalmente el parámetro *listLevelIndex* para recuperar un nivel específico de la jerarquía.

- *listLevelIndex* representa el nivel de la hoja de estilo en la jerarquía (1 = nivel raíz, 2 = primer subnivel, etc.).
- Si se omite el parámetro y la hoja de estilo es jerárquica, se devuelve la hoja de estilo del nivel raíz.
- Si el nivel solicitado no existe, se devuelve un objeto null.
- Si la hoja de estilo no es una hoja de estilo de lista jerárquica y *listLevelIndex* es mayor que 1, se devuelve un objeto null.

## Ejemplo 1

Para recuperar la hoja de estilo "Main title":

```4d
 var $styleSheet : Object
 
 $styleSheet:=WP Get style sheet(wpArea;"Main title")
 If($styleSheet=Null) // comprobar si la hoja de estilo existe
        //si no crearla
    $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 End if
```

## Ejemplo 2

Para recuperar un nivel específico de una hoja de estilo de lista jerárquica:

```4d
var $rootStyle : Object
var $subLevelStyle : Object

// Recuperar la hoja de estilo de nivel raíz
$rootStyle:=WP Get style sheet(wpArea;"MainList")

// Recuperar el segundo nivel (primer subnivel)
$subLevelStyle:=WP Get style sheet(wpArea;"MainList";2)

If($subLevelStyle=Null)
    ALERT("El nivel solicitado no existe.")
End if
```

## Ver también

[Style sheets](../user-legacy/stylesheets.md)  
[WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet)  
[WP Get style sheets](../commands-legacy/wp-get-style-sheets.md)
[WP IMPORT STYLE SHEETS](../WritePro/commands/wp-import-style-sheet)  
[WP New style sheet](../WritePro/commands/wp-new-style-sheet)