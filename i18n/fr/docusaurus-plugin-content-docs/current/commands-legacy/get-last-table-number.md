---
id: get-last-table-number
title: Get last table number
slug: /commands/get-last-table-number
displayed_sidebar: docs
---

<!--REF #_command_.Get last table number.Syntax-->**Get last table number**  -> Résultat<!-- END REF-->
<!--REF #_command_.Get last table number.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#x1F850; | Numéro de table le plus élevé dans la base |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get last table number.Summary-->**Get last table number** retourne le numéro de table le plus élevé parmi les tables de la base.<!-- END REF-->   
Les tables sont numérotées dans l’ordre dans lequel elles ont été créées. Si aucune table n’a été supprimée dans la base, cette commande retourne donc le nombre de tables présentes dans la base. Dans le cadre de boucles itératives sur les numéros de tables de la base, vous devez utiliser la commande [Is table number valid](is-table-number-valid.md) afin de vérifier que la table n’a pas été supprimée.

#### Exemple 

L’exemple suivant initialise les éléments du tableau tabTables. Ce tableau peut être utilisé comme liste déroulante (ou onglets, zone de défilement, etc.) pour afficher dans un formulaire la liste des tables de la base :

```4d
 ARRAY TEXT(tabTables;Lire numero derniere table)
 If(Get last table number>0) //si la base contient bien des tables
    For($vlTables;Size of array(tabTables);1;-1)
       If(Is table number valid($vlTables))
          tabTables{$vlTables}:=Table name($vlTables)
       Else
          DELETE FROM ARRAY(tabTables;$vlTables)
       End if
    End for
 End if
```

#### Voir aussi 

[Get last field number](get-last-field-number.md)  
[Is table number valid](is-table-number-valid.md)  
[Table name](table-name.md)  