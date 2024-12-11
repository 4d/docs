---
id: text-to-blob
title: TEXT TO BLOB
slug: /commands/text-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO BLOB.Syntax-->**TEXT TO BLOB** ( *texte* ; *blob* {; *formatTexte* {; offset | *}} )<!-- END REF-->
<!--REF #_command_.TEXT TO BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| texte | Text | &#8594;  | Texte à écrire dans blob |
| blob | Blob | &#8594;  | BLOB devant recevoir le texte |
| formatTexte | Integer | &#8594;  | Format et jeu de caractères du texte |
| offset &#124; * | Variable, Opérateur | &#8596; | Offset (en octets) dans le BLOB ou * pour ajouter la valeur à la fin du BLOB |
| || | Nouvel offset après l'écriture si * omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.TEXT TO BLOB.Summary-->La commande **TEXT TO BLOB** écrit la valeur de type Texte *texte* dans le BLOB *blob*.<!-- END REF--> 

Le paramètre *formatTexte* permet de définir le format interne et le jeu de caractères de la valeur de type Texte à écrire. Pour cela, passez dans *formatTexte* une des constantes suivantes, placées dans le thème “*BLOB*” :

| Constante                | Type        | Valeur |
| ------------------------ | ----------- | ------ |
| Mac C string             | Entier long | 0      |
| Mac Pascal string        | Entier long | 1      |
| Mac text with length     | Entier long | 2      |
| Mac text without length  | Entier long | 3      |
| UTF8 C string            | Entier long | 4      |
| UTF8 text with length    | Entier long | 5      |
| UTF8 text without length | Entier long | 6      |

Si vous omettez le paramètre *formatTexte*, par défaut 4D utilise le format Mac C string. Dans les bases de données créées à compter de la version 11, 4D travaille par défaut avec le jeu de caractères Unicode (UTF8) pour la gestion des textes, il est donc recommandé d'utiliser ce jeu de caractères. 

**Notes** **:**

* Les constantes “UTF8” sont utilisables uniquement lorsque l’application fonctionne en mode Unicode.
* Les constantes “Mac” ne permettent pas de traiter des textes de plus de 32 ko.
* Si vous souhaitez manipuler des jeux de caractères autres que UTF8, utilisez la commande [CONVERT FROM TEXT](convert-from-text.md).

Le tableau suivant décrit chacun de ces formats :

| **Format texte**                       | **Description et Exemples**                                            |
| -------------------------------------- | ---------------------------------------------------------------------- |
| Chaîne en C                            | Le texte se termine par un caractère NULL (code ASCII $00).            |
| UTF8                                   | "" --> $00                                                             |
| "Café" --> $43 61 66 C3 A9 00          |                                                                        |
| Mac                                    | "" --> $00                                                             |
| "Café" --> $43 61 66 8E 00             |                                                                        |
| Chaîne pascal                          | Le texte est précédé d'un octet de longueur.                           |
| UTF8                                   | \-                                                                     |
| \-                                     |                                                                        |
| Mac                                    | "" --> $00                                                             |
| "Café" --> $04 43 61 66 8E             |                                                                        |
| Texte avec longueur                    | Le texte est précédé de 4 octets (UTF8) ou 2 octets (Mac) de longueur. |
| UTF8                                   | "" --> $00 00 00 00                                                    |
| "Café" --> $00 00 00 05 43 61 66 C3 A9 |                                                                        |
| Mac                                    | "" --> $00 00                                                          |
| "Café" --> $00 04 43 61 66 8E          |                                                                        |
| Texte sans longueur                    | Le texte est composé seulement de ses caractères.                      |
| UTF8                                   | "" --> Pas de valeur                                                   |
| "Café" --> $43 61 66 C3 A9             |                                                                        |
| Mac                                    | "" --> Pas de valeur                                                   |
| "Café" --> $43 61 66 8E                |                                                                        |

Si vous passez le paramètre optionnel \*, la valeur de type Texte est ajoutée à la fin du BLOB et la taille de *blob* est modifiée en conséquence. Ainsi, à l'aide du paramètre optionnel \*, vous pouvez stocker les unes derrière les autres autant de valeurs de type Entier, Entier long, Numérique ou Texte (référez-vous aux autres commandes sur les BLOBs) que vous voulez dans un BLOB, la seule limite étant celle de la mémoire disponible. 

Si vous ne passez pas le paramètre optionnel \* ni de variable dans le paramètre *offset*, la valeur de type Texte est stockée au début de *blob* en remplaçant son contenu précédent, et la taille du BLOB est modifiée en conséquence.

Si vous passez une variable dans le paramètre *offset*, la valeur de type Texte est écrite à l'offset *offset*, exprimé en octets (à partir de zéro), du BLOB. Quel que soit l'endroit où vous placez la valeur, la taille du BLOB sera augmentée si nécessaire en fonction de l'emplacement que vous avez défini (plus jusqu'à la taille du texte le cas échéant). Les octets redéfinis (autres que ceux que vous venez d'écrire) sont initialisés à la valeur zéro. 

Après l'exécution de la commande, la variable du paramètre *offset* est incrémentée du nombre d'octets ayant été écrits. Vous pouvez par conséquent réutiliser la même variable avec une autre commande d'écriture de BLOB afin de placer une autre valeur juste après celle que vous venez d'écrire.

##### Note 

**Note de compatibilité :** Etant donné que cette commande modifie le blob passé comme paramètre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous à la page *Passer des blobs et objets blobs à des commandes 4D* sur developer.4d.com.

#### Exemple 

Après l'exécution de ce code :

```4d
 SET BLOB SIZE(vxBlob;0)
 var vtValeur : Text
 vtValeur:="Café" // La longueur de vtValeur est de 4 octets
 TEXT TO BLOB(vtValeur;vxBlob;Mac C string) // La taille du BLOB devient 5 octets
 TEXT TO BLOB(vtValeur;vxBlob;Mac Pascal string) // La taille du BLOB devient 5 octets
 TEXT TO BLOB(vtValeur;vxBlob;Mac text with length) // La taille du BLOB devient 6 octets
 TEXT TO BLOB(vtValeur;vxBlob;Mac text without length) // La taille du BLOB devient 4 octets
 TEXT TO BLOB(vtValeur;vxBlob;UTF8 C string) // La taille du BLOB devient 6 octets
 TEXT TO BLOB(vtValeur;vxBlob;UTF8 text with length) // La taille du BLOB devient 9 octets
 TEXT TO BLOB(vtValeur;vxBlob;UTF8 text without length) // La taille du BLOB devient 5 octets
```

#### Voir aussi 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[CONVERT FROM TEXT](convert-from-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 554 |
| Thread safe | &check; |
| Interdite sur le serveur ||


