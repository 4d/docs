---
id: object-get-placeholder
title: OBJECT Get placeholder
slug: /commands/object-get-placeholder
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get placeholder.Syntax-->**OBJECT Get placeholder** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get placeholder.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| Résultat | Text | &#8592; | Texte d’exemple associé à l’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get placeholder.Summary-->La commande **OBJECT Get placeholder** retourne le texte d’exemple associé à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> Si aucun texte d’exemple n’est associé à l’objet, la commande retourne une chaîne vide.

Un texte d’exemple peut avoir été défini soit via la Liste des propriétés, soit via la commande [OBJECT SET PLACEHOLDER](object-set-placeholder.md). 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Si le texte d’exemple est une référence xliff définie via la Liste des propriétés, la commande retourne la référence d’origine sous la forme ":xliff:*resname*" et non sa valeur calculée.

#### Exemple 

Vous souhaitez lire le texte exemple d’un champ :

```4d
 $txt:=OBJECT Get placeholder([Personnes]Nom)
```

#### Voir aussi 

[OBJECT SET PLACEHOLDER](object-set-placeholder.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1296 |
| Thread safe | &check; |
| Interdite sur le serveur ||


