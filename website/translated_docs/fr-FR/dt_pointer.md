---
id: pointer
title: Pointeurs
---

A Pointer variable or expression is a reference to another variable (including arrays and array elements), table, field, or object. There is no field of type Pointer.

Les pointeurs sont des outils de programmation avancée. Lorsque vous utilisez le langage de 4D, vous vous référez aux différents objets par l’intermédiaire de leur nom — en particulier les tables, champs, variables et tableaux. Pour appeler l’un d’entre eux, vous écrivez simplement son nom. However, it is often useful to refer to these elements and access them without knowing their names. 

Le concept de pointeur n’est pas tellement éloigné de la vie courante. Vous vous référez souvent à des choses sans connaître leur identité exacte. Par exemple, vous dites à un ami “Allons-y avec ta voiture” au lieu de “Allons-y avec la voiture immatriculée 123 Abd 99”. Dans ce cas, vous faites référence à la voiture immatriculée 123 Abd 99 en utilisant l’expression “ta voiture”. Par analogie, l’expression “la voiture immatriculée 123 Abd 99” est le nom d’un objet, et “ta voiture” est un pointeur référençant (ou pointant vers) l’objet.

La capacité de se référer à quelque chose sans connaître son identité exacte est très utile. Si votre ami s’achetait une nouvelle voiture, l’expression “ta voiture” serait toujours exacte — ce serait toujours une voiture et vous pourriez toujours aller quelque part avec. Les pointeurs fonctionnent de la même manière. Par exemple, un pointeur peut pointer à un moment donné vers un champ numérique appelé Age, et plus tard vers une variable numérique appelée Ancien âge. Dans les deux cas, le pointeur référence des données numériques pouvant être utilisée dans des calculs.

Vous pouvez utiliser des pointeurs pour référencer des tables, des champs, des variables, des tableaux et des éléments de tableaux. Le tableau suivant vous fournit un exemple de chaque type :

| Type        | Référencement        | Référencement          | Affectation               |
| ----------- | -------------------- | ---------------------- | ------------------------- |
| Table       | vpTble:=->[Table]    | TABLE DEFAUT(vpTble->) | n/a                       |
| Champ       | vpChp:=->[Table]Chp  | ALERTE(vpChp->)        | vpChp->:="Jean"           |
| Variable    | vpVar:=->Variable    | ALERTE(vpVar->)        | vpVar->:="Jean"           |
| Tableau     | vpT:=->Tableau       | TRIER TABLEAU(vpT->;>) | COPIER TABLEAU(Tab;vpT->) |
| Elém. tabl. | vpElem:=->Tableau{1} | ALERTE(vpElem->)       | vpElem->:="Jean"          |
| Objet       | vpObj:=->myObject    | ALERT (vpObj->myProp)  | vpObj->myProp:="John"     |

## Utiliser des pointeurs : un exemple

Il est plus facile d’expliquer l’utilisation des pointeurs au travers d’un exemple. Cet exemple vous montre comment accéder à une variable par l’intermédiaire d’un pointeur. Nous commençons par créer la variable :

```code4d
MaVar:="Bonjour"
```

MaVar est désormais une variable contenant la chaîne “Bonjour”. Nous pouvons alors créer un pointeur vers MaVar :

```code4d
C_POINTEUR($MonPointeur)
$MonPointeur:=->MaVar
```

Le symbole -> signifie “pointer vers” (ce symbole est formé du caractère “tiret” (-) suivi du caractère “supérieur à”). Dans ce cas, il crée un pointeur qui référence ou “pointe vers” $MaVar. Ce pointeur est assigné à MonPointeur via l’opérateur d’assignation.

$MonPointeur est désormais une variable qui contient un pointeur vers $MaVar. $MonPointeur ne contient pas “Bonjour”, la valeur de $MaVar, mais vous pouvez utiliser $MonPointeur pour obtenir cette valeur. L’expression suivante retourne la valeur de $MaVar :

```code4d
$MonPointeur->
```

Dans ce cas, la chaîne “Bonjour” est retournée. Lorsque le symbole -> est placé derrière un pointeur, la valeur de l’objet vers lequel pointe le pointeur est récupérée. On dit alors qu’on dépointe le pointeur.

Il est important de comprendre que vous pouvez utiliser un pointeur suivi du symbole -> partout où vous auriez pu utiliser l’objet pointé lui-même. Vous pouvez placer l’expression $MonPointeur-> partout où vous pourriez utiliser la variable originale $MaVar. Par exemple, l'instruction suivante affiche une boîte de dialogue d’alerte comportant le mot Bonjour :

```code4d
ALERTE($MonPointeur->)
```

