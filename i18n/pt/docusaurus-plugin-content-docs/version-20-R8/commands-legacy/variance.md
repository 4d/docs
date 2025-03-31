---
id: variance
title: Variance
slug: /commands/variance
displayed_sidebar: docs
---

<!--REF #_command_.Variance.Syntax-->**Variance** ( *series* ) : Real<!-- END REF-->
<!--REF #_command_.Variance.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Dados para os quais se retorna a variância |
| Resultado | Real | &#8592; | Variância da série |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Variance.Summary-->Variance devolve a variância para *series*.<!-- END REF--> Se *series* for um campo indexado, o índice se utiliza para calcular a variância. Só pode utilizar um campo com esta função quando imprime um relatório.  
  
Você pode passar um array (uma ou duas dimensões) em *series*. Neste caso, o array deve ser do tipo inteiro, inteiro longo ou real.  

A variância de um conjunto de valores é a média dos quadrados dos desvios padrão. A variância média mede a dispersão de valores ao redor da média. 4D utiliza a seguinte fórmula de variância:

**Variância(x) = Sum (x-m)\*(x-m)/(n-1)**  
*m = Média*  
*n = Número de valores* 

Se os valores não se consideram uma amostra, multiplique o valor retornado por **Variance** por (n-1)/n.

#### Exemplo 1 

O exemplo a seguir é um método de objeto para a variável *var*. O método de objeto atribui a soma de quadrados de uma série de dados a *var*:

```4d
 var:=Variance(Estudantes]Notas)
```

O método a seguir é chamado para imprimir os registros na seleção e ativar o processo de quebra:

```4d
 ALL RECORDS([Estudantes])
 ORDER BY([Estudantes];[Estudantes]Classe;>)
 BREAK LEVEL(1)
 ACCUMULATE([Estudantes]Notas)
 OUTPUT FORM([Estudantes];"Imprimir formulário")
 PRINT SELECTION([Estudantes])
```

**Nota:** o parâmetro do comando [BREAK LEVEL](break-level.md) deve ser igual ao número de quebras em seu relatório. Para maior informação sobre o processo de quebras, consulte os comandos do tema *Imprimir*.

#### Exemplo 2 

Este exemplo permite obter a variância de valores localizados num array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vVariance:=Variance($ArrGrades)
```

#### Ver também 

[Average](average.md)  
[Std deviation](std-deviation.md)  
[Sum](sum.md)  
[Sum squares](sum-squares.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 27 |
| Thread-seguro | &check; |


