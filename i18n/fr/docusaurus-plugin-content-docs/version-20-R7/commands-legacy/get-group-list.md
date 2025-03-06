---
id: get-group-list
title: GET GROUP LIST
slug: /commands/get-group-list
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP LIST.Syntax-->**GET GROUP LIST** ( *nomsGroupes* ; *numérosGroupes* )<!-- END REF-->
<!--REF #_command_.GET GROUP LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomsGroupes | Text array | &#8592; | Noms des groupes tels qu'ils apparaissent dans l'éditeur de Mots de passe |
| numérosGroupes | Integer array | &#8592; | Numéros de référence uniques pour chaque groupe |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET GROUP LIST.Summary-->**GET GROUP LIST** remplit les tableaux *nomsGroupes* et *numérosGroupes* avec les noms et les numéros de référence uniques des groupes tels qu'ils apparaissent dans l'éditeur de Mots de passe.<!-- END REF-->

Le tableau *numérosGroupes*, synchronisé avec le tableau *nomsGroupes*, est rempli avec les numéros de référence uniques des groupes. 

* Dans les bases projets, ces numéros commencent à 15001, sont assignés dynamiquement au démarrage et sont maintenus au cours de la session.
* Dans les bases binaires, ces numéros sont stockés et correspondent à une plage spécifique, en fonction du créateur du groupe. Pour plus d'informations, veuillez consulter le paragraphe *Plages de références des groupes et des utilisateurs*.

#### Gestion des erreurs 

Si vous n'avez pas les privilèges d'accès pour appeler la commande **GET GROUP LIST** ou si le système de Mots de passe est déjà ouvert par un autre process, une erreur de privilège d'accès est générée. Vous pouvez intercepter cette erreur avec une méthode de gestion d'erreurs installée par [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[GET GROUP PROPERTIES](get-group-properties.md)  
[GET USER LIST](get-user-list.md)  
[Set group properties](set-group-properties.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 610 |
| Thread safe | &cross; |
| Modifie les variables | error |


