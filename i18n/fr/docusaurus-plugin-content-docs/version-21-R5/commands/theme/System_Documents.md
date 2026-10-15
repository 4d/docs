---
id: System_Documents_theme
title: Documents système
sidebar_label: Documents système
slug: /commands/theme/System-Documents
---

|                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.Append document.Syntax -->](../../commands/append-document)<br/>                           |
| [<!-- INCLUDE #_command_.CLOSE DOCUMENT.Syntax -->](../../commands/close-document)<br/>                             |
| [<!-- INCLUDE #_command_.Convert path POSIX to system.Syntax -->](../../commands/convert-path-posix-to-system)<br/> |
| [<!-- INCLUDE #_command_.Convert path system to POSIX.Syntax -->](../../commands/convert-path-system-to-posix)<br/> |
| [<!-- INCLUDE #_command_.COPY DOCUMENT.Syntax -->](../../commands/copy-document)<br/>                               |
| [<!-- INCLUDE #_command_.CREATE ALIAS.Syntax -->](../../commands/create-alias)<br/>                                 |
| [<!-- INCLUDE #_command_.Create document.Syntax -->](../../commands/create-document)<br/>                           |
| [<!-- INCLUDE #_command_.CREATE FOLDER.Syntax -->](../../commands/create-folder)<br/>                               |
| [<!-- INCLUDE #_command_.DELETE DOCUMENT.Syntax -->](../../commands/delete-document)<br/>                           |
| [<!-- INCLUDE #_command_.DELETE FOLDER.Syntax -->](../../commands/delete-folder)<br/>                               |
| [<!-- INCLUDE #_command_.DOCUMENT LIST.Syntax -->](../../commands/document-list)<br/>                               |
| [<!-- INCLUDE #_command_.Document to text.Syntax -->](../../commands/document-to-text)<br/>                         |
| [<!-- INCLUDE #_command_.FOLDER LIST.Syntax -->](../../commands/folder-list)<br/>                                   |
| [<!-- INCLUDE #_command_.GET DOCUMENT ICON.Syntax -->](../../commands/get-document-icon)<br/>                       |
| [<!-- INCLUDE #_command_.Get document position.Syntax -->](../../commands/get-document-position)<br/>               |
| [<!-- INCLUDE #_command_.GET DOCUMENT PROPERTIES.Syntax -->](../../commands/get-document-properties)<br/>           |
| [<!-- INCLUDE #_command_.Get document size.Syntax -->](../../commands/get-document-size)<br/>                       |
| [<!-- INCLUDE #_command_.Localized document path.Syntax -->](../../commands/localized-document-path)<br/>           |
| [<!-- INCLUDE #_command_.MOVE DOCUMENT.Syntax -->](../../commands/move-document)<br/>                               |
| [<!-- INCLUDE #_command_.Object to path.Syntax -->](../../commands/object-to-path)<br/>                             |
| [<!-- INCLUDE #_command_.Open document.Syntax -->](../../commands/open-document)<br/>                               |
| [<!-- INCLUDE #_command_.Path to object.Syntax -->](../../commands/path-to-object)<br/>                             |
| [<!-- INCLUDE #_command_.RESOLVE ALIAS.Syntax -->](../../commands/resolve-alias)<br/>                               |
| [<!-- INCLUDE #_command_.Select document.Syntax -->](../../commands/select-document)<br/>                           |
| [<!-- INCLUDE #_command_.Select folder.Syntax -->](../../commands/select-folder)<br/>                               |
| [<!-- INCLUDE #_command_.SET DOCUMENT POSITION.Syntax -->](../../commands/set-document-position)<br/>               |
| [<!-- INCLUDE #_command_.SET DOCUMENT PROPERTIES.Syntax -->](../../commands/set-document-properties)<br/>           |
| [<!-- INCLUDE #_command_.SET DOCUMENT SIZE.Syntax -->](../../commands/set-document-size)<br/>                       |
| [<!-- INCLUDE #_command_.SHOW ON DISK.Syntax -->](../../commands/show-on-disk)<br/>                                 |
| [<!-- INCLUDE #_command_.Test path name.Syntax -->](../../commands/test-path-name)<br/>                             |
| [<!-- INCLUDE #_command_.TEXT TO DOCUMENT.Syntax -->](../../commands/text-to-document)<br/>                         |
| [<!-- INCLUDE #_command_.VOLUME ATTRIBUTES.Syntax -->](../../commands/volume-attributes)<br/>                       |
| [<!-- INCLUDE #_command_.VOLUME LIST.Syntax -->](../../commands/volume-list)<br/>                                   |

:::info Compatibilité

Les commandes classiques (legacy) de ce thème peuvent généralement être avantageusement remplacées par les commandes du thème [*Fichiers et Dossiers*](./File_and_Folder.md) et leurs classes associées [File](../../API/FileClass.md), [Folder](../../API/FolderClass.md), [ZipFile](../../API/ZipFileClass.md) et [ZipFolder](../../API/ZipFolderClass.md), qui vous permettent de manipuler les fichiers et les dossiers comme des objets.

:::

## Numéro de référence de document

Vous ouvrez un document avec les commandes [`Open document`](../../commands/open-document), [`Create document`](../../commands/create-document) et [`Append document`](../../commands/append-document). Une fois qu'un document est ouvert, vous pouvez y lire et y écrire des caractères à l'aide de commandes telles que [`RECEIVE PACKET`](../../commands/receive-packet) et [`SEND PACKET`](../../commands/send-packet). Lorsque vous avez terminé d'utiliser le document, vous le fermez généralement à l'aide de la commande `CLOSE DOCUMENT`.

Tous les documents ouverts retournés par ces commandes sont désignés à l'aide d'un **numéro de référence de document** (*DocRef*). Un *DocRef* identifie de manière unique un document ouvert. Il s'agit formellement d'une expression de type **Heure**. Toutes les commandes travaillant avec des documents ouverts attendent un *DocRef* comme paramètre. Si vous passez un *DocRef* incorrect à l'une de ces commandes, une erreur du gestionnaire de fichiers se produit.

Un document ne peut être ouvert en mode **lecture/écriture** que par un seul process à la fois. En mode **lecture seule**, un process peut ouvrir plusieurs documents, plusieurs process peuvent ouvrir plusieurs documents, vous pouvez ouvrir le même document autant de fois que nécessaire, mais vous ne pouvez pas ouvrir le même document deux fois en mode lecture/écriture simultanément. Les commandes `Create document` et `Append document` ouvrent automatiquement les documents en mode lecture/écriture. Seule la commande `Open document` vous permet de choisir le mode d'ouverture.

:::note

Lorsqu'il est appelé depuis un [process préemptif](../../Develop/preemptive.md), un *DocRef* ne peut être utilisé que depuis ce process préemptif. Lorsqu'il est appelé depuis un process coopératif, un *DocRef* peut être utilisé depuis n'importe quel autre process coopératif.

:::

## Variable système Document

Les commandes [`Open document`](../../commands/open-document), [`Create document`](../../commands/create-document), [`Append document`](../../commands/append-document`) et [`Select document`](../../commands/select-document) vous permettent d'accéder à un document à l'aide des boîtes de dialogue standard d'ouverture ou d'enregistrement de fichiers. Lorsque vous accédez à un document via une boîte de dialogue standard, 4D retourne le chemin d'accès complet du document dans la [variable système `Document`](../../Concepts/variables.md#system-variables). Cette variable système doit être distinguée du paramètre *document* qui apparaît dans la liste des paramètres des commandes.

## Chemin d'accès absolu ou relatif

La plupart des routines de cette section acceptent des **noms de documents**, des **chemins d'accès relatifs** ou des **chemins d'accès absolus**.

- Les **chemins d'accès relatifs** définissent un emplacement par rapport à un dossier situé sur le disque. Passer uniquement un nom de document est considéré comme l'utilisation d'un chemin d'accès relatif. Dans 4D, un chemin d'accès relatif est généralement exprimé par rapport au [dossier du projet](../../Project/architecture.md#project-folder), c'est-à-dire le dossier contenant le fichier .project. Les chemins d'accès relatifs sont particulièrement utiles lors du déploiement d'applications dans des environnements hétérogènes.
- Les **chemins d'accès absolus** définissent un emplacement par rapport à la racine du volume et ne dépendent donc pas de l'emplacement actuel du dossier du projet.

Pour déterminer si un chemin d'accès passé à une commande doit être interprété comme absolu ou relatif, 4D applique un algorithme spécifique sur chaque plate-forme.

### Windows

- Si le paramètre contient seulement deux caractères et si le second est un ':'
- ou si le texte contient ':' et '\' comme deuxième et troisième caractères,
- ou si le texte commence par "\\",
- alors le chemin d'accès est absolu.

Dans tous les autres cas, le chemin d'accès est relatif.

Exemples avec la commande [`CREATE FOLDER`](../../commands/create-folder) :

```4d
 CREATE FOLDER("lundi") // chemin relatif
 CREATE FOLDER("\Monday") // chemin relatif
 CREATE FOLDER("\Monday\Tuesday") // chemin relatif
 CREATE FOLDER("c:") // chemin absolu
 CREATE FOLDER("d:\Monday") // chemin absolu
 CREATE FOLDER("\\srv-Internal\temp") // chemin absolu
```

:::note

L'éditeur de code de 4D permet l'utilisation de [séquences d'échappement](../../Concepts/quick-tour.md#escape-sequences). Une séquence d'échappement commence par une barre oblique inversée `\`, suivie d'un caractère. Par exemple, `\t` est la séquence d'échappement pour le caractère Tabulation.

Le caractère `\` est également utilisé comme séparateur dans les chemins d'accès sous Windows. En général, 4D interprète correctement les chemins d'accès Windows saisis dans l'éditeur de méthodes en remplaçant les barres obliques inversées simples `\` par des doubles `\\`. Par exemple, `C:\Folder` deviendra `C:\\Folder`.

Cependant, si vous saisissez `C:\MyDocuments\New`, 4D affichera `C:\\MyDocuments\New`. Dans ce cas, le second `\` est interprété à tort comme `\N` (une séquence d'échappement existante). Vous devez donc saisir un double `\\` lorsque vous souhaitez insérer une barre oblique inversée devant un caractère utilisé dans l'une des séquences d'échappement reconnues par 4D.

:::

### macOS

- Si le texte commence par un séparateur de dossier ':',
- ou s'il n'en contient aucun,
- alors le chemin d'accès est relatif.

Dans tous les autres cas, il est absolu.

Exemples avec la commande [`CREATE FOLDER`](../../commands/create-folder) :

```4d

CREATE FOLDER("Monday") // chemin relatif
 CREATE FOLDER("macintosh hd:") // chemin absolu
 CREATE FOLDER("Monday:Tuesday") // chemin absolu (un volume doit s'appeler Monday)
 CREATE FOLDER(":Monday:Tuesday") // chemin relatif
```

:::note

Voir aussi [**Chemins d'accès absolus et relatifs** dans la section Concepts](../../Concepts/paths.md#absolute-and-relative-pathnames).

:::

## Extraire le contenu d'un chemin d'accès

Vous pouvez manipuler le contenu d'un chemin d'accès à l'aide des commandes [`Path to object`](../../commands/path-to-object) et [`Object to path`](../../commands/object-to-path). En particulier, à l'aide de ces commandes, vous pouvez extraire d'un chemin d'accès :

- un nom de fichier,
- le chemin du dossier parent,
- l'extension du fichier ou du dossier.