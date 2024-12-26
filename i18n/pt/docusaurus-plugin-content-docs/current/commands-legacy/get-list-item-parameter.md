---
id: get-list-item-parameter
title: GET LIST ITEM PARAMETER
slug: /commands/get-list-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PARAMETER.Syntax-->**GET LIST ITEM PARAMETER** ( {* ;} *lista* ; refElem | * ; *seletor* ; *valor* )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PARAMETER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| refElem &#124; * | Inteiro longo, Operador | &#8594;  | Número de referencia do elemento, ou 0 para o último elemento adicionado à lista ou * para o elemento da lista atualmente selecionada |
| seletor | Text | &#8594;  | Constante do parâmetro |
| valor | Text, Boolean, Real | &#8592; | Valor atual do parâmetro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET LIST ITEM PARAMETER.Summary-->O comandoGET LIST ITEM PARAMETER retorna o nome da fonte do caractere atual do elemento especificado pelo parâmetro *refElem* da lista cujo número de referência o nome de objeto se passa em *lista*.<!-- END REF--> 

Se passa o primeiro parâmetro opcional \*, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação da lista no formulário. Se não passar este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (*RefLista*). Se utiliza uma só representação de lista ou trabalha com elementos estruturais (o segundo \* é omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contrário, se utiliza várias representações de uma mesma lista e trabalha com o elemento atual (se passa o segundo \*), a sintaxe baseada no nome do objeto se necessita já que cada representação pode ter seu próprio elemento atual.

**Nota:** se utiliza o caractere @ no nome de objeto da lista e o formulário contém várias listas que correspondem a este nome, ou GET LIST ITEM PARAMETER se aplicará ao primeiro objeto cujo nome corresponda.

Pode passar um número de referência em *refElem*. Se este número não corresponde a nenhum elemento da lista, o comando não faz nada. Também pode passar 0 em *refElem* para obter a fonte do último elemento adicionado à lista (utilizando [APPEND TO LIST](append-to-list.md)). 

Finalmente, pode passar \* em *refElem*: neste caso, o comando se aplicará ao elemento atual da lista. Se vários elementos são selecionados manualmente, o elemento atual é o último selecionado. Se nenhum elemento estiver selecionado, o comando não faz nada.

Em *seletor*, pode passar a constante Additional text ou a constante de ação padrão (localizada no tema “*Listas hierárquicas*”) ou qualquer valor personalizado. Para maior informação sobre os parâmetros *seletor* e *valor*, consulte a descrição do comando [SET LIST ITEM PARAMETER](set-list-item-parameter.md).

#### Ver também 

*Listas hierárquicas*  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 985 |
| Thread-seguro | &cross; |


