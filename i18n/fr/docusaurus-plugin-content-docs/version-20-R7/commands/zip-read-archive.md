---
id: zip-read-archive
title: ZIP Read archive
displayed_sidebar: docs
---

<!-- REF #_command_.ZIP Read archive.Syntax -->**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->

| Paramètres | Type                          |     | Description                                   |
| ---------- | ----------------------------- | :-: | --------------------------------------------- |
| zipFile    | 4D.File       |  →  | Fichier archive ZIP                           |
| password   | Text                          |  →  | Mot de passe de l'archive ZIP, le cas échéant |
| Résultat   | 4D.ZipArchive |  ←  | Objet archive                                 |

<!-- END REF -->

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18      | Ajout         |

</details>

#### Description

La commande `ZIP Read archive` <!-- REF #_command_.ZIP Read archive.Summary -->récupère le contenu de *zipFile* et le renvoie sous forme d'objet `4D.ZipArchive`<!-- END REF -->.

> Cette commande ne décompresse pas l'archive ZIP, elle fournit seulement un aperçu de son contenu. Pour extraire le contenu d'une archive, vous devez utiliser des méthodes telles que [file.copyTo()](../API/Document.md#copyto) ou [folder.copyTo()](../API/Directory.md#copyto).

Passez un objet `4D.File` référençant l'archive ZIP compressée dans le paramètre *zipFile*. Le fichier d'archive cible est ouvert jusqu'à la fin de l'exécution de la commande `ZIP Read archive` et jusqu'à ce que tous les contenus/références soient extrait(e)s/publié(e)s ; il est ensuite fermé automatiquement.

Si le *zipFile* est protégé par un mot de passe, vous devez utiliser le paramètre *password* pour fournir un mot de passe. Si un mot de passe est requis mais qu'il n'est pas passé lorsque vous tentez de lire le contenu de l'archive, une erreur est générée.

**Objet archive**

L'objet `4D.ZipArchive` retourné contient une seule propriété [`root`](../API/ZipArchiveClass.md#root) dont la valeur est un objet `4D.ZipFolder`. Ce dossier décrit le contenu de l'archive ZIP.

#### Exemple

Pour récupérer et visualiser le contenu d'un objet ZIP file :

```4d
 var $archive : 4D.ZipArchive
 var $path : 4D.File

 $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
 $archive:=ZIP Read archive($path)
```

Pour récupérer la liste des fichiers et dossiers de l'archive :

```4d
 $folders:=$archive.root.folders()
 $files:=$archive.root.files()
```

Pour lire le contenu d'un fichier sans l'extraire du dossier root :

```4d

 If($files[$i].extension=".txt")
    $txt:=$files[$i].getText()
 Else
    $blob:=$files[$i].getContent()
 End if
```

Pour extraire à partir du dossier root :

```4d
  //extraire un fichier
 $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))

  //extraire tous les fichiers
 $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))
```

#### Voir également

[ZipArchive Class](../API/ZipArchiveClass.md)
[ZipFile Class](../API/ZipFileClass.md)
[ZipFolder Class](../API/ZipFolderClass.md)
[`ZIP Create archive`](zip-create-archive.md)