Vous pouvez également utiliser $MonPointeur pour modifier la valeur de $MaVar. Par exemple, l’instruction suivante stocke la chaîne “Au revoir” dans la variable $MaVar :

```code4d
$MonPointeur->:="Au revoir"
```

Si vous examinez les deux utilisations de l’expression $MonPointeur-> ci-dessus, vous constatez que cette expression se comporte exactement comme si vous aviez utilisé $MaVar à sa place. En résumé : les deux lignes suivantes effectuent la même opération — elles affichent une boîte de dialogue d’alerte contenant la valeur courante de la variable $MaVar :

```code4d
ALERTE($MonPointeur->)
 ALERTE($MaVar)
```

Les deux lignes suivantes effectuent la même opération ; elles assignent la chaîne "Au revoir" à $MaVar :

```code4d
$MonPointeur->:="Au revoir"
$MaVar:="Au revoir"
```

## Opérateurs sur les pointeurs

Avec :

```code4d
  ` vPtrA and vPtrB point to the same object
 vPtrA:=->anObject
 vPtrB:=->anObject
  ` vPtrC points to another object
 vPtrC:=->anotherObject
```

| Opération | Syntaxe             | Retourne | Expression    | Valeur |
| --------- | ------------------- | -------- | ------------- | ------ |
| Egalité   | Pointeur = Pointeur | Booléen  | vPtrA = vPtrB | Vrai   |
|           |                     |          | vPtrA = vPtrC | Faux   |
| Inégalité | Pointeur # Pointeur | Booléen  | vPtrA # vPtrC | Vrai   |
|           |                     |          | vPtrA # vPtrB | Faux   |

## Principales utilisations

### Utiliser des pointeurs vers des tables

Partout où le langage requiert un nom de table, vous pouvez utiliser un pointeur dépointé vers une table. Pour créer un pointeur vers une table, écrivez une instruction du type :

```code4d
$TablePtr:=->[touteTable]
```

Vous pouvez également récupérer un pointeur vers une table à l’aide de la fonction Table. Par exemple :

```code4d
$TablePtr:=Table(20)
```

Vous pouvez utiliser le pointeur dépointé dans vos commandes, comme ceci :

```code4d
TABLE PAR DEFAUT($TablePtr->)
```

### Utiliser des pointeurs vers des champs

Partout où le langage requiert un nom de champ, vous pouvez utiliser un pointeur dépointé vers un champ. Pour créer un pointeur vers un champ, écrivez une ligne d'instruction du type :

```code4d
$ChampPtr:=->[uneTable]CeChamp
```

Vous pouvez également récupérer un pointeur vers un champ à l’aide de la fonction `Champ`. Par exemple :

```code4d
$ChampPtr:=Champ(1;2)
```

Vous pouvez utiliser le pointeur dépointé dans vos commandes, comme ceci :

```code4d
OBJET FIXER POLICE($ChampPtr->;"Arial")
```

### Utiliser des pointeurs vers des variables

Lorsque vous utilisez des pointeurs vers des variables locales ou des variables process, vous devez veiller à ce que la variable pointée soit bien définie au moment de l’utilisation du pointeur. Rappelons que les variables locales sont supprimées à la fin de l’exécution de la méthode qui les a créées et les variables process à la fin du process dans lequel elles ont été créées. L’appel d’un pointeur vers une variable qui n’existe plus provoque une erreur de syntaxe en mode interprété (variable indéfinie) mais peut générer une erreur plus conséquente en mode compilé.

Les pointeurs vers des variables locales permettent dans de nombreux cas d’économiser des variables process. Les pointeurs vers des variables locales peuvent être utilisés uniquement à l’intérieur d’un même process. Dans le débogueur, lorsque vous affichez un pointeur vers une variable locale déclarée dans une autre méthode, le nom de la méthode d’origine est indiquée entre parenthèses, derrière le pointeur. Par exemple, si vous écrivez dans Méthode1 :

```code4d
 $MaVar:="Bonjour"
 Méthode2(->$MaVar)
```

Dans Méthode2, le débogueur affichera $1 de la façon suivante :

| $1 | ->$MaVar (Méthode1) |
| -- | ------------------- |
|    |                     |

La valeur de $1 sera :

| $MaVar(Méthode1) | "Bonjour" |
| ---------------- | --------- |
|                  |           |

### Utiliser des pointeurs vers des éléments de tableau

Vous pouvez créer un pointeur vers un élément de tableau. Par exemple, les lignes d'instruction suivantes créent un tableau et assignent à une variable appelée $ElémPtr un pointeur vers le premier élément :

```code4d
TABLEAU REEL($unTableau;10) // Créer un tableau
 $ElémPtr:=->$unTableau{1} // Créer un pointeur vers l’élément de tableau
```

