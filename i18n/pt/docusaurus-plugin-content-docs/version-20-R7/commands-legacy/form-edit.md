---
id: form-edit
title: FORM EDIT
slug: /commands/form-edit
displayed_sidebar: docs
---

<!--REF #_command_.FORM EDIT.Syntax-->**FORM EDIT** ( {*Tabela* ;} *formulario* )<!-- END REF-->
<!--REF #_command_.FORM EDIT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Table | Table | &#8594;  | TAbela que possui o formulário ou Se omitido: tabela padrão ou uso do formulário projeto |
| formulario | Text | &#8594;  | Nome formulário |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FORM EDIT.Summary-->**O comando FORM EDIT** abre o *formulário* associado a *Tabela* no editor 4D Form.<!-- END REF--> Note que deve ter acesso ao ambiente Design, senão ocorre o erro-9804 ("Cannot open form").

O comando é assíncrono: retorna imediatamente ao método chamada e não espera que o formulário seja aberto. 

Se passar o parâmetro opcional *Tabela*, indica a tabela associada com *formulário*. Se omitir este parâmetro, indica que *formulário* é um formulário projeto.

No parâmetro *formulário*, passe o nome do formulário para abrir no editor 4D Form. Se passar um nome que não exista, o erro 81 é gerado ("Form not found). 

#### Exemplo 

Para abrir a tabela *Contatos* *do formulário Address*:

```4d
 FORM EDIT([Contacts];"Address")
```

Para abrir o formulário projeto *ContactList*:

```4d
 FORM EDIT("ContactList")
```

#### Ver também 

*Design Object Access Commands*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1749 |
| Thread-seguro | &check; |
| Proibido no servidor ||


