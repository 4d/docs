---
id: data-file-encryption-status
title: Data file encryption status
slug: /commands/data-file-encryption-status
displayed_sidebar: docs
---

<!--REF #_command_.Data file encryption status.Syntax-->**Data file encryption status** ( cheminStructure , cheminDonnées ) : Object<!-- END REF-->
<!--REF #_command_.Data file encryption status.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminStructure | Text | &#8594;  | Chemin d'accès du fichier de structure à vérifier |
| cheminDonnées | Text | &#8594;  | Chemin d'accès du fichier de données 4D à vérifier |
| Résultat | Object | &#8592; | Informations sur le chiffrement du fichier de données et de chaque table |

<!-- END REF-->

#### Description 

<!--REF #_command_.Data file encryption status.Summary-->La commande **Data file encryption status** retourne un objet qui fournit le statut de chiffrement du fichier de données indiqué par les paramètres *cheminStructure* et *cheminDonnées*.<!-- END REF--> Le statut de chiffrement de chaque table est également fourni.

Le paramètre cheminDonnées indique un fichier de données 4D (.4dd) qui doit correspondre au fichier de structure défini par le paramètre *cheminStructure*. Vous pouvez indiquer le fichier de structure courant mais le fichier de données doit être différent du fichier courant (ouvert).

**Note :** Utilisez la méthode *ds.encryptionStatus( )* pour déterminer le statut de chiffrement du fichier de données courant.

**Valeur retournée**

L'objet retourné contient les propriétés suivantes :

| **Propriété**   | **Type**  | **Description**                                                                                         |
| --------------- | --------- | ------------------------------------------------------------------------------------------------------- |
| isEncrypted     | Booléen   | Vrai si le fichier de données est chiffré                                                               |
| keyProvided     | Booléen   | Vrai si la clé de chiffrement correspondant au fichier de données chiffré est dans le trousseau 4D(\*). |
| tables          | Objet     | Objet contenant autant de propriétés que de tables *chiffrables* ou *chiffrées*.                        |
| <*table name*\> | Objet     | Table chiffrable ou chiffrée                                                                            |
| name            | Texte     | Nom de la table                                                                                         |
| num             | Numérique | Numéro de la table                                                                                      |
| isEncryptable   | Booléen   | Vrai si la table est dite chiffrable dans le fichier de structure                                       |
| isEncrypted     | Booléen   | Vrai si les enregistrements de la table sont chiffrés dans le fichier de données                        |

(\*) La clé de chiffrement peut avoir déjà été fournie :

* précédemment :  
   * avant l'ouverture de ce fichier de données, sur un appareil connecté,  
   * via la commande *ds.provideDataKey( )* à l'ouverture de ce fichier de données,  
   * après l'ouverture du fichier de données, via la commande [Discover data key](discover-data-key.md)
* via la commande [Register data key](register-data-key.md)

#### Exemple 

Vous souhaitez connaitre le statut de chiffrement d'un fichier de données correspondant au fichier de structure courant :

```4d
 var $status : Object
 
 $status:=Data file encryption status(Structure file;"D:\\Invoices\\Data_2019\\Invoices.4dd")
 Case of
    :(Not($status.isEncrypted))
       ALERT("Le fichier de données n'est pas chiffré")
    :($status.isEncrypted&(Not($status.keyProvided))
       ALERT("Le fichier de données est chiffré et la clé de chiffrement n'est pas dans le trousseau. Vous n'aurez pas accès aux données chiffrées.")
    :($status.isEncrypted&$status.keyProvided)
       ALERT("Le fichier de données est chiffré et la clé de chiffrement est dans le trousseau. Vous aurez accès aux données chiffrées.")
 End case
```

#### Voir aussi 

  
[Encrypt data file](encrypt-data-file.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1609 |
| Thread safe | &check; |


