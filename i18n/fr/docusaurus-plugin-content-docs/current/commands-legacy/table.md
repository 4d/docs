---
id: table
title: Table
slug: /commands/table
displayed_sidebar: docs
---

<!--REF #_command_.Table.Syntax-->**Table** ( *tableNum* : Integer ) : Pointer<br/>**Table** ( *tablePtr* : Pointer ) : Integer<br/>**Table** ( *fieldPtr* : Pointer ) : Integer<!-- END REF-->
<!--REF #_command_.Table.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableNum | Integer | &#8594;  | Numéro de table |
| tablePtr | Pointer | &#8594;  | Pointeur de table |
| fieldPtr | Pointer | &#8594;  | Pointeur de champ |
| Résultat | Pointer, Integer | &#8592; | Pointeur de table si un numéro de table est passé<br/>Numéro de table si un pointeur de table ou un pointeur de champ est passé|

<!-- END REF-->

## Description 

**Table** a trois syntaxes différentes :

<!--REF #_command_.Table.Summary-->* Si vous passez un numéro de table dans *tableNum*, **Table** retourne un pointeur sur la table.
* Si vous passez un pointeur de table dans *tablePtr*, **Table** retourne le numéro de la table.
* Si vous passez un pointeur de champ dans *fieldPtr*, **Table** retourne le numéro de table du champ.<!-- END REF-->

## Exemple 1 

Dans cet exemple, la variable *ptrTable* reçoit un pointeur sur la table n°3 :

```4d
 ptrTable:=Table(3)
```

## Exemple 2 

Si vous passez *ptrTable* à la fonction Table, elle retourne 3\. Par exemple, dans la ligne suivante, la variable *numTable* prend la valeur 3 : 

```4d
 numTable:=Table(ptrTable)
```

## Exemple 3 

Dans l'exemple suivant, la variable *numTable* est égale au numéro de la table \[Table3\] :

```4d
 numTable:=Table(->[Table3])
```

## Exemple 4 

Dans l'exemple suivant, la variable *numTable* est égale au numéro de la table à laquelle appartient le champ \[Table3\]Champ1 :

```4d
 numTable:=Table(->[Table3]Champ1)
```

## Voir aussi 

[Field](field.md)  
[Last table number](last-table-number.md)  
[Table name](table-name.md)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 252 |
| Thread safe | yes |


