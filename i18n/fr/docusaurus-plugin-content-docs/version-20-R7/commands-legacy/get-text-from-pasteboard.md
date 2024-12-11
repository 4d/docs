---
id: get-text-from-pasteboard
title: Get text from pasteboard
slug: /commands/get-text-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.Get text from pasteboard.Syntax-->**Get text from pasteboard**  : Text<!-- END REF-->
<!--REF #_command_.Get text from pasteboard.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Texte présent dans le conteneur de données |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get text from pasteboard.Summary-->**Get text from pasteboard** retourne le texte présent dans le conteneur de données.<!-- END REF--> 

**Note :** Dans le cadre d'une opération de copier/coller, le conteneur de données correspond au Presse-papiers. 

Si le conteneur de données contient du texte enrichi (par exemple au format RTF), le texte conserve ses attributs au moment du déposer ou du coller, si la zone de destination est compatible. 

A noter que les champs et variables de type Texte de 4D peuvent contenir jusqu'à 2 Go de texte.

#### Variables et ensembles système 

Si le texte est correctement extrait, la variable système OK prend la valeur 1, sinon elle prend la valeur 0.

#### Voir aussi 

[GET PASTEBOARD DATA](get-pasteboard-data.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Pasteboard data size](pasteboard-data-size.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 524 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


