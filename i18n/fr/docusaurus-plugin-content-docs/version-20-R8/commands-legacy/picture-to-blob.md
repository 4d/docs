---
id: picture-to-blob
title: PICTURE TO BLOB
slug: /commands/picture-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE TO BLOB.Syntax-->**PICTURE TO BLOB** ( *image* ; *blobImage* ; *codec* )<!-- END REF-->
<!--REF #_command_.PICTURE TO BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image | Picture | &#8594;  | Champ ou variable image |
| blobImage | Blob | &#8592; | BLOB devant contenir l’image convertie |
| codec | Text | &#8594;  | Identifiant de codec d'image |

<!-- END REF-->

#### Description 

<!--REF #_command_.PICTURE TO BLOB.Summary-->La commande **PICTURE TO BLOB** convertit une image stockée dans une variable ou un champ 4D dans un autre format, et place l’image résultante dans un BLOB.<!-- END REF-->

Vous passez dans le paramètre *image* une variable ou un champ 4D de type image et dans le paramètre *blobImage* la variable ou le champ BLOB devant contenir l’image convertie. 

Vous passez dans le paramètre *codec* une chaîne indiquant le format de conversion souhaité.   
Un codec peut être une extension (par exemple “.gif”) ou un type Mime (par exemple “image/jpg”). Vous pouvez obtenir la liste des codecs disponibles via la commande [PICTURE CODEC LIST](picture-codec-list.md).

Après l’exécution de la commande, *blobImage* contient l’image au format souhaité. 

Si la conversion s’est déroulée correctement, la variable système OK prend la valeur 1\. Si la conversion échoue (convertisseur non disponible), OK prend la valeur 0 et le BLOB est généré vide (0 octet). 

#### Exemple 

Vous voulez convertir une image depuis un format propriétaire vers le format GIF afin de l'afficher par exemple dans une page HTML. Vous pouvez utiliser un code du type :

```4d
 var $picture : Picture
 var $BLOB : Blob
 var $path : Text
 
 $path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+"Sunrise.psd" //trouver l'image source
 READ PICTURE FILE($path;$picture) //charger l'image
 
 PICTURE TO BLOB($picture;$BLOB;".gif") //conversion au format ".gif"
 WEB SEND BLOB($BLOB;"image/gif")
```

#### Voir aussi 

[BLOB TO PICTURE](blob-to-picture.md)  
[PICTURE CODEC LIST](picture-codec-list.md)  
[WRITE PICTURE FILE](write-picture-file.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 692 |
| Thread safe | &check; |
| Modifie les variables | OK |


