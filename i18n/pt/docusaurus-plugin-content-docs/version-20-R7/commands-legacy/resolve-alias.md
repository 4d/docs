---
id: resolve-alias
title: RESOLVE ALIAS
slug: /commands/resolve-alias
displayed_sidebar: docs
---

<!--REF #_command_.RESOLVE ALIAS.Syntax-->**RESOLVE ALIAS** ( *rotaAlias* ; *rotaObjetivo* )<!-- END REF-->
<!--REF #_command_.RESOLVE ALIAS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaAlias | Text | &#8594;  | Nome ou rota de acesso do alias/atalho |
| rotaObjetivo | Text | &#8592; | Nome ou rota de acesso do alias/atalho alvo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RESOLVE ALIAS.Summary-->O comando RESOLVE ALIAS retorna a rota completa do arquivo ou pasta objetivo de um alias (chamado atalho em Windows).<!-- END REF-->  

Em *rotaAlias* se passa o nome ou rota de acesso completa do alias.  
  
Uma vez executado o comando, a variável *rotaObjetivo* contém a rota de acesso completa ao arquivo ou pasta do alias e a variável sistema OK toma o valor 1.  
  
Se a rota for passada em *rotaAlias* corresponde a um arquivo e não a um alias, *rotaObjetivo* retorna a rota de acesso do arquivo e a variável sistema OK toma o valor 0.

#### Variáveis e conjuntos do sistema 

Se *rotaAlias* especifica um alias/atalho, a variável sistema OK assume o valor 1\. Se *rotaAlias* especifica um arquivo padrão, a variável sistema OK assume o valor 0.

#### Ver também 

[CREATE ALIAS](create-alias.md)  