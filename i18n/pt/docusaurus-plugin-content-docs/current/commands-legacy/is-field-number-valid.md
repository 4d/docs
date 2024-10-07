---
id: is-field-number-valid
title: Is field number valid
slug: /commands/is-field-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is field number valid.Syntax-->**Is field number valid** ( numTabela|pontTabela ; *numCampo* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Is field number valid.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numTabela&#124;pontTabela | Inteiro longo, Ponteiro | &#x1F852; | Número da tabela ou ponteiro a tabela |
| numCampo | Integer | &#x1F852; | Número do campo |
| Resultado | Boolean | &#x1F850; | True = Campo exista na tabela; False = campo não existe na tabela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is field number valid.Summary-->O comando Is field number valid retorna True se o campo cujo número for passado no parâmetro *numCampo* existe na tabela cujo número ou ponteiro for passado no parâmetro *numTabela* ou *ponTabela*.<!-- END REF--> Se o campo não existir, o comando retorna False. Lembre que o comando retorna False se a tabela que contiver o campo for encontrada na Lixeira do Explorador.  
  
Este comando permite detectar as eventuais eliminações de campos, que criam quebras na sequência de números dos campos.

#### Ver também 

[Get last table number](get-last-table-number.md)  
[Is table number valid](is-table-number-valid.md)  