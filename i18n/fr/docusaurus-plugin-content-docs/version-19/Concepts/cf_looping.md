---
id: looping
title: Structures répétitives (ou "boucles")
---

Les structures en boucle répètent une séquence d'instructions jusqu'à ce qu'une condition soit remplie ou qu'un certain nombre de fois est atteint.


## While...End while

La syntaxe de la structure répétitive (ou boucle) `While...End while` est la suivante :
```4d
 While(Expression_booléenne)
    instruction(s)
 End while
```
Une boucle `While...End while` exécute les instructions comprises entre `While` et `End while` aussi longtemps que l’expression booléenne est TRUE. Elle teste l’expression booléenne initiale et n’entre pas dans la boucle (et donc n'exécute aucune instruction) si l’expression est à FALSE.

Il est utile d’initialiser la valeur testée dans l’expression booléenne juste avant d’entrer dans la boucle `While...End while`. Initialiser la valeur signifie lui affecter un contenu approprié, généralement pour que l’expression booléenne soit TRUE et que le programme entre dans la boucle.

La valeur de l'expression booléenne doit pouvoir être modifiée par un élément situé à l'intérieur de la boucle, sinon elle s'exécutera indéfiniment. La boucle suivante est sans fin car _NeverStop_ est toujours TRUE :
```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

Si vous vous retrouvez dans une telle situation (où une méthode s'exécute de manière incontrôlée), vous pouvez utiliser les fonctions de débogage de 4D et remonter à la source du problème. Pour plus d'informations sur ce point, reportez-vous à la section [Débogueur](error-handling.md).

### Exemple

```4d
 CONFIRM("Add a new record?") //L'utilisateur souhaite-t-il ajouter un enregistrement ? CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) // Tant que l'utilisateur accepte
    ADD RECORD([aTable]) // Ajouter un nouvel enregistrement
End while // Une boucle While se termine toujours par End while
```

Dans cet exemple, la valeur de la variable système `OK` est définie par la commande `CONFIRM` avant que le programme n’entre dans la boucle. Si l’utilisateur clique sur le bouton **OK** dans la boîte de dialogue de confirmation, la variable `OK` prend la valeur 1 et la boucle est exécutée. Dans le cas contraire, la variable `OK` prend la valeur 0 et la boucle est ignorée. Une fois que le programme entre dans la boucle, la commande `ADD RECORD` permet de continuer à l’exécuter car elle met la variable système `OK` à 1 lorsque l’utilisateur sauvegarde l’enregistrement. Lorsque l’utilisateur annule (ne valide pas) le dernier enregistrement, la variable système `OK` prend la valeur 0 et la boucle s’arrête.

## Repeat...Until

La syntaxe de la structure répétitive (ou boucle) `Repeat...Until` est la suivante :
```4d
 Repeat
    instruction(s)
 Until(Boolean_Expression)
```
La boucle `Repeat...Until` est semblable à la boucle [While...End while](flow-control.md#whileend-while), à la différence qu’elle teste la valeur de l’expression booléenne après l’exécution de la boucle et non avant. Ainsi, la boucle est toujours exécutée au moins une fois, tandis que si l’expression booléenne est initialement à Faux, la boucle `While...End while` ne s’exécute pas du tout.

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

- La variable compteur *Counter_Variable* est une variable numérique (Réel ou Entier long) initialisée par `For...End for` à la valeur spécifiée par *Start_Expression*.
- La variable Variable_Compteur est incrémentée de la valeur spécifiée par le paramètre optionnel *Increment_Expression* à chaque fois que la boucle est exécutée. Si vous ne passez pas de valeur dans *Increment_Expression*, la variable compteur est incrémentée par défaut de un (1).
- Lorsque le compteur atteint la valeur définie par *End_Expression*, la boucle s'arrête.

**Important :** Les expressions numériques *Start_Expression*, *End_Expression* et *Increment_Expression* sont évaluées une seule fois, au début de la boucle. Si ces expressions sont des variables, leur modification depuis l'intérieur de la boucle n'affectera pas l'exécution de la boucle.

**Astuce :** En revanche, vous pouvez, si vous le souhaitez, modifier la valeur de la variable *Counter_Variable* depuis l'intérieur de la boucle et cela affectera l'exécution de la boucle.

- Généralement, *Start_Expression* est inférieure à *End_Expression*.
- Si les deux expressions sont égales, la boucle ne sera exécutée qu'une fois.
- Si *Start_Expression* est supérieure à *End_Expression*, la boucle ne s'exécutera pas du tout, à moins que vous ne spécifiiez une *Increment_Expression* négative. Reportez-vous ci-dessous au paragraphe décrivant ce point.

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

La plupart des structures `For...End for` que vous écrirez dans vos projets ressembleront à celles présentées ci-dessus.

### Décrémenter la variable Compteur

Dans certains cas, vous pouvez souhaiter disposer d'une boucle dont la valeur de la variable compteur décroît au lieu de croître. Pour cela, *Start_Expression* doit être supérieure à *End_Expression* et *Increment_Expression* doit être négative. Les exemples suivants effectuent les mêmes tâches que les précédents, mais en sens inverse :

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

Si vous le souhaitez, vous pouvez passer dans *Increment_Expression* une valeur (positive ou négative) dont la valeur absolue est supérieure à un.

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
**Astuce :** La boucle `For...End for` est généralement plus rapide que les boucles `While...End while` et `Repeat...Until` car 4D teste la condition en interne pour chaque cycle de la boucle et incrémente lui-même le compteur. Par conséquent, nous vous conseillons de préférer à chaque fois que c'est possible la structure `For...End for`.

### Optimiser l'exécution de For...End for

Vous pouvez utiliser comme compteur une variable interprocess, process ou locale, et lui attribuer le type Réel, Entier ou Entier long. Pour des boucles longues, et particulièrement en mode compilé, nous vous conseillons d'employer des variables locales de type Entier long.

10. Voici un exemple :

```4d
 C_LONGINT($vlCounter) // Utilisons une variable locale de type Entier long
For($vlCounter;1;10000)
  // Faire quelque chose
  End for
```

### Structures For...End for emboîtées

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

La structure `For each...End for each` exécute le cycle d'instructions définies pour chaque *Elément_courant* de *Expression*. Le type de *Elément_courant* dépend du type de *Expression*. La boucle `For each...End for each` peut itérer parmi trois types d'*Expression* :

- collections : boucle sur chaque élément de la collection,
- entity selections : boucle sur chaque entity,
- objets : boucle sur chaque propriété d'objet.

Le tableau suivant compare les trois types de `Pour chaque...Fin de chaque` :

|                                           | Boucle sur collections                                  | Boucle sur entity selections       | Boucle sur objets             |
| ----------------------------------------- | ------------------------------------------------------- | ---------------------------------- | ----------------------------- |
| Type Current_Item                         | Variable du même type que les éléments de la collection | Entity                             | Variable texte                |
| Types d’expressions                       | Collection (avec des éléments du même type)             | Entity selection                   | Object                        |
| Nombre de boucles (par défaut)            | Nombre d'éléments de la collection                      | Nombre d'entités dans la sélection | Nombre de propriétés d'objets |
| Prise en charge de Paramètres début / fin | Oui                                                     | Oui                                | Non                           |

- Le nombre de boucles est évalué au démarrage et ne changera pas en cours de traitement. L'ajout ou la suppression d'éléments pendant la boucle est donc déconseillé car il pourra en résulter une redondance ou un manque d'itérations.
- Par défaut, les _instructions_ incluses sont exécutées pour chaque valeur de *Expression*. Il est toutefois possible de sortir de la boucle en testant une condition soit au début de chaque itération (`While`) ou à la fin de chaque itération (`Until`).
- Les paramètres optionnels *début* et *fin* peuvent être utilisés avec les collections et les entity selections afin de définir des bornes pour la boucle.
- La boucle `For each...End for each` peut être utilisée sur une **collection partagée** ou un **objet partagé**. Si vous souhaitez modifier un ou plusieurs éléments des propriétés d'objets ou de la collection dans le code, vous devez utiliser les mots-clés `Use...End use`. Vous pouvez, si vous le souhaitez, appeler les mots-clés `Use...End use` :
    - avant de saisir la boucle, si les éléments doivent être modifiés ensemble pour des raisons d'intégrité, ou bien
    - dans la boucle, lorsque quelques éléments/propriétés seulement doivent être modifiés et qu'aucune gestion de l'intégrité n'est requise.

### Boucle sur collections

Lorsque `For each...End for each` est utilisée avec une _Expression_ de type _Collection_, le paramètre _Elément_courant_ est une variable du même type que les éléments de la collection. Par défaut, le nombre de boucles est basé sur le nombre d'éléments de la collection.

La collection doit contenir uniquement des éléments du même type. Dans le cas contraire, une erreur sera retournée dès que la première valeur de type différent sera assignée à la variable _Elément_courant_.

A chaque itération de la boucle, la variable _Elément_courant_ reçoit automatiquement l'élément correspondant de la collection. Vous devez tenir compte des points suivants :

- If the _Current_Item_ variable is of the object type or collection type (i.e. Si la variable est de type scalaire, seule la variable sera modifiée.
- If the _Current_Item_ variable is of the object type or collection type (i.e. Si un seul élément de la collection n'est pas du même type que la variable, une erreur est générée et la boucle s'arrête.
- Si la collection contient des éléments de valeur **Null**, une erreur sera générée si le type de la variable _Elément_courant_ ne prend pas en charge la valeur **Null** (comme par exemple les variables entier long).

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

Lorsque `For each...End for each` est utilisée avec une _Expression_ de type _Entity selection_, le paramètre _Elément_courant_ contient l'entity en cours de traitement.

Le nombre de boucles est basé sur le nombre d'entities présentes dans l'entity selection. A chaque itération de la boucle, le paramètre *Elément_courant* reçoit automatiquement l'entity qui est en cours de traitement.

**Note :** Si l'entity selection contient une entity qui a été supprimée entre-temps par un autre process, elle est automatiquement ignorée durant la boucle.

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

Lorsque `For each...End for each` est utilisée avec une *Expression* de type Objet, le paramètre *Elément_courant* est une variable texte qui reçoit automatiquement le nom de la propriété en cours de traitement.

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
### Paramètres begin / end

Vous pouvez définir des bornes pour l'itération à l'aide des paramètres optionnels begin et end.

**Note :** Les paramètres *début* et *fin* sont utilisables uniquement avec les boucles sur des collections et des entity selections (ils sont ignorés avec les boucles sur des propriétés d'objets).

- Dans le paramètre *début*, passez la position de l'élément de *Expression* auquel démarrer l'itération (*début* est inclus).
- Dans le paramètre *fin*, vous pouvez passer la position de l'élément de *Expression* auquel stopper l'itération (*fin* est exclus).

Si *fin* est omis ou si *fin* est plus grand que le nombre d'éléments de *Expression*, les éléments sont itérés depuis *début* jusqu'au dernier inclus. Si les paramètres *début* et *fin* sont des valeurs positives, ils représentent des positions d'éléments dans *Expression*. Si *begin* est une valeur négative, elle est recalculée comme `begin:=begin+Taille expression` (elle est considérée comme un décalage à partir de la fin de *Expression*). Si la valeur calculée est négative, *begin* prend la valeur 0. **Note :** Même si début est une valeur négative, l'itération est toujours effectuée dans le même ordre. Si *fin* est une valeur négative, elle est recalculée comme `fin:=fin+Taille expression`

Par exemple :
- une collection contient 10 éléments (numérotés de 0 à 9)
- début=-4 > début=-4+10=6 > l'itération démarre au 6e élément (numéro 5)
- fin=-2 > fin=-2+10=8 > l'itération stoppe avant le 8e élément (numéro 7), i.e.

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

Vous pouvez contrôler l'exécution de `For each...End for each` en ajoutant une condition `Jusque` ou `Tant que` à la boucle. Lorsqu'une instruction `Until(condition)` est associée à la boucle, l'itération stoppe dès que la condition est évaluée à `True`, tandis que dans le cas d'une instruction `While(condition)`, l'itération stoppe dès que la condition est évaluée à `False`.

Vous pouvez passer un mot-clé ou l'autre en fonction de vos besoins :

- La condition `Until` est testée à la fin de chaque itération, donc si *Expression* n'est ni vide ni Null, la boucle sera exécutée au moins une fois.
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

