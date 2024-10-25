---
id: get-table-titles
title: GET TABLE TITLES
slug: /commands/get-table-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE TITLES.Syntax-->**GET TABLE TITLES** ( *titresTables* ; *numTables* )<!-- END REF-->
<!--REF #_command_.GET TABLE TITLES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| titresTables | Text array | &#8592; | Noms courants des tables |
| numTables | Integer array | &#8592; | Numéros des tables |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET TABLE TITLES.Summary-->La commande **GET TABLE TITLES** remplit les tableaux *titresTables* et *numTables* avec les noms et les numéros des tables de la base définis dans la fenêtre de Structure ou via la commande [SET TABLE TITLES](set-table-titles.md).<!-- END REF--> Le contenu des deux tableaux est synchronisé.

Si la commande [SET TABLE TITLES](set-table-titles.md) a été appelée lors de la session, **GET TABLE TITLES** retourne uniquement les noms “modifiés” et les numéros des tables ayant été définies via cette commande.   
Sinon, **GET TABLE TITLES** retourne le nom défini dans la fenêtre de Structure de toutes les tables de la base.   
Dans les deux cas, la commande ne retourne pas les tables déclarées invisibles. 

#### Voir aussi 

[GET FIELD TITLES](get-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  