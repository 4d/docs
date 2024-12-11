---
id: find-in-sorted-array
title: Find in sorted array
slug: /commands/find-in-sorted-array
displayed_sidebar: docs
---

<!--REF #_command_.Find in sorted array.Syntax-->**Find in sorted array** ( *array* ; *valor* ; > or < {; *posPrim* {; *posUlt*}} ) : Boolean<!-- END REF-->
<!--REF #_command_.Find in sorted array.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array para pesquisar |
| valor | Expression | &#8594;  | Valor do mesmo tipo para procurar no array |
| > or < | Operador | &#8594;  | > se o array está classificado em ordem crescente, < se ele está em ordem decrescente |
| posPrim | Integer | &#8592; | Posição da sua primeira ocorrência se o valor for encontrado; caso contrário, a posição em que o valor deve ser inserido |
| posUlt | Integer | &#8592; | Posição de sua última ocorrência se o valor for encontrado; caso contrário, mesmo que posPrim |
| Resultado | Boolean | &#8592; | True se pelo menos um elemento no array corresponde ao valor, False caso contrário |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Find in sorted array.Summary-->O novo comando **Find in sorted array** devolve **true** se pelo menos um elemento no *array* ordenado com o *valor* e opcionalmente devolve a posição dos elementos correspondentes.<!-- END REF--> Diferente de [Find in array](find-in-array.md), **Find in sorted array** só funciona com um *array* ordenado e oferece informação sobre a posição das ocorrências, o que lhe permite inserir elementos se for necessário.

  
O *array* deve estar já ordenado e deve coincidir com a ordem específica pelo parâmetro *\> ou <* (ou seja, o símbolo "maior que" para a ordem ascendente e o símbolo "menor que" para a ordem descendente). O comando **Find in sorted array** tomará vantagem da ordem e uso de um algoritmo de *´pesquisa binária*, que é bem mais eficiente para grandes arrays (para mais informação, consulte a [página algoritmo de pesquisa binária em Wikipédia](http://en.wikipedia.org/wiki/Binary%5Fsearch%5Falgorithm)). No entanto, se o array não está ordenado corretamente, o resultado pode ser incorreto.

**Note**: Quando usar este comando com um array ordenado do tipo Objeto, pode passar uma referência de objeto no valor

O comando ignorará a indicação de ordem se comporta como um [Find in array](find-in-array.md) (pesquisa sequencial, devolvendo -1 para *posPrim* e *posUlt* se não se encontra o *valor*) em qualquer dos seguintes casos:

* se o tipo de array não pode ordenar (por exemplo arrays ponteiro),
* se o array é de tipo booleano (não preciso),
* se a base de dados não é Unicode (modo compatibilidade) e o array é uma cadeia ou array texto,
* quando é procurado em um array text para uma cadeia que inclui um coringa ('@') no começo ou no meio da cadeia (utilizando uma pesquisa binária com um caractere coringa não é possível porque os elementos correspondentes podem não ser contínuos no array).

Em caso de que o comando devolva **False**, o valor devolvido em *posPrim* pode ser passado a [INSERT IN ARRAY](insert-in-array.md) para inserir o *valor* no array mantendo o array ordenado. Esta sequencia é mais rápida que a inserção de um novo elemento ao final do array e logo chamar a [SORT ARRAY](sort-array.md) para mover ele ao lugar correto.  
  
O valor devolvido em *postUlt* pode ser combinado com o valor devolvido em *posPrim* para realizar sobre cada elemento do array que coincida com o *valor* (sob um [ARRAY TO LIST](array-to-list.md)) ou para encontrar o número total de ocorrências (como o encontraria [Count in array](count-in-array.md) porém mais rápido).

#### Exemplo 1 

Você deseja inserir um valor, se for necessário, mantendo o array ordenado:

```4d
 var $pos : Integer
 If(Find in sorted array($array ;$value ;>;$pos)
    ALERT("Found at pos "+String($pos))
 Else
    INSERT IN ARRAY($array ;$pos)
    $array{$pos}:=$value
 End if
```

#### Exemplo 2 

  
Você quer encontrar o número de ocorrências das cadeias que começam por "test" e criar uma cadeia que vincula todos estes elementos:

```4d
 var $posFirst ;$posLast : Integer
 var $output : Text
 If(Find in sorted array($array ;"test@";>;$posFirst ;$posLast))
    $output:="Found "+String($posLast-$posFirst+1)+" results :\n"
 End if
 For($i ;$posFirst ;$posLast)
    $output:=$output+$array{$i}+"\n"
 End for
```

#### Ver também 

[Count in array](count-in-array.md)  
[Find in array](find-in-array.md)  
[SORT ARRAY](sort-array.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1333 |
| Thread-seguro | &check; |
| Proibido no servidor ||


