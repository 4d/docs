---
id: wp-get-style-sheets
title: WP Get style sheets
slug: /WritePro/commands/wp-get-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheets.Syntax-->**WP Get style sheets** ( *wpDoc* : Object ; *tipo* : Integer ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get style sheets.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| tipo | Integer | &#8594;  | Tipo de hoja de estilo |
| Resultado | Collection | &#8592; | Colección de objetos de hoja de estilo |
</div>
<!-- END REF-->

## Descripción 

<!--REF #_command_.WP Get style sheets.Summary-->El comando **WP Get style sheets** devuelve una colección de todos los objetos de hoja de estilo del *tipo* definido en *wpDoc*.<!-- END REF-->

En el parámetro *wpDoc*, pase el documento 4D Write Pro con las hojas de estilo que desea obtener.

El parámetro *tipo* especifica el tipo de hoja a devolver. Los tipos disponibles son:

* wk type character para hojas de estilo de caracteres
* wk type paragraph para hojas de estilo de párrafo

## Ejemplo 

Desea recuperar una colección de todas las hojas de estilo de caracteres:

```4d
 var $styleSheets : Collection
 $styleSheets:=WP Get style sheets(myDoc;wk type character)
```

## Ver también 

*Acceder a contenidos de documentos por programación*  
[WP DELETE STYLE SHEET](../commands/wp-delete-style-sheet)  
[WP Get style sheet](../commands/wp-get-style-sheet)  
[WP IMPORT STYLE SHEETS](../commands/wp-import-style-sheets)  
[WP New style sheet](../commands/wp-new-style-sheet)  
