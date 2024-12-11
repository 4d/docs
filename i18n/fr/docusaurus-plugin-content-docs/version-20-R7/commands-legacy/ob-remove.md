---
id: ob-remove
title: OB REMOVE
slug: /commands/ob-remove
displayed_sidebar: docs
---

<!--REF #_command_.OB REMOVE.Syntax-->**OB REMOVE** ( *objet* ; *propriété* )<!-- END REF-->
<!--REF #_command_.OB REMOVE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object, Object | &#8594;  | Objet structuré |
| propriété | Text | &#8594;  | Nom de la propriété à supprimer |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB REMOVE.Summary-->La commande **OB REMOVE** permet de supprimer la *propriété* de l’objet de langage désigné par le paramètre *objet*.<!-- END REF--> Cette commande supprime la *propriété* ainsi que sa valeur courante.

*objet* doit avoir été défini via la commande [C\_OBJECT](c-object.md) ou désigner un champ objet 4D.

Passez dans le paramètre *propriété* le libellé de la propriété à lire. Attention, le paramètre *propriété* tient compte des majuscules/minuscules. 

#### Exemple 

Vous souhaitez supprimer la propriété "age" d’un objet :

```4d
 var $Objet : Object
 OB SET($Objet;"nom";"smith";"age";42;"client";True)
     //$Objet={"nom":"smith","age":42,"client":true}
 OB REMOVE($Objet;"age")
     //$Objet={"nom":"smith","client":true}
```

#### Voir aussi 

[OB SET](ob-set.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1226 |
| Thread safe | &check; |
| Interdite sur le serveur ||


