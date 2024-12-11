---
id: get-group-list
title: GET GROUP LIST
slug: /commands/get-group-list
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP LIST.Syntax-->**GET GROUP LIST** ( *nomGrupos* ; *numGrupos* )<!-- END REF-->
<!--REF #_command_.GET GROUP LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomGrupos | Text array | &#8592; | Nomes dos grupos como aparecem na janela de editor de senhas |
| numGrupos | Integer array | &#8592; | Números de ID de grupo correspondentes |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET GROUP LIST.Summary-->GET GROUP LIST preenche os arrays *nomGrupos e numGrupos* com os nomes e os números de referência únicos dos grupos tais como aparecem no editor de senhas.<!-- END REF-->  
  
O array *numGrupos*, sincronizado com o array *nomGrupos*, se preenche com os números de referência únicos dos grupos. 

* Nos bancos de dados projeto, esses números começam em 15001 e são atribuidos dinamicamente ao início e são mantidos durante a sessão.
* Nos bancos de dados binários, esses números são armazenados e pertencem a uma faixa específica, segundo o criador do grupo. Para saber mais consulte o parágrafo *User and group ID ranges*.

#### Gestão de erros 

Se não tiver privilégios de acesso para chamar ao comando GET GROUP LIST ou se outro processo já estiver aberto no sistema de senhas, um erro de privilégios de acesso é gerado. Pode interceptar este erro com um método de gestão de erros instalado por [ON ERR CALL](on-err-call.md).

#### Ver também 

[GET GROUP PROPERTIES](get-group-properties.md)  
[GET USER LIST](get-user-list.md)  
[Set group properties](set-group-properties.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 610 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


