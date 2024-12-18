---
id: ob-is-empty
title: OB Is empty
slug: /commands/ob-is-empty
displayed_sidebar: docs
---

<!--REF #_command_.OB Is empty.Syntax-->**OB Is empty** ( *objet* ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is empty.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object, Object | &#8594;  | Objet structuré |
| Résultat | Boolean | &#8592; | Vrai si objet est vide ou indéfini, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Is empty.Summary-->La commande **OB Is empty** retourne **Vrai** si *objet* est indéfini ou vide, et **Faux** si *objet* est défini (initialisé) et contient au moins une propriété.<!-- END REF-->doit avoir été créé via la commande [C\_OBJECT](c-object.md) ou désigner un champ objet 4D.

#### Exemple 

Voici les différents résultats de la commande ainsi que de la commande [OB Is defined](ob-is-defined.md), en fonction du contexte :

```4d
 var $ref : Object
 $vide:=OB Is empty($ref) //Vrai
 $def:=OB Is defined($ref) //Faux
 
 OB SET($ref;"nom";"Susie";"age";4)
     //$ref="{"nom":"Susie","age":4}"
 $vide:=OB Is empty($ref) //Faux
 $def:=OB Is defined($ref) //Vrai
 
 OB REMOVE($ref;"nom")
 OB REMOVE($ref;"age")
 $vide:=OB Is empty($ref) //Vrai
 $def:=OB Is defined($ref) //Vrai
```

#### Voir aussi 

[OB Is defined](ob-is-defined.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1297 |
| Thread safe | &check; |


