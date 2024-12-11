---
id: spell-get-current-dictionary
title: SPELL Get current dictionary
slug: /commands/spell-get-current-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL Get current dictionary.Syntax-->**SPELL Get current dictionary**  : Integer<!-- END REF-->
<!--REF #_command_.SPELL Get current dictionary.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | ID of dictionary used for spell check |

<!-- END REF-->

#### Description 

<!--REF #_command_.SPELL Get current dictionary.Summary-->The **SPELL Get current dictionary** command returns the ID number of the dictionary being used.<!-- END REF-->

#### Example 

We want to display the language of the current dictionary: 

```4d
  // List of loaded dictionaries
 SPELL GET DICTIONARY LIST($IDs_al;$Codes_at;$Names_at)
 $curLangCode:=SPELL Get current dictionary
 $countryName:=$Names_at{Find in array($IDs_al;$curLangCode)}
  // Display message
 ALERT("Current dictionary: "+$countryName) // Spanish
```

#### See also 

[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1205 |
| Thread safe | &check; |
| Forbidden on the server ||


