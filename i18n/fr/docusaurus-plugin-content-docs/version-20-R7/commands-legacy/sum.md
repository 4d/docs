---
id: sum
title: Sum
slug: /commands/sum
displayed_sidebar: docs
---

<!--REF #_command_.Sum.Syntax-->**Sum** ( *séries* {; *cheminAttribut*} ) : Real<!-- END REF-->
<!--REF #_command_.Sum.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| séries | Field, Array | &#8594;  | Valeurs dont vous souhaitez calculer la somme |
| cheminAttribut | Text | &#8594;  | Chemin d'attribut duquel calculer la somme |
| Résultat | Real | &#8592; | Somme de séries |

<!-- END REF-->

#### Description 

<!--REF #_command_.Sum.Summary-->**Sum** retourne la somme (c'est-à-dire le total de toutes les valeurs) de *séries*.<!-- END REF--> Si *séries* est un champ indexé, l'index est utilisé pour le calcul.

Vous pouvez passer dans *séries* un tableau (à une ou deux dimensions). Dans ce cas, le tableau doit être de type Entier, Entier long ou Réel.

La commande accepte un paramètre optionnel de type texte, *cheminAttribut*, que vous pouvez utiliser si *séries* est un champ de type Objet. Il vous permet de définir le chemin de l'attribut dont le contenu doit être utilisé pour le calcul de la somme des valeurs. Utilisez la notation à points standard pour définir le chemin dans l'objet jusqu'à l'attribut, par exemple "Clients.enfants.age". Attention, gardez à l'esprit que les noms d'attributs d'objets tiennent compte de la casse des caractères.  
Seules les valeurs numériques des attributs sont utilisées pour le calcul. Si l'attribut contient des valeurs non numériques, elles sont ignorées. 

Si la commande est correctement exécutée, la variable système OK prend la valeur 1\. Si elle est interrompue (par exemple si l'utilisateur clique sur le bouton **Arrêt** dans le thermomètre de progression), la variable OK prend la valeur 0.

#### Exemple 1 

L'exemple ci-dessous est la méthode objet d'une variable, *vTotal*, placée dans un formulaire. La méthode assigne à la variable la somme de tous les salaires :

```4d
 vTotal:=Sum([Employés]Salaire)
```

La méthode suivante est appelée pour imprimer les enregistrements de la sélection courante et activer le traitement des ruptures :

```4d
 ALL RECORDS([Employés])
 ORDER BY([Employés];[Employés]Nom;>)
 BREAK LEVEL(1)
 ACCUMULATE([Employés]Salaire)
 OUTPUT FORM([Employés];"FormImpression")
 PRINT SELECTION([Employés])
```

**Note :** La valeur du paramètre de la commande [BREAK LEVEL](break-level.md) doit être égale au nombre de ruptures que contient l'état. Pour plus d'informations sur les ruptures, reportez-vous aux commandes du thème *Impressions*.

#### Exemple 2 

Cet exemple vous permet d’obtenir la somme de toutes les valeurs placées dans un tableau : 

```4d
 ARRAY REAL($TabNote;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Note;$TabNote)
 vSomme:=Sum($TabNote)
```

#### Exemple 3 

Pour un exemple de calcul utilisant un attribut de champ objet, veuillez vous reporter à l'exemple 3 de la commande [Average](average.md).

#### Voir aussi 

[ACCUMULATE](accumulate.md)  
[Average](average.md)  
[BREAK LEVEL](break-level.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1 |
| Thread safe | &check; |
| Modifie les variables | OK |


