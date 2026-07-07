---
id: get-automatic-relations
title: GET AUTOMATIC RELATIONS
slug: /commands/get-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.GET AUTOMATIC RELATIONS.Syntax-->**GET AUTOMATIC RELATIONS** ( *aller* : Boolean ; *retour* : Boolean )<!-- END REF-->
<!--REF #_command_.GET AUTOMATIC RELATIONS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| aller | Boolean | &#8592; | Statut de tous les liens de N vers 1 |
| retour | Boolean | &#8592; | Statut de tous les liens de 1 vers N |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2004|Créé|

</details>
</div>

## Description 

<!--REF #_command_.GET AUTOMATIC RELATIONS.Summary-->La commande **GET AUTOMATIC RELATIONS** permet de savoir si le statut automatique/manuel de tous les liens manuels N vers 1 et 1 vers N de la base a été modifié dans le process courant.<!-- END REF-->: ce paramètre retourne Vrai si un appel antérieur de la commande [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations) a rendu automatiques tous les liens manuels N vers 1 — par exemple [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)(Vrai;Faux).  
Ce paramètre retourne Faux si la commande [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations) n’a pas été appelée ou si sa précédente exécution n’a pas modifié les liens manuels N vers 1 — par exemple [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)(Faux;Faux).
* *retour* : ce paramètre retourne Vrai si l’appel précédent de la commande [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations) a rendu automatiques tous les liens manuels 1 vers N — par exemple [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)(Vrai;Vrai).  
Ce paramètre retourne Faux si la commande [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations) n’a pas été appelée ou si sa précédente exécution n’a pas modifié les liens manuels 1 vers N — par exemple [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)(Vrai;Faux).

## Exemple 

Reportez-vous à l'exemple de la commande [GET FIELD RELATION](../commands/get-field-relation). 

## Voir aussi 

[GET FIELD RELATION](../commands/get-field-relation)  
[GET RELATION PROPERTIES](../commands/get-relation-properties)  
[SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 899 |
| Thread safe | yes |


