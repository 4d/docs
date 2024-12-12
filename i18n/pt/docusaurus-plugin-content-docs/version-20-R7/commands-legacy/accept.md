---
id: accept
title: ACCEPT
slug: /commands/accept
displayed_sidebar: docs
---

<!--REF #_command_.ACCEPT.Syntax-->**ACCEPT**<!-- END REF-->
<!--REF #_command_.ACCEPT.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ACCEPT.Summary-->O comando ACCEPT é utilizado em métodos de objeto ou de formulário (ou em subrotinas) para:

* aceitar um registro ou novo sub-registro ou modificado, para o qual a entrada de dados for inicializada utilizando [ADD RECORD](add-record.md "ADD RECORD"), [MODIFY RECORD](modify-record.md "MODIFY RECORD"), *ADD SUBRECORD*, ou *MODIFY SUBRECORD*.<!-- END REF-->
* aceitar um formulário mostrado pelo comando [DIALOG](dialog.md "DIALOG").
* sair de um formulário que mostra uma seleção de registros, utilizando [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION") ou [MODIFY SELECTION](modify-selection.md "MODIFY SELECTION").

ACCEPT realiza a mesma ação que se um usuário tivesse pressionado a tecla Intro. Depois de que o formulário é aceito, a variável sistema OK toma o valor 1.

ACCEPT é executado com frequência como resultado da seleção de um comando de menu. ACCEPT é igualmente utilizado no método de objeto de um botão “sem ação”.

Este comando também pode ser utilizado no método de caixa de fechamento opcional de uma janela criada pelo comando [Open window](open-window.md "Open window"). Se houver uma caixa de controle de menu numa janela, se puder chamar a ACCEPT ou [CANCEL](cancel.md "CANCEL"), no método a executar, quando fizer duplo clique sobre a caixa de controle de menu ou for selecionado o comando de menu **Fechar**.

Não é possível concatenar vários ACCEPT. A execução consecutiva de dois comandos ACCEPT em um método terá o mesmo resultado que a execução de um só comando. 

##### Modo Headless 

**O comando ACCEPT** é permitido no modo headless (computador sem periféricos), no contexto de áreas offscreen criadas por *VP Run offscreen area* ou [WA Run offscreen area](wa-run-offscreen-area.md). 

#### Ver também 

[CANCEL](cancel.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 269 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


