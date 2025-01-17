---
id: spell-add-to-user-dictionary
title: SPELL ADD TO USER DICTIONARY
slug: /commands/spell-add-to-user-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Syntax-->**SPELL ADD TO USER DICTIONARY** ( *words* )<!-- END REF-->
<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| words | Text, Text array | &#8594;  | Word or list of words to add to user dictionary |

<!-- END REF-->

#### Description 

<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Summary-->The **SPELL ADD TO USER DICTIONARY** command adds one or more words to the current user dictionary.<!-- END REF-->

A user dictionary is a dictionary containing words added by the user to the current dictionary. This dictionary is a file named *UserDictionaryxxx.dic* (where xxx represents the ID of the current dictionary) that is created automatically in the current 4D folder. There is a user dictionary for each current dictionary used. 

In *words*, pass a text string or a text array containing the word(s) to be added to the user dictionary. If one of the words is already found in the dictionary, it is ignored by the command.

#### Example 

Adding proper nouns to the user dictionary:

```4d
 ARRAY TEXT($arrTwords;0)
 APPEND TO ARRAY($arrTwords;"4D")
 APPEND TO ARRAY($arrTwords;"Wakanda")
 APPEND TO ARRAY($arrTwords;"Clichy")
 SPELL ADD TO USER DICTIONARY($arrTwords)
```

#### See also 

[SPELL CHECK TEXT](spell-check-text.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1214 |
| Thread safe | &cross; |


