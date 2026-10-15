---
id: delete-user
title: DELETE USER
slug: /commands/delete-user
displayed_sidebar: docs
---

<!--REF #_command_.DELETE USER.Syntax-->**DELETE USER** ( *refUsuario* : Integer )<!-- END REF-->
<!--REF #_command_.DELETE USER.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refUsuario | Integer | &#8594; | Número de ID de usuário a apagar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.DELETE USER.Summary-->O comando [ON ERR CALL](../commands/on-err-call) apaga o usuário cujo número se passa em *refUsuario*.<!-- END REF--> Deve passar um número válido de usuário retornado pelo comando [GET USER LIST](../commands/get-user-list).   

Se a conta de usuário não existir ou tiver sido apagadas, o erro -9979 é gerado. Pode interceptar este erro com um método de gestão de erros instalado pelo comando [ON ERR CALL](../commands/on-err-call).  
  
Apenas o Desenhador e o Administrador podem apagar usuários. O Administrador não pode apagar um usuário criado pelo Desenhador.  
  
Os usuários apagados não aparecerão mais no editor de usuários quando chame a [EDIT ACCESS](../commands/edit-access) nem em modo Desenho. Note que os números de usuários apagados possam ser retribuídos ao criar novas contas.

## Gestão de erros 

Se não tiver os privilégios de acesso para chamar DELETE USER ou se outro processo já acessou ao sistema de senhas, um erro de privilégios de acesso é gerado. Pode interceptar este erro com um método de gestão de erros instalado pelo comando [ON ERR CALL](../commands/on-err-call).

## Ver também 

[GET USER LIST](../commands/get-user-list)  
[GET USER PROPERTIES](../commands/get-user-properties)  
[Is user deleted](../commands/is-user-deleted)  
[Set user properties](../commands/set-user-properties)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 615 |
| Thread-seguro | no |
| Modificar variáveis | error |


