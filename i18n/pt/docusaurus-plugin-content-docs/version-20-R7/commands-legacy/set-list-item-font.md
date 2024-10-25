---
id: set-list-item-font
title: SET LIST ITEM FONT
slug: /commands/set-list-item-font
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM FONT.Syntax-->**SET LIST ITEM FONT** ( {* ;} *lista* ; refElem | *  ; *fonte* )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM FONT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| refElem &#124; * | Inteiro longo, Operador | &#8594;  | Número de referencia do elemento, ou 0 para o último elemento adicionado à lista ou * para o elemento da lista atualmente selecionada |
| fonte | Text, Integer | &#8594;  | Nome ou número de fonte |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SET LIST ITEM FONT.Summary-->O comando SET LIST ITEM FONT modifica a fonte de caracteres do elemento especificado pelo parâmetro *refElem* da lista cujo número de referência ou nome de objeto se passa em *lista*.<!-- END REF--> 

Se passa o primeiro parâmetro opcional \*, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação da lista no formulário. Se não passar este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (*RefLista*). Se utiliza uma só representação de lista ou trabalha com elementos estruturais (o segundo \* é omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contrário, se utiliza várias representações de uma mesma lista e trabalha com o elemento atual (se passa o segundo \*), a sintaxe baseada no nome do objeto se necessita já que cada representação pode ter seu próprio elemento atual.

Por último, pode passar \* no *refElem*: neste caso, o comando se aplicará ao elemento atual da lista. Se vários elementos se selecionam manualmente, o elemento atual é aquele que foi selecionado de último. Se nenhum elemento está selecionado, o comando não faz nada.

Pode passar um número de referência em *refElem*. Se este número não corresponde a nenhum elemento da lista, o comando não faz nada. Também pode passar 0 em *refElem* para obter a fonte do último elemento adicionado à lista (utilizando [APPEND TO LIST](append-to-list.md)).

Finalmente, pode passar \* em *refElem*: neste caso, o comando se aplicará ao elemento atual da lista. Se vários elementos são selecionados manualmente, o elemento atual é o último selecionado. Se nenhum elemento estiver selecionado, o comando não faz nada.  
  
No parâmetro *fonte*, passe o nome o número da fonte a utilizar. Para aplicar outra vez a fonte por padrão da lista hierárquica, passe uma cadeia vazia em *fonte*.

#### Exemplo 

Aplicar a fonte Times ao elemento atual da lista:

```4d
 SET LIST ITEM FONT(*;"Minhalista";*;"Times")
```

#### Ver também 

[Get list item font](get-list-item-font.md)  
[OBJECT SET FONT](object-set-font.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  