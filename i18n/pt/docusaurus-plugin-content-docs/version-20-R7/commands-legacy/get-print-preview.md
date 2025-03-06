---
id: get-print-preview
title: Get print preview
slug: /commands/get-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Get print preview.Syntax-->**Get print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Get print preview.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True = Vista previa de impressão, <br/>False = Não vista previa de impressão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get print preview.Summary-->O comando **Get print preview** devolve True se o comando [SET PRINT PREVIEW](set-print-preview.md) foi chamado com o valor **True** no processo atual.<!-- END REF-->

Note que o usuário pode modificar esta opção antes de validar a caixa de diálogo. Para obter o modo final de impressão, deve utilizar o comando [Is in print preview](is-in-print-preview.md). 

#### Ver também 

[Is in print preview](is-in-print-preview.md)  
[SET PRINT PREVIEW](set-print-preview.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1197 |
| Thread-seguro | &cross; |


