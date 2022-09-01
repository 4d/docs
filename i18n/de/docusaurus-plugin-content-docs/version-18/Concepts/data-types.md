---
id: data-types
title: Überblick über Datentypen
---

In 4D werden Daten je nach Typ an zwei Stellen verwaltet: Datenfeld der Datenbank und 4D Programmiersprache.

Auch wenn die Datentypen in der Regel gleich sind, sind bestimmte Typen auf Datenbankebene nicht direkt in der Programmiersprache verfügbar und werden automatisch konvertiert. Dagegen lassen sich bestimmte Datentypen nur über die Programmiersprache verwalten. Nachfolgende Übersicht zeigt alle verfügbaren Datentypen und wie sie unterstützt bzw. deklariert werden:

| Datentypen                                      | Datenbank Unterstützung (1) | Programmiersprache Unterstützung | Variable Deklaration         |
| ----------------------------------------------- | --------------------------- | -------------------------------- | ---------------------------- |
| [Alphanumerisch](dt_string.md)                  | Ja                          | Konvertiert in Text              | -                            |
| [Text](Concepts/dt_string.md)                   | Ja                          | Ja                               | `C_TEXT`, `ARRAY TEXT`       |
| [Datum](Concepts/dt_date.md)                    | Ja                          | Ja                               | `C_DATE`, `ARRAY DATE`       |
| [Zeit](Concepts/dt_time.md)                     | Ja                          | Ja                               | `C_TIME`, `ARRAY TIME`       |
| [Boolean](Concepts/dt_boolean.md)               | Ja                          | Ja                               | `C_BOOLEAN`, `ARRAY BOOLEAN` |
| [Ganzzahl](Concepts/dt_number.md)               | Ja                          | Konvertiert in Lange Ganzzahl    | `ARRAY INTEGER`              |
| [Lange Ganzzahl](Concepts/dt_number.md)         | Ja                          | Ja                               | `C_LONGINT`, `ARRAY LONGINT` |
| [Lange Ganzzahl 64 bits](Concepts/dt_number.md) | Ja (SQL)                    | Konvertiert in Zahl              | -                            |
| [Zahl](Concepts/dt_number.md)                   | Ja                          | Ja                               | `C_REAL`, `ARRAY REAL`       |
| [Undefiniert](Concepts/dt_null_undefined.md)    | -                           | Ja                               | -                            |
| [Null](Concepts/dt_null_undefined.md)           | -                           | Ja                               | -                            |
| [Zeiger](Concepts/dt_pointer.md)                | -                           | Ja                               | `C_POINTER`, `ARRAY POINTER` |
| [Bild](Concepts/dt_picture.md)                  | Ja                          | Ja                               | `C_PICTURE`, `ARRAY PICTURE` |
| [BLOB](Concepts/dt_blob.md)                     | Ja                          | Ja                               | `C_BLOB`, `ARRAY BLOB`       |
| [Objekt](Concepts/dt_object.md)                 | Ja                          | Ja                               | `C_OBJECT`, `ARRAY OBJECT`   |
| [Collection](Concepts/dt_collection.md)         | -                           | Ja                               | `C_COLLECTION`               |
| [Variant](Concepts/dt_variant.md)(2)            | -                           | Ja                               | `C_VARIANT`                  |

(1) Beachten Sie, dass ORDA die Datenfelder über Objekte (entities) verwaltet und deshalb nur Datentypen unterstützt, die für diese Objekte verfügbar sind. Weitere Informationen dazu finden Sie unter [Objekt](Concepts/dt_object.md).

(2) Variant ist derzeit kein *Daten-*, sondern ein *Variablentyp*, der den Wert eines anderen Datentyps enthalten kann.

## Standardwerte

Werden Variablen über eine Compiler Direktive typisiert, empfangen sie einen Standardwert, den sie während der Arbeitssitzung beibehalten, solange sie nicht zugewiesen werden.

