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

- Si la variable *Elément_courant* est de type objet ou collection (i.e. si *Expression* est une collection d'objets ou une collection de collections), la modification de cette variable modifiera automatiquement l'élément correspondant de la collection (car les objets et les collections sont passés par référence). Si la variable est de type scalaire, sa modification ne sera pas répercutée sur l'élément de la collection.
- La variable *Elément_courant* doit être du même type que les éléments de la collection. Si un seul élément de la collection n'est pas du même type que la variable, une erreur est générée et la boucle s'arrête.
- Si la collection contient des éléments de valeur **Null**, une erreur sera générée si le type de la variable *Elément_courant* ne prend pas en charge la valeur **Null** (comme par exemple les variables entier long).

#### Exemple

Vous souhaitez calculer quelques statistiques sur une collection de nombres :

```code4d
 C_COLLECTION($nums)
 $nums:=Creer collection(10;5001;6665;33;1;42;7850)
 C_ENTIER LONG($item;$vEven;$vOdd;$vUnder;$vOver)
 Pour chaque($item;$nums)
    Si($item%2=0)
       $vEven:=$vEven+1 //nombres pairs
    Sinon
       $vOdd:=$vOdd+1 //nombres impairs
    Fin de si
    Au cas ou
       :($item<5000)
          $vUnder:=$vUnder+1 //nombres < 5000
       :($item>6000)
          $vOver:=$vOver+1 //nombres > 6000
    Fin de cas
 Fin de chaque
  //$vEven=3, $vOdd=4
  //$vUnder=4,$vOver=2
```

### Boucle sur des entity selections

Lorsque `Pour chaque...Fin de chaque` est utilisée avec une *Expression* de type *Entity selection*, le paramètre *Elément_courant* contient l'entity en cours de traitement.

Le nombre de boucles est basé sur le nombre d'entities présentes dans l'entity selection. A chaque itération de la boucle, le paramètre *Elément_courant* reçoit automatiquement l'entity qui est en cours de traitement.

**Note :** Si l'entity selection contient une entity qui a été supprimée entre-temps par un autre process, elle est automatiquement ignorée durant la boucle.

N'oubliez pas que toute modification effectuée sur l'entity en cours de traitement doit être explicitement sauvegardée (si nécessaire) à l'aide de la méthode `entity.save( )`.

#### Exemple

Vous souhaitez augmenter le salaire de tous les employés britanniques dans une entity selection :

```code4d
 C_OBJET(emp)
 Pour chaque(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 Fin de chaque
```

### Boucles sur des propriétés d'objets

Lorsque `Pour chaque...Fin de chaque` est utilisée avec une *Expression* de type Objet, le paramètre *Elément_courant* est une variable texte qui reçoit automatiquement le nom de la propriété en cours de traitement.

Les propriétés de l'objet sont itérées en fonction de leur ordre de création. Pendant la boucle, il est possible d'ajouter ou de supprimer des propriétés dans l'objet, sans pour autant modifier le nombre de boucles qui reste basé sur le nombre de propriétés initial de l'objet.

#### Exemple

Vous souhaitez passer en majuscules les propriétés contenant des noms dans l'objet suivant :

```code4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```

Vous pouvez écrire :

```code4d
 Pour chaque(property;vObject)
    Si(Type valeur(vObject[property])=Est un texte)
       vObject[property]:=Majusc(vObject[property])
    Fin de si
 Fin de chaque
```

    {
        "firstname": "GREGORY",
        "lastname": "BADIKORA",
        "age": 20
    }
    

### Paramètres début / fin

Vous pouvez définir des bornes pour l'itération à l'aide des paramètres optionnels début et fin.

**Note :** Les paramètres *début* et *fin* sont utilisables uniquement avec les boucles sur des collections et des entity selections (ils sont ignorés avec les boucles sur des propriétés d'objets).

- Dans le paramètre *début*, passez la position de l'élément de *Expression* auquel démarrer l'itération (*début* est inclus).
- Dans le paramètre *fin*, vous pouvez passer la position de l'élément de *Expression* auquel stopper l'itération (*fin* est exclus). 

Si *fin* est omis ou si *fin* est plus grand que le nombre d'éléments de *Expression*, les éléments sont itérés depuis *début* jusqu'au dernier inclus. Si les paramètres *début* et *fin* sont des valeurs positives, ils représentent des positions d'éléments dans *Expression*. Si *début* est une valeur négative, elle est recalculée comme `début:=début+Taille expression` (elle est considérée comme un décalage à partir de la fin de *Expression*). Si la valeur calculée est négative, *début* prend la valeur 0. **Note :** Même si début est une valeur négative, l'itération est toujours effectuée dans le même ordre. Si *fin* est une valeur négative, elle est recalculée comme `fin:=fin+Taille expression`

Par exemple:

- une collection contient 10 éléments (numérotés de 0 à 9)
- début=-4 -> début=-4+10=6 -> l'itération démarre au 6e élément (numéro 5)
- fin=-2 -> fin=-2+10=8 -> l'itération stoppe avant le 8e élément (numéro 7), i.e. après le 7e élément. 

#### Exemple

```code4d
 C_COLLECTION($col;$col2)
 $col:=Creer collection("a";"b";"c";"d";"e")
 $col2:=Creer collection(1;2;3)
 C_TEXTE($item)
 Pour chaque($item;$col;0;3)
    $col2.push($item)
 Fin de chaque
  //$col2=[1,2,3,"a","b","c"]
 Pour chaque($item;$col;-2;-1)
    $col2.push($item)
 Fin de chaque
  //$col2=[1,2,3,"a","b","c","d"]
```

### Conditions Until et While

Vous pouvez contrôler l'exécution de `Pour chaque...Fin de chaque` en ajoutant une condition `Jusque` ou `Tant que` à la boucle. Lorsqu'une instruction `Jusque(condition)` ou `Tant que(condition)` est associée à la boucle, l'itération stoppe dès que la condition est évaluée à Vrai.

Vous pouvez passer un mot-clé ou l'autre en fonction de vos besoins :

- La condition `Jusque` est testée à la fin de chaque itération, donc si *Expression* n'est ni vide ni Null, la boucle sera exécutée au moins une fois.
- La condition `Tant que` est testée au début de chaque itération, donc en fonction du résultat de la condition, la boucle peut ne pas être exécutée du tout.

#### Exemple

```code4d
 $colNum:=Creer collection(1;2;3;4;5;6;7;8;9;10)
 
 $total:=0
 Pour chaque($num;$colNum)Tant que($total<30) //testé au début
    $total:=$total+$num
 Fin de chaque
 ALERTE(Chaine($total)) //$total = 36 (1+2+3+4+5+6+7+8)
 
 $total:=1000
 Pour chaque($num;$colNum)Jusque($total>30) //testé à la fin
    $total:=$total+$num
 Fin de chaque
 ALERTE(Chaine($total)) //$total = 1001 (1000+1)
```