Vous pouvez alors utiliser le pointeur dépointé pour assigner une valeur à l’élément, comme ceci :

```code4d
$ElémPtr->:=8
```

### Utiliser des pointeurs vers des tableaux

Vous pouvez créer un pointeur vers un tableau. Par exemple, les lignes d'instruction suivantes créent un tableau et assignent à la variable nommée $TabPtr un pointeur vers le tableau :

```code4d
TABLEAU REEL($unTableau;10) // Créer un tableau
$TabPtr:=->$unTableau // Créer un pointeur vers le tableau
```

Il est important de comprendre que ce pointeur pointe vers le tableau, et non vers un élément du tableau. Par exemple, vous pourriez utiliser le pointeur dépointé de la manière suivante :

```code4d
TRIER TABLEAU(TabPtr->;>) // Tri du tableau
```

Si vous devez vous référer au quatrième élément du tableau à l’aide du pointeur, vous pouvez écrire :

```code4d
 TabPtr->{4}:=84
```

### Passer des pointeurs aux méthodes

Vous pouvez passer un pointeur en tant que paramètre d’une méthode. A l’intérieur de la méthode, vous pouvez modifier l’objet référencé par le pointeur. Par exemple, la méthode suivante, `Recoit Deux`, reçoit deux paramètres qui sont des pointeurs. Elle passe l’objet référencé par le premier paramètre en caractères majuscules, et l’objet référencé par le second paramètre en caractères minuscules. 

```code4d
  // Méthode projet Recoit Deux
  // $1 – Pointeur vers un champ ou une variable de type Chaîne. Passe la chaîne en majuscules.
  // $2 – Pointeur vers un champ ou une variable de type Chaîne. Passe la chaîne en minuscules.
 $1->:=Majusc($1->)
 $2->:=Minusc($2->)
```

L'instruction suivante emploie la méthode `Recoit Deux` pour passer un champ en caractères majuscules et une variable en caractères minuscules :

    rECOIT DEUX(->[MaTable]MonChamp;->$MaVar)
    

Si le champ, [MaTable]MonChamp, contenait la chaîne "dupont", celle-ci deviendrait "DUPONT". Si la variable $MaVar contenait la chaîne "BONJOUR", celle-ci deviendrait "bonjour".

Dans la méthode Recoit Deux (et, en fait, à chaque fois que vous utilisez des pointeurs), il est important que les types de données des objets référencés soient corrects. Dans l’exemple précédent, les pointeurs doivent pointer vers des objets contenant une chaîne ou un texte.

### Pointeurs vers des pointeurs

Si vous aimez compliquer les choses à l'extrême (bien que cela ne soit pas nécessaire dans 4D), vous pouvez utiliser des pointeurs pour référencer d'autres pointeurs. Examinons l’exemple suivant :

```code4d
 $MaVar:="Bonjour"
$PointeurUn:=->$MaVar
$PointeurDeux:=->$PointeurUn
($PointeurDeux->)->:="Au revoir"
ALERTE(($PointeurDeux->)->)
```

Cet exemple affiche une boîte de dialogue d’alerte contenant “Au revoir”.

Voici la description de chaque ligne de l’exemple :

- $MaVar := "Bonjour" --> Cette ligne place simplement la chaîne "Bonjour" dans la variable $MaVar.
- $PointeurUn := ->$MaVar --> $PointeurUn contient désormais un pointeur vers $MaVar.
- $PointeurDeux :=->$PointeurUn --> $PointeurDeux (une nouvelle variable) contient un pointeur vers $PointeurUn, qui, elle, pointe vers $MaVar.
- ($PointeurDeux->)-> := "Au revoir" --> $PointeurDeux-> référence le contenu de $PointeurUn, qui elle-même référence $MaVar. Par conséquent, ($PointeurDeux->)-> référence le contenu de $MaVar. Donc, dans ce cas, la valeur "Au revoir" est assignée à la $MaVar.
- ALERTE (($PointeurDeux->)->) --> C'est ici la même chose que précédemment : $PointeurDeux-> référence le contenu de $PointeurUn, qui elle-même référence $MaVar. Par conséquent, ($PointeurDeux->)-> référence le contenu de $MaVar. Donc, dans ce cas, la boîte de dialogue d'alerte affiche le contenu de $MaVar.

La ligne suivante place la valeur "Bonjour" dans $MaVar :

```code4d
($PointeurDeux->)->:="Bonjour"
```

La ligne suivante récupère "Bonjour" à partir de $MaVar et la place dans $NouvelleVar :

    $NouvelleVar:=($PointeurDeux->)->
    

**Important :** Vous devez utiliser des parenthèses lors des déréférencements multiples.