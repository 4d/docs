---
id: get-user-properties
title: GET USER PROPERTIES
slug: /commands/get-user-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET USER PROPERTIES.Syntax-->**GET USER PROPERTIES** ( *refUsuario* ; *nome* ; *inicio* ; *senha* ; *numLogin* ; *ultLogin* {; *adesao* {; *propGrupo*}} )<!-- END REF-->
<!--REF #_command_.GET USER PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refUsuario | Integer | &#8594;  | Nº de referência de usuário |
| nome | Text | &#8592; | Nome de usuário |
| inicio | Text | &#8592; | Nome de método de início |
| senha | Text | &#8592; | Sempre é uma cadeia vazia |
| numLogin | Integer | &#8592; | Número de logins para o banco de dados |
| ultLogin | Date | &#8592; | Data do último login ao banco de dados |
| adesao | Integer array | &#8592; | Número de ID dos grupos ao qual o usuário pertence |
| propGrupo | Integer | &#8592; | Número de ID do proprietário do grupo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET USER PROPERTIES.Summary-->GET USER PROPERTIES retorna a informação sobre o usuário cujo número de referência se passa no parâmetro *refUsuario*.<!-- END REF--> Deve passar um número de referência de usuário retornado pelo comando [GET USER LIST](get-user-list.md).

Se a conta de usuário não existir ou tiver sido apagada, se gera o erro -9979\. Pode interceptar este erro com um método de gestão de erros instalado por [ON ERR CALL](on-err-call.md). Senão, pode chamar [Is user deleted](is-user-deleted.md) para testar a conta de usuário antes de chamarGET USER PROPERTIES.

Depois da chamada, recupera o nome, método de inicio, senha criptografada, número de logins e a data da última utilização do banco nos parâmetros *nome, inicio, senha, numLogin* e *ultLogin.*

  
**Notas**:

* os parâmetros numLogin e ultLogin são usados apenas em bancos de dados binários. Sempre retornam, respectivamente, 0 e 00/00/00 em bancos de dados projeto
* o parâmetro *senha* é obsoleto (sempre devolve uma string vazia). Se deseja verificar a senha de um usuário, utilize a função [Validate password](validate-password.md).

Se passa o parâmetro opcional *adesao*, recupera os números de referência únicos dos grupos aos quais pertence o usuário.  
  
(Apenas Bancos de dados Binários) Se passar o parâmetro opcional *proprietGrupo*, obtém o número de referência do grupo “proprietário” do usuário, ou seja o grupo proprietário por padrão dos objetos criados por este usuário.  
  
  
**Note**: O array *proprietGrupo* sempre retorna 0 em bancos de dados projeto.   
  
Nota para bancos de dados binários. Valors das IDs de referência de grupo e de usuários dependem de seus criadores (Designer, Administrador, ou proprietário de grupo afiliado) Para saber mais veja o parágrafo *User and group ID ranges*.

#### Gestão de erros 

Se não tiver privilégios de acesso para chamar ao comando GET USER PROPERTIES ou se outro processo abriu no sistema de senhas, um erro de privilégios de acesso é gerado. Pode interceptar este erro com un método de gestão de erros instalado por [ON ERR CALL](on-err-call.md).

#### Ver também 

[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[Is user deleted](is-user-deleted.md)  
[Set user properties](set-user-properties.md)  
[Validate password](validate-password.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 611 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


