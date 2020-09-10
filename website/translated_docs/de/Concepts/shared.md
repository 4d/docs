---
id: shared
title: Shared Objects und Shared Collections
---

## Overview
**Shared objects** und **shared collections** sind spezifische [Objekte](Concepts/dt_object.md) und [Collections](Concepts/dt_collection.md), deren Inhalt zwischen Prozessen geteilt wird. Im Gegensatz zu [Interprozessvariablen](Concepts/variables.md#interprocess-variables) haben shared objects und shared collections den Vorteil, dass sie mit **Preemptive 4D Prozessen** kompatibel sind: Sie können per Referenz als Parameter an Befehle wie en Vorteil, dass sie mit Preemptive 4D Prozesse kompatibel sind: Sie können per Referenz als Parameter an Befehle wie `New process` oder `CALL WORKER` übergeben werden.

"Shared objects/collections" lassen sich in Variablen speichern, die mit Standardbefehlen `C_OBJECT` und `C_COLLECTION` deklariert wurden, müssen aber über spezifische Befehle eine Instanz erhalten:

- Ein "shared object" erstellen Sie mit dem Befehl `New shared object`
- Eine "shared collection" erstellen Sie mit dem Befehl `New shared collection`

**Hinweis:** "Shared objects/collections" lassen sich als Eigenschaften von standardmäßigen (not shared) Objekten oder Collections setzen.

Zum Ändern von "shared object/collection" muss die Struktur **Use...End use** aufgerufen werden. Wird ein Wert von "shared object/collection" nur gelesen, ist **Use...End use** nicht erforderlich.

Ein einmaliger, globaler Katalog, der vom Befehl `Storage` zurückgegeben wird, ist immer in der gesamten Anwendung und ihren Komponenten verfügbar. Darin lassen sich alle "shared objects/collections" speichern.

## Shared Objects oder Collections verwenden
Ist mit den Befehlen `New shared object` oder `de>New shared collection` eine Instanz von shared object/collection erstellt, lassen sich ihre jeweiligen Eigenschaften und Elemente in jedem Prozess ändern oder lesen.

### Ändern
Sie können shared objects/collections folgendermaßen bearbeiten:

- Objekteigenschaften ändern oder entfernen
- In shared objects unterstützte Werte hinzufügen oder bearbeiten, inkl. andere shared objects/collections (was eine shared group erstellt, siehe unten).

Jedoch müssen alle Anweisungen zum Ändern in shared object oder collection in die Struktur `Use...End use` eingebettet sein, sonst wird ein Fehler erzeugt.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

Shared object/collection lässt sich zur selben Zeit immer nur von einem Prozess verändern. `Use` sperrt shared object/collection aus anderen Threads, während das letzte `End use` alle Objekte und Collections entsperrt. Versuchen Sie, ein shared object/collection ohne mindest ein `Use...End use` zu ändern, wird ein Fehler generiert. Ruft ein Prozess `Use...End use` in shared object/collection auf, das bereits von einem anderen Prozess benutzt wird, wird er bis zum Entsperren durch `End use` in Wartestellung gesetzt (es wird kein Fehler generiert). Deshalb sollten Anweisungen innerhalb der Struktur `Use...End use` rasch ablaufen und die Elemente so bald wie möglich entsperren  und Sie sollten ein shared object/collection nicht direkt auf der Oberfläche ändern, also z.B. über ein Dialogfenster.

Shared objects/collections lassen sich auch Eigenschaften oder Elementen von anderen shared objects/collections zuweisen. Das erstellt **shared groups**. Eine shared group wird automatisch erstellt, wenn ein shared object/collection als Eigenschaftswert oder Element eines anderen shared object/collection gesetzt wird. Shared groups erlauben das Einbinden von shared objects/collections. Dafür gelten jedoch zusätzliche Regeln:

- Der Aufruf von `Use` in shared object/collection innerhalb einer Gruppe sperrt die Eigenschaften/Elemente aller shared objects/collections, die zur gleichen Gruppe gehören.
- Eine shared object/collection kann nur zu einer shared group gehören. Versuchen Sie, eine zu einer Gruppe gehörende shared object/collection in eine andere Gruppe zu setzen, wird ein Fehler generiert.
- Die Gruppierung von shared objects/collections lässt sich nicht auflösen. Gehören sie zu einer shared group, bleibt diese Zuordnung während der gesamten Sitzung erhalten. Selbst wenn alle Referenzen eines Objekts bzw. einer Collection aus dem übergeordneten Objekt bzw. der Collection entfernt werden, bleibt diese Gruppierung erhalten.

In Beispiel 2 sehen Sie die Anwendung der Regeln für shared groups.

**Hinweis:** Shared groups werden über die interne Eigenschaft *locking identifier* verwaltet. For detailed information on this value, please refer to the 4D Developer's guide.

### Read
Reading properties or elements of a shared object/collection is allowed without having to call the `Use...End use` structure, even if the shared object/collection is in use by another process.

However, it is necessary to read a shared object/collection within `Use...End use` when several values are linked together and must be read at once, for consistency reasons.

### Duplication
Calling `OB Copy` with a shared object (or with an object containing shared object(s) as properties) is possible, but will return a standard (not shared) object including its contained objects (if any).

### Storage
**Storage** is a unique shared object, automatically available on each application and machine. This shared object is returned by the `Storage` command. You can use this object to reference all shared objects/collections defined during the session that you want to be available from any preemptive or standard processes.

Note that, unlike standard shared objects, the `storage` object does not create a shared group when shared objects/collections are added as its properties. This exception allows the **Storage** object to be used without locking all connected shared objects or collections.

For more information, refer to the `Storage` command description.

## Use...End use
The formal syntax of the `Use...End use` structure is:

```4d
 Use(Shared_object_or_Shared_collection)
    statement(s)
 End use
```

The `Use...End use` structure defines a sequence of statements that will execute tasks on the *Shared_object_or_Shared_collection* parameter under the protection of an internal semaphore. *Shared_object_or_Shared_collection* can be any valid shared object or shared collection.

Shared objects and shared collections are designed to allow communication between processes, in particular, **preemptive 4D processes**. They can be passed by reference as parameters from a process to another one. For detailed information on shared objects or shared collections, refer to the **Shared objects and shared collections** page. Surrounding modifications on shared objects or shared collections by the `Use...End use` keywords is mandatory to prevent concurrent access between processes.

- Once the **Use** line is successfully executed, all _Shared_object_or_Shared_collection_ properties/elements are locked for all other process in write access until the corresponding `End use` line is executed.
- The _statement(s)_ sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access.
- If another shared object or collection is added as a property of the _Shared_object_or_Shared_collection_ parameter, they become connected within the same shared group (see **Using shared objects or collections**).
- If another process tries to access one of the _Shared_object_or_Shared_collection_ properties or connected properties while a **Use...End use** sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated.
- The **End use** line unlocks the _Shared_object_or_Shared_collection_ properties and all objects sharing the same locking identifier.
- Several **Use...End use** structures can be nested in the 4D code. In that case, all locks are stacked and properties/elements will be released only when the last End use call is executed.

**Note:** If a collection method modifies a shared collection, an internal **Use** is automatically called for this shared collection while the function is executed.


## Beispiel 1

You want to launch several processes that perform an inventory task on different products and update the same shared object. The main process instantiates an empty shared object and then, launches the other processes, passing the shared object and the products to count as parameters:

```4d
 ARRAY TEXT($_items;0)
 ... //fill the array with items to count
 $nbItems:=Size of array($_items)
 C_OBJECT($inventory)
 $inventory:=New shared object
 Use($inventory)
    $inventory.nbItems:=$nbItems
 End use

  //Create processes
 For($i;1;$nbItems)
    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)
  //$inventory object sent by reference
 End for
```

In the "HowMany" method, inventory is done and the $inventory shared object is updated as soon as possible:

```4d
 C_TEXT($1)
 C_TEXT($what)
 C_OBJECT($2)
 C_OBJECT($inventory)
 $what:=$1 //for better readability
 $inventory:=$2

 $count:=CountMethod($what) //method to count products
 Use($inventory) //use shared object
    $inventory[$what]:=$count  //save the results for this item
 End use
```

## Beispiel 2

The following examples highlight specific rules when handling shared groups:

```4d
 $ob1:=New shared object
 $ob2:=New shared object
 Use($ob1)
    $ob1.a:=$ob2  //group 1 is created
 End use

 $ob3:=New shared object
 $ob4:=New shared object
 Use($ob3)
    $ob3.a:=$ob4  //group 2 is created
 End use

 Use($ob1) //use an object from group 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 already belongs to another group
  //assignment is not allowed
 End use

 Use($ob3)
    $ob3.a:=Null //remove any reference to $ob4 from group 2
 End use

 Use($ob1) //use an object from group 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 still belongs to group 2
  //assignment is not allowed
 End use
```
