---
id: pointer
title: Pointeur
---

Les variables ou expressions de type Pointeur sont des références à d'autres variables (y compris des tableaux et des éléments de tableaux), à des tables, des champs ou des objets. Il n'existe pas de champ de type Pointeur.

Les pointeurs sont des outils de programmation avancée. Lorsque vous utilisez le langage de 4D, vous vous référez aux différents objets par l’intermédiaire de leur nom — en particulier les tables, champs, variables et tableaux. Pour appeler l’un d’entre eux, vous écrivez simplement son nom. Cependant, il est parfois utile de pouvoir appeler ou référencer ces éléments sans nécessairement connaître leur nom. C’est ce que permettent les pointeurs.

Le concept de pointeur n’est pas tellement éloigné de la vie courante. Vous vous référez souvent à des choses sans connaître leur identité exacte. Par exemple, vous pourriez dire à un ami : «Allons faire un tour en voiture» au lieu de «Allons faire un tour en voiture avec la plaque d’immatriculation 123ABD» Dans ce cas, vous faites référence à la voiture avec la plaque d'immatriculation 123ABD en utilisant l'expression «votre voiture» L'expression «voiture avec plaque d'immatriculation 123ABD» est comme le nom d'un objet, et l'utilisation de l'expression «votre voiture» revient à utiliser un pointeur pour référencer l'objet.

La capacité de se référer à quelque chose sans connaître son identité exacte est très utile. Si votre ami s’achetait une nouvelle voiture, l’expression “ta voiture” serait toujours exacte — ce serait toujours une voiture et vous pourriez toujours aller quelque part avec. Les pointeurs fonctionnent de la même manière. Par exemple, un pointeur peut pointer à un moment donné vers un champ numérique appelé Age, et plus tard vers une variable numérique appelée Ancien âge. Dans les deux cas, le pointeur référence des données numériques pouvant être utilisée dans des calculs.

Vous pouvez utiliser des pointeurs pour référencer des tables, des champs, des variables, des tableaux et des éléments de tableaux. Le tableau suivant vous fournit un exemple de chaque type :

| Type        | Référencement           | Référencement            | Affectation              |
| ----------- | ----------------------- | ------------------------ | ------------------------ |
| Table       | vpTable:=->[Table]      | DEFAULT TABLE(vpTable->) | n/a                      |
| Champ       | vpField:=->[Table]Field | ALERT(vpField->)         | vpField->:="John"        |
| Variable    | vpVar:=->Variable       | ALERT(vpVar->)           | vpVar->:="John"          |
| Tableau     | vpArr:=->Array          | SORT ARRAY(vpArr->;>)    | COPY ARRAY (Arr;vpArr->) |
| Elém. tabl. | vpElem:=->Array{1}      | ALERT (vpElem->)         | vpElem->:="John"         |
| Objet       | vpObj:=->myObject       | ALERT (vpObj->myProp)    | vpObj->myProp:="John"    |


## Utiliser des pointeurs : un exemple

Il est plus facile d’expliquer l’utilisation des pointeurs au travers d’un exemple. Cet exemple vous montre comment accéder à une variable par l’intermédiaire d’un pointeur. Nous commençons par créer la variable :

```4d
MaVar:="Bonjour"
```
$MyVar is now a variable containing the string “Hello.” We can now create a pointer to $MyVar:

```4d
C_POINTER($MonPointeur)
$MonPointeur:=->MaVar
```
The -> symbol means “get a pointer to.” This symbol is formed by a dash followed by a “greater than” sign. Dans ce cas, il crée un pointeur qui référence ou “pointe vers” $MaVar. Ce pointeur est assigné à MonPointeur via l’opérateur d’assignation.

$MonPointeur est désormais une variable qui contient un pointeur vers $MaVar. $MonPointeur ne contient pas “Bonjour”, la valeur de $MaVar, mais vous pouvez utiliser $MonPointeur pour obtenir cette valeur. L’expression suivante retourne la valeur de $MaVar :
```4d
$MonPointeur->
```

Dans ce cas, la chaîne “Bonjour” est retournée. Lorsque le symbole -> est placé derrière un pointeur, la valeur de l’objet vers lequel pointe le pointeur est récupérée. On dit alors qu’on dépointe le pointeur.

Il est important de comprendre que vous pouvez utiliser un pointeur suivi du symbole -> partout où vous auriez pu utiliser l’objet pointé lui-même. Vous pouvez placer l’expression $MonPointeur-> partout où vous pourriez utiliser la variable originale $MaVar. Par exemple, l'instruction suivante affiche une boîte de dialogue d’alerte comportant le mot Bonjour :
```4d
ALERTE($MonPointeur->)
```

Vous pouvez également utiliser $MonPointeur pour modifier la valeur de $MaVar. Par exemple, l’instruction suivante stocke la chaîne “Au revoir” dans la variable $MaVar :
```4d
$MonPointeur->:="Au revoir"
```
Si vous examinez les deux utilisations de l’expression $MonPointeur-> ci-dessus, vous constatez que cette expression se comporte exactement comme si vous aviez utilisé $MaVar à sa place. En résumé : les deux lignes suivantes effectuent la même opération — elles affichent une boîte de dialogue d’alerte contenant la valeur courante de la variable $MaVar :

