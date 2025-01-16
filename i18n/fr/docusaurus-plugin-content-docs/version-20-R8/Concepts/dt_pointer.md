---
id: pointer
title: Pointer
---

Les variables ou expressions de type Pointeur sont des références à d'autres variables (y compris des tableaux et des éléments de tableaux), à des tables, des champs ou des objets. Il n'existe pas de champ de type Pointeur.

Les pointeurs sont des outils de programmation avancée. Lorsque vous utilisez le langage de 4D, vous vous référez aux différents objets par l’intermédiaire de leur nom — en particulier les tables, champs, variables et tableaux. Cependant, il est parfois utile de pouvoir appeler ou référencer ces éléments sans nécessairement connaître leur nom. C’est ce que permettent les pointeurs.

Le concept de pointeur n’est pas tellement éloigné de la vie courante. Vous vous référez souvent à des choses sans connaître leur identité exacte. Par exemple, vous pourriez dire à un ami : "Allons faire un tour avec ta voiture" au lieu de "Allons faire un tour avec la voiture qui a la plaque d’immatriculation 123ABD". Dans ce cas, vous faites référence à la voiture avec la plaque d'immatriculation 123ABD en utilisant l'expression "ta voiture". For example, you might say to a friend, “Let’s go for a ride in your car” instead of “Let’s go for a ride in the car with license plate 123ABD.” In this case, you are referencing the car with license plate 123ABD by using the phrase “your car.” The phrase “car with license plate 123ABD” is like the name of an object, and using the phrase “your car” is like using a pointer to reference the object.

La capacité de se référer à quelque chose sans connaître son identité exacte est très utile. Si votre ami s’achetait une nouvelle voiture, l’expression "ta voiture" serait toujours exacte — ce serait toujours une voiture et vous pourriez toujours aller quelque part avec. Les pointeurs fonctionnent de la même manière. Par exemple, un pointeur peut pointer à un moment donné vers un champ numérique appelé Age, et plus tard vers une variable numérique appelée Ancien âge. Dans les deux cas, le pointeur référence des données numériques pouvant être utilisée dans des calculs.

Vous pouvez utiliser des pointeurs pour référencer des tables, des champs, des variables, des tableaux et des éléments de tableaux. Le tableau suivant vous fournit un exemple de chaque type :

| Type                                        | Référencement                                                                           | Référencement                                 | Affectation                                |
| ------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------ |
| Table                                       | vpTble:=->[Table]   | DEFAULT TABLE(vpTble->)    | n/a                                        |
| Champ                                       | vpChp:=->[Table]Chp | ALERT(vpChp->)             | vpChp->:="Jean"            |
| Variable                                    | vpVar:=->Variable                                                       | ALERT(vpVar->)             | vpVar->:="Jean"            |
| Tableau                                     | vpT:=->Tableau                                                          | SORT ARRAY(vpT->;>)        | COPY ARRAY(Tab;vpT->)   |
| Elém. tabl. | vpElem:=->Tableau{1}                                                    | ALERT(vpElem->)            | vpElem->:="Jean"           |
| Object                                      | vpObj:=->monObjet                                                       | ALERT (vpObj->monAttribut) | vpObj->monAttribut:="John" |

## Utiliser des pointeurs : un exemple

Il est plus facile d’expliquer l’utilisation des pointeurs au travers d’un exemple. Cet exemple vous montre comment accéder à une variable par l’intermédiaire d’un pointeur. Nous commençons par créer la variable :

```4d
$MyVar:="Hello"
```

$MyVar est désormais une variable contenant la chaîne "Hello". Nous pouvons alors créer un pointeur vers $MyVar :

```4d
C_POINTER($MyPointer)  
$MyPointer:=->$MyVar
```

Le symbole -> signifie "pointer vers". The -> symbol means “get a pointer to.” This symbol is formed by a dash followed by a “greater than” sign. Dans ce cas, il crée un pointeur qui référence ou “pointe vers” $MyVar. Ce pointeur est assigné à $MyPointer via l’opérateur d’assignation.

$MyPointer est désormais une variable qui contient un pointeur vers $MyVar. $MyPointer ne contient pas "Hello", la valeur de $MyVar, mais vous pouvez utiliser $MyPointer pour obtenir cette valeur. L’expression suivante retourne la valeur de $MyVar :

```4d
$MyPointer->
```

Dans ce cas, la chaîne "Hello" est retournée. Lorsque le symbole -> est placé derrière un pointeur, la valeur de l’objet vers lequel pointe le pointeur est récupérée. On dit alors qu’on dépointe le pointeur.

