---
id: new-log-file
title: New log file
displayed_sidebar: docs
---

<!--REF #_command_.New log file.Syntax-->**New log file** : Text<!-- END REF-->

<!--REF #_command_.New log file.Params-->

| Paramètres | Type |                             | Description                             |
| ---------- | ---- | --------------------------- | --------------------------------------- |
| Résultat   | Text | &#8592; | Chemin complet du fichier journal fermé |

<!-- END REF-->

## Description

**Note préliminaire:** Cette commande ne fonctionne qu'avec 4D Server. Elle ne peut être exécutée que via la commande [Execute on server](../commands-legacy/execute-on-server.md) ou via une procédure stockée.

<!--REF #_command_.New log file.Summary-->La commande **New log file** referme le fichier journal courant, le renomme et en crée un nouveau avec le même nom et le même emplacement que le précédent<!-- END REF-->. Cette commande est destinée à la mise en place d'un système de sauvegarde utilisant un miroir logique (voir la section *Mise en place d'un miroir logique* dans le [manuel de référence de 4D Server](https://doc/4d.com)). 

La commande renvoie le chemin d'accès complet (chemin d'accès + nom) du fichier journal en cours de fermeture (appelé "segment"). Ce fichier est stocké au même endroit que le fichier journal courant (spécifié dans la [page Configuration](../Backup/settings.md#configuration) du thème Sauvegarde des Settings). La commande n'effectue aucun traitement (compression, segmentation) sur le fichier sauvegardé. Aucune boîte de dialogue n'apparaît.

Le fichier est renommé avec les numéros de sauvegarde courants de la base de données et du fichier journal, comme indiqué dans l'exemple suivant : DatabaseName\[BackupNum-LogBackupNum\].journal. Par exemple:

- Si la base MyDatabase.4DD a été sauvegardée 4 fois, le dernier fichier de sauvegarde sera nommé MyDatabase[0004\].4BK. Le nom du premier "segment" du fichier journal sera donc MyDatabase\[0004-0001\].journal.
- Si la base MyDatabase.4DD a été sauvegardée 3 fois et que le fichier journal a été sauvegardé 5 fois depuis, le nom de la 6e sauvegarde du fichier journal sera MyDatabase[0003-0006\].journal.

:::warning

Un fichier journal doit toujours être associé à un fichier de données. Si vous appelez cette commande juste après l'activation d'un fichier journal (sans sauvegarde) en utilisant [`SELECT LOG FILE`](select-log-file.md) ou la [boîte de dialogue des Settings](../Backup/settings.md#configuration), assurez-vous d'avoir une copie correspondante de votre fichier de données, sinon le fichier journal ne pourrait pas être intégré.

:::

## Gestion des erreurs

En cas d'erreur, la commande génère un code qui peut être intercepté à l'aide de la commande [ON ERR CALL](../commands-legacy/on-err-call.md).

## Voir également

[SELECT LOG FILE](select-log-file.md)