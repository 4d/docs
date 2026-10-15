---
id: Styled_Text_theme
title: Texte multistyle
sidebar_label: Texte multistyle
slug: /commands/theme/Styled-Text
---

|                                                                                                         |
| ------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.ST COMPUTE EXPRESSIONS.Syntax -->](../../commands/st-compute-expressions)<br/> |
| [<!-- INCLUDE #_command_.ST FREEZE EXPRESSIONS.Syntax -->](../../commands/st-freeze-expressions)<br/>   |
| [<!-- INCLUDE #_command_.ST GET ATTRIBUTES.Syntax -->](../../commands/st-get-attributes)<br/>           |
| [<!-- INCLUDE #_command_.ST Get content type.Syntax -->](../../commands/st-get-content-type)<br/>       |
| [<!-- INCLUDE #_command_.ST Get expression.Syntax -->](../../commands/st-get-expression)<br/>           |
| [<!-- INCLUDE #_command_.ST GET OPTIONS.Syntax -->](../../commands/st-get-options)<br/>                 |
| [<!-- INCLUDE #_command_.ST Get plain text.Syntax -->](../../commands/st-get-plain-text)<br/>           |
| [<!-- INCLUDE #_command_.ST Get text.Syntax -->](../../commands/st-get-text)<br/>                       |
| [<!-- INCLUDE #_command_.ST GET URL.Syntax -->](../../commands/st-get-url)<br/>                         |
| [<!-- INCLUDE #_command_.ST INSERT EXPRESSION.Syntax -->](../../commands/st-insert-expression)<br/>     |
| [<!-- INCLUDE #_command_.ST INSERT URL.Syntax -->](../../commands/st-insert-url)<br/>                   |
| [<!-- INCLUDE #_command_.ST SET ATTRIBUTES.Syntax -->](../../commands/st-set-attributes)<br/>           |
| [<!-- INCLUDE #_command_.ST SET OPTIONS.Syntax -->](../../commands/st-set-options)<br/>                 |
| [<!-- INCLUDE #_command_.ST SET PLAIN TEXT.Syntax -->](../../commands/st-set-plain-text)<br/>           |
| [<!-- INCLUDE #_command_.ST SET TEXT.Syntax -->](../../commands/st-set-text)<br/>                       |

## Travailler avec des commandes de gestion de texte

### Interface utilisateur

Les commandes qui peuvent être utilisées pour manipuler des objets texte par programmation ne prennent pas en compte les balises de style intégrées dans le texte. Elles agissent uniquement sur le texte à l'écran. Ceci concerne les commandes suivantes :

- Commandes du thème [Interface utilisateur](./User_Interface.md)
- [`HIGHLIGHT TEXT`](../../commands/highlight-text)
- [`GET HIGHLIGHT`](../../commands/get-highlight)

Lorsque vous utilisez ces commandes avec des commandes qui manipulent des chaînes de caractères, il est nécessaire de filtrer les caractères de formatage en utilisant la commande [`ST Get plain text`](../../commands/st-get-plain-text) :

```4d
 HIGHLIGHT TEXT([Products]Notes;1;Length(ST Get plain text([Products]Notes))+1)
```

### Objets (Formulaires)

Les commandes qui peuvent être utilisées pour modifier le style des objets (par exemple, [`OBJECT SET FONT`](../../commands/object-set-font)) s'appliquent à l'objet entier et non à la sélection.

Si l'objet n'a pas le focus lorsque la commande est exécutée, la modification est appliquée simultanément à l'objet (la zone de texte) et à sa variable associée. Si l'objet a le focus, la modification est effectuée sur l'objet mais pas sur la variable associée. La modification n'est appliquée à la variable que lorsque l'objet perd le focus. Gardez ce principe à l'esprit lors de la programmation des zones de texte.

:::note

Si l'option [**Stocker les balises par défaut**](../../FormObjects/properties_Text.md#store-with-default-style-tags) est cochée pour l'objet, l'utilisation de ces commandes provoquera une modification des balises enregistrées avec chaque objet.

:::

Notez aussi que seules les propriétés par défaut sont affectées par ces commandes (ainsi que toutes les propriétés enregistrées par les balises par défaut). Les balises de style personnalisé restent telles quelles. Par exemple, dans une zone multi-style où les balises par défaut ont été enregistrées :

![](../../assets/en/FormObjects/multistyle-ex1.png)

Le texte brut de la zone est le suivant :

```html
<span style="text-align:left;font-family:'Segoe UI';font-size:9pt;color:#009900">This is the word <span style="color:#D81E05">red</span></span>
```

Si vous exécutez le code suivant :

```4d
OBJECT SET COLOR(*;"myArea";-(Blue+(256*Yellow)))
```

La couleur rouge reste :

![](../../assets/en/FormObjects/multistyle-ex2.png)

et le code est :

```html
<span style="text-align:left;font-family:'Segoe UI';font-size:9pt;color:#0000FF">This is the word <span style="color:#D81E05">red</span></span>
```

Les commandes suivantes sont concernées :

- [`OBJECT SET RGB COLORS`](../../commands/object-set-rgb-colors)
- [`OBJECT SET FONT`](../../commands/object-set-font)
- [`OBJECT SET FONT STYLE`](../../commands/object-set-font-style)
- [`OBJECT SET FONT SIZE`](../../commands/object-set-font-size)

Dans le contexte des zones de texte multistyles, les commandes génériques doivent être utilisées pour définir les styles par défaut uniquement. Pour gérer les styles lors de l'exécution de la base de données, nous vous recommandons d'utiliser les commandes du thème "Texte multistyle".

### Get edited text

Lorsqu’elle est utilisée avec une zone de texte riche, la commande [`Get edited text`](../../commands/get-edited-text) retourne le texte de la zone courante en incluant les éventuelles balises de style.

Pour récupérer le texte "brut" (texte sans balises) en cours d’édition, vous devez utiliser la commande [`ST Get plain text`](../../commands/st-get-plain-text) :

```4d
ST Get plain text(Get edited text)
```

### Commandes de recherche et de tri

Les recherches et les tris effectués parmi des objets multistyles tiennent compte des éventuelles balises de style enregistrées dans l’objet. Si une modification de style a été apportée à l’intérieur d’un mot, une recherche sur ce mot sera infructueuse.

Pour pouvoir effectuer des recherches et des tris valides, vous devez utiliser la commande [`ST Get plain text`](../../commands/st-get-plain-text). Par exemple :

```4d
QUERY BY FORMULA([MyTable];ST Get plain text([MyTable]MyFieldStyle)="very well")
```

