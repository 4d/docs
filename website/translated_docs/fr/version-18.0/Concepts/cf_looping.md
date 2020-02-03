---
id: version-18.0-looping
title: Structures répétitives (ou "boucles")
original_id: looping
---

## While...End while
La syntaxe de la structure répétitive (ou boucle) `While...End while` est la suivante :
```4d
 While(Expression_booléenne)
    instruction(s)
 End while
```
Une boucle `While...End while` exécute les instructions comprises entre `While` et `End while` aussi longtemps que l’expression booléenne est TRUE. Elle teste l’expression booléenne initiale et n’entre pas dans la boucle (et donc n'exécute aucune instruction) si l’expression est à FALSE.

Il est utile d’initialiser la valeur testée dans l’expression booléenne juste avant d’entrer dans la boucle `While...End while`. Initialiser la valeur signifie lui affecter un contenu approprié, généralement pour que l’expression booléenne soit TRUE et que le programme entre dans la boucle.

La valeur de l'expression booléenne doit pouvoir être modifiée par un élément situé à l'intérieur de la boucle, sinon elle s'exécutera indéfiniment. The following loop continues forever because _NeverStop_ is always TRUE:
```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

Si vous vous retrouvez dans une telle situation (où une méthode s'exécute de manière incontrôlée), vous pouvez utiliser les fonctions de débogage de 4D et remonter à la source du problème. Pour plus d'informations sur ce point, reportez-vous à la section [Débogueur](error-handling.md).

### Exemple

```4d
 CONFIRM("Add a new record?") // Est-ce que l'utilisateur veut ajouter un enregistrement?
 While(OK=1) // Tant que l'utilisateur accepte
    ADD RECORD([aTable]) // Ajouter un nouvel enregistrement
End while // Une boucle While se termine toujours par End while
```

Dans cet exemple, la valeur de la variable système `OK` est définie par la commande `CONFIRM` avant que le programme n’entre dans la boucle. If the user clicks the **OK** button in the confirmation dialog box, the `OK` system variable is set to 1 and the loop starts. Dans le cas contraire, la variable `OK` prend la valeur 0 et la boucle est ignorée. Une fois que le programme entre dans la boucle, la commande `ADD RECORD` permet de continuer à l’exécuter car elle met la variable système `OK` à 1 lorsque l’utilisateur sauvegarde l’enregistrement. Lorsque l’utilisateur annule (ne valide pas) le dernier enregistrement, la variable système `OK` prend la valeur 0 et la boucle s’arrête.

## Repeat...Until

La syntaxe de la structure répétitive (ou boucle) `Repeat...Until` est la suivante :
```4d
 Repeat
    instruction(s)
 Until(Boolean_Expression)
```
La boucle `Repeat...Until` est semblable à la boucle [While...End while](flow-control#whileend-while), à la différence qu’elle teste la valeur de l’expression booléenne après l’exécution de la boucle et non avant. Ainsi, la boucle est toujours exécutée au moins une fois, tandis que si l’expression booléenne est initialement à Faux, la boucle `While...End while` ne s’exécute pas du tout.

L'autre particularité de la boucle `Repeat...Until` est qu’elle se poursuit jusqu’à ce que l’expression booléenne soit à TRUE.

### Exemple
Comparez l’exemple suivant avec celui de la boucle `While...End while`. Vous constatez qu’il n’est pas nécessaire d’initialiser l’expression booléenne — il n’y a pas de commande `CONFIRM` pour initialiser la variable `OK`.

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
```

## For...End for
La syntaxe de la structure répétitive `For...End for` est la suivante :

```4d
 For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
    instruction(s)
 End for
```

La structure `For...End for` est une boucle contrôlée par un compteur :

- The counter variable *Counter_Variable* is a numeric variable (Real or Long Integer) that the `For...End for` loop initializes to the value specified by *Start_Expression*.
- Each time the loop is executed, the counter variable is incremented by the value specified in the optional value *Increment_Expression*. If you do not specify *Increment_Expression*, the counter variable is incremented by one (1), which is the default.
- When the counter variable passes the *End_Expression* value, the loop stops.

**Important:** The numeric expressions *Start_Expression*, *End_Expression* and *Increment_Expression* are evaluated once at the beginning of the loop. Si ces expressions sont des variables, leur modification depuis l'intérieur de la boucle n'affectera pas l'exécution de la boucle.

**Tip:** However, for special purposes, you can change the value of the counter variable *Counter_Variable* within the loop; this will affect the loop.

- Usually *Start_Expression* is less than *End_Expression*.
- If *Start_Expression* and *End_Expression* are equal, the loop will execute only once.
- If *Start_Expression* is greater than *End_Expression*, the loop will not execute at all unless you specify a negative *Increment_Expression*. Reportez-vous ci-dessous au paragraphe décrivant ce point.

### Exemples élémentaires
1. La boucle suivante s'exécute 100 fois :

```4d
 For(vCounter;1;100)
  //Faire quelque chose
 End for
```

2. L'exemple suivant permet de traiter tous les éléments du tableau anArray :

```4d
 For($vlElem;1;Size of array(anArray))
  //Faire quelque chose avec l'élément
    anArray{$vlElem}:=...
 End for
```

3. L'exemple suivant permet d'examiner chaque caractère du texte vtSomeText :

```4d
 For($vlChar;1;Length(vtSomeText))
  //Faire quelque chose avec le caractère si c'est une tabulation
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

4. L'exemple suivant permet de traiter tous les enregistrements de la sélection de la table [aTable] :

```4d
 FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  //Faire quelque chose avec chaque enregistrement
    SEND RECORD([aTable])
  //...
  // Passer à l'enregistrement suivant
    NEXT RECORD([aTable])
 End for
```

La plupart des structures `For...End for` que vous écrirez dans vos bases ressembleront à celles présentées ci-dessus.

### Décrémenter la variable Compteur

Dans certains cas, vous pouvez souhaiter disposer d'une boucle dont la valeur de la variable compteur décroît au lieu de croître. To do so, you must specify *Start_Expression* greater than *End_Expression* and a negative *Increment_Expression*. Les exemples suivants effectuent les mêmes tâches que les précédents, mais en sens inverse :

5. La boucle suivante s'exécute 100 fois :

```4d
 For(vCounter;100;1;-1)
  //Faire quelque chose
 End for
```

6. L'exemple suivant permet de traiter tous les éléments du tableau anArray :

```4d
 For($vlElem;Size of array(anArray);1;-1)
  //Faire quelque chose avec l'élément
    anArray{$vlElem}:=...
 End for
```

7. L'exemple suivant permet d'examiner chaque caractère du texte vtSomeText :

```4d
 For($vlChar;Length(vtSomeText);1;-1)
  //Faire quelque chose avec le caractère si c'est une tabulation
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

8. L'exemple suivant permet de traiter tous les enregistrements de la sélection de la table [aTable] :

```4d
 LAST RECORD([aTable])
 For($vlRecord;Records in selection([aTable]);1;-1)
  //Faire quelque chose avec chaque enregistrement
    SEND RECORD([aTable])
  //...
  //Passer à l'enregistrement précédent
    PREVIOUS RECORD([aTable])
 End for
```

### Incrementer la variable compteur de plus de 1

If you need to, you can use an *Increment_Expression* (positive or negative) whose absolute value is greater than one.

9. La boucle suivante ne traite que les éléments pairs du tableau anArray :

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Faire quelque chose avec l'élément 2,4...2n
    anArray{$vlElem}:=...
 End for
```


### Comparaison des structures répétitives

Revenons au premier exemple `For...End for`. La boucle suivante s'exécute 100 fois :
```4d
 For(vCounter;1;100)
  //Faire quelque chose
 End for
```

Il est intéressant d'examiner la manière dont les boucles `While...End while` et `Repeat...Until` effectuent la même action. Voici la boucle `While...End while` équivalente :
```4d
 $i :=1 // Initialisation du compteur
While ($i<=100) // Boucle 100 fois
  // Faire quelque chose
    $i :=$i +1 // Il faut incrémenter le compteur
 End while
```

Voici la boucle `Repeat...Until` équivalente :
```4d
 $i :=1 // Initialisation du compteur
 Repeat
  // Faire quelque chose
    $i :=$i +1 // Il faut incrémenter le compteur
Until($i=100) // Boucle 100 fois
```
**Tip:** The `For...End for` loop is usually faster than the `While...End while` and `Repeat...Until` loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Par conséquent, nous vous conseillons de préférer à chaque fois que c'est possible la structure `For...End for`.

### Optimiser l'exécution de For...End for

Vous pouvez utiliser comme compteur une variable interprocess, process ou locale, et lui attribuer le type Réel, Entier ou Entier long. Pour des boucles longues, et particulièrement en mode compilé, nous vous conseillons d'employer des variables locales de type Entier long.

10. Voici un exemple :

```4d
 C_LONGINT($vlCounter) // Utilisons une variable locale de type Entier long
For($vlCounter;1;10000)
  // Faire quelque chose
  End for
```

### Structures For...End emboîtées

Vous pouvez emboîter autant de structures répétitives que vous voulez (dans les limites du raisonnable). Cela s'applique aux structures de type `For...End for`. Il y a dans ce cas une erreur courante à éviter : assurez-vous d'utiliser une variable compteur différente par structure de boucle.

Voici deux exemples :

11. L'exemple suivant permet de traiter tous les éléments d'un tableau à deux dimensions :

```4d
 For($vlElem;1;Size of array(anArray))
  //...
  // Faire quelque chose avec la ligne
  // ...
    For($vlSubElem;1;Size of array(anArray{$vlElem}))
  //Faire quelque chose avec l'élément
       anArray{$vlElem}{$vlSubElem}:=...
    End for
 End for
```

12. L'exemple suivant construit un tableau de pointeurs vers tous les champs de type Date présents dans la base :

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
La syntaxe de la structure répétitive (ou boucle) `For each...End for each` est la suivante :

```4d
 For each(Element_courant;Expression{;debut{;fin}}){Until|While}(Expression_booléenne)}
    instruction(s)
 End for each
