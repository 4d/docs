---
id: object-get-padding
title: OBJECT Get padding
slug: /commands/object-get-padding
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get padding.Syntax-->**OBJECT Get padding** ( * ; *object* : Text ) : Object<br/>**OBJECT Get padding** ( *object* : Variable, Field ) : Object<!-- END REF-->

<!--REF #_command_.OBJECT Get padding.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594; | Si spécifié, object est un nom d'objet (chaîne)<br/>Si omis, object est une variable ou un champ |
| object | Text, Variable, Field | &#8594; | Nom d'objet (si * est spécifié) ou<br/>variable ou champ (si * est omis) |
| Résultat | Object | &#8592; | Valeurs des marges |

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

<!--REF #_command_.OBJECT Get padding.Summary-->La commande **OBJECT Get padding** retourne un objet contenant les valeurs courantes des marges de l'objet désigné par les paramètres *object* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, cela indique que le paramètre *object* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, cela indique que *object* est une variable ou un champ. Dans ce cas, vous passez une référence de variable ou de champ au lieu d'une chaîne.

**Note :** Si vous appliquez cette commande à un ensemble d'objets, seules les valeurs de marge du dernier objet sont retournées.

L'objet retourné contient les propriétés suivantes :

| Propriété | Type | Description |
| --- | --- | --- |
| `top` | Integer | Marge entre le contenu et la bordure supérieure |
| `bottom` | Integer | Marge entre le contenu et la bordure inférieure |
| `left` | Integer | Marge entre le contenu et la bordure gauche |
| `right` | Integer | Marge entre le contenu et la bordure droite |

Les valeurs de marge sont exprimées en pixels.

Les marges peuvent être récupérées pour les types d'objets de formulaire suivants :

* [zones de texte](../../FormObjects/text.md),
* [zones de saisie](../../FormObjects/input_overview.md),
* [list boxes](../../FormObjects/listbox_overview.md),
* [colonnes de list box](../../FormObjects/listbox-column.md),
* [en-têtes de list box](../../FormObjects/properties_Headers.md) et [pieds de list box](../../FormObjects/properties_Footers.md).

Pour les list boxes, les colonnes de list box ainsi que leurs en-têtes et pieds, les valeurs `top` et `bottom` retournées sont identiques, de même que les valeurs `left` et `right`.

## Exemple

```4d 

var $currentPadding:=OBJECT Get padding(*; "My Input")
// $currentPadding = {"left":10,"right":15,"top":20,"bottom":35}

```


## Voir aussi

[OBJECT SET PADDING](../commands/object-set-padding)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1866 |
| Thread safe | no |