---
id: soap-declaration
title: SOAP DECLARATION
slug: /commands/soap-declaration
displayed_sidebar: docs
---

<!--REF #_command_.SOAP DECLARATION.Syntax-->**SOAP DECLARATION** ( *variable* ; *type* ; input_output {; *alias*} )<!-- END REF-->
<!--REF #_command_.SOAP DECLARATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable referring to an incoming or outgoing SOAP argument |
| type | Integer | &#8594;  | 4D type to which the argument points |
| input_output | Integer | &#8594;  | 1 = SOAP Input, 2 = SOAP Output |
| alias | Text | &#8594;  | Name published for this argument during SOAP exchanges |

<!-- END REF-->

#### Description 

<!--REF #_command_.SOAP DECLARATION.Summary-->The SOAP DECLARATION command explicitly declares the type of parameters used in a 4D method published as a Web Service.<!-- END REF-->

When a method is published as a Web Service, the standard parameters *$0*, *$1*... *$n* describe the parameters of the Web Service to the outside world (more particularly in the WSDL file). The SOAP protocol requires that parameters be explicitly named; 4D uses the names “FourD\_arg0, FourD\_arg1 ... FourD\_argn” by default.

This default operation can nevertheless prove to be problematic for the following reasons:

* It is not possible to declare *$0* or *$1*, *$2*, etc. as an array. Therefore, it is necessary to use pointers; however, in this case, the type of values must be known for the generation of the WSDL file.
* It can be useful or necessary to customize the parameter names (incoming and outgoing).
* You may want to use parameters such as XML structures and DOM references.
* It may also be necessary to retur values with a size greater than 32 KB (limit for Text arguments in databases that are in non-Unicode mode).
* Finally, this operation makes it impossible to return more than one value per RPC call (in *$0*).

The SOAP DECLARATION command lets you be free from these limits. You can execute this command for each incoming and outgoing parameter to assign it a name and a type.

**Note:** Even when the this command is used, it is still necessary to declare 4D variables and arrays in the Compiler\_Web method using commands of the “*Compiler*” theme.

In *variable*, pass the 4D variable to be referred to when calling the Web Service.

**Warning:** You can only refer to process variables or 4D method arguments (*$0* to *$n*). Local and interprocess variables cannot be used.

By default, because only Text type arguments can be used, the SOAP server responses are limited to 32 KB in databases that are in non-Unicode mode. However, it is possible to return SOAP arguments with a size greater than 32 KB, using BLOBs. To exceed this limit, you simply need to declare the arguments as BLOBs before calling the SOAP DECLARATION command (see example 4).

**Notes:** 

* On the client side, if you subscribe to this type of Web Service with 4D, the Web Services Wizard will of course generate a Text type variable. To be able to use it, you just need to re-type this return variable as a BLOB in the proxy method.
* This command does not support blob objects (4D.Blob type). See *Passing blobs and blob objects to 4D commands* on developer.4d.com.

In *type*, pass the corresponding 4D type. Most types of 4D variables and arrays can be used. You can use the following predefined constants, located in the “*Field and Variable Types*” theme, as well as, for XML types, two constants of the *Web Services (Server)* theme:

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Boolean array | Integer | 22    |
| Date array    | Integer | 17    |
| Integer array | Integer | 15    |
| Is BLOB       | Integer | 30    |
| Is Boolean    | Integer | 6     |
| Is date       | Integer | 4     |
| Is integer    | Integer | 8     |
| Is longint    | Integer | 9     |
| Is real       | Integer | 1     |
| Is string var | Integer | 24    |
| Is text       | Integer | 2     |
| Is time       | Integer | 11    |
| LongInt array | Integer | 16    |
| Real array    | Integer | 14    |
| String array  | Integer | 21    |
| Text array    | Integer | 18    |

| Constant         | Type    | Value |
| ---------------- | ------- | ----- |
| Is DOM reference | Integer | 37    |
| Is XML           | Integer | 36    |

In *input\_output*, pass a value indicating whether the processed parameter is “incoming” (i.e. corresponding to a value received by the method) or “outgoing” (i.e. corresponding to a value returned by the method). You can use the following predefined constants, located in the *Web Services (Server)* theme:

| Constant    | Type    | Value |
| ----------- | ------- | ----- |
| SOAP input  | Integer | 1     |
| SOAP output | Integer | 2     |

##### Use of XML types 

 You can declare variables of the "XML structure" and "DOM reference" type, both incoming and outgoing, via the Is XML and Is DOM reference constants. When parameters of this type are specified, no processing or encoding is applied to them and the data are transmitted "as is" (see example 5). 

* Outgoing parameters:  
   * Is XML indicates that the parameter contains an XML structure,  
   * Is DOM reference indicates that the parameter contains the DOM reference of an XML structure. In this case, inserting the XML structure into the SOAP message is equivalent to executing the [DOM EXPORT TO VAR](dom-export-to-var.md) command.

