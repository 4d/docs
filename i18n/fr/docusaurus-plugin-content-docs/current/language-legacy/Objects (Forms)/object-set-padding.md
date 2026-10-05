---
id: object-set-padding
title: OBJECT SET PADDING
slug: /commands/object-set-padding
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PADDING.Syntax-->**OBJECT SET PADDING** ( * ; *object* : Text ; *padding* : Object )<br/>**OBJECT SET PADDING** ( *object* : Variable, Field ; *padding* : Object )<!-- END REF-->

<!--REF #_command_.OBJECT SET PADDING.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594; | Si spécifié, object est un nom d'objet (chaîne)<br/>Si omis, object est une variable ou un champ |
| object | Text, Variable, Field | &#8594; | Nom d'objet (si * est spécifié) ou<br/>variable ou champ (si * est omis) |
| padding | Object | &#8594; | Valeurs des marges |

</div>
<!-- END REF-->

<div class="no-index">

<details><summary>Historique</summary>

| Version | Modifications |
| --- | --- |
| 21 R5 | Créée |

</details>

</div>

## Description

<!--REF #_command_.OBJECT SET PADDING.Summary-->La commande **OBJECT SET PADDING** définit les marges du ou des objet(s) désigné(s) par les paramètres *object* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, cela indique que le paramètre *object* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, cela indique que *object* est une variable ou un champ. Dans ce cas, vous passez une référence de variable ou de champ au lieu d'une chaîne.

Dans *padding*, passez un objet contenant les propriétés suivantes :

| Propriété | Type | Description |
| --- | --- | --- |
| `top` | Integer | Marge entre le contenu et la bordure supérieure |
| `bottom` | Integer | Marge entre le contenu et la bordure inférieure |
| `left` | Integer | Marge entre le contenu et la bordure gauche |
| `right` | Integer | Marge entre le contenu et la bordure droite |

Toutes les propriétés sont facultatives. Si une propriété est omise, sa valeur courante reste inchangée.

Les valeurs de marge sont exprimées en pixels. Si une valeur négative est passée, la marge effective est définie à 0.

Les marges peuvent être appliquées aux types d'objets de formulaire suivants :

* [zones de texte](../../FormObjects/text.md),
* [zones de saisie](../../FormObjects/input_overview.md),
* [list boxes](../../FormObjects/listbox_overview.md),
* [colonnes de list box](../../FormObjects/listbox-column.md),
* [en-têtes de list box](../../FormObjects/properties_Headers.md) et [pieds de list box](../../FormObjects/properties_Footers.md).

Pour les list boxes, les colonnes de list box ainsi que leurs en-têtes et pieds, le même objet *padding* est utilisé, mais seules les valeurs `top` et `left` sont prises en compte pour l'affichage :

- `top` est appliqué comme marge supérieure et inférieure,
- `left` est appliqué comme marge gauche et droite.

## Exemple

```4d 
var $padding:={top: 20; left: 10}
OBJECT SET PADDING(*; "List box"; $padding)
```

La valeur `top` est appliquée aux marges supérieure et inférieure, tandis que la valeur `left` est appliquée aux marges gauche et droite.

## Voir aussi

[OBJECT Get padding](../commands/object-get-padding)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1865 |
| Thread safe | no |