---
id: storage
title: Storage
slug: /commands/storage
displayed_sidebar: docs
---

<!--REF #_command_.Storage.Syntax-->**Storage**  : Object<!-- END REF-->
<!--REF #_command_.Storage.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Object | &#8592; | Catalog of shared objects and shared collections registered in Storage |

<!-- END REF-->

#### Description 

<!--REF #_command_.Storage.Summary-->The **Storage** method returns the catalog of shared objects or shared collections that you have registered in the *Storage* object on the current machine or component.<!-- END REF--> 

The catalog returned by **Storage** is automatically created by 4D and is available to all processes of the database, including preemptive processes. There is one **Storage** catalog per machine and component: in a client/server application, there is one **Storage** shared object on the server, and one **Storage** shared object on each remote 4D application; if the database uses components, there is one **Storage** object per component.

Use the **Storage** catalog to reference any shared objects or shared collections that you want to be used from any preemptive or standard process. To register a shared object or a shared collection in the catalog, add its reference to the shared object returned by **Storage**.

Since the catalog returned by **Storage** is a *shared object*, it follows the rules described in the *Shared objects and shared collections* section, but with some specificities:

* This object can only contain shared objects and shared collections. Trying to add other kinds of values (non-shared objects or collections, null, scalar values) will generate an error.
* Adding a property to this object must be surrounded by the *Use...End use* structure, otherwise an error is returned. Reading an attribute outside of a *Use...End use* structure is, however, possible.
* When surrounded by the *Use...End use* structure, first-level attributes of **Storage** are locked for other processes.
* Unlike standard shared objects, the object returned by **Storage** will NOT share its *locking identifier* with shared objects or collections added as attributes (for more information, refer to the *About the locking identifier (how shared groups work)* section).

#### Example 1 

A common practice could be initializing the **Storage** object in the : 

```4d
 Use(Storage)
    Storage.counters:=New shared object("customers";0;"invoices";0)
 End use
```

#### Example 2 

This example shows a standard way to set **Storage** values: 

```4d
 Use(Storage)
    Storage.mydata:=New shared object
    Use(Storage.mydata)
       Storage.mydata.prop1:="Smith"
       Storage.mydata.prop2:=100
    End use
 End use
```

#### Example 3 

**Storage** allows implementing a singleton with a *lazy initialization*, as shown in the following example.

**Note:** For more information about singleton patterns, you can refer to this [Wikipedia page](https://en.wikipedia.org/wiki/Singleton%5Fpattern).

```4d
 var $0 : Integer
 var $counterValue : Integer
 var counter : Object //create a reference to counter for the process
 
 If(counter=Null) //if this reference is null, get if from Storage
    Use(Storage) //Use of Storage needed only once!
       If(Storage.counter=Null)
          Storage.counter:=New shared object("operation";0)
       End if
       counter:=Storage.counter //Get the reference of the counter shared object
    End use
 End if
 Use(counter) //directly use the shared object counter (no need to use Storage!)
    counter.operation:=counter.operation+1
    $counterValue:=counter.operation
 End use
 
 $0:=$counterValue
```

#### See also 

*Shared objects and shared collections*  

#### Properties
|  |  |
| --- | --- |
| Command number | 1525 |
| Thread safe | &check; |
| Forbidden on the server ||


