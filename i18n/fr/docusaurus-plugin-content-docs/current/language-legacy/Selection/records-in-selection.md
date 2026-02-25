---
id: records-in-selection
title: Records in selection
slug: /commands/records-in-selection
displayed_sidebar: docs
---

<!--REF #_command_.Records in selection.Syntax-->**Records in selection** {( *laTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Records in selection.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dont vous souhaitez connaître le nombre d'enregistrements de la sélection courante ou Table par défaut si ce paramètre est omis |
| Résultat | Integer | &#8592; | Nombre d'enregistrements dans la sélection courante de table |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Records in selection.Summary-->**Records in selection** retourne le nombre d'enregistrements constituant la sélection courante de *laTable* (par opposition, [Records in table](../commands/records-in-table) retourne le nombre total d'enregistrements d'une table).<!-- END REF-->

## Exemple 

L'exemple suivant propose une technique de boucle couramment utilisée pour se déplacer parmi les enregistrements de la sélection courante. La même opération peut être réalisée à l'aide de la commande [APPLY TO SELECTION](../commands/apply-to-selection) :

```4d
 FIRST RECORD([Personnes]) // Départ sur le premier enregistrement de la sélection
 For($VElEnreg;1;Records in selection([Personnes])) // Boucle une fois par enregistrement
    Faire quelque chose // Réaliser une opération avec l'enregistrement
    NEXT RECORD([Personnes]) // Passage à l'enregistrement suivant
 End for
```

## Voir aussi 

[Records in table](../commands/records-in-table)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 76 |
| Thread safe | yes |


