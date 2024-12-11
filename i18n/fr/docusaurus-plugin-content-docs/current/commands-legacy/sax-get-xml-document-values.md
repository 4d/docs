---
id: sax-get-xml-document-values
title: SAX GET XML DOCUMENT VALUES
slug: /commands/sax-get-xml-document-values
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Syntax-->**SAX GET XML DOCUMENT VALUES** ( *document* ; *encodage* ; *version* ; *autonome* )<!-- END REF-->
<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| encodage | Text | &#8592; | Jeu de caractères du document XML |
| version | Text | &#8592; | Version du XML |
| autonome | Boolean | &#8592; | Vrai=le document est autonome, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Summary-->La commande **SAX GET XML DOCUMENT VALUES** extrait des informations élémentaires de l’en-tête XML du document XML référencé par *document*.<!-- END REF--> 

La commande retourne respectivement le type d’encodage, la version et la propriété “autonome” du document dans les paramètres *encodage*, *version* et *autonome*. Cette commande doit être utilisée dans le contexte de l’événement SAX XML start document. Pour plus d'informations sur les événements SAX, reportez-vous à la description de la commande [SAX Get XML node](sax-get-xml-node.md). 

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée. 

#### Voir aussi 

[SAX Get XML node](sax-get-xml-node.md)  
[SAX SET XML DECLARATION](sax-set-xml-declaration.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 873 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


