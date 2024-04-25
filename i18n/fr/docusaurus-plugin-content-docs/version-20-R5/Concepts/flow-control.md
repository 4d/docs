---
id: control-flow
title: Conditions et boucles
---

Quelle que soit la simplicité ou la complexité d’une méthode ou d'une fonction, vous utiliserez toujours un ou plusieurs types de structure de programmation. Les structures de programmation déterminent si et dans quel ordre les lignes d’instructions sont exécutées à l’intérieur d’une méthode. Il existe trois types de structures :

- **Sequential**: a sequential structure is a simple, linear structure. Une séquence est une série d'instructions que 4D exécute l'une après l'autre, de la première à la dernière. Une routine d'une ligne, fréquemment utilisée pour les méthodes objets, est le cas le plus simple d'une structure séquentielle. For example: `[People]lastName:=Uppercase([People]lastName)`
- **Branching**: A branching structure allows methods to test a condition and take alternative paths, depending on the result. La condition est une expression booléenne, c'est-à-dire une expression qui est évaluée à vrai ou faux. One branching structure is the [`If...Else...End if`](#ifelseend-if) structure, which directs program flow along one of two paths. The other branching structure is the [`Case of...Else...End case`](#case-ofelseend-case) structure, which directs program flow to one of many paths.
- **Looping**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. Pour traiter ces besoins, le langage 4D vous propose plusieurs structures répétitives :

  - [`While...End while`](#whileend-while)
  - [`Repeat...Until`](#repeatuntil)
  - [`For...End for`](#forend-for)
  - [`For each...End for each`](#for-eachend-for-each)

Les boucles sont contrôlées de deux manières : soit elles bouclent jusqu'à ce qu'une condition soit remplie, soit elles bouclent un certain nombre de fois. Each looping structure can be used in either way, but `While` loops and `Repeat` loops are more appropriate for repeating until a condition is met, and `For` loops are more appropriate for looping a specified number of times. `For each...End for each` allows mixing both ways and is designed to loop within objects and collections.

**Note:** 4D allows you to embed programming structures up to a "depth" of 512 levels.

## If...Else...End if

The formal syntax of the `If...Else...End if` control flow structure is:

```4d
 If(Boolean_Expression)
    instruction(s)
 Else
    instruction(s)
End if
```

Note that the `Else` part is optional; you can write:

```4d
 If(Boolean_Expression)
    instruction(s)
 End if
```

The `If...Else...End if` structure lets your method choose between two actions, depending on whether a test (a Boolean expression) is TRUE or FALSE. Si l’expression booléenne est TRUE, les instructions qui suivent immédiatement le test sont exécutées. Si l’expression booléenne est FALSE, les instructions suivant la ligne Else sont exécutées. The `Else` statement is optional; if you omit Else, execution continues with the first statement (if any) following the `End if`.

A noter que l'expression booléenne est toujours évaluée en totalité. Examinons en particulier le test suivant :

```4d
 If(MethodA & MethodB)
    ...
 End if
```

L'expression n'est TRUE que si les deux méthodes sont mises à TRUE. However, even if _MethodA_ returns FALSE, 4D will still evaluate _MethodB_, which is a useless waste of time. Dans ce cas, il est préférable d'utiliser une structure du type :

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

The result is similar and _MethodB_ is evaluated only if necessary.

> **Note:** The [ternary operator](operators.md#ternary-operator) allows writing one-line conditional expressions and can replace a full sequence of If..Else statements.

#### Exemple

```4d
  // Demander à l'utilisateur de saisir un nom
 $Find:=Request(Type a name)
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("You did not enter a name.")
 End if 
```

**Tip:** Branching can be performed without statements to be executed in one case or the other. Lorsque vous développez un algorithme, ou lorsque vous poursuivez un but précis, rien ne vous empêche d'écrire :

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

## Case of...Else...End case

The formal syntax of the `Case of...Else...End case` control flow structure is:

```4d
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

Note that the `Else` part is optional; you can write:

```4d
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

Chaque expression booléenne débute par le caractère deux points (`:`). La combinaison de deux points et d’une expression booléenne est appelée un cas. Par exemple, la ligne suivante est un cas :

```4d
:(bValidate=1)
```

Seules les instructions suivant le premier cas TRUE (et ce, jusqu’au cas suivant) seront exécutées. If none of the cases are TRUE, none of the statements will be executed (if no `Else` part is included).

Vous pouvez placer une instruction Else après le dernier cas. If all of the cases are FALSE, the statements following the `Else` will be executed.

#### Exemple

Cet exemple teste une variable numérique et affiche une boîte de dialogue d’alerte comportant un simple mot :

```4d
 Case of
    :(vResult=1) // Teste si le numéro est 1
       ALERT("One.") // Si c’est 1, afficher une alerte
    :(vResult=2) // Teste si le numéro est 2
       ALERT("Two.") // Si c’est 2, afficher une alerte
    :(vResult=3) // Teste si le numéro est 3
       ALERT("Three.") // Si c’est 3, afficher une alerte
    Else  // Si ce n’est ni 1 ni 2 ni 3, afficher une alerte
       ALERT("It was not one, two, or three.")
 End case
```

For comparison, here is the `If...Else...End if` version of the same method:

```4d
 If(vResult=1) //Teste si le numéro est 1
    ALERT("One.") //Si c’est 1, afficher une alerte
 Else
    If(vResult=2) //Test si le numéro est 2
       ALERT("Two.") //Si c’est 2, afficher une alerte
    Else
       If(vResult=3) //Teste si le numéro est 3
          ALERT("Three.") //Si c’est 3, afficher une alerte
       Else //Si ce n’est ni 1, 2 ni 3, afficher l’alerte
          ALERT("It was not one, two, or three.")
       End if
    End if
 End if
```

Remember that with a `Case of...Else...End case` structure, only the first TRUE case is executed. Même si d’autres cas sont TRUE, seules les instructions suivant le premier cas TRUE seront prises en compte.

Par conséquent, lorsque vous testez dans la même méthode des cas simples et des cas complexes, vous devez placer les cas complexes avant les cas simples, sinon ils ne seront jamais exécutés. For example, the test for the presence of condition1 covers the test for the presence of condition1&condition2 and should therefore be located last in the test sequence.

```4d
 Case of
    :(vResult=1)
       ... //statement(s)
    :((vResult=1) & (vCondition#2)) //this case will never be detected
       ... //statement(s)
 End case
```

... les instructions associées au cas complexe ne seront jamais exécutées. En effet, pour que ce cas soit TRUE, ses deux conditions booléennes doivent l’être. Or, la première condition est celle du cas simple situé précédemment. Lorsqu'elle est TRUE, le cas simple est exécuté et 4D sort de la structure conditionnelle, sans évaluer le cas complexe. Pour que ce type de méthode fonctionne, vous devez écrire :

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //this case will be detected first
       ... //statement(s)
    :(vResult=1)
       ... //statement(s)
 End case
```



**Tip:** Branching can be performed without statements to be executed in one case or another. Lorsque vous développez un algorithme, ou lorsque vous poursuivez un but précis, rien ne vous empêche d'écrire :

```4d
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

ou :

```4d
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

ou :

```4d
 Case of
    Else
       instruction(s)
 End case
```

## While...End while

The formal syntax of the `While...End while` control flow structure is:

```4d
 While(Boolean_Expression)
 	statement(s)
    {break}  
    {continue}
 End while
```

A `While...End while` loop executes the statements inside the loop as long as the Boolean expression is TRUE. Elle teste l’expression booléenne initiale et n’entre pas dans la boucle (et donc n'exécute aucune instruction) si l’expression est à FALSE.

The `break` and `continue` statements are [described below](#break-and-continue).

It is common to initialize the value tested in the Boolean expression immediately before entering the `While...End while` loop. Initializing the value means setting it to something appropriate, usually so that the Boolean expression will be TRUE and `While...End while` executes the loop.

La valeur de l'expression booléenne doit pouvoir être modifiée par un élément situé à l'intérieur de la boucle, sinon elle s'exécutera indéfiniment. The following loop continues forever because _NeverStop_ is always TRUE:

```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

Si vous vous retrouvez dans une telle situation (où une méthode s'exécute de manière incontrôlée), vous pouvez utiliser les fonctions de débogage de 4D et remonter à la source du problème. For more information about tracing a method, see the [Error handling](error-handling.md) page.

#### Exemple

```4d
 CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop as long as the user wants to
    ADD RECORD([aTable]) //Add a new record
 End while //The loop always ends with End while
```

In this example, the `OK` system variable is set by the `CONFIRM` command before the loop starts. If the user clicks the **OK** button in the confirmation dialog box, the `OK` system variable is set to 1 and the loop starts. Otherwise, the `OK` system variable is set to 0 and the loop is skipped. Once the loop starts, the `ADD RECORD` command keeps the loop going because it sets the `OK` system variable to 1 when the user saves the record. When the user cancels (does not save) the last record, the `OK` system variable is set to 0 and the loop stops.

## Repeat...Until

The formal syntax of the `Repeat...Until` control flow structure is:

```4d
Repeat
	statement(s)
    {break}  
    {continue}
Until(Boolean_Expression)
```

A `Repeat...Until` loop is similar to a [While...End while](flow-control.md#whileend-while) loop, except that it tests the Boolean expression after the loop rather than before. Thus, a `Repeat...Until` loop always executes the loop once, whereas if the Boolean expression is initially False, a `While...End while` loop does not execute the loop at all.

The other difference with a `Repeat...Until` loop is that the loop continues until the Boolean expression is TRUE.

The `break` and `continue` statements are [described below](#break-and-continue).

#### Exemple

Compare the following example with the example for the `While...End while` loop. Note that the Boolean expression does not need to be initialized—there is no `CONFIRM` command to initialize the `OK` variable.

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
```

## For...End for

The formal syntax of the `For...End for` control flow structure is:

```4d
For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
   statement(s)
    {break}  
    {continue}
End for
```

The `For...End for` loop is a loop controlled by a counter variable:

- The counter variable _Counter_Variable_ is a numeric variable (Real or Long Integer) that the `For...End for` loop initializes to the value specified by _Start_Expression_.
- Each time the loop is executed, the counter variable is incremented by the value specified in the optional value _Increment_Expression_. If you do not specify _Increment_Expression_, the counter variable is incremented by one (1), which is the default.
- When the counter variable passes the _End_Expression_ value, the loop stops.

**Important:** The numeric expressions _Start_Expression_, _End_Expression_ and _Increment_Expression_ are evaluated once at the beginning of the loop. Si ces expressions sont des variables, leur modification depuis l'intérieur de la boucle n'affectera pas l'exécution de la boucle.

**Tip:** However, for special purposes, you can change the value of the counter variable _Counter_Variable_ within the loop; this will affect the loop.

- Usually _Start_Expression_ is less than _End_Expression_.
- If _Start_Expression_ and _End_Expression_ are equal, the loop will execute only once.
- If _Start_Expression_ is greater than _End_Expression_, the loop will not execute at all unless you specify a negative _Increment_Expression_. Reportez-vous ci-dessous au paragraphe décrivant ce point.

The `break` and `continue` statements are [described below](#break-and-continue).

#### Exemples élémentaires

1. La boucle suivante s'exécute 100 fois :

```4d
 For(vCounter;1;100)
  //Faire quelque chose
 End for
```

2. L'exemple suivant permet de traiter tous les éléments du tableau anArray :

```4d
 For($vlElem;1;Size of array(anArray))
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

3. L'exemple suivant permet d'examiner chaque caractère du texte vtSomeText :

```4d
 For($vlChar;1;Length(vtSomeText))
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

4. L'exemple suivant permet de traiter tous les enregistrements de la sélection de la table [aTable] :

```4d
 FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the next record
    NEXT RECORD([aTable])
 End for
```

Most of the `For...End for` loops you will write in your projects will look like the ones listed in these examples.

### Variable compteur

#### Décrémenter la variable compteur

Dans certains cas, vous pouvez souhaiter disposer d'une boucle dont la valeur de la variable compteur décroît au lieu de croître. To do so, you must specify _Start_Expression_ greater than _End_Expression_ and a negative _Increment_Expression_. Les exemples suivants effectuent les mêmes tâches que les précédents, mais en sens inverse :

5. La boucle suivante s'exécute 100 fois :

```4d
 For(vCounter;100;1;-1)
  //Faire quelque chose
 End for
```

6. L'exemple suivant permet de traiter tous les éléments du tableau anArray :

```4d
 For($vlElem;Size of array(anArray);1;-1)
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

7. L'exemple suivant permet d'examiner chaque caractère du texte vtSomeText :

```4d
 For($vlChar;Length(vtSomeText);1;-1)
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

8. L'exemple suivant permet de traiter tous les enregistrements de la sélection de la table [aTable] :

```4d
 LAST RECORD([aTable])
 For($vlRecord;Records in selection([aTable]);1;-1)
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the previous record
    PREVIOUS RECORD([aTable])
 End for
```

#### Incrementer la variable compteur de plus de 1

If you need to, you can use an _Increment_Expression_ (positive or negative) whose absolute value is greater than one.

9. La boucle suivante ne traite que les éléments pairs du tableau anArray :

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Do something with the element #2,#4...#2n
    anArray{$vlElem}:=...
 End for
```

#### Optimiser l'exécution de For...End for

Vous pouvez utiliser comme compteurs des variables réelles et entières, interprocess, process et locales. Pour des boucles longues, et particulièrement en mode compilé, nous vous conseillons d'employer des variables locales de type Entier long.

10. Voici un exemple :

```4d
 var $vlCounter : Integer //use local Integer variables
 For($vlCounter;1;10000)
  //Faire quelque chose
 End for
```

### Comparaison des structures répétitives

Let's go back to the first `For...End for` example. La boucle suivante s'exécute 100 fois :

```4d
 For(vCounter;1;100)
  //Faire quelque chose
 End for
```

It is interesting to see how the `While...End while` loop and `Repeat...Until` loop would perform the same action. Here is the equivalent `While...End while` loop:

```4d
 $i:=1 //Initialize the counter
 While($i<=100) //Loop 100 times
  //Do something
    $i:=$i+1 //Need to increment the counter
 End while
```

Here is the equivalent `Repeat...Until` loop:

```4d
 $i :=1 // Initialisation du compteur
 Repeat
  // Faire quelque chose
    $i :=$i +1 // Il faut incrémenter le compteur
Until($i=100) // Boucle 100 fois
```

:::tip

The `For...End for` loop is usually faster than the `While...End while` and `Repeat...Until` loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Therefore, use the `For...End for` loop whenever possible.

:::

### Structures For...End for emboîtées

Vous pouvez emboîter autant de structures répétitives que vous voulez (dans les limites du raisonnable). This includes nesting `For...End for` loops. Il y a dans ce cas une erreur courante à éviter : assurez-vous d'utiliser une variable compteur différente par structure de boucle.

Voici deux exemples :

1. L'exemple suivant permet de traiter tous les éléments d'un tableau à deux dimensions :

```4d
 For($vlElem;1;Size of array(anArray))
  //...
  //Do something with the row
  //...
    For($vlSubElem;1;Size of array(anArray{$vlElem}))
  //Do something with the element
       anArray{$vlElem}{$vlSubElem}:=...
    End for
 End for
```

2. L'exemple suivant construit un tableau de pointeurs vers tous les champs de type Date présents dans la base :

```4d
 ARRAY POINTER($apDateFields;0)
 $vlElem:=0
 For($vlTable;1;Get last table number)
    If(Is table number valid($vlTable))
       For($vlField;1;Get last field number($vlTable))
          If(Is field number valid($vlTable;$vlField))
             $vpField:=Field($vlTable;$vlField)
             If(Type($vpField->)=Is date)
                $vlElem:=$vlElem+1
                INSERT IN ARRAY($apDateFields;$vlElem)
                $apDateFields{$vlElem}:=$vpField
             End if
          End if
       End for
    End if
 End for
```

## For each...End for each

The formal syntax of the `For each...End for each` control flow structure is:

```4d
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
    {break}  
    {continue}
 End for each
```

The `For each...End for each` structure iterates a specified _Current_item_ over all values of the _Expression_. The _Current_item_ type depends on the _Expression_ type. The `For each...End for each` loop can iterate through three _Expression_ types:

- collections : boucle sur chaque élément de la collection,
- entity selections : boucle sur chaque entity,
- objets : boucle sur chaque propriété d'objet.

The following table compares the three types of `For each...End for each`:

|                                                   | Boucle sur collections                                         | Boucle sur entity selections       | Boucle sur objets             |
| ------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------- | ----------------------------- |
| Type Elément_courant         | Variable du même type que les éléments de la collection        | Entity                             | Variable texte                |
| Types d’expressions                               | Collection (avec des éléments du même type) | Entity selection                   | Object                        |
| Nombre de boucles (par défaut) | Nombre d'éléments de la collection                             | Nombre d'entités dans la sélection | Nombre de propriétés d'objets |
| Prise en charge de Paramètres début / fin         | Oui                                                            | Oui                                | Non                           |

- Le nombre de boucles est évalué au démarrage et ne changera pas en cours de traitement. L'ajout ou la suppression d'éléments pendant la boucle est donc déconseillé car il pourra en résulter une redondance ou un manque d'itérations.
- By default, the enclosed _statement(s)_ are executed for each value in _Expression_. It is, however, possible to exit the loop by testing a condition either at the begining of the loop (`While`) or at the end of the loop (`Until`).
- The _begin_ and _end_ optional parameters can be used with collections and entity selections to define boundaries for the loop.
- The `For each...End for each` loop can be used on a **shared collection** or a **shared object**. If your code needs to modify one or more element(s) of the collection or object properties, you need to use the `Use...End use` keywords. Depending on your needs, you can call the `Use...End use` keywords:
  - avant de saisir la boucle, si les éléments doivent être modifiés ensemble pour des raisons d'intégrité, ou bien
  - dans la boucle, lorsque quelques éléments/propriétés seulement doivent être modifiés et qu'aucune gestion de l'intégrité n'est requise.

The `break` and `continue` statements are [described below](#break-and-continue).

### Boucle sur collections

When `For each...End for each` is used with an _Expression_ of the _Collection_ type, the _Current_Item_ parameter is a variable of the same type as the collection elements. Par défaut, le nombre de boucles est basé sur le nombre d'éléments de la collection.

The collection must contain only elements of the same type, otherwise an error will be returned as soon as the _Current_Item_ variable is assigned the first mismatched value type.

At each loop iteration, the _Current_Item_ variable is automatically filled with the matching element of the collection. Vous devez tenir compte des points suivants :

- If the _Current_Item_ variable is of the object type or collection type (i.e. if _Expression_ is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If any collection item is not of the same type as the variable, an error is generated and the loop stops.
- The _Current_Item_ variable must be of the same type as the collection elements. Si un seul élément de la collection n'est pas du même type que la variable, une erreur est générée et la boucle s'arrête.
- If the collection contains elements with a **Null** value, an error will be generated if the _Current_Item_ variable type does not support **Null** values (such as longint variables).

#### Exemple

Vous souhaitez calculer quelques statistiques sur une collection de nombres :

```4d
 var $nums : Collection
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 var $item;$vEven;$vOdd;$vUnder;$vOver : Integer
 For each($item;$nums)
    If($item%2=0)
       $vEven:=$vEven+1
    Else
       $vOdd:=$vOdd+1
    End if
    Case of
       :($item<5000)
          $vUnder:=$vUnder+1
       :($item>6000)
          $vOver:=$vOver+1
    End case
 End for each
  //$vEven=3, $vOdd=4
  //$vUnder=4,$vOver=2
```

### Boucle sur entity selections

When `For each...End for each` is used with an _Expression_ of the _Entity selection_ type, the _Current_Item_ parameter is the entity that is currently processed.

Le nombre de boucles est basé sur le nombre d'entities présentes dans l'entity selection. On each loop iteration, the _Current_Item_ parameter is automatically filled with the entity of the entity selection that is currently processed.

**Note:** If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop.

Keep in mind that any modifications applied on the current entity must be saved explicitly using `entity.save()`.

#### Exemple

Vous souhaitez augmenter le salaire de tous les employés britanniques dans une entity selection :

```4d
 var emp : Object
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Boucles sur des propriétés d'objets

When `For each...End for each` is used with an _Expression_ of the Object type, the _Current_Item_ parameter is a text variable automatically filled with the name of the currently processed property.

Les propriétés de l'objet sont itérées en fonction de leur ordre de création. Pendant la boucle, il est possible d'ajouter ou de supprimer des propriétés dans l'objet, sans pour autant modifier le nombre de boucles qui reste basé sur le nombre de propriétés initial de l'objet.

#### Exemple

Vous souhaitez passer en majuscules les propriétés contenant des noms dans l'objet suivant :

```4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```

Vous pouvez écrire :

```4d
 For each($property;$vObject)
    If(Value type($vObject[$property])=Is text)
       $vObject[$property]:=Uppercase($vObject[$property])
    End if
 End for each
```

```
{
    "firstname": "GREGORY",
    "lastname": "BADIKORA",
    "age": 20
}
```

### Paramètres début / fin

Vous pouvez définir des bornes pour l'itération à l'aide des paramètres optionnels début et fin.

**Note:** The _begin_ and _end_ parameters can only be used in iterations through collections and entity selections (they are ignored on object properties).

- In the _begin_ parameter, pass the element position in _Expression_ at which to start the iteration (_begin_ is included).
- In the _end_ parameter, you can also pass the element position in _Expression_ at which to stop the iteration (_end_ is excluded).

If _end_ is omitted or if _end_ is greater than the number of elements in _Expression_, elements are iterated from _begin_ until the last one (included).
If the _begin_ and _end_ parameters are positive values, they represent actual positions of elements in _Expression_.
If _begin_ is a negative value, it is recalculed as `begin:=begin+Expression size` (it is considered as the offset from the end of _Expression_). If the calculated value is negative, _begin_ is set to 0.
**Note:** Even if begin is negative, the iteration is still performed in the standard order.
If _end_ is a negative value, it is recalculed as `end:=end+Expression size`

Par exemple :

- une collection contient 10 éléments (numérotés de 0 à 9)
- début=-4 -> début=-4+10=6 -> l'itération démarre au 6e élément (numéro 5)
- fin=-2 -> fin=-2+10=8 -> l'itération stoppe avant le 8e élément (numéro 7), i.e. après le 7e élément.

#### Exemple

```4d
 var $col;$col2 : Collection
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 var $item : Text
 For each($item;$col;0;3)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c"]
 For each($item;$col;-2;-1)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c","d"]
```

### Conditions Until et While

You can control the `For each...End for each` execution by adding an `Until` or a `While` condition to the loop. When an `Until(condition)` statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to `True`, whereas when is case of a `While(condition)` statement, the iteration will stop when the condition is first evaluated to `False`.

Vous pouvez passer un mot-clé ou l'autre en fonction de vos besoins :

- The `Until` condition is tested at the end of each iteration, so if the _Expression_ is not empty or null, the loop will be executed at least once.
- The `While` condition is tested at the beginning of each iteration, so according to the condition result, the loop may not be executed at all.

#### Exemple

```4d
 $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)
 
 $total:=0
 For each($num;$colNum)While($total<30) //tested at the beginning
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)
 
 $total:=1000
 For each($num;$colNum)Until($total>30) //tested at the end
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 1001 (1000+1)
```

## break et continue

All looping structures above support both `break` and `continue` statements. Ces instructions vous donnent plus de contrôle sur les boucles en vous permettant de sortir de la boucle et de contourner, à tout moment, l'itération en cours.

### break

The `break` statement terminates the loop containing it. Le contrôle du programme passe à l'instruction située immédiatement après le corps de la boucle.

If the `break` statement is inside a [nested loop](#nested-forend-for-looping-structures) (loop inside another loop), the `break` statement will terminate the innermost loop.

#### Exemple

```4d
For (vCounter;1;100)
	If ($tab{vCounter}="") //if a condition becomes true
		break //end of the for loop
	End if
End for
```

### continue

The `continue` statement terminates execution of the statements in the current iteration of the current loop, and continues execution of the loop with the next iteration.

```4d
var $text : Text
For ($i; 0; 9)
	If ($i=3)
		continue //go directly to the next iteration
	End if
	$text:=$text+String($i)
End for
// $text="012456789" 

```

## return {expression}

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

The `return` statement can be called from anywhere. When a `return` statement is used in a function or method, the execution of the function or method is stopped. Le code restant n'est pas exécuté et le contrôle est renvoyé à l'appelant.

The `return` statement can be used to [return a value](parameters.md#return-expression) to the caller.

#### Exemple

```4d
var $message : Text
var $i : Integer

While (True) //infinite loop
	$i:=$i+1
	$message+=String($i)+"A\r"  // until 5
	logConsole($message)
	If ($i=5)
		return //stops the loop
	End if 
	$message+=String($i)+"B\r"  // until 4
	logConsole($message)
End while 
$message+=String($i)+"C\r"  //never executed 
logConsole($message)

// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

```
