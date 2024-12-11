---
id: set-file-to-pasteboard
title: SET FILE TO PASTEBOARD
slug: /commands/set-file-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET FILE TO PASTEBOARD.Syntax-->**SET FILE TO PASTEBOARD** ( *fichier* {; *} )<!-- END REF-->
<!--REF #_command_.SET FILE TO PASTEBOARD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fichier | Text | &#8594;  | Nom de fichier ou Chemin d'accès complet de fichier |
| * | Opérateur | &#8594;  | Si passé = ajouter, Si omis = remplacer |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET FILE TO PASTEBOARD.Summary-->La commande **SET FILE TO PASTEBOARD** ajoute dans le conteneur de données le chemin d’accès complet du fichier passé dans le paramètre *fichier*.<!-- END REF--> Cette commande permet de mettre en place des interfaces autorisant le glisser-déposer d’objets 4D vers des fichiers sur le bureau par exemple.

Vous pouvez passer dans *fichier* soit un chemin d'accès complet, soit un nom de fichier simple (sans chemin d'accès). Dans ce dernier cas, le fichier doit être situé à côté du fichier de structure de la base.

La commande admet l’étoile *\** en paramètre optionnel. Par défaut, lorsque ce paramètre est omis, la commande remplace le contenu du conteneur de données par le dernier chemin d’accès défini par *fichier*. Si vous passez ce paramètre, la commande ajoute le *fichier* au conteneur de données. Il peut ainsi contenir une "pile" de chemins d’accès de fichiers. Dans les deux cas, si des données autres que des chemins d’accès étaient présentes dans le conteneur, elles sont effacées.

**Note :** Le conteneur de données est en lecture seule pendant l’événement formulaire On Drag Over. Il n’est pas possible d’utiliser cette commande dans ce contexte.

#### Voir aussi 

[Get file from pasteboard](get-file-from-pasteboard.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 975 |
| Thread safe | &check; |
| Interdite sur le serveur ||


