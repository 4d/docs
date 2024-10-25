---
id: web-send-file
title: WEB SEND FILE
slug: /commands/web-send-file
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND FILE.Syntax-->**WEB SEND FILE** ( *fichierWeb* )<!-- END REF-->
<!--REF #_command_.WEB SEND FILE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fichierWeb | Text | &#8594;  | Chemin d'accès au fichier Web à envoyer |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SEND FILE.Summary-->La commande **WEB SEND FILE** envoie au navigateur Web la page HTML ou le fichier Web stocké dans le document dont vous passez le chemin d'accès dans *fichierHTML*.<!-- END REF--> La commande peut envoyer tout type de fichier pris en charge par les navigateurs Web (pages html mais aussi fichiers xml ou txt, images jpeg, tiff...)

Par défaut, 4D recherche le document à l'intérieur du dossier racine HTML, défini dans les Propriétés de la base.   
Cette commande accepte en paramètre un chemin d’accès exprimé en syntaxe Posix (noms de répertoires ou de dossiers séparés par une barre oblique "/") ou en syntaxe système.  
Si vous passez un chemin d'accès invalide, une erreur liée à la gestion de fichiers de votre système d'exploitation est générée. Vous pouvez intercepter l'erreur à l'aide d'une méthode installée par la commande [ON ERR CALL](on-err-call.md). Si la méthode affiche une boîte de dialogue d'alerte ou de message, celle-ci apparaît sur le poste du navigateur.

Une fois que l'instruction **WEB SEND FILE** a été exécutée, la variable système OK est mise à jour : si le fichier à envoyer existe et si le timeout n’est pas dépassé, la variable OK prend la valeur 1\. Dans le cas contraire, elle prend la valeur 0.

**Note :** Si vous appelez **WEB SEND FILE** depuis un process qui n'est pas un process Web, la commande ne fait rien. Aucune erreur n'est retournée, l'appel est simplement ignoré. 

Les éventuelles références aux variables 4D et aux balises de type *4DSCRIPT* présentes dans la page sont analysées lorsque le type du document le permet (document basé sur du texte). 

#### Exemple 

Le dossier racine HTML de la base est le dossier WebDocs. Il contient les éléments suivants :

```4d
 ..\WebDocs\HTM\MaPage.HTM
```

L'envoi de la page Web *"MaPage.HTM"* doit être effectué de cette manière :

```4d
 WEB SEND FILE("HTM/MaPage.HTM")
```

#### Variables et ensembles système 

Si le fichier à envoyer existe et si le timeout n’est pas dépassé, la variable OK prend la valeur 1\. Dans le cas contraire, elle prend la valeur 0.

#### Voir aussi 

[WEB SEND BLOB](web-send-blob.md)  