---
id: dom-create-xml-ref
title: DOM Create XML Ref
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML Ref.Syntax-->**DOM Create XML Ref** ( *root* {; *nameSpace*} {; *nameSpaceName* ; *nameSpaceValue*} {; *nameSpaceName2* ; *nameSpaceValue2* ; ... ; *nameSpaceNameN* ; *nameSpaceValueN*} ) -> Function result<!-- END REF-->
<!--REF #_command_.DOM Create XML Ref.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| root | String | -> | Name of root element |
| nameSpace | String | -> | Value of namespace |
| nameSpaceName | String | -> | Namespace name |
| nameSpaceValue | String | -> | Namespace value |
| Function result | String | <- | Root XML element reference |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Create XML Ref.Summary-->The **DOM Create XML Ref** command creates an empty XML tree in memory and returns its reference.<!-- END REF-->  
  
Pass the name of the XML tree root element in the *root* parameter. 

Pass the declaration of the namespace value of the tree in the optional *nameSpace* parameter (for example, “http://www.4d.com”).   
Note that you can prefix the *root* parameter with the namespace name followed by a colon *:* (for example “MyNameSpace:MyRoot”). In this case, the *nameSpace* parameter specifying the namespace value is mandatory.

**Note:** The namespace is a string that allows you to make sure the XML variable names are unique. In general, a URL like http://www.mysite.com/myurl is used. The URL does not necessarily have to be valid, but it does have to be unique. 

You can declare one or more additional namespaces in the generated XML tree using *nameSpaceName/nameSpaceValue* pairs. You can pass as many namespace name/value pairs as you want. 

**Important:** Remember to call the [DOM CLOSE XML](dom-close-xml.md) command in order to free up the memory when you have finished using the XML tree.

#### Example 1 

Creating a single XML tree: 

```4d
 C_TEXT(vElemRef)

 vElemRef:=DOM Create XML Ref("MyRoot")
```

This code produces the following result:

<?xml version="1.0" encoding="UTF-8" standalone="no" ?> 
<MyRoot/>

#### Example 2 

Creating an XML tree with a single namespace:   

```4d
 C_TEXT(vElemRef)

 $Root:="MyNameSpace:MyRoot"

 $Namespace:="http://www.4D.com/tech/namespace"

 vElemRef:=DOM Create XML Ref($Root;$Namespace)
```

This code produces the following result:

<MyNameSpace:MyRoot xmlns:MyNameSpace="http://www.4D.com/tech/namespace"/>

#### Example 3 

  
Creating an XML tree with several namespaces: 

```4d
 C_TEXT(vElemRef)

 C_TEXT($aNSName1;$aNSName2;$aNSValue1;$aNSValue2)

 $Root:="MyNameSpace:MyRoot"

 $Namespace:="http://www.4D.com/tech/namespace"

 $aNSName1:="NSName1"

 $aNSName2:="NSName2"

 $aNSValue1:="http://www.4D.com/Prod/namespace"

 $aNSValue2:="http://www.4D.com/Mkt/namespace"

 vElemRef:=DOM Create XML Ref($Root;$Namespace;$aNSName1;$aNSValue1;$aNSName2;$aNSValue2)
```

This code produces the following result:

<MyNameSpace:MyRoot xmlns:MyNameSpace="http://www.4D.com/tech/nameSpace"
NSName1="http://www.4D.com/Prod/namespace"
NSName2="http://www.4D.com/Mkt/namespace"/>

#### System variables and sets 

If the command was executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated.

#### See also 
[DOM CLOSE XML](dom-close-xml.md)  
[DOM SET XML DECLARATION](dom-set-xml-declaration.md)  