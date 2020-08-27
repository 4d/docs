---
id: components
title: Komponenten
---

Eine 4D Komponente besteht aus einer Reihe von 4D Methoden und Formularen mit einer oder mehreren Funktionalitäten, die sich in verschiedenen Anwendungen installieren lassen. Sie können z.B. eine 4D E-Mail Komponente entwickeln, die alle Aspekte von Versenden, Empfangen und Speichern von E-Mails in 4D Anwendungen verwaltet.

4D Komponenten werden direkt aus 4D erstellt und installiert. Komponenten werden ähnlich wie [ Plug-Ins](Concepts/plug-ins.md) verwaltet. Es gelten folgende Regeln:

- Eine Komponente besteht aus einer gängigen Strukturdatei (kompiliert oder nicht) mit der Standardarchitektur oder in Form eines Pakets (siehe .4dbase Extension).
- Um eine Komponente in einer Anwendung zu installieren, genügt es, diese in den Ordner "Components" der Anwendung zu kopieren, der neben der Strukturdatei oder dem ausführbaren 4D Programm liegt.
- Eine Komponente kann die meisten der 4D Elemente aufrufen: Projektmethoden, Projektformulare, Menüleisten, Auswahllisten, Bilder aus der Objektbibliothiek, usw. Sie kann keine Datenbankmethoden und Trigger aufrufen.
- In 4D Komponenten können Sie weder Standardtabellen noch Datendateien verwenden. Eine Komponente kann jedoch Tabellen, Felder und Datendateien über Operationen externer Anwendungen erstellen bzw. verwenden. Dies sind separate 4D Anwendungen, in denen Sie mit SQL Befehlen arbeiten.


## Definitionen

Zur Handhabung von Komponenten in 4D sind folgende Begriffe und Konzepte von Bedeutung:

- **Matrix Projekt**: 4D Projekt zum Entwickeln der Komponente. Das Matrix Projekt ist ein Standardprojekt ohne spezifische Attribute. Es bildet eine einzelne Komponente. Das Matrix Projekt wird kompiliert oder unkompiliert in den Ordner "Components" der 4D oder Host Anwendung kopiert, welche die Komponente verwendet.
- **Host Projekt**: Anwendungsprojekt, in dem eine Komponente installiert und verwendet wird.
- **Komponente**: Matrix Projekt, kompiliert oder nicht, das in den Ordner "Components" der 4D oder Host Anwendung kopiert wird und deren Inhalt in Host Anwendungen verwendet wird.

Beachten Sie, dass ein Projekt sowohl vom Typ “Matrix” als auch “Host” sein kann, d. h. ein Matrix Projekt kann selbst eine oder mehrere Komponenten verwenden. Eine Komponente kann dagegen selbst keine untergeordneten Komponenten verwenden.


### Komponenten durch Kompilieren schützen

Standardmäßig sind alle Projektmethoden eines Matrix Projekts, das als Komponente installiert ist, potentiell vom Host Projekt aus sichtbar. Das bedeutet im einzelnen:

- Gemeinsam verwendete Projektmethoden erscheinen im Explorer auf der Seite Methoden und lassen sich in den Methoden des Host Projekts aufrufen. Ihr Inhalt lässt sich auswählen und aus der Vorschau des Explorers kopieren. Sie sind auch im Debugger sichtbar. Sie lassen sich jedoch im Methodeneditor weder öffnen, noch verändern.
- Andere Projektmethoden des Matrix Projekts erscheinen nicht im Explorer, sind jedoch ebenfalls im Debugger des Host Projekts sichtbar.

Um Projektmethoden einer Komponente effektiv zu schützen, müssen Sie lediglich die Matrix Datenbank kompilieren und in Form einer .4dc Datei (kompilierte Datenbank, die keinen interpretierten Code enthält) zur Verfügung stellen. Wird eine kompilierte Matrix Datenbank dann als Komponente installiert, gilt folgendes:

