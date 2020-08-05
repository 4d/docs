---
id: variables
title: Variables
---

Fondamentalement, dans 4D, les données peuvent être stockées de deux manières. **Fields** store data permanently on disk; **variables** store data temporarily in memory.

Lorsque vous définissez votre base, vous indiquez à 4D les noms et les types de champs que vous voulez utiliser. C’est pratiquement la même chose pour les variables — vous leur donnez un nom et un type (cf. [Type de données](Concepts/data-types.md)).

Les variables sont des objets du langage; vous pouvez créer et utiliser des variables qui n’apparaîtront jamais à l'écran. Dans vos formulaires, vous pouvez afficher des variables à l’écran (à l'exception des pointeurs et des BLOB), les utiliser pour saisir des données, et les imprimer dans des états. Dans ces cas, elles se comportent exactement comme des champs, et les mêmes contrôles intégrés sont disponibles lorsque vous les créez . Les variables peuvent également servir à contrôler des boutons, des list box, des zones de défilement, des boutons image, etc., ou à afficher les résultats de calculs ne devant pas être sauvegardés.

## Créer des variables

Vous pouvez créer des variables en les déclarant à l'aide de l'une des commandes des thèmes "Tableaux" ou "Compilateur".

**Note:**Arrays are a particular type of variables. Un tableau est une série ordonnée de variables de même type. Pour plus d'informations, veuillez consulter le thème [Tableaux](Concepts/arrays.md).

Par exemple, si vous souhaitez définir une variable de type texte, il suffira d'écrire :

```4d
 C_TEXT(monTexte)
```

**Note:** Although it is usually not recommended, you can create variables simply by using them; you do not necessarily need to formally define them as you do with fields. Par exemple, si vous voulez créer une variable qui contient la date du jour plus 30 jours, il vous suffit d’écrire dans 4D :

```4d
 MaDate:=Current date+30 //MaDate est créée et prend la valeur de la date courante plus 30 jours
```

Une fois créée, vous pouvez utiliser une variable partout dans votre base. Par exemple, vous pouvez la stocker dans un champ du même type :

```4d
 [MaTable]MonChamp:=MonTexte
```

Voici quelques déclarations de variables simples :

```4d

 C_BLOB(vxMyBlob) // La variable process vxMyBlob est déclarée comme variable de type BLOB
 C_DATE($vdCurDate) // La variable locale $vdCurDate est déclarée comme variable de type Date
 C_C_LONGINT(vg1;vg2;vg3) // Les 3 variables process vg1, vg2 et vg3 sont déclarées comme variables de type Entier long
 C_OBJECT($vObj) // La variable locale $vObj est déclarée comme variable de type Objet
 C_COLLECTION($vCol) // La variable locale $vCol est déclarée comme variable de type Collection
ARRAY LONGINT(alAnArray;10) //La variable process alAnArray est déclarée comme un tableau entier long de 10 éléments
```

## Assigner des valeurs

Vous pouvez donner des valeurs aux variables ou aux tableaux et/ou récupérer leur valeur. Putting data into a variable is called **assigning the data to the variable** and is done with the assignment operator (:=). L’opérateur d’assignation est également utilisé pour assigner des valeurs aux champs.

L’opérateur d’assignation est le premier moyen pour créer une variable et lui donner une valeur. Vous placez le nom de la variable que vous voulez créer à gauche de l’opérateur. Par exemple:

```4d
MonNombre:=3
```

creates the variable _MyNumber_ and puts the number 3 into it. Si MonNombre existait déjà, elle prend simplement la valeur 3.

Bien entendu, les variables ne seraient pas très utiles si vous ne pouviez pas récupérer les valeurs qu’elles contiennent. De nouveau, vous utilisez l’opérateur d’assignation. If you need to put the value of MyNumber in a field called [Products]Size, you would write _MyNumber_ on the right side of the assignment operator:

```4d
[Produits]Taille:=MonNombre
```

In this case, _[Products]Size_ would be equal to 3. Cet exemple est plutôt simple, mais il illustre le moyen élémentaire dont vous disposez pour transférer des données d’un objet vers un autre en utilisant le langage.

Vous assignez des valeurs aux éléments du tableau à l'aide d'accolades ({...}) :

