---
id: overview
title: Overview
---

User preferences specify default behavior options affecting your working environment, e.g. colors used in the method editor, automatic form creation options, default display in forms, etc. They are applied to all databases opened with your 4D or 4D Server application.

**4D Server**: Object locking occurs when two or more users try to modify the settings in the Preferences dialog box at the same time. Only one user can use the Preferences dialog box at a time.

>4D offers a different set of parameters specific to the open database: Database Settings. For more information, refer to the chapter Database Settings.

## Access 
 
You can access the Preferences dialog box from the **Edit > Preferences...** menu (Windows) or the 4D Application menu (Mac OS):

![](assets/en/Preferences/overviewAccess.png) 

This menu option is available even when there is no open database.

You can also display the Preferences dialog box in Application mode using the "Preferences" standard action (associated with a menu item or a button) or using the `OPEN SETTINGS WINDOW` command.

## Storage 
 
Settings made in the Preferences dialog box are saved in an XML format preferences file named 4D Preferences **vXX.4DPreferences** that is stored in the preferences folder of the current user:

*	Windows 7 and higher: {disk}\Users\{UserName}\AppData\Roaming\4D
*	macOS: {disk}:Users:{UserName}:Library:Application Support:4D

>*XX* indicates the main version number of 4D. In version 17 for example, the file is named 4D Preferences v17.4DPreferences. For more information, see [userPreferences.userName folder](Project/architecture.html#userpreferencesusername-folder).


## Customizing parameters and "Factory settings"  

In the Preferences and Settings dialog boxes, parameters whose values have been modified appear in bold:

![](assets/en/Preferences/overviewUser.png)

Preferences indicated as customized may have been modified directly in the dialog box, or may have been modified previously in the case of a converted database. 

A parameter still appears in bold even when its value is replaced manually with its default values. This way it is always possible to visually identify any parameters that have been customized. 

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click on the **Factory settings** button:

![](assets/en/Preferences/overviewSettings.png)

This button resets all the parameters of the current page. It becomes active when at least one parameter has been modified on the current page.

