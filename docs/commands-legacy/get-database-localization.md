---
id: get-database-localization
title: Get database localization
slug: /commands/get-database-localization
displayed_sidebar: docs
---

<!--REF #_command_.Get database localization.Syntax-->**Get database localization** {( {*languageType*}{;}{*} )} : Text<!-- END REF-->
<!--REF #_command_.Get database localization.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| languageType | Integer | &#8594;  | Type of language |
| * | Operator | &#8594;  | Return information about host database |
| Function result | Text | &#8592; | Current language of the database |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get database localization.Summary-->The Get database localization command returns the database default language or the language specified by the *languageType*, expressed in the standard defined by the RFC 3066\.<!-- END REF--> Typically, the command returns “en” for English, “es” for Spanish, etc. For more information about this standard and the values returned by this command, please refer to *Appendix B: XLIFF architecture* in the *Design Reference* manual.

Several different language settings can be used simultaneously in the application. To designate the setting to be obtained, in *languageType* you can pass one of the following constants, found in the *4D Environment* theme:

| Constant                 | Type    | Value | Comment                                                                                                                                          |
| ------------------------ | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Current localization     | Integer | 1     | Current language of the application: default language or language set via the [SET DATABASE LOCALIZATION](set-database-localization.md) command. |
| Default localization     | Integer | 0     | Language set automatically by 4D on startup according to the Resources folder and the system environment (not modifiable).                       |
| Internal 4D localization | Integer | 3     | Language used by 4D for sorts and text comparisons (set in the Preferences of the application).                                                  |
| User system localization | Integer | 2     | Language set by the current user of the system.                                                                                                  |

By default, if you omit the *languageType* parameter, the command returns the default language (0). 

The optional *\** parameter is useful in the case of an architecture using components: it can be used to determine the database (host or component) for which you want to find out the language.

* When the command is called from a component:  
   * If the *\** parameter is passed, the command returns the language configuration of the host database.  
   * If the *\** parameter is not passed, the command returns the language configuration of the component database.
* When the command is called from a method of the host database, it always returns the language configuration of the host database (*\** is ignored).

The current language of the database determines the .lproj folder where the program will look for the localized items of the database. 4D automatically selects the current language on database startup according to the contents of the **Resources** folder and the system environment. How it works is that 4D loads the first .lproj folder of the database that corresponds to the reference language, with the following order of priority:

1. System language (under Mac OS, several languages can be set by order of preference, 4D uses this setting).
2. Language of the 4D application.
3. English
4. First language found in the **Resources** folder.

**Note:** If the database does not have an .lproj folder, 4D applies the following order of priority: 1\. System language, 2\. English (if the system language cannot be identified).

#### See also 

[Localized document path](localized-document-path.md)  
[SET DATABASE LOCALIZATION](set-database-localization.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1009 |
| Thread safe | &check; |
| Forbidden on the server ||


