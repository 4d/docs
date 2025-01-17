---
id: dom-set-xml-element-name
title: DOM SET XML ELEMENT NAME
slug: /commands/dom-set-xml-element-name
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ELEMENT NAME.Syntax-->**DOM SET XML ELEMENT NAME** ( *refElément* ; *nomElément* )<!-- END REF-->
<!--REF #_command_.DOM SET XML ELEMENT NAME.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| nomElément | Text | &#8594;  | Nouveau nom de l’élément |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM SET XML ELEMENT NAME.Summary-->La commande **DOM SET XML ELEMENT NAME** permet de modifier le nom de l’élément désigné par *refElément*.<!-- END REF--> 

Passez dans *refElément* la référence de l’élément à renommer et dans *nomElément* le nouveau nom de l’élément. Bien entendu, la commande se charge de modifier les balises d’ouverture et de fermeture de l’élément. 

#### Exemple 

Soit la source XML suivante :

```XML
<Book>
   <Title>The Best Seller</Title>
</Book>
```

Si le code suivant est exécuté, en admettant que *vRefElem* contienne la référence de l’élément ‘Book’ :

```4d
 DOM SET XML ELEMENT NAME(vRefElem;"BestSeller")
```

Nous obtenons :

```XML
<BestSeller>
   <Title>The Best Seller</Title>
</BestSeller>
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée. 

#### Gestion des erreurs 

Une erreur est générée lorsque :

* la référence de l’élément n’est pas valide
* le nouveau nom d’élément n’est pas valide (par exemple, s’il débute par un chiffre).

#### Voir aussi 

[DOM GET XML ELEMENT NAME](dom-get-xml-element-name.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 867 |
| Thread safe | &check; |
| Modifie les variables | OK, error |


