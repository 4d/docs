---
id: get-picture-metadata
title: GET PICTURE METADATA
slug: /commands/get-picture-metadata
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE METADATA.Syntax-->**GET PICTURE METADATA** ( *image* ; *nomMeta* ; *contenuMeta* {; *nomMeta2* ; *contenuMeta2* ; ... ; *nomMetaN* ; *contenuMetaN*} )<!-- END REF-->
<!--REF #_command_.GET PICTURE METADATA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image | Picture | &#8594;  | Image dont vous souhaitez lire les métadonnées |
| nomMeta | Text | &#8594;  | Nom ou chemin du bloc à lire |
| contenuMeta | Variable | &#8592; | Contenu de la métadonnée |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PICTURE METADATA.Summary-->La commande **GET PICTURE METADATA** permet de lire le contenu de métadonnées (ou méta-balises) présentes dans *image* (champ ou une variable image 4D).<!-- END REF--> Pour plus d’informations sur les métadonnées, reportez-vous à la description de la commande [SET PICTURE METADATA](set-picture-metadata.md).

Passez dans le paramètre *nomMeta* une chaîne désignant le type de métadonnée à récupérer. Vous pouvez passer :

* une constante du thème "*Noms des métadonnées images*" contenant un chemin de balise,
* le nom d’un bloc complet de métadonnées ("TIFF", "EXIF", "GPS" ou "IPTC"),
* une chaîne vide ("").

Passez dans le paramètre *contenuMeta* la variable destinée à recevoir les métadonnées. 

* Si vous avez passé un chemin de balise dans *nomMeta*, *contenuMeta* contient directement la valeur à lire. La valeur sera convertie dans le type de la variable (si le type de la variable n'est pas défini, le type texte est utilisé par défaut). Les variables de type texte seront formatées en XML (norme XMP). Vous pouvez passer un tableau lorsque la métadonnée contient plus d’une valeur (c’est le cas notamment pour les balises IPTC keywords).
* Si vous avez passé un nom de bloc ou une chaîne vide dans *nomMeta*, *contenuMeta* doit être une référence d’élément DOM XML valide. Dans ce cas, le contenu du bloc désigné (ou de tous les blocs si vous avez passé une chaîne vide dans *nomMeta*) est recopié dans l’élément référencé.

#### Exemple 1 

Utilisation d’arbres DOM

```4d
 $xml:=DOM Create XML Ref("Root") //Création d'un arbre XML DOM
 
     //Réception des métadonnées TIFF
 $_Xml_TIFF:=DOM Create XML element($xml;"/Root/TIFF")
 GET PICTURE METADATA(vPicture;"TIFF";$_Xml_TIFF)
 
     //Réception des métadonnées GPS
 $_Xml_GPS:=DOM Create XML element($xml;"/Root/GPS")
 GET PICTURE METADATA(vPicture;"GPS";$_Xml_GPS)
```

#### Exemple 2 

Utilisation de variables

```4d
 var $dateAsDate : Date
 GET PICTURE METADATA(vImage;TIFF date time;$dateAsDate)  //retourne uniquement la date car "$dateAsDate" est de type Date
 
 var $dateAsText : Text
 GET PICTURE METADATA(vImage;TIFF date time;$dateAsText)  //retourne uniquement la date mais au format XML
 
 C_INTEGER($urgency)
 GET PICTURE METADATA(vImage;IPTC urgency;$urgency)
```

#### Exemple 3 

Réception de balises à valeurs multiples dans des tableaux

```4d
 ARRAY TEXT($tTkeywords;0)
 GET PICTURE METADATA(vImage;IPTC keywords;$tTkeywords)
```

Après exécution de la commande, tTkeywords contient par exemple :   

```4d
 $tTkeywords{1}="france"
 $tTkeywords{2}="europe"
```

#### Exemple 4 

Réception de balises à valeurs multiples dans une variable texte

```4d
 var $vTmots;0 : Text
 GET PICTURE METADATA(vImage;IPTC keywords;$vTmots)
```

Après exécution de la commande, *vTmots* contient par exemple "france;europe".

#### Variables et ensembles système 

La variable système OK retourne 1 si la récupération des métadonnées s’est bien passée, et 0 si une erreur se produit ou si au moins une des balises n’est pas trouvée. Dans tous les cas, les valeurs lisibles sont retournées.

#### Voir aussi 

[GET PICTURE KEYWORDS](get-picture-keywords.md)  
*Noms des métadonnées images*  
[SET PICTURE METADATA](set-picture-metadata.md)  
*Valeurs des métadonnées images*  