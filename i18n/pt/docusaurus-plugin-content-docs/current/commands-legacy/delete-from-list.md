---
id: delete-from-list
title: DELETE FROM LIST
slug: /commands/delete-from-list
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM LIST.Syntax-->**DELETE FROM LIST** ( {* ;} *lista* ; refElem | *  {; *} )<!-- END REF-->
<!--REF #_command_.DELETE FROM LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| refElem &#124; * | Inteiro longo, Operador | &#8594;  | Número de referencia do elemento, ou 0 para o último elemento adicionado à lista ou * para o elemento da lista atualmente selecionada |
| * | Operator |  &#8594;  | Se especificada, apaga as sub-listas (se existem) da memória Se omitida, as sub-listas (se existem) não são apagadas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DELETE FROM LIST.Summary-->O comando DELETE FROM LIST apaga o elemento designado pelo parâmetro *refElem* da lista cujo número de referência se passa em *lista*.<!-- END REF-->

Se passa o primeiro parâmetro opcional *\**, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação de lista no formulário. Se não passar este parâmetro, indica que o parâmetro *lista* é uma referencia de lista hierárquica (*refLista*). Se utilizar uma só representação de lista ou trabalha com todos os elementos (passa o segundo \*), pode utilizar qualquer uma das duas sintaxes. Pelo contrário, se utilizar várias representações da mesma lista e trabalha com os elementos visíveis (o segundo \* é omitido), a sintaxe baseada no nome do objeto é necessária já que cada representação pode ter sua própria configuração exibida/contraída. 

Se passar *\** em *refElem*, apaga o elemento atualmente selecionado na lista. Igualmente pode passar 0 neste parâmetro para apagar o último elemento adicionado à lista.

Do contrário, especifique o número de referência do elemento que deseja apagar. Se o número não corresponde a nenhum elemento da *lista*, o comando não faz nada.

Se trabalhar com os números de referência dos elementos, construa uma lista na qual os elementos tenham números de referência únicos, do contrário não poderá distinguir os elementos. Para maior informação, consulte a descrição do comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

Sem importar que elemento apague, deve especificar o parâmetro opcional *\** para permitir a 4D apagar automaticamente a sub-lista associada ao elemento, se as houver. Se não especificar o parâmetro *\**, é uma boa idéia obter previamente o número de referência da sub-lista (se houver) associada ao elemento, de maneira que pode ser apagado, se for necessário, utilizando o comando [CLEAR LIST](clear-list.md "CLEAR LIST").

#### Exemplo 

O código a seguir apaga o elemento selecionado da lista *hList*. Se o elemento tiver uma sub-lista associada for apagada (como também toda sub-sub lista):

```4d
 DELETE FROM LIST(hList;*;*)
```

#### Ver também 

[CLEAR LIST](clear-list.md)  
[GET LIST ITEM](get-list-item.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 624 |
| Thread-seguro | &check; |
| Proibido no servidor ||


