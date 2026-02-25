---
id: set-picture-file-name
title: SET PICTURE FILE NAME
slug: /commands/set-picture-file-name
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE FILE NAME.Syntax-->**SET PICTURE FILE NAME** ( *image* ; *nomFichier* )<!-- END REF-->
<!--REF #_command_.SET PICTURE FILE NAME.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image | Picture | &#8594;  | Image dont vous souhaitez fixer le nom par défaut |
| nomFichier | Text | &#8594;  | Nom par défaut de l’image |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|13|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SET PICTURE FILE NAME.Summary-->La commande **SET PICTURE FILE NAME** vous permet de définir ou de modifier le nom de fichier par défaut de l’image passée en paramètre.<!-- END REF-->

Ce nom peut avoir été défini automatiquement à partir du nom d’origine du fichier image importé dans le champ ou la variable image, ou lors d'un appel précédent à **SET PICTURE FILE NAME**. 

Le nom par défaut est utilisé comme nom de fichier en cas d’exportation de l’image dans un fichier disque. Si le contenu du champ est copié dans une variable ou dans un autre champ, le nom par défaut est également copié. Pour plus d’informations, reportez-vous au manuel *Mode Développement*. 

## Voir aussi 

[Get picture file name](../commands/get-picture-file-name)  
[WRITE PICTURE FILE](../commands/write-picture-file)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1172 |
| Thread safe | yes |


