---
id: array-time
title: ARRAY TIME
slug: /commands/array-time
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TIME.Syntax-->**ARRAY TIME** ( *nomArray* ; *tamanho* {; *tamanho2*} )<!-- END REF-->
<!--REF #_command_.ARRAY TIME.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nome de array |
| tamanho | Integer | &#8594;  | Número de elementos no array ou Número de filas se especificado tamanho2 |
| tamanho2 | Integer | &#8594;  | Número de colunas em um array de duas dimensões |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY TIME.Summary-->O comando **ARRAY TIME** cria ou redimensiona um array de tipo tempo em memória.<!-- END REF-->em 4D, as horas podem ser processadas ​​como valores numéricos. Nas versões de 4D anteriores a v14, tinham que combinar um array inteiro longo com um formato de visualização para gerenciar um array de horas.  
  
O parâmetro *nomArray* é o nome do array.  
  
O parâmetro *tam* é o número de elementos do array.  
  
O parâmetro *tam2* é opcional. Se ele passar, este comando cria um array de duas dimensões. Neste caso, *tam* especifica o número de filas e *tam2* o número de colunas de cada array. Cada fila em um array de duas dimensões se pode processar tanto como um elemento e como um array. Isto significa que quando se trabalha com a primeira dimensão de um array de duas dimensões, pode inserir e retirar arrays inteiros utilizando outros comandos deste tema .  
  
Quando aplica o comando **ARRAY TIME** a um array existente :

* Seu tamanho é ampliado, os elementos existentes não mudam e os novos elementos se inicializam no valor de hora nulo (00:00:00 ) .
* Seu tamanho é reduzido, se eliminam e perdem os elementos de abaixo do array.

Quando aplica [SELECTION TO ARRAY](selection-to-array.md) ou [SELECTION RANGE TO ARRAY](selection-range-to-array.md) a um campo de tipo Hora, tenha em conta que só são criados um array de tipo Hora se o array não foi definido como outro tipo, tal como Inteiro longo, por exemplo.

#### Exemplo 1 

Este exemplo cria um array processo que contém 100 elementos de tipo Hora:

```4d
 ARRAY TIME(arrTimes;100)
```

#### Exemplo 2 

Este exemplo cria um array local de 100 filas, contendo cada uma 50 elementos de tipo Hora:

```4d
 ARRAY TIME($arrTimes;100;50)
```

#### Exemplo 3 

Como os arrays de horas aceitam valores numéricos, o seguinte código é válido:

```4d
 ARRAY TIME($arrTimeValues;10)
 $CurTime:=Current time+1
 APPEND TO ARRAY($arrTimeValues;$CurTime)
 $Found:=Find in array($arrTimeValues;$CurTime)
```

#### Ver também 

*Criando arrays*  
[Time](time.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1223 |
| Thread-seguro | &check; |


