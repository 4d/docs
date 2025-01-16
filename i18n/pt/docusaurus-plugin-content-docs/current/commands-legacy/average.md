---
id: average
title: Average
slug: /commands/average
displayed_sidebar: docs
---

<!--REF #_command_.Average.Syntax-->**Average** ( *series* {; *atributoRota*} ) : Real<!-- END REF-->
<!--REF #_command_.Average.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Dados para os quais se retorna a média |
| atributoRota | Text | &#8594;  | Rota do atributo para o qual vai retornar a média |
| Resultado | Real | &#8592; | Média aritmética da série |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Average.Summary-->**Average** retorna a média aritmética de *series*.<!-- END REF--> Se *series* for um campo indexado, o índice é utilizado para calcular a média. 

Você pode passar um array (de uma ou duas dimensões) em *series*. Neste caso, o array deve ser do tipo Inteiro, Inteiro longo ou Real.

Este comando aceita um parâmetro opcional *atributoRota* do tipo Texto, que pode usar se *series* for um campo objeto. Permite que defina a rota do atributo a computar. Use a notação padrão ponto para definir rotas para atributos aninhados, por exemplo "company.address.number". Lembre que nomes de atributo objeto diferenciam entre maiúsculas e minúsculas. 

Apenas valores de atributo numérico são computados. Se houver valores na rota atributo que não forem do tipo numérico, serão ignoradas.

Se o comando for executado corretamente, a variável sistema OK toma o valor 1\. Se for interrompida (por exemplo se o usuário clicar no botão **Deter** do termômetro de progresso) a variável OK toma o valor 0.

#### Exemplo 1 

O exemplo a seguir define a variável *vMedia* que está na área de quebra B0 de um formulário de saída. A linha de código é o método de objeto para *vMedia*. O método de objeto não é executado até o nível de quebra 0:

```4d
 vMedia:=Average([Empregados] Salário)
```

O método a seguir é chamado para imprimir os registros na seleção e ativar o processo de quebra:

```4d
 ALL RECORDS([Empregados])
 ORDER BY([Empregados];[Empregados]Sobrenome;>)
 BREAK LEVEL(1)
 ACCUMULATE([Empregados]Salário)
 FORM SET OUTPUT([Empregados];"Imprimir formulário")
 PRINT SELECTION([Empregados])
```

**Nota:** O parâmetro do comando [BREAK LEVEL](break-level.md) deve ser igual ao número de rupturas em seu relatório. Para maior informação sobre quebras, consulte *Imprimir*. 

#### Exemplo 2 

Este exemplo permite obter a média das 15 primeiras notas da seleção:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 ORDER BY([Exams];[Exams]Exam_Grade;<)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 ARRAY REAL($ArrGrades;15)
 vAverage:=Average($ArrGrades)
```

#### Exemplo 3 

Sua tabela \[Customer\] contém um campo objeto "full\_Data" com os seguintes dados:

![](../assets/en/commands/pict2898119.en.png)

Pode fazer os seguintes cálculos:

```4d
 var $vAvg : Real
 ALL RECORDS([Customer])
 $vAvg:=Average([Customer]full_Data;"age")
  //$vAvg is 44,46
 
 var $vTot : Integer
 $vTot:=Sum([Customer]full_Data;"Children[].age")
  //$vTot is 105
```

#### Ver também 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  
[Sum](sum.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 2 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