```4d
ALERT($MonPointeur->)
 ALERT($MaVar)
```
Les deux lignes suivantes effectuent la même opération ; elles assignent la chaîne "Au revoir" à $MaVar :
```4d
$MonPointeur->:="Au revoir"
$MaVar:="Au revoir"
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
| Egalité   | Pointeur = Pointeur | Booléen  | vPtrA = vPtrB | Vrai   |
|           |                     |          | vPtrA = vPtrB | Faux   |
| Inégalité | Pointeur # Pointeur | Booléen  | vPtrA # vPtrC | Vrai   |
|           |                     |          | vPtrA # vPtrB | Faux   |

## Principales utilisations
### Utiliser des pointeurs vers des tables
Partout où le langage requiert un nom de table, vous pouvez utiliser un pointeur dépointé vers une table. Pour créer un pointeur vers une table, écrivez une instruction du type :
```4d
$TablePtr:=->[touteTable]
```
Vous pouvez également récupérer un pointeur vers une table à l’aide de la fonction Table. Par exemple :
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
$ChampPtr:=Champ(1;2)
```

Vous pouvez utiliser le pointeur dépointé dans vos commandes, comme ceci :
```4d
OBJECT SET FONT($FieldPtr->;"Arial")
```

### Utiliser des pointeurs vers des variables

Lorsque vous utilisez des pointeurs vers des variables locales ou des variables process, vous devez veiller à ce que la variable pointée soit bien définie au moment de l’utilisation du pointeur. Rappelons que les variables locales sont supprimées à la fin de l’exécution de la méthode qui les a créées et les variables process à la fin du process dans lequel elles ont été créées. L’appel d’un pointeur vers une variable qui n’existe plus provoque une erreur de syntaxe en mode interprété (variable indéfinie) mais peut générer une erreur plus conséquente en mode compilé.

Les pointeurs vers des variables locales permettent dans de nombreux cas d’économiser des variables process. Les pointeurs vers des variables locales peuvent être utilisés uniquement à l’intérieur d’un même process. Dans le débogueur, lorsque vous affichez un pointeur vers une variable locale déclarée dans une autre méthode, le nom de la méthode d’origine est indiquée entre parenthèses, derrière le pointeur. Par exemple, si vous écrivez dans Méthode1 :
```4d
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
SORT ARRAY(TabPtr->;>) // Tri du tableau
```
Si vous devez vous référer au quatrième élément du tableau à l’aide du pointeur, vous pouvez écrire :
```4d
 TabPtr->{4}:=84
```

### Passer des pointeurs aux méthodes
Vous pouvez passer un pointeur en tant que paramètre d’une méthode. A l’intérieur de la méthode, vous pouvez modifier l’objet référencé par le pointeur. Par exemple, la méthode suivante, `Recoit Deux`, reçoit deux paramètres qui sont des pointeurs. Elle passe l’objet référencé par le premier paramètre en caractères majuscules, et l’objet référencé par le second paramètre en caractères minuscules.
```4d
  // Méthode projet Recoit Deux
  // $1 – Pointeur vers un champ ou une variable de type Chaîne. Passe la chaîne en majuscules.
  // $2 – Pointeur vers un champ ou une variable de type Chaîne. Passe la chaîne en minuscules.
 $1->:=Uppercase($1->)
 $2->:=Lowercase($2->)
```

L'instruction suivante emploie la méthode `Recoit Deux` pour passer un champ en caractères majuscules et une variable en caractères minuscules :
```  
takeTwo(->[MaTable]MonChamp;->$MaVar)
```

Si le champ, [MaTable]MonChamp, contenait la chaîne "dupont", celle-ci deviendrait "DUPONT". Si la variable $MaVar contenait la chaîne "BONJOUR", celle-ci deviendrait "bonjour".

Dans la méthode Recoit Deux (et, en fait, à chaque fois que vous utilisez des pointeurs), il est important que les types de données des objets référencés soient corrects. Dans l’exemple précédent, les pointeurs doivent pointer vers des objets contenant une chaîne ou un texte.

### Pointeurs vers des pointeurs
Si vous aimez compliquer les choses à l'extrême (bien que cela ne soit pas nécessaire dans 4D), vous pouvez utiliser des pointeurs pour référencer d'autres pointeurs. Examinons l’exemple suivant :
```4d
 $MaVar:="Bonjour"
$PointeurUn:=->$MaVar
$PointeurDeux:=->$PointeurUn
($PointeurDeux->)->:="Au revoir"
ALERT(($PointeurDeux->)->)
```
Cet exemple affiche une boîte de dialogue d’alerte contenant “Au revoir”.

Voici la description de chaque ligne de l’exemple :

- $MaVar := "Bonjour" --> Cette ligne place simplement la chaîne "Bonjour" dans la variable $MaVar.
- $PointeurUn := ->$MaVar --> $PointeurUn contient désormais un pointeur vers $MaVar.
- $PointeurDeux :=->$PointeurUn --> $PointeurDeux (une nouvelle variable) contient un pointeur vers $PointeurUn, qui, elle, pointe vers $MaVar.
- ($PointeurDeux->)-> := "Au revoir" --> $PointeurDeux-> référence le contenu de $PointeurUn, qui elle-même référence $MaVar. Par conséquent, ($PointeurDeux->)-> référence le contenu de $MaVar. Donc, dans ce cas, la valeur "Au revoir" est assignée à la $MaVar.
- ALERT (($PointeurDeux->)->) --> C'est ici la même chose que précédemment : $PointeurDeux-> référence le contenu de $PointeurUn, qui elle-même référence $MaVar. Par conséquent, ($PointeurDeux->)-> référence le contenu de $MaVar. Donc, dans ce cas, la boîte de dialogue d'alerte affiche le contenu de $MaVar.

La ligne suivante place la valeur "Bonjour" dans $MaVar :
```4d
($PointeurDeux->)->:="Bonjour"
```

La ligne suivante récupère "Bonjour" à partir de $MaVar et la place dans $NouvelleVar :
```
$NouvelleVar:=($PointeurDeux->)->
```

**Important :** Vous devez utiliser des parenthèses lors des déréférencements multiples.
