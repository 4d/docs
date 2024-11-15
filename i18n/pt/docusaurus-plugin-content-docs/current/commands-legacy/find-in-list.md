---
id: find-in-list
title: Find in list
slug: /commands/find-in-list
displayed_sidebar: docs
---

<!--REF #_command_.Find in list.Syntax-->**Find in list** ( {* ;} *lista* ; *valor* ; *alcance*  {; *arrayElem* {; *}} ) : Integer<!-- END REF-->
<!--REF #_command_.Find in list.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| valor | Text | &#8594;  | Valor a buscar |
| alcance | Integer | &#8594;  | 0=Lista principal, 1=Sub-lista |
| arrayElem | Integer array | &#8592; | - Se omitido o 2do *: array de posições dos elementos encontrados - Se passado o segundo *: array de números de referência dos elementos encontrados |
| * | Operador | &#8594;  | - Se omitido: utiliza a posição dos elementos - Se passado: utiliza o número de referência dos elementos |
| Resultado | Integer | &#8592; | - Se omitido o 2do *: posição do elemento encontrado - Se passado 2do *: número de referência do elemento encontrado |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Find in list.Summary-->O comando Find in list retorna a posição ou referência do primeiro elemento da *lista* que é equivalente à cadeia passada em *valor*.<!-- END REF--> Se são encontrados vários elementos, a função também pode preencher um array *arrayElem* com a posição ou a referência de cada elemento. 

Se passa o parâmetro opcional *\**, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação da lista no formulário. Se não passa este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (*RefLista*). Se utilizar apenas uma representação de lista ou trabalhar com números de referência de elementos (se omitir o segundo \*), pode utilizar indiferentemente uma ou outra sintaxe. Por outro lado, se utilizar várias representações da mesma lista e trabalhar com posições de elementos (se passa o segundo \*), a sintaxe baseada no nome do objeto é necessária já que a posição dos elementos pode variar de uma representação a outra.

**Nota:** se utilizar o caractere @ no nome do objeto da lista e o formulário contém várias listas que correspondem a este nome, o comando Find in list será aplicado ao primeiro objeto cujo nome ele corresponda.

O segundo parâmetro \* permite indicar se deseja trabalhar com as posições atuais dos elementos (nesse caso, este parâmetro é omitido) ou com as referências absolutas dos elementos (nesse caso, deve ser passado).

Passe em *valor* a cadeia de caracteres a pesquisar. A pesquisa será do tipo “exata”; em outras palavras, a pesquisa de “pedra” não encontrará “pedras”. Entretanto, pode utilizar o caractere arroba (@) para definir as pesquisas de tipo “começa por,” “termina em” ou “contém”.

O parâmetro *alcance* é utilizado para definir se a pesquisa deve ser realizada unicamente no primeiro nível da *list*a ou se deve incluir todas as sub-listas. Passe 0 para limitar a pesquisa ao primeiro nível da lista e 1 para estendê-la pesquisa a todas as sub-listas.

Se deseja conhecer a posição ou o número de todos os elementos correspondentes a *valor*, passe um array inteiro longo no parâmetro opcional *arrayElem*. Se for necessário, o array será criado e redimensionado pelo comando. O comando preencherá o array com as posições (se omitir o segundo \*) ou os números de referência ( se for passado o segundo \*) dos elementos encontrados.

As posições são expressas em relação ao elemento superior da lista principal, considerando o estado atual expandido/contraído da lista e das sub-listas.

Se nenhum elemento corresponde ao *valor* buscado, a função retorna 0 e o array *arrayElem* é retornado vazio.

#### Exemplo 

Dada a seguinte lista hierárquica:

![](../assets/en/commands/pict22420.en.png)

```4d
 $vlItemPos:=Find in list(hList;"I@";1;$arrPos)
  //$vlItemPos igual a 6
  //$arrPos{1} igual a 6 e $arrPos{2} igual a 11
 $vlItemRef:=Find in list(hList;"I@";1;$arrRefs;*)
  //$vlItemRef igual a 7
  //$arrRefs{1} igual a 7 e $arrRefs{2} igual a 18
 $vlItemPos:=Find in list(hList;"Data";1;$arrPos)
  //$vlItemPos igual a 9
  //$arrPos{1} igual a 9 e $arrPos{2} igual a 16
 $vlItemRefFind in list(hList;"Fecha";1;$arrRefs;*)
  //$vlItemRef igual a11
  //$arrRefs{1} igual a 11 e $arrRefs{2} igual a 23
 $vlItemPos:=Find in list(hList;"Fecha";0;*)
  //$vlItemPos igual a 0
```
