---
id: session-storage
title: Session storage
displayed_sidebar: docs
---

<!--REF #_command_.Session storage.Syntax-->**Session storage** ( *id* ) : Object<!-- END REF-->

<!--REF #_command_.Session storage.Params-->

| Parâmetro | Tipo   |                             | Descrição                                                  |
| --------- | ------ | --------------------------- | ---------------------------------------------------------- |
| id        | Text   | &#8594; | Unique identifier (UUID) of the session |
| Resultado | Object | &#8592; | Storage object of the session                              |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                       |
| ------- | ------------------------------ |
| 20 R8   | Support of standalone sessions |
| 20 R6   | Adicionado                     |

</details>

## Descrição

<!--REF #_command_.Session storage.Summary-->The **Session storage** command returns the storage object of the session whose unique identifier you passed in the *id* parameter.<!-- END REF--> 

Em *id*, passe o UUID da sessão para a qual você deseja obter o armazenamento. It is automatically assigned by 4D (4D Server or, for standalone sessions, 4D single-user) and is stored in the [**.id**](../API/SessionClass.md#id) property of the [session object](../API/SessionClass.md). Se a sessão não existir, o comando retornará **Null**.

**Nota:** você pode obter os identificadores de sessão usando o comando [Process activity](process-activity.md).

O objeto retornado é a propriedade [**.storage**](../API/SessionClass.md#storage) da sessão. It is a shared object used to store information available to all processes of the session. It is a shared object used to store information available to all processes of the session.

## Exemplo

This method modifies the value of a "settings" property stored in the storage object of a specific session:

```4d
  //Definir armazenamento para uma sessão
  //A propriedade do método "Execute On Server" está definida
 
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

## Veja também

[Process activity](process-activity.md)\
[Session](./session.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1839                        |
| Thread safe       | &check; |


