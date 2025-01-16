---
id: get-user-list
title: GET USER LIST
slug: /commands/get-user-list
displayed_sidebar: docs
---

<!--REF #_command_.GET USER LIST.Syntax-->**GET USER LIST** ( *nomUsuarios* ; *numUsuarios* )<!-- END REF-->
<!--REF #_command_.GET USER LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomUsuarios | Text array | &#8592; | Nomes dos usuários como aparecem na janela de editor de senhas |
| numUsuarios | Integer array | &#8592; | Números correspondentes de referências dos usuários |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET USER LIST.Summary-->GET USER LIST preenche os arrays *nomUsuario* e *numUsuario* com os nomes e os números de referência únicos dos usuários tais como aparecem na janela de senhas.<!-- END REF-->

O array *nomUsuario* se preenche com os nomes de usuários mostrados na janela de senhas, incluindo os usuários cujas contas estão desativadas (os nomes dos usuários mostrados em verde na janela de senhas).

**Nota**: use o comando [Is user deleted](is-user-deleted.md) para detectar os usuários apagados.  
  
O array *numUsuario*, sincronizado com *nomUsuario*, se preenche com os números de referência únicos dos usuários. 

**Nota para bancos de dados binários:** Grupos e valores de usuários ID dependem do seu criador (Designer, Administrador ou proprietário de grupo afiliado). Para saber mais veja o parágrafo *User and group ID ranges* .

#### Gestão de erros 

Se não tiver privilégios de acesso para chamar ao comando GET USER LIST ou se outro processo abrir no sistema de senhas, um erro de privilégios de acesso é gerado. Pode interceptar este erro com um método de gestão de erros instalado por [ON ERR CALL](on-err-call.md).  

#### Ver também 

[GET GROUP LIST](get-group-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 609 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


