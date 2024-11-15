---
id: generate-digest
title: Generate digest
slug: /commands/generate-digest
displayed_sidebar: docs
---

<!--REF #_command_.Generate digest.Syntax-->**Generate digest** ( *param* ; *algorithme* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Generate digest.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| param | Blob, Text | &#8594;  | Blob ou texte pour lequel obtenir une clé digest |
| algorithme | Integer | &#8594;  | Algorithme utilisé pour retourner la clé : 0 = Digest MD5, 1 = Digest SHA1, 2 = Digest 4D, 3 = Digest SHA-256, 4 = Digest SHA-512 |
| * | Opérateur | &#8594;  | Crypter digest en Base64URL |
| Résultat | Text | &#8592; | Valeur de la clé digest |

<!-- END REF-->

#### Description 

<!--REF #_command_.Generate digest.Summary-->La commande **Generate digest** retourne la clé digest d’un BLOB ou d’un texte après application d’un algorithme de cryptage.<!-- END REF-->

Passez dans le paramètre *algorithme* une valeur désignant la fonction de hachage à employer. Vous pouvez utiliser l’une des constantes suivantes, placées dans le thème *Type digest* :

| Constante           | Type        | Valeur | Comment                                                                                                         |
| ------------------- | ----------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| \_o\_4D REST digest | Entier long | 2      | \*\*\* Constante obsolète \*\*\*                                                                                |
| MD5 digest          | Entier long | 0      | Algorithme *Message Digest 5*. Séquence de 128 bits retournée en tant que chaîne de 32 caractères hexadécimaux. |
| SHA1 digest         | Entier long | 1      | Algorithme *Secure Hash 1*. Séquence de 160 bits retournée en tant que chaîne de 40 caractères hexadécimaux.    |
| SHA256 digest       | Entier long | 3      | Famille *SHA-2.* Séquence de 256 bits retournée en tant que chaîne de 64 caractères hexadécimaux.               |
| SHA512 digest       | Entier long | 4      | Famille *SHA-2*. Séquence de 512 bits retournée en tant que chaîne de 128 caractères hexadécimaux.              |

**Note :** Il est fortement déconseillé d'utiliser les algorithmes MD5 ou SHA pour gérer les mots de passe ; si vous souhaitez vérifier des mots de passe, nous recommandons l'utilisation des commandes [Generate password hash](generate-password-hash.md) et [Verify password hash](verify-password-hash.md).

Par défaut, si le paramètre *\** est omis, la digest retournée est cyptée en hexadécimal. Passez le paramètre *\** si vous souhaitez qu'elle soit chiffrée en Base64URL.

La valeur retournée pour un même objet sera identique sur toutes les plates-formes (macOS/Windows). Le calcul est effectué à partir de la représentation en UTF8 du texte passé en paramètre.

**Note :** Si vous utilisez la commande avec un texte/BLOB vide, elle ne retournera pas *void* mais une chaîne (par exemple "d41d8cd98f00b204e9800998ecf8427e" pour le MD5.

#### Exemple 1 

Cet exemple vous permet de comparer deux images à l’aide de l’algorithme MD5 : 

```4d
 var $vPict1;$vPict2 : Picture
 var $FirstBlob;$SecondBlob : Blob
 READ PICTURE FILE("c:\\myPhotos\\photo1.png")
 If(OK=1)
    READ PICTURE FILE("c:\\myPhotos\\photo2.png")
    If(OK=1)
       PICTURE TO BLOB($vPict1;$FirstBlob;".png")
       PICTURE TO BLOB($vPict2;$SecondBlob;".png")
 
       $MD5_1:=Generate digest($FirstBlob;MD5 digest)
       $MD5_2:=Generate digest($SecondBlob;MD5 digest)
 
       If($MD5_1#$MD5_2)
          ALERT("Ces deux images sont différentes.")
       Else
          ALERT("Ces deux images sont identiques.")
       End if
    End if
 End if
```

#### Exemple 2 

Ces exemples illustrent comment récupérer la clé digest d’un texte :

```4d
 $key1:=Generate digest("The quick brown fox jumps over the lazy dog.";MD5 digest)
  // $key1 vaut "e4d909c290d0fb1ca068ffaddf22cbd0"
 $key2:=Generate digest("The quick brown fox jumps over the lazy dog.";SHA1 digest)
  // $key2 vaut "408d94384216f890ff7a0c3528e8bed1e0b01621"
```

#### Voir aussi 

[BASE64 DECODE](base64-decode.md)  
[BASE64 ENCODE](base64-encode.md)  
[Generate password hash](generate-password-hash.md)  
*Protocole sécurisé*  
[WEB Validate digest](web-validate-digest.md)  