```

The `For each...End for each` structure iterates a specified *Current_item* over all values of the *Expression*. The *Current_item* type depends on the *Expression* type. The `For each...End for each` loop can iterate through three *Expression* types:

- collections : boucle sur chaque élément de la collection,
- entity selections : boucle sur chaque entity,
- objets : boucle sur chaque propriété d'objet.

Le tableau suivant compare les trois types de `Pour chaque...Fin de chaque` :

|                                           | Boucle sur collections                                  | Boucle sur entity selections       | Boucle sur objets             |
| ----------------------------------------- | ------------------------------------------------------- | ---------------------------------- | ----------------------------- |
| Type Elément_courant                      | Variable du même type que les éléments de la collection | Entity                             | Variable texte                |
| Types d’expressions                       | Collection (avec des éléments du même type)             | Entity selection                   | Objet                         |
| Nombre de boucles (par défaut)            | Nombre d'éléments de la collection                      | Nombre d'entités dans la sélection | Nombre de propriétés d'objets |
| Prise en charge de Paramètres début / fin | Oui                                                     | Oui                                | Non                           |

- Le nombre de boucles est évalué au démarrage et ne changera pas en cours de traitement. L'ajout ou la suppression d'éléments pendant la boucle est donc déconseillé car il pourra en résulter une redondance ou un manque d'itérations.
- By default, the enclosed _statement(s)_ are executed for each value in *Expression*. Il est toutefois possible de sortir de la boucle en testant une condition soit au début de chaque itération (`While`) ou à la fin de chaque itération (`Until`).
- The *begin* and *end* optional parameters can be used with collections and entity selections to define boundaries for the loop.
- The `For each...End for each` loop can be used on a **shared collection** or a **shared object**. Si vous souhaitez modifier un ou plusieurs éléments des propriétés d'objets ou de la collection dans le code, vous devez utiliser les mots-clés `Use...End use`. Vous pouvez, si vous le souhaitez, appeler les mots-clés `Use...End use` :
    - avant de saisir la boucle, si les éléments doivent être modifiés ensemble pour des raisons d'intégrité, ou bien
    - dans la boucle, lorsque quelques éléments/propriétés seulement doivent être modifiés et qu'aucune gestion de l'intégrité n'est requise.

### Boucle sur collections

When `For each...End for each` is used with an _Expression_ of the _Collection_ type, the _Current_Item_ parameter is a variable of the same type as the collection elements. Par défaut, le nombre de boucles est basé sur le nombre d'éléments de la collection.

The collection must contain only elements of the same type, otherwise an error will be returned as soon as the _Current_Item_ variable is assigned the first mismatched value type.

At each loop iteration, the _Current_Item_ variable is automatically filled with the matching element of the collection. Vous devez tenir compte des points suivants :

- If the _Current_Item_ variable is of the object type or collection type (i.e. if _Expression_ is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). Si la variable est de type scalaire, sa modification ne sera pas répercutée sur l'élément de la collection.
- The _Current_Item_ variable must be of the same type as the collection elements. Si un seul élément de la collection n'est pas du même type que la variable, une erreur est générée et la boucle s'arrête.
- If the collection contains elements with a **Null** value, an error will be generated if the _Current_Item_ variable type does not support **Null** values (such as longint variables).

#### Exemple

Vous souhaitez calculer quelques statistiques sur une collection de nombres :
```4d
 C_COLLECTION($nums)
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)
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