- Die gemeinsam genutzten Projektmethoden erscheinen im Explorer auf der Seite Methoden und lassen sich in den Methoden der Host Datenbank aufrufen. Ihr Inhalt erscheint jedoch weder in der Vorschau noch im Debugger.
- Die anderen Projektmethoden der Matrix Datenbank erscheinen nie.


## Projektmethoden gemeinsam nutzen
Per Definition werden alle Projektmethoden in die Komponente integriert (die Datenbank ist die Komponente), d. h. die Komponente kann sie aufrufen und ausführen.

Andererseits sind diese Projektmethoden standardmäßig nicht sichtbar und lassen sich in der Host Datenbank auch nicht aufrufen. In der Matrix Datenbank müssen Sie die Methoden, die Sie mit der Host Datenbank teilen wollen, explizit freigeben. Diese Projektmethoden sind dann im Explorer auf der Seite Methoden sichtbar und lassen sich im Code der Host Datenbank aufrufen. Sie lassen sich jedoch im Methodeneditor der Host Datenbank nicht verändern. Diese Methoden sind die **Schnittstelle** zum Aufrufen der Komponente.

**Hinweis:** Aus Sicherheitsgründen kann die Komponente standardmäßig keine Projektmethoden ausführen, die zum Host Projekt gehören. In manchen Fällen müssen Sie jedoch zulassen, dass eine Komponente auf die Projektmethoden Ihres Host Projekts zugreifen kann. Dazu müssen Sie die Projektmethode explizit dem Host Projekt zuweisen, das Sie für die Komponente zugänglich machen wollen.

![](assets/en/Concepts/pict516563.en.png)

## Variablen übergeben

Lokale, Prozess- und Interprozess Variablen werden nicht von Komponenten und Host Datenbanken gemeinsam genutzt. Die einzige Möglichkeit, aus der Host Datenbank auf Variablen von Komponenten zuzugreifen und umgekehrt, sind Zeiger.

Beispiel mit Array:

```4d
//In the host database:
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


Über Zeiger können Komponenten und Host Datenbank miteinander kommunizieren. Dabei müssen Sie folgendes berücksichtigen:

- Die 4D Funktion `Get pointer` gibt keinen Zeiger auf eine Variable der Host Datenbank zurück, wenn sie von einer Komponenten aus aufgerufen wird und umgekehrt.

- Die Architektur für Komponenten lässt zu, dass dieselbe interpretierte Datenbank sowohl interpretierte als auch kompilierte Komponenten enthalten kann. In einer kompilierten Datenbank können dagegen nur kompilierte Komponenten verwendet werden. Für diesen Fall gilt folgende Regelung für Zeiger: Der Interpreter kann einen im kompilierten Modus erstellten Zeiger auflösen. Er kann jedoch im kompilierten Modus keinen Zeiger auflösen, der im interpretierten Modus erstellt wurde. Dieses Prinzip wollen wir an folgendem Beispiel erläutern: Wir gehen von den beiden Komponenten C (kompiliert) und I (interpretiert) aus, die in derselben Host Datenbank installiert sind.
 - Definiert Komponente C die Variable `myCvar`,  kann Komponente I über den Zeiger `->myCvar` auf diese Variable zugreifen.
 - Definiert Komponente I die Variable `myIvar` variable, kann Komponente C über den Zeiger` ->myIvar` nicht auf diese Variable zugreifen. Diese Syntax verursacht einen Ausführungsfehler.

- Wir raten davon ab, Zeiger bei Komponenten über den 4D Befehl `RESOLVE POINTER` miteinander zu vergleichen, da durch die Partitionierung von Variablen gleichnamige Variablen nebeneinander existieren können, die jedoch in einer Komponente ganz anderen Inhalt haben können als in der Host Datenbank bzw. einer anderen Komponenten. Auch der Variablentyp kann in beiden Kontexten unterschiedlich sein. Zeigen z. B. `myptr1` und `myptr2` jeweils auf eine Variable, kann der folgende Vergleich ein inkorrektes Ergebnis zurückgeben:

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

## Auf Tabellen der Host Datenbank zugreifen

Auch wenn Komponenten keine Tabellen verwenden können, können Host Datenbanken und Komponenten über Zeiger miteinander kommunizieren. Hier sehen Sie beispielsweise eine Methode, die sich in einer Komponente aufrufen lässt:

```4d
// calling a component method
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Der Code von `methCreateRec` in der Komponente lautet:

