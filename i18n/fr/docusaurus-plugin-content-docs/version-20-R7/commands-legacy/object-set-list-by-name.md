---
id: object-set-list-by-name
title: OBJECT SET LIST BY NAME
slug: /commands/object-set-list-by-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET LIST BY NAME.Syntax-->**OBJECT SET LIST BY NAME** ( {* ;} *objet* {; *typeListe*}; énumération )<!-- END REF-->
<!--REF #_command_.OBJECT SET LIST BY NAME.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * spécifié) ou Champ ou Variable (si * omis) |
| typeListe | Integer | &#8594;  | Type de liste : Liste énumération, Liste obligations ou Liste exclusions |
| énumération | Text | &#8594;  | Nom de l'énumération (définie en mode Développement) ou "" pour dissocier l’énumération |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET LIST BY NAME.Summary-->La commande **OBJECT SET LIST BY NAME** définit, remplace ou dissocie l'*énumération* associée à l'objet ou au groupe d'objets désigné(s) par *objet*.<!-- END REF--> L'énumération dont le nom est passé dans le paramètre *énumération* doit avoir été créée dans l'éditeur d'énumérations, en mode Développement.

Cette commande peut être appliquée, dans un formulaire entrée ou un formulaire de dialogue, aux champs et variables saisissables dont les valeurs peuvent être saisies sous forme de texte.

Si vous passez le paramètre optionnel \*, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

**Note :** Cette commande ne peut pas être utilisée avec des champs placés dans le formulaire "liste" d'un sous-formulaire.

La commande **OBJECT SET LIST BY NAME** vous permet de définir ou de remplacer tous les types d’énumérations associées à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\** : listes de choix (énumérations), listes de valeurs obligatoires et listes de valeurs exclues. Pour cela, il vous suffit de passer dans le paramètre *typeListe* une des constantes suivantes du thème "*Objets de formulaire (Propriétés)*" :

| Constante     | Type        | Valeur | Comment                                                                                               |
| ------------- | ----------- | ------ | ----------------------------------------------------------------------------------------------------- |
| Choice list   | Entier long | 0      | Liste simple de choix de valeurs (option "Enumération" dans la Liste des propriétés) (défaut)         |
| Excluded list | Entier long | 2      | Liste de valeurs non acceptées pour la saisie (option "Exclusions" dans la Liste des propriétés)      |
| Required list | Entier long | 1      | Liste des seules valeurs acceptées pour la saisie (option "Obligations" dans la Liste des propriétés) |

Si vous omettez ce paramètre, la valeur 0 (Liste énumération) est utilisée par défaut. 

Pour dissocier dans le process courant une liste associée à l'*objet*, il suffit de passer une chaîne vide ("") dans le paramètre *énumération* pour le type de liste concerné.

La liste de valeurs existante est remplacée en fonction de la manière dont la liste est associée à l'objet de formulaire :

* à l'aide d'une énumération : la liste elle-même est remplacée.
* à l'aide d'un tableau : la liste est copiée dans les éléments du tableau.
* à l'aide d'un objet (non pris en charge dans les bases binaires) : la liste est copiée en tant qu'éléments de collection dans la propriété values ​​de l'objet.

#### Exemple 1 

L'exemple suivant définit l'énumération liée à un champ Coursiers. Si l'envoi doit être effectué de nuit, alors l'énumération affiche les sociétés de courses qui fonctionnent la nuit. Sinon, l'énumération standard est proposée :

```4d
 If([Courses]Nuit)
    OBJECT SET LIST BY NAME([Courses]Coursier;"Coursiers de nuit")
 Else
    OBJECT SET LIST BY NAME([Courses]Coursier;"Coursiers standard")
 End if
```

#### Exemple 2 

Associer la liste "choix\_coul" en tant qu’énumération simple au pop up/Liste déroulante "CoulPorte" :

```4d
 OBJECT SET LIST BY NAME(*;"CoulPorte";Choice list;"choix_coul")
     // dans ce cas le 3e paramètre (constante) peut être omis
```

#### Exemple 3 

Vous souhaitez associer la liste "choix\_coul" à une combo box "CoulMur". Comme la combo box est saisissable, vous souhaitez que certaines couleurs telles que "noir", "violet"... ne puissent être utilisées. Ces couleurs sont placées dans la liste "coul\_exclues" :

```4d
 OBJECT SET LIST BY NAME(*;"CoulMur";Choice list;"choix_coul")
 OBJECT SET LIST BY NAME(*;"CoulMur";Excluded list;"coul_exclues")
```

#### Exemple 4 

Vous souhaitez supprimer des associations de listes :

```4d
     // retrait de l’énumération simple
 OBJECT SET LIST BY NAME(*;"CoulPorte";Choice list;"")
     // retrait de la liste de valeurs non autorisées
 OBJECT SET LIST BY NAME(*;"CoulMur";Excluded list;"")
```

#### Voir aussi 

[OBJECT Get list name](object-get-list-name.md)  
[OBJECT SET LIST BY REFERENCE](object-set-list-by-reference.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 237 |
| Thread safe | &check; |
| Interdite sur le serveur ||


