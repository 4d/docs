---
id: all-records
title: ALL RECORDS
slug: /commands/all-records
displayed_sidebar: docs
---

<!--REF #_command_.ALL RECORDS.Syntax-->**ALL RECORDS** ({ *laTable* : Table })<!-- END REF-->
<!--REF #_command_.ALL RECORDS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle vous voulez sélectionner tous les enregistrements ou Table par défaut si ce paramètre est omis |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.ALL RECORDS.Summary-->La commande **ALL RECORDS** sélectionne tous les enregistrements de *laTable* pour le process courant.<!-- END REF-->fait du premier enregistrement de la sélection l'enregistrement courant et le charge en mémoire. **ALL RECORDS** retourne les enregistrements dans l'ordre par défaut, qui est l'ordre dans lequel ils ont été stockés sur le disque.

## Exemple 

L'exemple suivant affiche tous les enregistrements de la table \[Personnes\] :

```4d
 ALL RECORDS([Personnes]) // Sélection de tous les enregistrements de la table
 DISPLAY SELECTION([Personnes]) //Affichage des enregistrements dans le formulaire sortie
```

## Voir aussi 

[DISPLAY SELECTION](../commands/display-selection)  
[MODIFY SELECTION](../commands/modify-selection)  
[ORDER BY](../commands/order-by)  
[QUERY](../commands/query)  
[Records in selection](../commands/records-in-selection)  
[Records in table](../commands/records-in-table)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 47 |
| Thread safe | yes |
| Change l'enregistrement courant ||
| Change la sélection courante ||


