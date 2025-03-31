---
id: old
title: Old
slug: /commands/old
displayed_sidebar: docs
---

<!--REF #_command_.Old.Syntax-->**Old** ( *leChamp* ) : any<!-- END REF-->
<!--REF #_command_.Old.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ dont vous voulez obtenir l'ancienne valeur |
| Résultat | any | &#8592; | Valeur originale de champ |

<!-- END REF-->

#### Description 

<!--REF #_command_.Old.Summary-->La commande **Old** retourne la valeur qui était stockée dans *leChamp* avant qu'il n'ait été modifié par programmation ou pendant la saisie de données.<!-- END REF--> 

A chaque fois que vous changez d'enregistrement courant pour une table, 4D crée et maintient en mémoire un double de l'"image" du nouvel enregistrement courant au moment où il est chargé. Lorsque vous modifiez un enregistrement, vous travaillez avec l'image réelle de l'enregistrement, et non son double. Ce double est effacé lorsque que vous changez à nouveau d'enregistrement courant.

**Old** retourne la valeur de *leChamp* telle qu'elle est stockée dans le double de l'enregistrement. Autrement dit, pour un enregistrement existant, **Old**  retourne la valeur du champ telle qu'elle avait été sauvegardée sur disque. Pour un enregistrement qui vient d'être créé, **Old** retourne la valeur vide par défaut correspondant au type de *leChamp*. Par exemple, si *leChamp* est de type Alpha, **Old** retourne une chaîne vide. Si champ est de type numérique, **Old** retourne zéro (0), etc. 

**Old** fonctionne avec *leChamp* de la même manière, que le champ ait été modifié par programmation ou suite à des modifications effectuées par un utilisateur. 

La fonction accepte tous les types de champs.

Pour restaurer la valeur originale d'un champ, assignez-lui la valeur retournée par **Old**. 

**Note :** Pour des raisons techniques, dans le cas des champs de type Image et BLOB, l’expression retournée par **Old** ne peut pas être directement utilisée comme paramètre d’une autre commande. Il est nécessaire de faire transiter la valeur par une variable intermédiaire. Par exemple : 

```4d
  //Ne PAS écrire (provoque une erreur de syntaxe) :
 $taille :=BLOB size(Old([LaTable]LeBlob)) //INCORRECT
 
  //Ecrire :
 $ancienBlob :=Old([LaTable]LeBlob)
 $taille :=BLOB size($ancienBlob) //CORRECT
```

#### Voir aussi 

[Modified](modified.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 35 |
| Thread safe | &check; |


