---
id: set-picture-metadata
title: SET PICTURE METADATA
slug: /commands/set-picture-metadata
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE METADATA.Syntax-->**SET PICTURE METADATA** ( *image* ; *nomMeta* ; *contenuMeta* {; *nomMeta2* ; *contenuMeta2* ; ... ; *nomMetaN* ; *contenuMetaN*} )<!-- END REF-->
<!--REF #_command_.SET PICTURE METADATA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image | Picture | &#8594;  | Image dont vous souhaitez écrire les métadonnées |
| nomMeta | Text | &#8594;  | Nom ou chemin du bloc à écrire |
| contenuMeta | Variable | &#8594;  | Contenu de la métadonnée |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET PICTURE METADATA.Summary-->La commande **SET PICTURE METADATA** permet d’écrire ou de modifier le contenu de métadonnées (ou méta-balises) présentes dans *image* (champ ou une variable image 4D), lorsqu'elles sont modifiables.<!-- END REF-->

Les métadonnées sont des informations supplémentaires insérées dans les images. 4D permet de manipuler quatre types de métadonnées standard : EXIF, GPS, IPTC et TIFF. 

**Note :** Pour une description détaillée de ces types de metadonnées, vous pouvez consulter les documents suivants : <http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf> (IPTC) et <http://exif.org/Exif2-2.PDF> (TIFF, EXIF et GPS). 

Passez dans le paramètre *nomMeta* une chaîne désignant le type de métadonnée à écrire ou à modifier. Vous pouvez passer :

* une des constantes du thème *Noms des métadonnées images*. Ce thème regroupe toutes les balises prises en charge par 4D. Chaque constante contient un chemin de balise (par exemple "TIFF/DateTime"),
* le nom d’un bloc complet de métadonnées ("TIFF", "EXIF", "GPS" ou "IPTC"),
* une chaîne vide ("").

Passez dans le paramètre *contenuMeta* les nouvelles valeurs de la métadonnée :

* Si vous avez passé une constante de chemin de balise dans *nomMeta*, passez directement dans *contenuMeta* la valeur à écrire ou l’une des constantes appropriées du thème *Valeurs des métadonnées images*. La valeur peut être de type texte, entier long, réel, date ou heure, en fonction de la métadonnée désignée. Vous pouvez utiliser un tableau si la métadonnée contient plus d’une valeur. Si vous passez une chaîne, elle doit être formatée en XML (norme XMP). Passez une chaîne vide ("") pour effacer la métadonnée si elle existe. Si *nomMeta* est *indéfinie*, n'importe quelle chaîne est utilisée.
* Si vous avez passé un nom de bloc ou une chaîne vide dans *nomMeta*, passez dans *contenuMeta* la référence XML DOM de l’élément contenant les métadonnées à écrire. Dans le cas d’une chaîne vide, toutes les métadonnées seront modifiées.

**Attention :** Certaines métadonnées sont en lecture seulement, par exemple TIFF xResolution/TIFF yResolution, EXIF color space ou EXIF pixel X dimension/EXIF pixel Y dimension, elles ne peuvent donc pas être modifiées par la commande **SET PICTURE METADATA**.

Sous Windows, si une erreur se produit durant l’exécution de la commande, la variable OK prend la valeur 0\. A noter que sous Mac OS, pour des raisons techniques, les erreurs d’écriture des métadonnées ne sont pas détectées. La variable OK n’est pas modifiée par cette commande sous Mac OS.

**Notes :**

* Seuls certains formats d'images (notamment JPEG et TIFF) prennent en charge les métadonnées. A l'inverse, des formats tels que GIF ou BMP n'acceptent pas les métadonnées. En cas de conversion d'une image avec métadonnées dans un format ne les prenant pas en charge, les informations sont perdues.
* Sous OS X version 10.7 (Lion), un bogue du framework natif utilisé pour l'encodage et le décodage des métadonnées d'images peut entraîner des erreurs de précision dans les coordonnées GPS. Dans ce cas, une mise à jour vers OS X 10.8 (Mountain Lion) ou 10.9 (Maverick) est fortement recommandée.

#### Exemple 1 

Ecriture de plusieurs valeurs de la métadonnée "Keywords" via des tableaux :

```4d
 ARRAY TEXT($tTkeywords;2)
 $tTkeywords{1}:="france"
 $tTkeywords{2}:="europe"
 SET PICTURE METADATA(vImage;IPTC keywords;$tTkeywords)
```

#### Exemple 2 

Ecriture du bloc GPS via une référence DOM :

```4d
 var $domMetas : Text
 $domMetas:=DOM Parse XML source("metas.xml")
 var $refGPS : Text
 $refGPS:=DOM Find XML element($domMetas;"Metadatas/GPS")
 If(OK=1)
    SET PICTURE METADATA(vImage;"GPS";$refGPS)  //$refGPS pointe bien ici sur l'élement GPS
    ...
 End if
 DOM CLOSE XML($domMetas)
```

#### Note 

Lorsque toutes les métadonnées sont manipulées via une référence d’éléments DOM, les balises sont stockées comme attributs attachés à un élément (enfant de l’élément référencé) dont le nom est le nom du bloc (TIFF, IPTC, etc.). Lorsqu’un bloc de métadonnées spécifique est manipulé, les balises du bloc sont stockées comme attributs directement attachés à l’élement référencé par la commande. 

#### Voir aussi 

[GET PICTURE KEYWORDS](get-picture-keywords.md)  
[GET PICTURE METADATA](get-picture-metadata.md)  
*Noms des métadonnées images*  
*Valeurs des métadonnées images*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1121 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


