---
id: object-set-auto-spellcheck
title: OBJECT SET AUTO SPELLCHECK
slug: /commands/object-set-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Syntax-->**OBJECT SET AUTO SPELLCHECK** ( {* ;} *objet* ; *correctionAuto* )<!-- END REF-->
<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| correctionAuto | Boolean | &#8594;  | Vrai = correction automatique, Faux = pas de correction automatique |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Summary-->La commande **OBJECT SET AUTO SPELLCHECK** permet de définir ou de modifier dynamiquement le statut de l’option **Correction orthographique** du ou des objet(s) désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> Cette option permet d’activer ou non la correction orthographique automatique lors de la saisie pour l’objet (objets de type texte uniquement).

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable ou un champ. Dans ce cas, vous ne passez pas un nom mais une référence.

Passez **Vrai** dans *correctionAuto* pour activer la correction automatique pour *objet*, et **Faux** pour la désactiver. 

#### Voir aussi 

[OBJECT Get auto spellcheck](object-get-auto-spellcheck.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1173 |
| Thread safe | &check; |
| Interdite sur le serveur ||


