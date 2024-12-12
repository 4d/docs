---
id: method-set-attribute
title: METHOD SET ATTRIBUTE
slug: /commands/method-set-attribute
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ATTRIBUTE.Syntax-->**METHOD SET ATTRIBUTE** ( *path* ; *attribType* ; *attribValue* {; *attribType2* ; *attribValue2* ; ... ; *attribTypeN* ; *attribValueN*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET ATTRIBUTE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text | &#8594;  | Path of project method |
| attribType | Integer | &#8594;  | Type of attribute |
| attribValue | Boolean, Text | &#8594;  | True = select attribute, False = deselect attributeor Folder name |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.METHOD SET ATTRIBUTE.Summary-->The **METHOD SET ATTRIBUTE** command sets the value(s) of the *attribType* attribute(s) for the project method designated by the *path* parameter.<!-- END REF--> This command only works with project methods. If you pass an invalid *path*, an error is generated. 

In the *attribType* parameter, pass a value indicating the type of attribute to set. You can use the following constants, found in the *Design Object Access* theme:

| Constant                     | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | ------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attribute executed on server | Integer | 8     | Corresponds to the "Execute on server" option                                                                                                                                                                                                                                                                                                                                                        |
| Attribute folder name        | Integer | 1024  | Name of folder for the method ("folder" attribute). When you pass this constant, you must pass a folder name in *attribValue*:<br/>if this name corresponds to a valid folder, the method is placed in this parent folder,if the folder does not exist, the command does not change anything at the parent folder level,if you pass an empty string, the method is placed at the root level. |
| Attribute invisible          | Integer | 1     | Corresponds to the "Invisible" option                                                                                                                                                                                                                                                                                                                                                                |
| Attribute published SOAP     | Integer | 3     | Corresponds to the "Offered as a Web Service" option                                                                                                                                                                                                                                                                                                                                                 |
| Attribute published SQL      | Integer | 7     | Corresponds to the "Available through SQL" option                                                                                                                                                                                                                                                                                                                                                    |
| Attribute published Web      | Integer | 2     | Corresponds to the "Available through 4D HTML tags and URLs (4DACTION...)" option                                                                                                                                                                                                                                                                                                                    |
| Attribute published WSDL     | Integer | 4     | Corresponds to the "Published in WSDL" option                                                                                                                                                                                                                                                                                                                                                        |
| Attribute shared             | Integer | 5     | Corresponds to the "Shared by components and host database" option                                                                                                                                                                                                                                                                                                                                   |

In the *attribValue* parameter, you can pass either:

* **True** to select the corresponding option or **False** to deselect it, or
* a string (folder name) if you used the Attribute folder name constant in *attribType*.

You can pass multiple *attribType*;*attribValue* pairs in a single call.

You can execute this command from a component, but in this case, you must pass the *\** parameter because access to the component code is read-only. If you omit the *\** parameter in this context, the error -9763 is generated.

##### 

This command cannot be executed in compiled mode. When it is called in this mode, it will generate the error -9762\. 

#### Example 1 

Selection of the "Shared by components and host database" property for the "Choose dialog" project method:

```4d
 METHOD SET ATTRIBUTE("Choose dialog";Attribute shared;True)
```

#### Example 2 

Setting several attribute/value pairs:

```4d
 METHOD SET ATTRIBUTE(vPath;Attribute invisible;vInvisible;Attribute published Web;v4DAction;Attribute published SOAP;vSoap;Attribute published WSDL;vWSDL;Attribute shared;vExported;Attribute published SQL;vSQL;Attribute executed on server;vRemote;Attribute folder name;vFolder;*)
```

#### See also 

*Design Object Access*  
[METHOD Get attribute](method-get-attribute.md)  
[METHOD SET ATTRIBUTES](method-set-attributes.md)  