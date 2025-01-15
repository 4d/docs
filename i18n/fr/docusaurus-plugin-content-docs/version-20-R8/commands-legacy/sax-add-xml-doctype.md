---
id: sax-add-xml-doctype
title: SAX ADD XML DOCTYPE
slug: /commands/sax-add-xml-doctype
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML DOCTYPE.Syntax-->**SAX ADD XML DOCTYPE** ( *document* ; *docType* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML DOCTYPE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| docType | Text | &#8594;  | DocType à ajouter |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX ADD XML DOCTYPE.Summary-->La commande **SAX ADD XML DOCTYPE** ajoute l'instruction DocType définie par le paramètre *docType* dans le document XML référencé par *document*.<!-- END REF--> 

Une instruction DocType permet d’indiquer le type de XML dans lequel le document a été écrit et de désigner la Déclaration de type de document (DTD) utilisée. Une instruction DocType est généralement de la forme .

#### Exemple 

L’instruction suivante :

```4d
 vDocType:="Livres SYSTEM \"Livre.DTD\""
 SAX ADD XML DOCTYPE($RefDoc;vDocType)
```

... inscrira cette ligne dans le document : 

```4d
 
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0\. 

#### Gestion des erreurs 

En cas d’erreur, la commande retourne une erreur qui peut être interceptée via une méthode d’appel sur erreur.

#### Voir aussi 

[SAX ADD XML COMMENT](sax-add-xml-comment.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 851 |
| Thread safe | &check; |
| Modifie les variables | OK, error |


