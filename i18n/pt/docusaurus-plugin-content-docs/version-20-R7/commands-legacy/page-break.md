---
id: page-break
title: PAGE BREAK
slug: /commands/page-break
displayed_sidebar: docs
---

<!--REF #_command_.PAGE BREAK.Syntax-->**PAGE BREAK** {( *|> )}<!-- END REF-->
<!--REF #_command_.PAGE BREAK.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| *&#124;> | &#8594;  | * Cancela o trabalho de impressão iniciado com o Formulário de Impressão, ou > para forçar um trabalho de impressão. |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.PAGE BREAK.Summary-->PAGE BREAK dispara a impressão de dados enviados a la impressora e provocar um salto de página.<!-- END REF--> PAGE BREAK se utiliza conjuntamente com [Print form](print-form.md) (no contexto do evento de formulário On Printing Detail) para forçar saltos de página e imprimir a última página criada em memória. Não utilize PAGE BREAK com o comando [PRINT SELECTION](print-selection.md). É melhor utilizar [Subtotal](subtotal.md) ou [BREAK LEVEL](break-level.md) com o parâmetro opcional para gerar saltos de página.

Os parâmetros *\** e *\>* são opcionais.

O parâmetro *\** lhe permite cancelar um trabalho de impressão iniciado pelo comando [Print form](print-form.md). A execução deste comando detém imediatamente os trabalhos de impressão em progresso.

**Nota:** em Windows, este mecanismo pode ser transtornado pelas propriedades de fila de espera do servidor de impressão. Se a impressora se configura para começar a impressão imediatamente, o cancelamento não será efetiva. Para que o comando **PAGE BREAK(\*)** funcione corretamente, é preferível escolher a propriedade "Iniciar impressão quando a última página tenha entrado na fila" da impressora. 

O parâmetro *\>* modifica o funcionamento do comando PAGE BREAK. Esta sintaxe tem dois efeitos:

* Mantém a impressão aberta até que o comando PAGE BREAK se executa novamente sem um parâmetro.
* Dá prioridade ao trabalho de impressão. Nenhuma outra impressão pode ser realizada até que o trabalho de impressão tenha terminado.  
A segunda opção é particularmente útil quando se utiliza com um trabalho de impressão em fila. O parâmetro > garante que o trabalho de impressão será realizado a partir de um só arquivo. Isto reduzirá o tempo de impressão.

**Nota:** durante uma impressão de tela, se o usuário clicar em Cancelar na caixa de diálogo de pré-visualização, o comando PAGE BREAK define a variável sistema OK em 0.

#### Exemplo 1 

Ver o exemplo do comando [Print form](print-form.md "Print form").

#### Exemplo 2 

Consulte o exemplo do comando [SET PRINT MARKER](set-print-marker.md "SET PRINT MARKER").

#### Ver também 

[CANCEL](cancel.md)  
[Print form](print-form.md)  