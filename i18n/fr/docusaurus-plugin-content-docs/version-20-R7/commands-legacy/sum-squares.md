---
id: sum-squares
title: Sum squares
slug: /commands/sum-squares
displayed_sidebar: docs
---

<!--REF #_command_.Sum squares.Syntax-->**Sum squares** ( *séries* ) : Real<!-- END REF-->
<!--REF #_command_.Sum squares.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| séries | Field, Array | &#8594;  | Valeurs dont vous voulez obtenir la somme des carrés |
| Résultat | Real | &#8592; | Somme des carrés de séries |

<!-- END REF-->

#### Description 

<!--REF #_command_.Sum squares.Summary-->**Sum squares** retourne la somme des carrés de *séries*.<!-- END REF--> Si *séries* est un champ indexé, l'index est utilisé pour le calcul. 

Vous pouvez passer dans *séries* un tableau (à une ou deux dimensions). Dans ce cas, le tableau doit être de type Entier, Entier long ou Réel.

#### Exemple 1 

L'exemple suivant est la méthode objet d'une variable appelée Carrés. La méthode assigne la somme des carrés d'une série de valeurs à Carrés. La méthode est imprimée dans la dernière rupture de l'état :

```4d
 Carrés:=Sum squares([Table1]SérieValeurs)
```

La méthode suivante est appelée pour imprimer les enregistrements de la sélection et activer la phase de rupture :

```4d
 ALL RECORDS([Table1])
 ORDER BY([Table1];[Table1]SérieValeurs;>)
 BREAK LEVEL(1)
 ACCUMULATE([Table1]SérieValeurs)
 OUTPUT FORM([Table1];"FormImpression")
 PRINT SELECTION([Table1])
```

**Note :** La valeur du paramètre de la commande [BREAK LEVEL](break-level.md) doit être égale au nombre de ruptures que contient l'état. Pour plus d'informations sur les ruptures, reportez-vous aux commandes du thème *Impressions*.

#### Exemple 2 

Cet exemple vous permet d’obtenir la somme des carrés des valeurs placées dans un tableau : 

```4d
 ARRAY REAL($TabNote;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Note;$TabNote)
 vSommeCarres:=Sum squares($TabNote)
```

#### Voir aussi 

[Average](average.md)  
[Std deviation](std-deviation.md)  
[Sum](sum.md)  
[Variance](variance.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 28 |
| Thread safe | &check; |


