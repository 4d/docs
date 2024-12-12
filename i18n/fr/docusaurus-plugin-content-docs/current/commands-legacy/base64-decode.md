---
id: base64-decode
title: BASE64 DECODE
slug: /commands/base64-decode
displayed_sidebar: docs
---

<!--REF #_command_.BASE64 DECODE.Syntax-->**BASE64 DECODE** ( àDécoder {; *décodé*}{; *} )<!-- END REF-->
<!--REF #_command_.BASE64 DECODE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| àDécoder | Text, Blob | &#8594;  | Valeur encodée à décoder |
| &#8592; | Valeur décodée (si le paramètre décodé est omis) |
| décodé | Text, Blob | &#8592; | Valeur décodée |
| * | Opérateur | &#8594;  | Décoder au format Base64URL |

<!-- END REF-->

#### Description 

<!--REF #_command_.BASE64 DECODE.Summary-->La commande **BASE64 DECODE**décode la valeur encodée de type BLOB ou texte au format base64 ou Base64URL passé dans le paramètre àDécoder .<!-- END REF--> Pour plus d'informations sur les formats Base64 et Base64URL, veuillez vous reporter à la description de la commande [BASE64 ENCODE](base64-encode.md).

Passez dans àDécoder la valeur encodée de type texte ou BLOB, en Base64 ou Base64URL, que vous souhaitez décoder. 

Si vous passez le paramètre décodé, la commande décode le contenu de àDécoder dans le paramètre décodé \-- le paramètre àDécoder demeure inchangé. Si vous omettez le paramètre décodé, la commande modifie directement le contenu du paramètre àDécoder.

**Note :** Si une variable texte est passée pour recevoir ce qui est encodé par la commande, elle reçoit les octets décodés interprétés comme utf-8.

Par défaut, si le paramètre \* est omis, la commande utilise un décodage Base64\. Si vous passez le paramètre \*, la commande utilise un décodage Base64URL.

Si àDécoder a un contenu base64 invalide, une valeur de type texte ou blob est retournée.

#### Exemple 

Cet exemple permet de transférer une image via un BLOB :

```4d
 var $blobSource : Blob
 var $monimage : Picture
 $monimage:=[personnes]photo
 PICTURE TO BLOB($monimage;$blobSource;".JPG")
 var $texteBASE64 : Text
 BASE64 ENCODE($blobSource;$texteBASE64) //Encodage du texte
  // le binaire est maintenant disponible sous forme de chaîne de caractères dans $texteBASE64
 
 var $texteBASE64 : Text
 var $blobCible : Blob
 BASE64 DECODE($texteBASE64;$blobCible) //Décodage du texte
  // le binaire encodé en base 64 est maintenant disponible sous forme de BLOB dans $blobCible
```

#### Voir aussi 

[BASE64 ENCODE](base64-encode.md)  
[Generate digest](generate-digest.md)  
*Présentation des commandes XML DOM*  
[XML DECODE](xml-decode.md)  