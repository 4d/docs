---
id: get-current-printer
title: Get current printer
slug: /commands/get-current-printer
displayed_sidebar: docs
---

<!--REF #_command_.Get current printer.Syntax-->**Get current printer**  : Text<!-- END REF-->
<!--REF #_command_.Get current printer.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Nom de l’imprimante courante |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get current printer.Summary-->La commande **Get current printer** retourne le nom de l’imprimante courante définie dans l’application 4D.<!-- END REF--> Par défaut au lancement de 4D, l’imprimante courante est l’imprimante définie dans le système.

Si l’imprimante courante est gérée via un serveur d’impression (“spouleur”), le chemin d’accès complet (sous Windows) ou le nom du spouleur (sous macOS) est retourné.

Pour obtenir la liste des imprimantes disponibles ainsi que des informations complémentaires, utilisez la commande [PRINTERS LIST](printers-list.md). Pour modifier l’imprimante courante, utilisez la commande [SET CURRENT PRINTER](set-current-printer.md).

**Note :** Lorsque la constante Generic PDF driver est utilisée avec [SET CURRENT PRINTER](set-current-printer.md), [Get current printer](get-current-printer.md) retourne "\_4d\_pdf\_printer" ou le véritable nom du pilote PDF.

#### Gestion des erreurs 

Si aucune imprimante n'est installée, une erreur est générée.

#### Voir aussi 

[PRINTERS LIST](printers-list.md)  
[SET CURRENT PRINTER](set-current-printer.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 788 |
| Thread safe | &check; |
| Interdite sur le serveur ||


