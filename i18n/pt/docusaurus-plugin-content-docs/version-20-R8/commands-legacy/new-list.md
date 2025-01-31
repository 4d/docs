---
id: new-list
title: New list
slug: /commands/new-list
displayed_sidebar: docs
---

<!--REF #_command_.New list.Syntax-->**New list**  : Integer<!-- END REF-->
<!--REF #_command_.New list.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de referência de lista |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.New list.Summary-->New list cria uma nova lista hierárquica vazia em memória e retorna seu número de referência único.<!-- END REF--> 

**Advertência:** as listas hierárquicas residem na memória. Quando terminar de utilizar uma lista hierárquica, é importante apagá-la para liberar memória, utilizando o comando [CLEAR LIST](clear-list.md).

Outros comandos lhe permitem criar listas hierárquicas:

* [Copy list](copy-list.md "Copy list") duplica uma lista existente.
* [Load list](load-list.md "Load list") cria uma nova lista carregando uma lista criada (manualmente ou por programação) no editor de listas do ambiente Desenho.
* [BLOB to list](blob-to-list.md "BLOB to list") cria uma lista a partir do conteúdo de um BLOB no qual uma lista foi previamente guardada.

Quando tiver criado uma lista hierárquica utilizando New list, pode:

* Adicionar itens a essa lista, utilizando o comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST") ou [INSERT IN LIST](insert-in-list.md).
* Apagar itens dessa lista, utilizando o comando [DELETE FROM LIST](delete-from-list.md "DELETE FROM LIST").

#### Exemplo 

Ver o exemplo do comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

#### Ver também 

[APPEND TO LIST](append-to-list.md)  
[BLOB to list](blob-to-list.md)  
[CLEAR LIST](clear-list.md)  
[Copy list](copy-list.md)  
[DELETE FROM LIST](delete-from-list.md)  
[INSERT IN LIST](insert-in-list.md)  
[LIST TO BLOB](list-to-blob.md)  
[Load list](load-list.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 375 |
| Thread-seguro | &cross; |


