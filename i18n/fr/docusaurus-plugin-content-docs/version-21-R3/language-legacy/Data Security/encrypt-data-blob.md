---
id: encrypt-data-blob
title: Encrypt data BLOB
slug: /commands/encrypt-data-blob
displayed_sidebar: docs
---

<!--REF #_command_.Encrypt data BLOB.Syntax-->**Encrypt data BLOB** ( *blobToEncrypt* ; *keyObject* ; *salt* ; *encryptedBLOB* ) : Boolean<br/>**Encrypt data BLOB** ( *blobToEncrypt* ; *passPhrase* ; *salt* ; *encryptedBLOB* ) : Boolean<!-- END REF-->
<!--REF #_command_.Encrypt data BLOB.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blobToEncrypt | Blob | &#8594;  | BLOB à encrypter |
| keyObject &#124; passPhrase | Objet, Texte | &#8594;  | Objet JSON contenant la clé de chiffrement ou le mot de passe pour une génération directe de clé de chiffrement (texte) |
| salt | Integer | &#8594;  | "Sel" additionnel pour l'algorithme |
| encryptedBlob | Blob | &#8592; | BLOB encrypté |
| Résultat | Boolean | &#8592; | True si le chiffrement a été effectué correctement. Sinon False |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|19|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Encrypt data BLOB.Summary-->La commande **Encrypt data BLOB** encrypte le paramètre *blobToEncrypt* avec le même algorithme utilisé par 4D pour encrypter les données (AES-256) et retourne le résultat dans *encryptedBlob*.<!-- END REF-->  

Vous pouvez utiliser un paramètre *keyObject* ou un *passPhrase* pour encrypter le BLOB :

* keyObject : un objet JSON contenant la clé de chiffrement, avec la même structure que l'objet retourné par la commande [New data key](../commands/new-data-key)
* passPhrase : une chaîne utilisée pour générer la clé de chiffrement

Passez dans *salt* le nombre qui sera utilisé pour renforcer le chiffrement.

Si le chiffrement est réussi, les données chiffrées sont retournées dans le paramètre *encryptedBlob* et la commande retourne True.

En cas d'erreur, le BLOB est retourné vide et la commande retourne false.

**Note** : Lorsque vous cryptez un objet blob à l'aide de **Encrypt data BLOB**, l'*encryptedBlob* résultant est un multiple de 16 octets en raison de l'algorithme d'encription. Par conséquent, si *blobToEncrypt* n'est pas un multiple de 16 octets, la commande le transforme automatiquement en un multiple de 16 octets en ajoutant des octets nuls à la fin. Pour éviter les erreurs lors du déchiffrement du blob avec [Decrypt data BLOB](../commands/decrypt-data-blob), vous devez gérer la taille de *blobToEncrypt* lorsque vous travaillez avec des fichiers autres que des fichiers texte. Pour un exemple détaillé sur la façon de procéder, consultez [cet article de blog](https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm/). 

## Exemple 

Cryptez un fichier texte situé dans le dossier RESOURCES de la base de données :

```4d
 var $fileToEncrypt;$encryptedFile : 4D.File
 var $blobToEncrypt;$encryptedBlob : Blob
 var $result : Boolean
 
 $fileToEncrypt:=File("/RESOURCES/confidential.txt")
 $encryptedFile:=File("/RESOURCES/encryptedConfidential.txt")
 
 $blobToencrypt:=$fileToEncrypt.getContent()
 
 $result:=Encrypt data BLOB($blobToEncrypt;"myPassPhrase";MAXLONG;$encryptedBlob)
 $encryptedFile.setContent($encryptedBlob)
```

## Voir aussi 

  
[Decrypt data BLOB](../commands/decrypt-data-blob)  
[ENCRYPT BLOB](../commands/encrypt-blob)  
[Encrypt data file](../commands/encrypt-data-file)  
[New data key](../commands/new-data-key)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1773 |
| Thread safe | yes |


