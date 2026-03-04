---
id: session-storage
title: Session storage
slug: /commands/session-storage
displayed_sidebar: docs
---

<!--REF #_command_.Session storage.Syntax-->**Session storage** ( *id* : Text ) : Object<!-- END REF-->

<!--REF #_command_.Session storage.Params-->

<div class="no-index">

| Parâmetro | Tipo   |                             | Descrição                                               |
| --------- | ------ | --------------------------- | ------------------------------------------------------- |
| id        | Text   | &#8594; | Identificador único (UUID) da sessão |
| Resultado | Object | &#8592; | Objeto de armazenamento da sessão                       |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>História</summary>

| Release | Mudanças                    |
| ------- | --------------------------- |
| 20 R8   | Suporte a sessões autônomas |
| 20 R6   | Adicionado                  |

</details>
</div>

## Descrição

<!--REF #_command_.Session storage.Summary-->The **Session storage** command returns the storage object of the session whose unique identifier you passed in the *id* parameter.<!-- END REF--> 

Em *id*, passe o UUID da sessão para a qual você deseja obter o armazenamento. Ele é atribuído automaticamente pelo 4D (4D Server ou, para sessões autônomas, 4D single-user) e é armazenado na propriedade [**.id**](../../API/SessionClass.md#id) do [objeto sessão](../../API/SessionClass.md). Se a sessão não existir, o comando retornará **Null**.

**Nota:** você pode obter os identificadores de sessão usando o comando [Process activity](../commands/process-activity).

O objeto retornado é a propriedade [**.storage**](../../API/SessionClass.md#storage) da sessão. It is a shared object used to store information available to all processes of the session. It is a shared object used to store information available to all processes of the session.

## Exemplo

Esse método modifica o valor de uma propriedade "settings" armazenada no objeto de armazenamento de uma sessão específica:

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

[Process activity](../commands/process-activity)\
[Session](./session.md)

## Propriedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1839 |
| Thread safe       | sim  |


