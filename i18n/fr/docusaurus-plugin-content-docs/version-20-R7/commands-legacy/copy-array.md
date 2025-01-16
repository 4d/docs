---
id: copy-array
title: COPY ARRAY
slug: /commands/copy-array
displayed_sidebar: docs
---

<!--REF #_command_.COPY ARRAY.Syntax-->**COPY ARRAY** ( *source* ; *destination* )<!-- END REF-->
<!--REF #_command_.COPY ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| source | Array | &#8594;  | Tableau à recopier |
| destination | Array | &#8592; | Tableau de destination |

<!-- END REF-->

#### Description 

<!--REF #_command_.COPY ARRAY.Summary-->La commande **COPY ARRAY** crée ou remplace le tableau *destination* avec les mêmes contenu, taille et type que le tableau *source*.<!-- END REF-->: Pour les tableaux numériques de différents types, le type du tableau de destination est conservé.

Les tableaux *source* et *destination* peuvent être des tableaux locaux, process ou interprocess. La portée du tableau n'a pas d'importance lors de la duplication des tableaux.

**Notes :**

* En mode compilé, le tableau *destination* doit être du même type que le tableau *source*. Ainsi, il est recommandé de toujours utiliser des tableaux du même type pour avoir un comportement similaire dans les modes interprété et compilé.
* Lorsque vous copiez des tableaux d'objets, seules les références des objets qu'ils contiennent sont dupliquées, et non les objets eux-mêmes. Une modification effectuée sur un objet d'un tableau affectera toutes les instances existantes de l'objet dans les tableaux copiés. Si vous voulez dupliquer des objets, vous devez utiliser la commande [OB Copy](ob-copy.md).

#### Exemple 

L'exemple suivant remplit un tableau C. Un nouveau tableau, "D", est ensuite créé, contenant les mêmes informations que le tableau C :

```4d
 ALL RECORDS([Contacts]) // Sélectionner tous les enregistrements dans la table
 SELECTION TO ARRAY([Contacts]Société;C) // Remplir le tableau C avec les données du champ
 COPY ARRAY(C;D) // Copier le tableau C dans le tableau D
```


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 226 |
| Thread safe | &check; |


