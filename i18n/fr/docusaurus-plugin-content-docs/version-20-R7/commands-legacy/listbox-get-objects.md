---
id: listbox-get-objects
title: LISTBOX GET OBJECTS
slug: /commands/listbox-get-objects
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET OBJECTS.Syntax-->**LISTBOX GET OBJECTS** ( {* ;} *objet* ; *tabNomsObj* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET OBJECTS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| tabNomsObj | Text array | &#8592; | Noms des sous-objets de la list box (en-têtes, colonnes, pieds) |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX GET OBJECTS.Summary-->La commande **LISTBOX GET OBJECTS** retourne un tableau contenant les noms de chaque objet composant la list box désignée par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Passez dans *tabNomsObj* un tableau texte qui sera automatiquement rempli par la commande. Les noms des objets sont retournés dans leur ordre d’affichage, avec la séquence suivante : 

| nomCol1       |
| ------------- |
| nomEntêteCol1 |
| nomPiedCol1   |
| nomCol2       |
| nomEntêteCol2 |
| nomPiedCol2   |
| ...           |

Le tableau retourne les noms des objets de toutes les colonnes (y compris les pieds de colonnes), quel que soit leur statut visible/invisible. 

Cette commande est utile dans le contexte de l’analyse d’un formulaire via les commandes [FORM LOAD](form-load.md), [FORM GET OBJECTS](form-get-objects.md) et [OBJECT Get type](object-get-type.md). Elle permet, si nécessaire, d’obtenir les noms des sous-objets des list box.

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
[OBJECT Get type](object-get-type.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1302 |
| Thread safe | &check; |
| Interdite sur le serveur ||


