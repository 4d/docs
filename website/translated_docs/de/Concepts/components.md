---
id: components
title: Komponenten
---

Eine 4D Komponente besteht aus einer Reihe von 4D Methoden und Formularen mit einer oder mehreren Funktionalitäten, die sich in verschiedenen Anwendungen installieren lassen. Sie können z. B. eine 4D E-Mail Komponente entwickeln, die alle Aspekte von Senden, Empfangen und Speichern von E-Mails in 4D Anwendungen verwaltet.

4D Komponenten werden direkt aus 4D erstellt und installiert. Komponenten werden ähnlich wie [ Plug-Ins](Concepts/plug-ins.md) verwaltet. Es gelten folgende Regeln:

- Eine Komponente besteht aus einer gängigen Strukturdatei (kompiliert oder nicht) mit der Standardarchitektur oder in Form eines Pakets (siehe .4dbase Extension).
- Zur Installation in einem Anwendungsprojekt kopieren Sie einfach die Komponente in den Ordner "Components" des Projekts auf dieselbe Ebene wie den Projektordner.
- Eine Komponente kann die meisten der 4D Elemente aufrufen: Projektmethoden, Projektformulare, Menüleisten, Auswahllisten, Bilder aus der Objektbibliothiek, usw. Sie kann keine Datenbankmethoden und Trigger aufrufen.
- In 4D Komponenten können Sie weder Standardtabellen noch Datendateien verwenden. Eine Komponente kann jedoch Tabellen, Felder und Datendateien über Operationen externer Anwendungen erstellen bzw. verwenden. Dies sind separate 4D Anwendungen, in denen Sie mit SQL Befehlen arbeiten.


## Definitionen

Zur Handhabung von Komponenten in 4D sind folgende Begriffe und Konzepte von Bedeutung:

- **Matrix Projekt**: 4D Projekt zum Entwickeln der Komponente. Das Matrix Projekt ist ein Standardprojekt ohne spezifische Attribute. Es bildet eine einzelne Komponente. Das Matrix Projekt wird kompiliert oder unkompiliert in den Ordner "Components" des Projekts kopiert, das die Komponente verwendet. Das ist das Host Anwendungsprojekt.
- **Host Projekt**: Anwendungsprojekt, in dem eine Komponente installiert und verwendet wird.
- **Komponente**: Matrix Projekt, kompiliert oder nicht, das in den Ordner "Components" der Host Anwendung kopiert wird und deren Inhalt in Host Anwendungen verwendet wird.

Beachten Sie, dass ein Projekt sowohl vom Typ “Matrix” als auch “Host” sein kann, d. h. ein Matrix Projekt kann selbst eine oder mehrere Komponenten verwenden. Eine Komponente kann dagegen selbst keine untergeordneten Komponenten verwenden.


### Komponenten durch Kompilieren schützen

Standardmäßig sind alle Projektmethoden eines Matrix Projekts, das als Komponente installiert ist, potentiell vom Host Projekt aus sichtbar. Das bedeutet im einzelnen:

- Gemeinsam verwendete Projektmethoden erscheinen im Explorer auf der Seite Methoden und lassen sich in den Methoden des Host Projekts aufrufen. Ihr Inhalt lässt sich auswählen und aus der Vorschau des Explorers kopieren. Sie sind auch im Debugger sichtbar. Sie lassen sich jedoch im Methodeneditor weder öffnen, noch verändern.
- Andere Projektmethoden des Matrix Projekts erscheinen nicht im Explorer, sind jedoch ebenfalls im Debugger des Host Projekts sichtbar.

Um die Projektmethoden einer Komponente wirksam zu schützen, kompilieren Sie einfach das Matrix Projekt und liefern es als .4dz-Datei. Wird ein kompiliertes Matrix Projekt als Komponente installiert, gilt folgendes:

- Gemeinsam verwendete Projektmethoden erscheinen im Explorer auf der Seite Methoden und lassen sich in den Methoden des Host Projekts aufrufen. Ihr Inhalt erscheint jedoch weder in der Vorschau noch im Debugger.
- Die anderen Projektmethoden des Matrix Projekts erscheinen nie.


