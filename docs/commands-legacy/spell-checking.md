---
id: spell-checking
title: SPELL CHECKING
slug: /commands/spell-checking
displayed_sidebar: docs
---

<!--REF #_command_.SPELL CHECKING.Syntax-->**SPELL CHECKING**<!-- END REF-->
<!--REF #_command_.SPELL CHECKING.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.SPELL CHECKING.Summary-->The **SPELL CHECKING** command triggers the spell check of the field or variable having the focus in the currently displayed form.<!-- END REF--> The object checked must be of the string or text type.

**Note:** If you want to trigger the spellcheck by clicking a button in the form, make sure that this button does not have the "Focusable" property set.

Spell checking starts with the first word of the field or variable. If an unknown word is detected, the spell check dialog box appears (for more information, refer to the Design Reference manual of 4D). 4D uses the current dictionary (corresponding to the language of the application) unless you have used the [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md) command.

**Warning:** The **SPELL CHECKING** command affects the text that is being entered in the form, and not the associated data source (field or variable). This means that if you call this command from the On Data Change or On Losing Focus form events (not recommended), it will not affect the stored text since 4D has already assigned the entered text to the data source at this point. In this case, you need to assign the edited result to the data source yourself, using the [Get edited text](get-edited-text.md) command. For example:  

```4d
 If(Form event code=On Data Change)
    SPELL CHECKING
    theVariable:=Get edited text
 End if
```

#### See also 

[SPELL CHECK TEXT](spell-check-text.md)  
[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 900 |
| Thread safe | &check; |
| Forbidden on the server ||


