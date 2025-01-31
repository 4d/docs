---
id: control-flow
title: Conditions et boucles
---

Quelle que soit la simplicité ou la complexité d’une méthode ou d'une fonction, vous utiliserez toujours un ou plusieurs types de structure de programmation. Les structures de programmation déterminent si et dans quel ordre les lignes d’instructions sont exécutées à l’intérieur d’une méthode. Il existe trois types de structures :

- **Séquentielle**: une structure séquentielle est une structure simple et linéaire. Une séquence est une série d'instructions que 4D exécute l'une après l'autre, de la première à la dernière. Une routine d'une ligne, fréquemment utilisée pour les méthodes objets, est le cas le plus simple d'une structure séquentielle. Par exemple : `[People]lastName:=Uppercase([People]lastName)`
- **Conditionnelle** : une structure conditionnelle permet aux méthodes de tester une condition et d’exécuter des séquences d’instructions différentes en fonction du résultat. La condition est une expression booléenne, c'est-à-dire une expression qui est évaluée à vrai ou faux. Une structure conditionnelle est la structure [`If...Else...End if`](#ifelseend-if), qui dirige le flux du programme le long de l'une des deux voies. L'autre structure conditionnelle est la structure [`Case of...Else...End case`](#case-ofelseend-case), qui aiguille le programme parmi une ou plusieurs alternatives.
- **Répétitive** : Il est très courant, lorsque vous écrivez des méthodes, de rencontrer des cas où vous devez répéter une séquence d’instructions un certain nombre de fois. Pour traiter ces besoins, le langage 4D vous propose plusieurs structures répétitives :

  - [`While...End while`](#whileend-while)
  - [`Repeat...Until`](#repeatuntil)
  - [`For...End for`](#forend-for)
  - [`For each...End for each`](#for-eachend-for-each)

Les boucles sont contrôlées de deux manières : soit elles bouclent jusqu'à ce qu'une condition soit remplie, soit elles bouclent un certain nombre de fois. Chaque structure répétitive peut être utilisée de l’une ou l’autre manière, mais les boucles `While` et `Repeat` sont mieux adaptées à la répétition jusqu’à ce qu’une condition soit remplie, alors que les boucles `For` sont mieux adaptées à la répétition  `For each...End for each`, destinée à effectuer des boucles dans les objets et les collections, permet de combiner les deux manières.

**Note :** 4D vous permet d’imbriquer des structures de programmation jusqu’à une “profondeur” de 512 niveaux.

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

L'expression n'est TRUE que si les deux méthodes sont mises à TRUE. Or, même si *MethodA* retourne FALSE, 4D évaluera quand même *MethodB*, ce qui représente une perte de temps inutile. Dans ce cas, il est préférable d'utiliser une structure du type :

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

Le résultat est équivalent et *MethodB* est évaluée seulement si nécessaire.

> **Note :** L'[opérateur ternaire](operators.md#ternary-operator) permet d'écrire des expressions conditionnelles sur une seule ligne et peut remplacer une séquence complète d'instructions If...Else.

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

## Case of...Else...End case

La syntaxe de la structure conditionnelle `Case of...Else...End case` est la suivante :

```4d
 Case of
    :(Boolean_Expression)
       instruction(s)
    :(Boolean_Expression)
       instruction(s)
       .
       .
       .
 
    :(Boolean_Expression)
       instruction(s)
    Else
       instruction(s)
 End case
```

A noter que l'élément `Else` est optionnel, vous pouvez écrire :

```4d
 Case of
    :(Boolean_Expression)
       instruction(s)
    :(Boolean_Expression)
       instruction(s)
       .
       .
       .
 
    :(Boolean_Expression)
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

A titre de comparaison, voici la version avec `If...Else...End if` de la même méthode :

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

Rappelez-vous qu’avec une structure de type `Case of...Else...End case`, seul le premier cas TRUE rencontré est exécuté. Même si d’autres cas sont TRUE, seules les instructions suivant le premier cas TRUE seront prises en compte.

Par conséquent, lorsque vous testez dans la même méthode des cas simples et des cas complexes, vous devez placer les cas complexes avant les cas simples, sinon ils ne seront jamais exécutés. Par exemple, si vous souhaitez traiter le cas simple (vResult=1) et le cas complexe (vResult=1) & (vCondition#2) et que vous structurez la méthode de la manière suivante :

```4d
 Case of
    :(vResult=1)
       ... //instruction(s)
    :((vResult=1) & (vCondition#2)) //ce cas ne sera jamais détecté
       ... //instruction(s)
 End case
```

... les instructions associées au cas complexe ne seront jamais exécutées. En effet, pour que ce cas soit TRUE, ses deux conditions booléennes doivent l’être. Or, la première condition est celle du cas simple situé précédemment. Lorsqu'elle est TRUE, le cas simple est exécuté et 4D sort de la structure conditionnelle, sans évaluer le cas complexe. Pour que ce type de méthode fonctionne, vous devez écrire :

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //ce cas sera détecté en premier
       ... //instruction(s)
    :(vResult=1)
       ... //instruction(s)
 End case
```



**Astuce :** Il n'est pas obligatoire que des instructions soient exécutées dans toutes les alternatives. Lorsque vous développez un algorithme, ou lorsque vous poursuivez un but précis, rien ne vous empêche d'écrire :

```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
      ...
 
    :(Boolean_Expression)
       instruction(s)
    Else
       instruction(s)
 End case
```

ou :

```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
       instruction(s)
       ...
        
    :(Boolean_Expression)
       instruction(s)
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

La syntaxe de la structure répétitive (ou boucle) `While...End while` est la suivante :

```4d
 While(Boolean_Expression)
 	instruction(s)
    {break}  
    {continue}
 End while
```

Une boucle `While...End while` exécute les instructions comprises entre `While` et `End while` aussi longtemps que l’expression booléenne est TRUE. Elle teste l’expression booléenne initiale et n’entre pas dans la boucle (et donc n'exécute aucune instruction) si l’expression est à FALSE.

Les instructions `break` et `continue` sont [décrites ci-dessous](#break-and-continue).

Il est utile d’initialiser la valeur testée dans l’expression booléenne juste avant d’entrer dans la boucle `While...End while`. Initialiser la valeur signifie lui affecter un contenu approprié, généralement pour que l’expression booléenne soit TRUE et que le programme entre dans la boucle.

La valeur de l'expression booléenne doit pouvoir être modifiée par un élément situé à l'intérieur de la boucle, sinon elle s'exécutera indéfiniment. La boucle suivante continue indéfiniment car *NeverStop* est toujours TRUE :

```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

Si vous vous retrouvez dans une telle situation (où une méthode s'exécute de manière incontrôlée), vous pouvez utiliser les fonctions de débogage de 4D et remonter à la source du problème. Pour plus d'informations sur ce point, reportez-vous à la section [Débogueur](error-handling.md).

#### Exemple

```4d
 CONFIRM("Ajouter un nouvel enregistrement?") //L'utilisateur veut ajouter un enregistrement?
 While(OK=1) //Tant que l'utilisateur accepte
    ADD RECORD([aTable]) //Ajouter un nouvel enregistrement
 End while //La boucle se termine toujours avec End while
```

Dans cet exemple, la valeur de la variable système `OK` est définie par la commande `CONFIRM` avant que le programme n’entre dans la boucle. Si l’utilisateur clique sur le bouton **OK** dans la boîte de dialogue de confirmation, la variable `OK` prend la valeur 1 et la boucle est exécutée. Dans le cas contraire, la variable `OK` prend la valeur 0 et la boucle est ignorée. Une fois que le programme entre dans la boucle, la commande `ADD RECORD` permet de continuer à l’exécuter car elle met la variable système `OK` à 1 lorsque l’utilisateur sauvegarde l’enregistrement. Lorsque l’utilisateur annule (ne valide pas) le dernier enregistrement, la variable système `OK` prend la valeur 0 et la boucle s’arrête.

## Repeat...Until

La syntaxe de la structure répétitive (ou boucle) `Repeat...Until` est la suivante :

```4d
Repeat
	instruction(s)
    {break}  
    {continue}
Until(Boolean_Expression)
```

La boucle `Repeat...Until` est semblable à la boucle [While...End while](flow-control.md#whileend-while), à la différence qu’elle teste la valeur de l’expression booléenne après l’exécution de la boucle et non avant. Ainsi, la boucle est toujours exécutée au moins une fois, tandis que si l’expression booléenne est initialement à Faux, la boucle `While...End while` ne s’exécute pas du tout.

L'autre particularité de la boucle `Repeat...Until` est qu’elle se poursuit jusqu’à ce que l’expression booléenne soit à TRUE.

Les instructions `break` et `continue` sont [décrites ci-dessous](#break-and-continue).

#### Exemple

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
   statement(s)
    {break}  
    {continue}
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

Les instructions `break` et `continue` sont [décrites ci-dessous](#break-and-continue).

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
  //Faire quelque chose avec l'élément
    anArray{$vlElem}:=...
 End for
```

3. L'exemple suivant permet d'examiner chaque caractère du texte vtSomeText :

```4d
 For($vlChar;1;Length(vtSomeText))
  //Faire quelque chose avec le caractère si c'est un TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

4. L'exemple suivant permet de traiter tous les enregistrements de la sélection de la table [aTable] :

```4d
 FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  //Faire quelque chose avec l'enregistrement
    SEND RECORD([aTable])
  //...
  // Aller au suivant
    NEXT RECORD([aTable])
 End for
```

La plupart des structures `For...End for` que vous écrirez dans vos projets ressembleront à celles présentées ci-dessus.

### Variable compteur

#### Décrémenter la variable compteur

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
  //Faire quelque chose avec le caractère si c'est un TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

8. L'exemple suivant permet de traiter tous les enregistrements de la sélection de la table [aTable] :

```4d
 LAST RECORD([aTable])
 For($vlRecord;Records in selection([aTable]);1;-1)
  //Faire quelque chose avec l'enregistrement
    SEND RECORD([aTable])
  //...
  // Aller au précédent
    PREVIOUS RECORD([aTable])
 End for
```

#### Incrementer la variable compteur de plus de 1

Si vous le souhaitez, vous pouvez passer dans *Increment_Expression* une valeur (positive ou négative) dont la valeur absolue est supérieure à un.

9. La boucle suivante ne traite que les éléments pairs du tableau anArray :

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Faire quelque chose avec l'élément #2,#4...#2n
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

Revenons au premier exemple `For...End for`. La boucle suivante s'exécute 100 fois :

```4d
 For(vCounter;1;100)
  //Faire quelque chose
 End for
```

Il est intéressant d'examiner la manière dont les boucles `While...End while` et `Repeat...Until` effectuent la même action. Voici la boucle `While...End while` équivalente :

```4d
 $i:=1 //Initialiser le compteur
 While($i<=100) //Boucler 100 fois
  //Faire quelque chose
    $i:=$i+1 //Il faut incrémenter le compteur
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

:::tip

La boucle `For...End for` est généralement plus rapide que les boucles `While...End while` et `Repeat...Until` , car 4D teste la condition en interne pour chaque cycle de la boucle et incrémente le compteur. Par conséquent, nous vous conseillons de préférer à chaque fois que c'est possible la structure `For...End for`.

:::

### Structures For...End for emboîtées

Vous pouvez emboîter autant de structures répétitives que vous voulez (dans les limites du raisonnable). Cela s'applique aux structures de type `For...End for`. Il y a dans ce cas une erreur courante à éviter : assurez-vous d'utiliser une variable compteur différente par structure de boucle.

Voici deux exemples :

1. L'exemple suivant permet de traiter tous les éléments d'un tableau à deux dimensions :

```4d
 For($vlElem;1;Size of array(anArray))
  //...
  //Faire quelque chose avec la ligne
  //...
    For($vlSubElem;1;Size of array(anArray{$vlElem}))
  //Faire quelque chose avec l'élément
       anArray{$vlElem}{$vlSubElem}:=...
    End for
 End for
```

2. L'exemple suivant construit un tableau de pointeurs vers tous les champs de type Date présents dans la base :

```4d
 ARRAY POINTER($apDateFields;0)
 $vlElem:=0
 For($vlTable;1;Last table number)
    If(Is table number valid($vlTable))
       For($vlField;1;Last field number($vlTable))
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
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
    {break}  
    {continue}
 End for each
```

La structure `For each...End for each` exécute le cycle d'instructions définies pour chaque *Current_Item* de *Expression*. Le type de *Current_item* dépend du type de *Expression*. La boucle `For each...End for each` peut itérer parmi trois types d'*Expression* :

- collections : boucle sur chaque élément de la collection,
- entity selections : boucle sur chaque entity,
- objets : boucle sur chaque propriété d'objet.

Le tableau suivant compare les trois types de `For each...End for each` :

|                                                   | Boucle sur collections                                         | Boucle sur entity selections       | Boucle sur objets             |
| ------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------- | ----------------------------- |
| Type Current_Item            | Variable du même type que les éléments de la collection        | Entity                             | Variable texte                |
| Types d’expressions                               | Collection (avec des éléments du même type) | Entity selection                   | Object                        |
| Nombre de boucles (par défaut) | Nombre d'éléments de la collection                             | Nombre d'entités dans la sélection | Nombre de propriétés d'objets |
| Prise en charge de Paramètres début / fin         | Oui                                                            | Oui                                | Non                           |

- Le nombre de boucles est évalué au démarrage et ne changera pas en cours de traitement. L'ajout ou la suppression d'éléments pendant la boucle est donc déconseillé car il pourra en résulter une redondance ou un manque d'itérations.
- Par défaut, les *statements* inclus sont exécutés pour chaque valeur de *Expression*. Il est toutefois possible de sortir de la boucle en testant une condition soit au début de chaque itération (`While`) ou à la fin de chaque itération (`Until`).
- Les paramètres optionnels *begin* et *end* peuvent être utilisés avec les collections et les entity selections afin de définir des bornes pour la boucle.
- La boucle `For each...End for each` peut être utilisée sur une **collection partagée** ou un **objet partagé**. Si vous souhaitez modifier un ou plusieurs éléments des propriétés d'objets ou de la collection dans le code, vous devez utiliser les mots-clés `Use...End use`. Vous pouvez, si vous le souhaitez, appeler les mots-clés `Use...End use` :
  - avant de saisir la boucle, si les éléments doivent être modifiés ensemble pour des raisons d'intégrité, ou bien
  - dans la boucle, lorsque quelques éléments/propriétés seulement doivent être modifiés et qu'aucune gestion de l'intégrité n'est requise.

Les instructions `break` et `continue` sont [décrites ci-dessous](#break-and-continue).

### Boucle sur collections

Lorsque `For each...End for each` est utilisé avec une *Expression* du type *Collection*, le paramètre *Current_Item* est une variable du même type que les éléments de la collection. Par défaut, le nombre de boucles est basé sur le nombre d'éléments de la collection.

La collection doit contenir uniquement des éléments du même type, sinon une erreur sera renvoyée dès que la variable *Current_Item* sera assignée au premier type de valeur non concordant.

À chaque itération de la boucle, la variable *Current_Item* est automatiquement remplie avec l'élément correspondant de la collection. Vous devez tenir compte des points suivants :

- Si la variable *Current_Item* est de type objet ou de type collection (c'est-à-dire si *Expression* est une collection d'objets ou de collections), la modification de cette variable entraînera automatiquement la modification de l'élément correspondant de la collection (car les objets et les collections partagent les mêmes références). Si la variable est de type scalaire, seule la variable sera modifiée.
- La variable *Current_Item* doit être du même type que les éléments de la collection. Si un seul élément de la collection n'est pas du même type que la variable, une erreur est générée et la boucle s'arrête.
- Si la collection contient des éléments avec une valeur **Null**, une erreur sera générée si le type de la variable *Current_Item* ne prend pas en charge les valeurs **Null** (comme les variables longint).

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

Lorsque `For each...End for each` est utilisé avec une *Expression* du type *Entity selection* , le paramètre *Current_Item* est l'entité en cours de traitement.

Le nombre de boucles est basé sur le nombre d'entities présentes dans l'entity selection. A chaque itération de la boucle, le paramètre *Elément_courant* reçoit automatiquement l'entity qui est en cours de traitement.

**Note :** Si l'entity selection contient une entity qui a été supprimée entre-temps par un autre process, elle est automatiquement ignorée durant la boucle.

N'oubliez pas que toute modification effectuée sur l'entity en cours de traitement doit être explicitement sauvegardée (si nécessaire) à l'aide de `entity.save()`.

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

Lorsque `For each...End for each` est utilisée avec une *Expression* de type Objet, le paramètre *Current_Item* est une variable texte qui reçoit automatiquement le nom de la propriété en cours de traitement.

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

### Paramètres begin / end

Vous pouvez définir des bornes pour l'itération à l'aide des paramètres optionnels begin et end.

**Note :** Les paramètres *begin* et *end* sont utilisables uniquement avec les boucles sur des collections et des entity selections (ils sont ignorés avec les boucles sur des propriétés d'objets).

- Dans le paramètre *begin*, passez la position de l'élément de *Expression* auquel démarrer l'itération (*begin* est inclus).
- Dans le paramètre *end*, vous pouvez passer la position de l'élément de *Expression* auquel stopper l'itération (*end* est exclus).

Si *end* est omis ou si *end* est plus grand que le nombre d'éléments de *Expression*, les éléments sont itérés depuis *begin* jusqu'au dernier inclus.
Si les paramètres *begin* et *end* sont des valeurs positives, ils représentent des positions d'éléments dans *Expression*.
Si *begin* est une valeur négative, elle est recalculée comme `begin:=begin+Taille expression` (elle est considérée comme un décalage à partir de la fin de *Expression*). Si la valeur calculée est négative, *begin* prend la valeur 0.
**Note :** Même si begin est une valeur négative, l'itération est toujours effectuée dans le même ordre.
Si *end* est une valeur négative, elle est recalculée comme `end:=end+Taille expression`

Par exemple :

- une collection contient 10 éléments (numérotés de 0 à 9)
- begin=-4 -> begin=-4+10=6 -> l'itération démarre au 6e élément (numéro 5)
- end=-2 -> end=-2+10=8 -> l'itération stoppe avant le 8e élément (numéro 7), i.e. après le 7e élément.

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

Vous pouvez contrôler l'exécution de `For each...End for each` en ajoutant une condition `Until` ou `While` à la boucle. Lorsqu'une instruction Until(condition) est associée à la boucle, l'itération stoppe dès que la condition est évaluée à `True`, tandis que dans le cas d'une instruction `While(condition)`, l'itération stoppe dès que la condition est évaluée à False.

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

## break et continue

Toutes les structures de boucles ci-dessus prennent en charge les instructions `break` et `continue`. Ces instructions vous donnent plus de contrôle sur les boucles en vous permettant de sortir de la boucle et de contourner, à tout moment, l'itération en cours.

### break

L'instruction `break` met fin à la boucle qui la contient. Le contrôle du programme passe à l'instruction située immédiatement après le corps de la boucle.

Si l'instruction `break` se trouve à l'intérieur d'une [boucle imbriquée](#nested-forend-for-looping-structures) (boucle dans une autre boucle), l'instruction `break` mettra fin à la boucle la plus interne.

#### Exemple

```4d
For (vCounter;1;100)
	If ($tab{vCounter}="") //si une condition devient true
		break //fin de la boucle for
	End if
End for
```

### continue

L'instruction `continue` met fin à l'exécution des instructions de l'itération de la boucle courante, et poursuit l'exécution de la boucle à l'itération suivante.

```4d
var $text : Text
For ($i; 0; 9)
	If ($i=3)
		continue //aller directement à l'itération suivante
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

L'instruction `return` peut être appelée de n'importe où. Lorsqu'une instruction `return` est utilisée dans une fonction ou une méthode, l'exécution de la fonction ou de la méthode est arrêtée. Le code restant n'est pas exécuté et le contrôle est renvoyé à l'appelant.

L'instruction `return` peut être utilisée pour [retourner une valeur](parameters.md#return-expression) à l'appelant.

#### Exemple

```4d
var $message : Text
var $i : Integer

While (True) //boucle infinie
	$i:=$i+1
	$message+=String($i)+"A\r"  // jusque 5
	logConsole($message)
	If ($i=5)
		return //stoppe la boucle
	End if 
	$message+=String($i)+"B\r"  // jusque 4
	logConsole($message)
End while 
$message+=String($i)+"C\r"  //jamais exécuté 
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
