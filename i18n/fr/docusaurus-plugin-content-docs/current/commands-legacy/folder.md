---
id: folder
title: Folder
slug: /commands/folder
displayed_sidebar: docs
---

<!--REF #_command_.Folder.Syntax-->**Folder** ( chemin | dossier4D {; typeChemin | *} ) -> Résultat<!-- END REF-->
<!--REF #_command_.Folder.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin &#124; dossier4D | Texte, Entier long | &srarr; | Chemin du dossier ou constante du dossier 4D |
| typeChemin &#124; * | Entier long, Opérateur | &srarr; | Si chemin est passé : fk chemin posix (par défaut) ou fk chemin plateforme<br/>Si dossier4D est passé : * pour retourner le dossier de la base hôte |
| Résultat | Object | &larr; | Nouvel objet dossier |

<!-- END REF-->

#### Description 

<!--REF #_command_.Folder.Summary-->**Documentation déplacée**

La documentation de cette commande a été déplacée.<!-- END REF--> Voir [la commande **Folder** sur developer.4d.com](https://developer.4d.com/docs/fr/API/FolderClass/#folder) pour une documentation mise à jour.

La commande **Folder** crée et retourne un nouvel objet de type *Dossier*. 

#### Voir aussi 

[File](file.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  