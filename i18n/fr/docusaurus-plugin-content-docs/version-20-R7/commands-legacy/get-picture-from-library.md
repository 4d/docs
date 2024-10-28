---
id: get-picture-from-library
title: GET PICTURE FROM LIBRARY
slug: /commands/get-picture-from-library
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FROM LIBRARY.Syntax-->**GET PICTURE FROM LIBRARY** ( refImage | nomImage ; *image* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FROM LIBRARY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refImage &#124; nomImage | Entier long, Chaîne | &#8594;  | Numéro de référence ou Nom d'une image de la bibliothèque d’images |
| image | Picture | &#8592; | Image de la bibliothèque d'images |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET PICTURE FROM LIBRARY.Summary-->La commande **GET PICTURE FROM LIBRARY** retourne dans *image* l'image de la bibliothèque dont vous avez passé le numéro de référence dans *refImage* ou le nom dans *nomImage*.<!-- END REF-->

S'il n'existe pas d'image de ce numéro ou de ce nom dans la bibliothèque d'images, **GET PICTURE FROM LIBRARY** ne modifie pas le paramètre *image*. 

#### Exemple 1 

L’exemple suivant retourne dans la variable *vgMonImage* l’image dont la référence est stockée dans la variable locale *$vlRefImage* :

```4d
 GET PICTURE FROM LIBRARY($vlRefImage;vgMonImage)
```

#### Exemple 2 

L’exemple suivant retourne dans la variable *$DDcom\_Prot\_MonImage* l’image nommée "DDcom\_Prot\_Bouton1" stockée dans la Bibliothèque d’images :

```4d
 GET PICTURE FROM LIBRARY("DDcom_Prot_Bouton1";$DDcom_Prot_MonImage)
```

#### Exemple 3 

Reportez-vous au troisième exemple de la commande [PICTURE LIBRARY LIST](picture-library-list.md).

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si l’image existe dans la bibliothèque d’images. Sinon, elle prend la valeur zéro.

#### Gestion des erreurs 

S'il n'y a pas assez de mémoire pour retourner l’image, l'erreur –108 est générée. Vous pouvez intercepter cette erreur avec une méthode de gestion d'erreurs.

#### Voir aussi 

[PICTURE LIBRARY LIST](picture-library-list.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  