**Note:** In the case of DOM references used as outgoing parameters, it is recommended to use global references, created, for example, on startup and closed when the application is closed. In fact, a DOM reference created within the Web Service itself cannot be closed with [DOM CLOSE XML](dom-close-xml.md), otherwise the Web Service no longer returns anything. Multiple calls to the Web Service therefore involve creating multiple unclosed DOM references, which can lead to memory saturation

* Incoming parameters:  
   * Is XML indicates that the parameter must receive an XML argument sent by the SOAP client.  
   * Is DOM reference indicates that the parameter must receive the DOM reference of an XML structure corresponding to the XML argument sent by the SOAP client.
* Modification of the WSDL: These XML structures will be declared by 4D as the "anyType" type (undetermined) in the WSDL. If you want to type an XML structure precisely, you must save the WSDL file and manually add the desired data schema in the <types> section of the WSDL

##### COMPILER\_WEB method 

 Incoming SOAP arguments referred to using 4D variables (and not 4D method arguments) must first be declared in the COMPILER\_WEB project method. In fact, the use of process variables in Web Services methods requires that they be declared before the method is called. The COMPILER\_WEB project method is called, if it exists, for each SOAP request accepted. By default, the COMPILER\_WEB method does not exist. You must specifically create it. 

Note that the COMPILER\_WEB method is also called by the 4D Web server when receiving “conventional” Web requests of the POST type (see *URLs and Form Actions* section). 

In *alias*, pass the name of the argument as it must appear in the WSDL and in the SOAP exchanges. 

**Warning:** This name must be unique in the RPC call (both input and output parameters taken together), otherwise, only the last declaration will be taken into account by 4D.

**Note:** The argument names must not begin with a number nor contain spaces. Moreover, to avoid any risks of incompatibility, it is recommended to not use extended characters (such as accented characters).  
If the *alias* parameter is omitted, 4D will use, by default, the name of the variable or FourD\_argN for the 4D method arguments (*$0* to *$n*).

**Note:** The **SOAP DECLARATION** command must be included in the method published as a Web Service. It is not possible to call it from another method. 

#### Example 1 

This example specifies a parameter name:

```4d
  // In the COMPILER_WEB method
 var $1 : Integer
 
  // In the Web Service method
  // During generation of the WSDL file and SOAP calls, the word
  // zipcode will be used instead of fourD_arg1
 SOAP DECLARATION($1;Is longint;SOAP input;"zipcode")
```

#### Example 2 

This example retrieves an array of zip codes in the form of longints: 

```4d
  //In the COMPILER_WEB method
 ARRAY LONGINT(codes;0)
 
  //In the Web service method
 SOAP DECLARATION(codes;LongInt array;SOAP input;"in_codes")
```

#### Example 3 

This example refers to two return values without specifying an argument name: 

```4d
 SOAP DECLARATION(ret1;Is longint;SOAP output)
 SOAP DECLARATION(ret2;Is longint;SOAP output)
```

#### Example 4 

This example allows the 4D SOAP server to return an argument with a size greater than 32 KB in databases in non-Unicode mode: 

```4d
 var $0 : Blob
 SOAP DECLARATION($0;Is text;SOAP output)
```

  
Note the type Is text (and not Is BLOB). This allows the argument to be correctly processed. 

#### Example 5 

This example illustrates the results of different types of declarations: 

```4d
 ALL RECORDS([Contact])
 
  //Build an XML structure from the Contacts selection and store the XML in a BLOB
 var ws_vx_xmlBlob : Blob
 getContactsXML(->ws_vx_xmlBlob)
  //Retrieve the XML structure in a text variable
 var ws_vt_xml : Text
 ws_vt_xml:=BLOB to text(ws_vx_xmlBlob;UTF8 text without length)
  //Retrieve a DOM reference to the XML structure
 var ws_vt_xmlRef : Text
 ws_vt_xmlRef:=DOM Parse XML variable(ws_vt_xml)
 
  //Test the various declarations
 SOAP DECLARATION(ws_vx_xmlBlob;Is BLOB;SOAP output;"contactListsX")
  //The XML is converted into Base64 by 4D
 
 SOAP DECLARATION(ws_vt_xml;Is text;SOAP output;"contactListsText")
  //The XML is converted into text by 4D (< > become entities)
 
 SOAP DECLARATION(ws_vt_xml;Is XML;SOAP output;"xmlContacts")
  //The XML is passed as XML text
 
 SOAP DECLARATION(ws_vx_xmlBlob;Is XML;SOAP output;"blobContacts")
  //The XML is passed as an XML BLOB
 
 SOAP DECLARATION(ws_vt_xmlRef;Is DOM reference;SOAP output;"contactByRef")
  //The XML is passed as a reference
```

#### See also 

[Is data file locked](is-data-file-locked.md)  
[SOAP Get info](soap-get-info.md)  
[SOAP SEND FAULT](soap-send-fault.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 782 |
| Thread safe | &check; |


