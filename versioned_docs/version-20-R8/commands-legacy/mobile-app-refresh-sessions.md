---
id: mobile-app-refresh-sessions
title: MOBILE APP REFRESH SESSIONS
slug: /commands/mobile-app-refresh-sessions
displayed_sidebar: docs
---

<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Syntax-->**MOBILE APP REFRESH SESSIONS**<!-- END REF-->
<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Summary-->The **MOBILE APP REFRESH SESSIONS** command checks all mobile application session files located in the MobileApps folder of the server, and updates existing session contents in memory for any edited files.<!-- END REF-->

This command is designed to be used by 4D for iOS and 4D for Android developers to "force" the reload of user session information after their local files have been edited. For example, if a session needs to be reset, you can remove the session file and then call **MOBILE APP REFRESH SESSIONS**. For more information about mobile app sessions, please refer to the [Go Mobile documentation](https://developer.4d.com/go-mobile).

The command checks the compliance of each session file in the MobileApps folder (json syntax, json schema, session data). If the file is compliant and has been modified, the corresponding session is refreshed in memory (if it already exists) with edited contents.

If a session file is not valid or has been deleted, the corresponding session is removed from memory.

The command can return one of the following errors, that can be handled through [ON ERR CALL](on-err-call.md) and [Last errors](last-errors.md)  commands:

| **Component name** | **Error code** | **Description**                                                |
| ------------------ | -------------- | -------------------------------------------------------------- |
| mobi               | 1              | The json file location does not match its content              |
| mobi               | 2              | The json file is not correctly formed                          |
| mobi               | 3              | The json file does not validate the json schema                |
| mobi               | 4              | Connection token is not compliant with the current information |

#### Example 

You want to reset all current sessions for all mobile applications:

```4d
 var $sessionsPath : Text
 $sessionsPath:=Get 4D folder(MobileApps folder)
 DELETE FOLDER($sessionsPath;Delete with contents)
 MOBILE APP REFRESH SESSIONS
```

#### See also 

[On Mobile App Authentication database method](on-mobile-app-authentication-database-method.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1596 |
| Thread safe | &check; |


