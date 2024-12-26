---
id: sax-get-xml-comment
title: SAX GET XML COMMENT
slug: /commands/sax-get-xml-comment
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML COMMENT.Syntax-->**SAX GET XML COMMENT** ( *document* ; *commentaire* )<!-- END REF-->
<!--REF #_command_.SAX GET XML COMMENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| commentaire | Text | &#8592; | Commentaire XML |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX GET XML COMMENT.Summary-->La commande **SAX GET XML COMMENT** retourne un *commentaire* si un événement SAX de type XML comment est généré dans le document XML référencé par *document*.<!-- END REF--> Pour plus d'informations sur les événements SAX, reportez-vous à la description de la commande [SAX Get XML node](sax-get-xml-node.md). 

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée.

#### Voir aussi 

[SAX ADD XML COMMENT](sax-add-xml-comment.md)  
[SAX Get XML node](sax-get-xml-node.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 874 |
| Thread safe | &check; |
| Modifie les variables | OK |


