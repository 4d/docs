---
id: object-get-keyboard-layout
title: OBJECT Get keyboard layout
slug: /commands/object-get-keyboard-layout
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get keyboard layout.Syntax-->**OBJECT Get keyboard layout** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get keyboard layout.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| Résultat | Text | &#8592; | Code de la langue de configuration , "" = pas de configuration |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT Get keyboard layout.Summary-->La commande **OBJECT Get keyboard layout** retourne la configuration clavier courante associée à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable ou un champ. Dans ce cas, vous ne passez pas une nom mais une référence.

La commande retourne une chaîne indiquant le code de langue utilisé, basé sur les RFC3066, ISO639 et ISO3166\. Pour plus d’informations, reportez-vous à la description de la commande [SET DATABASE LOCALIZATION](set-database-localization.md). 

#### Voir aussi 

[OBJECT SET KEYBOARD LAYOUT](object-set-keyboard-layout.md)  