---
id: regenerate-missing-table
title: REGENERATE MISSING TABLE
slug: /commands/regenerate-missing-table
displayed_sidebar: docs
---

<!--REF #_command_.REGENERATE MISSING TABLE.Syntax-->**REGENERATE MISSING TABLE** ( *nomTable* )<!-- END REF-->
<!--REF #_command_.REGENERATE MISSING TABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomTable | Text | &#8594;  | Nom de table manquante à regénérer |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.REGENERATE MISSING TABLE.Summary-->La commande **REGENERATE MISSING TABLE** reconstruit la table manquante dont vous avez passé le nom dans le paramètre *nomTable*.<!-- END REF--> Lorsqu’une table manquante est reconstruite, elle devient visible dans l’éditeur de Structure et ses données sont de nouveau accessibles.

Les tables manquantes sont des tables dont les données sont présentes dans le fichier de données mais qui n’existent pas au niveau de la structure. Vous pouvez identifier les tables manquantes éventuellement présentes dans l’application à l’aide de la commande [GET MISSING TABLE NAMES](get-missing-table-names.md). 

Si la table désignée par le paramètre *nomTable* n’est pas une table manquante de la base, la commande ne fait rien. 

#### Exemple 

Cette méthode regénère toutes les tables manquantes éventuellement présentes dans la base :

```4d
 ARRAY TEXT($tMissingTables;0)
 GET MISSING TABLE NAMES($tMissingTables)
 $SizeArray:=Size of array($tMissingTables)
 If($SizeArray#0)
  // Remplir le tableau avec les noms de toutes les tables de la base
    ARRAY TEXT(tabTables;Lire numero derniere table)
    If(Last table number>0)    //S’il y a bien des tables
       For($vlTables;Size of array(tabTables);1;-1)
          If(Is table number valid($vlTables))
             tabTables{$vlTables}:=Table name($vlTables)
          Else
             DELETE FROM ARRAY(tabTables;$vlTables)
          End if
       End for
    End if
    For($i;1;$SizeArray)
       If(Find in array(tabTables;$tMissingTables{$i})=-1)
          CONFIRM("Regénérer la table"+$tMissingTables{$i}+" ?")
          If(OK=1)
             REGENERATE MISSING TABLE($tMissingTables{$i})
          End if
       Else
          ALERT("Impossible de régénérer la table "+$tMissingTables{$i}+" car il y a déjà une table de ce nom dans la base.")
       End if
    End for
 Else
    ALERT("Pas de tables à regénérer.")
 End if
```

#### Voir aussi 

[GET MISSING TABLE NAMES](get-missing-table-names.md)  