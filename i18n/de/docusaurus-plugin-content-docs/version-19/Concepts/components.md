---
id: components
title: Komponenten
---

Eine 4D Komponente besteht aus einer Reihe von 4D Methoden und Formularen mit einer oder mehreren Funktionalitäten, die sich in verschiedenen Anwendungen installieren lassen. Sie können z. B. eine 4D E-Mail Komponente entwickeln, die alle Aspekte von Senden, Empfangen und Speichern von E-Mails in 4D Anwendungen verwaltet.

## Presentation

### Definitionen

- **Matrix Projekt**: 4D Projekt zum Entwickeln der Komponente. Das Matrix Projekt ist ein Standardprojekt ohne spezifische Attribute. Es bildet eine einzelne Komponente.
- **Host Projekt**: Anwendungsprojekt, in dem eine Komponente installiert und verwendet wird.
- **Component**: Matrix project, compiled or not, copied into the [`Components`](Project/architecture.md) folder of the host application and whose contents are used in the host application.

### Principles

4D Komponenten werden direkt aus 4D erstellt und installiert. Creating and installing 4D components is carried out directly from 4D. Basically, components are managed like [plug-ins](Concepts/plug-ins.md) according to the following principles:

- A component consists of a regular 4D project file.
- To install a component, you simply need to copy it into the [`Components` folder of the project](Project/architecture.md). You can use aliases or shortcuts.
- A project can be both a “matrix” and a “host,” in other words, a matrix project can itself use one or more components. Eine Komponente kann dagegen selbst keine untergeordneten Komponenten verwenden.
- A component can call on most of the 4D elements: project methods, project forms, menu bars, choice lists, and so on. Sie kann keine Datenbankmethoden und Trigger aufrufen.
- In 4D Komponenten können Sie weder Standardtabellen noch Datendateien verwenden. Eine Komponente kann jedoch Tabellen, Felder und Datendateien über Operationen externer Anwendungen erstellen bzw. verwenden. Dies sind separate 4D Anwendungen, in denen Sie mit SQL Befehlen arbeiten.
- A host project running in interpreted mode can use either interpreted or compiled components. A host project running in compiled mode cannot use interpreted components. In this case, only compiled components can be used.

## Reichweite der Befehle der Programmiersprache

