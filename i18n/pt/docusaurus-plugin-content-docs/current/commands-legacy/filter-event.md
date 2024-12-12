---
id: filter-event
title: FILTER EVENT
slug: /commands/filter-event
displayed_sidebar: docs
---

<!--REF #_command_.FILTER EVENT.Syntax-->**FILTER EVENT**<!-- END REF-->
<!--REF #_command_.FILTER EVENT.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.FILTER EVENT.Summary-->O comando **FILTER EVENT** deve ser chamado desde o interior do método de gestão de eventos instalado utilizando o comando [ON EVENT CALL](on-event-call.md).<!-- END REF-->

Sem um método de gestão de eventos chama a **FILTER EVENT**, o evento atual não passa a 4D.

Este comando lhe permite remover o evento atual (por exemplo, clique, digitação de teclas) da sequência de eventos, de modo que 4D não realize nenhum tratamento adicional que provocou no método de gestão de eventos.

**Advertência:** evite criar um método de gestão de eventos que só chame ao comando **FILTER EVENT**, porque todos os eventos vão ser ignorados por 4D. Caso tenha um método de gestão de eventos com o comando **FILTER EVENT** somente, digite Ctrl+Shift+Back (em Windows) ou comando-Opção-Shift-Control-Back (em Macintosh). Isso converte o processo On Event Call é um processo normal que não obtém eventos.

**Caso especial:** o comando **FILTER EVENT** pode igualmente ser utilizado em um método de formulário padrão quando o formulário seja visualizado utilizando os comandos [DISPLAY SELECTION](display-selection.md) ou [MODIFY SELECTION](modify-selection.md) . Neste caso específico, o comando **FILTER EVENT** lhe permite filtrar os duplo cliques nos registros (e desta maneira executar ações diferentes as de abertura dos registros em modo página).  
Para fazer isto, coloque as seguintes linhas no método do formulário de saída:

```4d
 If(Form event code=On Double Clicked)
    FILTER EVENT
    ... //Processar o duplo-clique
 End if
```

#### Exemplo 

Ver o exemplo do comando [ON EVENT CALL](on-event-call.md "ON EVENT CALL").

#### Ver também 

[ON EVENT CALL](on-event-call.md)  