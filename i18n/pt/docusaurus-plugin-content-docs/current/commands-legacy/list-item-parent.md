---
id: list-item-parent
title: List item parent
slug: /commands/list-item-parent
displayed_sidebar: docs
---

<!--REF #_command_.List item parent.Syntax-->**List item parent** ( {* ;} *lista* ; refElem | * ) : Integer<!-- END REF-->
<!--REF #_command_.List item parent.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| refElem &#124; * | Operador, Inteiro longo | &#8594;  | Número de referencia do elemento, ou 0 para o último elemento adicionado à lista ou * para o elemento da lista atualmente selecionada |
| Resultado | Integer | &#8592; | Número de referência do elemento pai ou 0 se não há |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.List item parent.Summary-->O comando List item parent retorna o número de referência do elemento pai.<!-- END REF-->

Passe em *lista* o número de referência ou o nome de objeto da lista.

Se passa o primeiro parâmetro opcional \*, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação de lista no formulário. Se não passar este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (*RefLista*). Se utilizada apenas uma representação de lista, pode utilizar indiferentemente uma ou outra sintaxe. Por outro lado, se usar várias representações de uma mesma lista, a lista baseada no nome do objeto é necessária já que cada representação pode ter sua própria configuração expandida/contraída e seu próprio elemento atual.

**Nota:** se utilizar o caractere @ no nome da lista e o formulário contém várias listas que respondem a este nome, o comando List item parent só aplicará ao primeiro objeto cujo nome corresponda.

Passe em *refElem* um número de referência de elemento na lista, ou 0 ou *\** novamente. Se passa 0, o comando aplica ao último elemento adicionado à lista. Se passa \*, o comando aplica o elemento atual da lista. Se vários elementos foram selecionados manualmente, o elemento atual é o último elemento selecionado.

Por outro lado, se o elemento correspondente existe na lista e se este elemento está em uma sub-lista (e portanto tem um elemento pai), você obtém o número de referência do elemento pai.

Se não existir um elemento com o número de referência que passou, ou se passou \* e nenhum elemento estiver selecionado, ou se o elemento não tiver pai, List item parent retorna 0 (zero).

Se trabalha com números de referência dos elementos, tenha certeza de construir uma lista na qual os elementos tenham números de referência únicos; do contrário não poderá diferenciar os elementos. Para maior informação, consulte o comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

#### Exemplo 

Aqui há uma lista chamada *hList* mostrada no ambiente Aplicação:

![](../assets/en/commands/pict22613.en.png)

Os números de referência dos elementos são os seguintes:

| **Elemento** | **Número** |
| ------------ | ---------- |
| a            | 100        |
| a - 1        | 101        |
| a - 2        | 102        |
| a - 3        | 103        |
| b            | 200        |
| b - 1        | 201        |
| b - 2        | 202        |
| b - 3        | 203        |

  
* No seguinte código, se for selecionado o elemento “b - 3”, a variável *$vlPaiElemRef* toma o valor 200, ou seja, o número de referência do elemento “b”:

```4d
 $vlItemPos:=Selected list items(hList)
 GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText)
 $vlPaiElemRef :=List item parent(hList;$vlItemRef) // $vlPaiElemRef vale 200
```

* Se for selecionado o elemento “a - 1”, a variável *$vlPaiElemRef* toma o valor 100, ou seja o número de referência do elemento “a”.
* Se for selecionado o elemento “a” ou “b”, a variável *$vlPaiElemRef* toma o valor 0, porque estes elementos não tem elemento pai.

#### Ver também 

[GET LIST ITEM](get-list-item.md)  
[List item position](list-item-position.md)  
[SELECT LIST ITEMS BY REFERENCE](select-list-items-by-reference.md)  
[SET LIST ITEM](set-list-item.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 633 |
| Thread-seguro | &cross; |


