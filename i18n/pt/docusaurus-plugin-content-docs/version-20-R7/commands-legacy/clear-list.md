---
id: clear-list
title: CLEAR LIST
slug: /commands/clear-list
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR LIST.Syntax-->**CLEAR LIST** ( *lista* {; *} )<!-- END REF-->
<!--REF #_command_.CLEAR LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| lista | Integer | &#8594;  | Número de referência da lista |
| * | Operator |  &#8594;  | Se especificada, se há sub-listas se deve apagar da memória, Se omitida, as sub-listas não são apagadas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CLEAR LIST.Summary-->O comando CLEAR LIST apaga da memória a lista hierárquica cujo número de referência é passado em *lista*.<!-- END REF-->

Geralmente deve passar o parâmetro opcional *\*,* de maneira que todas as sub-listas, se as houver, associadas aos elementos ou sub elementos da lista também sejam apagados.

Não é necessário apagar uma lista associada a um objeto de formulário através da janela da Lista de propriedades. 4D carrega e apaga a lista por você. Por outra parte, cada vez que você carrega, copia, extrai de um BLOB, ou cria uma lista por programação, chama ao comando CLEAR LIST quando não necessitar mais a lista.

Para apagar uma sub-lista associada a um elemento (em qualquer nível) de outra lista mostrada atualmente em um formulário, aja da seguinte forma:

1.Chame [GET LIST ITEM](get-list-item.md "GET LIST ITEM") com o elemento pai para obter o número de referência da sub-lista.  
2\. Chame [SET LIST ITEM](set-list-item.md "SET LIST ITEM") com o elemento pai para separar a sub-lista do elemento da lista antes de apagá-los.  
3\. Chame CLEAR LIST para apagar a sub-lista cujo número de referência obteve com [GET LIST ITEM](get-list-item.md "GET LIST ITEM").  
4\. Chame *REDRAW LIST* para a lista mostrada no formulário, para recalcular seus elementos e sub-listas.

#### Exemplo 1 

Dentro de uma rotina de limpeza que apaga todos os objetos e dados que já não necessita (por exemplo, quando se fecha uma janela ou um formulário), poderia terminar apagando uma lista hierárquica que já tenha sido apagada, dependendo das ações do usuário no formulário. Utilize [Is a list](is-a-list.md "Is a list") para apagar a lista só se for necessário: 

```4d
  // Extrair da rotina de limpeza
 If(Is a list(hlList))
    CLEAR LIST(hlList;*)
 End if
```

#### Exemplo 2 

Ver o exemplo do comando [Load list](load-list.md "Load list").

#### Exemplo 3 

Ver o exemplo do comando [BLOB to list](blob-to-list.md "BLOB to list").

#### Ver também 

[BLOB to list](blob-to-list.md)  
[Load list](load-list.md)  
[New list](new-list.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 377 |
| Thread-seguro | &cross; |


