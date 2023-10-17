---
id: branching
title: Structures conditionnelles
---

Une structure de branchement permet aux méthodes de tester une condition et d'emprunter des chemins alternatifs, en fonction du résultat.


## If...Else...End if

La syntaxe de la structure conditionnelle `If...Else...End if` est la suivante :

```4d
 If(Boolean_Expression)
    instruction(s)
 Else
    instruction(s)
End if
```

A noter que l'élément `Else` est optionnel, vous pouvez écrire :
```4d
 If(Boolean_Expression)
    instruction(s)
 End if
```

La structure `If...Else...End if` permet à votre méthode de choisir dans une alternative, en fonction du résultat, TRUE ou FALSE, d’un test (une expression booléenne). Si l’expression booléenne est TRUE, les instructions qui suivent immédiatement le test sont exécutées. Si l’expression booléenne est FALSE, les instructions suivant la ligne Else sont exécutées. Le `Else` est optionnel ; lorsqu’il est omis, c’est la première ligne d’instructions suivant le `End if` (s’il y en a une) qui est exécutée.

A noter que l'expression booléenne est toujours évaluée en totalité. Examinons en particulier le test suivant :

```4d
 If(MethodA & MethodB)
    ...
 End if
```

L'expression n'est TRUE que si les deux méthodes sont mises à TRUE. Or, même si _MethodA_ retourne FALSE, 4D évaluera quand même _MethodB_, ce qui représente une perte de temps inutile. Dans ce cas, il est préférable d'utiliser une structure du type :

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

Le résultat est équivalent et _MethodB_ n'est évaluée que si nécessaire.

