---
id: create-document
title: Create document
slug: /commands/create-document
displayed_sidebar: docs
---

<!--REF #_command_.Create document.Syntax-->**Create document** ( *nomFichier* {; *typeFichier*} ) : Time<!-- END REF-->
<!--REF #_command_.Create document.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Nom de document ou Chemin d'accès complet de document ou Chaîne vide pour afficher la boîte de dialogue standard d'enregistrement de fichiers |
| typeFichier | Text | &#8594;  | Liste des types de documents à filtrer, ou "*" pour ne pas filtrer les documents |
| Résultat | Time | &#8592; | Numéro de référence du document |

<!-- END REF-->

#### Description 

<!--REF #_command_.Create document.Summary-->La commande **Create document** crée un document et retourne son numéro de référence de document.<!-- END REF-->

Vous passez le nom ou le chemin d'accès complet du nouveau document dans *document*. Si *document* existe déjà, il est remplacé. Cependant, si le document est verrouillé ou est déjà ouvert, une erreur est générée.

Si vous passez une chaîne vide dans *document*, une boîte de dialogue standard d'enregistrement de fichiers apparaît et l'utilisateur peut spécifier le nom du document. Si dans ce cas l'utilisateur clique sur le bouton **Annuler**, **Create document** retourne une référence de document nulle, et la variable OK prend la valeur 0.

**Create document** crée par défaut un document de type TEXT (Mac OS) ou .TXT (Windows). Pour créer un autre type de document, passez un type dans le paramètre optionnel *typeFichier*.

Si vous utilisez la boîte de dialogue standard d'enregistrement de fichiers, vous pouvez passer dans le paramètre *typeFichier* un ou plusieurs type(s) de fichier(s) afin de configurer la liste des types autorisés dans la boîte de dialogue. Vous pouvez passer une liste de plusieurs types séparés par un ; (point virgule). Pour chaque type défini, une ligne sera ajoutée dans le menu de choix de type de la boîte de dialogue.   
Sous Mac OS, vous pouvez passer soit type Mac OS classique (TEXT, APPL, etc.), soit un type UTI (Uniform Type Identifier). Les types UTIs ont été définis par Apple afin de répondre aux besoins d'uniformisation des types de fichiers. Par exemple, "public.text" est le type UTI des fichiers de type texte. Pour plus d'informations sur les UTIs, reportez-vous à l'adresse *https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html* (documentation en anglais).   
Sous Windows, vous pouvez également passer un type de fichier classique Mac OS — 4D effectue la correspondance en interne — ou l’extension des fichiers (.txt, .exe, etc.). A noter que sous Windows, l’utilisateur aura la possibilité de “forcer” l’affichage de tous les types de fichiers en saisissant \*.\* dans la boîte de dialogue. Toutefois dans ce cas, 4D effectuera une vérification supplémentaire des types des fichiers sélectionnés : si l’utilisateur sélectionne un type de fichier non autorisé, la commande retourne une erreur.   
Si vous ne souhaitez pas restreindre les fichiers affichés à un ou plusieurs types, passez la chaîne "\*" (étoile) ou ".\*" dans *typeFichier*.   
Sous Windows, vous pouvez passer une extension de fichier Windows ou un type de fichier Mac OS associé à l'aide de la commande *\_o\_MAP FILE TYPES*. Si vous souhaitez créer un document sans extension, un document comportant plusieurs extensions, ou un document comportant une extension de plus de trois caractères, n'utilisez pas le paramètre *typeFichier* et passez le nom complet dans *document* (cf. exemple 2). 

Si le document est correctement créé et ouvert, **Create document** retourne sa référence de document et la variable système OK prend la valeur 1\. La variable système Document est mise à jour et retourne le chemin d’accès complet du document créé. 

Une fois que vous avez créé et ouvert un document, vous pouvez écrire ou lire des valeurs dans ce document à l'aide des commandes [RECEIVE PACKET](receive-packet.md) et [SEND PACKET](send-packet.md), que vous pouvez combiner avec les commandes [Get document position](get-document-position.md) et [SET DOCUMENT POSITION](set-document-position.md) pour accéder directement à certains endroits du document. 

N'oubliez pas d'appeler finalement [CLOSE DOCUMENT](close-document.md) pour le document. 

#### Exemple 1 

L'exemple suivant crée et ouvre un nouveau document qui s'appelle “Note”, écrit la chaîne “Bonjour” et le referme :

```4d
 var vDoc : Time
 vDoc:=Create document("Note.txt") // Créer un nouveau document qui s'appelle Note
 If(OK=1)
    SEND PACKET(vDoc;"Bonjour") // Ecrire un mot dans le document
    CLOSE DOCUMENT(vDoc) // Fermer le document
 End if
```

#### Exemple 2 

L'exemple suivant crée sous Windows des documents avec des extensions non standard : 

```4d
 $vhMonDoc:=Create document("LeDoc.ext1.ext2") //Plusieurs extensions
 $vhMonDoc:=Create document("LeDoc.shtml") //Extension longue
 $vhMonDoc:=Create document("LeDoc.") //Pas d’extension (le point "." est obligatoire)
```

#### Variables et ensembles système 

Si le document est correctement créé, la variable système OK prend la valeur 1 et la variable système Document contient le chemin d’accès et le nom du fichier *document*. 

#### Voir aussi 

[Append document](append-document.md)  
[Open document](open-document.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 266 |
| Thread safe | &check; |
| Modifie les variables | OK, Document, error |


