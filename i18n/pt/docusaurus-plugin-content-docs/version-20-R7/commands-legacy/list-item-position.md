---
id: list-item-position
title: List item position
slug: /commands/list-item-position
displayed_sidebar: docs
---

<!--REF #_command_.List item position.Syntax-->**List item position** ( {* ;} *lista* ; *refElem* ) : Integer<!-- END REF-->
<!--REF #_command_.List item position.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| refElem | Integer | &#8594;  | Número de referência do elemento |
| Resultado | Integer | &#8592; | Posição do elemento em listas expandidas/contraídas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.List item position.Summary-->O comando List item position retorna a posição do elemento cujo número de referencia ou nome de objeto se passa em *refElem*,na lista cujo número de referência se passa na lista.<!-- END REF-->

Se passa o primeiro parâmetro opcional *\**, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação de lista no formulário. Se não passar este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (*RefLista*). Se utilizada apenas uma representação de lista, ou trabalha com elementos estruturais (o segundo \* é omitido), pode utilizar indiferentemente uma ou outra sintaxe. Por outro lado, se usar várias representações de uma mesma lista, a sintaxe baseada no nome do objeto é necessária já que cada representação pode ter sua própria configuração expandida/contraída.

**Nota:** se utilizar o caractere @ no nome da lista e o formulário contém várias listas que respondem a este nome, o comando List item position só aplicará ao primeiro objeto cujo nome corresponda.

**Nota:** diferente de outros comandos deste tema, este comando não permite passar o valor 0 em *refElem* para designar o último item adicionado. 

A posição é expressa com relação ao elemento superior da lista, utilizando o estado atual expandido/contraído da lista e sua sub-lista.

O resultado é um número entre 1 e o valor retornado por [Count list items](count-list-items.md "Count list items"). 

Se o elemento não é visível porque está localizado em uma lista contraída, List item position expande a lista correspondente de maneira que o elemento seja visível. 

Se o elemento não existir, List item position retorna 0.

#### Ver também 

[Count list items](count-list-items.md)  
[SELECT LIST ITEMS BY REFERENCE](select-list-items-by-reference.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 629 |
| Thread-seguro | &check; |
| Proibido no servidor ||


