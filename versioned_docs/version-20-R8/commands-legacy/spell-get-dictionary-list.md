---
id: spell-get-dictionary-list
title: SPELL GET DICTIONARY LIST
slug: /commands/spell-get-dictionary-list
displayed_sidebar: docs
---

<!--REF #_command_.SPELL GET DICTIONARY LIST.Syntax-->**SPELL GET DICTIONARY LIST** ( *langID* ; *langFiles* ; *langNames* )<!-- END REF-->
<!--REF #_command_.SPELL GET DICTIONARY LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| langID | Array integer | &#8592; | Unique ID of languages |
| langFiles | Text array | &#8592; | Names of language files installed |
| langNames | Text array | &#8592; | Local names of languages |

<!-- END REF-->

#### Description 

<!--REF #_command_.SPELL GET DICTIONARY LIST.Summary-->The **SPELL GET DICTIONARY LIST** command returns, in the *langID*, *langFiles* and *langNames* arrays, the IDs, file names and language names corresponding to the Hunspell dictionary files installed on the machine.<!-- END REF-->

**Note:** For more information about Hunspell dictionaries, refer to the *Spell checking* section in the *Design Reference* manual. 

* *langID* receives the ID numbers generated automatically and used with the [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md) command.  
Note that the IDs are unique and based on the file names. This command is mainly useful during development; you do not have to regenerate the IDs each time the database is executed.
* *langFiles* receives the names of the dictionary files (without extensions) installed on the machine.
* *langNames* receives the names of the languages expressed in the current application language. For example, for a French dictionary, the value "français (France)" is returned on a machine configured in French and "French (France)" on an English system. The language name is followed by "- Hunspell". This field is only valid for files "known" by 4D. For unknown files (for example, custom files), the name "N/A - Hunspell" is returned. This does not prevent you from using the dictionary (if the file concerned is valid), the ID returned may be passed to the [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md) command.

#### Example 

You put "fr-classic+reform1990.aff" and "fr-classic+reform1990.dic" as well as "fr-dentist.aff" and "fr-dentist.dic" into the Hunspell directory:

```4d
 ARRAY LONGINT($langID;0)
 ARRAY TEXT($dicName;0)
 ARRAY TEXT($langDesc;0)
 SPELL GET DICTIONARY LIST($langID;$dictName;$langDesc)
```

| **$langID** | **$dictName**         | **$langDesc**              |
| ----------- | --------------------- | -------------------------- |
| 65536       | en\_GB                | English (UK)               |
| 65792       | en\_US                | English (USA)              |
| 131072      | de\_DE                | German (Germany)           |
| 196608      | es\_ES                | Spanish                    |
| 262144      | fr\_FR                | French (France)            |
| 589824      | nb\_NO                | Norwegian Bokmal (Norway)  |
| 1074036166  | fr-classic+reform1990 | French (France) - Hunspell |
| 1073901273  | fr-dentist            | No description - Hunspell  |

#### See also 

[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1204 |
| Thread safe | &cross; |