Il est important de comprendre que vous pouvez utiliser un pointeur suivi du symbole -> partout où vous auriez pu utiliser l’objet pointé lui-même. Vous pouvez placer l’expression $MonPointeur-> partout où vous pourriez utiliser la variable originale $MaVar. Par exemple, l'instruction suivante affiche une boîte de dialogue d’alerte comportant le mot Hello :

```4d
ALERT($MyPointer->)
```

Vous pouvez également utiliser $MyPointer pour modifier la valeur de $MyVar. Par exemple, l’instruction suivante stocke la chaîne "Goodbye" dans la variable $MyVar :

```4d
$MyPointer->:="Goodbye"
```

Si vous examinez les deux utilisations de l’expression $MonPointeur-> ci-dessus, vous constatez que cette expression se comporte exactement comme si vous aviez utilisé $MaVar à sa place. En résumé : les deux lignes suivantes effectuent la même opération — elles affichent une boîte de dialogue d’alerte contenant la valeur courante de la variable $MyVar :

```4d
ALERT($MyPointer->)
ALERT($MyVar)
```

Les deux lignes suivantes effectuent la même opération ; elles assignent la chaîne "Goodbye" à $MyVar :

```4d
$MyPointer->:="Goodbye"
$MyVar:="Goodbye"
```

## Opérateurs sur les pointeurs

Avec :

```4d
  // vPtrA et vPtrB pointent sur le même objet
 vPtrA:=->unObjet
 vPtrB:=->unObjet
  // vPtrC pointe sur un autre objet
 vPtrC:=->autreObjet
```

| Opération | Syntaxe             | Retourne | Expression    | Valeur |
| --------- | ------------------- | -------- | ------------- | ------ |
| Egalité   | Pointeur = Pointeur | Boolean  | vPtrA = vPtrB | True   |
|           |                     |          | vPtrA = vPtrC | False  |
| Inégalité | Pointeur # Pointeur | Boolean  | vPtrA # vPtrC | True   |
|           |                     |          | vPtrA # vPtrB | False  |

## Principales utilisations

### Utiliser des pointeurs vers des tables

Partout où le langage requiert un nom de table, vous pouvez utiliser un pointeur dépointé vers une table. Pour créer un pointeur vers une table, écrivez une instruction du type :

```4d
$TablePtr:=->[touteTable]
```

Vous pouvez également récupérer un pointeur vers une table à l’aide de la commande `Table`. Par exemple :

```4d
$TablePtr:=Table(20)
```

Vous pouvez utiliser le pointeur dépointé dans vos commandes, comme ceci :

```4d
DEFAULT TABLE($TablePtr->)
```

### Utiliser des pointeurs vers des champs

Partout où le langage requiert un nom de champ, vous pouvez utiliser un pointeur dépointé vers un champ. Pour créer un pointeur vers un champ, écrivez une ligne d'instruction du type :

```4d
$ChampPtr:=->[uneTable]CeChamp
```

Vous pouvez également récupérer un pointeur vers un champ à l’aide de la fonction `Champ`. Par exemple :

```4d
$FieldPtr:=Field(1;2)
```

Vous pouvez utiliser le pointeur dépointé dans vos commandes, comme ceci :

```4d
OBJECT SET FONT($FieldPtr->;"Arial")
```

### Utiliser des pointeurs vers des variables

Lorsque vous utilisez des pointeurs vers des variables locales ou des variables process, vous devez veiller à ce que la variable pointée soit bien définie au moment de l’utilisation du pointeur. Rappelons que les variables locales sont supprimées à la fin de l’exécution de la méthode qui les a créées et les variables process à la fin du process dans lequel elles ont été créées. L’appel d’un pointeur vers une variable qui n’existe plus provoque une erreur de syntaxe en mode interprété (variable indéfinie) mais peut générer une erreur plus conséquente en mode compilé.

Les pointeurs vers des variables locales permettent dans de nombreux cas d’économiser des variables process. Les pointeurs vers des variables locales peuvent être utilisés uniquement à l’intérieur d’un même process. Dans le débogueur, lorsque vous affichez un pointeur vers une variable locale déclarée dans une autre méthode, le nom de la méthode d’origine est indiquée entre parenthèses, derrière le pointeur. Par exemple, si vous écrivez dans Méthode1 :

```4d
 $MyVar:="Hello world"
 Method2(->$MyVar)
```

Dans Method2, le débogueur affichera $1 de la façon suivante :

| $1 | ->$MaVar (Méthode1) |
| -- | -------------------------------------- |

La valeur de $1 sera :

| $MyVar (Method1) | "Hello world" |
| ----------------------------------- | ------------- |

### Utiliser des pointeurs vers des éléments de tableau

Vous pouvez créer un pointeur vers un élément de tableau. Par exemple, les lignes d'instruction suivantes créent un tableau et assignent à une variable appelée $ElémPtr un pointeur vers le premier élément :

