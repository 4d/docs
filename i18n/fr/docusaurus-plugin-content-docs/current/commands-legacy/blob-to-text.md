---
id: blob-to-text
title: BLOB to text
slug: /commands/blob-to-text
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to text.Syntax-->**BLOB to text** ( *blob* ; *formatTexte* {; *offset* {; *longueurTexte*}} )  : Text<!-- END REF-->
<!--REF #_command_.BLOB to text.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB duquel extraire le texte |
| formatTexte | Integer | &#8594;  | Format et jeu de caractères du texte |
| offset | Variable | &#8596;  | Offset (en octets) dans le BLOB |
| ||| Nouvel offset après la lecture |
| longueurTexte | Integer | &#8594;  | Nombre de caractères à lire |
| Résultat | Text | &#8592; | Texte extrait |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB to text.Summary-->La fonction **BLOB to text** retourne une valeur de type Texte lue dans le BLOB *blob*.<!-- END REF-->

Le paramètre *formatTexte* définit le format interne et le jeu de caractères de la valeur de type Texte à lire. Dans les bases de données créées à compter de la version 11, 4D utilise par défaut le jeu de caractères Unicode (UTF8) pour la gestion des textes. Par compatibilité, cette commande permet de “forcer” l'utilisation du jeu de caractères Mac Roman (jeu de caractères utilisé dans les versions précédentes de 4D). Le choix du jeu de caractères s’effectue via le paramètre *formatTexte*. Pour cela, passez dans *formatTexte* une des constantes suivantes, placées dans le thème *BLOB* :

| Constante                | Type        | Valeur |
| ------------------------ | ----------- | ------ |
| Mac C string             | Entier long | 0      |
| Mac Pascal string        | Entier long | 1      |
| Mac text with length     | Entier long | 2      |
| Mac text without length  | Entier long | 3      |
| UTF8 C string            | Entier long | 4      |
| UTF8 text with length    | Entier long | 5      |
| UTF8 text without length | Entier long | 6      |

  
**Notes** 

* Les constantes “UTF8” sont utilisables uniquement lorsque l’application fonctionne en mode Unicode.
* Les constantes “Mac” ne permettent pas de traiter des textes de plus de 32 ko.
* Si vous souhaitez manipuler des jeux de caractères autres que UTF8, utilisez la commande [Convert to text](convert-to-text.md). Pour plus d'informations sur ces constantes et les formats qu'elles représentent, reportez-vous à la description de la commande [TEXT TO BLOB](text-to-blob.md).

**ATTENTION :** Le nombre de caractères à lire est déterminé par le paramètre *formatTexte*, SAUF dans le cas des formats Mac Text without length et UTF8 Text without length pour lesquels vous devez spécifier le nombre de caractères à lire dans le paramètre *longueurTexte*. Pour les autres formats, *longueurTexte* est ignoré et vous pouvez l'omettre.

Si vous ne passez pas de variable dans le paramètre optionnel *offset*, les premiers octets de BLOB sont lus, en fonction de la valeur passée dans *formatTexte*. Notez que vous devez passer une variable dans le paramètre *offset* lorsque vous lisez une valeur de type Texte sans longueur. 

Si vous passez une variable dans le paramètre optionnel *offset*, la valeur de type Texte est lue depuis l'offset exprimé en octets (à partir de zéro) du BLOB. 

**Note** **:** Vous devez passer un offset compris entre 0 (zéro) et la taille du BLOB moins la taille du texte à extraire. Sinon, le résultat de la fonction ne sera pas exploitable.

Après l'exécution de la commande, la variable *offset* est incrémentée du nombre d'octets qui a été lu. Vous pouvez donc réutiliser la même variable avec une autre commande de lecture de BLOBs pour lire une autre valeur placée juste après celle que vous venez de lire.

#### Voir aussi 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[Convert to text](convert-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 555 |
| Thread safe | &check; |
| Interdite sur le serveur ||


