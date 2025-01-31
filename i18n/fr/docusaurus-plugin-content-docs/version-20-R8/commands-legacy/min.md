---
id: min
title: Min
slug: /commands/min
displayed_sidebar: docs
---

<!--REF #_command_.Min.Syntax-->**Min** ( *séries* {; *cheminAttribut*} ) : any<!-- END REF-->
<!--REF #_command_.Min.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| séries | Field, Array | &#8594;  | Valeurs desquelles vous voulez obtenir la plus basse |
| cheminAttribut | Text | &#8594;  | Chemin d'attribut duquel calculer la valeur minimale |
| Résultat | Date, Number | &#8592; | Valeur la plus basse de séries |

<!-- END REF-->

#### Description 

<!--REF #_command_.Min.Summary-->**Min** retourne la valeur la plus faible de *séries*.<!-- END REF--> Si *séries* est un champ indexé, l'index est utilisé pour la recherche de cette valeur.

Vous pouvez passer dans *séries* un tableau (à une ou deux dimensions). Dans ce cas, le tableau doit être de type Entier, Entier long, Réel ou Date.

Si la sélection de *séries* est vide, **Min** retourne 0.

La commande accepte un paramètre optionnel de type texte, *cheminAttribut*, que vous pouvez utiliser si *séries* est un champ de type Objet. Il vous permet de définir le chemin de l'attribut dont le contenu doit être utilisé pour le calcul de la valeur minimale. Utilisez la notation à points standard pour définir le chemin dans l'objet jusqu'à l'attribut, par exemple "Clients.enfants.age". Attention, gardez à l'esprit que les noms d'attributs d'objets tiennent compte de la casse des caractères.  
Seules les valeurs numériques des attributs sont utilisées pour le calcul. Si l'attribut contient des valeurs non numériques, elles sont ignorées. 

Si la commande est correctement exécutée, la variable système OK prend la valeur 1\. Si elle est interrompue (par exemple si l'utilisateur clique sur le bouton **Arrêt** dans le thermomètre de progression), la variable OK prend la valeur 0.

#### Exemple 1 

L'exemple ci-dessous est la méthode objet d'une variable, *vMin*, placée dans la zone de rupture R0 d'un formulaire sortie. La variable est imprimée à la fin de l'état. La méthode objet assigne la valeur la plus basse du champ à la variable, qui est alors imprimée dans la dernière rupture de l'état.

```4d
 vMin:=Min([Employés]Salaire)
```

**Note :** Assurez-vous que l'événement formulaire "Sur impression sous total" est bien coché pour la variable. 

La méthode suivante est appelée pour imprimer les enregistrements de la sélection courante et activer la phase de rupture :

```4d
 ALL RECORDS([Employés])
 ORDER BY([Employés];[Employés]Société;>)
 BREAK LEVEL(1)
 ACCUMULATE([Employés]Salaire)
 FORM SET OUTPUT([Employés];"FormImpression")
 PRINT SELECTION([Employés])
```

**Note :** La valeur du paramètre de la commande [BREAK LEVEL](break-level.md) doit être égale au nombre de ruptures que contient l'état. Pour plus d'informations sur les ruptures, reportez-vous aux commandes du thème *Impressions*.

#### Exemple 2 

L'exemple suivant recherche la plus petite vente d'un employé et affiche le résultat dans une boîte de dialogue d'alerte :

```4d
 ALERT("Plus petite vente = "+String(Min([Employés]Ventes)))
```

#### Exemple 3 

Cet exemple vous permet d’obtenir la valeur la plus basse d’un tableau : 

```4d
 ARRAY REAL($TabNote;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Note;$TabNote)
 vMin:=Min($TabNote)
```

#### Exemple 4 

Pour un exemple de calcul utilisant un attribut de champ objet, veuillez vous reporter à l'exemple 3 de la commande [Average](average.md).

#### Voir aussi 

[Max](max.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 4 |
| Thread safe | &check; |
| Modifie les variables | OK |


