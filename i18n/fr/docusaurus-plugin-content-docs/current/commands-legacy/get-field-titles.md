---
id: get-field-titles
title: GET FIELD TITLES
slug: /commands/get-field-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD TITLES.Syntax-->**GET FIELD TITLES** ( *laTable* ; *titresChamps* ; *numChamps* )<!-- END REF-->
<!--REF #_command_.GET FIELD TITLES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dont vous souhaitez connaître les noms des champs |
| titresChamps | Text array | &#8592; | Noms courants des champs |
| numChamps | Integer array | &#8592; | Numéros des champs |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET FIELD TITLES.Summary-->La commande **GET FIELD TITLES** remplit les tableaux *titresChamps* et *numChamps* avec les noms et les numéros des champs de *laTable* désignée.<!-- END REF--> Le contenu des deux tableaux est synchronisé.

Si la commande [SET FIELD TITLES](set-field-titles.md) a été appelée au cours de la session, **GET FIELD TITLES** retourne uniquement les noms “modifiés” et les numéros des champs ayant été définis via cette commande.  
Sinon, **GET FIELD TITLES** retourne le nom défini dans la fenêtre de Structure de tous les champs de la base.   
Dans les deux cas, la commande ne retourne pas les champs déclarés invisibles. 

#### Voir aussi 

[GET TABLE TITLES](get-table-titles.md)  
[SET FIELD TITLES](set-field-titles.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 804 |
| Thread safe | &cross; |


