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

- el objeto de hoja de estilo (creado con el comando [WP New style sheet](../WritePro/commands/wp-new-style-sheet) o devuelto por el comando [WP Get style sheet](../WritePro/commands/wp-get-style-sheet)) que se desea eliminar en el parámetro *styleSheetType*, o
- el documento 4D Write Pro junto con el nombre de la hoja de estilo a eliminar en los parámetros *wpDoc* y *styleSheetName*.

Cuando la hoja de estilo que se va a eliminar pertenece a una [hoja de estilo de lista multinivel](../user-legacy/stylesheets.md#multi-level-list-style-sheets), el comportamiento depende del nivel que se vaya a eliminar. Puede eliminar:

- la hoja de estilo de nivel raíz, o
- una hoja de estilo de subnivel específica ofreciendo el parámetro opcional *listLevelIndex*.

Al eliminar la hoja de estilo de nivel raíz (pasando el valor 1 en el parámetro *listLevelIndex* u omitiendo dicho parámetro), todas las hojas de estilo de subniveles asociadas se eliminan automáticamente y toda la estructura jerárquica se suprime del documento.

Al eliminar una hoja de estilo de subnivel:

- El índice `wk list level index` de todas las hojas de estilo de sub-nivel subsiguientes se decrementa para mantener la numeración continua de los niveles.
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