---
id: min
title: Min
slug: /commands/min
displayed_sidebar: docs
---

<!--REF #_command_.Min.Syntax-->**Min** ( *series* {; *atributoRota*} ) : any<!-- END REF-->
<!--REF #_command_.Min.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Dados para os quais se retorna o valor mínimo |
| atributoRota | Text | &#8594;  | Rota do atributo para o qual retorna o valor mínimo |
| Resultado | Date, Number | &#8592; | Valor mínimo em séries |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Min.Summary-->Min devolve o mínimo valor em *series*.<!-- END REF--> Se *series* for um campo indexado, o índice é utilizado para encontrar o valor mínimo.   
  
Se a seleção de *series* está vazia, Min devolve 0\.   
  
Você pode passar um array (uma ou duas dimensões) em *series*. Neste caso, o array deve ser do tipo inteiro, inteiro longo, real ou tipo dados.

Este comando aceita um parâmetro opcional atribCaminho do tipo Texto, que pode usar se series for um campo objeto. Permite que defina a rota do atributo a computar. Usar a notação padrão ponto para definir rotas para atributos aninhados, por exemplo "company.address.number". Lembre que nomes de atributos objeto diferenciam entre minúsculas e maiúsculas. 

Apenas valores de atributos numéricos são computados. Se estes valores no atributo rota que não são do tipo numérico que são ignorados.

Se o comando é executado corretamente, a variável sistema OK toma o valor 1\. Se for interrompida (por exemplo se o usuario cliar no botão Parar o termômetro de progresso), a variável OK toma o valor 0.

#### Exemplo 1 

O exemplo a seguir é um método de objeto para a variável *vMin* localizada na área de quebra 0 do formulário. A variável é impressa ao final do relatório. O método de objeto atribui o valor mínimo do campo à variável, a qual se imprime na última quebra do relatório: 

```4d
 vMin:=Min([Empregados]Salário)
```

**Nota:** tenha certeza que o evento de formulário "On printing break" está selecionado para a variável.   
  
O método a seguir é chamado para imprimir os registros na seleção e ativar o processo de quebra:

```4d
 ALL RECORDS([Empregados])
 ORDER BY([Empregados];[Empregados]Sobrenome;>)
 BREAK LEVEL(1)
 ACCUMULATE([Empregados]Salário)
 FORM SET OUTPUT([Empregados];"Imprimir formulário")
 PRINT SELECTION([Empregados])
```

**Nota:** o parâmetro do comando [BREAK LEVEL](break-level.md) deve ser igual ao número de quebras em seu relatório. Para maior informação sobre quebras, consulte os comandos do tema *Imprimir*. 

#### Exemplo 2 

O exemplo a seguir procura a venda mais baixa de um empregado e mostra o resultado em uma caixa de diálogo de alerta. As quantidades vendidas são guardadas no subcampo \[Empregados\]VendasDolares: 

```4d
 ALERT("Vendaminima = "+String(Min([Empregados]VendasDolares)))
```

#### Exemplo 3 

Este exemplo obtém o valor mínimo no array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vMin:=Min($ArrGrades)
```

#### Exemplo 4 

Para um exemplo de computar um atributo campo objeto, veja o exemplo 3 da descrição do comando [Average](average.md).

#### Ver também 

[Max](max.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 4 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