## Projektmethoden gemeinsam nutzen
Per Definition werden alle Projektmethoden in die Komponente integriert (das Projekt ist die Komponente), d. h. die Komponente kann sie aufrufen und ausführen.

Andererseits sind diese Projektmethoden standardmäßig nicht sichtbar und lassen sich in Host Projekten auch nicht aufrufen. Im Matrix Projekt müssen Sie die Methoden, die Sie mit dem Host Projekt teilen wollen, explizit angeben. Diese Projektmethoden lassen sich im Code des Host Projekts aufrufen. Sie lassen sich jedoch im Methodeneditor des Host Projekts nicht verändern. Diese Methoden sind die **Schnittstelle** zum Aufrufen der Komponente.

**Hinweis:** Aus Sicherheitsgründen kann die Komponente standardmäßig keine Projektmethoden ausführen, die zum Host Projekt gehören. In manchen Fällen müssen Sie jedoch zulassen, dass eine Komponente auf die Projektmethoden Ihres Host Projekts zugreifen kann. Dazu müssen Sie die Projektmethode explizit dem Host Projekt zuweisen, das Sie für die Komponenten zugänglich machen wollen.

![](assets/en/Concepts/pict516563.en.png)

## Variablen übergeben

Lokale, Prozess- und Interprozess Variablen werden nicht von Komponenten und Host Projekten gemeinsam genutzt. Die einzige Möglichkeit, aus dem Host Projekt auf Variablen von Komponenten zuzugreifen und umgekehrt, sind Zeiger.

Beispiel mit Array:

```4d
//In the host project:
     ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

//In the component, the AMethod project method contains:
     APPEND TO ARRAY($1->;2)
```

Beispiele mit Variablen:

```4d
 C_TEXT(myvariable)
 component_method1(->myvariable)
 C_POINTER($p)
 $p:=component_method2(...)
```


Über Zeiger können Komponenten und Host Projekt miteinander kommunizieren. Dabei müssen Sie folgendes berücksichtigen:

- Der 4D Befehl `Get pointer` gibt keinen Zeiger auf eine Variable des Host Projekts zurück, wenn sie von einer Komponenten aus aufgerufen wird und umgekehrt.

- Die Architektur für Komponenten lässt zu, dass dasselbe interpretierte Projekt sowohl interpretierte als auch kompilierte Komponenten enthalten kann. In einem kompilierten Projekt können dagegen nur kompilierte Komponenten verwendet werden. Für diesen Fall gilt folgende Regelung für Zeiger: Der Interpreter kann einen im kompilierten Modus erstellten Zeiger auflösen. Er kann jedoch im kompilierten Modus keinen Zeiger auflösen, der im interpretierten Modus erstellt wurde. Dieses Prinzip wollen wir an folgendem Beispiel erläutern: Es gibt die beiden Komponenten C (kompiliert) und I (interpretiert), die im selben Host Projekt installiert sind.
 - Definiert Komponente C die Variable `myCvar`,  kann Komponente I über den Zeiger `->myCvar` auf diese Variable zugreifen.
 - Definiert Komponente I die Variable `myIvar` variable, kann Komponente C über den Zeiger` ->myIvar` nicht auf diese Variable zugreifen. Diese Syntax verursacht einen Ausführungsfehler.

- Wir raten davon ab, Zeiger bei Komponenten über den 4D Befehl `RESOLVE POINTER` miteinander zu vergleichen, da durch die Partitionierung von Variablen gleichnamige Variablen nebeneinander existieren können, die jedoch in einer Komponente ganz anderen Inhalt haben können als im Host Projekt bzw. einer anderen Komponente. Auch der Variablentyp kann in beiden Kontexten unterschiedlich sein. Zeigen z. B. `myptr1` und `myptr2` jeweils auf eine Variable, kann der folgende Vergleich ein inkorrektes Ergebnis zurückgeben:

```4d
     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)
     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)
     If(vVarName1=vVarName2)
      //This test returns True even though the variables are different
```
In diesem Fall müssen Sie die Zeiger miteinander vergleichen:
```4d
     If(myptr1=myptr2) //This test returns False
```

## Auf Tabellen des Host Projekts zugreifen

Auch wenn Komponenten keine Tabellen verwenden können, können Host Projekte und Komponenten über Zeiger miteinander kommunizieren. Hier sehen Sie beispielsweise eine Methode, die sich in einer Komponente aufrufen lässt:

