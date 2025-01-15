---
id: level
title: Level
slug: /commands/level
displayed_sidebar: docs
---

<!--REF #_command_.Level.Syntax-->**Level**   : Integer<!-- END REF-->
<!--REF #_command_.Level.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Nível de ruptura ou do cabeçalho atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Level.Summary-->Level  se utiliza para determinar o nível de quebra do cabeçalho atual.<!-- END REF--> Devolve o nível de quebra durante os eventos On Header e On Printing Break.

O nível 0 é o último nível a imprimir e é apropriado para a impressão de um total geral. Level  devolve 1 quando 4D imprime uma quebra no primeiro campo de ordenação, 2 quando 4D imprime uma quebra no segundo campo ordenado, e assim sucessivamente.

#### Exemplo 

Este exemplo é um modelo para um método de formulário. Mostra cada evento possível enquanto um relatório utiliza um formulário como formulário de saída. Level  se chama quando um cabeçalho ou uma quebra estão sendo impressas:

```4d
  // Método de formulário para um formulário de saída utilizado por um relatório
 $vpFormTable:=Current form table
 Case of
  // ...
    :(FORM Event=On Header)
  // Se vai imprimir a área de cabeçalho
       Case of
          :(Before selection($vpFormTabela->))
  // O código para a primeira quebra do cabeçalho deve ir aqui
          :(Level=1)
  // O código para a quebra do cabeçalho nível 1 deve ir aqui
          :(Level=2)
  // O código para a quebra do cabeçalho nível 2 deve ir aqui
  // ...
       End case
    :(FORM Event=On Printing Details)
  // Se vai imprimir um registro
  // O código para cada registro vai aqui
    :(FORM Event=On Printing Break)
  // Se vai imprimir uma área de quebra
       Case of
          :(Level=0)
  // O código para a quebra 0 vai aqui
          :(Level=1)
  // O código para a quebra 1 vai aqui
  // ...
       End case
    :(FORM Event=On Printing Footer)
       If(End selection($vpFormTabela->))
  // O código para o último rodapé deve ir aqui
       Else
  // O código para um rodapé deve ir aqui
       End if
 End case
```

#### Ver também 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Form event code](../commands/form-event-code.md)  
[PRINT SELECTION](print-selection.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 101 |
| Thread-seguro | &cross; |


