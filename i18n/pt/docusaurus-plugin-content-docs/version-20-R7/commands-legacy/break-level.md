---
id: break-level
title: BREAK LEVEL
slug: /commands/break-level
displayed_sidebar: docs
---

<!--REF #_command_.BREAK LEVEL.Syntax-->**BREAK LEVEL** ( *nivel* {; *saltoPagina*} )<!-- END REF-->
<!--REF #_command_.BREAK LEVEL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nivel | Integer | &#8594;  | Número de níveis de quebra |
| saltoPagina | Integer | &#8594;  | Nível de quebra para o qual fazer um salto de página. |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BREAK LEVEL.Summary-->BREAK LEVEL especifica o número de níveis de quebra em um relatório realizado utilizando [PRINT SELECTION](print-selection.md).<!-- END REF-->

**Deve** executar BREAK LEVEL e [ACCUMULATE](accumulate.md) antes de cada relatório no qual queira utilizar quebras. Estes comandos ativam o processo de quebras para um relatório. Ver a explicação para o comando [Subtotal](subtotal.md).

O parâmetro *nivel* indica o último nível de quebra para o qual queira realizar processos de quebras. Deve ter ordenado os registros com ao menos esse número de níveis. Se tiver ordenado mais níveis, estes níveis serão impressos como estão ordenados, mas não serão processados para quebras.

Cada nível de quebra gerado imprimirá as áreas de quebras e de cabeçalho correspondentes no formulário. Deve ter no formulário ao menos tantas áreas de quebra como o número que passou em *nivel*. Se houver mais áreas de quebra, serão ignoradas e não serão impressas.

O segundo parâmetro, opcional, *saltoPagina*, se utiliza para provocar saltos de página durante a impressão. 

#### Exemplo 

O exemplo a seguir imprime um relatório com dois níveis de quebra. A seleção é ordenada em quatro níveis, mas o comando **BREAK LEVEL** especifica apenas dois níveis de quebra. Um campo se acumula com o comando [ACCUMULATE](accumulate.md) :

```4d
 ORDER BY([Emp]Departamento;>;[Emp]Titulo;>;[Emp]Sobrenome;>;[Emp]Nome;>) // Ordenar em quatro campos
 BREAK LEVEL(2) // Fixar 2 níveis de quebra (Departamento e título)
 ACCUMULATE([Emp]Salario) // Acumular os salários
 FORM SET OUTPUT([Emp];"Departamento recursos humanos") // Selecionar o formulário a imprimir
 PRINT SELECTION([Emp]) // Imprimir o relatório
```

#### Ver também 

[ACCUMULATE](accumulate.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 302 |
| Thread-seguro | &check; |
| Proibido no servidor ||


