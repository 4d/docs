---
id: date
title: Datum
---

- Datenfelder, Variablen oder Ausdrücke vom Typ Datum umfassen den Bereich 1.1.100 bis 31.12.32.767. Das Datum wird in der deutschen Version von 4D im Format Tag/Monat/Jahr dargestellt, in der internationalen Version im Format Monat/Tag/Jahr.
- Auch wenn die Datumsdarstellung über C_DATE bis zum Jahr 32 767 funktioniert, können über das Betriebssystem laufende Operationen eine niedrigere Grenze vorschreiben.

**Hinweis:** Bei der Beschreibung von Befehlen im Handbuch 4D Programmiersprache werden Datumsparameter als Datum bezeichnet, wenn nichts anderes angegeben ist.

## Datumsformat

Ein Datumsformat steht zwischen Ausrufezeichen (!…!). Ein Datum muss im ISO Format strukturiert werden (!YYYY-MM-DD!). Hier ein paar Beispiele:

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

Ein Nulldatum wird als _!00-00-00!_ angegeben.

**Tipp:** Der Methodeneditor enthält ein Tastenkürzel für Nulldatum. Tippen Sie einfach das Ausrufezeichen (!) und drücken die Enter-Taste.

**Hinweise:**

- Zur Wahrung der Kompatibilität lässt 4D die Eingabe zweistelliger Jahreszahlen zu. Eine zweistellige Jahreszahl bedeutet 20. oder 21. Jahrhundert, je nachdem ob es größer oder kleiner als 30 ist, außer die Einstellung wurde mit dem Befehl `SET DEFAULT CENTURY` geändert.
- Haben Sie die Option "Verwende regionale Systemeinstellungen" (siehe Seite Methoden), müssen Sie das Datumsformat Ihres Betriebssystems verwenden. Im allgemeinen gilt in einer deutschen Umgebung für Datum das Format Tag. Monat. Jahr, getrennt durch Punkte; in der US-Version das Format Monat/Tag/Jahr, getrennt durch Schrägstriche (/).

## Datumsoperatoren

| Operation               | Syntax           | Ergibt  | Ausdruck                     | Wert         |
| ----------------------- | ---------------- | ------- | ---------------------------- | ------------ |
| Datumsdifferenz         | Datum – Datum    | Zahl    | !2017-01-20! - !2017-01-01!  | 19           |
| Datumsaddition          | Datum + Zahl     | Datum   | !2017-01-20! + 9             | !2017-01-29! |
| Datumssubtraktion       | Datum - Zahl     | Datum   | !2017-01-20! - 9             | !2017-01-11! |
| Gleichheit              | Datum = Datum    | Boolean | !2017-01-01! =!2017-01-01!   | Wahr         |
|                         |                  |         | !2017-01-20! = !2017-01-01!  | Falsch       |
| Ungleichheit            | Datum # Datum    | Boolean | !2017-01-20! # !2017-01-01!  | Wahr         |
|                         |                  |         | !2017-01-20! # !2017-01-20!  | Falsch       |
| Größer als              | Datum > Datum    | Boolean | !2017-01-20! > !2017-01-01!  | Wahr         |
|                         |                  |         | !2017-01-20! > !2017-01-20!  | Falsch       |
| Kleiner als             | Datum < Datum    | Boolean | !2017-01-01! < !2017-01-20!  | Wahr         |
|                         |                  |         | !2017-01-20! < !2017-01-20!  | Falsch       |
| Größer als oder gleich  | Datum >= Datum   | Boolean | !2017-01-20! >=!2017-01-01!  | Wahr         |
|                         |                  |         | !2017-01-01!>=!2017-01-20!   | Falsch       |
| Kleiner als oder gleich | Datum \<= Datum | Boolean | !2017-01-01!\<=!2017-01-20! | Wahr         |
|                         |                  |         | !2017-01-20!\<=!2017-01-01! | Falsch       |
