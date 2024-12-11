---
id: get-current-printer
title: Get current printer
slug: /commands/get-current-printer
displayed_sidebar: docs
---

<!--REF #_command_.Get current printer.Syntax-->**Get current printer**  : Text<!-- END REF-->
<!--REF #_command_.Get current printer.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nome da impressora atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get current printer.Summary-->O comando Get current printer devolve o nome da impressora atual definida na aplicação 4D.<!-- END REF--> Como padrão, ao iniciar 4D, a impressora atual é a impressora definida no sistema.

Se a impressora atual for administrada utilizando um servidor de impressora (spooler), é devolvida a rota de acesso completa (em Windows) ou o nome do spooler (em Mac OS).

Para obter a lista de impressoras disponíveis assim como informação adicional, utilize o comando [PRINTERS LIST](printers-list.md) . Para modificar la impressora atual, utilize o comando [SET CURRENT PRINTER](set-current-printer.md)

**Nota:** Quando a constante Generic PDF driver for usada com [SET CURRENT PRINTER](set-current-printer.md), [Get current printer](get-current-printer.md) retorna "\_4d\_pdf\_printer" ou o nome do PDF driver

#### Gestão de erros 

Se não tiver uma impressora instalada, um erro é gerado

#### Ver também 

[PRINTERS LIST](printers-list.md)  
[SET CURRENT PRINTER](set-current-printer.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 788 |
| Thread-seguro | &check; |
| Proibido no servidor ||


