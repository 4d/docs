---
id: new-list
title: New list
slug: /commands/new-list
displayed_sidebar: docs
---

<!--REF #_command_.New list.Syntax-->**New list**  : Integer<!-- END REF-->
<!--REF #_command_.New list.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de referência de lista |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.New list.Summary-->New list cria uma nova lista hierárquica vazia em memória e retorna seu número de referência único.<!-- END REF--> 

**Advertência:** as listas hierárquicas residem na memória. Quando terminar de utilizar uma lista hierárquica, é importante apagá-la para liberar memória, utilizando o comando [CLEAR LIST](../commands/clear-list).

Outros comandos lhe permitem criar listas hierárquicas:

* [Copy list](copy-list.md "Copy list") duplica uma lista existente.
* [Load list](load-list.md "Load list") cria uma nova lista carregando uma lista criada (manualmente ou por programação) no editor de listas do ambiente Desenho.
* [BLOB to list](blob-to-list.md "BLOB to list") cria uma lista a partir do conteúdo de um BLOB no qual uma lista foi previamente guardada.

Quando tiver criado uma lista hierárquica utilizando New list, pode:

* Adicionar itens a essa lista, utilizando o comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST") ou [INSERT IN LIST](../commands/insert-in-list).
* Apagar itens dessa lista, utilizando o comando [DELETE FROM LIST](delete-from-list.md "DELETE FROM LIST").

## Exemplo 

Ver o exemplo do comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

## Ver também 

[APPEND TO LIST](../commands/append-to-list)  
[BLOB to list](../commands/blob-to-list)  
[CLEAR LIST](../commands/clear-list)  
[Copy list](../commands/copy-list)  
[DELETE FROM LIST](../commands/delete-from-list)  
[INSERT IN LIST](../commands/insert-in-list)  
[LIST TO BLOB](../commands/list-to-blob)  
[Load list](../commands/load-list)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 375 |
| Thread-seguro | no |


