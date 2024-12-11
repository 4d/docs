---
id: sax-open-xml-element
title: SAX OPEN XML ELEMENT
slug: /commands/sax-open-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX OPEN XML ELEMENT.Syntax-->**SAX OPEN XML ELEMENT** ( *document* ; *balise* {; *nomAttribut* ; *valeurAttribut*} {; *nomAttribut2* ; *valeurAttribut2* ; ... ; *nomAttributN* ; *valeurAttributN*} )<!-- END REF-->
<!--REF #_command_.SAX OPEN XML ELEMENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| balise | Text | &#8594;  | Nom de l’élément à ouvrir |
| nomAttribut | Text | &#8594;  | Nom d’attribut |
| valeurAttribut | Text | &#8594;  | Valeur d’attribut |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX OPEN XML ELEMENT.Summary-->La commande **SAX OPEN XML ELEMENT** permet d’ajouter un nouvel élément dans le document XML référencé par *document* ainsi que, facultativement, des attributs et leurs valeurs.<!-- END REF--> 

L’élément ajouté est “ouvert” dans le document (la balise de fin n’est pas ajoutée). Pour refermer un élément créé à l’aide de cette commande, vous devez soit :

* utiliser la commande [SAX CLOSE XML ELEMENT](sax-close-xml-element.md),
* refermer le document XML. Dans ce cas, 4D ajoute automatiquement les balises XML de fermeture nécessaires.

Passez dans *balise* le nom de l’élément à créer. Ce nom peut contenir uniquement des lettres, des chiffres, ainsi que les caractères “.”, “-“,”\_” et “:”. Si un caractère invalide est passé dans *balise*, une erreur est générée. 

Facultativement, la commande permet de passer un ou plusieurs couple(s) attributs/valeurs (sous forme de variables, champs ou valeur littérales) via les paramètres *nomAttribut* et *valeurAttribut*. Vous pouvez passer autant de couples attribut/valeur que vous voulez. 

#### Exemple 

L’instruction suivante :

```4d
 vElement:="Book"
 SAX OPEN XML ELEMENT($RefDoc;vElement)
```

... inscrira cette ligne dans le document : 

```XML
<Book
```

#### Gestion des erreurs 

Si un caractère invalide est passé dans *balise*, une erreur est générée. 

#### Voir aussi 

[SAX CLOSE XML ELEMENT](sax-close-xml-element.md)  
[SAX OPEN XML ELEMENT ARRAYS](sax-open-xml-element-arrays.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 853 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


