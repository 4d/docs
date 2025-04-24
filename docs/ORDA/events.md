---
id: events
title: Events
---


ORDA events are functions that are automatically invoked by ORDA each time you manipulate entities and entity attributes (add, delete and modify). You can write very simple events, and then make them more sophisticated.

Events can prevent "illegal" operations on the entities. They can also trigger business logic before, during, or after executing actions on data such as instantiating, saving, or dropping entities.



:::info Compatibility note

ORDA events in the datastore are equivalent to triggers in the 4D database. 

:::


## Overview

### Event level

A event function can be defined at the **entity** level and/or **attribute** level. In the first case, it will be triggered for any attributes of the entity; on the other case, it will only be triggered for the defined attribute. For the same event, you can define different functions for different attributes entities. 

You can also define the same event at both attribute and entity levels. The entity event is called first and then the attribute event.

### Stopping operation

Some events can stop the undergoing action by returning an error. Other events can only execute code. 

### Code execution location

In client/server configuration, most event functions are executed server side, with the following exceptions:

- `constructor()` is always executed on the client
- `touched()` can be executed on the client, depending on the use of [`local`](../ORDA/ordaClasses.md#local-functions) keyword. Note that `touched()` is the only event function that supports the `local` keyword. 

In REST connections (i.e. Qodly applications, [REST API requests](../REST/REST_requests.md), or requests through [`Open datastore`](../commands/open-datastore.md)), event functions are always executed server-side.


### Table of events

The following table lists all available ORDA events along with their rules. 

| Event  | Level    | Function name   | Can stop action by returning an error|  (C/S) Executed on |
| :--------------- |:--------------- | :----- | :-----: | :-----: |
| Instantiate entity  | Entity      |   constructor() | No |   client | 
| Attribute touched  | Attribute    |    touched _attrName_ () | No | Depends on [`local`](../ORDA/ordaClasses.md#local-functions) keyword | 
| Attribute touched  | Entity   |    touched()  | No | Depends on [`local`](../ORDA/ordaClasses.md#local-functions) keyword | 
| Before saving an entity | Attribute          |    validateSave _attrName_ () | Yes | server | 
| Before saving an entity | Entity          |    validateSave()  | Yes | server | 
| When saving an entity | Attribute          |    saving _attrName_  ()| Yes |  server | 
| When saving an entity | Entity          |    saving()  | Yes | server | 
| After saving an entity | Entity          |    afterSave()  | No |  server | 
| Before dropping an entity | Attribute          |    validateDrop _attrName_ ()| Yes |  server | 
| Before dropping an entity | Entity          |    validateDrop()  | Yes |  server |
| When dropping an entity | Attribute          |    dropping _attrName_  ()| Yes | server | 
| When dropping an entity | Entity          |    dropping()  | Yes | server |
| After dropping an entity | Entity          |    afterDrop()  | No | server | 


