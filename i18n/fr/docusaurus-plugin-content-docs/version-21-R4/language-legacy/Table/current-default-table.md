---
id: current-default-table
title: Current default table
slug: /commands/current-default-table
displayed_sidebar: docs
---

<!--REF #_command_.Current default table.Syntax-->**Current default table**  : Pointer<!-- END REF-->
<!--REF #_command_.Current default table.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Pointer | &#8592; | Pointeur vers la table par défaut |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Current default table.Summary-->**Current default table** retourne un pointeur vers la table qui a été passée au dernier appel de la commande [DEFAULT TABLE](../commands/default-table) pour le process courant.<!-- END REF-->

## Exemple 

La ligne de code suivante inscrit le nom de la table courante par défaut dans le titre de la fenêtre :

```4d
 SET WINDOW TITLE(Table name(Current default table))
```

## Voir aussi 

[DEFAULT TABLE](../commands/default-table)  
[Table](../commands/table)  
[Table name](../commands/table-name)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 363 |
| Thread safe | yes |


