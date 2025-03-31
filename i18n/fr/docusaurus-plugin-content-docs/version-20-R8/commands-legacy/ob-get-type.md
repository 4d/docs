---
id: ob-get-type
title: OB Get type
slug: /commands/ob-get-type
displayed_sidebar: docs
---

<!--REF #_command_.OB Get type.Syntax-->**OB Get type** ( *objet* ; *propriété* ) : Integer<!-- END REF-->
<!--REF #_command_.OB Get type.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object | &#8594;  | Objet structuré |
| propriété | Text | &#8594;  | Nom de la propriété |
| Résultat | Integer | &#8592; | Type de valeur de la propriété |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Get type.Summary-->La commande **OB Get type** retourne le type de la valeur associée à la *propriété* de l'*objet*.<!-- END REF-->doit avoir été défini via la commande *C\_OBJECT* ou désigner un champ objet 4D.

Passez dans le paramètre *propriété* le libellé de la propriété dont vous souhaitez connaître le type. Attention, le paramètre *propriété* tient compte des majuscules/minuscules.

La commande retourne un entier long indiquant le type de valeur. Vous pouvez comparer cette valeur aux constantes suivantes du thème *Types champs et variables* :

| Constante     | Type        | Valeur |
| ------------- | ----------- | ------ |
| Is Boolean    | Entier long | 6      |
| Is collection | Entier long | 42     |
| Is date       | Entier long | 4      |
| Is null       | Entier long | 255    |
| Is object     | Entier long | 38     |
| Is real       | Entier long | 1      |
| Is text       | Entier long | 2      |
| Is undefined  | Entier long | 5      |

**Note :** Pour les propriétés d'une image, la commande retourne Est un objet. 

#### Exemple 

On souhaite obtenir le type de valeurs standard :

```4d
 var $ref : Object
 OB SET($ref;"nom";"smith";"age";42)
 $type:=OB Get type($ref;"nom") //$type retourne 2
 $type2:=OB Get type($ref;"age") //$type2 retourne 1
```

#### Voir aussi 

[OB GET PROPERTY NAMES](ob-get-property-names.md)  
[Value type](value-type.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1230 |
| Thread safe | &check; |


