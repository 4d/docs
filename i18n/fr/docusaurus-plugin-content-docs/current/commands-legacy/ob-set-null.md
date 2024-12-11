---
id: ob-set-null
title: OB SET NULL
slug: /commands/ob-set-null
displayed_sidebar: docs
---

<!--REF #_command_.OB SET NULL.Syntax-->**OB SET NULL** ( *objet* ; *propriété* )<!-- END REF-->
<!--REF #_command_.OB SET NULL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object, Object | &#8594;  | Objet structuré |
| propriété | Text | &#8594;  | Nom de la propriété à laquelle appliquer la valeur null |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB SET NULL.Summary-->La commande **OB SET NULL** permet de stocker la valeur **null** dans l’objet de langage désigné par le paramètre *objet*.<!-- END REF-->doit avoir été défini via la commande [C\_OBJECT](c-object.md) ou désigner un champ objet 4D.

Passez dans le paramètre *propriété* le libellé de la propriété dans laquelle stocker la valeur **null**. Si la propriété existe déjà dans *objet*, sa valeur sera mise à jour. Si elle n’existe pas, elle est créée. Attention, le paramètre *propriété* tient compte des majuscules/minuscules. 

#### Exemple 

On souhaite mettre la valeur null dans la propriété "âge" de Léa :

```4d
 var $ref : Object
 OB SET($ref;"nom";"Léa";"âge";4)
     // $ref = {"nom":"Léa","âge":4}
 ...
 OB SET NULL($ref ;"âge")
     // $ref = {"nom":"Léa","âge":null}
```

#### Voir aussi 

[Null](null.md)  
[OB GET PROPERTY NAMES](ob-get-property-names.md)  
[OB SET](ob-set.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1233 |
| Thread safe | &check; |
| Interdite sur le serveur ||


