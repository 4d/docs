---
id: records-in-set
title: Records in set
slug: /commands/records-in-set
displayed_sidebar: docs
---

<!--REF #_command_.Records in set.Syntax-->**Records in set** ( *ensemble* : Text ) : Integer<!-- END REF-->
<!--REF #_command_.Records in set.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| ensemble | Text | &#8594;  | Nom de l'ensemble à tester |
| Résultat | Integer | &#8592; | Nombre d'enregistrements dans l'ensemble |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Records in set.Summary-->**Records in set** retourne le nombre d'enregistrements présents dans *ensemble*.<!-- END REF--> Si *ensemble* n'existe pas ou s'il n'y a pas d'enregistrements dans *ensemble*, **Records in set** retourne 0.

## Exemple 

L'exemple suivant affiche une boîte de dialogue d'alerte qui indique le pourcentage des clients qui sont considérés comme les meillleurs :

```4d
  // Calculer d'abord le pourcentage
 $Pourcent :=(Records in set("Meilleurs")/Records in table([Clients]))*100
  // Afficher une alerte avec le pourcentage
 ALERT(String($Pourcent;"##0%")+" de nos clients sont nos meilleurs clients.")
```

## Voir aussi 

[Records in selection](../commands/records-in-selection)  
[Records in table](../commands/records-in-table)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 195 |
| Thread safe | yes |


