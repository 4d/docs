---
id: get-table-properties
title: GET TABLE PROPERTIES
slug: /commands/get-table-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE PROPERTIES.Syntax-->**GET TABLE PROPERTIES** ( ponTabela|NumTabela ; *invisivel* {; *trigSalvarNovo* {; *trigSalvarRegistro* {; *trigApagarRegistro* {; *trigCarregarRegistro*}}}} )<!-- END REF-->
<!--REF #_command_.GET TABLE PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| ponTabela&#124;NumTabela | Ponteiro, Inteiro longo | &#8594;  | Ponteiro de tabela ou número de tabela |
| invisivel | Boolean | &#8592; | True = invisível, False = visível |
| trigSalvarNovo | Boolean | &#8592; | True = Trigger "On saving new record" ativado; senão, False |
| trigSalvarRegistro | Boolean | &#8592; | True = Trigger "On saving an existing record" ativado; senão, False |
| trigApagarRegistro | Boolean | &#8592; | True = Trigger "On deleting a record" ativado; senão, False |
| trigCarregarRegistro | Boolean | &#8592; | *** Não usar (obsoleto) *** |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET TABLE PROPERTIES.Summary-->O comando GET TABLE PROPERTIES retorna as propriedades da tabela passada por *pontTabela* ou *numTabela*.<!-- END REF--> Pode passar no primeiro parâmetro o número de tabela ou ponteiro da tabela.  
  
Una vez executado o comando:

* O parâmetro *invisível* retorna True se o atributo “Invisible” tiver sido definido para a tabela, do contrário False. O atributo invisível permite ocultar a tabela nos editores padrão de 4D (etiquetas, gráficos...).
* O parâmetro *trigSalvarNovo* retorna True se o trigger “On saving new record” for ativado para a tabela, do contrário False.
* O parâmetro *trigSalvarReg* retorna True se o trigger “On saving an existing record” for ativado para a tabela, do contrário False.
* O parâmetro *trigApagarReg* retorna True se o trigger “On deleting a record” for ativado para esta tabela, do contrário False.

#### Ver também 

[GET FIELD ENTRY PROPERTIES](get-field-entry-properties.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 687 |
| Thread-seguro | &check; |
| Proibido no servidor ||


