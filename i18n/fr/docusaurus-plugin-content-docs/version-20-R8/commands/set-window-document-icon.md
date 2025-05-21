---
id: set-window-document-icon
title: SET WINDOW DOCUMENT ICON
displayed_sidebar: docs
---

<!--REF #_command_.SET WINDOW DOCUMENT ICON.Syntax-->**SET WINDOW DOCUMENT ICON** ( *winRef* )<br/>**SET WINDOW DOCUMENT ICON** ( *winRef* ; *image* )<br/>**SET WINDOW DOCUMENT ICON** ( *winRef* ; *file* )<br/>**SET WINDOW DOCUMENT ICON** (  *winRef* ; *image* ; *file* )<!-- END REF-->

<!--REF #_command_.SET WINDOW DOCUMENT ICON.Params-->

| Paramètres | Type                                               |                             | Description                             |
| ---------- | -------------------------------------------------- | --------------------------- | --------------------------------------- |
| winRef     | Integer                                            | &#8594; | Numéro de référence de la fenêtre       |
| image      | Picture                                            | &#8594; | Icône personnalisée                     |
| file       | 4D.File, 4D.Folder | &#8594; | Chemin d'accès du fichier ou du dossier |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R7   | Ajout         |

</details>

## Description

La commande `SET WINDOW DOCUMENT ICON` <!--REF #_command_.SET WINDOW DOCUMENT ICON.Summary-->vous permet de définir une icône pour les fenêtres dans les applications multi-fenêtres en utilisant une *image* et/ou un *file* avec la référence de la fenêtre *winRef*<!-- END REF-->. L'icône sera visible dans la fenêtre elle-même et dans la barre des tâches pour aider les utilisateurs à identifier les différentes fenêtres et à naviguer parmi elles.

Dans le cas d'une application MDI sous Windows, vous pouvez passer `-1` dans *winRef* pour définir l'icône de la fenêtre principale. Dans d'autres contextes (macOS ou [application SDI](../Menus/sdi.md) sous Windows), passer -1 ne fait rien.

- Si seul *file* est passé, la fenêtre utilise l'icône correspondant au type de fichier et le chemin d'accès du fichier est affiché dans le menu de la fenêtre.
- Si seul *image* est passé, 4D n'affiche pas le chemin et l'image passée est utilisée pour l'icône de la fenêtre.
- Si *file* et *image* sont tous les deux passés, le chemin d’accès du fichier est affiché dans le menu de la fenêtre et l’image passée est utilisée pour l’icône de la fenêtre.
- Si seul *winRef* est passé ou si *image* est vide, l'icône est supprimée sous macOS et l'icône par défaut est affichée sous Windows (icône de l'application).

## Exemple

Dans cet exemple, nous voulons créer quatre fenêtres :

1. Utiliser l'icône de l'application sous Windows et aucune icône sur macOS (état par défaut quand aucune *image* ou *file* n'est utilisée).
2. Utilisez une icône "user".
3. Associer un document à la fenêtre ( cela utilise l'icône du type de fichier correspondant).
4. Personnaliser l'icône associée au document.

```4d
 var $winRef : Integer
 var $userImage : Image
 var $file : 4D.File
 
  // 1- Ouvrir le formulaire "Contact"
 $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)
 SET WINDOW DOCUMENT ICON($winRef)
 DIALOG("Contact";*)
 
  // 2- Ouvrir le formulaire "Contact" avec l'icône "user"
 $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)
 BLOB TO PICTURE(File("/RESOURCES/icon/user.png").getContent() ;$userImage)
 SET WINDOW DOCUMENT ICON($winRef;$userImage)
 DIALOG("Contact";*)
 
  // 3- Ouvrir le formulaire "Contact" associé au document "user"
 $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)
 $file:=File("/RESOURCES/files/user.txt")
 SET WINDOW DOCUMENT ICON($winRef;$file)
 DIALOG("Contact";*)
 
  // 4- Ouvrir le formulaire "Contact" associé au document "user" avec l'icône "user"
 $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)
 BLOB TO PICTURE(File("/RESOURCES/icon/user.png").getContent() ;$userImage)
 $file:=File("/RESOURCES/files/user.txt")
 SET WINDOW DOCUMENT ICON($winRef;$userImage;$file)
 DIALOG("Contact";*)

```

## Voir également

[Create entity selection](create-entity-selection.md)