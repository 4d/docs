---
id: data-file
title: Data file
slug: /commands/data-file
displayed_sidebar: docs
---

<!--REF #_command_.Data file.Syntax-->**Data file** {( *segment* )} : Text<!-- END REF-->
<!--REF #_command_.Data file.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| segment | Integer | &#8594;  | Obsolète, ne pas utiliser |
| Résultat | Text | &#8592; | Nom long du fichier de données de la base |

<!-- END REF-->

#### Description 

<!--REF #_command_.Data file.Summary-->La fonction **Data file** retourne le nom long (c'est-à-dire le chemin d'accès complet au fichier, y compris son nom) du fichier de données de la base avec laquelle vous êtes en train de travailler.<!-- END REF-->

Depuis la version 11 de 4D, les segments de données ne sont plus pris en charge. Le paramètre *segment* est désormais ignoré, il ne doit plus être utilisé. 

*Sous Windows*   
Si, par exemple, vous travaillez avec la base MesCDs qui se trouve à l'emplacement \\DOCS\\MesCDs sur le volume G, **Data file** retournera G:\\DOCS\\MesCDs\\MesCDs.4DD (si vous avez choisi l'emplacement proposé par défaut par 4D lorsque vous avez créé la base).

*Sous Mac OS*   
Si, par exemple, vous travaillez avec la base MesCDs qui se trouve dans le dossier Documents:MesCDsƒ: sur le disque Macintosh HD, **Data file** retournera Macintosh HD:Documents:MesCDsƒ:MesCDs.data (si vous avez choisi l'emplacement proposé par défaut par 4D lorsque vous avez créé la base).

**ATTENTION :** Si vous appelez cette fonction depuis 4D en mode distant, seul le nom du fichier de données est retourné, pas le nom long. 

#### Voir aussi 

[Application file](application-file.md)  
[Structure file](structure-file.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 490 |
| Thread safe | &check; |