> **Note** : L'[opérateur ternaire](../dt_boolean.md#ternary-operator) permet d'écrire des expressions conditionnelles d'une ligne et peut remplacer une séquence complète d'instructions [If... Else](../cf_branching.md#ifelseend-if).

### Exemple

```4d
  // Ask the user to enter a name
 $Find:=Request(Type a name)
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("You did not enter a name.")
 End if
 End if 
```

**Astuce :** Il n'est pas obligatoire que des instructions soient exécutées dans chaque branche de l'alternative. Lorsque vous développez un algorithme, ou lorsque vous poursuivez un but précis, rien ne vous empêche d'écrire :

```4d
 If(Expression_booléenne)
 Else
    instruction(s)
 End if
```
ou :

```4d
 If(Expression_booléenne)
    instruction(s)
 Else
 End if
```

## Au cas ou...Sinon...Fin de cas

La syntaxe de la structure conditionnelle `Case of...Else...End case` est la suivante :
```4d
 Case of
    :(Expression_booléenne)
       instruction(s)
    :(Expression_booléenne)
       statement(s)
       .
       .
       .

    :(Expression_booléenne)
       instruction(s)
    Else
       instruction(s)
 End case
```

A noter que l'élément `Else` est optionnel, vous pouvez écrire :
```4d
 Case of
    :(Expression_booléenne)
       instruction(s)
    :(Expression_booléenne)
       statement(s)
       .
       .
       .

    :(Expression_booléenne)
       instruction(s)
 End case
```
Tout comme la structure `If...Else...End if`, la structure `Case of...Else...End case` permet également à votre méthode de choisir parmi plusieurs séquences d’instructions. A la différence de la structure `If...Else...End`, la structure `Case of...Else...End case` peut tester un nombre illimité d’expressions booléennes et exécuter la séquence d’instructions correspondant à la valeur TRUE.

Chaque expression booléenne débute par le caractère deux points (`:`). La combinaison de deux points et d’une expression booléenne est appelée un cas. Par exemple, la ligne suivante est un cas :

```4d
:(bValidate=1)
```

Seules les instructions suivant le premier cas TRUE (et ce, jusqu’au cas suivant) seront exécutées. Si aucun des cas n’est TRUE, aucune instruction n’est exécutée (s'il n'y a pas d'élément `Else`).

Vous pouvez placer une instruction Else après le dernier cas. Si tous les cas sont FALSE, les instructions suivant le `Else` seront exécutées.

### Exemple

Cet exemple teste une variable numérique et affiche une boîte de dialogue d’alerte comportant un simple mot :

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //this case will be detected first
       ... //statement(s)
    :(vResult=1)
       ... Case of
    :(vResult=1) //Tester si le chiffre est 1
       ALERT("One.") //Si le chiffre est 1, afficher une alerte
    :(vResult=2) //Tester si le chiffre est 2
       ALERT("Two.") //Si le chiffre est 2, afficher une alerte
    :(vResult=3) //Tester si le chiffre est 3
       ALERT("Three.") //Si le chiffre est 3, afficher une alerte
    Else //Si le chiffre n'est pas 1, 2 ou 3, afficher une alerte
       ALERT("It was not one, two, or three.")
 //déclaration(s)
 End case //Si le chiffre est 2, afficher une alerte
    :(vResult=3) //Tester si le chiffre est 3
       ALERT("Three.") //Si le chiffre est 3, afficher une alerte
    Else //Si le chiffre n'est pas 1, 2 ou 3, afficher une alerte
       ALERT("It was not one, two, or three.")
 //statement(s)
 End case
```

A titre de comparaison, voici la version avec `If...Else...End if` de la même méthode :

```4d
 If(vResult=1) //Tester si le chiffre est 1
    ALERT("One.") //Si le chiffre est 1, afficher une alerte
 Else
    If:(vResult=2) //Tester si le chiffre est 2
       ALERT("Two.") If(vResult=1) //Tester si le chiffre est 1
    ALERT("One.") If(vResult=1) //Tester si le chiffre est 1
    ALERT("One.") If(vResult=1) //Tester si le chiffre est 1
    ALERT("One.") If(vResult=1) //Tester si le chiffre est 1
    ALERT("One.") //Si le chiffre est 1, afficher une alerte
 Else
    If(vResult=2) //Tester si le chiffre est 2
       ALERT("Two.") //Si le chiffre est 2, afficher une alerte
    Else
    If(vResult=3) //Tester si le chiffre est 3
       ALERT("Three.") //Si le chiffre est 3, afficher une alerte
    Else //Si le chiffre n'est pas 1, 2 ou 3, afficher une alerte
       ALERT("It was not one, two, or three.")
       End if
    End if
 End if //Si le chiffre est 2, afficher une alerte
    Else
    If(vResult=3) //Tester si le chiffre est 3
       ALERT("Three.") //Si le chiffre est 3, afficher une alerte
    Else //Si le chiffre n'est pas 1, 2 ou 3, afficher une alerte
       ALERT("It was not one, two, or three.")
       End if
    End if
 End if //Si le chiffre est 2, afficher une alerte
    Else
    If(vResult=3) //Tester si le chiffre est 3
       ALERT("Three.") //Si le chiffre est 3, afficher une alerte
    Else //Si le chiffre n'est pas 1, 2 ou 3, afficher une alerte
       ALERT("It was not one, two, or three.")
       End if
    End if
 End if //Si le chiffre est 2, afficher une alerte
    Else
    If(vResult=3) //Tester si le chiffre est 3
       ALERT("Three.") //Si le chiffre est 3, afficher une alerte
    Else //Si le chiffre n'est pas 1, 2 ou 3, afficher une alerte
       ALERT("It was not one, two, or three.")
       End if
    End if
 End if //Si le chiffre est 3, afficher une alerte
    Else //Si le chiffre n'est pas 1, 2 ou 3, afficher une alerte
       ALERT("It was not one, two, or three.")
       End if
    End if
 End if
```

Rappelez-vous qu’avec une structure de type `Case of...Else...End case`, seul le premier cas TRUE rencontré est exécuté. Même si d’autres cas sont TRUE, seules les instructions suivant le premier cas TRUE seront prises en compte.

Par conséquent, lorsque vous testez dans la même méthode des cas simples et des cas complexes, vous devez placer les cas complexes avant les cas simples, sinon ils ne seront jamais exécutés. Par exemple, si vous souhaitez traiter le cas simple (vResult=1) et le cas complexe (vResult=1) & (vCondition#2) et que vous structurez la méthode de la manière suivante :

```4d
 Case of
    :(vResult=1) //Test if the number is 1
       ALERT("One.") //If it is 1, display an alert
    :(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    :(vResult=3) //Test if the number is 3
       ALERT("Three.") //If it is 3, display an alert
    Else //If it is not 1, 2, or 3, display an alert
       ALERT("It was not one, two, or three.")
 End case
```

... les instructions associées au cas complexe ne seront jamais exécutées. En effet, pour que ce cas soit TRUE, ses deux conditions booléennes doivent l’être. Or, la première condition est celle du cas simple situé précédemment. Lorsqu'elle est TRUE, le cas simple est exécuté et 4D sort de la structure conditionnelle, sans évaluer le cas complexe. Pour que ce type de méthode fonctionne, vous devez écrire :

```4d
 If(vResult=1) //Test if the number is 1
    ALERT("One.") //If it is 1, display an alert
 Else
    If(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    Else
       If(vResult=3) //Test if the number is 3
          ALERT("Three.") //If it is 3, display an alert
       Else //If it is not 1, 2, or 3, display an alert
          ALERT("It was not one, two, or three.")
       End if
    End if
 End if
```

**Astuce :** Il n'est pas obligatoire que des instructions soient exécutées dans toutes les alternatives. Lorsque vous développez un algorithme, ou lorsque vous poursuivez un but précis, rien ne vous empêche d'écrire :
```4d
 Case of
    :(Expression_booléenne)
    :(Expression_booléenne)
        instruction(s)
       ...

    :(Expression_booléenne)
       instruction(s)
    Else
       instruction(s)
 End case
```

ou :
```4d
 Case of
    :(Expression_booléenne)
    :(Expression_booléenne)
      ...

    :(Expression_booléenne)
       instruction(s)
    Else
       instruction(s)
 End case
```

ou :
```4d
 Case of
    Else
       instruction(s)
 End case
```
