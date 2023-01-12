---
id: data-types
title: Überblick über Datentypen
---

In 4D werden Daten je nach Typ an zwei Stellen verwaltet: Datenfeld der Datenbank und 4D Programmiersprache.

Auch wenn die Datentypen in der Regel gleich sind, sind bestimmte Typen auf Datenbankebene nicht direkt in der Programmiersprache verfügbar und werden automatisch konvertiert. Dagegen lassen sich bestimmte Datentypen nur über die Programmiersprache verwalten. Nachfolgende Übersicht zeigt alle verfügbaren Datentypen und wie sie unterstützt bzw. deklariert werden:

| Datentypen                                      | Datenbank Unterstützung (1) | Programmiersprache Unterstützung | [`var` Deklaration](variables.md#using-the-var-keyword) | [`C_` oder `ARRAY` Deklaration](variables.md#using-a-c_-directive) |
| ----------------------------------------------- | --------------------------- | -------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------ |
| [Alphanumerisch](dt_string.md)                  | Ja                          | Konvertiert in Text              | -                                                       | -                                                                  |
| [Text](Concepts/dt_string.md)                   | Ja                          | Ja                               | `Text`                                                  | `C_TEXT`, `ARRAY TEXT`                                             |
| [Datum](Concepts/dt_date.md)                    | Ja                          | Ja                               | `Datum`                                                 | `C_DATE`, `ARRAY DATE`                                             |
| [Zeit](Concepts/dt_time.md)                     | Ja                          | Ja                               | `Zeit`                                                  | `C_TIME`, `ARRAY TIME`                                             |
| [Boolean](Concepts/dt_boolean.md)               | Ja                          | Ja                               | `Boolean`                                               | `C_BOOLEAN`, `ARRAY BOOLEAN`                                       |
| [Ganzzahl](Concepts/dt_number.md)               | Ja                          | Konvertiert in Lange Ganzzahl    | `Ganzzahl`                                              | `ARRAY INTEGER`                                                    |
| [Lange Ganzzahl](Concepts/dt_number.md)         | Ja                          | Ja                               | `Ganzzahl`                                              | `C_LONGINT`, `ARRAY LONGINT`                                       |
| [Lange Ganzzahl 64 bits](Concepts/dt_number.md) | Ja (SQL)                    | Konvertiert in Zahl              | -                                                       | -                                                                  |
| [Zahl](Concepts/dt_number.md)                   | Ja                          | Ja                               | `Zahl`                                                  | `C_REAL`, `ARRAY REAL`                                             |
| [Undefiniert](Concepts/dt_null_undefined.md)    | -                           | Ja                               | -                                                       | -                                                                  |
| [Null](Concepts/dt_null_undefined.md)           | -                           | Ja                               | -                                                       | -                                                                  |
| [Zeiger](Concepts/dt_pointer.md)                | -                           | Ja                               | `Zeiger`                                                | `C_POINTER`, `ARRAY POINTER`                                       |
| [Bild](Concepts/dt_picture.md)                  | Ja                          | Ja                               | `Bild`                                                  | `C_PICTURE`, `ARRAY PICTURE`                                       |
| [BLOB](Concepts/dt_blob.md)                     | Ja                          | Ja                               | `Blob`, `4D.Blob`                                       | `C_BLOB`, `ARRAY BLOB`                                             |
| [Objekt](Concepts/dt_object.md)                 | Ja                          | Ja                               | `Objekt`                                                | `C_OBJECT`, `ARRAY OBJECT`                                         |
| [Collection](Concepts/dt_collection.md)         | -                           | Ja                               | `Collection`                                            | `C_COLLECTION`                                                     |
| [Variant](Concepts/dt_variant.md)(2)            | -                           | Ja                               | `Variant`                                               | `C_VARIANT`                                                        |

(1) Beachten Sie, dass ORDA die Datenfelder über Objekte (entities) verwaltet und deshalb nur Datentypen unterstützt, die für diese Objekte verfügbar sind. Weitere Informationen dazu finden Sie unter [Objekt](Concepts/dt_object.md).

(2) Variant ist derzeit kein *Daten-*, sondern ein *Variablentyp*, der den Wert eines anderen Datentyps enthalten kann.

## Standardwerte

Werden Variablen über eine Compiler Direktive typisiert, empfangen sie einen Standardwert, den sie während der Arbeitssitzung beibehalten, solange sie nicht zugewiesen werden.

The default value depends on the variable type:

| Typ            | Default value    |
| -------------- | ---------------- |
| Boolean        | Falsch           |
| Datum          | 00-00-00         |
| Lange Ganzzahl | 0                |
| Zeit           | 00:00:00         |
| Bild           | Bildgröße=0      |
| Zahl           | 0                |
| Zeiger         | Nil=wahr         |
| Text           | ""               |
| Blob           | Größe des BLOB=0 |
| Objekt         | Null             |
| Collection     | Null             |
| Variant        | Undefiniert      |


## Datentypen konvertieren

Die 4D Programmiersprache enthält Operatoren und Befehle zum Konvertieren zwischen Datentypen, wo dies von Bedeutung ist. Die 4D Programmiersprache erzwingt die Überprüfung von Datentypen. Sie können nicht schreiben: "abc"+0.5+!12/25/96!-?00:30:45?. Das erzeugt Syntaxfehler.

Nachfolgende Liste zeigt die wichtigsten Datentypen, in welchen Typ sie konvertiert werden können und die dafür verwendeten Befehle:

| Datentyp zum Konvertieren | in String | in Zahl | in Datum | in Zeit | in Boolean |
| ------------------------- | --------- | ------- | -------- | ------- | ---------- |
| String (1)                |           | `Num`   | `Datum`  | `Zeit`  | `Bool`     |
| Zahl (2)                  | `String`  |         |          |         | `Bool`     |
| Datum                     | `String`  |         |          |         | `Bool`     |
| Zeit                      | `String`  |         |          |         | `Bool`     |
| Boolean                   |           | `Num`   |          |         |            |

(1) In JSON formatierte Strings lassen sich über die Funktion `JSON Parse` in skalare Daten, Objekte oder Collections konvertieren.

(2) Werte vom Typ Zeit lassen sich wie Zahlen behandeln.

**Hinweis:** Durch Kombinieren von Operatoren und anderen Befehlen erreichen Sie auch komplexere Datenkonvertierungen.
