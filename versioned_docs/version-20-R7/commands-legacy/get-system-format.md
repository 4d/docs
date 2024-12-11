---
id: get-system-format
title: GET SYSTEM FORMAT
slug: /commands/get-system-format
displayed_sidebar: docs
---

<!--REF #_command_.GET SYSTEM FORMAT.Syntax-->**GET SYSTEM FORMAT** ( *format* ; *value* )<!-- END REF-->
<!--REF #_command_.GET SYSTEM FORMAT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| format | Integer | &#8594;  | System format to be retrieved |
| value | Text | &#8592; | Value of format defined in the system |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET SYSTEM FORMAT.Summary-->The **GET SYSTEM FORMAT** command returns the current value of several regional parameters defined in the operating system.<!-- END REF--> This command can be used to build “automatic” custom formats based on the system preferences.

In the *format* parameter, pass the type of parameter whose value you want to know. The result is returned directly by the system in the *value* parameter as a character string. In *format*, you must pass one of the following constants of the *System Format* theme. Below is a description of these constants:

| Constant                   | Type    | Value | Comment                                                                               |
| -------------------------- | ------- | ----- | ------------------------------------------------------------------------------------- |
| Currency symbol            | Integer | 2     | Currency symbol (e.g.: “$”)                                                           |
| Date separator             | Integer | 13    | Separator used in date formats (e.g.: “/”)                                            |
| Decimal separator          | Integer | 0     | Decimal separator (e.g.: “.”)                                                         |
| Short date day position    | Integer | 15    | Position of the day in the short date format: “1” = left, “2” = middle, “3” = right   |
| Short date month position  | Integer | 16    | Position of the month in the short date format: “1” = left, “2” = middle, “3” = right |
| Short date year position   | Integer | 17    | Position of the year in the short date format: “1” = left, “2” = middle, “3” = right  |
| System date long pattern   | Integer | 8     | Long date display format in the form “dddd MMMM yyyy”                                 |
| System date medium pattern | Integer | 7     | Medium date display format in the form “dddd MMMM yyyy”                               |
| System date short pattern  | Integer | 6     | Short date display format in the form “dddd MMMM yyyy”                                |
| System time AM label       | Integer | 18    | Additional label for a time before noon in 12-hour formats (e.g.: “Morning”)          |
| System time long pattern   | Integer | 5     | Long time display format in the form “HH:MM:SS”                                       |
| System time medium pattern | Integer | 4     | Medium time display format in the form “HH:MM:SS”                                     |
| System time PM label       | Integer | 19    | Additional label for a time after noon in 12-hour formats (e.g.: “Afternoon”)         |
| System time short pattern  | Integer | 3     | Short time display format in the form “HH:MM:SS”                                      |
| Thousand separator         | Integer | 1     | Thousand separator (e.g.: “,”)                                                        |
| Time separator             | Integer | 14    | Separator used in time formats (e.g.: “:”)                                            |

#### See also 

[OBJECT SET FORMAT](object-set-format.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 994 |
| Thread safe | &check; |
| Forbidden on the server ||


