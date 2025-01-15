---
id: get-list-item-icon
title: GET LIST ITEM ICON
slug: /commands/get-list-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM ICON.Syntax-->**GET LIST ITEM ICON** ( {* ;} *lista* ; refElem | * ; *icone* )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM ICON.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| refElem &#124; * | Operador, Inteiro longo | &#8594;  | Número de referencia do elemento, ou 0 para o último elemento adicionado à lista ou * para o elemento da lista atualmente selecionada |
| icone | Picture | &#8592; | Ícone associado ao elemento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET LIST ITEM ICON.Summary-->O comando GET LIST ITEM ICON retorna, em *ícone*, o ícone associado ao elemento cujo número de referencia se passa em *refElem* da lista cujo número de referencia o nome de objeto passa em *lista*.<!-- END REF-->  
  
Se passa o primeiro parâmetro opcional \*, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação da lista no formulário. Se não passar este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (*RefLista*). Se utiliza uma só representação de lista ou trabalha com elementos estruturais (o segundo \* é omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contrário, se utiliza várias representações de uma mesma lista e trabalha com o elemento atual (se passa o segundo \*), a sintaxe baseada no nome do objeto se necessita já que cada representação pode ter seu próprio elemento atual.  
  
**Nota:** se utiliza o caractere @ no nome de objeto da lista e o formulário contém várias listas que correspondem a este nome, ou GET LIST ITEM ICON se aplicará ao primeiro objeto cujo nome corresponda. 

Pode passar um número de referência em *refElem*. Se este número não corresponde a nenhum elemento da lista, o comando não faz nada. Também pode passar 0 em *refElem* para obter a fonte do último elemento adicionado à lista (utilizando [APPEND TO LIST](append-to-list.md "APPEND TO LIST")).

Finalmente, pode passar \* em *refElem*: neste caso, o comando se aplicará ao elemento atual da lista. Se vários elementos são selecionados manualmente, o elemento atual é o último selecionado. Se nenhum elemento estiver selecionado, o comando não faz nada.

Passe em *ícone* uma variável imagem. Depois de executar o comando, conterá o ícone associado com o elemento, sem importar a fonte do ícone (imagem estática, recurso ou expressão imagem). 

Se nenhum ícone está associado ao elemento, a variável ícone seja retornada vazia.

**Nota:** quando o ícone associado a um elemento for definido através de uma referência estática (referências de recursos ou imagens da biblioteca de imagens), é possível conhecer seu número utilizando o comando [GET LIST ITEM PROPERTIES](get-list-item-properties.md "GET LIST ITEM PROPERTIES").

#### Ver também 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 951 |
| Thread-seguro | &cross; |


