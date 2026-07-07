---
id: listbox-header-footer
title: List Box Header and Footer
---

:::note

- To be able to access header properties for a list box, you must enable the [Display Headers](properties_Headers.md#display-headers) option.
- Pour pouvoir accéder aux propriétés des pieds d'une List box, vous devez avoir coché l'option [Afficher pieds](properties_Footers.md#display-footers) dans la Liste des propriétés de la List box.

:::

## En-têtes

Lorsque les en-têtes sont affichés, vous pouvez sélectionner un en-tête dans l'éditeur de formulaires en cliquant dessus lorsque l'objet List box est sélectionné :

![](../assets/en/FormObjects/listbox_header.png)

Vous pouvez définir, pour chaque en-tête de colonne de List box, des propriétés standard de texte : dans ce cas, ces propriétés sont prioritaires par rapport à celles de la colonne ou de la list box.

Vous pouvez également accéder à des propriétés spécifiques aux en-têtes. Specifically, an icon can be displayed in the header next to or in place of the column title, for example when performing [customized sorts](./listbox_overview.md#managing-sorts).

![](../assets/en/FormObjects/lbHeaderIcon.png)

Au moment de l'exécution, les événements qui se produisent dans un en-tête sont générés dans la méthode objet de la colonne de list box.

Lorsque la commande [`OBJECT SET VISIBLE`](../commands/object-set-visible) est utilisée avec un en-tête, elle est appliquée à tous les en-têtes, quel que soit l'élément individuel défini par la commande. Par exemple, `OBJECT SET VISIBLE(* ; "header3";False)` masquera tous les en-têtes de l'objet list box auquel *header3* appartient et pas simplement cet en-tête.

### Propriétés spécifiques des en-têtes

[Bold](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Padding](properties_CoordinatesAndSizing.md#horizontal-padding) - [Icon Location](properties_TextAndPicture.md#icon-location) - [Italic](properties_Text.md#italic) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_TextAndPicture.md#picture-pathname) - [Title](properties_Object.md#title) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Vertical Padding](properties_CoordinatesAndSizing.md#vertical-padding) - [Width](properties_CoordinatesAndSizing.md#width)

## Pieds

Les List box peuvent contenir des zones de "pied de page" non saisissables, affichant des informations supplémentaires. Dans les données présentées sous forme de tableaux, les pieds sont généralement utilisés pour afficher des calculs, tels que des sommes ou des moyennes.

Lorsque les pieds sont affichés, vous pouvez sélectionner un pied de list box dans l’éditeur de formulaires en cliquant dessus lorsque l’objet List box est sélectionné :

![](../assets/en/FormObjects/listbox_footers.png)

Vous pouvez définir, pour chaque pied de colonne de List box, des propriétés standard de texte : dans ce cas, ces propriétés sont prioritaires par rapport à celles de la colonne ou de la list box. Vous pouvez également accéder à des propriétés spécifiques pour les pieds de page. En particulier, vous pouvez insérer un [calcul personnalisé ou automatique](properties_Object.md#variable-calculation).

Au moment de l'exécution, les événements qui se produisent dans un pied de page sont générés dans la méthode objet de la colonne de list box.

Lorsque la commande [`OBJECT SET VISIBLE`](../commands/object-set-visible) est utilisée avec un pied de page, elle s'applique à tous les pieds de page, quel que soit l'élément individuel défini par la commande. Par exemple, `OBJECT SET VISIBLE(* ; "footer3";False)` masquera tous les pieds de page de l'objet list box auquel *footer3* appartient et pas simplement ce pied de page.

### Propriétés spécifiques des pieds de page

[Alpha Format](properties_Display.md#alpha-format) - [Background Color](properties_BackgroundAndBorder.md#background-color--fill-color) - [Bold](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Padding](properties_CoordinatesAndSizing.md#horizontal-padding) - [Italic](properties_Text.md#italic) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Picture Format](properties_Display.md#picture-format) - [Time Format](properties_Display.md#time-format) - [Truncate with ellipsis](properties_Display.md#truncate-with-ellipsis) - [Underline](properties_Text.md#underline) - [Variable Calculation](properties_Object.md#variable-calculation) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Vertical Padding](properties_CoordinatesAndSizing.md#vertical-padding) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)



