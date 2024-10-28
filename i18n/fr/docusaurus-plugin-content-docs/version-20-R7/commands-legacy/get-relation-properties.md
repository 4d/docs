---
id: get-relation-properties
title: GET RELATION PROPERTIES
slug: /commands/get-relation-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET RELATION PROPERTIES.Syntax-->**GET RELATION PROPERTIES** ( ptrChp | numTable {; *numChamp*}; *tableDest* ; *champDest* {; *discriminant* {; *allerAuto* {; *retourAuto*}}} )<!-- END REF-->
<!--REF #_command_.GET RELATION PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| ptrChp &#124; numTable | Pointeur, Entier long | &#8594;  | Pointeur de champ ou Numéro de table |
| numChamp | Integer | &#8594;  | Numéro de champ si un numéro de table est passé en premier paramètre |
| tableDest | Integer | &#8592; | Numéro de la table cible ou 0 si aucun lien ne part du champ |
| champDest | Integer | &#8592; | Numéro du champ cible ou 0 si aucun lien ne part du champ |
| discriminant | Integer | &#8592; | Numéro du champ discriminant ou 0 si aucun champ discriminant |
| allerAuto | Boolean | &#8592; | Vrai = Lien aller automatique, Faux = Lien aller manuel |
| retourAuto | Boolean | &#8592; | Vrai = Lien retour automatique, Faux = Lien retour manuel |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET RELATION PROPERTIES.Summary-->La commande **GET RELATION PROPERTIES** retourne les propriétés du lien, s’il y en a un, qui part du champ source, désigné par *numTable* et *numChamp* ou par *ptrChp*.<!-- END REF-->  
Vous pouvez passer :

* soit des numéros de table et de champ dans *numTable* et *numChamp*,
* soit un pointeur vers le champ dans *ptrChp*.

Après l’exécution de la commande :

* Les paramètres *tableDest* et *champDest* contiennent respectivement le numéro de la table et du champ vers lesquels pointe le lien partant du champ source. Si aucun lien ne part du champ, ces paramètres contiennent 0\.
* Le paramètre *discriminant* contient le numéro du champ discriminant (appartenant à la table cible) défini pour le lien. Si aucun champ discriminant n’a été défini pour le lien ou si aucun lien ne part du champ source, ce paramètre contient 0.
* Les paramètres *allerAuto* et *retourAuto* retournent Vrai si respectivement les options “Lien aller auto” et “Lien retour auto” ont été cochées pour le lien, Faux sinon.

**Note :** Les deux derniers paramètres retournent également Vrai si aucun lien ne part du champ source (dans ce cas, leur valeur est non significative). La valeur des paramètres *tableDest* et *champDest* vous permet de vous assurer de l’existence d’un lien.

#### Voir aussi 

[GET FIELD ENTRY PROPERTIES](get-field-entry-properties.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[GET TABLE PROPERTIES](get-table-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  
[SET FIELD RELATION](set-field-relation.md)  