---
id: object-get-auto-spellcheck
title: OBJECT Get auto spellcheck
slug: /commands/object-get-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get auto spellcheck.Syntax-->**OBJECT Get auto spellcheck** ( {* ;} *objet* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get auto spellcheck.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| Résultat | Boolean | &#8592; | Vrai = correction automatique, <br/>Faux = pas de correction automatique |

<!-- END REF-->

## Description 

<!--REF #_command_.OBJECT Get auto spellcheck.Summary-->La commande **OBJECT Get auto spellcheck** retourne le statut de l’option **Correction orthographique** du ou des objet(s) désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> 

Este comando admite objetos de tipo:

- [input](../FormObjects/input_overview.md) de tipo texto solamente,
- 4D Write Pro area](../FormObjects/writeProArea_overview.md).

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable ou un champ. Dans ce cas, vous ne passez pas une nom mais une référence.

La commande retourne **Vrai** si la correction automatique est activée pour l’*objet*, et **Faux** sinon. 

## Voir aussi 

[OBJECT SET AUTO SPELLCHECK](object-set-auto-spellcheck.md)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1174 |
| Thread safe | &cross; |


