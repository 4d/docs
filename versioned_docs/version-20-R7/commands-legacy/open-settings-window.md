---
id: open-settings-window
title: OPEN SETTINGS WINDOW
slug: /commands/open-settings-window
displayed_sidebar: docs
---

<!--REF #_command_.OPEN SETTINGS WINDOW.Syntax-->**OPEN SETTINGS WINDOW** ( *selector* {; *access* {; *settingsType*}} )<!-- END REF-->
<!--REF #_command_.OPEN SETTINGS WINDOW.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| selector | Text | &#8594;  | Key designating a theme or a page or a group of parameters in the Preferences or Settings dialog box |
| access | Boolean | &#8594;  | True=Lock the other pages of the dialog box<br/>False or omitted=Leave the other pages of the dialog box active |
| settingsType | Integer | &#8594;  | 0 or omitted = Structure settings, 1 = User settings, 2 = User settings for data |

<!-- END REF-->

#### Description 

<!--REF #_command_.OPEN SETTINGS WINDOW.Summary-->The **OPEN SETTINGS WINDOW** command opens the Preferences dialog box of 4D or the Database Settings of the current 4D application and displays the parameters or the page corresponding to the key passed in *selector*.<!-- END REF-->

The *selector* parameter must contain a “key” indicating the dialog box and the page to opened. This key is constructed as follows: */Dialog{/Page{/Parameters}}*. *Dialog* indicates the dialog box to be displayed: you can pass "4D" (for the Preferences) or "Database" (for Database Settings). For example, to indicate the Compiler page of the Database Settings, *selector* should contain "*/Database/Compiler*". The list of keys that can be used is provided below. If you just pass a slash ("/") in *selector*, the command displays the first page of the Database Settings dialog box.

The *access* parameter lets you control user actions in the Preferences or Database Settings dialog box by locking the other pages. Typically, you may want for the user to be able to customize certain parameters while preventing others from being modified. In this case, passing True in the *access* parameter means that only the page specified by the *selector* parameter will be active and modifiable, while access to all other pages will be locked (clicking on the buttons in the navigation bar will have no effect). If you pass False or omit the *access* parameter, all the pages of the dialog box will be accessible with no restriction. 

The *settingsType* parameter is taken into account in databases configured in "User settings" mode only (in this mode, custom "User settings" or "User settings for data file" are generated in an external file and used instead of the standard settings, see the *Using user settings* section in the *Design Reference* manual). In this context, this parameter lets you indicate whether you want to access the "Structure settings", the "User settings", or the "User settings for data file" dialog box. You pass one of the following constants, found in the "*4D Environment*" theme:

| Constant               | Type    | Value | Comment                                                                                                                                                                               |
| ---------------------- | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Structure settings     | Integer | 0     | Access to "Structure settings" (default value if parameter omitted). In this mode, values used for *selector* are identical to those in standard mode.                                |
| User settings          | Integer | 1     | Access to "User settings". In this mode, only certain keys can be used in the *selector* parameter                                                                                    |
| User settings for data | Integer | 2     | Access to "User settings for data file", that is, user settings stored at the same level as the data file. In this mode, only certain keys can be used with the *selector* parameter. |

If you pass an invalid key, the first page of the Database Settings dialog box is displayed. 

##### Path keys (standard mode) 

Here are the keys that can be used in the *selector* parameter in standard mode, in other words with the "Structure settings": 

*/4D* 
*/4D/General* 
*/4D/Structure* 
*/4D/Form editor* 
*/4D/Method editor* 
*/4D/Shortcuts* 
*/Database* 
*/Database/General* 
*/Database/Mover* 
*/Database/Interface* 
*/Database/Interface/Developper* 
*/Database/Interface/User* 
*/Database/Interface/Shortcuts* 
*/Database/Compiler* 
*/Database/Database* 
*/Database/Database/Data storage* 
*/Database/Database/Memory and cpu* 
*/Database/Database/International* 
*/Database/Backup* 
*/Database/Backup/Scheduler* 
*/Database/Backup/Configuration* 
*/Database/Backup/Backup and restore* 
*/Database/Client-Server* 
*/Database/Client-Server/Network* 
*/Database/Client-Server/IP configuration* 
*/Database/Web* 
*/Database/Web/Config* 
*/Database/Web/Options 1* 
*/Database/Web/Options 2* 
*/Database/Web/Log format* 
*/Database/Web/Log scheduler* 
*/Database/Web/Webservices* 
*/Database/SQL* 
*/Database/php* 
*/Database/Compatibility* 
*/Database/Security* 

**Compatibility note:** You can still use keys defined for 4D versions 11.x or previous using this command; 4D automatically establishes the correspondence. However, we recommend that you replace the former calls with the keys listed above.

##### Path keys (User settings mode) 

Here are the keys that can be used in the *selector* parameter in "User settings" and "User settings for data" modes:

*/Database* 
*/Database/Interface* 
*/Database/Database/Memory and cpu* 
**/Database/Client-Server* 
*/Database/Client-Server/Network* 
*/Database/Client-Server/IP configuration* 
*/Database/Web* 
*/Database/Web/Config* 
*/Database/Web/Options 1* 
*/Database/Web/Options 2* 
*/Database/Web/Log format* 
*/Database/Web/Log scheduler* 
*/Database/Web/Webservices* 
*/Database/SQL* 
*/Database/php* 

Addtional keys in "User settings for data" mode:

*/Database/Backup* 
*/Database/Backup/Scheduler* */Database/Backup/Configuration* 
*/Database/Backup/Backup and restore*

#### Example 1 

Open the “Methods” page of the 4D Preferences:   
  
```4d
 OPEN SETTINGS WINDOW("/4D/Method editor")
```

  
#### Example 2 

Open the “Shortcuts” parameters in the Database Settings while locking the other settings:  

```4d
 OPEN SETTINGS WINDOW("/Database/Interface/Shortcuts";True)
```

#### Example 3 

Open Database Settings on the first page:   

```4d
 OPEN SETTINGS WINDOW("/")
```

#### Example 4 

Access to the Interface page of the Database settings in "User settings" mode:

```4d
 OPEN SETTINGS WINDOW("/Database/Interface";False;1)
```

#### System variables and sets 

If the Preferences/Settings dialog box is validated, the system variable OK returns 1\. Otherwise, it returns 0.


#### Properties

|  |  |
| --- | --- |
| Command number | 903 |
| Thread safe | &cross; |
| Modifies variables | OK |


