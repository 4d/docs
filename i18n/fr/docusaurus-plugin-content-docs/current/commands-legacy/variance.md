---
id: variance
title: Variance
slug: /commands/variance
displayed_sidebar: docs
---

<!--REF #_command_.Variance.Syntax-->**Variance** ( *séries* ) : Real<!-- END REF-->
<!--REF #_command_.Variance.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| séries | Field, Array | &#8594;  | Valeurs dont vous voulez obtenir la variance |
| Résultat | Real | &#8592; | Variance de séries |

<!-- END REF-->

#### Description 

<!--REF #_command_.Variance.Summary-->**Variance** retourne la variance de *séries*.<!-- END REF--> Si *séries* est un champ indexé, l'index est utilisé pour le calcul.

Vous pouvez passer dans *séries* un tableau (à une ou deux dimensions). Dans ce cas, le tableau doit être de type Entier, Entier long ou Réel.

La variance d'un ensemble de valeurs est la moyenne des carrés des écarts par rapport à la moyenne. C'est une valeur de dispersion autour de la moyenne. 4D utilise la formule de variance suivante : 

**Variance(x) = Somme (x-m)\*(x-m)/(n-1)**  
*m = Moyenne*  
*n = Nombre de valeurs*

Si les valeurs considérées ne constituent pas un échantillon, multipliez la valeur retournée par **Variance** par (n-1)/n.

#### Exemple 1 

L'exemple suivant est la méthode objet d'une variable appelée Var. La méthode assigne la variance de la série à Var:

```4d
 Var:=Variance([Etudiants]Notes)
```

La méthode suivante est appelée pour imprimer les enregistrements de la sélection et activer la phase de rupture : 

```4d
 ALL RECORDS([Etudiants])
 ORDER BY([Etudiants];[Etudiants]Classe;>)
 BREAK LEVEL(1)
 ACCUMULATE([Etudiants]Notes)
 OUTPUT FORM([Etudiants];"FormImpression")
 PRINT SELECTION([Etudiants])
```

**Note :** La valeur du paramètre de la commande [BREAK LEVEL](break-level.md) doit être égale au nombre de ruptures que contient l'état. Pour plus d'informations sur les ruptures, reportez-vous aux commandes du thème *Impressions*.

#### Exemple 2 

Cet exemple vous permet d’obtenir la variance des valeurs placées dans un tableau : 

```4d
 ARRAY REAL($TabNote;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Note;$TabNote)
 vVariance:=Variance($TabNote)
```

#### Voir aussi 

[Average](average.md)  
[Std deviation](std-deviation.md)  
[Sum](sum.md)  
[Sum squares](sum-squares.md)  