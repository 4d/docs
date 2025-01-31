---
id: get-field-entry-properties
title: GET FIELD ENTRY PROPERTIES
slug: /commands/get-field-entry-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Syntax-->**GET FIELD ENTRY PROPERTIES** ( ptrChp | numTable {; *numChamp*}; énumération ; *obligatoire* ; *nonSaisissable* ; *nonModifiable* )<!-- END REF-->
<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| ptrChp &#124; numTable | Pointeur, Entier long | &#8594;  | Pointeur de champ ou Numéro de table |
| numChamp | Integer | &#8594;  | Numéro de champ si un numéro de table est passé en premier paramètre |
| énumération | Text | &#8592; | Nom de l’énumération associée ou Chaîne vide |
| obligatoire | Boolean | &#8592; | Vrai = Obligatoire, Faux = Facultatif |
| nonSaisissable | Boolean | &#8592; | Vrai = Non saisissable, Faux = Saisissable |
| nonModifiable | Boolean | &#8592; | Vrai = Non modifiable, Faux = Modifiable |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Summary-->La commande **GET FIELD ENTRY PROPERTIES** retourne les propriétés relatives à la saisie de données du champ désigné par *numTable* et *numChamp* ou par *ptrChp*.<!-- END REF-->   
Vous pouvez passer :

* soit des numéros de table et de champ dans *numTable* et *numChamp*,
* soit un pointeur vers le champ dans *ptrChp*.

Les propriétés retournées par cette commande sont celles qui ont été définies au niveau de la fenêtre de structure de la base. Des propriétés similaires peuvent également être définies au niveau des formulaires. 

Après l’exécution de la commande :

* Le paramètre *énumération* contient le nom de l’énumération associée au champ, s’il y en a une. Il est possible d’associer un énumération aux champs de type Alpha, Texte, Numérique, Entier, Entier long, Date, Heure et Booléen.  
Si aucune énumération n’est associée au champ, ou si son type n’admet pas l’association d’énumération, une chaîne vide ("") est retournée.
* Le paramètre *obligatoire* retourne Vrai si le champ dispose de l’attribut “Obligatoire”, Faux sinon. L’attribut “Obligatoire” peut être associé aux champs de tous types, hormis BLOB.
* Le paramètre *nonSaisissable* retourne Vrai si le champ dispose de l’attribut “Non saisissable”, Faux sinon. Un champ non saisissable ne peut qu’être lu, il n’accepte aucune saisie de données. L’attribut “Non saisissable” peut être associé aux champs de tous types, hormis BLOB.
* Le paramètre *nonModifiable* retourne Vrai si le champ dispose de l’attribut “Non modifiable”, Faux sinon. Un champ non modifiable n’accepte qu’une seule saisie, et ne peut plus être modifié par la suite. L’attribut “Non modifiable” peut être associé aux champs de tous types, hormis BLOB.

#### Voir aussi 

[GET FIELD PROPERTIES](get-field-properties.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[GET TABLE PROPERTIES](get-table-properties.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 685 |
| Thread safe | &cross; |


