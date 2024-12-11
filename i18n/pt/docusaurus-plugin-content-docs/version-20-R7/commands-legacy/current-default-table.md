---
id: current-default-table
title: Current default table
slug: /commands/current-default-table
displayed_sidebar: docs
---

<!--REF #_command_.Current default table.Syntax-->**Current default table**  : Pointer<!-- END REF-->
<!--REF #_command_.Current default table.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Pointer | &#8592; | Ponteiro a tabela padrão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Current default table.Summary-->Current default table retorna um ponteiro a tabela que foi passado na última chamada a [DEFAULT TABLE](default-table.md) para o processo atual.<!-- END REF-->

#### Exemplo 

Desde que uma tabela padrão tenha sido estabelecida, a linha de código abaixo estabelece o título de janela ao nome da tabela padrão atual:

```4d
 SET WINDOW TITLE(Table name(Current default table))
```

#### Ver também 

[DEFAULT TABLE](default-table.md)  
[Table](table.md)  
[Table name](table-name.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 363 |
| Thread-seguro | &check; |
| Proibido no servidor ||


