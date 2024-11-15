---
id: encrypt-data-file
title: Encrypt data file
slug: /commands/encrypt-data-file
displayed_sidebar: docs
---

<!--REF #_command_.Encrypt data file.Syntax-->**Encrypt data file** ( *cheminStructure* ; *cheminDonnées* {; nouvellePhraseSecrète | nouvelleCléDonnées {; *dossierArchive* {; phraseSecrèteCour | cléDonnéesCour {; *nomMéthode*}}}} ) : Text<!-- END REF-->
<!--REF #_command_.Encrypt data file.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminStructure | Text | &#8594;  | Chemin d'accès du fichier de structure |
| cheminDonnées | Text | &#8594;  | Chemin d'accès du fichier de données |
| nouvellePhraseSecrète &#124; nouvelleCléDonnées | Texte, Objet | &#8594;  | En cas de remplacement : nouvelle phrase secrète (texte) ou nouvelle clé de chiffrement (objet) |
| dossierArchive | Text | &#8594;  | Chemin d'accès du dossier dans lequel placer le fichier de données original |
| phraseSecrèteCour &#124; cléDonnéesCour | Texte, Objet | &#8594;  | Phrase secrète courante (texte) ou clé de chiffrement courante (objet) |
| nomMéthode | Text | &#8594;  | Nom de la méthode 4D de rétro-appel |
| Résultat | Text | &#8592; | Nom de chemin d'accès complet au dossier dans lequel les fichiers originaux ont été stockés |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Encrypt data file.Summary-->La commande **Encrypt data file** est utilisée pour chiffrer ou déchiffrer le fichier de données indiqué par le paramètre *cheminDonnées* associé au paramètre *cheminStructure*.<!-- END REF--> Elle peut également être utilisée pour enlever le chiffrement de la base. La commande ne modifie pas les fichiers originaux, elle retourne le nom du chemin d'accès complet au dossier qui a été créé pour la sauvegarde du fichier de données original.

**Notes :**

* Cette commande ne peut pas être utilisée avec le fichier de données courant (ouvert).
* Cette commande peut être exécutée uniquement depuis un poste 4D (mode local) ou un 4D Server (procédure enregistrée). Le fichier de données à chiffrer doit correspondre au fichier de structure indiqué par *cheminStructure*.

L'exécution de cette commande chiffrera ou modifiera le chiffrement de toutes les tables de la base qui ont été identifiées comme "chiffrables". Pour plus d'informations, veuillez consulter la section *Chiffrable*.

**Attention :** Le chiffrement d'une base est une longue opération. Un indicateur de progression (qui peut être interrompu par l'utilisateur) s'affiche. Notez également que la séquence de chiffrement de la base inclut une étape de compactage.

Dans le paramètre *cheminStructure*, vous pouvez passer une chaine vide ou le chemin d'accès du fichier de structure associé au fichier de données que vous souhaitez chiffrer. Ces informations sont nécessaires à la procédure de chiffrement. Si vous passez une chaine vide, une boite de dialogue standard **Open file** s'affiche pour que l'utilisateur puisse indiquer le fichier de structure à utiliser. Sinon, vous pouvez passer un nom de chemin d'accès complet, exprimé dans la syntaxe du système d'exploitation.

