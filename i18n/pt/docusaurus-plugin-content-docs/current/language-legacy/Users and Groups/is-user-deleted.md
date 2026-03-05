---
id: is-user-deleted
title: Is user deleted
slug: /commands/is-user-deleted
displayed_sidebar: docs
---

<!--REF #_command_.Is user deleted.Syntax-->**Is user deleted** ( *numUsuario* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is user deleted.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numUsuario | Integer | &#8594; | Número de ID de usuário |
| Resultado | Boolean | &#8592; | TRUE = conta de usuário foi apagada ou não existe; FALSE = Conta de usuário está ativa |
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

<!--REF #_command_.Is user deleted.Summary-->O comando Is user deleted testa a conta de usuário cujo número de identificação único se passa em *numUsuario*.<!-- END REF-->  

Se a conta de usuário não existir ou tiver sido apagada, Is user deleted retorna TRUE. Do contrário, retorna FALSE.

## Gestão de erros 

Se não tiver os privilégios de acesso adequados para chamar Is user deleted ou se o sistema de Senhas já tiver sido acessado por outro processo, um erro de privilégio de acesso será gerado. Você pode interceptar o erro com um método de gestão de erros instalado usando [ON ERR CALL](../commands/on-err-call).

## Ver também 

[DELETE USER](../commands/delete-user)  
[GET USER PROPERTIES](../commands/get-user-properties)  
[Set user properties](../commands/set-user-properties)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 616 |
| Thread-seguro | no |
| Modificar variáveis | error |


