---
id: cancel
title: CANCEL
slug: /commands/cancel
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL.Syntax-->**CANCEL**<!-- END REF-->
<!--REF #_command_.CANCEL.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.CANCEL.Summary-->No contexto de entrada de dados, **CANCEL** realiza a mesma ação que se o usuário tivesse pressionado a tecla de cancelação (**Esc**).<!-- END REF--> Também é possível colocar no método de caixa de fechamento opcional de uma janela criada pelo comando[Open window](open-window.md)

O comando **CANCEL** se utiliza em métodos de objeto ou de formulário (ou em uma subrotina) para:

* cancelar um registro novo ou modificado, para o qual a entrada de dados for inicializada utilizando [ADD RECORD](add-record.md) ou [MODIFY RECORD](modify-record.md).
* cancelar um formulário mostrado através do comando [DIALOG](../commands/dialog.md).
* sair de um formulário que mostra uma seleção de registros, utilizando [DISPLAY SELECTION](display-selection.md) o [MODIFY SELECTION](modify-selection.md).
* cancelar a impressão de um formulário que estiver a ponto de ser impresso utilizando o comando [Print form](../commands/print-form.md) (ver a continuação).

**CANCEL** é executado com frequência como resultado da seleção de um comando de menu. **CANCEL** também é utilizado com frequência no método de objeto de um botão “sem ação”.

Este comando também é usado no método da caixa de fechamento opcional de uma janela criada por el comando [Open window](open-window.md). Se houver uma janela com caixa de controle de menu, pode chamar a [ACCEPT](accept.md) ou **CANCEL**, no método a executar, quando se dá duplo clique na caixa de controle de menu ou se selecione o comando de menu **Fechar**.

Não é possível concatenar vários **CANCEL**. A execução consecutiva de dois comandos **CANCEL** em um método terá o mesmo resultado que a execução de um só comando.

Finalmente, este comando pode ser utilizado não evento de formulário On Printing Detail, quando é utilizado o comando [Print form](../commands/print-form.md). Neste contexto, o comando **CANCEL** suspende a impressão do formulário que estiver a ponto de ser impresso, depois retoma na seguinte página. Este mecanismo pode ser utilizado para administrar a impressão de formulários quando não houver suficiente espaço ou no caso de que seja necessária uma quebra de página.

**Nota:** esta operação é diferente da do comando [PAGE BREAK](page-break.md)(\*)que cancela TODOS os formulários que estão a espera de impressão.

##### Modo Headless 

**O comando CANCEL** é permitido no modo headless (computador sem periféricos), no contexto de áreas offscreen criadas por *VP Run offscreen area* ou [WA Run offscreen area](wa-run-offscreen-area.md). 

#### Exemplo 

Consulte o exemplo do comando [SET PRINT MARKER](set-print-marker.md "SET PRINT MARKER"). 

#### Variáveis e conjuntos do sistema 

Quando o comando CANCEL é executado (anulação de formulário ou de impressão), a variável sistema OK assume o valor 0.

#### Ver também 

[ACCEPT](accept.md)  
[PAGE BREAK](page-break.md)  
[Print form](../commands/print-form.md)  