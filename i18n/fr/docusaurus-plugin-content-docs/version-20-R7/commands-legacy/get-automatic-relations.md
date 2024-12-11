---
id: get-automatic-relations
title: GET AUTOMATIC RELATIONS
slug: /commands/get-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.GET AUTOMATIC RELATIONS.Syntax-->**GET AUTOMATIC RELATIONS** ( *aller* ; *retour* )<!-- END REF-->
<!--REF #_command_.GET AUTOMATIC RELATIONS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| aller | Boolean | &#8592; | Statut de tous les liens de N vers 1 |
| retour | Boolean | &#8592; | Statut de tous les liens de 1 vers N |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET AUTOMATIC RELATIONS.Summary-->La commande **GET AUTOMATIC RELATIONS** permet de savoir si le statut automatique/manuel de tous les liens manuels N vers 1 et 1 vers N de la base a été modifié dans le process courant.<!-- END REF-->: ce paramètre retourne Vrai si un appel antérieur de la commande [SET AUTOMATIC RELATIONS](set-automatic-relations.md) a rendu automatiques tous les liens manuels N vers 1 — par exemple [SET AUTOMATIC RELATIONS](set-automatic-relations.md)(Vrai;Faux).  
Ce paramètre retourne Faux si la commande [SET AUTOMATIC RELATIONS](set-automatic-relations.md) n’a pas été appelée ou si sa précédente exécution n’a pas modifié les liens manuels N vers 1 — par exemple [SET AUTOMATIC RELATIONS](set-automatic-relations.md)(Faux;Faux).
* *retour* : ce paramètre retourne Vrai si l’appel précédent de la commande [SET AUTOMATIC RELATIONS](set-automatic-relations.md) a rendu automatiques tous les liens manuels 1 vers N — par exemple [SET AUTOMATIC RELATIONS](set-automatic-relations.md)(Vrai;Vrai).  
Ce paramètre retourne Faux si la commande [SET AUTOMATIC RELATIONS](set-automatic-relations.md) n’a pas été appelée ou si sa précédente exécution n’a pas modifié les liens manuels 1 vers N — par exemple [SET AUTOMATIC RELATIONS](set-automatic-relations.md)(Vrai;Faux).

#### Exemple 

Reportez-vous à l'exemple de la commande [GET FIELD RELATION](get-field-relation.md). 

#### Voir aussi 

[GET FIELD RELATION](get-field-relation.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 899 |
| Thread safe | &check; |
| Interdite sur le serveur ||


