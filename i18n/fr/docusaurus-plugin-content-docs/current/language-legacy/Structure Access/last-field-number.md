---
id: last-field-number
title: Last field number
slug: /commands/last-field-number
displayed_sidebar: docs
---

<!--REF #_command_.Last field number.Syntax-->**Last field number** ( numTable ) : Integer<br/>**Last field number** ( ptrTable ) : Integer<!-- END REF-->
<!--REF #_command_.Last field number.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| numTable &#124; ptrTable | Entier long, Pointeur | &#8594;  | Numéro de table ou Pointeur vers une table |
| Résultat | Integer | &#8592; | Numéro de champ le plus élevé dans la table |
</div>
<!-- END REF-->

#### Description 

<!--REF #_command_.Last field number.Summary-->La commande **Last field number** retourne le numéro de champ le plus élevé parmi les champs de la table dont le numéro ou le pointeur est passé dans le paramètre *numTable* ou *ptrTable*.<!-- END REF-->

Les champs sont numérotés dans l'ordre où ils ont été créés. Si aucun champ n’a été supprimé dans la table, cette commande retourne donc le nombre de champs que contient la table. Dans le cadre de boucles itératives sur les numéros de champs de la table, vous devez utiliser la commande [Is field number valid](../commands/is-field-number-valid) afin de vérifier que le champ n’a pas été supprimé.

#### Exemple 

La méthode projet suivante crée le tableau *taChamps* avec les noms des champs de la table dont le pointeur est reçu en paramètre :

```4d
 $vlTable:=Table($1)
 ARRAY TEXT(taChamps;Last field number($vlTable))
 For($vlChamp;Size of array(taChamps);1;-1)
    If(Is field number valid($vlTable;$vlChamp))
       taChamps{$vlChamp}:=Field name($vlTable;$vlChamp)
    Else
       DELETE FROM ARRAY(taChamps;$vlChamp)
    End if
 End for
```

#### Voir aussi 

[Field name](../commands/field-name)  
[GET FIELD PROPERTIES](../commands/get-field-properties)  
[Last table number](../commands/last-table-number)  
[Is field number valid](../commands/is-field-number-valid)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 255 |
| Thread safe | yes |