Dans le paramètre *cheminDonnées*, vous pouvez passer une chaine vide, un nom de fichier, ou un nom de chemin complet (devant être exprimé dans la syntaxe du système d'exploitation). Si vous passez une chaine vide, une boite de dialogue standard **Open file** s'affiche pour que l'utilisateur puisse indiquer le fichier de données à chiffrer. Ce fichier doit correspondre au fichier de structure défini dans le paramètre *cheminStructure*. Si vous passez uniquement le nom du fichier de données, 4D le recherchera au même niveau que le fichier de structure.

* **Pour chiffrer la base pour la première fois,** il vous suffit de passer le paramètre*nouvellePhraseSecrète* ou *nouvelleCléDonnées*  
 (Les paramètres *nouvellePhraseSecrète* ou *nouvelleCléDonnées* ne doivent pas être fournis) :  
   * *nouvellePhraseSecrète* : Chaine utilisée pour générer la clé de chiffrement (SHA 256 bits)  
   * *nouvelleCléDonnées* : Objet (avec la propriété *encodedKey*) qui contient une nouvelle clé de chiffrement des données. Cette clé devrait avoir été générée à l'aide de la commande [New data key](new-data-key.md).  
    
**Note :** Le paramètre *nouvellePhraseSecrète* (ou *nouvelleCléDonnées*) n'est pas ajouté au trousseau 4D.
* **Pour rechiffrer une base** (*i.e.* la base a déjà été chiffrée), vous devez passer le paramètre *nouvellePhraseSecrète* (ou *nouvelleCléDonnées*) et la phrase secrète courante (ou la clé de données courante). Ceci est nécessaire au déchiffrement de la base avant de la re-chiffrer. Ces informations peuvent être fournies comme suit :  
   * en passant à la commande un paramètre *phraseSecrèteCour* (ou *cléSecrèteCour*) valide,  
   * dans un trousseau 4D.
* **Pour enlever le chiffrement de toutes les tables**, saisissez une phrase secrète vide ou une chaine de données *null* comme *nouvellePhraseSecrète* (ou *nouvelleCléDonnées*). La phrase secrète ou clé de données actuelle doit déjà avoir été fournie. Les fichiers déchiffrés seront générés/copiés dans des dossiers nommés “Replaced files (Decrypting) YYYY-MM-DD HH-MM-SS”/"Decrypted files YYYY-MM-DD HH-MM-SS".

La commande ne modifie pas les fichiers originaux. Ils sont déplacés du dossier *dossierArchive* (s'il est passé) vers un dossier spécifique nommé *Replaced files (Encrypting) YYYY-MM-DD HH-MM-SS* ou *Replaced files (Decrypting) YYYY-MM-DD HH-MM-SS* où YYYY-MM-DD HH-MM-SS correspond à la la date et à l'heure auxquelles a été réalisée l'opération. Par exemple : "Replaced files (Encrypting) 2018-09-29 13-00-35". Le nouveau fichier de données chiffré ou déchiffré remplace automatiquement le fichier original.   
Si vous passez "" dans *dossierArchive*, une boite de dialogue standard **Open file** s'affiche pour que l'utilisateur puisse indiquer l'emplacement du dossier à créer. Si *dossierArchive* est omis, les fichiers originaux sont automatiquement stockés dans un dossier horodaté créé à côté du fichier de structure.

Le paramètre *nomMéthode* est utilisé pour fixer une méthode de rétro-appel qui sera appelée régulièrement durant le chiffrement. Si vous passez une chaine vide ou un nom de méthode non valide, ce paramètre est ignoré (aucune méthode n'est appelée). Lorsqu'elle est appelée, cette méthode reçoit jusqu'à 5 paramères, en fonction du type d'événement qui est à l'origine de l'appel (voir ci-dessous). Il est essentiel de déclarer ces paramètres dans la méthode :

| **Evénement**       | **$1 (Entier long)** | **$2 (** **Entier long** **)** | **$3 (Texte)**                                                                                  | **$4 (** **Entier long** **)**  | **$5 (** **Entier long** **)** |
| ------------------- | -------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------ |
| Message             | 1                    | 0                              | Message de progression (*ex :* "Chiffrement des BLOBs dans la table Documents")                 | Pourcentage atteint (*ex :* 50) | Réservé                        |
| Encryption finished | 2                    | 0                              | message OK (*ex :* "Ok")                                                                        | 0                               | Réservé                        |
| Error               | 3                    | 0                              | Message d'erreur (*ex :* "Problème dans la table XX : La clé d'encryptage n'a pas été fournie") | 0                               | Réservé                        |
| End of execution    | 4                    | 0                              | "Ok"                                                                                            | 0                               | Réservé                        |
| Warning(\*)         | 5                    | Type d'objet                   | Texte d'erreur                                                                                  | Numéro de table ou d'indice     | Réservé                        |

(\*) Avertissement renvoyé lors de l'étape de vérification (voir la commande [VERIFY DATA FILE](verify-data-file.md)).

**Valeur retournée**

Chemin d'accès du dossier de destination des fichiers originaux.

#### Exemple 1 

Chiffrez un fichier de données pour la première fois :

```4d
 var $folder;$passphrase : Text
 $passphrase:=Request("Saisissez la phrase secrète")
 If(OK=1)
  //Parce que le fichier de données n'est pas chiffré, aucune clé de chiffrement courante n'est fournie 
    $folder:=Encrypt data file(Structure file;"myData.4DD";$passphrase)
 End if
```

#### Exemple 2 

Re-chiffrez un fichier de données chiffré (modifiez la phrase secrète) :

```4d
 var $folder;$targetFolder;$passphrase;$newPassphrase : Text
 $passphrase:=Request("Saisissez la phrase secrète actuelle") 
 If(OK=1)
    $newPassphrase:=Request("Saisissez la nouvelle phrase secrète") 
    If(OK=1)
       $targetFolder:=Get 4D folder(Database folder)+"Enregistrer"+Folder separator 
  //Le fichier de données étant chiffré, la clé de chiffrement courante doit être fournie
       $folder:=Encrypt data file(Structure file;"myData.4DD";$newPassphrase;$targetFolder;$passphrase)
    End if
 End if
```

#### Exemple 3 

Retirez le chiffrement d'un fichier de données chiffré :

```4d
 var $folder;$targetFolder;$passphrase : Text
 $passphrase:=Request("Saisissez la phrase secrète")
 If(OK=1)
    $targetFolder:=Get 4D folder(Database folder)+"DecryptedData"+Folder separator
  //La nouvelle phrase secrète est fixée sur une chaine vide pour déchiffrer toutes les données
  //La phrase secrète actuelle doit être fournie
    $folder:=Encrypt data file(Structure file;"myData.4DD";"";$targetFolder;$passphrase)
 End if
```

#### Exemple 4 

Re-chiffrez un fichier de données chiffré avec la clé de chiffrement (par exemple, lorsque le statut chiffrable a été modifié pour certaines tables).

```4d
 var $folder;$passPhrase : Text
 var $added : Boolean
 
 $passphrase:=Request("Saisissez la phrase secrète")
 If(OK=1)
    $added:=Register data key($passphrase) //La clé des données est maintenant dans le trousseau 4D 

$folder:=Encrypt data file(Structure file;"myData.4DD")
 End if


```

#### Voir aussi 

  
[Data file encryption status](data-file-encryption-status.md)  
[Decrypt data BLOB](decrypt-data-blob.md)  
[Encrypt data BLOB](encrypt-data-blob.md)  
[New data key](new-data-key.md)  