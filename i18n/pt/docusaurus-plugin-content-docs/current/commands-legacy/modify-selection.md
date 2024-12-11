---
id: modify-selection
title: MODIFY SELECTION
slug: /commands/modify-selection
displayed_sidebar: docs
---

<!--REF #_command_.MODIFY SELECTION.Syntax-->**MODIFY SELECTION** ( {*tabela*}{; *modoSelecao*}{; *entraLista*}{; *}{; *} )<!-- END REF-->
<!--REF #_command_.MODIFY SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela a exibir e modificar, ou tabela padrão, se omitido |
| modoSelecao | Integer | &#8594;  | Modo seleção |
| entraLista | Boolean | &#8594;  | Permite Enter na lista opção |
| * | Operator |  &#8594;  | Use formulário de saída para uma seleção de registros e esconder as barras de rolagem no formulário de entrada |
| * | Operator |  &#8594;  | Mostrar barras de rolagem no formulário de entrada (desativa segunda opção ou o primeiro * opcional) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.MODIFY SELECTION.Summary-->MODIFY SELECTION é quase idêntico ao comando [DISPLAY SELECTION](display-selection.md).<!-- END REF--> Consulte a descrição do comando [DISPLAY SELECTION](display-selection.md) para uma descrição detalhada. As diferenças entre os dois comandos são: .   
  
1\. [DISPLAY SELECTION](display-selection.md) e MODIFY SELECTION permite mostrar os registros da seleção atual em modo listado ou no formulário de entrada ao fazer duplo clique em um registro. Utilizando MODIFY SELECTION, também pode modificar os campos do registro no formulário de entrada quando faz duplo clique no registro, (se não estiver sendo utilizado por outro processo ou usuário) ou em modo "Entrada em lista" (se está autorizado).  
  
2\. [DISPLAY SELECTION](display-selection.md) carrega os registros em modo apenas leitura no processo atual, o qual significa que não estão bloqueados para escritura nos outros processos. MODIFY SELECTION coloca todos os registros da seleção em modo leitura-escritura, o que significa que são bloqueados automaticamente para escritura em outros processos. MODIFY SELECTION libera os registros quando termina sua execução.

#### Ver também 

*Conjuntos*  
[DISPLAY SELECTION](display-selection.md)  
[Form event code](../commands/form-event-code.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 204 |
| Thread-seguro | &check; |
| Proibido no servidor ||


