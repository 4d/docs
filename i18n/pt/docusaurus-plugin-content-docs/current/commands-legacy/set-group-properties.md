---
id: set-group-properties
title: Set group properties
slug: /commands/set-group-properties
displayed_sidebar: docs
---

<!--REF #_command_.Set group properties.Syntax-->**Set group properties** ( *refGrupo* ; *nome* ; *proprietario* {; *membros*} )  : Integer<!-- END REF-->
<!--REF #_command_.Set group properties.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refGrupo | Integer | &#8594;  | Número de ID do grupo; ou -1 para adicionar um grupo Designer, ou -2 para adicionar um grupo Administrador |
| &#8592; | Número de ID única do grupo adicionado (se houver) |
| nome | Text | &#8594;  | Novo nome do grupo |
| proprietario | Integer | &#8594;  | Número de ID do novo proprietário do grupo |
| membros | Integer array | &#8594;  | Novos membros do grupo |
| Resultado | Integer | &#8592; | Nº de ID do novo grupo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Set group properties.Summary-->Set group properties permite modificar e atualizar as propriedades de um grupo existente cujo número de referência único se passa em *refGrupo*, ou para adicionar um novo grupo

Se modificar as propriedades de um grupo existente, deve passar um número de referência válido retornado pelo comando [GET GROUP LIST](get-group-list.md).<!-- END REF--> 

Para adicionar um novo grupo passe -1 em *refGrupo* (veja as notas para bancos de dados binários).

Depois da chamada, se o grupo for adicionado com sucesso, retorna seu número de referência único em *refGrupo*.  
  
Se não passa -1, -2 ou um número de referência de grupo válido, Set group properties não faz nada.

Passe o novo nome do grupo no parâmetro *nome*.  
  
(Apenas para Bancos de Dados Binários) Passe o número da ID de referência do novo proprietário do grupo no parâmetro *proprietário*. Este parâmetro é ignorado em bancos de dados projeto.   
  
Se não quiser mudar todas as propriedades do grupo (além dos membros, ver abaixo) primeiro chame [GET GROUP PROPERTIES](get-group-properties.md) e passe os valores retornados para as propriedades que quiser deixar intactas.

Se não passar o parâmetro opcional *membros*, a lista atual de membros do grupo permanece sem mudanças. Se não passar *membros* enquanto adiciona um grupo, o grupo não terá membros.

Se passa o parâmetro opcional *membros*, modifica toda a lista de membros para este grupo. Antes de chamar esta rotina, deve preencher o array *membros* com os números de referência únicos dos usuários e grupos que o grupo terá como membros.

Para eliminar todos os membros de um grupo, passe um array vazio no parâmetro *membros*.

**Nota para bancos de dados binários:**

* Valores de ID de Grupo e Usuário dependem do criador (Designer, Administrador ou proprietário de grupo afiliado). Para saber mais veja o parágrafo *User and group ID ranges*. Para criar um grupo afiliado com o Designer, passe -1 em grupoID. Para criar um grupo afiliado com o Administrador, passe -2 em grupoID.
* o proprietário de um grupo não está definido automaticamente como membro do grupo que possuir. É sua decisão incluir ao proprietário do grupo no grupo, utilizando o parâmetro *membros*.

#### Gestão de erros 

Se você não tiver os acessos de privilégio para chamar Set group properties ou se o sistema de senhas já estiver acessado para outro processo, um erro de privilégio de acesso é gerado. Você pode interceptar o erro com um método de gestão de erros instalado usando [ON ERR CALL](on-err-call.md).

#### Ver também 

[GET GROUP LIST](get-group-list.md)  
[GET GROUP PROPERTIES](get-group-properties.md)  
[GET USER LIST](get-user-list.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 614 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


