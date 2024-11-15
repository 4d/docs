---
id: sum-squares
title: Sum squares
slug: /commands/sum-squares
displayed_sidebar: docs
---

<!--REF #_command_.Sum squares.Syntax-->**Sum squares** ( *series* ) : Real<!-- END REF-->
<!--REF #_command_.Sum squares.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Dados para os quais se retorna a soma de quadrados. |
| Resultado | Real | &#8592; | Soma dos quadrados dos valores da série |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Sum squares.Summary-->**Sum squares** devolve a soma de quadrados de *series*.<!-- END REF--> Se *series* for um campo indexado, o índice é utilizado para calcular a soma de quadrados. Só pode utilizar um campo com esta função quando imprime um relatório.  
  
Você pode passar um array (uma ou duas dimensões) em *series*. Neste caso, o array deve ser do tipo inteiro, inteiro longo ou real.

#### Exemplo 1 

O exemplo a seguir é um método para a variável *vQuadrados*. O método de objeto atribui a soma de quadrados de uma série de dados a *vQuadrados*. A variável *vQuadrados* se imprime na última quebra do relatório:

```4d
 vQuadrados:=Sum squares([Tabela1]SeriesDados)
```

O método a seguir se chama para imprimir os registros na seleção e ativar o processo de quebra:

```4d
 ALL RECORDS([Tabela1])
 ORDER BY([Tabela1];[Tabela1]SeriesDados;>)
 BREAK LEVEL(1)
 ACCUMULATE([Tabela1]SeriesDados)
 OUTPUT FORM([Tabela1];"Imprimir formulário")
 PRINT SELECTION([Tabela1])
```

**Nota:** o parâmetro do comando [BREAK LEVEL](break-level.md) deve ser igual ao número de quebras em seu relatório. Para maior informação sobre o processo de quebras, consulte os comandos do capítulo *Imprimir*. 

#### Exemplo 2 

Este exemplo permite obter a soma de quadrados dos valores localizados num array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vSumSquares:=Sum squares($ArrGrades)
```

#### Ver também 

[Average](average.md)  
[Std deviation](std-deviation.md)  
[Sum](sum.md)  
[Variance](variance.md)  