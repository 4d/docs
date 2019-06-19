---
id: looping
title: Structures répétitives (ou "boucles")
---

## Tant que...Fin tant que

La syntaxe de la structure répétitive (ou boucle) `Tant que...Fin tant que` est la suivante :

```code4d
 Tant que(Expression_booléenne)
    instruction(s)
 Fin tant que
```

Une boucle `Tant que...Fin tant que` exécute les instructions comprises entre `Tant que` et `Fin tant que` aussi longtemps que l’expression booléenne est VRAIE. Elle teste l’expression booléenne initiale et n’entre pas dans la boucle (et donc n'exécute aucune instruction) si l’expression est à FAUX.

Il est utile d’initialiser la valeur testée dans l’expression booléenne juste avant d’entrer dans la boucle `Tant que...Fin tant que`. Initialiser la valeur signifie lui affecter un contenu approprié, généralement pour que l’expression booléenne soit VRAIE et que le programme entre dans la boucle.

La valeur de l'expression booléenne doit pouvoir être modifiée par un élément situé à l'intérieur de la boucle, sinon elle s'exécutera indéfiniment. La boucle suivante est sans fin car *Infini* est toujours VRAI :

```code4d
 Infini:=Vrai
 Tant que(Infini)
 Fin tant que
```

Si vous vous retrouvez dans une telle situation (où une méthode s'exécute de manière incontrôlée), vous pouvez utiliser les fonctions de débogage de 4D et remonter à la source du problème. Pour plus d'informations sur ce point, reportez-vous à la section [Débogueur](error-handling.md).

### Exemple

```code4d
 CONFIRMER("Ajouter un enregistrement?") // Est-ce que l'utilisateur veut ajouter un enregistrement?
 Tant que(OK=1) // Tant que l'utilisateur accepte
    AJOUTER ENREGISTREMENT([Table]) // Ajouter un nouvel enregistrement
 Fin tant que // Une boucle Tant que se termine toujours par Fin tant que
```

Dans cet exemple, la valeur de la variable système `OK` est définie par la commande `CONFIRMER` avant que le programme n’entre dans la boucle. Si l’utilisateur clique sur le bouton **OK** dans la boîte de dialogue de confirmation, la variable `OK` prend la valeur 1 et la boucle est exécutée. Dans le cas contraire, la variable `OK` prend la valeur 0 et la boucle est ignorée. Une fois que le programme entre dans la boucle, la commande `AJOUTER ENREGISTREMENT` permet de continuer à l’exécuter car elle met la variable système `OK` à 1 lorsque l’utilisateur sauvegarde l’enregistrement. Lorsque l’utilisateur annule (ne valide pas) le dernier enregistrement, la variable système `OK` prend la valeur 0 et la boucle s’arrête.

## Repeter...Jusque

La syntaxe de la structure répétitive (ou boucle) `Repeter...Jusque` est la suivante :

```code4d
 Repeter
    instruction(s)
 Jusque(Expression_booléenne)
```

La boucle `Repeter...Jusque` est semblable à la boucle [Tant que...Fin tant que](flow-control#whileend-while), à la différence qu’elle teste la valeur de l’expression booléenne après l’exécution de la boucle et non avant. Ainsi, la boucle est toujours exécutée au moins une fois, tandis que si l’expression booléenne est initialement à Faux, la boucle `Tant que...Fin tant que` ne s’exécute pas du tout.

L'autre particularité de la boucle `Repeter...Jusque` est qu’elle se poursuit jusqu’à ce que l’expression booléenne soit à VRAI.

### Exemple

Comparez l’exemple suivant avec celui de la boucle `Tant que...Fin tant que`. Vous constatez qu’il n’est pas nécessaire d’initialiser l’expression booléenne — il n’y a pas de commande `CONFIRMER` pour initialiser la variable `OK`.

```code4d
 Repeter
    AJOUTER ENREGISTREMENT([aTable])
 Jusque(OK=0)
```

## Boucle...Fin de boucle

La syntaxe de la structure répétitive `Boucle...Fin de boucle` est la suivante :

```code4d
 Boucle(Variable_Compteur;Expression_Début;Expression_Fin{;Expression_Incrément})
    instructions(s)
 Fin de boucle
```

La structure `Boucle...Fin de boucle` est une boucle contrôlée par un compteur :

- La variable compteur *Variable_Compteur* est une variable numérique (Réel ou Entier long) initialisée par `Boucle...Fin de boucle` à la valeur spécifiée par *Expression_Début*.
- La variable Variable_Compteur est incrémentée de la valeur spécifiée par le paramètre optionnel *Expression_Incrément* à chaque fois que la boucle est exécutée. Si vous ne passez pas de valeur dans *Expression_Incrément*, la variable compteur est incrémentée par défaut de un (1).
- Lorsque le compteur atteint la valeur définie par *Expression_Fin*, la boucle s'arrête.

**Important :** Les expressions numériques *Expression_Début*, *Expression_Fin* et *Expression_Incrément* sont évaluées une seule fois, au début de la boucle. Si ces expressions sont des variables, leur modification depuis l'intérieur de la boucle n'affectera pas l'exécution de la boucle.

**Astuce :** En revanche, vous pouvez, si vous le souhaitez, modifier la valeur de la variable *Variable_Compteur* depuis l'intérieur de la boucle et cela affectera l'exécution de la boucle.

- Généralement, *Expression_Début* est inférieure à *Expression_Fin*.
- Si les deux expressions sont égales, la boucle ne sera exécutée qu'une fois.
- Si *Expression_Début* est supérieure à *Expression_Fin*, la boucle ne s'exécutera pas du tout, à moins que vous ne spécifiiez une *Expression_Incrément* négative. Reportez-vous ci-dessous au paragraphe décrivant ce point.

### Exemples élémentaires

1. La boucle suivante s'exécute 100 fois :

```code4d
 Boucle(vCompteur;1;100)
  // Faire quelque chose
 Fin de boucle
```

2. L'exemple suivant permet de traiter tous les éléments du tableau unTableau :

```code4d
 Boucle($vlElem;1;Taille tableau(unTableau))
  // Faire quelque chose avec l'élément
    unTableau{$vlElem}:=...
 Fin de boucle
```

3. L'exemple suivant permet d'examiner chaque caractère du texte vtDuTexte :

```code4d
 Boucle($vlCar;1;Longueur(vtDuTexte))
  // Faire quelque chose avec le caractère si c'est une tabulation
    Si(Code de caractere(vtDuTexte[[$vlCar]])=Tabulation
  // ...
    Fin de si
 Fin de boucle
```

4. L'exemple suivant permet de traiter tous les enregistrements de la sélection de la table [uneTable] :

```code4d
 DEBUT SELECTION([uneTable])
 Boucle($vlEnrg;1;Enregistrements trouves([uneTable]))
  // Faire quelque chose avec chaque enregistrement
    ENVOYER ENREGISTREMENT([uneTable])
  // ...
  // Passer à l'enregistrement suivant
    ENREGISTREMENT SUIVANT([uneTable])
 Fin de boucle
```

La plupart des structures `Boucle...Fin de boucle` que vous écrirez dans vos bases ressembleront à celles présentées ci-dessus.

### Décrémenter la variable Compteur

Dans certains cas, vous pouvez souhaiter disposer d'une boucle dont la valeur de la variable compteur décroît au lieu de croître. Pour cela, *Expression_Début* doit être supérieure à *Expression_Fin* et *Expression_Increment* doit être négative. Les exemples suivants effectuent les mêmes tâches que les précédents, mais en sens inverse :

5. La boucle suivante s'exécute 100 fois :

```code4d
 Boucle(vCompteur;100;1;-1)
  // Faire quelque chose
 Fin de boucle
```

6. L'exemple suivant permet de traiter tous les éléments du tableau unTableau :

```code4d
 Boucle($vlElem;Taille tableau(unTableau);1;-1)
  // Faire quelque chose avec l'élément
    unTableau{$vlElem}:=...
 Fin de boucle
```

7. L'exemple suivant permet d'examiner chaque caractère du texte vtDuTexte :

```code4d
 Boucle($vlCar;Longueur(vtDuTexte);1;-1)
  // Faire quelque chose avec le caractère si c'est une tabulation
    Si(Code de caractere(vtDuTexte[[$vlCar]])=Tabulation)
  // ...
    Fin de si
 Fin de boucle
```

8. L'exemple suivant permet de traiter tous les enregistrements de la sélection de la table [uneTable] :

```code4d
 ALLER A DERNIER ENREGISTREMENT([uneTable])
 Boucle($vlEnrg;Enregistrements trouves([uneTable]);1;-1)
  // Faire quelque chose avec chaque enregistrement
    ENVOYER ENREGISTREMENT([uneTable])
  //...
  //Passer à l'enregistrement précédent
    ENREGISTREMENT PRECEDENT([uneTable])
 Fin de boucl
```

### Incrementer la variable compteur de plus de 1

Si vous le souhaitez, vous pouvez passer dans *Expression_Incrément* une valeur (positive ou négative) dont la valeur absolue est supérieure à un.

9. La boucle suivante ne traite que les éléments pairs du tableau unTableau :

```code4d
 Boucle($vlElem;2;Taille tableau(unTableau);2)
  // Faire quelque chose avec l'élément 2,4...2n
    unTableau{$vlElem}:=...
 Fin de boucle
```

### Comparaison des structures répétitives

Revenons au premier exemple `Boucle...Fin de boucle`. La boucle suivante s'exécute 100 fois :

```code4d
 Boucle(vCompteur;1;100)
  // Faire quelque chose
 Fin de boucle
```

Il est intéressant d'examiner la manière dont les boucles `Tant que...Fin tant que` et `Repeter...Jusque` effectuent la même action. Voici la boucle `Tant que...Fin tant que` équivalente :

```code4d
 $i :=1 // Initialisation du compteur
 Tant que($i<=100) // Boucle 100 fois
  // Faire quelque chose
    $i :=$i +1 // Il faut incrémenter le compteur
 Fin tant que
```

Voici la boucle `Repeter...Jusque` équivalente :

```code4d
 $i :=1 // Initialisation du compteur
 Repeter
  // Faire quelque chose
    $i :=$i +1 // Il faut incrémenter le compteur
 Jusque($i=100) // Boucle 100 fois
```

**Astuce :** La boucle `Boucle...Fin de boucle` est généralement plus rapide que les boucles `Tant que...Fin tant que` et `Repeter...Jusque` car 4D teste la condition en interne pour chaque cycle de la boucle et incrémente lui-même le compteur. Par conséquent, nous vous conseillons de préférer à chaque fois que c'est possible la structure `Boucle...Fin de boucle`.

### Optimiser l'exécution de Boucle...Fin de boucle

Vous pouvez utiliser comme compteur une variable interprocess, process ou locale, et lui attribuer le type Réel, Entier ou Entier long. Pour des boucles longues, et particulièrement en mode compilé, nous vous conseillons d'employer des variables locales de type Entier long.

10. Voici un exemple :

```code4d
 C_ENTIER LONG($vlCompteur) // Utilisons une variable locale de type Entier long
 Boucle($vlCompteur;1;10000)
  // Faire quelque chose
 Fin de boucle
```

### Structures Boucle...Fin de boucle emboîtées

Vous pouvez emboîter autant de structures répétitives que vous voulez (dans les limites du raisonnable). Cela s'applique aux structures de type `Boucle...Fin de boucle`. Il y a dans ce cas une erreur courante à éviter : assurez-vous d'utiliser une variable compteur différente par structure de boucle.

Voici deux exemples :

11. L'exemple suivant permet de traiter tous les éléments d'un tableau à deux dimensions :

```code4d
  Boucle($vlElem;1;Taille tableau(unTableau))
  // ...
  // Faire quelque chose avec la ligne
  // ...
    Boucle($vlSousElem;1;Taille tableau(unTableau{$vlElem}))
  // Faire quelque chose avec l'élément
       unTableau{$vlElem}{$vlSousElem}:=...
    Fin de boucle
 Fin de boucle
```

12. L'exemple suivant construit un tableau de pointeurs vers tous les champs de type Date présents dans la base :

```code4d
 TABLEAU POINTEUR($apChampsDate;0)
 $vlElem:=0
 Boucle($vlTable;1;Lire numero derniere table)
    Si(Est un numero de table valide($vlTable))
       Boucle($vlChamp;1;Lire numero dernier champ($vlTable))
          Si(Est un numero de champ valide($vlTable;$vlChamp))
             $vpChamp:=Champ($vlTable;$vlChamp)
             Si(Type($vpChamp>)=Est une date)
                $vlElem:=$vlElem+1
                INSERER DANS TABLEAU($apChampsDate;$vlElem)
                $apChampsDate{$vlElem}:=$vpChamp
             Fin de si
          Fin de si
       Fin de boucle
    Fin de si
 Fin de boucle
```

## Pour chaque...Fin de chaque

La syntaxe de la structure répétitive (ou boucle) `Pour chaque...Fin de chaque` est la suivante :

```code4d
 Pour chaque(Element_courant;Expression{;début{;fin}}){Jusque|Tant que}(Expression_booléenne)}
    instructions
 Fin de chaque
```

La structure `Pour chaque...Fin de chaque` exécute le cycle d'instructions définies pour chaque *Elément_courant* de *Expression*. Le type de *Elément_courant* dépend du type de *Expression*. La boucle `Pour chaque...Fin de chaque` peut itérer parmi trois types d'*Expression* :

- collections : boucle sur chaque élément de la collection,
- entity selections : boucle sur chaque entity,
- objets : boucle sur chaque propriété d'objet.

Le tableau suivant compare les trois types de `Pour chaque...Fin de chaque` :

|                      | Boucle sur collections                                  | Boucle sur entity selections | Boucle sur objets |
| -------------------- | ------------------------------------------------------- | ---------------------------- | ----------------- |
| Type Elément_courant | Variable du même type que les éléments de la collection | Entity                       | Variable texte    | Type Expression |Collection (avec éléments du même type) |Entity selection |Objet| |Nombre de boucles (par défaut) |Nombre d'éléments de la collection |Nombre d'entities dans la sélection |Nombre de propriétés d'objets| Prise en charge de Paramètres début / fin / |Oui |Oui |Non| 

- Le nombre de boucles est évalué au démarrage et ne changera pas en cours de traitement. L'ajout ou la suppression d'éléments pendant la boucle est donc déconseillé car il pourra en résulter une redondance ou un manque d'itérations.
- Par défaut, les *instructions* incluses sont exécutées pour chaque valeur de *Expression*. Il est toutefois possible de sortir de la boucle en testant une condition soit au début de chaque itération (`Tant que`) ou à la fin de chaque itération (`Jusque`).
- Les paramètres optionnels *début* et *fin* peuvent être utilisés avec les collections et les entity selections afin de définir des bornes pour la boucle.
- The `For each...End for each` loop can be used on a **shared collection** or a **shared object**. If your code needs to modify one or more element(s) of the collection or object properties, you need to use the `Use...End use` keywords. Depending on your needs, you can call the `Use...End use` keywords: 
    - before entering the loop, if items should be modified together for integrity reasons, or
    - within the loop when only some elements/properties need to be modified and no integrity management is required. 

### Boucles sur collections

Lorsque `Pour chaque...Fin de chaque` est utilisée avec une *Expression* de type *Collection*, le paramètre *Elément_courant* est une variable du même type que les éléments de la collection. Par défaut, le nombre de boucles est basé sur le nombre d'éléments de la collection.

La collection doit contenir uniquement des éléments du même type. Dans le cas contraire, une erreur sera retournée dès que la première valeur de type différent sera assignée à la variable *Elément_courant*.

A chaque itération de la boucle, la variable *Elément_courant* reçoit automatiquement l'élément correspondant de la collection. Vous devez tenir compte des points suivants :

- If the *Current_Item* variable is of the object type or collection type (i.e. if *Expression* is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If the variable is of a scalar type, only the variable will be modified.
- The *Current_Item* variable must be of the same type as the collection elements. If any collection item is not of the same type as the variable, an error is generated and the loop stops.
- If the collection contains elements with a **Null** value, an error will be generated if the *Current_Item* variable type does not support **Null** values (such as longint variables).

#### Exemple

You want to compute some statistics for a collection of numbers:

```code4d
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

When `For each...End for each` is used with an *Expression* of the *Entity selection* type, the *Current_Item* parameter is the entity that is currently processed.

The number of loops is based on the number of entities in the entity selection. On each loop iteration, the *Current_Item* parameter is automatically filled with the entity of the entity selection that is currently processed.

**Note:** If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop.

Keep in mind that any modifications applied on the current entity must be saved explicitly using `entity.save( )`.

#### Exemple

You want to raise the salary of all British employees in an entity selection:

```code4d
 C_OBJECT(emp)
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Loop through object properties

When `For each...End for each` is used with an *Expression* of the Object type, the *Current_Item* parameter is a text variable automatically filled with the name of the currently processed property.

The properties of the object are processed according to their order of creation. During the loop, properties can be added to or removed from the object, without modifying the number of loops that will remain based on the original number of properties of the object.

#### Exemple

You want to switch the names to uppercase in the following object:

```code4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```

You can write:

```code4d
 For each(property;vObject)
    If(Value type(vObject[property])=Is text)
       vObject[property]:=Uppercase(vObject[property])
    End if
 End for each
```

    {
        "firstname": "GREGORY",
        "lastname": "BADIKORA",
        "age": 20
    }
    

### begin / end parameters

You can define bounds to the iteration using the optional begin and end parameters.

**Note:** The *begin* and *end* parameters can only be used in iterations through collections and entity selections (they are ignored on object properties).

- In the *begin* parameter, pass the element position in *Expression* at which to start the iteration (*begin* is included).
- In the *end* parameter, you can also pass the element position in *Expression* at which to stop the iteration (*end* is excluded). 

If *end* is omitted or if *end* is greater than the number of elements in *Expression*, elements are iterated from *begin* until the last one (included). If the *begin* and *end* parameters are positive values, they represent actual positions of elements in *Expression*. If *begin* is a negative value, it is recalculed as `begin:=begin+Expression size` (it is considered as the offset from the end of *Expression*). If the calculated value is negative, *begin* is set to 0. **Note:** Even if begin is negative, the iteration is still performed in the standard order. If *end* is a negative value, it is recalculed as `end:=end+Expression size`

For example:

- a collection contains 10 elements (numbered from 0 to 9)
- begin=-4 -> begin=-4+10=6 -> iteration starts at the 6th element (#5)
- end=-2 -> end=-2+10=8 -> iteration stops before the 8th element (#7), i.e. at the 7th element. 

#### Exemple

```code4d
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

### Until and While conditions

You can control the `For each...End for each` execution by adding an `Until` or a `While` condition to the loop. When an `Until(condition)` or a `While(condition)` statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to True.

You can pass either keyword depending on your needs:

- The `Until` condition is tested at the end of each iteration, so if the *Expression* is not empty or null, the loop will be executed at least once.
- The `While` condition is tested at the beginning of each iteration, so according to the condition result, the loop may not be executed at all.

#### Exemple

```code4d
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