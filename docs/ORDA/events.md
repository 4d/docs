---
id: events
title: Events
---


ORDA events are functions that are automatically invoked by ORDA each time entities and entity attributes are manipulated (added, deleted, or modified). You can write very simple events, and then make them more sophisticated.

You cannot directly trigger event function code execution. Events are called automatically by ORDA based on user actions or operations performed through code on entities and their attributes.

Events can prevent "illegal" operations on the entities. They can also trigger business logic before, during, or after executing actions on data such as instantiating, saving, or dropping entities. For example, the `validateSave()` event can check the validity of data entered in the entity.





:::info Compatibility note

ORDA events in the datastore are equivalent to triggers in the 4D database. However, actions triggered at the 4D database level using the 4D classic language commands or standard actions do not trigger ORDA events. 

:::


## Overview

### Event level

A event function is always defined in the [Entity class](../ORDA/ordaClasses.md#entity-class). 

It can be defined for the **entity** level and/or the **attribute** level (including [**computed attributes**](../ORDA/ordaClasses.md#computed-attributes) and [**aliases**](../ORDA/ordaClasses.md#alias-attributes)). In the first case, it will be triggered for any attributes of the entity; on the other case, it will only be triggered for the defined attribute. For the same event, you can define different functions for different attributes entities. 

You can also define the same event at both attribute and entity levels. The attribute event is called first and then the entity event.

Events on en

### Stopping operation

Some events can stop the undergoing action by returning an error. Other events can return errors but do not stop the action. 

### Execution location (C/S and REST)

In client/server configuration, most event functions are executed server-side, with the following exceptions:

- `constructor()` is always executed on the client
- `touched()` can be executed on the client, depending on the use of [`local`](../ORDA/ordaClasses.md#local-functions) keyword. Note that `touched()` is the only event function that supports the `local` keyword. 

In REST connections (i.e. Qodly applications, [REST API requests](../REST/REST_requests.md), or requests through [`Open datastore`](../commands/open-datastore.md)), event functions are always executed server-side.


### Summary table

The following table lists all available ORDA events along with their rules. 

| Event  | Level    | Function name   | Can stop action by returning an error|  (C/S) Executed on |
| :--------------- |:--------------- | :----- | :-----: | :-----: |
| Instantiate entity  | Entity      |   constructor() | No |   client | 
| Attribute touched  | Attribute    |    touched *attrName*() | No | Depends on [`local`](../ORDA/ordaClasses.md#local-functions) keyword | 
| Attribute touched  | Entity   |    touched()  | No | Depends on [`local`](../ORDA/ordaClasses.md#local-functions) keyword | 
| Before saving an entity | Attribute          |    validateSave *attrName*() | Yes | server | 
| Before saving an entity | Entity          |    validateSave()  | Yes | server | 
| When saving an entity | Attribute          |    saving *attrName*()| Yes |  server | 
| When saving an entity | Entity          |    saving()  | Yes | server | 
| After saving an entity | Entity          |    afterSave()  | No |  server | 
| Before dropping an entity | Attribute          |    validateDrop *attrName*()| Yes |  server | 
| Before dropping an entity | Entity          |    validateDrop()  | Yes |  server |
| When dropping an entity | Attribute          |    dropping *attrName*()| Yes | server | 
| When dropping an entity | Entity          |    dropping()  | Yes | server |
| After dropping an entity | Entity          |    afterDrop()  | No | server | 


## *event* parameter

Event functions (except `constructor()`) accept a single *event* object as parameter. When the function is called, the parameter is filled with several properties:

| Attribute name  | Provided context  | Type        | Description        | 
| :--------------- |:---------------  |:--------------- | :--------------- | 
| `kind`  | Always   |    String  | Event name ("touched" / "validateSave" / "saving" / "afterSave" / "validateDrop" / "dropping" / "afterDrop")          |    
| *attributeName*  | Only for events involving an attribute (touched, validateSave, saving, validateDrop, dropping)  |    String  |  Attribute name (*e.g.* "firstname")          |      
| *dataClassName*  | Always       |    String          |  Dataclass name (*e.g.* "Company")          |      
| `savedAttributes`  | Only in afterSave()   |     Collection of String          |   Attribute names properly saved         |    
| `droppedAttributes`  | Only in afterDrop()         |     Collection of String          |    Attribute names properly dropped        | 
| `saveStatus`  | Only in afterSave()        |     String          |    "success" if the save was OK, else "failed"        |    
| `dropStatus` | Only in afterDrop()        |     String          |    "success" if the drop was OK, else "failed"        |    


## Event function description

### `constructor`

#### Syntax

```4d
constructor()
// code
```

This event is triggered just after a new entity is created, using for example [`dataClass.new()`](../API/DataClassClass.md#new) or [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection). It is useful to set initial values for entity instantiation, for example a custom ID.

This event can only be set at the entity level. 

This event function does not receive or return parameters. However, you can use it to set attribute values using [`This`](../commands/this.md).

:::note

In client/server configurations, keep in mind that this event is triggered when an entity is created in memory **on the server**. When the client attempts to save the new entity, an update request is sent to the server and an entity is created in memory on the server thus triggering the event.

:::

#### Example

```4d

 //cs.BookingEntity class
constructor () 

    This.departureDate:=Current date
    This.arrivalDate:=Add to date(Current date; 0; 0; 2)

```

### `event touched`

#### Syntax

```4d
Function event touched(*event* : Object)<br/>Function event touched <attributeName>(*event* : Object)
// code
```

This event is triggered each time a value is modified in the entity.

- if you defined the function at the entity level (first syntax), it is triggered for modifications on any attribute of the entity. 
- if you defined the function at the attribute level (second syntax), it is triggered for modifications on this attribute only.

This event is triggered as soon as the 4D Server / 4D engine can detect a modification of attribute value which can be due to:

- the user sets a value on a 4D Form (4D single-user)
- some 4D code makes an assignment with the `:=` operator (4D single-user). The event is triggered in case of self-assignment (`$attributevalue:=$attributevalue`).
- the value is received on the REST server with a [REST request](../REST/$method.md) (`$method=update`)
- the entity is received on 4D Server while calling an ORDA function (on the entity or with the entity as parameter) with Qodly - Remote datastore - C/S

The function receives an [*event* object](#event-parameter) as parameter. 


:::note

This event is not triggered when attributes are assigned in the [`constructor()`](#constructor) event.

:::




## Examples


```4d

 //cs.BookingEntity class

Function event validateSave price($event : Object)
    return This.checkValue($event)

Function event validateSave departureDate($event : Object)
    return This.checkValue($event)


Function checkValue ($event: Object) 

Case of
    :($event.attributeName = "price")
        If (This.price = 0)
            throw {errCode: 1; message: "Price can't be 0"}
        End if

    :($event.attributeName = "departureDate")
        If (This.departureDate < Current date())
            throw {errCode: 1; message: "Departure date is in the past"}
        End if
End case
```