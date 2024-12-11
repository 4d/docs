---
id: table
title: Table
slug: /commands/table
displayed_sidebar: docs
---

<!--REF #_command_.Table.Syntax-->**Table** ( numTable | unPtr ) : any<!-- END REF-->
<!--REF #_command_.Table.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| numTable &#124; unPtr | Entier long, Pointeur | &#8594;  | Numéro de table ou Pointeur de table ou Pointeur de champ |
| Résultat | Integer, Pointer | &#8592; | Pointeur de table si un Numéro de table est passé, Numéro de table si un Pointeur de table est passé, Numéro de table si un Pointeur de champ est passé |

<!-- END REF-->

#### Description 

<!--REF #_command_.Table.Summary-->**Table** a trois syntaxes différentes.<!-- END REF-->retourne un pointeur sur la table.
* Si vous passez un pointeur de table dans *unPtr*, **Table** retourne le numéro de la table.
* Si vous passez un pointeur de champ dans *unPtr*, **Table** retourne le numéro de table du champ.

#### Exemple 1 

Dans cet exemple, la variable *ptrTable* reçoit un pointeur sur la table n°3 :

```4d
 ptrTable:=Table(3)
```

#### Exemple 2 

Si vous passez *ptrTable* à la fonction Table, elle retourne 3\. Par exemple, dans la ligne suivante, la variable *numTable* prend la valeur 3 : 

```4d
 numTable:=Table(ptrTable)
```

#### Exemple 3 

Dans l'exemple suivant, la variable *numTable* est égale au numéro de la table \[Table3\] :

```4d
 numTable:=Table(->[Table3])
```

#### Exemple 4 

Dans l'exemple suivant, la variable *numTable* est égale au numéro de la table à laquelle appartient le champ \[Table3\]Champ1 :

```4d
 numTable:=Table(->[Table3]Champ1)
```

#### Voir aussi 

[Field](field.md)  
[Last table number](last-table-number.md)  
[Table name](table-name.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 252 |
| Thread safe | &check; |
| Interdite sur le serveur ||


