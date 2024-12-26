---
id: is-in-set
title: Is in set
slug: /commands/is-in-set
displayed_sidebar: docs
---

<!--REF #_command_.Is in set.Syntax-->**Is in set** ( *ensemble* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is in set.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| ensemble | Text | &#8594;  | Nom de l'ensemble à tester |
| Résultat | Boolean | &#8592; | L'enregistrement courant est dans l'ensemble (Vrai) ou l'enregistrement courant n'est pas dans l'ensemble (Faux) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is in set.Summary-->**Is in set** teste si l'enregistrement courant de la table est inclus dans *ensemble*.<!-- END REF--> La fonction **Is in set** retourne Vrai si l'enregistrement courant de la table est dans *ensemble*, et retourne Faux si l'enregistrement courant de la table n'est pas dans *ensemble*.

#### Exemple 

L'exemple suivant est la méthode objet d'un bouton testant si l'enregistrement courant est inclus dans l'ensemble des meilleurs clients :

```4d
 If(Is in set("Meilleurs"))
    ALERT("C'est un de nos meilleurs clients.")
 Else
    ALERT("Ce n'est pas un de nos meilleurs clients.")
 End if
```

#### Voir aussi 

[ADD TO SET](add-to-set.md)  
[REMOVE FROM SET](remove-from-set.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 273 |
| Thread safe | &check; |


