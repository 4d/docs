---
id: std-deviation
title: Std deviation
slug: /commands/std-deviation
displayed_sidebar: docs
---

<!--REF #_command_.Std deviation.Syntax-->**Std deviation** ( *series* ) : Real<!-- END REF-->
<!--REF #_command_.Std deviation.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Dados para os quais se retorna o desvio padrão |
| Resultado | Real | &#8592; | Desvio padrão da série |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Std deviation.Summary-->Std deviation devolve o desvio padrão de *series*.<!-- END REF--> Se *series* for um campo indexado, o índice é utilizado para calcular o desvio padrão.  
  
Você pode passar um array (uma ou duas dimensões) em *series*. Neste caso, o array deve ser do tipo inteiro, inteiro longo ou real.

#### Exemplo 1 

O exemplo a seguir é um método de objeto para a variável *vDesv*. O método de objeto atribui o desvio padrão de uma série de dados a *vDesv*:

```4d
 vDesv:=Std deviation([Tabela1]SeriesDados)
```

O método a seguir é chamado para imprimir os registros na seleção e ativar o processo de quebra:

```4d
 ALL RECORDS([Tabela1])
 ORDER BY([Tabla1];[Tabela1]SeriesDados;>)
 BREAK LEVEL(1)
 ACCUMULATE([Tabela1]SeriesDados)
 OUTPUT FORM([Tabela1];"Imprimir formulário")
 PRINT SELECTION([Tabela1])
```

**Nota:** o parâmetro do comando [BREAK LEVEL](break-level.md) deve ser igual ao número de quebras de seu relatório. Para maior informação sobre quebras, consulte os comandos do capítulo *Imprimir*. 

#### Exemplo 2 

Este exemplo obtém o desvio padrão de uma série de valores localizados num array: 

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vStdDev:=Std deviation($ArrGrades)
```

#### Ver também 

[Average](average.md)  
[Sum](sum.md)  
[Sum squares](sum-squares.md)  
[Variance](variance.md)  