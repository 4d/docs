---
id: field-name
title: Field name
slug: /commands/field-name
displayed_sidebar: docs
---

<!--REF #_command_.Field name.Syntax-->**Field name** ( ptrChamp | numTable {; *numChamp*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.Field name.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| ptrChamp &#124; numTable | Pointeur, Entier long | &#x1F852; | Pointeur vers un champ ou Numéro de table |
| numChamp | Integer | &#x1F852; | Numéro de champ si un numéro de table est passé en premier paramètre |
| Résultat | Text | &#x1F850; | Nom du champ |

<!-- END REF-->

#### Description 

<!--REF #_command_.Field name.Summary-->La commande **Field name** retourne le nom du champ dont vous avez passé le pointeur dans *ptrChamp*, ou dont vous avez passé les numéros de table et de champ dans *numTable* et *numChamp*.<!-- END REF-->

#### Exemple 1 

L'exemple suivant assigne au second élément du tableau ChampTableau{1} (ChampTableau étant un tableau à deux dimensions) le nom du second champ de la première table :

```4d
 ChampTableau{1}{2}:=Field name(1;2)
```

#### Exemple 2 

L'exemple suivant assigne au second élément du tableau ChampTableau{1} (ChampTableau étant un tableau à deux dimensions) le nom du champ *\[MaTable\]MonChamp* :

```4d
 ChampTableau{1}{2}:=Field name(->[MaTable]MonChamp)
```

#### Exemple 3 

L'exemple suivant affiche une boîte de dialogue d'alerte. Nous passons à cette méthode un pointeur vers un champ : 

```4d
 ALERT("Le numéro du champ "+Field name($1)+" de la table "+Table name(Table($1))+" doit faire plus de cinq caractères.")
```

#### Voir aussi 

[Field](field.md)  
[Get last field number](get-last-field-number.md)  
[Table name](table-name.md)  