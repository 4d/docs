---
id: method-set-attributes
title: METHOD SET ATTRIBUTES
slug: /commands/method-set-attributes
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ATTRIBUTES.Syntax-->**METHOD SET ATTRIBUTES** ( *path* : Text, Text array ; *attributes* : Object, Object array {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET ATTRIBUTES.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text, Text array | &#8594;  | Method path(s) |
| attributes | Object, Object array | &#8594;  | Attribute(s) to set for selected method(s) |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|15 R5|Modified|
|15|Created|

</details>
</div>

## Description 

<!--REF #_command_.METHOD SET ATTRIBUTES.Summary-->The **METHOD SET ATTRIBUTES** command allows you to set the *attributes* values for the method(s) specified in the *path* parameter.<!-- END REF-->

In *path*, you can pass either a text containing a method path, or a text array containing an array of paths. You will need to pass the same kind of parameter (string or array) in *attributes* in order to set the appropriate attributes. This command only works with project methods. If you pass an invalid *path*, an error is generated.

In *attributes*, you pass an object or an array of objects (depending on the kind of parameter you passed in *path*) containing all the attributes that you want to set for the method(s).

Method attributes must be set using the [OB SET](../commands/ob-set) or [OB SET ARRAY](../commands/ob-set-array) commands, with True or False values for Boolean attributes, or specific values for extended attributes. Only attributes that are present in the *attributes* parameter will be updated in the method attributes.

If the command is executed from a component, by default it applies to the component methods. If you pass the *\** parameter, it accesses the methods of the host database.

### 

The supported attributes are:

```json
{ 
    "invisible" : false, // true if visible 
    "preemptive" : "capable" // or "incapable" or "indifferent"    
    "publishedWeb" : false,  // true if available through 4D tags and URLs    
    "publishedSoap": false,  // true if offered as Web Service    
    "publishedWsdl": false,  // true if published in WSDL    
    "shared" : false,  // true if shared by components and host database    
    "publishedSql" : false,  // true if available through SQL    
    "executedOnServer" : false, // true if executed on server
}
```

**Note:** "published4DMobile" attributes are deprecated as for 4D 18.

## Example 

You want to set a single attribute:

```4d
 var $attributes : Object
 OB SET($attributes;"executedOnServer";True)
 METHOD SET ATTRIBUTES("aMethod";$attributes) //Only the "executedOnServer" attribute is modified
```

## See also 

[METHOD GET ATTRIBUTES](../commands/method-get-attributes)  
[METHOD SET ATTRIBUTE](../commands/method-set-attribute)  

## Properties

|  |  |
| --- | --- |
| Command number | 1335 |
| Thread safe | no |


