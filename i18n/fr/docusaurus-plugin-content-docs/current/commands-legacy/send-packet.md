---
id: send-packet
title: SEND PACKET
slug: /commands/send-packet
displayed_sidebar: docs
---

<!--REF #_command_.SEND PACKET.Syntax-->**SEND PACKET** ( {*docRef* ;} *paquet* )<!-- END REF-->
<!--REF #_command_.SEND PACKET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Référence de document ou canal courant (port série ou document) |
| paquet | Text, Blob | &#8594;  | Chaîne ou BLOB à envoyer |

<!-- END REF-->

#### Description 

<!--REF #_command_.SEND PACKET.Summary-->La commande **SEND PACKET** envoie *paquet* vers un port série ou un document.<!-- END REF--> Si *docRef* est spécifié, le paquet est écrit dans le document référencé par *docRef*. Si *docRef* n'est pas spécifié, le paquet est envoyé vers le port série ou un document préalablement ouvert par la commande [SET CHANNEL](set-channel.md). 

*paquet* représente une simple série de données, généralement une chaîne de caractères.   
Vous pouvez également passer un BLOB dans *paquet*. Ce principe permet notamment de s’affranchir des contraintes liées à l’encodage des caractères envoyés en mode texte (cf. exemple 2).

**Note :** Lorsque vous passez un BLOB dans *paquet*, la commande ne tient pas compte du jeu de caractères éventuellement défini par la commande [USE CHARACTER SET](use-character-set.md). Le BLOB est envoyé sans aucune modification.

Avant d'utiliser **SEND PACKET**, vous devez ouvrir un port série ou un document avec la commande [SET CHANNEL](set-channel.md), ou un document avec une commande de gestion des documents.

Lorsque vous envoyez un paquet vers un document, le premier **SEND PACKET** commence à écrire les données au début du document — à moins que ce dernier n'ait été ouvert par la fonction [USE CHARACTER SET](use-character-set.md). Puis, jusqu'à ce que le document soit refermé, chaque paquet envoyé y est écrit à la suite du précédent. 

**Note :** Ce fonctionnement est valide avec un document ouvert par [SET CHANNEL](set-channel.md). Cependant, pour un document ouvert par [Open document](open-document.md), [Create document](create-document.md) ou [Append document](append-document.md), vous pouvez utiliser les commandes [Get document position](get-document-position.md) et [SET DOCUMENT POSITION](set-document-position.md) pour connaître et modifier la position à laquelle, dans le document, la prochaine écriture (**SEND PACKET**) ou lecture ([RECEIVE PACKET](receive-packet.md)) aura lieu.

#### Exemple 1 

L'exemple suivant écrit, dans un document, des données en provenance de champs. Les valeurs sont écrites sous forme de champs de taille fixe. Dans ce cas, si la longueur d'un champ est inférieure à la taille fixée, le champ est comblé avec des espaces (c'est-à-dire que des espaces sont ajoutés de manière à ce que le champ corresponde à la taille définie). Bien que les champs de valeurs fixes soient un moyen peu efficace de stocker des données, certains systèmes informatiques et certaines applications l'utilisent encore :

```4d
 $Doc :=Create document("") // Création d'un document
 If(OK=1) // Est-ce que le document a bien été créé ?
    For($i;1;Records in selection([Personnes])) // Boucle pour chaque enregistrement
       SEND PACKET($Doc;Change string(15*Char(Space);[Personnes]Prénom;1))
  // Envoi du paquet créé à partir d'une chaîne de 15 espaces contenant le champ Prénom.
       SEND PACKET($Doc;Change string(15*Char(Space);[Personnes]Nom;1))
  // Envoi d'un second paquet créé à partir d'une chaîne de 15 espaces contenant le champ Nom.
  // Cela aurait pu être mis dans le premier paquet, mais est séparé pour des raisons de clarté.
       NEXT RECORD([Personnes])
    End for
    SEND PACKET($Doc;Char(SUB ASCII code))
  // Envoi du code ASCII SUB, utilisé comme marqueur de fin d'enregistrement par certains ordinateurs.
    CLOSE DOCUMENT($Doc) // Fermeture du document
 End if
```

#### Exemple 2 

Cet exemple illustre l’envoi et la récupération de caractères étendus via un BLOB dans un document :

```4d
 var $blob_envoi : Blob
 var $blob_reception : Blob
 TEXT TO BLOB("âzértÿ";$blob_envoi;UTF8 text without length)
 SET BLOB SIZE($blob_envoi;16;255)
 $blob_envoi{6}:=0
 $blob_envoi{7}:=1
 $blob_envoi{8}:=2
 $blob_envoi{9}:=3
 $blob_envoi{10}:=0
 $vlDocRef:=Create document("blob.test")
 If(OK=1)
    SEND PACKET($vlDocRef;$blob_envoi)
    CLOSE DOCUMENT($vlDocRef)
 End if
 $vlDocRef:=Open document(document)
 If(OK=1)
    RECEIVE PACKET($vlDocRef;$blob_reception;65536)
    CLOSE DOCUMENT($vlDocRef)
 End if
```

#### Voir aussi 

[Get document position](get-document-position.md)  
[RECEIVE PACKET](receive-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 103 |
| Thread safe | &check; |
| Interdite sur le serveur ||


