---
id: shared
title: Shared Objects und Shared Collections
---

**Shared objects** und **shared collections** sind spezifische [Objekte](Concepts/dt_object.md) und [Collections](Concepts/dt_collection.md), deren Inhalt zwischen Prozessen geteilt wird. Im Gegensatz zu [Interprozessvariablen](Concepts/variables.md#interprocess-variables) haben shared objects und shared collections den Vorteil, dass sie mit **Preemptive 4D Prozessen** kompatibel sind: Sie können per Referenz als Parameter an Befehle wie `New process` oder `CALL WORKER` übergeben werden.

Shared objects and shared collections can be stored in standard `Object` and `Collection` type variables, but must be instantiated using specific commands:

- to create a shared object, use the [`New shared object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) command,
- to create a shared collection, use the [`New shared collection`](../API/CollectionClass.md#new-shared-collection) command.

:::note

Shared objects and collections can be set as properties of standard (not shared) objects or collections.

:::

Zum Ändern von "shared object/collection" muss die Struktur **Use...End use** aufgerufen werden. Wird ein Wert von "shared object/collection" nur gelesen, ist **Use...End use** nicht erforderlich.

Ein einmaliger, globaler Katalog, der vom Befehl `Storage` zurückgegeben wird, ist immer in der gesamten Anwendung und ihren Komponenten verfügbar. Darin lassen sich alle "shared objects/collections" speichern.

## Shared Objects oder Collections verwenden

Once instantiated with the `New shared object` or `New shared collection` commands, shared object/collection properties and elements can be modified or read from any process of the application, under certain conditions.

### Ändern

Sie können shared objects/collections folgendermaßen bearbeiten:

- Objekteigenschaften ändern oder entfernen
- In shared objects unterstützte Werte hinzufügen oder bearbeiten, inkl. andere shared objects/collections (was eine shared group erstellt, siehe unten).

All modification instructions in a shared object or collection require to be protected inside a [`Use...End use`](#use-end-use) block, otherwise an error is generated.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

For conveniency, all [collection functions](../API/CollectionClass.md) that modify the shared object or collection insert an internal `Use...End use` block so you do not have to code it yourself. Beispiel:

```4d
$col:=New shared collection()
$col.push("alpha") //.push() internally triggers Use/End use, so no need to do it yourselves
```

If you need to execute several modifications on the same collection, you can protect all modifications with a single `Use...End use` so that modifications are performed atomically.

```4d
$col:=Storage.mySharedCollection
Use($col)
    $col[0]:="omega" //modifying an element requires to be performed inside Use/End use
    $col.push("alpha") //.push() internally triggers Use/End use, but we want to do both modifications atomically
End Use
```


Shared object/collection lässt sich zur selben Zeit immer nur von einem Prozess verändern. `Use` sperrt shared object/collection von anderen Threads, während `End use` shared object/collection entsperrt (wenn der Sperrschlüssel 0 ist, siehe unten) . . Trying to modify a shared object/collection without at least one `Use...End use` generates an error. Ruft ein Prozess `Use...End use` in shared object/collection auf, das bereits von einem anderen Prozess benutzt wird, wird er bis zum Entsperren durch `End use` in Wartestellung gesetzt (es wird kein Fehler generiert). Deshalb sollten Anweisungen innerhalb der Struktur `Use...End use` rasch ablaufen und die Elemente so bald wie möglich entsperren  und Sie sollten ein shared object/collection nicht direkt auf der Oberfläche ändern, also z.B. über ein Dialogfenster.

Shared objects/collections lassen sich auch Eigenschaften oder Elementen von anderen shared objects/collections zuweisen. Das erstellt **shared groups**. Eine shared group wird automatisch erstellt, wenn ein shared object/collection als Eigenschaftswert oder Element eines anderen shared object/collection gesetzt wird. Shared groups erlauben das Einbinden von shared objects/collections. Dafür gelten jedoch zusätzliche Regeln:

- Der Aufruf von `Use` in shared object/collection innerhalb einer Gruppe sperrt die Eigenschaften/Elemente aller shared objects/collections, die zur gleichen Gruppe gehören und erhöht ihren Sperrschlüssel. Aufrufen von `End use` verringert den Sperrschlüssel der Gruppe. Ist er dann bei 0, werden alle verknüpften shared objects/collections entsperrt.
- Eine shared object/collection kann nur zu einer shared group gehören. Versuchen Sie, eine zu einer Gruppe gehörende shared object/collection in eine andere Gruppe zu setzen, wird ein Fehler generiert.
- Die Gruppierung von shared objects/collections lässt sich nicht auflösen. Gehören sie zu einer shared group, bleibt diese Zuordnung während der gesamten Sitzung erhalten. Selbst wenn alle Referenzen eines Objekts bzw. einer Collection aus dem übergeordneten Objekt bzw. der Collection entfernt werden, bleibt diese Gruppierung erhalten.

In Beispiel 2 sehen Sie die Anwendung der Regeln für shared groups.

**Hinweis:** Shared groups werden über die interne Eigenschaft *locking identifier* verwaltet. For detailed information on this value, please refer to the 4D Language Reference.

### Lesen

Eigenschaften oder Elemente von shared object/collection lassen sich ohne die Struktur `Use...End use` lesen, selbst wenn shared object/collection von einem anderen Prozess benutzt wird.

Sind dagegen mehrere Werte logisch miteinander verbunden, sollte shared object/collection aus Konsistenzgründen in der Struktur `Use...End use` gelesen werden.

### Duplizieren

Standardmäßig wird bei Aufruf von `OB Copy/collection. copy( `) mit shared object/collection (oder darin enthaltenen shared objects/collections) ein reguläres Objekt bzw. Collection (not shared) mit den enthaltenen Objekten (falls vorhanden) zurückgegeben.

### Storage

**Storage** ist ein einmaliges shared object, das automatisch in jeder Anwendung und auf jedem Rechner verfügbar ist. This shared object is returned by the [`Storage`](https://doc.4d.com/4dv19R/help/command/en/page1525.html) command. Sie können es verwenden, um auf alle während der Sitzung definierten shared objects/collections zu verweisen, die über jeden preemptive oder standardmäßige Prozesse verfügbar sein sollen.

Beachten Sie, dass das `Storage` Objekt, im Gegensatz zu den standardmäßigen shared objects, keine shared group erstellt, wenn shared objects/collections als Eigenschaft hinzugefügt werden. Auf diese Weise lässt sich das **Storage** Objekt ohne Sperren aller verbundenen shared objects/collections verwenden.

Weitere Informationen dazu finden Sie unter dem Befehl `Storage`.

## Use...End use

Die formale Syntax der Abfragefolge `For..End for` lautet:

```4d
 Use(Shared_object_or_Shared_collection)
    statement(s)
 End use
```

Die Struktur `Use...End use` definiert eine Folge von Anweisungen, die unter dem Schutz einer internen Semaphore Aufgaben für den Parameter *Shared_object_or_Shared_collection* ausführen. *Shared_object_or_Shared_collection* kann jedes gültige shared object bzw. shared collection sein.

Shared objects und shared collections wurden zur Kommunikation zwischen Prozessen eingerichtet, insbesondere **preemptive 4D Prozesse**. Sie lassen sich per Referenz als Parameter von einem Prozess zu einem anderen übergeben. Änderungen in shared objects/collections müssen zwingend in die Struktur `Use...End use` eingebettet werden, um konkurrierenden Zugriff zwischen Prozessen zu verhindern.

- Bei erfolgreicher Ausführung der Zeile **Use** werden alle _Shared_object_or_Shared_collection_ Eigenschaften/Elemente für alle anderen Prozesse im Schreibmodus gesperrt, bis die dazugehörige Zeile `End use` ausgeführt ist.
- Der dazwischenliegende Teil _statement(s)_ kann Änderungen in den Eigenschaften/Elementen von Shared_object_or_Shared_collection ohne das Risiko konkurrierender Zugriffe ausführen.
- If another shared object or collection is added as a property of the _Shared_object_or_Shared_collection_ parameter, they become connected within the same shared group.
- Versucht ein anderer Prozess, auf eine der Eigenschaften bzw. der verbundenen Eigenschaften von _Shared_object_or_Shared_collection_ zuzugreifen, während eine Sequenz **Use...End use** ausgeführt wird, wird er automatisch angehalten und wartet, bis die aktuelle Sequenz abgeschlossen ist.
- Die Zeile **End use** entsperrt die Eigenschaften von _Shared_object_or_Shared_collection_ und alle Objekte in derselben Gruppe.
- Im 4D Code können auch mehrere Strukturen **Use...End use** eingebunden sein. Bei einer Gruppe erhöht jedes **Use** den Sperrschlüssel der Gruppe und jedes **End use** verringert ihn; alle Eigenschaften/Elemente werden erst freigegeben, wenn der letzte Aufruf von **End use** den Sperrschlüssel auf 0 setzt.

:::note

Keep in mind that [collection functions](../API/CollectionClass.md) that modify shared collections automatically trigger an internal **Use** for this shared collection while the function is executed.

:::

## Beispiel 1

Sie wollen mehrere Prozesse starten, die eine Inventur von verschiedenen Produkten durchführen und das gleiche shared object aktualisieren. Der Hauptprozess erstellt eine Instanz von einem leeren shared object, startet dann die anderen Prozesse und übergibt das shared object und die zu zählenden Produkte als Parameter:

```4d
 ARRAY TEXT($_items;0)
 ... //fill the array with items to count
 $nbItems:=Size of array($_items)
 var $inventory : Object
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

In der Methode "HowMany" ist "inventory" ausgeführt und das shared object $inventory wird sobald wie möglich aktualisiert:

```4d
    //HowMany
 #DECLARE ($what : Text ; $inventory : Object)

 $count:=CountMethod($what) //method to count products
 Use($inventory) //use shared object
    $inventory[$what]:=$count  //save the results for this item
 End use
```

## Beispiel 2

Nachfolgende Beispiele zeigen spezifische Regeln beim Verwalten von shared groups:

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
