---
id: arrays
title: Tableaux
---

Un **tableau** est une série ordonnée de **variables** de même type. Chaque variable est appelée un **élément** du tableau. La taille du tableau doit être définie au moment de sa création ; vous pouvez ensuite la modifier aussi souvent que nécessaire en ajoutant, insérant, ou supprimant des éléments, ou en appelant de nouveau la commande que vous avez utilisée pour créer le tableau. Les éléments sont numérotés de 1 à N, où N est la taille du tableau. Un tableau a toujours un [élément zéro](#using-the-element-zero-of-an-array). Les tableaux sont des variables 4D. Comme toute variable, un tableau a une portée et suit les règles du langage 4D, bien qu'il existe quelques différences spécifiques.

:::tip

Généralement, il est recommandé d'utiliser des **collections** plutôt que des **tableaux**. Les collections sont plus souples et fournissent un large éventail de méthodes spécifiques. Pour plus d'informations, veuillez consutler la section [Collection](Concepts/dt_collection.md).

:::

## Créer des tableaux

Vous créez un tableau au moyen de l'une des commandes de déclaration du thème "Tableaux". Chaque commande de déclaration de tableau peut créer ou redimensionner des tableaux à une ou à deux dimensions. Pour plus d'informations sur les tableaux à deux dimensions, reportez-vous à la section [Tableaux à deux dimensions](#two-dimensional-arrays).

Cette ligne de code crée (déclare) un tableau d'entiers de 10 éléments :

```4d
 ARRAY INTEGER(aiAnArray;10)
```

Ensuite, cette ligne de code redimensionne le même tableau à 20 éléments :

```4d
ARRAY INTEGER(aiAnArray;20)
```

Enfin, cette ligne de code redimensionne le même tableau à 0 élément :

```4d
ARRAY INTEGER(aiAnArray;0)
```

## Affecter des valeurs dans un tableau

Vous référencez les éléments d'un tableau en utilisant des accolades ({…} ). Un nombre entre accolades donne accès à l'adresse d'un élément particulier. L'exemple ci-dessous place cinq noms dans le tableau nommé atNoms et les affiche ensuite dans une fenêtre d'alerte :

```4d
 ARRAY TEXT(atNames;5)
 atNames{1}:="Richard"
 atNames{2}:="Sarah"
 atNames{3}:="Sam"
 atNames{4}:="Jane"
 atNames{5}:="John"
 For($vlElem;1;5)
    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})
 End for
```

Notez la syntaxe atNoms{$vlElem}. Au lieu de spécifier un nombre littéral comme atNoms{3}, vous pouvez utiliser une variable numérique indiquant à quel élément d'un tableau vous accédez. Si vous utilisez les itérations permises par les structures répétitives (`For...End for`, `Repeat...Until` or `While...End while`), vous pouvez accéder à tout ou partie des éléments d'un tableau avec très peu de code.

**Important :** Veillez à ne pas confondre l'opérateur d'affectation (:=) avec l'opérateur de comparaison égal (=). L'affectation et la comparaison sont deux opérations totalement différentes.

### Affecter un tableau à un autre

Contrairement à ce que vous pouvez faire avec des variables de type Texte ou Chaîne, vous ne pouvez pas affecter un tableau à un autre tableau. Pour copier (affecter) un tableau à un autre, utilisez la fonction `COPY ARRAY`.

## Utiliser l'élément zéro d'un tableau

Un tableau a toujours un élément zéro. Même si l'élément zéro n'est pas affiché lorsqu'un tableau est utilisé pour remplir un objet de formulaire, vous pouvez l'utiliser sans réserve(\*) dans le langage.

Voici un autre exemple : vous souhaitez initialiser un objet de formulaire avec une valeur texte mais sans définir de valeur par défaut. Vous pouvez utiliser l'élément zéro du tableau :

```4d
  // méthode pour une combo box ou une liste déroulante
// liée au tableau de variables atName
Case of
:(Form event code=On Load)
// Initialise le tableau (comme indiqué ci-dessus)
// Mais utilise l'élément zéro
		ARRAY TEXT(atName;5)
		atName{0}:=Veuillez sélectionner un élément"
		atName{1}:="Text1"
		atName{2}:="Text2"
		atName{3}:="Text3"
		atName{4}:="Text4"
		atName{5}:="Text5"
	// Positionne le tableau sur l'élément 0
		atName: = 0
End case
```

(\*) Cependant, il y a une exception : dans un tableau de type List Box, l'élément zéro est utilisé en interne pour stocker la valeur précédente d'un élément en cours d'édition, il n'est donc pas possible de l'utiliser dans ce contexte particulier.

## Tableaux à deux dimensions

Chaque commande de déclaration de tableau permet de créer ou de redimensionner des tableaux à une ou à deux dimensions. Voici un exemple :

```4d
 ARRAY TEXT(atTopics;100;50) // Créer un tableau texte composé de 100 lignes de 50 colonnes
```

Les tableaux à deux dimensions sont essentiellement des objets de langage ; vous ne pouvez ni les afficher ni les imprimer.

Dans l'exemple prédédent :

- atTopics est un tableau à deux dimensions
- atTopics{8}{5} est le 5e élément (5e colonne...) de la 8e rangée
- atTopics{20} est la 20e ligne et est elle-même un tableau à une dimension
- `Size of array(atTopics)` retourne 100, qui est le nombre de lignes
- `Size of array(atTopics{17})` retourne 50, qui est le nombre de colonnes de la 17e ligne

Dans l'exemple suivant, un pointeur vers chaque champ de chaque table de la base est stocké dans un tableau à deux dimensions :

```4d
 C_LONGINT($vlLastTable;$vlLastField)
 C_LONGINT($vlFieldNumber)
  // Créer autant de lignes (vides et sans colonnes) qu'il y a de tables
  $vlLastTable:=Last table number
 ARRAY POINTER(<>apFields;$vlLastTable;0) //Tableau 2D avec N lignes et zéro colonnes
  // Pour chaque table
 For($vlTable;1;$vlLastTable)
    If(Is table number valid($vlTable))
       $vlLastField:=Last field number($vlTable)
  // Donner la valeur des éléments
             $vlColumnNumber:=0
       For($vlField;1;$vlLastField)
          If(Is field number valid($vlTable;$vlField))
             $vlColumnNumber:=$vlColumnNumber+1
  // Insérer une colonne dans la ligne de la table en cours
              INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)
  // Affecter la "celulle" avec le pointeur
             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)
          End if
       End for
    End if
 End for
```

Dans la mesure où le tableau à deux dimensions a été initialisé, vous pouvez obtenir ainsi les pointeurs vers les champs d'une table de votre choix :

```4d
  // Obtenir les pointeurs vers les champs pour la table affichée à l'écran :
 COPY ARRAY(◊apFields{Table(Current form table)};$apTheFieldsIamWorkingOn)
  // Initialiser les champs booléens et date
 For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))
    Case of
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)
          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)
          $apTheFieldsIamWorkingOn{$vlElem}->:=True
    End case
 End for
```

**Note :** Comme le montre cet exemple, les lignes des tableaux à deux dimensions peuvent être ou non de la même taille.

## Tableaux et mémoire

A la différence des données que vous stockez sur disque lorsque vous utilisez des tables ou des enregistrements, un tableau réside toujours en mémoire dans son intégralité.

Par exemple, si tous les codes postaux américains étaient saisis dans une table [Codes Postaux], celle-ci contiendrait environ 100 000 enregistrements. De plus, cette table comporterait plusieurs champs : le code postal lui-même ainsi que la ville, le comté et l'état correspondants. Si vous ne sélectionnez que les codes postaux de Californie, 4D crée la sélection d'enregistrements correspondante à l'intérieur de la table [Codes Postaux], et ensuite ne charge les enregistrements que lorsque vous en avez besoin (par exemple, pour les afficher ou les imprimer). En d'autres termes, vous travaillez avec une série ordonnée de valeurs (du même type pour chaque champ) partiellement chargée du disque en mémoire.

Procéder de la même manière avec les tableaux serait laborieux, pour les raisons suivantes :

- Pour maintenir les quatre types d'information (code postal, ville, comté, état), vous auriez besoin de quatre grands tableaux en mémoire.
- Comme un tableau réside en mémoire dans son intégralité, vous seriez obligé de garder tous les codes postaux en mémoire pendant toute la session de travail, même si les données n'étaient pas utilisées en permanence.
- Toujours parce qu'un tableau réside en mémoire dans son intégralité, les quatre tableaux devraient être chargés ou sauvegardés sur le disque à chaque fois que vous démarreriez ou quitteriez l'application, quand bien même les données ne seraient d'aucune utilité pour la session de travail.

**Conclusion :** Les tableaux ont pour rôle de manipuler une certaine quantité de données pendant une période brève. En contrepartie, comme ils résident en mémoire, ils sont d'une utilisation rapide et facile.

Cependant, dans certaines circonstances, vous pouvez avoir besoin de tableaux contenant des centaines ou des milliers d'éléments. Voici les formules à appliquer pour calculer la quantité de mémoire utilisée pour chaque type de tableau :

| Type de Tableau | Calcul de la quantité de mémoire en octets                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| Blob            | (1+nombre d'éléments) \* 12 + somme de la taille de chaque blob                            |
| Boolean         | (31+nombre d'éléments)/8                                                                   |
| Date            | (1+nombre d'éléments) \* 6                                                                 |
| Integer         | (1+nombre d'éléments) \* 2                                                                 |
| Longint         | (1+nombre d'éléments) \* 4                                                                 |
| Object          | (1+nombre d'éléments) \* 8 + somme de la taille de chaque objet                            |
| Picture         | (1+nombre d'éléments) \* 8 + somme de la taille de chaque image                            |
| Pointer         | (1+nombre d'éléments) \* 8 + somme de la taille de chaque pointeur                         |
| Real            | (1+nombre d'éléments) \* 8                                                                 |
| Text            | (1+nombre d'éléments) \* 20 + (somme de la taille de chaque texte) \* 2 |
| Time            | (1+nombre d'éléments) \* 4                                                                 |
| Deux dimensions | (1+nombre d'éléments) \* 16 + somme de la taille de chaque tableau                         |

**Notes :**

- La taille d'un texte en mémoire se calcule par la formule ((Longueur + 1) \* 2)
- Quelques octets supplémentaires sont requis pour le repérage de l'élément, le nombre d'éléments et le tableau lui-même.