```4d
atNoms{1}:="Richard"
```

## Variables locales, process et interprocess

You can create three types of variables: **local**, **process**, and **interprocess**. La différence entre ces trois types de variables est leur portée, ou les objets pour lesquels elles sont disponibles.

### Variables locales

Une variable locale, comme son nom l’indique, est locale à une méthode — c’est-à-dire accessible uniquement à l’intérieur de la méthode dans laquelle elle a été créée et inaccessible à l’extérieur de cette méthode. Being local to a method is formally referred to as being “local in scope.” Local variables are used to restrict a variable so that it works only within the method.

- Eviter des conflits de noms avec les autres variables
- Utiliser temporairement des valeurs,
- Réduire le nombre de variables process

Le nom d’une variable locale commence toujours par le signe dollar ($) et peut contenir jusqu’à 31 autres caractères. Si vous saisissez un nom plus long, 4D le tronque pour le ramener à 31 caractères.

Lorsque vous développez une base comportant de nombreuses méthodes et variables, il arrive souvent que vous n’ayez besoin d’utiliser une variable que dans une méthode. Vous pouvez alors créer et utiliser une variable locale, sans devoir vous soucier de l’existence d’une autre variable du même nom ailleurs dans la base.

Fréquemment, dans une base de données, des informations ponctuelles sont demandées à l’utilisateur. The `Request` command can obtain this information. Elle affiche une boîte de dialogue comportant un message demandant à l’utilisateur de répondre et, lorsque la réponse est validée, la retourne.   Généralement, il n’est pas nécessaire de conserver cette information très longtemps dans vos méthodes. C’est l’endroit parfait pour utiliser une variable locale. Voici un exemple :

```4d
 $vsID:=Request("Saisissez votre numéro d'identification :")
If(OK=1)
    QUERY([Personnes];[Personnes]ID=$vsID)
 End if
```

Cette méthode demande simplement à l’utilisateur de saisir un numéro d’identification. La réponse est placée dans une variable locale, $vsID, puis la méthode la recherche parmi les champs [Personnes]ID. Une fois la méthode terminée, la variable locale $vsID est effacée de la mémoire. Ce fonctionnement est bien adapté puisque la variable n’est utile qu’une seule fois et dans cette méthode uniquement.

**Note:** Parameters $1, $2... passed to methods are local variables. Pour plus d'informations, veuillez consulter le thème [Paramètres](Concepts/parameters.md).

### Variables process

Une variable process est “visible” uniquement dans le process où elle a été créée. Elle est utilisable par toutes les méthodes du process et toutes les méthodes appelées depuis le process.

Le nom d’une variable process ne comporte aucun préfixe. Ce nom peut contenir jusqu’à 31 caractères.

In interpreted mode, variables are maintained dynamically; they are created and erased from memory “on the fly.” In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. Par exemple, la variable maVar est une certaine variable dans le process P_1 et une autre variable dans le process P_2.

Un process peut lire et écrire des variables process dans un autre process à l'aide des commandes `LIRE VARIABLE PROCESS` et `ECRIRE VARIABLE PROCESS`. Nous vous recommandons de n'utiliser ces commandes que dans le cadre des besoins décrits ci-dessous (qui sont les raisons pour lesquelles ces commandes ont été créées dans 4D) :

- Communication interprocess à des endroits particuliers de votre code
- Gestion du glisser-déposer interprocess
- En client/serveur, communication entre les process sur les postes clients et les procédures stockées exécutées sur le serveur

For more information, see the chapter **Processes** and the description of these commands.

### Variables interprocess

Les variables interprocess sont visibles dans toute la base et sont disponibles pour tous les process. Les variables interprocess sont principalement utilisées pour le partage d’informations entre les process.

> L'utilisation de variables interprocess n'est pas recommandée car elles ne sont pas disponibles depuis le process préemptif et peuvent rendre le code moins maintenable.

Le nom d’une variable interprocess débute toujours par le symbole (<>) — formé du symbole “inférieur à” suivi du symbole “supérieur à” — et peut comporter jusqu’à 31 caractères supplémentaires.

En mode client/serveur, chaque poste (client et serveur) partage la même définition des variables interprocess, mais chacun utilise une instance différente d'une variable.
