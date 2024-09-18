---
id: session-storage-by-id
title: Session storage by ID
slug: /commands-legacy/session-storage-by-id
displayed_sidebar: docs
---

<!--REF #_command_.Session storage by ID.Syntax-->**Session storage by ID** ( *id* ) -> Function result<!-- END REF-->
<!--REF #_command_.Session storage by ID.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| id | Text | &rarr; | Unique identifier (UUID) of the session on the server |
| Function result | Object | &larr; | Storage object of the session |

<!-- END REF-->

#### Note 

<!--REF #_command_.Session storage by ID.Summary-->The **Session storage by ID** command returns the storage object of the session whose unique identifier you passed in the *id* parameter.<!-- END REF--> 

In *id*, pass the UUID of the session for which you want to get the storage. It is automatically assigned by the server and is stored in the [**.id**](https://developer.4d.com/docs/API/SessionClass#id) property of the [session object](https://developer.4d.com/docs/API/SessionClass). If the session does not exist on the server, the command returns **Null**. 

**Note:** You can get the session identifiers using the [Get process activity](get-process-activity.md) command. 

The returned object is the [**.storage**](https://developer.4d.com/docs/API/SessionClass#storage) property of the session. It is a shared object used to store information available to all processes of the session.

#### Example 

This method modifies the value of a "settings" property stored in the storage object of a specific session:

```4d
  //Set storage for a session
  // The "Execute On Server" method property is set
 
 #DECLARE($id Text;$text Text)
 var $obj : Object
 
 $obj:=Session storage by ID($id)
 
 If($obj.settings=Null)
    Use($obj)
       $obj.settings:=New shared object("text";$text)
    End use
 Else
    Use($obj.settings)
       $obj.settings.text:=$text
    End use
 End if
```

#### See also 

[Get process activity](get-process-activity.md)  
[Session](https://developer.4d.com/docs/API/SessionClass#session)  