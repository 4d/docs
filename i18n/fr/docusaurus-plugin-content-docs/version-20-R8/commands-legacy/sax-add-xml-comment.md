---
id: sax-add-xml-comment
title: SAX ADD XML COMMENT
slug: /commands/sax-add-xml-comment
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML COMMENT.Syntax-->**SAX ADD XML COMMENT** ( *document* ; *commentaire* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML COMMENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| commentaire | Text | &#8594;  | Commentaire à ajouter |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX ADD XML COMMENT.Summary-->La commande **SAX ADD XML COMMENT** ajoute un *commentaire* dans le document XML référencé par *document*.<!-- END REF--> 

Un commentaire XML est un texte dont le contenu ne sera pas analysé par l’interpréteur XML. Les commentaires XML sont encadrés par les caractères <!-- et -->. 

#### Exemple 

L’instruction suivante :

```4d
 vCommentaire:="Créé par 4D"
 SAX ADD XML COMMENT($RefDoc;vCommentaire)
```

... inscrira cette ligne dans le document : 

```4d
 
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0\. 

#### Gestion des erreurs 

En cas d’erreur, la commande retourne une erreur qui peut être interceptée via une méthode d’appel sur erreur.

#### Voir aussi 

[SAX ADD XML DOCTYPE](sax-add-xml-doctype.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 852 |
| Thread safe | &check; |
| Modifie les variables | OK, error |


