---
id: set-user-properties
title: Set user properties
slug: /commands/set-user-properties
displayed_sidebar: docs
---

<!--REF #_command_.Set user properties.Syntax-->**Set user properties** ( *refUsuario* ; *nome* ; *inicio* ; *senha* ; *numLogin* ; *ultLogin* {; *adesao* {; *propGrupo*}} ) : Integer<!-- END REF-->
<!--REF #_command_.Set user properties.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refUsuario | Integer | &#8594;  | Número de ID de conta de usuário; -1 para adicionar um usuário |
| &#8592; | Número de ID de conta de usuário adicionado (se houver) |
| nome | Text | &#8594;  | Novo nome de usuário |
| inicio | Text | &#8594;  | Novo método de início |
| senha | Text | &#8594;  | Nova senha (não criptografada); ou * para deixar a senha intocada |
| numLogin | Integer | &#8594;  | Novo número de logins do banco de dados |
| ultLogin | Date | &#8594;  | Nova data do último login ao banco de dados |
| adesao | Integer array | &#8594;  | Números de IDs dos grupos aos quais pertence o usuário |
| propGrupo | Integer | &#8594;  | Número de referência de usuário do proprietário do grupo |
| Resultado | Integer | &#8592; | Número de ID de referência do novo usuário |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Set user properties.Summary-->Set user properties permite modificar e atualizar as propriedades de uma conta ativa de usuário existente cujo número de referência se passa no parâmetro *refUsuario* ou para adicionar um novo usuário.<!-- END REF-->

Se muda as propriedades de um usuário existente, deve passar o número de referência retornado pelo comando [GET USER LIST](get-user-list.md). Se a conta de usuário não existir ou se tiver sido apagada, o erro -9979 é gerado. Pode interceptar este erro com um método de gestão de erros instalado por [ON ERR CALL](on-err-call.md). De lo contrário, pode chamar [Is user deleted](is-user-deleted.md) para testar a conta de usuário antes de chamar Set user properties.  
  
Os números de referência para os usuários podem ser os seguintes:

Para adicionar um novo usuário afiliado ao Desenhador passe -1 em *refUsuario* (ver notas para Bancos de Dados Binários)  
  
Depois da chamada, se o usuário for adicionado ou modifica com sucesso, seu número de referência único é retornado em *refUsuario*.

Se não passa -1, -2 ou um número de referência de usuário válido, Set user properties não faz nada.  
  
Antes de chamar este comando, passe o novo nome, método de inicio, senha, número de usos e a data do último uso do usuário, em *nome, inicio, senha, numLogin* e *ultLogin*. Passe uma senha não criptografada no parâmetro *senha*. 4D a criptografará por você antes de guardá-la na conta de usuário.  
Se o novo nome de usuário passado em *nome* não for único (existe um usuário com o mesmo nome), o comando não faz nada e se retorna o erro -9979\. Pode interceptar este erro com um método de gestão de erros instalado por [ON ERR CALL](on-err-call.md).

**Nota**: Os parâmetros numLogin e ultimoLogin são usados apenas em bancos de dados binários e são ignorados em bancos de dados projeto.

Se não deseja mudar todas as propriedades do usuário (além de suas adesões, ver abaixo), primeiro chame [GET USER PROPERTIES](get-user-properties.md) e passe os valores retornados para as propriedades que não deseja mudar.

Se não deseja modificar a senha de uma conta, passe o símbolo \* no parâmetro *senha*. Isto permite mudar outras propriedades da conta do usuário sem mudar a senha da conta.

Se não passar o parâmetro opcional *adesao*, as adesões atuais do usuário permanecem iguais. Se não passar *adesao* quando adiciona um usuário, o usuário não formará parte de nenhum grupo.  
Se passar o parâmetro opcional *adesao*, muda todas as adesões para o usuário. Antes de chamar este comando, deve preencher o array *adesao* com os números de referência únicos dos grupos cujos usuários farão parte.

(Apenas Bancos de Dados Binários) Se passra o parâmetro opcional *propGrupo*, indica o número de referência do “proprietário” do grupo, ou seja proprietário de grupo dos objetos criados por este usuário. Para anular todas as adesões de um usuário, passe um array vazio no parâmetro *adesao*.

**Nota para bancos de dados binários**: Valores de ID de grupos e usuários dependem do criador (Designer, Administrador ou proprietário de grupo afiliado). Para saber mais veja o parágrafo *User and group ID ranges* Para criar um usuário afiliado com o Designer, passe -1 em refUsuario. Para criar um usuário afiliado com o Administrador, passe -2 em refUsuario.

#### Gestão de erros 

Se você não tiver os acessos de privilégio para chamar Set user properties ou se o sistema de senhas já estiver acessado para outro processo, um erro de privilégio de acesso é gerado. Você pode interceptar o erro com um método de gestão de erros instalado usando [ON ERR CALL](on-err-call.md).

#### Ver também 

[DELETE USER](delete-user.md)  
[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Is user deleted](is-user-deleted.md)  
[Validate password](validate-password.md)  