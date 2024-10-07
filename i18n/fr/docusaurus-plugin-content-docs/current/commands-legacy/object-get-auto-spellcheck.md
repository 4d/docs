---
id: object-get-auto-spellcheck
title: OBJECT Get auto spellcheck
slug: /commands/object-get-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get auto spellcheck.Syntax-->**OBJECT Get auto spellcheck** ( {* ;} *objet* ) -> Résultat<!-- END REF-->
<!--REF #_command_.OBJECT Get auto spellcheck.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#x1F852; | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &#x1F852; | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| Résultat | Boolean | &#x1F850; | Vrai = correction automatique, <br/>Faux = pas de correction automatique |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get auto spellcheck.Summary-->La commande **OBJECT Get auto spellcheck** retourne le statut de l’option **Correction orthographique** du ou des objet(s) désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable ou un champ. Dans ce cas, vous ne passez pas une nom mais une référence.

La commande retourne **Vrai** si la correction automatique est activée pour l’*objet*, et **Faux** sinon. 

#### Voir aussi 

[OBJECT SET AUTO SPELLCHECK](object-set-auto-spellcheck.md)  