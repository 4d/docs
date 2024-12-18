---
id: field
title: Field
slug: /commands/field
displayed_sidebar: docs
---

<!--REF #_command_.Field.Syntax-->**Field** ( *numTable* ; *numChamp* ) -> ptrChamp <br/>
**Field** ( *ptrChamp* ) -> numChamp<!-- END REF-->
<!--REF #_command_.Field.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| numTable | Integer | &#8594;  | Numéro de table |
| numChamp | Integer | &#8594;  | Numéro de champ |
| ptrChamp | Pointer | &#8592; | Pointeur de champ |
| Field ( ptrChamp ) -> numChamp |
| Paramètre | Type | Description |
| ptrChamp | Pointer | &#8594;  | Pointeur de champ |
| numChamp | Integer | &#8592; | Numéro de champ |

<!-- END REF-->

#### Description 

<!--REF #_command_.Field.Summary-->La commande **Field** a deux syntaxes :

* Si vous passez un numéro de table dans *numTable* et un numéro de champ dans *numChamp*, **Field** retourne un pointeur vers le champ.<!-- END REF-->retourne le numéro du champ.

#### Exemple 1 

L'exemple suivant assigne la variable ChampPtr à un pointeur vers le deuxième champ de la troisième table : 

```4d
 ChampPtr:=Field(3;2)
```

#### Exemple 2 

Si vous passez *champPtr* (un pointeur vers le 2e champ de la table) à **Field**, la valeur 2 est retournée. La ligne suivante assigne la valeur 2 à *champNum* :

```4d
 champNum:=Field(champPtr)
```

#### Exemple 3 

Dans l'exemple, la variable *champNum* est égale au numéro de champ de \[Table3\]Champ2 :

```4d
 champNum:=Field(->[Table3]Champ2)
```

#### Voir aussi 

[Field name](field-name.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[Last field number](last-field-number.md)  
[Table](table.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 253 |
| Thread safe | &check; |


