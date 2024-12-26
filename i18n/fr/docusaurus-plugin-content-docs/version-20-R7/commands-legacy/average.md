---
id: average
title: Average
slug: /commands/average
displayed_sidebar: docs
---

<!--REF #_command_.Average.Syntax-->**Average** ( *séries* {; *cheminAttribut*} ) : Real<!-- END REF-->
<!--REF #_command_.Average.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| séries | Field, Array | &#8594;  | Valeurs dont vous voulez calculer la moyenne |
| cheminAttribut | Text | &#8594;  | Chemin d'attribut duquel calculer la moyenne |
| Résultat | Real | &#8592; | Moyenne arithmétique de séries |

<!-- END REF-->

#### Description 

<!--REF #_command_.Average.Summary-->**Average** retourne la moyenne arithmétique de *séries*.<!-- END REF--> Si *séries* est un champ indexé, l'index est utilisé pour le calcul. 

Vous pouvez passer dans *séries* un tableau (à une ou deux dimensions). Dans ce cas, le tableau doit être de type Entier, Entier long ou Réel.

La commande accepte un paramètre optionnel de type texte, *cheminAttribut*, que vous pouvez utiliser si *séries* est un champ de type Objet. Il vous permet de définir le chemin de l'attribut dont le contenu doit être utilisé pour le calcul de la moyenne. Utilisez la notation à points standard pour définir le chemin dans l'objet jusqu'à l'attribut, par exemple "Clients.enfants.age". Attention, gardez à l'esprit que les noms d'attributs d'objets tiennent compte de la casse des caractères.  
Seules les valeurs numériques des attributs sont utilisées pour le calcul. Si l'attribut contient des valeurs non numériques, elles sont ignorées. 

Si la commande est correctement exécutée, la variable système OK prend la valeur 1\. Si elle est interrompue (par exemple si l'utilisateur clique sur le bouton **Arrêt** dans le thermomètre de progression), la variable OK prend la valeur 0.

#### Exemple 1 

Dans l'exemple suivant, une valeur est assignée à une variable se trouvant dans la zone de rupture R0 d'un formulaire sortie. La ligne de code ci-dessous constitue la méthode objet de la variable. Elle n'est exécutée qu'à l'impression du niveau de rupture 0 :

```4d
 vMoyenne:=Average([Employés]Salaire)
```

La méthode suivante est appelée pour imprimer les enregistrements de la sélection courante et activer la phase de rupture :

```4d
 ALL RECORDS([Employés])
 ORDER BY([Employés];[Employés]Nom;>)
 BREAK LEVEL(1)
 ACCUMULATE([Employés]Salaire)
 FORM SET OUTPUT([Employés];"FormImpression")
 PRINT SELECTION([Employés])
```

**Note :** La valeur du paramètre de la commande [BREAK LEVEL](break-level.md) doit être égale au nombre de ruptures que contient l'état. Pour plus d'informations sur les ruptures, reportez-vous aux commandes du thème *Impressions*.

#### Exemple 2 

Cet exemple vous permet d’obtenir la moyenne des 15 premières notes de la sélection : 

```4d
 ARRAY REAL($TabNote;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 ORDER BY([Exams];[Exams]Exam_Note;<)
 SELECTION TO ARRAY([Exams]Exam_Note;$TabNote)
 ARRAY REAL($TabNote;15)
 vAverage:=Average($TabNote)
```

#### Exemple 3 

Votre table \[Customer\] comporte un champ objet "full\_Data" contenant les données suivantes :

![](../assets/en/commands/pict2898119.en.png)

Vous pouvez effectuer les calculs suivants :

```4d
 var $vAvg : Real
 ALL RECORDS([Customer])
 $vAvg:=Average([Customer]full_Data;"age")
  //$vAvg vaut 44,46
 
 var $vTot : Integer
 $vTot:=Sum([Customer]full_Data;"Children[].age")
  //$vTot vaut 105
```

#### Voir aussi 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  
[Sum](sum.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 2 |
| Thread safe | &check; |
| Modifie les variables | OK |


