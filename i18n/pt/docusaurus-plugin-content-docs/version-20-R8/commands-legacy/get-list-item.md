---
id: get-list-item
title: GET LIST ITEM
slug: /commands/get-list-item
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM.Syntax-->**GET LIST ITEM** ( {* ;} *lista* ; posiçaoElem | *  ; *refElem* ; *textoElem* {; *sublista* ; *expandida*} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| posiçaoElem &#124; * | Operador, Inteiro longo | &#8594;  | Posição do elemento em lista(s) expandida(s) ou contraída(s) * para o elemento atual da lista. |
| refElem | Integer | &#8592; | Número de referência do elemento |
| textoElem | Text | &#8592; | Texto do elemento da lista |
| sublista | Integer | &#8592; | Número de referência da sub-lista (se existe) |
| expandida | Boolean | &#8592; | Se uma sub-lista está associada: TRUE = a sub-lista está expandida FALSE = a sub-lista está contraída |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET LIST ITEM.Summary-->O comando GET LIST ITEM retorna a informação sobre o elemento especificado por *posiçaoElem* da lista cujo número de referencia ou nome de objeto se passa em *lista*.<!-- END REF--> 

Se passa o primeiro parâmetro opcional *\**, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação de lista no formulário. Se não passar este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (*RefLista*). Se utilizada apenas uma representação de lista, pode utilizar indiferentemente uma ou outra sintaxe. Por outro lado, se usar várias representações de uma mesma lista, a lista baseada no nome do objeto é necessária já que cada representação pode ter sua própria configuração expandida/contraída e seu próprio elemento atual. 

**Nota:** se utilizar o caractere @ no nome da lista e o formulário contém várias listas que respondem a este nome, o comando GET LIST ITEM só aplicará ao primeiro objeto cujo nome corresponda. 

A posição deve ser expressa com relação ao estado atual expandido/contraído da lista e de sua sublista. Deve passar um valor de posição entre 1 e o valor retornado por [Count list items](count-list-items.md "Count list items"). Se passa um valor que não estiver nesta faixa, GET LIST ITEM retorna valores vazios (0, "", etc.).

Depois da chamada, recupera:

* O número de referência do elemento em *refElem*.
* O texto do elemento em *textoElem*.

Se passa os parâmetros opcionais *sublista* e *expandida*:

* *sublista* retorna o número de referência da sub-lista associada ao elemento. Se o elemento não tem sub-lista, *sublista* retorna zero (0).
* Se o elemento tem uma sub-lista, *expandida* retorna TRUE se a sub-lista está expandida, e FALSE se está contraída.

#### Exemplo 1 

*hList* é uma lista cujos elementos têm números de referência únicos. O código a seguir passa por programação ao estado expandido/contraído da sub-lista, se houver, associada ao elemento selecionado: 

```4d
 $vlItemPos:=Selected list items(hList)
 If($vlItemPos>0)
    GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSublist;$vbExpandida)
    If(Is a list($hSublist))
       SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSublist;Not($vbExpandida))
    End if
 End if
```

#### Exemplo 2 

Consulte o exemplo do comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

#### Ver também 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[List item parent](list-item-parent.md)  
[List item position](list-item-position.md)  
[Selected list items](selected-list-items.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 378 |
| Thread-seguro | &cross; |


