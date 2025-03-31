---
id: sum
title: Sum
slug: /commands/sum
displayed_sidebar: docs
---

<!--REF #_command_.Sum.Syntax-->**Sum** ( *series* {; *atributoRota*} ) : Real<!-- END REF-->
<!--REF #_command_.Sum.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Dados para os quais se retorna a Soma |
| atributoRota | Text | &#8594;  | Rota do atributo para o qual vai retornar a soma |
| Resultado | Real | &#8592; | Soma para a série |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Sum.Summary-->O comando **Sum** devolve a soma (total de todos os valores) para *series*.<!-- END REF--> Se *series* for um campo indexado, o índice é utilizado para calcular o total dos valores.  
  
Você pode passar um array (uma ou duas dimensões) em *series*. Neste caso, o array deve ser do tipo inteiro, inteiro longo ou real.

Este comando aceita um parâmetro opcional *atributoRota* do tipo Texto, que pode usar se *series* for um campo objeto. Permite que defina a rota do atributo a computar. Use a notação padrão ponto para definir rotas para atributos aninhados, por exemplo "company.address.number". Lembre que nomes de atributo objeto diferenciam entre maiúsculas e minúsculas. 

Apenas valores de atributo numérico são computados. Se houver valores na rota atributo que não forem do tipo numérico, serão ignoradas.

Se o comando for executado corretamente, a variável sistema OK toma o valor 0\. Se for interrompida (por exemplo se o usuário clicar no botão Parar o termômetro de progresso) a variável OK toma o valor 0.

#### Exemplo 1 

O exemplo a seguir é um método de objeto para uma variável *vTotal* localizada em um formulário. O método de objeto atribui a soma de todos os salários a *vTotal*:

```4d
 vTotal:=Sum([Empregados]Salário)
```

O método a seguir é chamado para imprimir os registros na seleção e para ativar o processo de quebra: 

```4d
 ALL RECORDS([Empregados])
 ORDER BY([Empregados];[Empregados]Sobrenome;>)
 BREAK LEVEL(1)
 ACCUMULATE([Empregados]Salário)
 OUTPUT FORM([Empregados];"Imprimir formulário")
 PRINT SELECTION([Empregados])
```

**Nota:** o parâmetro para o comando [BREAK LEVEL](break-level.md) deve ser igual ao número de quebras em seu informe. Para maior informação sobre o processo de quebras consulte os comandos do tema *Imprimir*.

#### Exemplo 2 

Este exemplo permite obter a soma de todos os valores localizados num array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vSum:=Sum($ArrGrades)
```

#### Exemplo 3 

Para um exemplo de computar um atributo campo objeto, veja o exemplo 3 da descrição do comando [Average](average.md).

#### Ver também 

[ACCUMULATE](accumulate.md)  
[Average](average.md)  
[BREAK LEVEL](break-level.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


