---
id: date
title: Datum
---

- Datenfelder, Variablen oder Ausdrücke vom Typ Datum umfassen den Bereich 1.1.100 bis 31.12.32.767. Das Datum wird in der deutschen Version von 4D im Format Tag/Monat/Jahr dargestellt, in der internationalen Version im Format Monat/Tag/Jahr.
- Auch wenn die Datumsdarstellung über C_DATE bis zum Jahr 32 767 funktioniert, können über das Betriebssystem laufende Operationen eine niedrigere Grenze vorschreiben.

**Note:** In the 4D Language Reference manual, Date parameters in command descriptions are denoted as Date, except when marked otherwise.

## Datumsformat

Ein Datumsformat steht zwischen Ausrufezeichen (!…!). Ein Datum muss im ISO Format strukturiert werden (!YYYY-MM-DD!). Hier ein paar Beispiele:

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

A null date is specified by _!00-00-00!_.

**Tip:** The Method Editor includes a shortcut for entering a null date. Tippen Sie einfach das Ausrufezeichen (!) und drücken die Enter-Taste.

**Hinweise:**

- Zur Wahrung der Kompatibilität lässt 4D die Eingabe zweistelliger Jahreszahlen zu. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the `SET DEFAULT CENTURY` command.
- Haben Sie die Option "Verwende regionale Systemeinstellungen" (siehe Seite Methoden), müssen Sie das Datumsformat Ihres Betriebssystems verwenden. Im allgemeinen gilt in einer deutschen Umgebung für Datum das Format Tag. Monat. Jahr, getrennt durch Punkte; in der US-Version das Format Monat/Tag/Jahr, getrennt durch Schrägstriche (/).

## Datumsoperatoren

| Operation               | Syntax         | Ergibt  | Ausdruck                     | Wert         |
| ----------------------- | -------------- | ------- | ---------------------------- | ------------ |
| Datumsdifferenz         | Datum – Datum  | Zahl    | !2017-01-20! - !2017-01-01!  | 19           |
| Datumsaddition          | Datum + Zahl   | Datum   | !2017-01-20! + 9             | !2017-01-29! |
| Datumssubtraktion       | Datum - Zahl   | Datum   | !2017-01-20! - 9             | !2017-01-11! |
| Gleichheit              | Datum = Datum  | Boolean | !2017-01-01! =!2017-01-01!   | Wahr         |
|                         |                |         | !2017-01-20! = !2017-01-01!  | Falsch       |
| Ungleichheit            | Datum # Datum  | Boolean | !2017-01-20! # !2017-01-01!  | Wahr         |
|                         |                |         | !2017-01-20! # !2017-01-20!  | Falsch       |
| Größer als              | Date > Date    | Boolean | !2017-01-20! > !2017-01-01!  | Wahr         |
|                         |                |         | !2017-01-20! > !2017-01-20!  | Falsch       |
| Kleiner als             | Date < Date    | Boolean | !2017-01-01! < !2017-01-20!  | Wahr         |
|                         |                |         | !2017-01-20! < !2017-01-20!  | Falsch       |
| Größer als oder gleich  | Date >= Date   | Boolean | !2017-01-20! >=!2017-01-01!  | Wahr         |
|                         |                |         | !2017-01-01!>=!2017-01-20!   | Falsch       |
| Kleiner als oder gleich | Date \<= Date | Boolean | !2017-01-01!\<=!2017-01-20! | Wahr         |
|                         |                |         | !2017-01-20!\<=!2017-01-01! | Falsch       |
