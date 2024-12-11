---
id: max
title: Max
slug: /commands/max
displayed_sidebar: docs
---

<!--REF #_command_.Max.Syntax-->**Max** ( *séries* {; *atributoRota*} ) : any<!-- END REF-->
<!--REF #_command_.Max.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| séries | Field, Array | &#8594;  | Dados para os quais se retorna o valor máximo |
| atributoRota | Text | &#8594;  | Rota do atributo para o qual retornar o valor máximo |
| Resultado | Date, Number | &#8592; | Valor máximo na série |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Max.Summary-->**Max** retorna o valor máximo em *series*.<!-- END REF--> Se *series* é um campo indexado, o índice é utiliizado para buscar o máximo valor.  
  
Você pode passar um array (uma ou duas dimensões) em series. Neste caso, o array deve ser do tipo inteiro, inteiro longo, real ou tipo dados.

Se a seleção de *series* estiver vazia, **Max** retorna 0.

Este comando aceita um parâmetro opcional *atributoRota* do tipo Texto, que pode usar se *series* for um campo objeto. Permite que defina a rota do atributo a computar. Use a notação padrão ponto para definir rotas para atributos aninhados, por exemplo "company.address.number". Lembre que nomes de atributo objeto diferenciam entre maiúsculas e minúsculas. 

Apenas valores de atributo numérico são computados. Se houver valores na rota atributo que não forem do tipo numérico, serão ignoradas.

Se o comando for executado corretamente, a variável sistema OK toma o valor 1\. Se for interrompida (por exemplo se o usuário clicar no botão Deter o termômetro de progresso), a variável OK toma o valor 0.

#### Exemplo 1 

O exemplo a seguir é um método de objeto da variável *vMax* localizada na área de quebra 0 do formulário. A variável é impressa ao final do relatório. O método de objeto atribui o valor máximo de campo à variável, o qual é impresso na última quebra do relatório.

```4d
 vMax:=Max([Empregados] Salário)
```

**Nota:** Tenha certeza que o evento formulário "On printing break" for selecionado para a variável.

O método a seguir é chamada para imprimir os registros da seleção e ativar o processo de quebra:

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

Este exemplo permite obter o valor mais elevado de um array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vMax:=Max($ArrGrades)
```

#### Exemplo 3 

Para um exemplo de computar um atributo campo objeto, veja o exemplo 3 da descrição do comando [Average](average.md).

#### Ver também 

[Min](min.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 3 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


