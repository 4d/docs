---
id: count-in-array
title: Count in array
slug: /commands/count-in-array
displayed_sidebar: docs
---

<!--REF #_command_.Count in array.Syntax-->**Count in array** ( *array* ; *valor* ) : Integer<!-- END REF-->
<!--REF #_command_.Count in array.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array no qual a contagem deve ocorrer |
| valor | Expression | &#8594;  | Valor a contar |
| Resultado | Integer | &#8592; | Número de ocorrências encontradas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Count in array.Summary-->O comando Count in array retorna o número de ocorrências do *valor* no *array*.<!-- END REF-->

Este comando pode ser usado com os seguintes tipos de array: texto, alfanumérico, numérico, data, apontador e booleano. Os parâmetros de *array* e *valor* devem ser do mesmo tipo ou compatíveis.

**Nota**: Com arrays Object, é possível usar referências de objeto no parâmetro valor. 

Se nenhum elemento no *array* corresponde ao *valor*, o comando retorna 0.

#### Exemplo 1 

O seguinte exemplo permite visualizar o número de linhas selecionados em um list box: 

```4d
  //tBList é o nome de um array de uma coluna de um List box
 ALERT(String(Count in array(tBList;True))+" linha(s) selecionada(s) no list box")
```

#### Exemplo 2 

Para contar referências de objeto em um array de objeto:

```4d
 ARRAY OBJECT($objects;100)
 $o1:={a10;b"xyz"}
 $o2:={a10;b"xyz"}
 
 $objects{20}:=$o1
 $objects{21}:=$o1
 $objects{22}:=$o1
 
 var $n : Integer
 
 $n:=Count in array($objects;$o1) // n = 3 
 $n:=Count in array($objects;$o2) // n = 0
```

#### Ver também 

[Find in array](find-in-array.md)  
[Find in sorted array](find-in-sorted-array.md)  