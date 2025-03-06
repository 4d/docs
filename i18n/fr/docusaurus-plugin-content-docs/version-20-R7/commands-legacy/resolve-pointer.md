---
id: resolve-pointer
title: RESOLVE POINTER
slug: /commands/resolve-pointer
displayed_sidebar: docs
---

<!--REF #_command_.RESOLVE POINTER.Syntax-->**RESOLVE POINTER** ( *pointeur* ; *nomVar* ; *numTable* ; *numChamp* )<!-- END REF-->
<!--REF #_command_.RESOLVE POINTER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| pointeur | Pointer | &#8594;  | Pointeur duquel récupérer l'objet référencé |
| nomVar | Text | &#8592; | Nom de la variable référencée ou chaîne vide |
| numTable | Integer | &#8592; | Numéro de la table ou de l'élément de tableau référencé(e) ou 0 ou -1 |
| numChamp | Integer | &#8592; | Numéro du champ ou de l'élément de tableau 2D référencé ou 0 ou -1 |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESOLVE POINTER.Summary-->**RESOLVE POINTER** récupère l'information de l'objet référencé par *pointeur* et la retourne dans les paramètres *nomVar*, *numTable* et *numChamp*.<!-- END REF-->

Selon la nature de l'objet référencé par le pointeur, **RESOLVE POINTER** retourne les valeurs suivantes :

| **Objet référencé**   | **Paramètres**     |                              |                                |
| --------------------- | ------------------ | ---------------------------- | ------------------------------ |
| **nomVar**            | **numTable**       | **numChamp**                 |                                |
| Aucun (pointeur NIL)  | "" (chaîne vide)   | 0                            | 0                              |
| Variable              | Nom de la variable | \-1                          | \-1                            |
| Tableau               | Nom du tableau     | \-1                          | \-1                            |
| Elément de tableau    | Nom du tableau     | numéro de l'élément          | \-1                            |
| Elément de tableau 2D | Nom du tableau 2D  | numéro de ligne de l'élément | numéro de colonne de l'élément |
| Table                 | "" (chaîne vide)   | numéro de la table           | 0                              |
| Champ                 | "" (chaîne vide)   | numéro de la table           | numéro du champ                |

**Notes :** 

* Si la valeur que vous passez dans le paramètre *pointeur* n'est pas de type pointeur, une erreur de syntaxe est générée.
* La commande **RESOLVE POINTER** ne fonctionne pas avec les pointeurs vers des variables locales. En effet, par définition plusieurs variables locales de même nom pouvant exister à différents emplacements, il n’est pas possible pour la commande de connaître la variable à dépointer.

#### Exemple 1 

Dans un formulaire, vous créez un groupe de 100 variables saisissables qui s'appellent v1, v2... v100\. Pour cela, vous procédez de la manière suivante : 

* Vous créez une variable saisissable que vous appelez v.
* Vous définissez les propriétés de l'objet suivant vos besoins.
* Vous associez la méthode suivante à l'objet :

```4d
 FaireQuelqueChose(Self) // FaireQuelqueChose est une méthode projet de la base
```

* Vous pouvez alors soit dupliquer la variable autant de fois que nécessaire, soit utiliser la fonctionnalité Tableau sur la grille de l'éditeur de formulaires.
* Dans la méthode FaireQuelqueChose, si vous voulez connaître l'indice de la variable pour laquelle la méthode est appelée, vous écrivez le code suivant :

```4d
 RESOLVE POINTER($1;$vaNomVar;$vlNumTable;$vlNumChamp)
 $vlVarNum:=Num(Substring($vaNomVar;2))
```

* En suivant ces étapes, vous avez écrit une fois seulement les méthodes objet pour les 100 variables : vous n'avez pas eu besoin d'écrire FaireQuelqueChose(1), FaireQuelqueChose(2)..., FaireQuelqueChose(100)).

#### Exemple 2 

Pour des raisons de débogage, vous voulez vérifier si le deuxième paramètre ($2) d'une méthode est un pointeur vers une table. Le début de votre méthode peut être écrit ainsi : 

```4d
  // ...
 If(<>Débogage)
    RESOLVE POINTER($2;$vaNomVar;$vlNumTable;$vlNumChamp)
    If(Not(($vlNumTable>0)&($vlNumChamp=-1)&($vlNomVar="")))
  // ATTENTION : Le pointeur n'est pas une référence à une table
       TRACE
    End if
 End if
  // ...
```

#### Exemple 3 

Reportez-vous à l'exemple de la commande *\_o\_DRAG AND DROP PROPERTIES*. 

#### Exemple 4 

Voici un exemple de pointeur vers un tableau 2D :

```4d
 ARRAY TEXT(atCities;100;50)
 var $city : Pointer
 atCities{1}{2}:="Rome"
 atCities{1}{5}:="Paris"
 atCities{2}{6}:="New York"
  // ...autres valeurs
 $city:=->atCities{1}{5}
 RESOLVE POINTER($city;$var;$rowNum;$colNum)
  //$var="atCities"
  //$rowNum="1"
  //$colNum="5"
```

#### Voir aussi 

[Field](field.md)  
[Get pointer](get-pointer.md)  
[Is a variable](is-a-variable.md)  
[Is nil pointer](is-nil-pointer.md)  
[Table](table.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 394 |
| Thread safe | &check; |


