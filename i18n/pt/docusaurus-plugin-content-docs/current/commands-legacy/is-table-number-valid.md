---
id: is-table-number-valid
title: Is table number valid
slug: /commands/is-table-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is table number valid.Syntax-->**Is table number valid** ( *numTabela* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Is table number valid.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numTabela | Integer | &#x1F852; | Número de tabela |
| Resultado | Boolean | &#x1F850; | True = tabela existe no banco de dados; False = tabela não existe no banco de dados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is table number valid.Summary-->O comando Is table number valid retorna True se a tabela cujo número for passado no parâmetro *numTabela* existe no banco, do contrário False.<!-- END REF--> Lembre que o comando retorna False se a tabela estiver na Lixeira do Explorador.  
  
Este comando permite detectar as eventuais eliminações de tabelas, que criam quebras na sequência de números das tabelas.

#### Ver também 

[Get last table number](get-last-table-number.md)  
[Is field number valid](is-field-number-valid.md)  