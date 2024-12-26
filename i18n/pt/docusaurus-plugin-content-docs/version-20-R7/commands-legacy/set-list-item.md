---
id: set-list-item
title: SET LIST ITEM
slug: /commands/set-list-item
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM.Syntax-->**SET LIST ITEM** ( {* ;} *lista* ; refElem | * ; *novoText* ; *novoNum* {; *sublista* ; *expandida*} )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| refElem &#124; * | Operador, Inteiro longo | &#8594;  | Número de referencia do elemento, ou 0 para o último elemento adicionado à lista ou * para o elemento da lista atualmente selecionada |
| novoText | Text | &#8594;  | Novo texto do elemento |
| novoNum | Integer | &#8594;  | Novo número de referência do elemento |
| sublista | Integer | &#8594;  | Nova sub-lista associada ao elemento, ou 0 = nenhuma sub-lista (separar atual, se existe), ou -1 = nenhuma muda |
| expandida | Boolean | &#8594;  | Indica se a sub-lista deve ser expandida ou contraída |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET LIST ITEM.Summary-->O comando SET LIST ITEM modifica o elemento designado pelo parâmetro *refElem* na lista cujo número de referência ou nome de objeto se passa em *lista*.<!-- END REF--> 

Se passa o primeiro parâmetro opcional \*, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação da lista no formulário. Se não passar este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (*RefLista*). Se utiliza uma só representação de lista ou trabalha com elementos estruturais (o segundo \* é omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contrário, se utiliza várias representações de uma mesma lista e trabalha com o elemento atual (se passa o segundo \*), a sintaxe baseada no nome do objeto se necessita já que cada representação pode ter seu próprio elemento atual.

Pode passar um número de referência em *refElem*. Se este número não corresponde a nenhum elemento da lista, o comando não faz nada. Também pode passar 0 em *refElem* para obter a fonte do último elemento adicionado à lista (utilizando [APPEND TO LIST](append-to-list.md)).

Finalmente, pode passar \* em *refElem*: neste caso, o comando se aplicará ao elemento atual da lista. Se vários elementos são selecionados manualmente, o elemento atual é o último selecionado. Se nenhum elemento estiver selecionado, o comando não faz nada.

Se trabalhar com os números de referência dos elementos, construa uma lista na qual os elementos tenham números de referência únicos, do contrário não poderá diferenciar os elementos. Para maior informação consulte a seção *Gerenciar Listas Hierárquicas*.

Passe o novo texto do elemento em *textoElem*. Para mudar o número de referência do elemento, passe o novo valor em *novaRef*; do contrário, passe o mesmo valor que em *refElem*.

Para associar uma lista a um elemento, passe o número de referência da sub-lista em *sublista*. Neste caso, pode igualmente especificar se deseja que a nova sublista apareça expandida passando TRUE em *expandida*; do contrário, passe FALSE.

Para desassociar uma sub-lista que se encontre associada ao elemento, passe *0* (zero) em *sublista*. Neste caso, é uma boa idéia obter previamente o número de referência dessa lista utilizando [GET LIST ITEM](get-list-item.md "GET LIST ITEM"), de maneira que possa apagar a sub-lista mais adiante utilizando [CLEAR LIST](clear-list.md "CLEAR LIST"), se já não a necessita mais.

Se não deseja mudar as propriedades da sub-lista do elemento, passe *\-1* em *sublista*.

**Nota:** inclusive se são opcionais, os parâmetros *sublista* e *expandida* devem ser passados de maneira conjunta.

#### Exemplo 1 

*hList* é uma lista cujos elementos tem números de referência únicos. O método a seguir de objeto de um botão adiciona um item filho ao elemento atualmente selecionado na lista.

```4d
 $vlItemPos:=Selected list items(hList)
 If($vlItemPos>0)
    GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSublist;$vbExpandida)
    $vbNovaSubList:=Not(Is a list($hSublist))
    If($vbNovaSubList)
       $hSublist:=New list
    End if
    vlUniqueRef:=vlUniqueRef+1
    APPEND TO LIST($hSubList;"New Item";vlUniqueRef)
    If($vbNuevaSubList)
       SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSublist;True)
    End if
    SELECT LIST ITEMS BY REFERENCE(hList;vlUniqueRef)
 End if
```

#### Exemplo 2 

Ver exemplo do comando [GET LIST ITEM](get-list-item.md "GET LIST ITEM").

#### Exemplo 3 

Ver exemplo do comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

#### Ver também 

[GET LIST ITEM](get-list-item.md)  
[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[SET LIST ITEM FONT](set-list-item-font.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 385 |
| Thread-seguro | &cross; |


