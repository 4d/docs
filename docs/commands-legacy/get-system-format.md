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
| format | Longint | &#x1F852; | System format to be retrieved |
| value | String | &#x1F858; | Value of format defined in the system |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET SYSTEM FORMAT.Summary-->The **GET SYSTEM FORMAT** command returns the current value of several regional parameters defined in the operating system.<!-- END REF--> This command can be used to build “automatic” custom formats based on the system preferences.

In the *format* parameter, pass the type of parameter whose value you want to know. The result is returned directly by the system in the *value* parameter as a character string. In *format*, you must pass one of the following constants of the *System Format* theme. Below is a description of these constants:

| Constant                   | Type    | Value | Comment                                                                               |
| -------------------------- | ------- | ----- | ------------------------------------------------------------------------------------- |
| Currency symbol            | Longint | 2     | Currency symbol (e.g.: “$”)                                                           |
| Date separator             | Longint | 13    | Separator used in date formats (e.g.: “/”)                                            |
| Decimal separator          | Longint | 0     | Decimal separator (e.g.: “.”)                                                         |
| Short date day position    | Longint | 15    | Position of the day in the short date format: “1” = left, “2” = middle, “3” = right   |
| Short date month position  | Longint | 16    | Position of the month in the short date format: “1” = left, “2” = middle, “3” = right |
| Short date year position   | Longint | 17    | Position of the year in the short date format: “1” = left, “2” = middle, “3” = right  |
| System date long pattern   | Longint | 8     | Long date display format in the form “dddd MMMM yyyy”                                 |
| System date medium pattern | Longint | 7     | Medium date display format in the form “dddd MMMM yyyy”                               |
| System date short pattern  | Longint | 6     | Short date display format in the form “dddd MMMM yyyy”                                |
| System time AM label       | Longint | 18    | Additional label for a time before noon in 12-hour formats (e.g.: “Morning”)          |
| System time long pattern   | Longint | 5     | Long time display format in the form “HH:MM:SS”                                       |
| System time medium pattern | Longint | 4     | Medium time display format in the form “HH:MM:SS”                                     |
| System time PM label       | Longint | 19    | Additional label for a time after noon in 12-hour formats (e.g.: “Afternoon”)         |
| System time short pattern  | Longint | 3     | Short time display format in the form “HH:MM:SS”                                      |
| Thousand separator         | Longint | 1     | Thousand separator (e.g.: “,”)                                                        |
| Time separator             | Longint | 14    | Separator used in time formats (e.g.: “:”)                                            |

#### See also 

[OBJECT SET FORMAT](object-set-format.md)  