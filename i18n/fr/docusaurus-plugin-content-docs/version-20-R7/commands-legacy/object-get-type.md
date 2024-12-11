---
id: object-get-type
title: OBJECT Get type
slug: /commands/object-get-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get type.Syntax-->**OBJECT Get type** ( {* ;} *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get type.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Integer | &#8592; | Type d’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get type.Summary-->La commande **OBJECT Get type** retourne le type de l’objet désigné par le(s) paramètre(s) *objet* et *\** dans le formulaire courant.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Cette syntaxe est obligatoire si vous traitez des objets statiques tels que des lignes ou des rectangles.   
Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

**Note :** Si vous appliquez la commande à un ensemble d’objets, le type du dernier objet est retourné. 

La valeur retournée correspond à l’une des constantes suivantes du thème "*Types objets formulaire*" :

| Constante                           | Type        | Valeur |
| ----------------------------------- | ----------- | ------ |
| Object type 3D button               | Entier long | 16     |
| Object type 3D checkbox             | Entier long | 26     |
| Object type 3D radio button         | Entier long | 23     |
| Object type button grid             | Entier long | 20     |
| Object type checkbox                | Entier long | 25     |
| Object type combobox                | Entier long | 11     |
| Object type dial                    | Entier long | 28     |
| Object type group                   | Entier long | 21     |
| Object type groupbox                | Entier long | 30     |
| Object type hierarchical list       | Entier long | 6      |
| Object type hierarchical popup menu | Entier long | 13     |
| Object type highlight button        | Entier long | 17     |
| Object type invisible button        | Entier long | 18     |
| Object type line                    | Entier long | 32     |
| Object type listbox                 | Entier long | 7      |
| Object type listbox column          | Entier long | 9      |
| Object type listbox footer          | Entier long | 10     |
| Object type listbox header          | Entier long | 8      |
| Object type matrix                  | Entier long | 35     |
| Object type oval                    | Entier long | 34     |
| Object type picture button          | Entier long | 19     |
| Object type picture input           | Entier long | 4      |
| Object type picture popup menu      | Entier long | 14     |
| Object type picture radio button    | Entier long | 24     |
| Object type plugin area             | Entier long | 38     |
| Object type popup dropdown list     | Entier long | 12     |
| Object type progress indicator      | Entier long | 27     |
| Object type push button             | Entier long | 15     |
| Object type radio button            | Entier long | 22     |
| Object type radio button field      | Entier long | 5      |
| Object type rectangle               | Entier long | 31     |
| Object type rounded rectangle       | Entier long | 33     |
| Object type ruler                   | Entier long | 29     |
| Object type splitter                | Entier long | 36     |
| Object type static picture          | Entier long | 2      |
| Object type static text             | Entier long | 1      |
| Object type subform                 | Entier long | 39     |
| Object type tab control             | Entier long | 37     |
| Object type text input              | Entier long | 3      |
| Object type unknown                 | Entier long | 0      |
| Object type view pro area           | Entier long | 42     |
| Object type web area                | Entier long | 40     |
| Object type write pro area          | Entier long | 41     |

#### Exemple 

Vous souhaitez charger un formulaire et obtenir la liste de tous les objets des list box qu’il contient.

```4d
 FORM LOAD("MonFormulaire")
 ARRAY TEXT(tabObjets;0)
 FORM GET OBJECTS(tabObjets)
 ARRAY LONGINT(ar_type;Taille tableau(tabObjets))
 For($i;1;Size of array(tabObjets))
       ar_type{$i}:=OBJECT Get type(*;tabObjets{$i})
       If(ar_type{$i}=Object type listbox)
          ARRAY TEXT(tabObjetsLB;0)
          LISTBOX GET OBJECTS(*;tabObjets{$i};tabObjetsLB)
       End if
 End for
 FORM UNLOAD
```

#### Voir aussi 

[FORM LOAD](form-load.md)  
[LISTBOX GET OBJECTS](listbox-get-objects.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1300 |
| Thread safe | &check; |
| Interdite sur le serveur ||


