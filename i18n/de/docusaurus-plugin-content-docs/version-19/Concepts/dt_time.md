---
id: time
title: Zeit
---

Datenfelder, Variablen oder Ausdrücke vom Typ Zeit umfassen den Bereich 00:00:00 bis 596.000:00:00.

Zeiten werden im 24 Stundenformat angezeigt.

Ein Wert vom Typ Zeit wird intern wie eine Zahl behandelt. Die von einer Zeit zurückgegebene Zahl ist die Anzahl Sekunden ab Mitternacht (00:00:00).

**Hinweis:** Im *Handbuch 4D Programmiersprache* werden Zeitparameter in der Beschreibung der Befehle generell als Zeit bezeichnet, außer es ist anders angegeben.

## Zeitformate

Eine Zeitkonstante steht zwischen Fragezeichen (?...?).

Ein Zeitformat erscheint in der Reihenfolge Stunde:Minute:Sekunde, getrennt durch Doppelpunkt (:). Zeiten erscheinen im 24-Stunden Format.

Hier ein paar Beispiele:

```4d
?00:00:00? ` Mitternacht
?09:30:00? ` 9:30 am
?13:01:59? ` 13 Uhr, 1 Minute und 59 Sekunden
```

Eine Leerzeit wird als ?00:00:00? angegeben.

**Tipp:** Der Methodeneditor hat ein Tastaturkürzel für Leerzeit. Tippen Sie ein Fragezeichen (?) und drücken die Eingabetaste.

## Zeitoperatoren

| Operation               | Syntax       | Ergibt  | Ausdruck                | Wert       |
| ----------------------- | ------------ | ------- | ----------------------- | ---------- |
| Addition                | Zeit + Zeit  | Zeit    | ?02:03:04? + ?01:02:03? | ?03:05:07? |
| Subtraktion             | Zeit – Zeit  | Zeit    | ?02:03:04? ?01:02:03?   | ?01:01:01? |
| Addition                | Zeit + Zahl  | Zahl    | ?02:03:04? ?01:02:03?   | 7449       |
| Subtraktion             | Zeit – Zahl  | Zahl    | ?02:03:04? ?01:02:03?   | 7319       |
| Multiplikation          | Zeit * Zahl  | Zahl    | ?02:03:04? ?01:02:03?   | 14768      |
| Division                | Zeit / Zahl  | Zahl    | ?02:03:04? ?02:03:04?   | 3692       |
| Ganzzahlige Division    | Zeit \ Zahl | Zahl    | ?02:03:04? ?01:02:03?   | 3692       |
| Modulo                  | Zeit % Zeit  | Zeit    | ?20:10:00? % ?04:20:00? | ?02:50:00? |
| Modulo                  | Zeit % Zahl  | Zahl    | ?02:03:04? % 2          | 0          |
| Gleichheit              | Zeit = Zeit  | Boolean | ?01:02:03? >=?01:02:03? | Wahr       |
|                         |              |         | ?01:02:03? ?01:02:04?   | Falsch     |
| Ungleichheit            | Zeit # Zeit  | Boolean | ?01:02:03? ?01:02:03?   | Wahr       |
|                         |              |         | ?01:02:03? ?01:02:03?   | Falsch     |
| Größer als              | Zeit > Zeit  | Boolean | ?01:02:03? < ?01:02:04? | Wahr       |
|                         |              |         | ?01:02:03? < ?01:02:04? | Falsch     |
| Kleiner als             | Zeit < Zeit  | Boolean | ?01:02:03? ?01:02:04?   | Wahr       |
|                         |              |         | ?01:02:03? ?01:02:03?   | Falsch     |
| Größer als oder gleich  | Zeit >= Zeit | Boolean | ?01:02:03? >=?01:02:03? | Wahr       |
|                         |              |         | ?01:02:03? >=?01:02:04? | Falsch     |
| Kleiner als oder gleich | Zeit <= Zeit | Boolean | ?01:02:03? <=?01:02:03? | Wahr       |
|                         |              |         | ?01:02:03? <=?01:02:03? | Falsch     |

### Beispiel 1

Für eine Zeitangabe, die Ausdrücke vom Typ Zeit und Zahl kombiniert, verwenden Sie die Befehle `Time` und `Time string`.

Mit den Funktionen `Time` oder `Current time` können Sie Ausdrücke vom Typ Zeit und Zahl kombinieren:

```4d
    //The following line assigns to $vlSeconds the number of seconds   
    //that will be elapsed between midnight and one hour from now
$vlSeconds:=Current time+3600
    //The following line assigns to $vHSoon the time it will be in one hour
$vhSoon:=Time(Current time+3600)
```

Die 2. Zeile lässt sich auch einfacher schreiben:

```4d
  // The following line assigns to $vHSoon the time it will be in one hour
 $vhSoon:=Current time+?01:00:00?
```

### Beispiel 2

Der Operator Modulo dient insbesondere zum Hinzufügen von Zeiten im 24-Stunden Format:

```4d
$t1:=?23:00:00? $t1:=?23:00:00? // With a simple addition, $t2 is ?25:30:00?
$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? // It is 23:00 hours
  // We want to add 2 and a half hours
$t2:=$t1 +?02:30:00?
```

