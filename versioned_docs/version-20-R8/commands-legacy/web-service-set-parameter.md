---
id: web-service-set-parameter
title: WEB SERVICE SET PARAMETER
slug: /commands/web-service-set-parameter
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE SET PARAMETER.Syntax-->**WEB SERVICE SET PARAMETER** ( *name* ; *value* {; *soapType*} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE SET PARAMETER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| name | Text | &#8594;  | Name of parameter to include in SOAP request |
| value | Variable | &#8594;  | 4D variable containing the value of the parameter |
| soapType | Text | &#8594;  | SOAP type of the parameter |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SERVICE SET PARAMETER.Summary-->The **WEB SERVICE SET PARAMETER** command enables the definition of a parameter used for a client SOAP request.<!-- END REF--> Call this command for each parameter in the request (the number of times the command is called depends on the number of parameters).

In *name*, pass the name of the parameter as it must appear in the SOAP request.

In *value*, pass the 4D variable containing the value of the parameter. In the case of proxy methods, this variable is generally *$1*, *$2*, *$3*, etc., corresponding to a 4D parameter passed to the proxy method when it was called. It is, however, possible to use intermediary variables.

**Note:** Each 4D variable or array used must first be declared using the commands of the theme *Compiler* or *Arrays*.

By default, 4D automatically determines the most appropriate SOAP type for the *name* parameter according to the content of *value*. The indication of the type is included in the request.

However, you may want to “force” the definition of the SOAP type of a parameter. In this case, you can pass the optional *soapType* parameter using one of the following character strings (primary data types):

| **soapType**                | **Description**                                                       |
| --------------------------- | --------------------------------------------------------------------- |
| string                      | Text                                                                |
| int                         | Integer                                                               |
| boolean                     | Boolean                                                               |
| float                       | 32-bit real                                                           |
| decimal                     | Real with decimal                                                     |
| double                      | 64-bit real                                                           |
| duration                    | Duration in years, months, days, hours, minutes, seconds, for example |
| P1Y2M3DT10H30M              |                                                                       |
| datetime                    | Date and time in ISO8601 format, for example 2003-05-31T13:20:00      |
| time                        | Time, for example 13:20:00                                            |
| date                        | Date, for example 2003-05-31                                          |
| gyearmonth                  | Year and month (Gregorian calender), for example 2003-05              |
| gyear                       | Year (Gregorian calender), for example 2003                           |
| gmonthday                   | Month and day (Gregorian calender), for example --05-31               |
| gday                        | Day (Gregorian calender), for example ---31                           |
| gmonth                      | Month (Gregorian calender), for example --10--                        |
| hexbinary                   | Value expressed in hexadecimal                                        |
| base64binary                | BLOB                                                                  |
| anyuri                      | Uniform Resource Identifier (URI), for example                        |
| http://www.company.com/page |                                                                       |
| qname                       | Qualified XML name (namespace and local part)                         |
| notation                    | Notation attribute                                                    |

* **Notes:**  
   * For more information about XML data types, refer to the URL <http://www.w3.org/TR/xmlschema-2/>  
   * This command does not support blob objects (4D.Blob type). See *Passing blobs and blob objects to 4D commands* on developer.4d.com.

#### Example 

This example defines two parameters: 

```4d
 var $1 : Text
 var $2 : Text
 WEB SERVICE SET PARAMETER("city";$1)
 WEB SERVICE SET PARAMETER("country";$2)
```

#### See also 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE GET RESULT](web-service-get-result.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 777 |
| Thread safe | &check; |


