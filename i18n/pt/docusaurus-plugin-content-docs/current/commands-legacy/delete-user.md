---
id: delete-user
title: DELETE USER
slug: /commands/delete-user
displayed_sidebar: docs
---

<!--REF #_command_.DELETE USER.Syntax-->**DELETE USER** ( *refUsuario* )<!-- END REF-->
<!--REF #_command_.DELETE USER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refUsuario | Integer | &#8594;  | Número de ID de usuário a apagar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DELETE USER.Summary-->O comando [ON ERR CALL](on-err-call.md) apaga o usuário cujo número se passa em *refUsuario*.<!-- END REF--> Deve passar um número válido de usuário retornado pelo comando [GET USER LIST](get-user-list.md).   

Se a conta de usuário não existir ou tiver sido apagadas, o erro -9979 é gerado. Pode interceptar este erro com um método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md).  
  
Apenas o Desenhador e o Administrador podem apagar usuários. O Administrador não pode apagar um usuário criado pelo Desenhador.  
  
Os usuários apagados não aparecerão mais no editor de usuários quando chame a [EDIT ACCESS](edit-access.md) nem em modo Desenho. Note que os números de usuários apagados possam ser retribuídos ao criar novas contas.

#### Gestão de erros 

Se não tiver os privilégios de acesso para chamar DELETE USER ou se outro processo já acessou ao sistema de senhas, um erro de privilégios de acesso é gerado. Pode interceptar este erro com um método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md).

#### Ver também 

[GET USER LIST](get-user-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Is user deleted](is-user-deleted.md)  
[Set user properties](set-user-properties.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 615 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


