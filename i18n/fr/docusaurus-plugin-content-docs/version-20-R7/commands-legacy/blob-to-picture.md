---
id: blob-to-picture
title: BLOB TO PICTURE
slug: /commands/blob-to-picture
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO PICTURE.Syntax-->**BLOB TO PICTURE** ( *blobImage* ; *image* {; *codec*} )<!-- END REF-->
<!--REF #_command_.BLOB TO PICTURE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blobImage | Blob | &#8594;  | BLOB contenant une image |
| image | Picture | &#8592; | Champ ou variable image 4D |
| codec | Text | &#8594;  | Identifiant de codec d’image |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB TO PICTURE.Summary-->La commande **BLOB TO PICTURE** place dans un champ ou une variable image 4D une image stockée dans un BLOB, quel que soit son format initial.<!-- END REF--> 

Le fonctionnement de cette commande est analogue à celui de la commande [READ PICTURE FILE](read-picture-file.md) ; elle s’applique simplement à un BLOB et non à un fichier. Elle permet d’afficher à tout moment des images stockées en format natif dans des BLOBs à l’aide, par exemple, de la commande [DOCUMENT TO BLOB](document-to-blob.md) ou [PICTURE TO BLOB](picture-to-blob.md).

Vous passez dans le paramètre *blobImage* le BLOB contenant l’image. L’image peut être de tout format pris en charge en natif par 4D. Vous pouvez obtenir la liste des formats disponibles à l’aide de la commande [PICTURE CODEC LIST](picture-codec-list.md). Si vous passez le paramètre facultatif *codec*, 4D utilisera la valeur fournie dans ce paramètre pour décoder le BLOB (voir ci-dessous le fonctionnement spécifique de la commande avec ce troisième paramètre). 

Vous passez dans le paramètre *image* la variable ou le champ 4D de type image devant afficher l’image. 

**Note :** Le format interne de l’image sera conservé au sein de la variable ou du champ 4D. 

Après l’exécution de la commande, si le BLOB a pu être correctement décodé, l'*image* contient l’image affichable dans 4D. 

Le paramètre facultatif *codec* vous permet de préciser le codec à utiliser pour décoder le BLOB.  
Si vous passez dans codec un *codec* reconnu par 4D (retourné par la commande [PICTURE CODEC LIST](picture-codec-list.md)), il est appliqué au BLOB et l'image est retournée dans le champ ou la variable *image*.  
Si vous passez dans *codec* un codec non reconnu par 4D, un nouveau codec est enregistré dynamiquement avec l’identifiant passé en paramètre. 4D retourne alors une image qui encapsule le BLOB et la variable OK prend la valeur 1\. Dans ce cas, pour récupérer le BLOB, il sera nécessaire d’utiliser la commande [PICTURE TO BLOB](picture-to-blob.md) avec le même identifiant personnalisé. Ce mécanisme particulier permet de répondre à deux besoins spécifiques :

* encapsulation d’un BLOB (qui n’est pas une image) dans une image,
* chargement d’une image sans disposer du codec.  
La mise en oeuvre de ces mécanismes permet de notamment de créer des "tableaux de BLOBs" en passant par des tableaux images. Cette technique doit être utilisée avec précaution car, les tableaux étant entièrement chargés en mémoire, la manipulation de BLOBs de grande taille peut altérer le fonctionnement de l’application.

**Note :** Un BLOB créé par la commande [VARIABLE TO BLOB](variable-to-blob.md) est géré automatiquement, il n’est pas nécessaire de passer le codec pour l’encapsuler, le BLOB étant "signé". Pour l’opération inverse dans ce cas, vous devez passer ".4DVarBlob" comme identifiant de codec à la commande [PICTURE TO BLOB](picture-to-blob.md).  

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1\. En cas d’échec (absence de QuickTime, format d’image inconnu, paramètre *codec* reconnu mais ne validant pas le BLOB...), OK prend la valeur 0 et le champ ou la variable image 4D est retourné(e) vide.

#### Voir aussi 

[PICTURE CODEC LIST](picture-codec-list.md)  
[PICTURE TO BLOB](picture-to-blob.md)  
[READ PICTURE FILE](read-picture-file.md)  