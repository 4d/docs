---
id: insert-in-list
title: INSERT IN LIST
slug: /commands/insert-in-list
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN LIST.Syntax-->**INSERT IN LIST** ( {* ;} *lista* ; antesElem | *  ; *textoElem* ; *refElem* {; *sublista* ; *expandida*} )<!-- END REF-->
<!--REF #_command_.INSERT IN LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| antesElem &#124; * | Inteiro longo, Operador | &#8594;  | Número de referencia do elemento, ou 0 para o último elemento adicionado à lista ou * para o elemento da lista atualmente selecionada |
| textoElem | Text | &#8594;  | Texto para o novo elemento (max. 255 caracteres) |
| refElem | Integer | &#8594;  | Número de referencia único do novo elemento |
| sublista | Integer | &#8594;  | Sub-lista opcional para associar ao novo elemento |
| expandida | Boolean | &#8594;  | Indica se a sub-lista será expandida ou contraída |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.INSERT IN LIST.Summary-->O comandoINSERT IN LIST insere o elemento designado pelo parâmetro *refElem* na lista cujo número de referência é passado em *lista*.<!-- END REF-->

Se passa o primeiro parâmetro opcional *\**, indica que el parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação da lista no formulário. Se não passa este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (*RefLista*). Se utilizar uma só representação de lista ou trabalha com os elementos estruturais (o segundo *\** é omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contrário, se utilizar várias representações da mesma lista e trabalha com o elemento atual (se passa o segundo *\**), a sintaxe baseada no nome do objeto é necessária já que cada representação tem seu próprio elemento atual.

O parâmetro *antesElem* pode ser utilizada para designar o elemento antes do qual você queira inserir o novo elemento:

* Pode passar o valor 0 com o objetivo de designar o último elemento adicionado à lista. O novo elemento inserido será convertido então no elemento selecionado.
* Pode passar *\** para que o novo elemento seja inserido antes do elemento selecionado atualmente na lista. Neste caso, o novo elemento inserido é convertido no elemento selecionado.
* Por outra parte, se deseja inserir um elemento antes de um item específico, passe o número de referência desse elemento. Neste caso, o novo elemento inserido não é selecionado automaticamente. Se não houver um elemento com o número de referência correspondente, o comando não faz nada.

Pode passar o texto do novo item em itemText. A partir de 4D v16 R4, se o item for associado com uma ação padrão, pode passar a constante ak standard action title em itemText para automaticamente usar o nome da ação localizada. Para saber mais veja a seção *Ações padrões* .  
  
Pode passar o item de número de referência do novo item em itemRef. Apesar de que se qualifica esse número de referência de item como único, na verdade é possível passar o valor que quiser. Veja a seção *Gerenciar Listas Hierárquicas* para saber mais sobre o parâmetro itemRef.  
  
Se deseja que o elemento inclua sub elementos, passe um número de referência de lista válido no parâmetro *sublista*. Neste caso, também deve passar o parâmetro *expandida*. Passe [True](true.md "True") ou [False](false.md "False") neste parâmetro de maneira que esta sub-lista é mostrada expandida ou contraída respectivamente.

#### Exemplo 

O código a seguir insere um elemento (sem sub-lista associada) justo antes do elemento selecionado atualmente n lista *hList*:

```4d
 vlUniqueRef:=vlUniqueRef+1
 INSERT IN LIST(hList;*;"Novo elemento";vlUniqueRef)
```

#### Ver também 

[APPEND TO LIST](append-to-list.md)  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 625 |
| Thread-seguro | &check; |
| Proibido no servidor ||


