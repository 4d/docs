---
id: arrays
title: Tableaux
---

Un **tableau** est une série ordonnée de **variables** de même type. Chaque variable est appelée un **élément** du tableau. La taille du tableau doit être définie au moment de sa création ; vous pouvez ensuite la modifier aussi souvent que nécessaire en ajoutant, insérant, ou supprimant des éléments, ou en appelant de nouveau la commande que vous avez utilisée pour créer le tableau. Les éléments sont numérotés de 1 à N, où N est la taille du tableau. Un tableau a toujours un [élément zéro](#using-the-element-zero-of-an-array). Les tableaux sont des variables 4D. Comme toute variable, un tableau a une portée et suit les règles du langage 4D, bien qu'il existe quelques différences spécifiques.

> Généralement, il est recommandé d'utiliser des **collections** plutôt que des **tableaux**. Les collections sont plus souples et fournissent un large éventail de méthodes spécifiques. Pour plus d'informations, veuillez consutler la section [Collection](Concepts/dt_collection.md).

## Créer des tableaux

Vous créez un tableau au moyen de l'une des commandes de déclaration du thème "Tableaux". Chaque commande de déclaration de tableau peut créer ou redimensionner des tableaux à une ou à deux dimensions. Pour plus d'informations sur les tableaux à deux dimensions, reportez-vous à la section [Tableaux à deux dimensions](#two-dimensional-arrays).

Cette ligne de code crée (déclare) un tableau d'entiers de 10 éléments :

```code4d
 TABLEAU ENTIER(aiUnTableau;10)
```

Ensuite, cette ligne de code redimensionne le même tableau à 20 éléments :

```code4d
TABLEAU ENTIER(aiUnTableau;20)
```

Enfin, cette ligne de code redimensionne le même tableau à 0 élément :

```code4d
TABLEAU ENTIER(aiUnTableau;0)
```

## Affecter des valeurs dans un tableau

Vous référencez les éléments d'un tableau en utilisant des accolades ({…} ). Un nombre entre accolades donne accès à l'adresse d'un élément particulier. Ce nombre est appelé numéro de l'élément. L'exemple ci-dessous place cinq noms dans le tableau nommé atNoms et les affiche ensuite dans une fenêtre d'alerte :

```code4d
 TABLEAU TEXTE(atNoms;5)
 atNoms{1}:="Richard"
 atNoms{2}:="Sarah"
 atNoms{3}:="Sam"
 atNoms{4}:="Jane"
 atNoms{5}:="John"
Boucle($vlElem;1;5)
    ALERTE("L'élément #"+Chaine($vlElem)+" est égal à: "+atNoms{$vlElem})
Fin de boucle
```

Notez la syntaxe atNoms{$vlElem}. Au lieu de spécifier un nombre littéral comme atNoms{3}, vous pouvez utiliser une variable numérique indiquant à quel élément d'un tableau vous accédez. Si vous utilisez les itérations permises par les structures répétitives (`Boucle...Fin de boucle`, `Repeter...Jusque` ou `Tant que...Fin tant que`), vous pouvez accéder à tout ou partie des éléments d'un tableau avec très peu de code.

**Important :** Veillez à ne pas confondre l'opérateur d'affectation (:=) avec l'opérateur de comparaison égal (=). L'affectation et la comparaison sont deux opérations totalement différentes.

### Affecter un tableau à un autre

Contrairement à ce que vous pouvez faire avec des variables de type Texte ou Chaîne, vous ne pouvez pas affecter un tableau à un autre tableau. Pour copier (affecter) un tableau à un autre, utilisez la fonction `COPIER TABLEAU`.

## Utiliser l'élément zéro d'un tableau

Un tableau a toujours un élément zéro. Même si l'élément zéro n'est pas affiché lorsqu'un tableau est utilisé pour remplir un objet de formulaire, vous pouvez l'utiliser sans réserve(*) dans le langage.

Voici un autre exemple : vous voulez exécuter une action seulement lorsque vous cliquez sur un élément autre que l'élément préalablement sélectionné. Pour cela, vous devez garder la trace de chaque élément sélectionné. Une façon de le faire est d'utiliser une variable process dans laquelle vous conservez le numéro de l'élément sélectionné. Une autre manière consiste à utiliser l'élément zéro du tableau :

```code4d
  // Méthode objet zone de défilement atNoms
  Au cas ou
    :(Evenement formulaire=Sur chargement)
   //Initialisons le tableau
       TABLEAU TEXTE(atNoms;5)
  // ...
  // Initialiser l'élément zéro avec le numéro
  // de l'élément courant sélectionné sous sa forme alphanumérique
  // Ici vous commencez sans élément sélectionné
       atNoms{0}:="0"
 
    :(Evenement formulaire=Sur libération)
  // Nous n'avons plus besoin du tableau
       EFFACER VARIABLE(atNoms)
 
    :(Evenement formulaire=Sur clic)
       Si(atNoms#0)
          Si(atNoms#Num(atNoms{0}))
             vtInfo:="Vous avez cliqué sur : "+atNoms{atNoms}+" qui n'était pas précédemment sélectionné."
             atNoms{0}:=Chaine(atNoms)
          Fin de si
       Fin de si
    :(Evenement formulaire=Sur double clic)
       Si(atNoms#0)
          ALERTE("Vous avez double-cliqué sur : "+atNoms{atNoms})
       Fin de si
 Fin de cas
```

(*) However, there is one exception: in an array type List Box, the zero element is used internally to store the previous value of an element being edited, so it is not possible to use it in this particular context.

## Tableaux à deux dimensions

Chaque commande de déclaration de tableau permet de créer ou de redimensionner des tableaux à une ou à deux dimensions. Exemple :

```code4d
 TABLEAU TEXTE(atTopics;100;50) // Créer un tableau texte composé de 100 lignes de 50 colonnes
```

Les tableaux à deux dimensions sont essentiellement des objets de langage ; vous ne pouvez ni les afficher ni les imprimer.

Dans l'exemple prédédent :

- atTopics est un tableau à deux dimensions
- atTopics{8}{5} est le 5e élément (5e colonne...) de la 8e ligne
- atTopics{20} est la 20e ligne et est elle-même un tableau à une dimension
- (atTopics) retourne 100, qui est le nombre de lignes
- (atTopics{17}) retourne 50, qui est le nombre de colonnes de la 17e ligne

Dans l'exemple suivant, un pointeur vers chaque champ de chaque table de la base est stocké dans un tableau à deux dimensions :

```code4d
 C_ENTIER LONG($vlDerniereTable;$vlDernierChamp)
 C_ENTIER LONG($vlNumeroChamp)
  // Créer autant de lignes (vides et sans colonnes) qu'il y a de tables
 $vlDerniereTable:=Lire numero derniere table
 TABLEAU POINTEUR(<>apChamps;$vlDerniereTable;0) `Tableau 2D avec N lignes et zéro colonnes
  // Pour chaque table
 Boucle($vlTable;1;$vlDerniereTable)
    Si(Est un numero de table valide($vlTable))
       $vlDernierChamp:=Lire numero dernier champ($vlTable)
  // Donner la valeur des éléments
       $vlNumeroColonne:=0
       Boucle($vlChamp;1;$vlDernierChamp)
          Si(Est un numero de champ valide($vlTable;$vlChamp))
             $vlNumeroColonne:=$vlNumeroColonne+1
  // Insérer une colonne dans la ligne de la table en cours
             INSERER DANS TABLEAU(<>apChamps{$vlTable};$vlNumeroColonne;1)
  // Affecter la "celulle" avec le pointeur
             <>apChamps{$vlTable}{$vlNumeroColonne}:=Champ($vlTable;$vlChamp)
          Fin de si
       Fin de boucle
    Fin de si
 Fin de boucle
```

Dans la mesure où le tableau à deux dimensions a été initialisé, vous pouvez obtenir ainsi les pointeurs vers les champs d'une table de votre choix :

```code4d
  // Obtenir les pointeurs vers les champs pour la table affichée à l'écran:
 COPIER TABLEAU(◊apChamps{Table(Table du formulaire courant)};$apMesChampsdeTravail)
  // Initialiser les champs booléens et date
 Boucle($vlElem;1;Taille tableau($apMesChampsdeTravail))
    Au cas ou
       :(Type($apMesChampsdeTravail{$vlElem}->)=Is Date)
          $apMesChampsdeTravail{$vlElem}->:=Date du jour
       :(Type($apMesChampsdeTravail{$vlElem}->)=Is Boolean)
          $apMesChampsdeTravail{$vlElem}->:=Vrai
    Fin de cas
 Fin de boucle
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

| Type de Tableau | Calcul de la quantité de mémoire en octets                              |
| --------------- | ----------------------------------------------------------------------- |
| Blob            | (1+nombre d'éléments) * 12 + somme de la taille de chaque blob          |
| Booléen         | (31+nombre d'éléments)/8                                                |
| Date            | (1+nombre d'éléments) * 6                                               |
| Entier long     | (1+nombre d'éléments) * 2                                               |
| Entier long     | (1+nombre d'éléments) * 4                                               |
| Objet           | (1+nombre d'éléments) * 8 + somme de la taille de chaque objet          |
| Image           | (1+nombre d'éléments) * 8 + somme de la taille de chaque image          |
| Pointeur        | (1+nombre d'éléments) * 8 + somme de la taille de chaque pointeur       |
| Réel            | (1+nombre d'éléments) * 8                                               |
| Texte           | (1+nombre d'éléments) * 20 + (somme de la taille de chaque texte) * 2 |
| Heure           | (1+nombre d'éléments) * 4                                               |
| Deux dimensions | (1+nombre d'éléments) * 16 + somme de la taille de chaque tableau       |

**Notes :**

- La taille d'un texte en mémoire se calcule par la formule ((Longueur + 1) * 2)
- Quelques octets supplémentaires sont requis pour le repérage de l'élément, le nombre d'éléments et le tableau lui-même.