---
id: vp-object-to-font
title: VP Object to font
---

<!-- REF #_method_.VP Object to font.Syntax -->

**VP Object to font** ( *fontObj* : Object ) : Text <!-- END REF -->

<!-- REF #_method_.VP Object to font.Params -->

| Paramètres | Type   |                             | Description                                      |                  |
| ---------- | ------ | --------------------------- | ------------------------------------------------ | ---------------- |
| fontObj    | Object | ->                          | Objet police                                     |                  |
| Résultat   | Text   | <- | Police raccourcie (shorthand) | <!-- END REF --> |

#### Description

La commande `VP Object to font` <!-- REF #_method_.VP Object to font.Summary -->retourne une chaîne de raccourci de police de *fontObj*<!-- END REF -->.

Dans *fontObj*, passez un objet contenant les propriétés de police. Les propriétés suivantes sont prises en charge :

| Propriété | Type | Description                                                                                                                                                                             | Valeurs possibles                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Obligatoire |
| --------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| family    | text | Définit la police.                                                                                                                                                      | tout type de famille de police standard ou générique. Ex : Ex : Ex : "Arial", "Helvetica", "serif", "arial,sans-serif"                                                                                                                                                                                                                                                                                    | Oui         |
| size      | text | Définit la taille de la police. Le line-height peut être ajouté au font-size : font-size/line-height : Ex : "15pt/20pt" | un nombre avec l'une des unités suivantes : <li>"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmax"</li>ou l'une des constantes suivantes :<li>`vk font size large`</li><li>`vk font size larger`</li><li>`vk font size x large`</li><li>`vk font size xx large`</li><li>`vk font size small`</li><li>`vk font size smaller`</li><li>`vk font size x small`</li><li>`vk font size xx small`</li> | Oui         |
| style     | text | Style de police.                                                                                                                                                        | <li>`vk font style italic`</li><li>`vk font style oblique`</li>                                                                                                                                                                                                                                                                                                                                                                                                           | Non         |
| variant   | text | Police en petites majuscules.                                                                                                                                           | <li>`vk font variant small caps`</li>                                                                                                                                                                                                                                                                                                                                                                                                                                     | Non         |
| weight    | text | Définit l'épaisseur de la police.                                                                                                                                       | <li>`vk font weight 100`</li><li>`vk font weight 200`</li><li>`vk font weight 300`</li><li>`vk font weight 400`</li><li>`vk font weight 500`</li><li>`vk font weight 600`</li><li>`vk font weight 700`</li><li>`vk font weight 800`</li><li>`vk font weight 900`</li><li>`vk font weight bold`</li><li>`vk font weight bolder`</li><li>`vk font weight lighter`</li>                                                                                                      | Non         |

Cet objet peut être créé à l'aide de la commande [VP Font to object](vp-font-to-object.md).

La chaîne raccourcie retournée peut être affectée à la propriété "font" d'une cellule avec [VP SET CELL STYLE](vp-set-cell-style.md), par exemple.

#### Exemple

```4d
$cellStyle:=VP Get cell style($range)
 
$font:=VP Font to object($cellStyle.font)
$font.style:=vk font style oblique
$font.variant:=vk font variant small caps
$font.weight:=vk font weight bolder
 
$cellStyle.font:=VP Object to font($font)
//$cellStyle.font contient "bolder oblique small-caps 16pt arial"
```

#### Voir également

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
