---
id: set-list-item-parameter
title: SET LIST ITEM PARAMETER
slug: /commands/set-list-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM PARAMETER.Syntax-->**SET LIST ITEM PARAMETER** ( {* ;} *lista* ; refElem | * ; *seletor* ; *valor* )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM PARAMETER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| refElem &#124; * | Operador, Inteiro longo | &#8594;  | Número de referencia do elemento, ou 0 para o último elemento adicionado à lista ou * para o elemento da lista atualmente selecionada |
| seletor | Text | &#8594;  | Constante do parâmetro |
| valor | Text, Boolean, Real | &#8594;  | Valor do parâmetro |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SET LIST ITEM PARAMETER.Summary-->O comando SET LIST ITEM PARAMETER permite modificar o parâmetro *seletor* para o elemento *refElem* da lista hierárquica cuja referência ou nome de objeto são passadas no parâmetro *lista*.<!-- END REF-->

Se passa o primeiro parâmetro opcional \*, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação da lista no formulário. Se não passar este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (*RefLista*). Se utiliza uma só representação de lista ou trabalha com elementos estruturais (o segundo \* é omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contrário, se utiliza várias representações de uma mesma lista e trabalha com o elemento atual (se passa o segundo \*), a sintaxe baseada no nome do objeto se necessita já que cada representação pode ter seu próprio elemento atual.

Pode passar um número de referência em *refElem*. Se este número não corresponde a nenhum elemento da lista, o comando não faz nada. Também pode passar 0 em *refElem* para obter a fonte do último elemento adicionado à lista (utilizando “\[#title id="213"/).

Finalmente, pode passar \* em *refElem*: neste caso, o comando se aplicará ao elemento atual da lista. Se vários elementos são selecionados manualmente, trto elemento atual é o último selecionado. Se nenhum elemento estiver selecionado, o comando não faz nada.  
  
Em *seletor*, pode passar 

* uma das constante abaixo (encontradas no tema “*Listas hierárquicas*”).  
| Constante                  | Tipo   | Valor                      | Comentário                                                                                                                                                                                                                                                                       |  
| -------------------------- | ------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Additional text            | Cadeia | 4D\_additional\_text       | Esta constante é usada para adicionar texto à direita do item *itemRef*. Esse título adicional sempre vai ser exibido na parte direita da lista, mesmo quando o usuário mover a barra de rolagem horizontal. Quando usar esta constante, passe o texto a ser exibido em *value*. |  
| Associated standard action | Cadeia | 4D\_standard\_action\_name | Associa uma ação padrão com o *itemRef*. Neste caso deve passar no parâmetro *valor* o nome de uma ação padrão com um parâmetro, por exemplo "fontSize?value=10pt". Para saber mais veja a seção *Ações padrões* no manual *Design Reference*.                                   |
* Custom selector: pode passar em *seletor* todo texto personalizado e associá-lo com um valor de tipo texto, numérico ou booleano. Este valor será armazenado com o elemento e poderá ser recuperado utilizando o comando [GET LIST ITEM PARAMETER](get-list-item-parameter.md). Este princípio permite configurar todo tipo de interface associado com as listas hierárquicas. Por exemplo, em uma lista de nomes de clientes, pode guardar a idade de cada pessoa e mostrá-la unicamente quando o elemento correspondente seja selecionado.

#### Exemplo 

Se quiser estabelecer uma lista de escolhas de um pop menu hierárquico, formando uma lista personalizada de valores de fontes usando as ação padrão

```4d
 $myList:=New list
 
APPEND TO LIST($myList;ak standard action title;1)
 APPEND TO LIST($myList;ak standard action title;2)
 APPEND TO LIST($myList;ak standard action title;3)
 SET LIST ITEM PARAMETER($myList;1;Associated standard action;"fontSize?value=10pt")
 SET LIST ITEM PARAMETER($myList;2;Associated standard action;"fontSize?value=12pt")
 SET LIST ITEM PARAMETER($myList;3;Associated standard action;"fontSize?value=14pt")
 OBJECT SET LIST BY REFERENCE(*;"popup";Choice list;$myList)


```

![](../assets/en/commands/pict3372004.en.png)

#### Ver também 

[APPEND TO LIST](append-to-list.md)  
[Action info](action-info.md)  
[GET LIST ITEM PARAMETER](get-list-item-parameter.md)  
[GET LIST ITEM PARAMETER ARRAYS](get-list-item-parameter-arrays.md)  
[INSERT IN LIST](insert-in-list.md)  