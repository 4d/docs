---
id: web-service-set-option
title: WEB SERVICE SET OPTION
slug: /commands/web-service-set-option
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE SET OPTION.Syntax-->**WEB SERVICE SET OPTION** ( *option* ; *value* )<!-- END REF-->
<!--REF #_command_.WEB SERVICE SET OPTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Code of the option to set |
| value | Integer, Text | &#8594;  | Value of the option |

<!-- END REF-->

#### Preliminary note 

<!--REF #_command_.WEB SERVICE SET OPTION.Summary-->This command is designed for advanced Web Services users.<!-- END REF--> Its use is optional. 

#### Description 

The **WEB SERVICE SET OPTION** command sets different options to be used during the next SOAP request triggered using the [WEB SERVICE CALL](web-service-call.md) command.   
You can call this command as many times as there are options to be set.

In the *option* parameter, pass the number of the option to set and in the *value* parameter, pass the new value of the option. For these parameters, you can use one of the following predefined constants of the *Web Services (Client)* theme:

| Constant                        | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------- | ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web Service display auth dialog | Integer | 4     | *value* \= 0 (do not display dialog box) or 1 (display dialog box)<br/>This option manages the display of the authentication dialog box during execution of the [WEB SERVICE CALL](web-service-call.md) command. By default, this command never displays the dialog box; normally, you have to use the [WEB SERVICE AUTHENTICATE](web-service-authenticate.md) command to do so. However, if you want the authentication dialog box to appear in order for the user to enter their identifiers, you will need to use this option: pass 1 in *value* to display the dialog box and 0 otherwise. The dialog box only appears if the Web service requires authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Web Service HTTP compression    | Integer | 6     | *value* \= Web Service Compression <br/> This option is used to enable an internal compression mechanism for SOAP requests in order to accelerate inter-4D application exchanges. When you execute the statement [WEB SERVICE SET OPTION](web-service-set-option.md)(Web Service HTTP Compression; Web Service Compression) on the 4D client of the Web Service, the data of the next SOAP request sent by the client will be compressed using a standard HTTP mechanism ("gzip" or "deflate", depending on the request contents) before being sent to the 4D SOAP server. The server will decompress and parse the request, then will reply automatically using the same mechanism. Only the request that follows the call to the [WEB SERVICE SET OPTION](web-service-set-option.md) command is affected. You must therefore call this command each time you want to use compression. By default, 4D does not compress Web Service HTTP requests.<br/>**Note:** This mechanism cannot be used for requests sent to a 4D SOAP server whose version is earlier than 11.3\. So that you can further optimize this functioning, additional options configure the threshold and compression rate of the requests. These options can be accessed via the [SET DATABASE PARAMETER](set-database-parameter.md) command |
| Web Service HTTP timeout        | Integer | 1     | *value* \= timeout of the client portion expressed in seconds.<br/>The timeout of the client portion is the wait period of the Web Service client in case the server does not respond. After this period, the client closes the session and the request is lost. <br/>This timeout is 180 seconds by default. It can be modified for specific reasons (network status, Web Service specifics, etc.).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Web Service reset auth settings | Integer | 5     | *value* \= 0 (do not erase information) or 1 (erase information)<br/>This option lets you indicate to 4D whether to memorize the authentication information of the user (user name, password, method, etc.), in order to reuse it subsequently. By default, this information is erased after each execution of the [WEB SERVICE CALL](web-service-call.md) command. Pass 0 in value to store the information and 1 to erase it. Note that when you pass 0, the information is kept during the session but is not stored.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Web Service SOAP header         | Integer | 2     | *value* \= XML root element reference to insert as a header in the SOAP request.<br/>This option allows you to insert a header in a SOAP request generated using the [WEB SERVICE CALL](web-service-call.md) command. SOAP requests do not contain a specific header by default. However, certain Web Services require a header, for example when managing identification parameters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Web Service SOAP version        | Integer | 3     | *value* \= Web Service SOAP\_1\_1 or Web Service SOAP\_1\_2<br/>This option lets you specify the SOAP protocol version used in the request. Pass the Web Service SOAP\_1\_1 constant in value to indicate version 1.1 and Web Service SOAP\_1\_2 to indicate version 1.2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

The order in which the options are called is not important. If the same *option* is set several times, only the value of the last call is taken into account. 

#### Example 1 

Inserting a customized header in the SOAP request: 

```4d
  // Creating an XML reference
 var vRootRef;vElemRef : Text
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vElemRef:=DOM Create XML element(vRootRef;vxPath)
  //Modifying SOAP header with reference
 WEB SERVICE SET OPTION(Web Service SOAP header;vElemRef)
```

#### Example 2 

Using version 1.2 of the SOAP protocol:

```4d
 WEB SERVICE SET OPTION(Web Service SOAP version;Web Service SOAP_1_2)
```

#### See also 

[WEB SERVICE CALL](web-service-call.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 901 |
| Thread safe | &check; |


