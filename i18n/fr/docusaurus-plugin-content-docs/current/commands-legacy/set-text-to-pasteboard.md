---
id: set-text-to-pasteboard
title: SET TEXT TO PASTEBOARD
slug: /commands/set-text-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET TEXT TO PASTEBOARD.Syntax-->**SET TEXT TO PASTEBOARD** ( *texte* )<!-- END REF-->
<!--REF #_command_.SET TEXT TO PASTEBOARD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| texte | Text | &#8594;  | Texte à placer dans le conteneur de données |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SET TEXT TO PASTEBOARD.Summary-->**SET TEXT TO PASTEBOARD** place une copie du texte que vous avez passé dans *texte* dans le conteneur de données.<!-- END REF--> Les données éventuellement présentes dans le conteneur sont auparavant effacées. 

**Note :** Dans le cadre d'une opération de copier/coller, le conteneur de données correspond au Presse-papiers. 

Vous pouvez récupérer le texte collé dans le conteneur de données à l'aide de la fonction [Get text from pasteboard](get-text-from-pasteboard.md) ou en appelant par exemple [GET PASTEBOARD DATA](get-pasteboard-data.md)("com.4d.private.text.native";...).

Les expressions de type Texte de 4D peuvent contenir jusqu'à 2 Go de texte. 

**Note :** Le conteneur de données est en lecture seule pendant l’événement formulaire On Drag Over. Il n’est pas possible d’utiliser cette commande dans ce contexte.

#### Exemple 

Référez-vous à l'exemple de la commande [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md).

#### Variables et ensembles système 

Si la copie du texte est correctement placée dans le conteneur de données, la variable système OK prend la valeur 1\. S'il n'y a pas assez de mémoire pour placer une copie du texte dans le conteneur, la variable système OK prend la valeur 0, mais aucune erreur n'est générée.

#### Voir aussi 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  