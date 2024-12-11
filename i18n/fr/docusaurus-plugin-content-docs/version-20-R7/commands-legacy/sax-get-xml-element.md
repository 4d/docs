---
id: sax-get-xml-element
title: SAX GET XML ELEMENT
slug: /commands/sax-get-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ELEMENT.Syntax-->**SAX GET XML ELEMENT** ( *document* ; *nom* ; *préfixe* ; *nomsAttributs* ; *valeursAttributs* )<!-- END REF-->
<!--REF #_command_.SAX GET XML ELEMENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| nom | Text | &#8592; | Nom de l’élément |
| préfixe | Text | &#8592; | Espace de nommage |
| nomsAttributs | Text array | &#8592; | Noms des attributs |
| valeursAttributs | Text array | &#8592; | Valeurs des attributs |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX GET XML ELEMENT.Summary-->La commande **SAX GET XML ELEMENT** retourne diverses informations relatives à l’élément *nom* présent dans le document XML référencé par *document*.<!-- END REF--> Elle doit être appelée dans le contexte d’un événement SAX XML start element ou XML end element. Dans le cas particulier d’un XML end element, les paramètres d’attributs ne sont pas gérés. Pour plus d'informations sur les événements SAX, reportez-vous à la description de la commande [SAX Get XML node](sax-get-xml-node.md). 

*nom* contient le nom de l’élément. 

*préfixe* retourne l’espace de nommage (namespace) de l’élément. Ce paramètre est vide si aucun espace de nommage n’est associé à l’élément. 

La commande remplit le tableau *nomsAttributs* avec les noms des attributs de l’élément cible. Si nécessaire, la commande crée et dimensionne automatiquement le tableau. 

La commande remplit également le tableau *valeursAttributs* avec les valeurs des attributs de l’élément cible. Si nécessaire, la commande crée et dimensionne automatiquement le tableau. 

#### Exemple 

Considérons l’extrait de code XML suivant :

```4d
 
 MonTexte
 
```

Une fois l’instruction suivante exécutée : 

```4d
 SAX GET XML ELEMENT(RefDoc;vNom;vPréfixe;tAttrNoms;tAttrValeurs)
```

...*vNom* contiendra “Child”  
*vPréfixe* contiendra “”  
*tAttrNoms{1}* contiendra “Att1”, *tAttrNoms{2}* contiendra “Att2”, *tAttrNoms{3}* contiendra “Att3”  
*tAttrValeurs{1}* contiendra “111”, *tAttrValeurs{2}* contiendra “222”, *tAttrValeurs{3}* contiendra “333”

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée.

#### Voir aussi 

[SAX Get XML node](sax-get-xml-node.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 876 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


