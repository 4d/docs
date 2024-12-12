---
id: spell-set-current-dictionary
title: SPELL SET CURRENT DICTIONARY
slug: /commands/spell-set-current-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Syntax-->**SPELL SET CURRENT DICTIONARY** ( *dictionary* )<!-- END REF-->
<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| dictionary | Integer, Text | &#8594;  | ID, Name, or Language code of dictionary to use for spell-check |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Summary-->The **SPELL SET CURRENT DICTIONARY** command causes the replacement of the current dictionary with the one specified by the *dictionary* parameter.<!-- END REF--> The current dictionary is used for the built-in spell-check feature in 4D (for more information, refer to the 4D *Design Reference* manual) as well as the one in the 4D Write Pro. The modification of the current dictionary is reflected immediately in all the processes of the database for the session, as well as in the 4D Write Pro areas. 

4D uses:

* Windows - the Hunspell dictionary corresponding to the application language,
* Mac - the native spell checker.

**Note:** For Mac, you can use the Hunspell dictionary via the [SET DATABASE PARAMETER](set-database-parameter.md) command. For more information, see the *Spellcheck configuration* section in the *Design Reference* manual. 

You can use the *dictionary* parameter to change the dictionary. You can pass either:

* a Hunspell dictionary ID number (returned by the [SPELL GET DICTIONARY LIST](spell-get-dictionary-list.md) command),
* a Hunspell dictionary name (corresponding to the file name of the Hunspell dictionary, with or without its extension),
* a BCP 47, ISO 639-1 or ISO 639-2 language code. For example, with the BCP 47 language code "en-US" indicates American English and "en-GB" specifies British English. These codes are redirected internally to the corresponding current dictionary (Hunspell or native Mac).

**Compatibility note:** In previous versions of 4D, "Cordial" dictionaries were supported. For compatibility, it is still possible to pass a "Cordial" dictionary number in the *dictionary* parameter (value or constant from the "*Dictionaries*" theme). In this case, however, the dictionary is redirected internally to an equivalent Hunspell dictionary (or the native Mac dictionary). 

#### System variables and sets 

If the *dictionary* is loaded correctly, the system variable OK is set to 1; otherwise, it is set to 0 and an error is returned. 

#### Example 

Loading of the "fr-classic" dictionary found in the Hunspell folder:

```4d
 SPELL SET CURRENT DICTIONARY("fr-classic")
  // SPELL SET CURRENT DICTIONARY ("FR-classic.dic") is valid
```

#### See also 

[SPELL CHECKING](spell-checking.md)  
[SPELL Get current dictionary](spell-get-current-dictionary.md)  
[SPELL GET DICTIONARY LIST](spell-get-dictionary-list.md)  