Der Standardwert richtet sich nach Typ und Kategorie der Variablen, der Kontext seiner Ausführung (interpretiert oder kompiliert), sowie im kompilierten Modus die Optionen, die auf der Seite Compiler der Datenbank-Eigenschaften definiert wurden:

- Prozess- und Interprozessvariablen werden immer "auf Leer" gesetzt, d.h. je nach Fall ein leerer String, ein leeres BLOB, ein Zeiger Nil, ein leeres Datum (00-00-00), 0 für Zahl, etc.
- Lokale Variablen werden wie folgt gesetzt:
    - Im interpretierten Modus: auf Leer
    - Im kompilierten Modus je nach der Option **Lokale Variablen initialisieren** auf der Seite Compiler der Einstellungen:
        - "auf Leer": auf Leer (siehe oben)
        - " auf zufälligen Wert": 0x72677267 für Zahlen und Uhrzeiten, immer Wahr für Boolean, dasselbe wie "auf Null" für die anderen
        - "Nein": keine Initialisierung, d.h. das was in RAM ist, wird für die Variablen verwendet, analog zu Werten, die vor anderen Variablen verwendet werden. **Hinweis:** 4D empfiehlt, "auf Leer" zu verwenden.

Nachfolgende Übersicht erläutert diese Standardwerte:

| Typ            | Interprozess/Prozess (interpretiert/kompiliert), Lokal (interpretiert/kompiliert "auf Null") | Lokal kompiliert "zufälliger Wert" | Lokal kompiliert "Nein"        |
| -------------- | -------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------ |
| Boolean        | Falsch                                                                                       | Wahr                               | Wahr (variiert)                |
| Datum          | 00-00-00                                                                                     | 00-00-00                           | 00-00-00                       |
| Lange Ganzzahl | 0                                                                                            | 1919382119                         | 909540880 (variiert)           |
| Zeit           | 00:00:00                                                                                     | 533161:41:59                       | 249345:34:24 (variiert)        |
| Bild           | Bildgröße=0                                                                                  | Bildgröße=0                        | Bildgröße=0                    |
| Zahl           | 0                                                                                            | 1.250753659382e+243                | 1.972748538022e-217 (variiert) |
| Zeiger         | Nil=wahr                                                                                     | Nil=wahr                           | Nil=wahr                       |
| Text           | ""                                                                                           | ""                                 | ""                             |
| Blob           | Größe des BLOB=0                                                                             | Größe des BLOB=0                   | Größe des BLOB=0               |
| Objekt         | Null                                                                                         | Null                               | Null                           |
| Collection     | Null                                                                                         | Null                               | Null                           |
| Variant        | Undefiniert                                                                                  | Undefiniert                        | Undefiniert                    |


## Datentypen konvertieren

Die 4D Programmiersprache enthält Operatoren und Befehle zum Konvertieren zwischen Datentypen, wo dies von Bedeutung ist. Die 4D Programmiersprache erzwingt die Überprüfung von Datentypen. Sie können nicht schreiben: "abc"+0.5+!12/25/96!-?00:30:45?. Das erzeugt Syntaxfehler.

Nachfolgende Liste zeigt die wichtigsten Datentypen, in welchen Typ sie konvertiert werden können und die dafür verwendeten Befehle:

| Datentyp zum Konvertieren | in String | in Zahl | in Datum | in Zeit | in Boolean |
| ------------------------- | --------- | ------- | -------- | ------- | ---------- |
| String (1)                |           | Num     | Datum    | Zeit    | Bool       |
| Zahl (2)                  | String    |         |          |         | Bool       |
| Datum                     | String    |         |          |         | Bool       |
| Zeit                      | String    |         |          |         | Bool       |
| Boolean                   |           | Num     |          |         |            |

(1) In JSON formatierte Strings lassen sich über die Funktion `JSON Parse` in skalare Daten, Objekte oder Collections konvertieren.

(2) Werte vom Typ Zeit lassen sich wie Zahlen behandeln.

**Hinweis:** Durch Kombinieren von Operatoren und anderen Befehlen erreichen Sie auch komplexere Datenkonvertierungen.
