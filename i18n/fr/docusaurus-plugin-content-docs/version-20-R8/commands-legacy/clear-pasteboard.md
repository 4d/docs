---
id: clear-pasteboard
title: CLEAR PASTEBOARD
slug: /commands/clear-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR PASTEBOARD.Syntax-->**CLEAR PASTEBOARD**<!-- END REF-->
<!--REF #_command_.CLEAR PASTEBOARD.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.CLEAR PASTEBOARD.Summary-->**CLEAR PASTEBOARD** efface entièrement le conteneur de données.<!-- END REF--> Si le conteneur contient plusieurs instances des mêmes données, toutes les instances sont effacées. Après un appel à **CLEAR PASTEBOARD**, le conteneur de données est vide.

Vous devez appeler **CLEAR PASTEBOARD** une fois avant de placer des nouvelles données dans le conteneur à l'aide de la commande [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md), car cette dernière n'efface pas le conteneur avant d'y coller des données. 

Si vous appelez **CLEAR PASTEBOARD** une fois et puis appelez [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md) plusieurs fois, vous pouvez couper ou copier les mêmes données sous des formats différents.

En revanche, les commandes [SET TEXT TO PASTEBOARD](set-text-to-pasteboard.md) et [SET PICTURE TO PASTEBOARD](set-picture-to-pasteboard.md) effacent automatiquement le conteneur avant d'y placer des données.

#### Exemple 1 

Le code suivant efface le conteneur puis y ajoute des données : 

```4d
 CLEAR PASTEBOARD // Effacer le conteneur
 APPEND DATA TO PASTEBOARD("com.4d.private.picture.gif";$vxSomeData) // Ajouter des images gif
 APPEND DATA TO PASTEBOARD("com.4d.private.text.rtf";$vxSylkData) // Ajouter du texte RTF
```

#### Exemple 2 

Reportez-vous à l'exemple de la commande [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md).

#### Voir aussi 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 402 |
| Thread safe | &cross; |


