---
id: object-get-list-name
title: OBJECT Get list name
slug: /commands/object-get-list-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get list name.Syntax-->**OBJECT Get list name** ( {* ;} *objet* {; *typeListe*} ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get list name.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| typeListe | Integer | &#8594;  | Type de liste : Liste énumération, Liste obligations ou Liste exclusions |
| Résultat | Text | &#8592; | Nom de l’énumération (définie en mode Développement) |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get list name.Summary-->La commande **OBJECT Get list name** retourne le nom de l’énumération associée à l'objet ou au groupe d'objets désigné par *objet*.<!-- END REF--> 4D vous permet d'associer une énumération (créée avec l'éditeur d'énumérations en mode Développement) aux objets de formulaire via l'éditeur de formulaires ou la commande [OBJECT SET LIST BY NAME](object-set-list-by-name.md).

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Le paramètre optionnel *typeListe* vous permet de désigner le type de liste que vous souhaitez obtenir. Par défaut, si vous omettez ce paramètre, la commande retourne le nom de l’énumération simple (liste de valeurs) associée à l’objet. Vous pouvez également obtenir le nom des listes d’obligations ou d’exclusions en passant dans *typeListe* une des constantes suivantes du thème "*Objets de formulaire (Propriétés)*" :

| Constante     | Type        | Valeur | Comment                                                                                               |
| ------------- | ----------- | ------ | ----------------------------------------------------------------------------------------------------- |
| Choice list   | Entier long | 0      | Liste simple de choix de valeurs (option "Enumération" dans la Liste des propriétés) (défaut)         |
| Excluded list | Entier long | 2      | Liste de valeurs non acceptées pour la saisie (option "Exclusions" dans la Liste des propriétés)      |
| Required list | Entier long | 1      | Liste des seules valeurs acceptées pour la saisie (option "Obligations" dans la Liste des propriétés) |

Si aucune liste du type défini n’est associée à l’*objet*, la commande retourne une chaîne vide (""). 

#### Voir aussi 

[OBJECT Get list reference](object-get-list-reference.md)  
[OBJECT SET LIST BY NAME](object-set-list-by-name.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1072 |
| Thread safe | &cross; |


