---
id: get-current-printer
title: Get current printer
slug: /commands/get-current-printer
displayed_sidebar: docs
---

<!--REF #_command_.Get current printer.Syntax-->**Get current printer**  : Text<!-- END REF-->
<!--REF #_command_.Get current printer.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Nom de l’imprimante courante |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|15 R5|Modifié|
|2003|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Get current printer.Summary-->La commande **Get current printer** retourne le nom de l’imprimante courante définie dans l’application 4D.<!-- END REF--> Par défaut au lancement de 4D, l’imprimante courante est l’imprimante définie dans le système.

Si l’imprimante courante est gérée via un serveur d’impression (“spouleur”), le chemin d’accès complet (sous Windows) ou le nom du spouleur (sous macOS) est retourné.

Pour obtenir la liste des imprimantes disponibles ainsi que des informations complémentaires, utilisez la commande [PRINTERS LIST](../commands/printers-list). Pour modifier l’imprimante courante, utilisez la commande [SET CURRENT PRINTER](../commands/set-current-printer).

**Note :** Lorsque la constante Generic PDF driver est utilisée avec [SET CURRENT PRINTER](../commands/set-current-printer), [Get current printer](../commands/get-current-printer) retourne "\_4d\_pdf\_printer" ou le véritable nom du pilote PDF.

## Gestion des erreurs 

Si aucune imprimante n'est installée, une erreur est générée.

## Voir aussi 

[PRINTERS LIST](../commands/printers-list)  
[SET CURRENT PRINTER](../commands/set-current-printer)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 788 |
| Thread safe | no |


