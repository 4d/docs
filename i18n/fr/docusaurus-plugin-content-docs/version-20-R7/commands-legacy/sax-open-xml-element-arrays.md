---
id: sax-open-xml-element-arrays
title: SAX OPEN XML ELEMENT ARRAYS
slug: /commands/sax-open-xml-element-arrays
displayed_sidebar: docs
---

<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Syntax-->**SAX OPEN XML ELEMENT ARRAYS** ( *document* ; *balise* {; *tabNomsAttributs* ; *tabValeursAttributs*} {; *tabNomsAttributs2* ; *tabValeursAttributs2* ; ... ; *tabNomsAttributsN* ; *tabValeursAttributsN*} )<!-- END REF-->
<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| balise | Text | &#8594;  | Nom de l’élément à ouvrir |
| tabNomsAttributs | Text array | &#8594;  | Tableau de noms d’attributs |
| tabValeursAttributs | Text array, Integer array, Date array, Real array, Picture array, Boolean array | &#8594;  | Tableau de valeurs d’attributs |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Summary-->La commande **SAX OPEN XML ELEMENT ARRAYS** permet d’ajouter un nouvel élément dans le document XML référencé par *document* ainsi que, facultativement, des attributs et leurs valeurs sous forme de tableaux.<!-- END REF--> 

Hormis la prise en charge de tableaux (cf. ci-dessous), cette commande est identique à [SAX OPEN XML ELEMENT](sax-open-xml-element.md). Reportez-vous à la description de cette commande pour le détail de son fonctionnement. 

**SAX OPEN XML ELEMENT ARRAYS** accepte des tableaux de type date, numérique, booléen et image comme paramètre(s) *tabValeursAttributs*. 4D effectue automatiquement les conversions nécessaires, vous pouvez paramétrer ces conversions à l’aide de la commande [XML SET OPTIONS](xml-set-options.md). 

Facultativement, la commande **SAX OPEN XML ELEMENT ARRAYS** permet de passer plusieurs couples d’attributs et de valeurs d’attributs sous forme de tableaux dans les paramètres *tabNomsAttributs* et *tabValeursAttributs*.   
Les tableaux doivent avoir été créés au préalable et fonctionner par paires. Vous pouvez passer autant de couples de tableaux et autant d’éléments dans chaque couple que vous voulez. 

#### Exemple 

La méthode suivante :

```4d
 ARRAY STRING(80;tNomsAtt;2)
 ARRAY STRING(80;tValeursAtt;2)
 vElement:="Book"
 tNomsAtt{1}:="Font"
 tValeursAtt{1}:="arial"
 tNomsAtt{2}:="Style"
 tValeursAtt{2}:="Bold"
 SAX OPEN XML ELEMENT ARRAYS($RefDoc;vElement;tNomsAtt;tValeursAtt)
```

... inscrira cette ligne dans le document : 

```XML
<Book Font="arial" Style="Bold">
```

#### Voir aussi 

[SAX CLOSE XML ELEMENT](sax-close-xml-element.md)  
[SAX OPEN XML ELEMENT](sax-open-xml-element.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 921 |
| Thread safe | &check; |
| Interdite sur le serveur ||


