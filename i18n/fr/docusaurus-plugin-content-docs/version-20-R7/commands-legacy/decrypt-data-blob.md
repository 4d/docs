---
id: decrypt-data-blob
title: Decrypt data BLOB
slug: /commands/decrypt-data-blob
displayed_sidebar: docs
---

<!--REF #_command_.Decrypt data BLOB.Syntax-->**Decrypt data BLOB** ( *blobToDecrypt* ; keyObject | passPhrase ; *salt* ; *decryptedBLOB* ) : Boolean<!-- END REF-->
<!--REF #_command_.Decrypt data BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blobToDecrypt | Blob | &#8594;  | BLOB à décrypter |
| keyObject &#124; passPhrase | Objet, Texte | &#8594;  | Objet JSON contenant la clé de chiffrement ou le mot de passe pour générer directement une clé de chiffrement (texte) |
| salt | Integer | &#8594;  | Additional salt for algorithm |
| decryptedBlob | Blob | &#8592; | BLOB décrypté |
| Résultat | Boolean | &#8592; | True si le déchiffrement a été effectué correctement. Sinon False |

<!-- END REF-->

#### Description 

<!--REF #_command_.Decrypt data BLOB.Summary-->La commande **Decrypt data BLOB**décrypte le paramètre blobToDecrypt avec le même algorithme utilisé par 4D pour décrypter les données (AES-256) et retourne le résultat dans decryptedBLOB.<!-- END REF-->.

Vous pouvez utiliser un *keyObject* ou un *passPhrase* pour décrypter le BLOB :

* keyObject : un objet JSON contenant la clé de chiffrement, avec la même structure que l'objet retourné par la commande [New data key](new-data-key.md)
* passPhrase : une chaîne utilisée pour générer la clé de chiffrement

Le nombre passé dans le paramètre *salt* de **Decrypt data BLOB** doit correspondre à celui utilisé pour le chiffrement.

Si le déchiffrement est réussi, les données déchiffrées sont retournées dans le paramètre *decryptedBLOB* et la commande retourne True.

En cas d'erreur, le BLOB est retourné vide et la commande retourne false.

#### Exemple 

L'exemple suivant montre comment décrypter un fichier chiffré situé dans le dossier RESOURCES de la base de données :  
  
```4d
 var $fileToDecrypt;$decryptedFile : 4D.File
 var $blobToDecrypt;$decryptedBlob : Blob
 var $result : Boolean
 
 $fileToDecrypt:=File("/RESOURCES/encryptedConfidential.txt")
 $decryptedFile:=File("/RESOURCES/decryptedConfidential.txt")
 
 $blobToDecrypt:=$fileToDecrypt.getContent()
 
 $result:=Decrypt data BLOB($blobToDecrypt;"myPassPhrase";MAXLONG;$decryptedBlob)
 $decryptedFile.setContent($decryptedBlob)
```

Les paramètres *passPhrase* et le *salt* utilisés pour le déchiffrement sont identiques aux paramètres *passPhrase* et *salt* utilisés pour le cryptage (voir l'exemple [Encrypt data BLOB](encrypt-data-blob.md)).

#### Voir aussi 

  
[Encrypt data BLOB](encrypt-data-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[New data key](new-data-key.md)  