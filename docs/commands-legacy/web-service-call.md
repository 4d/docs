---
id: web-service-call
title: WEB SERVICE CALL
slug: /commands/web-service-call
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE CALL.Syntax-->**WEB SERVICE CALL** ( *accessURL* ; *soapAction* ; *methodName* ; *nameSpace* {; *complexType* {; *}} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE CALL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| accessURL | Text | &#8594;  | Access URL to Web Service |
| soapAction | Text | &#8594;  | Contents of SOAPAction field |
| methodName | Text | &#8594;  | Name of the method |
| nameSpace | Text | &#8594;  | Namespace |
| complexType | Integer | &#8594;  | Configuration of complex types (simple types if omitted) |
| * | Operator | &#8594;  | Do not close connection |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SERVICE CALL.Summary-->The **WEB SERVICE CALL** command calls a Web Service by sending an HTTP request.<!-- END REF--> This request contains the SOAP message created previously using the [WEB SERVICE SET PARAMETER](web-service-set-parameter.md) command. 

Any subsequent call to the [WEB SERVICE SET PARAMETER](web-service-set-parameter.md) command will cause the creation of a new request. The execution of the WEB SERVICE CALL command also erases any result from a previously-called Web Service and replaces it with the new result(s). 

In *accessURL*, pass the complete URL allowing access to the Web Service (do not confuse this URL with that of the WSDL file, which describes the Web Service). 

* **Access in secure mode (SSL)**: If you want to use a Web Service in secure mode using SSL, pass https:// in front of the URL instead of http://. This configuration automatically enables connection in secure mode.  
Note that this command can use a server certificate (see the [HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md) command). If this certificate is not valid (expired or revoked), the OK system variable is set to 0 and error 901 "Invalid server certificate" is returned. You can intercept this error using an error-handling method installed by the [ON ERR CALL](on-err-call.md) command.

In *soapAction*, pass the contents of the SOAPAction field of the request. This field generally contains the value “ServiceName#MethodName”. 

In *methodName*, pass the name of the remote method (belonging to the Web Service) that you want to execute. 

In *namespace*, pass the XML namespace used for the SOAP request. For more information about XML namespaces, refer to the Design Mode manual of 4D.

The optional *complexType* parameter specifies the configuration of the Web Service parameters sent or received (defined using the [WEB SERVICE SET PARAMETER](web-service-set-parameter.md) and [WEB SERVICE GET RESULT](web-service-get-result.md) commands). 

The value of the *complexType* parameter depends on the publication mode of the Web Service (DOC or RPC, see the Design Reference manual of 4D) and on its own parameters.   
In *complexType*, you must pass one of the following constants, located in the theme *Web Services (Client)*:

| Constant               | Type    | Value |
| ---------------------- | ------- | ----- |
| Web Service dynamic    | Integer | 0     |
| Web Service manual     | Integer | 3     |
| Web Service manual in  | Integer | 1     |
| Web Service manual out | Integer | 2     |
  
  
Each constant corresponds to a Web Services “configuration”. A configuration represents the combination of a publication mode (RPC/DOC) and the types of parameters (input/output, simple or complex) implemented. 

**Note:** Remember that the “input” or “output” characteristic of parameters is evaluated from the point of view of the proxy method/Web Service: 

* an “input” parameter is a value passed to the proxy method and thus to the Web Service,
* an “output” parameter is returned by the Web Service and thus by the proxy method (generally via $0).

The following table shows all the possible configurations as well as the corresponding constants: 

| **Input parameters**  |                        |                       |
| --------------------- | ---------------------- | --------------------- |
| **Output parameters** | **Simple**             | **Complex**           |
| **Simple**            | Web Service dynamic    | Web Service manual in |
| | (RPC mode)          | (RPC mode)             |                       |
| **Complex**           | Web Service manual out | Web Service manual    |
| (RPC mode)            | (RPC or DOC mode)      |                       |

The five configurations described below can therefore be implemented. In all cases, 4D will handle the formatting of the SOAP request to be sent to the Web Service as well as its envelope. It is up to you to format the contents of this request according to the configuration used. 

**Note:** Despite the fact that they are complex XML types, data arrays are handled by 4D as simple types. 

##### RPC mode, simple input and output 

This configuration is the easiest to use. In this case, the *complexType* contains the Web Service dynamic constant or is omitted.   
  
The parameters sent and responses received can be handled directly, without prior processing.   
  
Refer to the example of the command [WEB SERVICE GET RESULT](web-service-get-result.md).

##### RPC mode, complex input and simple output 

In this case, the *complexType* parameter contains the Web Service manual in constant. With this configuration, you must “manually” pass each XML source element in the form of a BLOB to the Web Service, using the [WEB SERVICE SET PARAMETER](web-service-set-parameter.md) command.   
  
It is up to you to format the initial BLOB as a valid XML element. As its first element, this BLOB must contain the first apparent “child” element of the <Body> element of the final request.   
  
**Example**  

```4d
 var $1 : Blob
 var $0 : Boolean
 
 WEB SERVICE SET PARAMETER("MyXMLBlob";$1)
 WEB SERVICE CALL("http://my.domain.com/my_service";"MySoapAction";"TheMethod";"http://my.namespace.com/";Web Service manual in)
 WEB SERVICE GET RESULT($0;"MyOutputVar";*)
```

##### RPC mode, simple input and complex output 

In this case, the *complexType* parameter contains the Web Service manual out constant. Each output parameter will be returned by the Web Service in the form of an XML element stored in a BLOB. You retrieve this parameter using the [WEB SERVICE GET RESULT](web-service-get-result.md) command. You can then parse the contents of the BLOB received using the XML commands of 4D.   
  
**Example**  

```4d
 var $0 : Blob
 var $1 : Boolean
 
 WEB SERVICE SET PARAMETER("MyInputVar";$1)
 WEB SERVICE CALL("http://my.domain.com/my_service";"MySoapAction";"TheMethod";"http://my.namespace.com/";Web Service manual out)
 WEB SERVICE GET RESULT($0;"MyXMLOutput";*)
```

##### RPC mode, complex input and output 

In this case, the *complexType* parameter contains the Web Service manual constant. Each input and output parameter must be stored in the form of XML elements in BLOBs, as described in the two previous configurations.   
  
**Example**  

```4d
 var $0 : Blob
 var $1 : Blob
 
 WEB SERVICE SET PARAMETER("MyXMLInputBlob";$1)
 WEB SERVICE CALL("http://my.domain.com/my_service";"MySoapAction";"TheMethod";"http://my.namespace.com/";Web Service manual)
 WEB SERVICE GET RESULT($0;"MyXMLOutput";*)
```

##### DOC mode 

A proxy calling method for a DOC Web Service is similar to a proxy calling method for an RPC Web Service using complex type input and output parameters.  
  
The only difference between these two configurations lies at the level of the XML content of BLOB parameters sent and received. From 4D’s point of view, the building and sending of the SOAP request are identical.   
  
**Example**  

```4d
 var $0 : Blob
 var $1 : Blob
 
 WEB SERVICE SET PARAMETER("MyXMLInput";$1)
 WEB SERVICE CALL("http://my.domain.com/my_service";"MySoapAction";"TheMethod";"http://my.namespace.com/";Web Service manual)
 WEB SERVICE GET RESULT($0;"MyXMLOutput";*)
```

**Note:** In the case of DOC Web Services, the value of the strings (“MyXMLInput” and “MyXMLOutput” above) passed as parameters is of no importance; it is even possible to pass empty strings "". In fact, these values are not used in the SOAP request containing the XML document. It is, nevertheless, mandatory to pass these parameters. 

To use a Web Service published in DOC mode (or in RPC mode with complex types), it is advisable to proceed as follows:

* Generate the proxy method using the Client Web Services Wizard.  
The proxy method will be called in the following manner: *$XMLresultBlob:=$DOCproxy\_Method($XMLparamBlob)*
* Familiarize yourself with the contents of SOAP requests to be sent to the Web Service using an on-line test (for instance, *http://soapclient.com/soaptest.html*). This type of tool is used to generate HTML test forms based on the WSDL of the Web Service.
* Copy the XML contents generated from the first child element of *<body>*.
* Write the method enabling you to place the real parameter values into the XML code; this code must then be placed in the *$XMLparamBlob* BLOB.
* To parse the response, you can also use an on-line test, or make use of the WSDL that specifies the returned elements.

The *\** parameter can be used to optimize calls. When it is passed, the command does not close the connection used by the process at the end of its execution. In this case, the next call to **WEB SERVICE CALL** will reuse this same connection if the \* parameter is passed, and so on. To close the connection, simply execute the command without the \* parameter. This mechanism can be used to noticeably accelerate the processing of successive calls of several different Web Services on the same server, in particular in a WAN configuration (via the Internet, for example). Note that this mechanism depends on the “keep-alive” setting of the Web server. This setting generally defines a maximum number of requests via the same connection, and can even deny requests. If the **WEB SERVICE CALL** requests following each other in the same connection reach this maximum number, or if keep-alive connections are not allowed, 4D will create a new connection for each request.

#### System variables and sets 

If the request has been correctly routed and the Web Service has accepted it, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is returned.

#### See also 

[WEB SERVICE GET RESULT](web-service-get-result.md)  
[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 778 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


