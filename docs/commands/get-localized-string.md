---
id: get-localized-string
title: Get localized string
displayed_sidebar: docs
---

<!--REF #_command_.Get localized string.Syntax-->**Get localized string** ( *resName* ) -> Function result<!-- END REF-->
<!--REF #_command_.Get localized string.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resName | String | -> | Name of resname attribute |
| Function result | String | <- | Value of string designated by resName in current language |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get localized string.Summary-->The **Get localized string** command returns the value of the string designated by the *resName* attribute for the current language.<!-- END REF-->

This command only works within an XLIFF architecture. For more information about this type of architecture, please refer to the description of XLIFF support in the *Design Reference* manual.

**Note:** The [Get database localization](get-database-localization.md) command can be used to find out the language used by the application.

Pass the resource name of the string for which you want to get the translation into the current target language in *resName*.

Note that XLIFF is diacritical.

#### Example 

Here is an extract from an .xlf file:

<file source-language="en-US" target-language="fr-FR">
[...]
   <trans-unit resname="Show on disk">
      <source>Show on disk</source>
      <target>Montrer sur le disque</target>
   </trans-unit>

After executing the following statement:

```4d
 $FRvalue:=Get localized string("Show on disk")
```

... if the current language is French, $FRvalue contains “Montrer sur le disque”.

#### System variables and sets 

If the command is executed correctly, the OK variable is set to 1\. If *resName* is not found, the command returns an empty string and the OK variable is set to 0.

#### See also 
[Get database localization](get-database-localization.md)  