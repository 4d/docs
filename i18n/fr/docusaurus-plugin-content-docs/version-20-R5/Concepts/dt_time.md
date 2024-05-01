---
id: time
title: Time
---

Les variables, champs ou expressions de type Heure peuvent être compris entre 00:00:00 et 596 000:00:00.

Les heures sont stockées dans un format de 24 heures.

Une valeur de type Heure peut être utilisée en tant que numérique. Le nombre correspondant est le nombre de secondes que cette valeur représente à partir de minuit (00:00:00).

**Note:** In the _4D Language Reference_ manual, Time parameters in command descriptions are denoted as Time, except when marked otherwise.

## Constantes littérales de type heure

Une constante heure est incluse entre deux points d’interrogation (?...?).

Avec une version française de 4D, une heure est structurée sous la forme heure:minute:seconde, deux points (:) séparant les valeurs. Les heures sont stockées dans un format de 24 heures.

Voici quelques exemples de constantes littérales de type heure :

```4d
?00:00:00? ` midnight
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minute, and 59 seconds
```

Une heure nulle s’écrit ?00:00:00?

**Tip:** The Code Editor includes a shortcut for entering a null time. To type a null time, enter the question mark (?) character and press Enter.

## Opérateurs sur les heures

| Opération        | Syntaxe         | Retourne | Expression                                                                              | Valeur                                     |
| ---------------- | --------------- | -------- | --------------------------------------------------------------------------------------- | ------------------------------------------ |
| Addition         | Heure + Heure   | Time     | ?02:03:04? + ?01:02:03? | ?03:05:07? |
| Soustraction     | Heure – Heure   | Time     | ?02:03:04? – ?01:02:03? | ?01:01:01? |
| Addition         | Heure + Nombre  | Number   | ?02:03:04? ?01:02:03?   | 7449                                       |
| Soustraction     | Heure – Nombre  | Number   | ?02:03:04? ?01:02:03?   | 7319                                       |
| Multiplication   | Heure \* Nombre | Number   | ?02:03:04? ?01:02:03?   | 14768                                      |
| Division         | Heure / Nombre  | Number   | ?02:03:04? ?02:03:04?   | 3692                                       |
| Division entière | Heure \ Nombre  | Number   | ?02:03:04? ?01:02:03?   | 3692                                       |
| Modulo           | Heure % Heure   | Time     | ?20:10:00? % ?04:20:00? | ?02:50:00? |
| Modulo           | Heure % Nombre  | Number   | ?02:03:04? ?02:03:04?   | 0                                          |
| Egalité          | Heure = Heure   | Boolean  | ?01:02:03? ?01:02:03?   | True                                       |

```
		||||?01:02:03? = ?01:02:04?	|False|
```

|Inequality	|Time # Time	|Boolean	|?01:02:03? ?01:02:03?	|True|
||||?01:02:03? ?01:02:03?	|False|
|Greater than	|Time > Time	|Boolean	|?01:02:04? > ?01:02:03?	|True|
||||		?01:02:03? > ?01:02:03?	|False|
|Less than	|Time < Time	|Boolean	|?01:02:03? < ?01:02:03?	|True|
||||	?01:02:03? < ?01:02:03?	|False|
|Greater than or equal to	|Time >= Time	|Boolean	|?01:02:03? >=?01:02:03?	|True|
||||?01:02:03? >=?01:02:03?	|False|
|Less than or equal to	|Time <= Time	|Boolean	|?01:02:03? <=?01:02:03?|	True|
||||?01:02:04? <=?01:02:03?	|False|

### Exemple 1

To obtain a time expression from an expression that combines a time expression with a number, use the commands `Time` and `Time string`.

You can combine expressions of the time and number types using the `Time` or `Current time` functions:

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
