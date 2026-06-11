---
id: wp-delete-style-sheet
title: WP DELETE STYLE SHEET
slug: /WritePro/commands/wp-delete-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE STYLE SHEET.Syntax-->**WP DELETE STYLE SHEET** ( *styleSheetObj* : Object )<br/>**WP DELETE STYLE SHEET** (*wpDoc* : Object ; *styleSheetName* : Text {; *listLevelIndex* : Integer })<!-- END REF-->

<!--REF #_command_.WP DELETE STYLE SHEET.Params-->

<div class="no-index">

| Parámetros     | Tipo    |                             | Descripción                                |
| -------------- | ------- | --------------------------- | ------------------------------------------ |
| styleSheetObj  | Object  | &#8594; | Objeto hoja de estilo                      |
| wpDoc          | Object  | &#8594; | Documento 4D Write Pro                     |
| listLevelIndex | Integer | &#8594; | Nivel de la hoja de estilo en la jerarquía |
| styleSheetName | Text    | &#8594; | Nombre de la hoja de estilo                |

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

<!--REF #_command_.WP DELETE STYLE SHEET.Summary-->El comando **WP DELETE STYLE SHEET** elimina la hoja de estilo de párrafo o de caracter designado del documento actual.<!-- END REF--> Cuando se elimina una hoja de estilo, todos los caracteres o párrafos a los que se aplicó vuelven a su estilo original (*es decir,* el predeterminado).

Este comando ofrece dos formas de eliminar una hoja de estilo. Puede especificar:

- the style sheet object (created with the [WP New style sheet](../WritePro/commands/wp-new-style-sheet) or returned by the [WP Get style sheet](../WritePro/commands/wp-get-style-sheet) command) to remove in the *styleSheetType* parameter, or
- el documento 4D Write Pro junto con el nombre de la hoja de estilo a eliminar en los parámetros *wpDoc* y *styleSheetName*.

When the style sheet to delete belongs to a [multi-level list style sheet](../user-legacy/stylesheets.md#multi-level-list-style-sheets), the behavior depends on the level being removed. Puede eliminar:

- la hoja de estilo de nivel raíz, o
- una hoja de estilo de subnivel específica ofreciendo el parámetro opcional *listLevelIndex*.

When you delete the root-level style sheet (by passing 1 in the *listLevelIndex* parameter or ommitting it), all associated sub-level style sheets are deleted automatically and the entire hierarchical structure is removed from the document.

Al eliminar una hoja de estilo de subnivel:

- The `wk list level index` of all subsequent sub-level style sheets is decremented to maintain continuous level numbering.
- Los nombres de las hojas de estilo de subnivel afectadas se actualizan para reflejar su nuevo índice de nivel.
- El atributo `wk list level count` de la hoja de estilo raíz y todas las hojas de estilo de subnivel restantes se decrementan para que coincidan con el nuevo número total de niveles.

El comando no realiza ninguna acción si el nivel especificado no existe, o si la hoja de estilo no forma parte de una lista jerárquica y *listLevelIndex* es mayor que 1.

**Nota**: la hoja de estilo por defecto ("Normal") no se puede eliminar.

## Ejemplo 1

Para eliminar una hoja de estilo de caracteres "MyCharStyle":

```4d
WP DELETE STYLE SHEET(wpArea; "MyCharStyle")
```

## Ejemplo 2

El siguiente ejemplo elimina el segundo nivel de una hoja de estilo de lista jerárquica:

```4d
// Borrar el nivel 2 de la hoja de estilo jerárquica "MainList"
WP DELETE STYLE SHEET(wpArea; "MainList"; 2)
```

Después de la ejecución:

- Los valores `wk list level index` se actualizan (el nivel 3 anterior se convierte en el nivel 2).
- Se decrementa el `wk list level count`.

Para eliminar toda la hoja de estilo jerárquica (raíz y todos los subniveles asociados):

```4d
WP DELETE STYLE SHEET(wpArea; "MainList")
```

## Ver también

[Style sheets](../user-legacy/stylesheets.md)  
[WP Get style sheet](../WritePro/commands/wp-get-style-sheet)  
[WP Get style sheets](../commands-legacy/wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](../WritePro/commands/wp-import-style-sheet)  
[WP New style sheet](../WritePro/commands/wp-new-style-sheet)