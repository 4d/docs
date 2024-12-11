---
id: picture-codec-list
title: PICTURE CODEC LIST
slug: /commands/picture-codec-list
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE CODEC LIST.Syntax-->**PICTURE CODEC LIST** ( *tabCodecs* {; *tabNoms*}{; *} )<!-- END REF-->
<!--REF #_command_.PICTURE CODEC LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabCodecs | Text array | &#8592; | Identifiants des codecs d’images disponibles |
| tabNoms | Text array | &#8592; | Noms des codecs d’images |
| * | Opérateur | &#8594;  | Retourner la liste des codecs de lecture |

<!-- END REF-->

#### Description 

<!--REF #_command_.PICTURE CODEC LIST.Summary-->La commande **PICTURE CODEC LIST** remplit le tableau *tabCodecs* avec la liste des identifiants des codecs d’images disponibles sur la machine où elle est exécutée.<!-- END REF--> Cette liste comporte les codecs des formats d’images gérés en natif par 4D.

Les identifiants des codecs peuvent être retournés dans le tableau *tabCodecs* sous les formes suivantes :

* une extension (par exemple “.gif”)
* un type Mime (par exemple “image/jpg”)

**Note de compatibilité :** Si Quicktime a été activé dans la base (cf. section *Introduction aux images*), des codes QuickTime sur 4 caractères peuvent également être retournés (par exemple “PNTG”).

La forme renvoyée par la commande dépend du mode de déclaration du codec au niveau du système d’exploitation. Le tableau facultatif *tabNoms* permet de récupérer le nom de chaque codec. Ces noms sont plus explicites que les identifiants. Ce tableau permet par exemple de construire et d’afficher un menu listant les codecs disponibles.

Par défaut, si vous ne passez pas le paramètre *\**, la commande retourne uniquement les codecs utilisables pour encoder (écrire) les images. Ces identifiants peuvent être utilisés dans le paramètre *format* des commandes d’exportation d’images [WRITE PICTURE FILE](write-picture-file.md) et [PICTURE TO BLOB](picture-to-blob.md).  
 Si vous passez le paramètre *\**, la commande retourne également la liste des codecs utilisables pour décoder (lire) les images. Les deux listes ne sont pas exclusives, certains codecs de lecture et d’écriture sont identiques. Les codecs destinés à l’encodage des images pourront généralement être utilisés pour le décodage. En revanche, les codecs de décodage ne permettent pas forcément l’encodage. Par exemple, le codec ".jpg" sera présent dans les deux listes, tandis que le codec ".xbmp" sera présent dans la liste des codecs de lecture mais dans celle d’écriture.

#### Voir aussi 

*Introduction aux images*  
[Is picture file](is-picture-file.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 992 |
| Thread safe | &check; |
| Interdite sur le serveur ||


