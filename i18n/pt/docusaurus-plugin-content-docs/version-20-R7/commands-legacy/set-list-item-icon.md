---
id: set-list-item-icon
title: SET LIST ITEM ICON
slug: /commands/set-list-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM ICON.Syntax-->**SET LIST ITEM ICON** ( {* ;} *lista* ; refElem | *  ; *icone* )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM ICON.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| refElem &#124; * | Inteiro longo, Operador | &#8594;  | Número de referencia do elemento, ou 0 para o último elemento adicionado à lista ou * para o elemento da lista atualmente selecionada |
| icone | Picture | &#8594;  | Ícone a associar ao elemento |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SET LIST ITEM ICON.Summary-->O comando SET LIST ITEM ICON permite modificar o ícone associado ao elemento especificado pelo parâmetro *refElem* da lista cujo número de referência o nome de objeto se passa em *lista*   

**Nota:** é possível modificar o ícone associado com um elemento utilizando o comando [SET LIST ITEM PROPERTIES](set-list-item-properties.md).<!-- END REF--> Entretanto, o comando aceita unicamente as referências de imagens estáticas (referências de recursos ou imagens da biblioteca de imagens).

Se passa o primeiro parâmetro opcional \*, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação da lista no formulário. Se não passar este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (*RefLista*). Se utiliza uma só representação de lista ou trabalha com elementos estruturais (o segundo \* é omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contrário, se utiliza várias representações de uma mesma lista e trabalha com o elemento atual (se passa o segundo \*), a sintaxe baseada no nome do objeto é requerida já que cada representação pode ter seu próprio elemento atual.

Pode passar um número de referência em *refElem*. Se este número não corresponde a nenhum elemento da lista, o comando não faz nada. Também pode passar 0 em *refElem* para obter a fonte do último elemento adicionado à lista (utilizando [APPEND TO LIST](append-to-list.md)).

Por último, pode passar *\** em *refElem*: neste caso, o comando será aplicado ao elemento atual da lista. Se for selecionados vários elementos manualmente, o elemento atual é o último selecionado. Se nenhum elemento estiver selecionado, o comando não faz nada.

Passe no parâmetro *icone* uma expressão de imagem 4D válida (campo, variável, ponteiro, etc.). A imagem será colocada a direita do elemento.

#### Exemplo 

Queremos atribuir a mesma imagem a dois elementos diferentes. O seguinte código se otimiza já que a imagem é carregada na memória só uma vez:

```4d
 var $picture : Picture
 READ PICTURE FILE("myPict.png";$picture)
 SET LIST ITEM ICON(mylist;ref1;$picture)
 SET LIST ITEM ICON(mylist;ref2;$picture)
```

#### Ver também 

[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM FONT](set-list-item-font.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  