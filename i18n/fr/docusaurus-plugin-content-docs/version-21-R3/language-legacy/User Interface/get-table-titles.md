---
id: get-table-titles
title: GET TABLE TITLES
slug: /commands/get-table-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE TITLES.Syntax-->**GET TABLE TITLES** ( *titresTables* ; *numTables* )<!-- END REF-->
<!--REF #_command_.GET TABLE TITLES.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| titresTables | Text array | &#8592; | Noms courants des tables |
| numTables | Integer array | &#8592; | Numéros des tables |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2003|Créé|

</details>
</div>

## Description 

<!--REF #_command_.GET TABLE TITLES.Summary-->La commande **GET TABLE TITLES** remplit les tableaux *titresTables* et *numTables* avec les noms et les numéros des tables de la base définis dans la fenêtre de Structure ou via la commande [SET TABLE TITLES](../commands/set-table-titles).<!-- END REF--> Le contenu des deux tableaux est synchronisé.

Si la commande [SET TABLE TITLES](../commands/set-table-titles) a été appelée lors de la session, **GET TABLE TITLES** retourne uniquement les noms “modifiés” et les numéros des tables ayant été définies via cette commande.   
Sinon, **GET TABLE TITLES** retourne le nom défini dans la fenêtre de Structure de toutes les tables de la base.   
Dans les deux cas, la commande ne retourne pas les tables déclarées invisibles. 

## Voir aussi 

[GET FIELD TITLES](../commands/get-field-titles)  
[SET TABLE TITLES](../commands/set-table-titles)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 803 |
| Thread safe | no |


