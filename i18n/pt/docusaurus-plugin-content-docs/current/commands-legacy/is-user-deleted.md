---
id: is-user-deleted
title: Is user deleted
slug: /commands/is-user-deleted
displayed_sidebar: docs
---

<!--REF #_command_.Is user deleted.Syntax-->**Is user deleted** ( *numUsuario* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is user deleted.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numUsuario | Integer | &#8594;  | Número de ID de usuário |
| Resultado | Boolean | &#8592; | TRUE = conta de usuário foi apagada ou não existe; FALSE = Conta de usuário está ativa |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Is user deleted.Summary-->O comando Is user deleted testa a conta de usuário cujo número de identificação único se passa em *numUsuario*.<!-- END REF-->  

Se a conta de usuário não existir ou tiver sido apagada, Is user deleted retorna TRUE. Do contrário, retorna FALSE.

#### Gestão de erros 

Se não tiver os privilégios de acesso adequados para chamar Is user deleted ou se o sistema de Senhas já tiver sido acessado por outro processo, um erro de privilégio de acesso será gerado. Você pode interceptar o erro com um método de gestão de erros instalado usando [ON ERR CALL](on-err-call.md).

#### Ver também 

[DELETE USER](delete-user.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  