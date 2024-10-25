---
id: use-named-selection
title: USE NAMED SELECTION
slug: /commands/use-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.USE NAMED SELECTION.Syntax-->**USE NAMED SELECTION** ( *nome* )<!-- END REF-->
<!--REF #_command_.USE NAMED SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nome | Text | &#8594;  | Nome da seleção temporal a utilizar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.USE NAMED SELECTION.Summary-->USE NAMED SELECTION utiliza o nome da seleção temporária como seleção atual para la tabela a qual pertence.<!-- END REF-->

Quando cria uma seleção temporária, o registro atual é “recordado” pela seleção temporária. USE NAMED SELECTION recupera a posição deste registro e retorna o novo registro atual; este comando carrega o registro atual. Se o registro atual foi modificado depois da criação de *nome*, o registro deve ser guardada antes de executar USE NAMED SELECTION, para evitar perder a informação modificada.

* Se [COPY NAMED SELECTION](copy-named-selection.md "COPY NAMED SELECTION") foi utilizado para criar *nome*, a seleção temporária *nome* é copiada à seleção atual da tabela a qual pertence *nome*. A seleção temporária *nome* existe em memória até que se elimina. Utilize o comando [CLEAR NAMED SELECTION](clear-named-selection.md "CLEAR NAMED SELECTION") para apagar a seleção temporária e liberar a memória utilizada por *nome*.
* Se [CUT NAMED SELECTION](cut-named-selection.md "CUT NAMED SELECTION") foi utilizado para criar *nome*, *nome* é utilizado como seleção atual da tabela e *nome* não existe mais em memória.

Lembre que uma seleção temporária é uma representação de uma seleção de registros no momento que é criado a seleção temporária. Se os registros que a seleção temporária representa são modificados, a seleção temporária poderia ser obsoleta. Portanto, uma seleção temporária representa um grupo de registros que não mudam com frequência. Diferentes coisas podem invalidar uma seleção temporária: a modificação ou eliminação de um registro da seleção temporária, ou a modificação dos critérios de criação da seleção temporária.

#### Ver também 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  