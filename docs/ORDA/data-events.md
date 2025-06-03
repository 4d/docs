---
id: data-events
title: Data Events
---


Data events are ORDA functions that are automatically invoked by ORDA each time entities and entity attributes are manipulated (added, deleted, or modified). You can write very simple events, and then make them more sophisticated.

You cannot directly trigger event function execution. Events are called automatically by ORDA based on user actions or operations performed through code on entities and their attributes.

Events can prevent "illegal" operations on the entities. They can also trigger business logic before, during, or after executing actions on data such as instantiating, saving, or dropping entities. For example, the `validateSave()` event can check the validity of data entered in the entity.





:::info Compatibility note

ORDA events in the datastore are equivalent to triggers in the 4D database. However, actions triggered at the 4D database level using the 4D classic language commands or standard actions do not trigger ORDA events. 

:::


## Overview

### Event level

A event function is always defined in the [Entity class](../ORDA/ordaClasses.md#entity-class). 

It can be defined at the **entity** level and/or the **attribute** level (it includes [**computed attributes**](../ORDA/ordaClasses.md#computed-attributes)). In the first case, it will be triggered for any attributes of the entity; on the other case, it will only be triggered for the targeted attribute. For the same event, you can define different functions for different attributes. 

You can also define the same event at both attribute and entity levels. The attribute event is called first and then the entity event.


### Stopping operation

Some events can stop the undergoing action by returning an error. Other events can return errors but do not stop the action. 

### Execution location in remote configurations

In client/server configuration, most event functions are executed **server-side**, with the following exceptions:

- `constructor()` is always executed on the client
- `touched()` can be executed on the client, depending on the use of [`local`](../ORDA/ordaClasses.md#local-functions) keyword. Note that `touched()` is the only event function that supports the `local` keyword. 

In REST connections (i.e. Qodly applications, [REST API requests](../REST/REST_requests.md), or requests through [`Open datastore`](../commands/open-datastore.md)), event functions are always executed server-side.


### Summary table

The following table lists all available ORDA events along with their rules. 

| Event  | Level    | Function name   | Can stop action by returning an error|  (C/S) Executed on |
| :--------------- |:--------------- | :----- | :-----: | :-----: |
| Instantiate entity  | Entity      |   `constructor()` | No |   client | 
| Attribute touched  | Attribute    |    `event touched <attrName>()` | No | Depends on [`local`](../ORDA/ordaClasses.md#local-functions) keyword | 
|   | Entity   |   `event touched()`  | No | Depends on [`local`](../ORDA/ordaClasses.md#local-functions) keyword | 
| Before saving an entity | Attribute          |    `event validateSave <attrName>()` | Yes | server | 
|  | Entity          |    `event validateSave()`  | Yes | server | 
| When saving an entity | Attribute          |    `event saving <attrName>()`| Yes |  server | 
|  | Entity          |    `event saving()`  | Yes | server | 
| After saving an entity | Entity          |    `event afterSave()`  | No |  server | 
| Before dropping an entity | Attribute          |    `event validateDrop <attrName>()`| Yes |  server | 
|  | Entity          |    `event validateDrop()`  | Yes |  server |
| When dropping an entity | Attribute          |    `event dropping <attrName>()`| Yes | server | 
|  | Entity          |    `event dropping()`  | Yes | server |
| After dropping an entity | Entity          |    `event afterDrop()`  | No | server | 


## *event* parameter

Event functions (except `constructor()`) accept a single *event* object as parameter. When the function is called, the parameter is filled with several properties:

| Attribute name  | Availability  | Type        | Description        | 
| :--------------- |:---------------  |:--------------- | :--------------- | 
| `kind`  | Always   |    String  | Event name ("touched" / "validateSave" / "saving" / "afterSave" / "validateDrop" / "dropping" / "afterDrop")          |    
| *attributeName*  | Only for events involving an attribute (touched, validateSave, saving, validateDrop, dropping)  |    String  |  Attribute name (*e.g.* "firstname")          |      
| *dataClassName*  | Always       |    String          |  Dataclass name (*e.g.* "Company")          |      
| `savedAttributes`  | Only in afterSave()   |     Collection of String          |   Attribute names properly saved         |    
| `droppedAttributes`  | Only in afterDrop()         |     Collection of String          |    Attribute names properly dropped        | 
| `saveStatus`  | Only in afterSave()        |     String          |    "success" if the save was OK, else "failed"        |    
| `dropStatus` | Only in afterDrop()        |     String          |    "success" if the drop was OK, else "failed"        |    


## Event function description

### `Class constructor`

#### Syntax

```4d
Class constructor()
// code
```

This event is triggered just after a new entity is created, using for example [`dataClass.new()`](../API/DataClassClass.md#new), [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection) or the [REST API](../REST/$method.md#methodupdate). It is useful to set initial values for entity instantiation, for example a custom ID.

This event can only be set at the entity level. 

This event function does not receive or return parameters. However, you can use it to set attribute values using [`This`](../commands/this.md).

:::note

In client/server configurations, keep in mind that this event is triggered when an entity is created in memory **on the server**. When the client attempts to save the new entity, an update request is sent to the server and an entity is created in memory on the server thus triggering the event.

:::

#### Example

```4d

 //cs.BookingEntity class
Class constructor() 

    This.departureDate:=Current date
    This.arrivalDate:=Add to date(Current date; 0; 0; 2)

```

### `event touched`

#### Syntax

```4d
Function event touched($event : Object)<br/>Function event touched <attributeName>($event : Object)
// code
```

This event is triggered each time a value is modified in the entity.

- if you defined the function at the entity level (first syntax), it is triggered for modifications on any attribute of the entity. 
- if you defined the function at the attribute level (second syntax), it is triggered for modifications on this attribute only.

This event is triggered as soon as the 4D Server / 4D engine can detect a modification of attribute value which can be due to the following actions:

- in 4D single-user:
    - the user sets a value on a 4D form
    - the 4D code makes an assignment with the `:=` operator (4D single-user). The event is also triggered in case of self-assignment (`$entity.attribute:=$entity.attribute`).
- in client/server, remote datastore, Qodly: the entity is received on 4D Server while calling an ORDA function (on the entity or with the entity as parameter)
- with the REST server: the value is received on the REST server with a [REST request](../REST/$method.md#methodupdate) (`$method=update`)

The function receives an [*event* object](#event-parameter) as parameter. 

If this event [throws](../commands-legacy/throw.md) an error, it will not stop the undergoing action. 

:::note

This event is triggered when attributes are assigned in the [`constructor()`](#class-constructor) event.

:::

#### Example 1

You want to update several attributes when any attribute in the entity is touched.

```4d

Function event touched($event : Object) 

//  Store the updates in the Storage to save them later in a journal file
//
	var $logInfo : Object
	
	If (Storage.logs#Null)
		$logInfo:=New shared object()
		Use ($logInfo)
			$logInfo.dataclass:=$event.dataClassName
			$logInfo.attribute:=$event.attributeName
			$logInfo.entityID:=This.ID
			$logInfo.updatedBy:=Current user()
			$logInfo.when:=String(Current date())
			$logInfo.at:=String(Current time())
		End use 
		
		Use (Storage.logs)
			Storage.logs.push($logInfo)
		End use 
	End if 

```


#### Example 2

The "touched" event is useful with computed attributes, when you want to store a state depending on a comparison on the current value of underlying attributes. For example:

```4d
exposed Function get sameDay(): Boolean
    return (This.departureDate = This.arrivalDate) ? True : False
```

This code can lead to time-consuming queries because the search is sequential due to the nature of the computed attribute. Using a non-computed *sameDay* attribute updated when other attributes are touched will save time:

```4d
    //BookingEntity class

Function event touched departureDate ($event : Object) 

    This.sameDay:=(This.departureDate = This. arrivalDate) ? True : False
//
//
Function event touched arrivalDate ($event : Object) 

    This.sameDay:=(This.departureDate = This. arrivalDate) ? True : False

```





