---
id: branching
title: Branching structures
---

## Si...Sinon...Fin de si

La syntaxe de la structure conditionnelle `Si...Sinon...Fin de si` est la suivante :

```code4d
 Si(Expression_booléenne)
    instruction(s)
 Sinon
    instruction(s)
 Fin de si
```

A noter que l'élément `Sinon` est optionnel, vous pouvez écrire :

```code4d
 Si(Expression_booléenne)
    instruction(s)
 Fin de si
```

La structure `Si...Sinon...Fin de si` permet à votre méthode de choisir dans une alternative, en fonction du résultat, VRAI ou FAUX, d’un test (une expression booléenne). Si l’expression booléenne est VRAIE, les instructions qui suivent immédiatement le test sont exécutées. Si l’expression booléenne est FAUSSE, les instructions suivant la ligne Sinon sont exécutées. Le `Sinon` est optionnel ; lorsqu’il est omis, c’est la première ligne d’instructions suivant le `Fin de si` (s’il y en a une) qui est exécutée.

A noter que l'expression booléenne est toujours évaluée en totalité. Examinons en particulier le test suivant :

```code4d
 Si(MéthodeA & MéthodeB)
    ...
 Fin de si
```

he expression is TRUE only if both methods are TRUE. However, even if *MethodA* returns FALSE, 4D will still evaluate *MethodB*, which is a useless waste of time. In this case, it is more interesting to use a structure like:

```code4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

The result is similar and *MethodB* is evaluated only if necessary.

### Example

```code4d
  // Ask the user to enter a name
 $Find:=Request(Type a name)
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("You did not enter a name.")
 End if 
```

**Tip:** Branching can be performed without statements to be executed in one case or the other. When developing an algorithm or a specialized application, nothing prevents you from writing:

```code4d
 If(Boolean_Expression)
 Else
    statement(s)
 End if
```

or:

```code4d
 If(Boolean_Expression)
    statement(s)
 Else
 End if
```

## Case of...Else...End case

The formal syntax of the `Case of...Else...End case` control flow structure is:

```code4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .

    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

A noter que l'élément `Sinon` est optionnel, vous pouvez écrire :

```code4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .

    :(Boolean_Expression)
       statement(s)
 End case
```

As with the `If...Else...End if` structure, the `Case of...Else...End case` structure also lets your method choose between alternative actions. Unlike the `If...Else...End` if structure, the `Case of...Else...End case` structure can test a reasonable unlimited number of Boolean expressions and take action depending on which one is TRUE.

Each Boolean expression is prefaced by a colon (`:`). This combination of the colon and the Boolean expression is called a case. For example, the following line is a case:

```code4d
:(bValidate=1)
```

Only the statements following the first TRUE case (and up to the next case) will be executed. If none of the cases are TRUE, none of the statements will be executed (if no `Else` part is included).

You can include an Else statement after the last case. If all of the cases are FALSE, the statements following the `Else` will be executed.

### Example

This example tests a numeric variable and displays an alert box with a word in it:

```code4d
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

For comparison, here is the `If...Else...End if` version of the same method:

```code4d
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

Remember that with a `Case of...Else...End case` structure, only the first TRUE case is executed. Even if two or more cases are TRUE, only the statements following the first TRUE case will be executed.

Consequently, when you want to implement hierarchical tests, you should make sure the condition statements that are lower in the hierarchical scheme appear first in the test sequence. For example, the test for the presence of condition1 covers the test for the presence of condition1&condition2 and should therefore be located last in the test sequence. For example, the following code will never see its last condition detected:

```code4d
 Case of
    :(vResult=1)
       ... //statement(s)
    :((vResult=1) & (vCondition#2)) //this case will never be detected
       ... //statement(s)
 End case
```

In the code above, the presence of the second condition is not detected since the test "vResult=1" branches off the code before any further testing. For the code to operate properly, you can write it as follows:

```code4d
 Case of
    :((vResult=1) & (vCondition#2)) //this case will be detected first
       ... //statement(s)
    :(vResult=1)
       ... //statement(s)
 End case
```

Also, if you want to implement hierarchical testing, you may consider using hierarchical code.

**Tip:** Branching can be performed without statements to be executed in one case or another. When developing an algorithm or a specialized application, nothing prevents you from writing:

```code4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
      ...

    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

or:

```code4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
       statement(s)
       ...

    :(Boolean_Expression)
       statement(s)
    Else
 End case
```

or:

```code4d
 Case of
    Else
       statement(s)
 End case
```