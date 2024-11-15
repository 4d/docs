---
id: std-deviation
title: Std deviation
slug: /commands/std-deviation
displayed_sidebar: docs
---

<!--REF #_command_.Std deviation.Syntax-->**Std deviation** ( *séries* ) : Real<!-- END REF-->
<!--REF #_command_.Std deviation.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| séries | Field, Array | &#8594;  | Valeurs dont vous voulez obtenir l'écart type |
| Résultat | Real | &#8592; | Ecart type de séries |

<!-- END REF-->

#### Description 

<!--REF #_command_.Std deviation.Summary-->**Std deviation** retourne l'écart type (c.-à-d. la racine carrée de la variance) de *séries*.<!-- END REF--> 

Si *séries* est un champ indexé, l'index sera utilisé pour le calcul. 

Vous pouvez passer dans *séries* un tableau (à une ou deux dimensions). Dans ce cas, le tableau doit être de type Entier, Entier long ou Réel.

#### Exemple 1 

L'exemple suivant est la méthode objet d'une variable appelée EcartT. La méthode assigne l'écart type d'une série à EcartT :

```4d
 EcartT:=Std deviation([Table1]SérieValeurs)
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

Cet exemple vous permet d’obtenir l’écart type d’une série de valeurs placées dans un tableau : 

```4d
 ARRAY REAL($TabNote;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Note;$TabNote)
 vEcartT:=Std deviation($TabNote)
```

#### Voir aussi 

[Average](average.md)  
[Sum](sum.md)  
[Sum squares](sum-squares.md)  
[Variance](variance.md)  