```4d
C_POINTER($1) //Pointer on a table in host database
C_POINTER($2) //Pointer on a field in host database
C_TEXT($3) // Value to insert

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

## Reichweite der Befehle der Programmiersprache

Eine Komponente kann jeden Befehl der 4D Programmiersprache verwenden, außer er gehört zur Liste der [ nicht erlaubten Befehle](#unusable-commands).

Von einer Komponente aufgerufene Befehle laufen im Kontext dieser Komponente, außer für den Befehl `EXECUTE METHOD`. Dieser verwendet den Kontext der durch den Befehl angegebenen Methode. Eine Komponente kann auch die Lesebefehle des Kapitels “Benutzer und Gruppen” verwenden. Die Befehle lesen jedoch die Benutzer und Gruppen der Host Datenbank, da eine Komponente keine eigenen Benutzer und Gruppen hat.

Die Befehle `SET DATABASE PARAMETER` und `Get database parameter` bilden hier eine Ausnahme. Sie gelten global für die Datenbank. Ruft eine Komponente diese Befehle auf, werden sie auf die Host Datenbank angewendet.

Darüberhinaus wurden spezifische Maßnahmen für die 4D Funktionen `Structure file` und `Get 4D folder` definiert, wenn sie im Rahmen von Komponenten verwendet werden.

Über den Befehl `COMPONENT LIST` erhalten Sie die Liste der Komponenten, die von der Host Datenbank geladen werden.


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

- Sie können Formulare von Komponenten als Unterformulare in Host Projekten veröffentlichen. Das bedeutet vorallem, dass Sie Komponenten mit grafischen Objekten entwickeln können. For example, Widgets provided by 4D are based on the use of subforms in components.

## Use of tables and fields

A component cannot use the tables and fields defined in the 4D structure of the matrix database. However, you can create and use external databases, and then use their tables and fields according to your needs. You can create and manage external databases using SQL. An external database is a 4D database that is independent from the main 4D database, but that you can work with from the main 4D database. Using an external database means temporarily designating this database as the current database, in other words, as the target database for the SQL queries executed by 4D. You create external databases using the SQL `CREATE DATABASE` command.

### Beispiel

The following code is included in a component and performs three basic actions with an external database:

- creates the external database if it does not already exist,
- adds data to the external database,
- reads data from the external database.

Creating the external database:

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

Writing in the external database:

```4d
 $Ptr_1:=$2 // retrieves data from the host database through pointers
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

Reading from an external database:

```4d
 $Ptr_1:=$2 // accesses data of the host database through pointers
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

## Use of resources

Components can use resources. In conformity with the resource management principle, if the component is of the .4dbase architecture (recommended architecture), the Resources folder must be placed inside this folder.

Automatic mechanisms are operational: the XLIFF files found in the Resources folder of a component will be loaded by this component.

In a host database containing one or more components, each component as well as the host databases has its own “resources string.” Resources are partitioned between the different databases: it is not possible to access the resources of component A from component B or the host database.

## On-line help for components
A specific mechanism has been implemented in order to allow developers to add on-line help to their components. The principle is the same as that provided for 4D databases:

- The component help must be provided as a file suffixed .htm, .html or (Windows only) .chm,
- The help file must be put next to the structure file of the component and have the same name as the structure file,
- This file is then automatically loaded into the Help menu of the application with the title “Help for...” followed by the name of the help file.
