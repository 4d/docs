---
id: dom-get-xml-element-name
title: DOM GET XML ELEMENT NAME
slug: /commands/dom-get-xml-element-name
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ELEMENT NAME.Syntax-->**DOM GET XML ELEMENT NAME** ( *refElément* ; *nomElément* )<!-- END REF-->
<!--REF #_command_.DOM GET XML ELEMENT NAME.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| nomElément | Variable | &#8592; | Nom de l’élément |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM GET XML ELEMENT NAME.Summary-->La commande DOM LIRE NOM ELEMENT XML retourne dans le paramètre *nomElément* le nom de l’élément XML désigné par *refElément*.<!-- END REF--> Si le type de la variable *nomElément* n'est pas défini, le type texte est utilisé par défaut.

Pour plus d'informations sur les noms d'éléments XML, reportez-vous à la section .

#### Exemple 

Cette méthode retourne le nom de l’élément $ref\_XML\_Elément :

```4d
 var $ref_XML_Elément : Text
 var $nom : Text
 
 DOM GET XML ELEMENT NAME($ref_XML_Elément;$nom)
```

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK prend la valeur 1\. Si une erreur se produit, elle prend la valeur 0.

#### Voir aussi 

[DOM Get XML element](dom-get-xml-element.md)  
[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[DOM SET XML ELEMENT NAME](dom-set-xml-element-name.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 730 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


