---
id: get-table-properties
title: GET TABLE PROPERTIES
slug: /commands/get-table-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE PROPERTIES.Syntax-->**GET TABLE PROPERTIES** ( *ptrTable* : Pointer ; *invisible* : Boolean {; *trigSvgdeNouv* : Boolean {; *trigSvgdeEnr* : Boolean {; *trigSupprEnr* : Boolean {; *trigChargEnr* : Boolean}}}} )<br/>**GET TABLE PROPERTIES** ( *numTable* : Integer ; *invisible* : Boolean {; *trigSvgdeNouv* : Boolean {; *trigSvgdeEnr* : Boolean {; *trigSupprEnr* : Boolean {; *trigChargEnr* : Boolean}}}} )<!-- END REF-->
<!--REF #_command_.GET TABLE PROPERTIES.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| ptrTable &#124; numTable | Pointeur, Entier long | &#8594;  | Pointeur de table ou Numéro de table |
| invisible | Boolean | &#8592; | Vrai = Invisible, Faux = Visible |
| trigSvgdeNouv | Boolean | &#8592; | Vrai = Trigger “Sur sauvegarde nouvel enreg” activé, sinon Faux |
| trigSvgdeEnr | Boolean | &#8592; | Vrai = Trigger “Sur sauvegarde enregistrement” activé, sinon Faux |
| trigSupprEnr | Boolean | &#8592; | Vrai = Trigger “Sur suppression enreg” activé, sinon Faux |
| trigChargEnr | Boolean | &#8592; | *** Ne pas utiliser (obsolète) *** |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL Release 2|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.GET TABLE PROPERTIES.Summary-->La commande **GET TABLE PROPERTIES** retourne les propriétés de la table désignée par *ptrTable* ou *numTable*.<!-- END REF--> Vous pouvez passer dans le premier paramètre soit un pointeur vers la table, soit le numéro de la table. 

Après l’exécution de la commande :

* Le paramètre *invisible* retourne Vrai si la table dispose de l’attribut “Invisible”, Faux sinon. L’attribut “Invisible” permet de masquer la table dans les éditeurs standard de 4D (étiquettes, graphes...).
* Le paramètre *trigSvgdeNouv* retourne Vrai si le trigger “Sur sauvegarde nouvel enreg” a été activé pour la table, Faux sinon.
* Le paramètre *trigSvgdeEnr* retourne Vrai si le trigger “Sur sauvegarde enregistrement” a été activé pour la table, Faux sinon.
* Le paramètre *trigSupprEnr* retourne Vrai si le trigger “Sur suppression enreg” a été activé pour la table, Faux sinon.

## Voir aussi 

[GET FIELD ENTRY PROPERTIES](../commands/get-field-entry-properties)  
[GET FIELD PROPERTIES](../commands/get-field-properties)  
[GET RELATION PROPERTIES](../commands/get-relation-properties)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 687 |
| Thread safe | yes |


