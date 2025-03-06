---
id: call-chain
title: Call chain
slug: /commands/call-chain
displayed_sidebar: docs
---

<!--REF #_command_.Call chain.Syntax-->**Call chain** : Collection<!-- END REF-->
<!--REF #_command_.Call chain.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Collection | &#8592; | Collection of objects describing the call chain within a process |

<!-- END REF-->

#### Description 

<!--REF #_command_.Call chain.Summary-->The **Call chain** command returns a collection of objects describing each step of the method call chain within the current process.<!-- END REF--> It provides the same information as the Debugger window. It has the added benefit of being able to be executed from any 4D environment, including compiled mode.

The command facilitates debugging by enabling the identification of the method called, the component that called it, and the line number where the call was made. Each object in the returned collection contains the following properties:

| **Property** | **Type** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                   | **Example**              |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| database     | text     | Name of the database calling the method (to distinguish host methods and component methods)                                                                                                                                                                                                                                                                                                                       | "database":"contactInfo" |
| line         | longint  | Line number of call to the method                                                                                                                                                                                                                                                                                                                                                                                 | "line":6                 |
| name         | text     | Name of the called method                                                                                                                                                                                                                                                                                                                                                                                         | "name":"On Load"         |
| type         | text     | Type of the method: <br/>"projectMethod", "formObjectMethod", <li<"formmethod",< li=""> "databaseMethod", "triggerMethod", "executeOnServer" (when calling a project method with the *Execute on Server attribute*.), "executeFormula" (when executing a formula via [PROCESS 4D TAGS](process-4d-tags.md) or the evaluation of a formula in a 4D Write Pro document.)"classFunction"</li<"formmethod",<> | "type":"formMethod"      |

**Note:** For this command to be able to operate in compiled mode, the Range checking must not be disabled. See *Range checking*.

#### Example 

The following code returns a collection of objects containing information about the method call chain:

```4d
 var $currentCallChain : Collection
 $currentCallChain:=Call chain
```

If a project method is executed, the call chain could contain (for example):

```json
[   {    "type":"projectMethod",    "name":"detailForm",    "line":1,    "database":"myDatabase"   }]
```

If a form object method is executed, the call chain could contain (for example):

```json
[   {    "type":"formObjectMethod",    "name":"detailForm.Button",    "line":1,    "database":"myDatabase"   },   {    "type":"formMethod",    "name”:"detailForm",    "line":2,    "database":"myDatabase"   },   {    "type":"projectMethod",    "name”:"showDetailForm",    "line":2,    "database":"myDatabase”   }]
```


#### Properties

|  |  |
| --- | --- |
| Command number | 1662 |
| Thread safe | &check; |


