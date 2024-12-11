---
id: dom-get-xml-attribute-by-index
title: DOM GET XML ATTRIBUTE BY INDEX
slug: /commands/dom-get-xml-attribute-by-index
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Syntax-->**DOM GET XML ATTRIBUTE BY INDEX** ( *refElément* ; *indexAttribut* ; *nomAttribut* ; *valeurAttribut* )<!-- END REF-->
<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| indexAttribut | Integer | &#8594;  | Numéro d’indice de l’attribut |
| nomAttribut | Variable | &#8592; | Nom de l’attribut |
| valeurAttribut | Variable | &#8592; | Valeur de l’attribut |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Summary-->La commande **DOM GET XML ATTRIBUTE BY INDEX** permet de connaître le nom ainsi que la valeur d’un attribut désigné par son numéro d’indice.<!-- END REF-->

Passez dans *refElément* la référence d’un élément XML et dans *indexAttribut* le numéro d’indice de l’attribut dont vous voulez connaître le nom. Le nom est retourné dans le paramètre *nomAttribut* et sa valeur est retournée dans le paramètre *valeurAttribut*. 4D tentera de convertir la valeur obtenue dans le type de la variable passée en paramètre. Si le type de la variable n'est pas défini, la valeur est retournée, par défaut, en type texte.

**Note :** Le numéro d’indice ne correspond pas à l’emplacement de l’attribut dans le fichier XML affiché sous forme de texte. En XML, l’indice d’un attribut indique sa position parmi les attributs classés par ordre alphabétique (en fonction de leur nom). Pour une illustration de ce principe, reportez-vous à l’exemple de la commande [DOM Count XML attributes](dom-count-xml-attributes.md).

Si la valeur passée dans *indexAttribut* est supérieure au nombre d’attributs présents dans l’élément XML, une erreur est retournée.

#### Exemple 

Reportez-vous à l’exemple de la commande [DOM Count XML attributes](dom-count-xml-attributes.md). 

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK prend la valeur 1\. Si une erreur se produit, elle prend la valeur 0.

#### Voir aussi 

[DOM GET XML ATTRIBUTE BY NAME](dom-get-xml-attribute-by-name.md)  
[DOM REMOVE XML ATTRIBUTE](dom-remove-xml-attribute.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 729 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


