---
id: session-storage
title: Session storage
displayed_sidebar: docs
---

<!--REF #_command_.Session storage.Syntax-->**Session storage** ( *id* ) : Object<!-- END REF-->

<!--REF #_command_.Session storage.Params-->

| Parámetros | Tipo   |   | Descripción                                                |
| ---------- | ------ | - | ---------------------------------------------------------- |
| id         | Text   | → | Unique identifier (UUID) of the session |
| Resultado  | Object | ← | Storage object of the session                              |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                 |
| ----------- | ------------------------------ |
| 20 R8       | Support of standalone sessions |
| 20 R6       | Añadidos                       |

</details>

#### Descripción

<!--REF #_command_.Session storage.Summary-->The **Session storage** command returns the storage object of the session whose unique identifier you passed in the *id* parameter.<!-- END REF--> 

In *id*, pass the UUID of the session for which you want to get the storage. It is automatically assigned by 4D (4D Server or, for standalone sessions, 4D single-user) and is stored in the [**.id**](../API/SessionClass.md#id) property of the [session object](../API/SessionClass.md). If the session does not exist, the command returns **Null**.

**Note:** You can get the session identifiers using the [Process activity](process-activity.md) command.

The returned object is the [**.storage**](../API/SessionClass.md#storage) property of the session. It is a shared object used to store information available to all processes of the session.

#### Ejemplo

This method modifies the value of a "settings" property stored in the storage object of a specific session:

```4d
  //Set storage for a session
  //The "Execute On Server" method property is set
 
 #DECLARE($id : Text; $text : Text)
 var $obj : Object
 
 $obj:=Session storage($id)
 
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

#### Ver también

[Process activity](process-activity.md)\
[Session](../API/SessionClass.md#session)

#### Propiedades

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Command number | 1839                                                            |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;cross; |
