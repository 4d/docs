---
id: object-get-list-reference
title: OBJECT Get list reference
slug: /commands/object-get-list-reference
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get list reference.Syntax-->**OBJECT Get list reference** ( {* ;} *objet* {; *typeListe*} ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get list reference.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| typeListe | Integer | &#8594;  | Type de liste : Liste énumération, Liste obligations ou Liste exclusions |
| Résultat | Integer | &#8592; | Numéro de référence de la liste |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get list reference.Summary-->La commande **OBJECT Get list reference** retourne le numéro de référence (*RefListe*) de la liste hiérarchique associée à l’objet ou au groupe d'objets désigné par *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Par défaut, si vous omettez le paramètre *typeListe*, la commande retourne le nom de l’énumération simple (liste de valeurs) associée à l’*objet*. Vous pouvez également obtenir le numéro de référence des listes d’obligations ou d’exclusions en passant dans *typeListe* une des constantes suivantes du thème "*Objets de formulaire (Propriétés)*" :

| Constante     | Type        | Valeur | Comment                                                                                               |
| ------------- | ----------- | ------ | ----------------------------------------------------------------------------------------------------- |
| Choice list   | Entier long | 0      | Liste simple de choix de valeurs (option "Enumération" dans la Liste des propriétés) (défaut)         |
| Excluded list | Entier long | 2      | Liste de valeurs non acceptées pour la saisie (option "Exclusions" dans la Liste des propriétés)      |
| Required list | Entier long | 1      | Liste des seules valeurs acceptées pour la saisie (option "Obligations" dans la Liste des propriétés) |

Si aucune liste hiérarchique n’est associée à l’objet pour le *typeListe* défini, la commande retourne 0\. 

#### Voir aussi 

[OBJECT Get list name](object-get-list-name.md)  
[OBJECT SET LIST BY REFERENCE](object-set-list-by-reference.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1267 |
| Thread safe | &check; |
| Interdite sur le serveur ||


