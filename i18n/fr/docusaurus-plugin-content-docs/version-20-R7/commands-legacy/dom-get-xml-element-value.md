---
id: dom-get-xml-element-value
title: DOM GET XML ELEMENT VALUE
slug: /commands/dom-get-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ELEMENT VALUE.Syntax-->**DOM GET XML ELEMENT VALUE** ( *refElément* ; *valeurElément* {; *cDATA*} )<!-- END REF-->
<!--REF #_command_.DOM GET XML ELEMENT VALUE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| valeurElément | Variable | &#8592; | Valeur de l’élément |
| cDATA | Variable | &#8592; | Contenu de la section CDATA |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM GET XML ELEMENT VALUE.Summary-->La commande **DOM GET XML ELEMENT VALUE** retourne dans le paramètre *valeurElément* la valeur de l’élément XML désigné par *refElément*.<!-- END REF--> 4D tentera de convertir la valeur obtenue dans le type de la variable passée en paramètre. Si le type de la variable n'est pas défini, la valeur est retournée en type texte par défaut.

Le paramètre facultatif *cDATA* permet de récupérer le contenu de la ou des section(s) CDATA de l’élément XML *refElément* le cas échéant. Comme pour le paramètre *valeurElément*, 4D tentera de convertir la valeur obtenue dans le type de la variable passée en paramètre, et si le type de la variable n'est pas défini, le type texte sera utilisé par défaut.

**Note :** Si l’élément désigné par *refElément* est un BLOB traité par la commande [DOM SET XML ELEMENT VALUE](dom-set-xml-element-value.md), il a été automatiquement encodé en base64\. Par conséquent, la commande tentera automatiquement de le décoder en base64.

#### Exemple 

Cette méthode retourne la valeur de l’élément $ref\_XML\_Elément :

```4d
 var $ref_XML_Elément : Text
 var $valeur : Real
 
 DOM GET XML ELEMENT VALUE($ref_XML_Elément;$valeur)
```

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK prend la valeur 1\. Si une erreur se produit, elle prend la valeur 0.

#### Voir aussi 

[DOM Get XML element](dom-get-xml-element.md)  
[DOM GET XML ELEMENT NAME](dom-get-xml-element-name.md)  
[DOM SET XML ELEMENT VALUE](dom-set-xml-element-value.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 731 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


