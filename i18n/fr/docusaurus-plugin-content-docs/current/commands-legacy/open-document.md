---
id: open-document
title: Open document
slug: /commands/open-document
displayed_sidebar: docs
---

<!--REF #_command_.Open document.Syntax-->**Open document** ( *nomFichier* {; *typeFichier*}{; *mode*} ) : Time<!-- END REF-->
<!--REF #_command_.Open document.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Nom du document ou Chemin d'accès complet au document ou Chaîne vide pour afficher la boîte de dialogue |
| typeFichier | Text | &#8594;  | Liste des types de documents à filtrer, ou "*" pour ne pas filtrer les documents |
| mode | Integer | &#8594;  | Mode d’ouverture du document |
| Résultat | Time | &#8592; | Numéro de référence du document |

<!-- END REF-->

#### Description 

<!--REF #_command_.Open document.Summary-->La commande **Open document** ouvre le document dont vous avez passé le nom dans *nomFichier*.<!-- END REF-->

Si vous passez une chaîne vide ("") dans *nomFichier*, une boîte de dialogue standard d'ouverture de fichiers apparaît et l'utilisateur peut désigner le document. Si dans ce cas l'utilisateur clique sur le bouton **Annuler**, aucun document n'est ouvert, **Open document** retourne une référence de document nulle, et la variable OK prend la valeur 0.

* Si le document est correctement ouvert, **Open document** retourne sa référence de document et la variable OK prend la valeur 1\.
* Si le document était déjà ouvert en lecture et que le paramètre *mode* est omis, **Open document** l'ouvre en mode lecture/écriture par défaut et la variable OK prend la valeur 1.
* Si le document était déjà ouvert en écriture et que vous tentez de l'ouvrir en mode écriture, une erreur -43 est générée. En revanche, vous pouvez l'ouvrir en mode lecture dans ce cas, la variable OK prend la valeur 1.
* Si le document n'existe pas, une erreur est générée.

Passez dans le paramètre *typeFichier* le ou les type(s) de fichier(s) pouvant être sélectionnés dans la boîte de dialogue d’ouverture. Vous pouvez passer une liste de plusieurs types séparés par un ; (point virgule). Pour chaque type défini, une ligne sera ajoutée dans le menu de choix de type de la boîte de dialogue. 

* Sous Mac OS, vous pouvez passer soit un type Mac OS classique (TEXT, APPL, etc.), soit un type UTI (Uniform Type Identifier). Les types UTIs ont été définis par Apple afin de répondre aux besoins d'uniformisation des types de fichiers. Par exemple, "public.text" est le type UTI des fichiers de type texte. Pour plus d'informations sur les UTIs, veuillez consulter la *page Introduction to Uniform Type Identifiers Overview* sur le site *developer.apple.com* (documentation en anglais).
* Sous Windows, vous pouvez également passer un type de fichier classique Mac OS — 4D effectue la correspondance en interne — ou l’extension des fichiers (.txt, .exe, etc.). A noter que sous Windows, l’utilisateur aura la possibilité de “forcer” l’affichage de tous les types de fichiers en saisissant \*.\* dans la boîte de dialogue. Toutefois dans ce cas, 4D effectuera une vérification supplémentaire des types des fichiers sélectionnés : si l’utilisateur sélectionne un type de fichier non autorisé, la commande retourne une erreur.

Si vous ne souhaitez pas restreindre les fichiers affichés à un ou plusieurs types, passez la chaîne "\*" (étoile) ou ".\*" dans *typeFichier*. 

Le paramètre optionnel *mode* permet de définir le mode d’ouverture du fichier document. Quatre modes d’ouverture sont disponibles. 4D vous propose les constantes prédéfinies suivantes, placées dans le thème *Documents système* : 

| Constante      | Type        | Valeur |
| -------------- | ----------- | ------ |
| Get Pathname   | Entier long | 3      |
| Read and Write | Entier long | 0      |
| Read Mode      | Entier long | 2      |
| Write Mode     | Entier long | 1      |

  
Lorsqu'un document est ouvert, **Open document** se place initialement au début du document, alors que [Append document](append-document.md) se place à la fin. 

Une fois que vous avez ouvert un document, vous pouvez écrire ou lire des valeurs dans ce document à l'aide des commandes [RECEIVE PACKET](receive-packet.md) et [SEND PACKET](send-packet.md), que vous pouvez combiner avec les commandes [Get document position](get-document-position.md) et [SET DOCUMENT POSITION](set-document-position.md) pour accéder directement à certains endroits du document. 

N'oubliez pas d'appeler finalement [CLOSE DOCUMENT](close-document.md) pour le document. 

#### Exemple 1 

L'exemple suivant ouvre un document existant qui s'appelle “Note”, écrit la chaîne “Au revoir” dans le document et le referme. Tout contenu éventuellement présent dans le document est remplacé :

```4d
 var vDoc : Time
 vDoc:=Open document("Note.txt";Read and Write) //Ouvrir le document Note
 If(OK=1)
    SEND PACKET(vDoc;"Au revoir") //Ecrire un mot dans le document
    CLOSE DOCUMENT(vDoc) //Fermer le document
 End if
```

#### Exemple 2 

Vous pouvez lire un document déjà ouvert en écriture :

```4d
 vDoc:=Open document("PassFile";"TEXT") // Le fichier est ouvert
 vRef:=Open document("PassFile";"TEXT";Read Mode) // Le fichier est lu
```

#### Variables et ensembles système 

Si le document est correctement ouvert, la variable système OK prend la valeur 1, sinon elle prend la valeur 0\. Après l'appel, la variable système Document contient le nom complet du document.   
Si vous passez la valeur 3 dans *mode*, la fonction retourne ?00:00:00? (pas de référence de document). Le document n’est pas ouvert mais les variables système Document et OK sont mises à jour :

* OK prend la valeur 1,
* Document contient le chemin d’accès et le nom du fichier *document*.

**Note :** Si vous passez une chaîne vide dans *document*, une boîte de dialogue d’ouverture de fichiers apparaît. Si elle est validée, Document et OK sont mises à jour comme décrit ci-dessus. Si elle est annulée, OK prend la valeur 0.

#### Voir aussi 

[Append document](append-document.md)  
[Create document](create-document.md)  