Le nombre de boucles est basé sur le nombre d'entities présentes dans l'entity selection. On each loop iteration, the *Current_Item* parameter is automatically filled with the entity of the entity selection that is currently processed.

**Note:** If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop.

N'oubliez pas que toute modification effectuée sur l'entity en cours de traitement doit être explicitement sauvegardée (si nécessaire) à l'aide de la méthode `entity.save( )`.

#### Exemple

Vous souhaitez augmenter le salaire de tous les employés britanniques dans une entity selection :
```4d
 C_OBJECT(emp)
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Boucles sur des propriétés d'objets

When `For each...End for each` is used with an *Expression* of the Object type, the *Current_Item* parameter is a text variable automatically filled with the name of the currently processed property.

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
 For each(property;vObject)
    If(Value type(vObject[property])=Is text)
       vObject[property]:=Uppercase(vObject[property])
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

**Note:** The *begin* and *end* parameters can only be used in iterations through collections and entity selections (they are ignored on object properties).

- In the *begin* parameter, pass the element position in *Expression* at which to start the iteration (*begin* is included).
- In the *end* parameter, you can also pass the element position in *Expression* at which to stop the iteration (*end* is excluded).

If *end* is omitted or if *end* is greater than the number of elements in *Expression*, elements are iterated from *begin* until the last one (included). If the *begin* and *end* parameters are positive values, they represent actual positions of elements in *Expression*. If *begin* is a negative value, it is recalculed as `begin:=begin+Expression size` (it is considered as the offset from the end of *Expression*). If the calculated value is negative, *begin* is set to 0. **Note:** Even if begin is negative, the iteration is still performed in the standard order. If *end* is a negative value, it is recalculed as `end:=end+Expression size`

Par exemple:
- une collection contient 10 éléments (numérotés de 0 à 9)
- begin=-4 -> begin=-4+10=6 -> iteration starts at the 6th element (#5)
- end=-2 -> end=-2+10=8 -> iteration stops before the 8th element (#7), i.e. at the 7th element.

#### Exemple

```4d
 C_COLLECTION($col;$col2)
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 C_TEXT($item)
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
Vous pouvez contrôler l'exécution de `For each...End for each` en ajoutant une condition `Jusque` ou `Tant que` à la boucle. Lorsqu'une instruction `Until(condition)` ou `While(condition)` est associée à la boucle, l'itération stoppe dès que la condition est évaluée à True.

Vous pouvez passer un mot-clé ou l'autre en fonction de vos besoins :

- The `Until` condition is tested at the end of each iteration, so if the *Expression* is not empty or null, the loop will be executed at least once.
- La condition `While` est testée au début de chaque itération, donc en fonction du résultat de la condition, la boucle peut ne pas être exécutée du tout.

#### Exemple

```4d
 $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)

 $total:=0
 For each($num;$colNum)While($total<30) //testé au début
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)

 $total:=1000
 For each($num;$colNum)Until($total>30) //testé à la fin
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 1001 (1000+1)
```

