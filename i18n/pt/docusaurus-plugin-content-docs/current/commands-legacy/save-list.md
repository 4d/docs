---
id: save-list
title: SAVE LIST
slug: /commands/save-list
displayed_sidebar: docs
---

<!--REF #_command_.SAVE LIST.Syntax-->**SAVE LIST** ( *lista* ; *nomeLista* )<!-- END REF-->
<!--REF #_command_.SAVE LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| lista | Integer | &#8594;  | Número de referência da lista |
| nomeLista | Text | &#8594;  | Nome da lista como aparecerá no editor de listas do entorno Desenho |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAVE LIST.Summary-->O comando SAVE LIST guarda a lista cujo número de referência passou em *lista*, no editor de listas no ambiente Desenho, sob o nome que passou em *nomeLista*.<!-- END REF-->

Seus conteúdos são substituídos se houver uma lista com o mesmo nome.

**Nota**: este comando não pode ser usado em uma estrutura carregada em **apenas leitura**, como num projeto .4dz ou em um componente.

#### Ver também 

[Load list](load-list.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 384 |
| Thread-seguro | &cross; |


