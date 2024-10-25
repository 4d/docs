---
id: method-get-attributes
title: METHOD GET ATTRIBUTES
slug: /commands/method-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET ATTRIBUTES.Syntax-->**METHOD GET ATTRIBUTES** ( *path* ; *attributes* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET ATTRIBUTES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text, Text array | &#8594;  | Method path(s) |
| attributes | Object, Object array | &#8592; | Attribute(s) for selected method(s) |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD GET ATTRIBUTES.Summary-->The **METHOD GET ATTRIBUTES** command returns, in *attributes*, the current value of all attributes for the method(s) specified in the *path* parameter.<!-- END REF-->

This command only works with project methods. If you pass an invalid *path*, an error is generated.

In *path*, you can pass either a text containing a method path, or a text array containing an array of paths. You will need to pass the same kind of parameter (variable or array) in *attributes* in order to get the appropriate attributes.

In *attributes*, you pass an object or an array of objects, depending on the kind of parameter passed in *path*. All the attributes for the method(s) are returned as object properties, with "True"/"False" values for Boolean attributes, and text or additional values if necessary (for example, "scope":"table" for the 4D Mobile property).

If the command is executed from a component, by default it applies to the component methods. If you pass the *\** parameter, it accesses the methods of the host database.

**Compatibility note:** The *published4DMobile* property is deprecated as for 4D v18.

#### Example 

You want to get the attributes of the *sendMail* project method. You can write:

```4d
 var $att : Object
 METHOD GET ATTRIBUTES("sendMail";$att)
```

After execution, $att contains, for example:

```json
{
    "invisible":false,
    "preemptive":"capable",
    "publishedWeb":false,
    "publishedSoap":false,
    "publishedWsdl":false,
    "shared":false,
    "publishedSql":false,
    "executedOnServer":false,
    "published4DMobile":{
        "scope":"table",
        "table":"Table_1"
    }
}
```

#### See also 

[METHOD SET ATTRIBUTES](method-set-attributes.md)  