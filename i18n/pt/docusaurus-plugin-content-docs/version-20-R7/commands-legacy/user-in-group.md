---
id: user-in-group
title: User in group
slug: /commands/user-in-group
displayed_sidebar: docs
---

<!--REF #_command_.User in group.Syntax-->**User in group** ( *usuario* ; *grupo* ) : Boolean<!-- END REF-->
<!--REF #_command_.User in group.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| usuario | Text | &#8594;  | Nome de usuário |
| grupo | Text | &#8594;  | Nome do grupo |
| Resultado | Boolean | &#8592; | TRUE = usuário no grupo; FALSE = usuário não está no grupo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.User in group.Summary-->User in group retorna TRUE se *user* estlver em *group*.<!-- END REF-->

**Nota:** Este comando espera um nome de conta de usuário no parâmetro *user* (não é compatível com aliases/apelidos de usuário). Se tiver deffinido aliases de usuário em seu aplicativo, passe o parâmetro 4D user account ao comando [Current user](current-user.md) para ter certeza que retorna uma conta de usuário (ver exemplo).

#### Exemplo 

O exemplo abaixo procura faturas específicas. Se o usuário atual estiver no grupo Executive, poderá acessar os formulários que mostram informação confidencial. Se o usuário não estiver no grupo Executive, aparecem os formulários padrão

```4d
 QUERY([Invoices];[Invoices]Retail>100)
 If(User in group(Current user(4D user account);"Executive"))
  //parametro 4D user account é necessário se usar
  //aliases 4D user na sua aplicação
    FORM SET OUTPUT([Invoices];"Executive Output")
    FORM SET INPUT([Invoices];"Executive Input")
 Else
    FORM SET OUTPUT([Invoices];"Standard Output")
    FORM SET INPUT([Invoices];"Standard Input")
 End if
 MODIFY SELECTION([Invoices];*)
```

#### Ver também 

[Current user](current-user.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 338 |
| Thread-seguro | &cross; |


