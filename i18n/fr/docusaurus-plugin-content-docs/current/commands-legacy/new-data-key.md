---
id: new-data-key
title: New data key
slug: /commands/new-data-key
displayed_sidebar: docs
---

<!--REF #_command_.New data key.Syntax-->**New data key** ( *phraseSecrète* ) : Object<!-- END REF-->
<!--REF #_command_.New data key.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| phraseSecrète | Text | &#8594;  | Phrase secrète à utiliser pour générer la clé de chiffrement des données AES |
| Résultat | Object | &#8592; | Objet contenant la clé (propriété encodedKey) |

<!-- END REF-->

#### Description 

<!--REF #_command_.New data key.Summary-->La commande **New data key** génère une clé de chiffrement des données binaires à partir du texte passé dans le paramètre *phraseSecrète*.<!-- END REF-->

La clé chiffrée peut être sauvegardée localement, afin d'être stockée sur un appareil amovible, tel qu'une clé USB (voir *Sauvegarder les clés de chiffrement des données dans des fichiers* dans le manuel *4D Mode Développement*). Connecter cet appareil au poste qui héberge la base chiffrée permettra automatiquement à l'utilisateur d'accéder aux données chiffrées. 

Vous pouvez passer n'importe quel caractère dans le paramètre *phraseSecrète*. Ce même paramètre génèrera toujours la même clé de chiffrement des données.

**Valeur retournée**

L'objet retourné contient la propriété suivante :

| **Propriété** | **Type** | **Description**                                                           |
| ------------- | -------- | ------------------------------------------------------------------------- |
| encodedKey    | Texte    | Clé de chiffrement AES (SHA 256 bits) générée à partir de *phraseSecrète* |

Si une chaîne vide est passée dans *phraseSecrète*, la commande retourne *null*.

#### Exemple 

Vous souhaitez sauvegarder une clé de chiffrement dans un fichier .4DKeyChain :

```4d
 var $dataKey : Object
 var $passphrase : Text
 
 $passphrase:=Request("Saisissez la phrase secrète :")
 If(OK=1)
    $dataKey:=New data key($passphrase)
    TEXT TO DOCUMENT("generatedKey.4DKeyChain";JSON Stringify($dataKey))
 End if
```

#### Voir aussi 

  
[Decrypt data BLOB](decrypt-data-blob.md)  
[Discover data key](discover-data-key.md)  
[Encrypt data BLOB](encrypt-data-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[Register data key](register-data-key.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1611 |
| Thread safe | &check; |
| Interdite sur le serveur ||