Eine Komponente kann jeden Befehl der 4D Programmiersprache verwenden, außer er gehört zur Liste [nicht verwendbare Befehle](#unusable-commands).

When commands are called from a component, they are executed in the context of the component, except for the `EXECUTE METHOD` or `EXECUTE FORMULA` command that use the context of the method specified by the command. Eine Komponente kann auch die Lesebefehle des Kapitels “Benutzer und Gruppen” verwenden. Die Befehle lesen jedoch die Benutzer und Gruppen des Host Projekts, da eine Komponente keine eigenen Benutzer und Gruppen hat.

Die Befehle `SET DATABASE PARAMETER` und `Get database parameter` bilden hier eine Ausnahme. Sie gelten global für die Anwendung. Ruft eine Komponente diese Befehle auf, werden sie auf das Host Anwendungsprojekt angewendet.

Darüberhinaus wurden spezifische Maßnahmen für die 4D Funktionen `Structure file` und `Get 4D folder` definiert, wenn sie im Rahmen von Komponenten verwendet werden.

Über den Befehl `COMPONENT LIST` erhalten Sie die Liste der Komponenten, die vom Host Projekt geladen werden.

### Nicht verwendbare Befehle

Die folgenden Befehle eignen sich nicht zur Verwendung in einer Komponenten, da sie die Strukturdatei verändern — die im Nur-Lesen Modus geöffnet ist. Bei Ausführen in einer Komponente wird der Fehler -10511 generiert: "Der Befehl "{command_name}" kann von einer Komponente nicht aufgerufen werden":

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

## Projektmethoden gemeinsam nutzen

Per Definition werden alle Projektmethoden in die Komponente integriert (das Projekt ist die Komponente), d. h. die Komponente kann sie aufrufen und ausführen.

On the other hand, by default these project methods will not be visible, and they can't be called in the host project. On the other hand, by default these project methods will not be visible, and they can't be called in the host project. In the matrix project, you must explicitly designate the methods that you want to share with the host project. Diese Methoden sind die **Schnittstelle** zum Aufrufen der Komponente.

Conversely, for security reasons, by default a component cannot execute project methods belonging to the host project. In manchen Fällen müssen Sie jedoch zulassen, dass eine Komponente auf die Projektmethoden Ihres Host Projekts zugreifen kann. To do this, you must explicitly designate which project methods of the host project you want to make accessible to the components (in the method properties, check the **Shared by components and host project** box).

![](../assets/en/Concepts/pict516563.en.png)

Once the project methods of the host projects are available to the components, you can execute a host method from inside a component using the `EXECUTE FORMULA` or `EXECUTE METHOD` commands. Beispiel:

```4d
// Host Method
component_method("host_method_name")
```

```4d
// component_method
 C_TEXT($1)
 EXECUTE METHOD($1)
```

> An interpreted host database that contains interpreted components can be compiled or syntax checked if it does not call methods of the interpreted component. Otherwise, a warning dialog box appears when you attempt to launch the compilation or a syntax check and it will not be possible to carry out the operation. Keep in mind that an interpreted method can call a compiled method, but not the reverse, except via the use of the `EXECUTE METHOD` and `EXECUTE FORMULA` commands.

## Variablen übergeben

Lokale, Prozess- und Interprozess Variablen werden nicht von Komponenten und Host Projekten gemeinsam genutzt. The only way to modify component variables from the host project and vice versa is using pointers.

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
```

```4d
C_POINTER($p)
$p:=component_method2(...)
```

Without a pointer, a component can still access the value of a host database variable (but not the variable itself) and vice versa:

```4d
//In the host database
C_TEXT($input_t)
$input_t:="DoSomething"
component_method($input_t)
// component_method gets "DoSomething" in $1 (but not the $input_t variable)
```

Über Zeiger können Komponenten und Host Projekt miteinander kommunizieren. Dabei müssen Sie folgendes berücksichtigen:

- Der 4D Befehl `Get pointer` gibt keinen Zeiger auf eine Variable des Host Projekts zurück, wenn sie von einer Komponenten aus aufgerufen wird und umgekehrt.

- Die Architektur für Komponenten lässt zu, dass dasselbe interpretierte Projekt sowohl interpretierte als auch kompilierte Komponenten enthalten kann. In einem kompilierten Projekt können dagegen nur kompilierte Komponenten verwendet werden. Für diesen Fall gilt folgende Regelung für Zeiger: Der Interpreter kann einen im kompilierten Modus erstellten Zeiger auflösen. Er kann jedoch im kompilierten Modus keinen Zeiger auflösen, der im interpretierten Modus erstellt wurde. Dieses Prinzip wollen wir an folgendem Beispiel erläutern: Es gibt die beiden Komponenten C (kompiliert) und I (interpretiert), die im selben Host Projekt installiert sind.
- Definiert Komponente C die Variable `myCvar`, kann Komponente I über den Zeiger `->myCvar` auf diese Variable zugreifen.
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

## Fehlerverwaltung

Eine [Fehlerverwaltungsmethode](Concepts/error-handling.md), die über den Befehl `ON ERR CALL` eingerichtet wurde, gilt nur für die laufende Anwendung. Erzeugt eine Komponente einen Fehler, wird nicht die Fehlerverwaltungsmethode `ON ERR CALL` des Host Projekts aufgerufen, und umgekehrt.

## Auf Tabellen des Host Projekts zugreifen

Although components cannot use tables, pointers can allow host projects and components to communicate with each other. Hier sehen Sie beispielsweise eine Methode, die sich in einer Komponente aufrufen lässt:

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

> In the context of a component, 4D assumes that a reference to a table form is a reference to the host table form (as components can't have tables.)

## Tabellen und Felder verwenden

Eine Komponente kann keine Tabellen und Felder verwenden, die in der 4D Struktur des Matrix Projekts definiert wurden. Sie können jedoch externe Datenbanken erstellen und dann gemäß Ihren Anforderungen deren Tabellen und Felder verwenden. Sie können externe Datenbanken mit SQL erstellen und verwalten. Eine externe Datenbank ist vom 4D Hauptprojekt unabhängig, Sie können aber vom 4D Hauptprojekt aus damit arbeiten. Using an external database means temporarily designating this database as the current database, in other words, as the target database for the SQL queries executed by 4D. You create external databases using the SQL `CREATE DATABASE` command. Sie erstellen externe Datenbanken mit dem SQL Befehl `CREATE DATABASE`.

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

In der externen Datenbank schreiben:

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

## Formulare verwenden

- In einer Komponente lassen sich nur "Projektformulare" (d. h. sie sind keiner bestimmten Tabelle zugeordnet) verwenden. Eine Komponente kann alle Projektformulare des Matrix Projekts verwenden.
- Eine Komponente kann Tabellenformulare des Host Projekts aufrufen. Beachten Sie, dass Sie dann Zeiger anstelle von Tabellennamen zwischen eckigen Klammern [] verwenden müssen, um Formulare im Code der Komponente anzugeben.

> If a component uses the `ADD RECORD` command, the current Input form of the host project will be displayed, in the context of the host project. Folglich hat die Komponente keinen Zugriff auf Variablen, die im Formular enthalten sind.

- Sie können Formulare von Komponenten als Unterformulare in Host Projekten veröffentlichen. Das bedeutet vorallem, dass Sie Komponenten mit grafischen Objekten entwickeln können. Zum Beispiel nutzen Widgets, die 4D liefert, Unterformulare in Komponenten.

> In the context of a component, any referenced project form must belong to the component. For example, inside a component, referencing a host project form using `DIALOG` or `Open form window` will throw an error.

## Ressourcen verwenden

Components can use resources located in the Resources folder of the component.

Automatische Mechanismen greifen: Die Komponente lädt automatisch die XLIFF Dateien, die in ihrem Ordner Resources gefunden werden.

In einem Host Projekt mit einer oder mehreren Komponenten haben jede Komponente sowie die Host Projekte ihren eigenen "Ressourcen String.” In a host project containing one or more components, each component as well as the host projects has its own “resources string.” Resources are partitioned between the different projects: it is not possible to access the resources of component A from component B or the host project.

## Executing initialization code

A component can execute 4D code automatically when opening or closing the host database, for example in order to load and/or save the preferences or user states related to the operation of the host database.

Executing initialization or closing code is done by means of the `On Host Database Event` database method.

> For security reasons, you must explicitly authorize the execution of the `On Host Database Event` database method in the host database in order to be able to call it. For security reasons, you must explicitly authorize the execution of the `On Host Database Event` database method in the host database in order to be able to call it.

## Komponenten durch Kompilieren schützen

Standardmäßig sind alle Projektmethoden eines Matrix Projekts, das als Komponente installiert ist, potentiell vom Host Projekt aus sichtbar. Das bedeutet im einzelnen:

- Gemeinsam verwendete Projektmethoden erscheinen im Explorer auf der Seite Methoden und lassen sich in den Methoden des Host Projekts aufrufen. Ihr Inhalt lässt sich auswählen und aus der Vorschau des Explorers kopieren. Sie sind auch im Debugger sichtbar. However, it's not possible to open them in the Method editor or modify them.
- Andere Projektmethoden des Matrix Projekts erscheinen nicht im Explorer, sind jedoch ebenfalls im Debugger des Host Projekts sichtbar.

Um die Projektmethoden einer Komponente wirksam zu schützen, kompilieren Sie einfach das Matrix Projekt und liefern es als .4dz-Datei. Wird ein kompiliertes Matrix Projekt als Komponente installiert, gilt folgendes:

- Gemeinsam verwendete Projektmethoden erscheinen im Explorer auf der Seite Methoden und lassen sich in den Methoden des Host Projekts aufrufen. However, their contents will not appear in the preview area and in the debugger.
- Die anderen Projektmethoden des Matrix Projekts erscheinen nie.