```4d
// calling a component method
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Der Code von `methCreateRec` in der Komponente lautet:

```4d
C_POINTER($1) //Pointer on a table in host project
C_POINTER($2) //Pointer on a field in host project
C_TEXT($3) // Value to insert

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

## Reichweite der Befehle der Programmiersprache

Eine Komponente kann jeden Befehl der 4D Programmiersprache verwenden, außer er gehört zur Liste [nicht verwendbare Befehle](#unusable-commands).

Von einer Komponente aufgerufene Befehle laufen im Kontext dieser Komponente, außer für den Befehl `EXECUTE METHOD`. Dieser verwendet den Kontext der durch den Befehl angegebenen Methode. Eine Komponente kann auch die Lesebefehle des Kapitels “Benutzer und Gruppen” verwenden. Die Befehle lesen jedoch die Benutzer und Gruppen des Host Projekts, da eine Komponente keine eigenen Benutzer und Gruppen hat.

Die Befehle `SET DATABASE PARAMETER` und `Get database parameter` bilden hier eine Ausnahme. Sie gelten global für die Anwendung. Ruft eine Komponente diese Befehle auf, werden sie auf das Host Anwendungsprojekt angewendet.

Darüberhinaus wurden spezifische Maßnahmen für die 4D Funktionen `Structure file` und `Get 4D folder` definiert, wenn sie im Rahmen von Komponenten verwendet werden.

Über den Befehl `COMPONENT LIST` erhalten Sie die Liste der Komponenten, die vom Host Projekt geladen werden.


### Nicht verwendbare Befehle

Die folgenden Befehle eignen sich nicht zur Verwendung in einer Komponenten, da sie die Strukturdatei verändern — die im Nur-Lesen Modus geöffnet ist. Bei Ausführen in einer Komponente wird der Fehler -10511 generiert: "Der Befehl "{command_name}" kann von einer Komponente nicht aufgerufen werden".

- `ON EVENT CALL`
- `In einem Ereignis aufgerufene Methode`
- `SET PICTURE TO LIBRARY`
- `REMOVE PICTURE FROM LIBRARY`
- `SAVE LIST`
- `ARRAY TO LIST`
- `EDIT FORM`
- `CREATE USER FORM`
- `DELETE USER FORM`
- `CHANGE PASSWORD`
- `EDIT ACCESS`
- `Set group properties`
- `Set user properties`
- `DELETE USER`
- `CHANGE LICENSES`
- `BLOB TO USERS`
- `SET PLUGIN ACCESS`

**Hinweise:**

- Der Befehl `Current form table` gibt `Nil` zurück, wenn er in einem Projektformular aufgerufen wird. Folglich lässt er sich nicht in einer Komponente verwenden.
- In einem Komponentenprojekt lassen sich keine Befehle zur Definition von SQL Daten, wie `CREATE TABLE`, `DROP TABLE`, etc., verwenden. Sie werden jedoch mit externen Anwendungen unterstützt (siehe SQL Befehl ` CREATE DATABASE`).

## Fehlerverwaltung

Eine [Fehlerverwaltungsmethode](Concepts/error-handling.md), die über den Befehl `ON ERR CALL` eingerichtet wurde, gilt nur für die laufende Anwendung. Erzeugt eine Komponente einen Fehler, wird nicht die Fehlerverwaltungsmethode `ON ERR CALL` des Host Projekts aufgerufen, und umgekehrt.

## Formulare verwenden

- In einer Komponente lassen sich nur "Projektformulare" (d. h. sie sind keiner bestimmten Tabelle zugeordnet) verwenden. Eine Komponente kann alle Projektformulare des Matrix Projekts verwenden.
- Eine Komponente kann Tabellenformulare des Host Projekts aufrufen. Beachten Sie, dass Sie dann Zeiger anstelle von Tabellennamen zwischen eckigen Klammern [] verwenden müssen, um Formulare im Code der Komponente anzugeben.

**Hinweis:** Verwendet eine Komponente den Befehl `ADD RECORD`, wird das aktuelle Eingabeformular des Host Projekts angezeigt. Folglich hat die Komponente keinen Zugriff auf Variablen, die im Formular enthalten sind.

- Sie können Formulare von Komponenten als Unterformulare in Host Projekten veröffentlichen. Das bedeutet vorallem, dass Sie Komponenten mit grafischen Objekten entwickeln können. Zum Beispiel nutzen Widgets, die 4D liefert, Unterformulare in Komponenten.

## Tabellen und Felder verwenden

Eine Komponente kann keine Tabellen und Felder verwenden, die in der 4D Struktur des Matrix Projekts definiert wurden. Sie können jedoch externe Datenbanken erstellen und dann gemäß Ihren Anforderungen deren Tabellen und Felder verwenden. Sie können externe Datenbanken mit SQL erstellen und verwalten. Eine externe Datenbank ist vom 4D Hauptprojekt unabhängig, Sie können aber vom 4D Hauptprojekt aus damit arbeiten. Der Einsatz einer externen Datenbank bedeutet, dass sie temporär die aktuelle Datenbank ist, d. h. die Zieldatenbank für die von 4D ausgeführten SQL Anfragen. Sie erstellen externe Datenbanken mit dem SQL Befehl `CREATE DATABASE`.

### Beispiel

Nachfolgender Code ist in einer Komponente enthalten, er führt drei Grundaktionen mit einer externen Datenbank aus:

- Er erstellt die externe Datenbank, wenn sie noch nicht existiert,
- Er fügt in der externen Datenbank Daten hinzu,
- Er liest Daten aus der externen Datenbank aus.

Externe Datenbank erstellen:

```4d
<>MyDatabase:=Get 4D folder+"\MyDB" // (Windows) stores the data in an authorized directory
 Begin SQL
        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];
        USE DATABASE DATAFILE :[<>MyDatabase];
        CREATE TABLE IF NOT EXISTS KEEPIT
        (
        ID INT32 PRIMARY KEY,
        kind VARCHAR,
        name VARCHAR,
        code TEXT,
        sort_order INT32
        );

        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);

        USE DATABASE SQL_INTERNAL;

 End SQL
```

In der externen Datenbank schreiben

```4d
 $Ptr_1:=$2 // retrieves data from the host project through pointers
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6
 Begin SQL

        USE DATABASE DATAFILE :[<>MyDatabase];

        INSERT INTO KEEPIT
        (ID, kind, name, code, sort_order)
        VALUES
        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);

        USE DATABASE SQL_INTERNAL;

 End SQL
```

Daten aus der externen Datenbank auslesen:

```4d
 $Ptr_1:=$2 // accesses data of the host project through pointers
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6

 Begin SQL

    USE DATABASE DATAFILE :[<>MyDatabase];

    SELECT ALL ID, kind, name, code, sort_order
    FROM KEEPIT
    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;

    USE DATABASE SQL_INTERNAL;

 End SQL
```

## Ressourcen verwenden

Komponenten können Ressourcen verwenden. Gemäß den Vorgaben zur Ressourcen-Verwaltung muss der Ordner Resources bei einer Komponente mit der Struktur von .4dbase (empfohlene Struktur) in diesen Ordner gelegt werden.

Automatische Mechanismen greifen: Die Komponente lädt automatisch die XLIFF Dateien, die in ihrem Ordner Resources gefunden werden.

In einem Host Projekt mit einer oder mehreren Komponenten haben jede Komponente sowie die Host Projekte ihren eigenen "Ressourcen String.” Ressourcen sind auf die verschiedenen Projekte verteilt: Sie können nicht von Komponente B oder dem Host Projekt aus auf die Ressourcen von Komponente A zugreifen.

## Online Hilfe für Komponenten
4D bietet Entwicklern die Möglichkeit, ihre Komponenten mit Online Hilfe zu versehen. Die Vorgehensweise ist genauso wie für 4D Projekte:

- Die Hilfedatei für Komponenten muss die Endung .htm, .html oder nur für Windows .chm haben.
- Die Hilfedatei muss neben der Strukturdatei der Komponente liegen und denselben Namen wie die Strukturdatei haben.
- Diese Datei wird dann automatisch in das Menü Hilfe der Anwendung geladen. Sie hat den Namen Hilfe für..., gefolgt vom Namen der Hilfedatei. 