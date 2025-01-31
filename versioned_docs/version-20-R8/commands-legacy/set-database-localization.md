---
id: set-database-localization
title: SET DATABASE LOCALIZATION
slug: /commands/set-database-localization
displayed_sidebar: docs
---

<!--REF #_command_.SET DATABASE LOCALIZATION.Syntax-->**SET DATABASE LOCALIZATION** ( *languageCode* {; *} )<!-- END REF-->
<!--REF #_command_.SET DATABASE LOCALIZATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| languageCode | Text | &#8594;  | Language selector |
| * | Operator | &#8594;  | Scope of command |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET DATABASE LOCALIZATION.Summary-->The SET DATABASE LOCALIZATION command is used to modify the current language of the database for the current session.<!-- END REF-->

The current language of the database lets you specify the .lproj folder where the program will look for the localized elements of the application (text and pictures). By default, 4D automatically determines the current language according to the contents of the **Resources** folder and the system environment (see the description of the [Get database localization](get-database-localization.md) command). SET DATABASE LOCALIZATION can be used to modify the default current language. 

The command does not modify the language of forms that are already loaded, only elements displayed after the command is called will take the new configuration into account. 

Pass the language to be used for the application in *languageCode*, expressed in the standard specified by RFC 3066, ISO639 and ISO3166\. Typically, you must pass "fr" for French, "es" for Spanish, "en-us" for American English, and so on. For more information about this standard, please refer to *Appendix B: XLIFF architecture* in the *Design Reference* manual.

By default, the command applies to all the databases and components that are open, for all the processes. The optional *\** parameter, if passed, specifies that the command must only apply to the database that called it. This parameter can be used more particularly to specify separately the language of the database and that of a component. 

If the command has been executed correctly, the *OK* system variable is set to 1; otherwise, it is set to 0\. 

**Note:** In accordance with the RFC, the command uses the "-" (dash) to separate the language code and the region code, for example "fr-ca" or "en-us". On the other hand, the "lproj" folders of the **Resources** folder use the "\_" (underscore), for example "fr\_ca.lproj" or "en\_us.lproj". 

**4D Server:** With 4D Server, the languages available are those located on the remote machine that called the command. You must therefore make sure that the **Resources** folders are synchronized. 

#### Example 1 

We want to set French as the interface language:

```4d
 SET DATABASE LOCALIZATION("fr")
```

#### Example 2 

The interface of your application uses the static string ":xliff:shopping". The XLIFF files contain more particularly the following information:

* FR folder:  
```XML  
 <trans-unit id="15" resname="Shopping">  
<source>Shopping</source>  
<target>Faire les courses</target>  
</trans-unit>  
```
* FR\_CA folder:  
```XML  
 <trans-unit id="15" resname="Shopping">  
<source>Shopping</source>  
<target>Magasiner</target>  
</trans-unit>  
```

```4d
 SET DATABASE LOCALIZATION("fr")
  //the string ":xliff:shopping" displays "Faire les courses"
 SET DATABASE LOCALIZATION("fr-ca")
  //the string ":xliff:shopping" displays "Magasiner"
```

#### See also 

[Get database localization](get-database-localization.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1104 |
| Thread safe | &cross; |
| Modifies variables | OK |


