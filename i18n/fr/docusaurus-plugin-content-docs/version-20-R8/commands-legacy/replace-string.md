---
id: replace-string
title: Replace string
slug: /commands/replace-string
displayed_sidebar: docs
---

<!--REF #_command_.Replace string.Syntax-->**Replace string** ( *source* ; *obsolète* ; *nouveau* {; *combien*}{; *} ) : Text<!-- END REF-->
<!--REF #_command_.Replace string.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| source | Text | &#8594;  | Chaîne de départ |
| obsolète | Text | &#8594;  | Caractère(s) à remplacer |
| nouveau | Text | &#8594;  | Chaîne de remplacement (si chaîne vide, toutes les occurrences sont effacées) |
| combien | Integer | &#8594;  | Nombre de remplacements à effectuer |
| * | Opérateur | &#8594;  | Si passé : évaluation basée sur les codes de caractères |
| Résultat | Text | &#8592; | Chaîne résultante |

<!-- END REF-->

#### Description 

<!--REF #_command_.Replace string.Summary-->**Replace string** retourne une chaîne de caractères résultant du remplacement dans *source* de *obsolète* par *nouveau*.<!-- END REF-->

Si *nouveau* est une chaîne vide (""), **Replace string** supprime chaque occurrence de *obsolète* dans *source*.

Si *combien* est spécifié, **Replace string** ne remplace que le nombre d'occurrences de *obsolète* spécifié, à partir du premier caractère de *source*. Si *combien* est omis, toutes les occurrences de *obsolète* sont remplacées.

Si *obsolète* est une chaîne vide, **Replace string** retourne *source* inchangé.

Par défaut, la commande effectue des comparaisons globales, tenant compte des particularités linguistiques et des lettres pouvant s'écrire avec un ou plusieurs caractères (par exemple æ = ae). En revanche, elle n'est pas diacritique (a=A, a=à...) et ne tient pas compte des caractères "ignorables" tels que les caractères dont le code est < 9 (spécification Unicode).   
Pour modifier ce fonctionnement, passez l'astérisque *\** en dernier paramètre. Dans ce cas, les comparaisons sont effectuées sur la base des codes des caractères. Vous devez donc passer le paramètre \* :

* si vous souhaitez remplacer des caractères spéciaux, utilisés par exemple comme délimiteurs (**Caractere**(1)...),
* si le remplacement des caractères doit tenir compte de la casse et des accents (a#A, a#à...).  
A noter que dans ce mode, l'évaluation ne gère pas les variations d'écriture des mots.

**Note :** Dans 4D v15 R3 et suivantes, une optimisation importante a été apportée à l'algorithme utilisé par cette commande lorsque vous remplacez une chaîne par une autre de taille différente, quelle que soit la syntaxe utilisée. Il en résulte une accélération significative des traitements dans ce contexte. 

#### Exemple 1 

L'exemple suivant illustre l'utilisation de **Replace string**. Les résultats sont affectés à la variable *vRésultat*. Les commentaires fournissent la valeur de la variable :

```4d
 vRésultat:=Replace string("Ville";"ll";"d") // vRésultat est égal à "Vide"
 vRésultat:=Replace string("Table";"b";"") // vRésultat est égal à "Tale"
 vRésultat:=Replace string(var;Char(Tab);",";*) // Remplacer toutes les tabulations par des virgules
```

#### Exemple 2 

L'exemple suivant élimine les retours chariot et les tabulations du texte contenu dans la variable *vRésultat* :

```4d
 vRésultat:=Replace string(Replace string(vRésultat;Char(Carriage return);"";*);Char(Tab);"";*)
```

#### Exemple 3 

L'exemple suivant illustre le rôle du paramètre \* dans le cadre d'une évaluation diacritique :

```4d
 vRésultat:=Replace string("Crème brûlée";"Brulee";"caramel") //vRésultat est égal à "Crème caramel"
 vRésultat:=Replace string("Crème brûlée";"Brulee";"caramel";*) //vRésultat est égal à "Crème brûlée"
```

#### Voir aussi 

[Change string](change-string.md)  
[Delete string](delete-string.md)  
[Insert string](insert-string.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 233 |
| Thread safe | &check; |


