---
id: object-set-keyboard-layout
title: OBJECT SET KEYBOARD LAYOUT
slug: /commands/object-set-keyboard-layout
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Syntax-->**OBJECT SET KEYBOARD LAYOUT** ( {* ;} *objet* ; *codeLangue* )<!-- END REF-->
<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable ou champ (si * est omis) |
| codeLangue | Text | &#8594;  | Code de langue RFC3066 ISO639 et ISO3166, "" = pas de changement |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Summary-->La commande **OBJECT SET KEYBOARD LAYOUT** vous permet de définir ou de modifier dynamiquement la configuration clavier associée à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable ou un champ. Dans ce cas, vous ne passez pas une nom mais une référence.

Passez dans le paramètre *codeLangue* une chaîne indiquant le code de langue à utiliser, basé sur les RFC3066, ISO639 et ISO3166\. Pour plus d’informations, reportez-vous à la description de la commande [SET DATABASE LOCALIZATION](set-database-localization.md). 

#### Voir aussi 

[OBJECT Get keyboard layout](object-get-keyboard-layout.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1179 |
| Thread safe | &cross; |


