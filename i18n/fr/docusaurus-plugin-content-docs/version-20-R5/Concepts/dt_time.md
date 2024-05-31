---
id: time
title: Time
---

Les variables, champs ou expressions de type Heure (Time) peuvent être compris entre 00:00:00 et 596 000:00:00.

Les heures sont stockées dans un format de 24 heures.

Une valeur de type Heure peut être utilisée en tant que numérique. Le nombre correspondant est le nombre de secondes que cette valeur représente à partir de minuit (00:00:00).

**Note :** Dans le _manuel de référence du langage 4D_, les paramètres de type Heure dans les descriptions des commandes sont appelés Heure, sauf spécification explicite.

## Constantes littérales de type heure

Une constante heure est incluse entre deux points d’interrogation (?...?).

Avec une version française de 4D, une heure est structurée sous la forme heure:minute:seconde, deux points (:) séparant les valeurs. Les heures sont stockées dans un format de 24 heures.

Voici quelques exemples de constantes littérales de type heure :

```4d
?00:00:00? // minuit
?09:30:00? // 9:30 du matin
?13:01:59? // 13 heures, 1 minute et 59 secondes
```

Une heure nulle s’écrit ?00:00:00?

**Astuce :** L'éditeur de code propose un raccourci pour saisir une date nulle. Pour cela, saisissez un point d'interrogation (?) et appuyez sur Entrée.

## Opérateurs sur les heures

| Opération        | Syntaxe         | Retourne | Expression                                                                              | Valeur                                     |
| ---------------- | --------------- | -------- | --------------------------------------------------------------------------------------- | ------------------------------------------ |
| Addition         | Heure + Heure   | Time     | ?02:03:04? + ?01:02:03? | ?03:05:07? |
| Soustraction     | Heure – Heure   | Time     | ?02:03:04? – ?01:02:03? | ?01:01:01? |
| Addition         | Heure + Nombre  | Number   | ?02:03:04? + 65                                         | 7449                                       |
| Soustraction     | Heure – Nombre  | Number   | ?02:03:04? – 65                                         | 7319                                       |
| Multiplication   | Heure \* Nombre | Number   | ?02:03:04? \* 2                                         | 14768                                      |
| Division         | Heure / Nombre  | Number   | ?02:03:04? / 2                                          | 3692                                       |
| Division entière | Heure \ Nombre  | Number   | ?02:03:04? \ 2                                          | 3692                                       |
| Modulo           | Heure % Heure   | Time     | ?20:10:00? % ?04:20:00? | ?02:50:00? |
| Modulo           | Heure % Nombre  | Number   | ?02:03:04? % 2                                          | 0                                          |
| Egalité          | Heure = Heure   | Boolean  | ?01:02:03? = ?01:02:03? | True                                       |

```
		||||?01:02:03? = ?01:02:04?	|False|
```

|Inequality	|Time # Time	|Boolean	|?01:02:03? # ?01:02:04?	|True|
||||?01:02:03? # ?01:02:03?	|False|
|Greater than	|Time > Time	|Boolean	|?01:02:04? > ?01:02:03?	|True|
||||		?01:02:03? > ?01:02:03?	|False|
|Less than	|Time < Time	|Boolean	|?01:02:03? < ?01:02:03?	|True|
||||	?01:02:03? < ?01:02:03?	|False|
|Greater than or equal to	|Time >= Time	|Boolean	|?01:02:03? >=?01:02:03?	|True|
||||?01:02:03? >=?01:02:03?	|False|
|Less than or equal to	|Time <= Time	|Boolean	|?01:02:03? <=?01:02:03?|	True|
||||?01:02:04? <=?01:02:03?	|False|

### Exemple 1

Vous pouvez combiner des expressions de type heure et de type numérique à l'aide des fonctions `Time` et `Time string`.

Vous pouvez combiner des expressions Time et Number à l'aide des fonctions `Time` ou `Current time`:

```4d
	//The following line assigns to $vlSeconds the number of seconds   
	//that will be elapsed between midnight and one hour from now
$vlSeconds:=Current time+3600
	//The following line assigns to $vHSoon the time it will be in one hour
$vhSoon:=Time(Current time+3600)
```

La seconde ligne peut également être écrite de la façon suivante :

```4d
  // La ligne suivante assigne à la variable $vhBientôt l'heure qu'il sera dans une heure
 $vhSoon:=Current time+?01:00:00?
```

### Exemple 2

L'opérateur Modulo permet notamment d'ajouter des heures en tenant compte du format sur 24 heures d'une journée :

```4d
$t1:=?23:00:00? // It is 23:00 hours
  // We want to add 2 and a half hours
$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?
$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 hour the next morning
```
