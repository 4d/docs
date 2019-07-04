---
id: time
title: Time
---

- A Time field, variable or expression can be in the range of 00:00:00 to 596,000:00:00.
- Times are in 24-hour format.
- A time value can be treated as a number. The number returned from a time is the number of seconds since midnight (00:00:00) that time represents.

**Note:** In the 4D Language Reference manual, Time parameters in command descriptions are denoted as Time, except when marked otherwise.

## Constantes littérales de type heure

Une constante heure est incluse entre deux points d’interrogation (?...?).

Avec une version française de 4D, une heure est structurée sous la forme heure:minute:seconde, deux points (:) séparant les valeurs. Les heures sont stockées dans un format de 24 heures.

Voici quelques exemples de constantes littérales de type heure :

```code4d
?00:00:00? // minuit
?09:30:00? // 9:30 du matin
?13:01:59? // 13 heures, 1 minute et 59 secondes
```

Une heure nulle s’écrit ?00:00:00?

**Astuce :** L'éditeur de méthodes dispose d'un raccourci pour saisir une heure nulle. Pour cela, tapez un point d'interrogation (?) et appuyez sur la touche Entrée.

## Opérateurs sur les heures

| Opération | Syntaxe       | Retourne | Expression              | Valeur     |
| --------- | ------------- | -------- | ----------------------- | ---------- |
| Addition  | Heure + Heure | Heure    | ?02:03:04? + ?01:02:03? | ?03:05:07? | Soustraction |Heure – Heure |Heure |?02:03:04? – ?01:02:03? |?01:01:01?| Addition |Heure + Nombre |Nombre |?02:03:04? + 65 |7449| Soustraction |Heure – Nombre |Nombre |?02:03:04? – 65 |7319| Multiplication |Heure * Nombre |Nombre |?02:03:04? * 2 |14768| Division |Heure / Nombre |Nombre |?02:03:04? / 2 |3692| Division entière |Heure \ Nombre |Nombre |?02:03:04? \ 2 |3692| Modulo |Heure % Heure |Heure |?20:10:00? % ?04:20:00? |?02:50:00?| Modulo |Heure % Nombre |Nombre |?02:03:04? % 2 |0| Egalité |Heure = Heure |Booléen |?01:02:03? = ?01:02:03? |Vrai| ||||?01:02:03? = ?01:02:04? |Faux| Inégalité |Heure # Heure |Booléen |?01:02:03? # ?01:02:04? |Vrai| ||||?01:02:03? # ?01:02:03? |Faux| Supérieur à |Heure > Heure |Booléen |!01-02-04? > ?01:02:03? |Vrai| ||||?01:02:03? > ?01:02:03? |Faux| Inférieur à |Heure < Heure |Booléen |!01-02-03? < ?01:02:04? |True| |||| ?01:02:03? < ?01:02:03? |False| Greater than or equal to |Time >= Time |Boolean |?01:02:03? >=?01:02:03? |Vrai| ||||?01:02:03? >=?01:02:04? |False| Less than or equal to |Time <= Time |Boolean |?01:02:03? <=?01:02:03?| True| ||||?01:02:04? <=?01:02:03? |False| 

### Example 1

To obtain a time expression from an expression that combines a time expression with a number, use the commands Time and Time string.

You can combine expressions of the time and number types using the or functions. Par exemple:

```code4d
  //The following line assigns to $vlSeconds the number of seconds that will be elapsed between midnight and one hour from now
 $vlSeconds:=Current time+3600
  //The following line assigns to $vHSoon the time it will be in one hour
 $vhSoon:=Time(Current time+3600)
```

The second line could be written in a simpler way:

```code4d
  // The following line assigns to $vHSoon the time it will be in one hour
 $vhSoon:=Current time+?01:00:00?
```

### Example 2

The Modulo operator can be used, more specifically, to add times that take the 24-hour format into account:

```code4d
$t1:=?23:00:00? // It is 23:00 p.m.
  // We want to add 2 and a half hours
$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?
$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 a.m. the next morning
```