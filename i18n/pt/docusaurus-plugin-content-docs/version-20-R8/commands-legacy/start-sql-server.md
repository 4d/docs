---
id: start-sql-server
title: START SQL SERVER
slug: /commands/start-sql-server
displayed_sidebar: docs
---

<!--REF #_command_.START SQL SERVER.Syntax-->**START SQL SERVER**<!-- END REF-->
<!--REF #_command_.START SQL SERVER.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.START SQL SERVER.Summary-->O comando START SQL SERVER lança o servidor SQL integrado da aplicação 4D na qual é executado.<!-- END REF--> Quando for lançado, o servidor SQL pode responder às pesquisas SQL externas.  
  
**Nota**: este comando não afeta o funcionamento do motor SQL interno de 4D. O motor SQL sempre está disponível para as pesquisas internas.

#### Variáveis e conjuntos do sistema 

Se o servidor SQL tiver sido lançado corretamente, a variável Sistema OK assume o valor 1, do contrário assume o valor 0.

#### Ver também 

[STOP SQL SERVER](stop-sql-server.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 962 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


