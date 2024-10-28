---
id: remove-picture-from-library
title: REMOVE PICTURE FROM LIBRARY
slug: /commands/remove-picture-from-library
displayed_sidebar: docs
---

<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Syntax-->**REMOVE PICTURE FROM LIBRARY** ( refImage | nomImage )<!-- END REF-->
<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refImage &#124; nomImage | Entier long, Chaîne | &#8594;  | Numéro de référence ou Nom d'une image de la bibliothèque d'images |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Summary-->La commande **REMOVE PICTURE FROM LIBRARY** supprime de la bibliothèque d’images l’image dont vous avez passé le numéro de référence dans *refImage* ou le nom dans *nomImage*.<!-- END REF-->  
Si ce numéro de référence ou ce nom ne correspond à aucune image, la commande ne fait rien.

**4D Server :** **REMOVE PICTURE FROM LIBRARY** ne peut pas être utilisée dans une méthode exécutée sur le poste serveur (procédure stockée ou trigger). Si vous appelez **REMOVE PICTURE FROM LIBRARY** sur le serveur, il ne se passe rien, l’appel est ignoré.

**Attention :** Les objets de structure (éléments de liste hiérarchique, lignes de menu, etc.) peuvent se référer à une image de la bibliothèque. Soyez prudent lorsque vous supprimez par programmation une image de la bibliothèque d’images.

#### Exemple 1 

L’exemple suivant supprime l’image n°4444 de la bibliothèque d’images :

```4d
 REMOVE PICTURE FROM LIBRARY(4444)
```

#### Exemple 2 

L’exemple suivant supprime de la bibliothèque d’images celles dont le nom commence par le symbole dollar ($) : 

```4d
 PICTURE LIBRARY LIST($alRefImage;$asNomImage)
 For($vlImage;1;Size of array($alRefImage))
    If($asNomImage{$vlImage}="$@")
       REMOVE PICTURE FROM LIBRARY($alRefImage{$vlImage})
    End if
 End for
```

#### Voir aussi 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[PICTURE LIBRARY LIST](picture-library-list.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  