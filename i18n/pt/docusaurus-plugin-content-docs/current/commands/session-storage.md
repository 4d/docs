---
id: session-storage
title: Session storage
displayed_sidebar: docs
---

<!--REF #_command_.Session storage.Syntax-->**Session storage** ( *id* ) : Object<!-- END REF-->

<!--REF #_command_.Session storage.Params-->

| Parâmetro | Tipo   |   | Descrição                                                  |
| --------- | ------ | - | ---------------------------------------------------------- |
| id        | Text   | → | Unique identifier (UUID) of the session |
| Resultado | Object | ← | Storage object of the session                              |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                       |
| ------- | ------------------------------ |
| 20 R8   | Support of standalone sessions |
| 20 R6   | Adicionado                     |

</details>

#### Descrição

<!--REF #_command_.Session storage.Summary-->The **Session storage** command returns the storage object of the session whose unique identifier you passed in the *id* parameter.<!-- END REF--> 

In *id*, pass the UUID of the session for which you want to get the storage. It is automatically assigned by 4D (4D Server or, for standalone sessions, 4D single-user) and is stored in the [**.id**](../API/SessionClass.md#id) property of the [session object](../API/SessionClass.md). If the session does not exist, the command returns **Null**.

**Nota:** você pode obter os identificadores de sessão usando o comando [Process activity](process-activity.md).

O objeto retornado é a propriedade [**.storage**](../API/SessionClass.md#storage) da sessão. It is a shared object used to store information available to all processes of the session.

#### Exemplo

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

#### Veja também

[Process activity](process-activity.md)\
[Session](../API/SessionClass.md#session)
