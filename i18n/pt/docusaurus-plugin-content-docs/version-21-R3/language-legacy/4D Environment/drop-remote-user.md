---
id: drop-remote-user
title: DROP REMOTE USER
slug: /commands/drop-remote-user
displayed_sidebar: docs
---

<!--REF #_command_.DROP REMOTE USER.Syntax-->**DROP REMOTE USER** ( *sessaoUsuario* : Text )<!-- END REF-->
<!--REF #_command_.DROP REMOTE USER.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| sessaoUsuario | Text | &#8594; | ID de sessão do usuário |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|17 R4|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.DROP REMOTE USER.Summary-->O comando **DROP REMOTE USER** desconecta a um usuário específico conectado remotamente ao servidor 4D.<!-- END REF--> 

Em *sesionUsuario*, passe o ID de sessão do usuário que quiser desconectar do servidor. Pode recuperar a ID de sessão com o comando [Process activity](../commands/process-activity).

**Nota:** este comando se executa de forma assíncrona e apenas pode ser executada em 4D Server. Se o método que chamar ao comando for executado localmente em 4D remoto ou monousuario, **DROP REMOTE USER** não faz nada.

## Exemplo 

Se quiser eliminar um usu\[ario remoto específico:

```4d
  // Método a executar no servidor
 var $userCol : Collection
 var $element : Object
 
  //desconectar ao usuário remoto Vanessa
 $userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")
 For each($element;$userCol)
    DROP REMOTE USER($element.ID)
 End for each
```

  

## Ver também 

[REJECT NEW REMOTE CONNECTIONS](../commands/reject-new-remote-connections)  
[SEND MESSAGE TO REMOTE USER](../commands/send-message-to-remote-user)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1633 |
| Thread-seguro | yes |



