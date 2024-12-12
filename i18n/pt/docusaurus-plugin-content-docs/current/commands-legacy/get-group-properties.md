---
id: get-group-properties
title: GET GROUP PROPERTIES
slug: /commands/get-group-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP PROPERTIES.Syntax-->**GET GROUP PROPERTIES** ( *refGrupo* ; *nome* ; *proprietario* {; *membros*} )<!-- END REF-->
<!--REF #_command_.GET GROUP PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refGrupo | Integer | &#8594;  | Número de referencia ID de grupo |
| nome | Text | &#8592; | Nome do grupo |
| proprietario | Integer | &#8592; | Número de ID do proprietário do grupo |
| membros | Integer array | &#8592; | Membros do grupo |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.GET GROUP PROPERTIES.Summary-->GET GROUP PROPERTIES retorna as propriedades do grupo cujo número de referência único de ID de grupo pode passar em *GrupoID*.<!-- END REF--> Deve passar o número de referência do grupo retornado pelo comando [GET GROUP LIST](get-group-list.md). 

Se não passar um número de referência válido, GET GROUP PROPERTIES retorna parâmetros vazios.

Depois da chamada do comando, recupera o nome do grupo no parâmetros *nome*.  
  
Se passar o parâmetro opcional *membros*, ele retorna os números de referência únicos dos usuários que pertencem ao grupo. 

Nota para bancos de dados binários: Valores de grupo e ID de usuários dependem de seu criador (Designer, Administrador, ou proprietário de grupo afiliado). Para saber mais, veja o parágrafo *User and group ID ranges*.

\[

#### Gestão de erros 

Se não tiver privilégios de acesso para chamar ao comando GET GROUP PROPERTIES ou se outro processo abrir no sistema de senhas, um erro de privilégios de acesso é gerado. Pode interceptar este erro com um método de gestão de erros instalado por [ON ERR CALL](on-err-call.md).

#### Ver também 

[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[Set group properties](set-group-properties.md)  