```4d
ARRAY REAL($unTableau;10) // Créer un tableau
$ElémPtr:=->$unTableau{1} // Créer un pointeur vers l’élément de tableau
```

Vous pouvez alors utiliser le pointeur dépointé pour assigner une valeur à l’élément, comme ceci :

```4d
$ElémPtr->:=8
```

### Utiliser des pointeurs vers des tableaux

Vous pouvez créer un pointeur vers un tableau. Par exemple, les lignes d'instruction suivantes créent un tableau et assignent à la variable nommée $TabPtr un pointeur vers le tableau :

```4d
ARRAY REAL($unTableau;10) // Créer un tableau
$TabPtr:=->$unTableau // Créer un pointeur vers le tableau
```

Il est important de comprendre que ce pointeur pointe vers le tableau, et non vers un élément du tableau. Par exemple, vous pourriez utiliser le pointeur dépointé de la manière suivante :

```4d
SORT ARRAY($TabPtr->;>) // Tri du tableau
```

Si vous devez vous référer au quatrième élément du tableau à l’aide du pointeur, vous pouvez écrire :

```4d
 ArrPtr->{4}:=84
```

### Passer des pointeurs aux méthodes

Vous pouvez passer un pointeur en tant que paramètre d’une méthode. A l’intérieur de la méthode, vous pouvez modifier l’objet référencé par le pointeur. Par exemple, la méthode suivante, `takeTwo`, reçoit deux paramètres qui sont des pointeurs. Elle passe l’objet référencé par le premier paramètre en caractères majuscules, et l’objet référencé par le second paramètre en caractères minuscules.

```4d
  //méthode projet takeTwo
  //$1 - Pointeur vers un champ ou une variable de type chaîne. Changez en majuscules.
  //$2 - Pointeur vers un champ ou une variable de type chaîne. Changez en minuscules.
 $1->:=Uppercase($1->)
 $2->:=Lowercase($2->)
```

L'instruction suivante emploie la méthode `takeTwo` pour passer un champ en caractères majuscules et une variable en caractères minuscules :

```
takeTwo(->[MaTable]MonChamp;->$MaVar)
```

Si le champ, [MaTable]MonChamp, contenait la chaîne "dupont", celle-ci deviendrait "DUPONT". Si la variable $MaVar contenait la chaîne "BONJOUR", celle-ci deviendrait "bonjour".

Dans la méthode takeTwo (et, en fait, à chaque fois que vous utilisez des pointeurs), il est important que les types de données des objets référencés soient corrects. Dans l’exemple précédent, les pointeurs doivent pointer vers des objets contenant une chaîne ou un texte.

### Pointeurs vers des pointeurs

Si vous aimez compliquer les choses à l'extrême (bien que cela ne soit pas nécessaire dans 4D), vous pouvez utiliser des pointeurs pour référencer d'autres pointeurs. Examinons l’exemple suivant :

```4d
 $MyVar:="Hello"
 $PointerOne:=->$MyVar
 $PointerTwo:=->$PointerOne
 ($PointerTwo->)->:="Goodbye"
 ALERT(($PointerTwo->)->)
```

Cet exemple affiche une boîte de dialogue d’alerte contenant “Goodbye”.

Voici la description de chaque ligne de l’exemple :

- $MyVar:="Hello"
  \--> Cette ligne place la chaîne "Hello" dans la variable $MyVar.
- $PointerOne:=->$MyVar
  \--> $PointerOne contient maintenant un pointeur vers $MyVar.
- $PointerTwo:=->$PointerOne
  \--> $PointerTwo (une nouvelle variable) contient un pointeur vers $PointerOne, qui pointe à son tour vers $MyVar.
- ($PointerTwo->)->:="Goodbye"
  \--> $PointerTwo-> référence le contenu de $PointerOne, qui à son tour fait référence à $MyVar. Par conséquent, ($PointeurDeux->)-> référence le contenu de $MaVar. Donc, dans ce cas, la valeur "Goodbye" est assignée à $MyVar.
- ALERTE (($PointerTwo->)->)
  \--> Même chose : $PointerTwo-> référence le contenu de $PointerOne, qui à son tour fait référence à $MyVar. Par conséquent, ($PointeurDeux->)-> référence le contenu de $MaVar. Therefore ($PointerTwo->)-> references the contents of $MyVar.

La ligne suivante place la valeur "Hello" dans $MyVar :

```4d
($PointerTwo->)->:="Hello"
```

La ligne suivante récupère "Hello" à partir de $MyVar et la place dans $NewVar :

```
$NewVar:=($PointerTwo->)->
```

**Important :** Vous devez utiliser des parenthèses lors des déréférencements multiples.
