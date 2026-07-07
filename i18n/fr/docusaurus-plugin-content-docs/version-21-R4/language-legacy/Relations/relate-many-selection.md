---
id: relate-many-selection
title: RELATE MANY SELECTION
slug: /commands/relate-many-selection
displayed_sidebar: docs
---

<!--REF #_command_.RELATE MANY SELECTION.Syntax-->**RELATE MANY SELECTION** ( *leChamp* : Field )<!-- END REF-->
<!--REF #_command_.RELATE MANY SELECTION.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ de la table N (d'où part le lien) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|6|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.RELATE MANY SELECTION.Summary-->La commande **RELATE MANY SELECTION** crée une sélection d'enregistrements dans la table N basée sur la sélection courante de la table 1, et charge le premier enregistrement de la table N comme enregistrement courant.<!-- END REF-->**RELATE MANY SELECTION** modifie l'enregistrement courant de la table 1.

## Exemple 

Prenons l'exemple d'une base de données comportant une table *\[Factures\]* dont le champ *\[Factures\]IDClient* est lié au champ *\[Clients\]NoID* de la table *\[Clients\]*. L'exemple suivant sélectionne toutes les factures adressées aux clients dont le crédit est supérieur ou égal à 5710 Euros :

```4d
  // Sélectionner les clients
 QUERY([Clients];[Clients]Credit>=5710)
  //Trouver toutes les factures liées à chacun de ces clients
 RELATE MANY SELECTION([Factures]IDClient)
```

## Voir aussi 

[QUERY](../commands/query)  
[RELATE ONE](../commands/relate-one)  
[RELATE ONE SELECTION](../commands/relate-one-selection)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 340 |
| Thread safe | yes |
| Change l'enregistrement courant ||
| Change la sélection courante ||


