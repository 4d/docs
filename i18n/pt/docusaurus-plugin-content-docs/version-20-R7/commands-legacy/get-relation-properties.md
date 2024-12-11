---
id: get-relation-properties
title: GET RELATION PROPERTIES
slug: /commands/get-relation-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET RELATION PROPERTIES.Syntax-->**GET RELATION PROPERTIES** ( pontCampo|numTabela {; *numCampo*}; *Tabela* ; *Campo* {; *discriminante* {; *autoUm* {; *autoMuitos*}}} )<!-- END REF-->
<!--REF #_command_.GET RELATION PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| pontCampo&#124;numTabela | Ponteiro, Inteiro longo | &#8594;  | Ponteiro de campo ou número da tabela |
| numCampo | Integer | &#8594;  | Número de campo se o número da tabela for passado como primeiro parâmetro |
| Tabela | Integer | &#8592; | Nº de tabela ou 0 se nenhuma relação tiver sido definido para o campo |
| Campo | Integer | &#8592; | Número de campo ou 0 se nenhuma relação for definida para o campo. |
| discriminante | Integer | &#8592; | Número de campo discriminante ou 0 se nenhum campo |
| autoUm | Boolean | &#8592; | True = relação Um automática, False = Relação Um manual |
| autoMuitos | Boolean | &#8592; | True = relação Um para Muitos automática, False = Relação Um para Muitos manual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET RELATION PROPERTIES.Summary-->O comando GET RELATION PROPERTIES retorna as propriedades da relação (se houver) que começa do campo fonte definido por *numTabela* e *numCamp*o ou por *pontCampo*.<!-- END REF-->

Pode passar:

* Números de tabela e de campo en *numTabela* e *numCampo*,
* Ou um ponteiro ao campo em *pontCampo*.
Quando o comando tiver sido executado:  
  
* Os parâmetros *tabelaUm e campoUm* contem respectivamente o número da tabela e do campo aos quais aponta a relação (do campo fonte). Se nenhuma relação começa a partir do campo, este parâmetro retorna 0.
* O parâmetro *escolha* contém o número do campo escolhido (da tabela objetivo) definido dentro desta relação. Se não for definido um campo escolhido nessa relação, ou se nenhuma relação parte do campo fonte, este parâmetro retorna 0.
* Os parâmetro *autoUm e autoMuitos* retornam *True* se, respectivamente, as opções “Relação um a muitos automática” e “Relação muitos a um automática” forem selecionadas para esta relação; do contrário, retornam *False*.
**Nota**: os parâmetros *autoUm* e *autoMuitos* também devolverão *True* se nenhuma relação parte do campo fonte (nesse caso retornam valores não significativos.). O valor dos parâmetros t*abelaUno e campUno* permitem assegurar de que uma relação existe.

#### Ver também 

[GET FIELD ENTRY PROPERTIES](get-field-entry-properties.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[GET TABLE PROPERTIES](get-table-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  
[SET FIELD RELATION](set-field-relation.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 686 |
| Thread-seguro | &check; |
| Proibido no servidor ||


