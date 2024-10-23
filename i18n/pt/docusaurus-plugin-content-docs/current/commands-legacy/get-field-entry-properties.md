---
id: get-field-entry-properties
title: GET FIELD ENTRY PROPERTIES
slug: /commands/get-field-entry-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Syntax-->**GET FIELD ENTRY PROPERTIES** ( pontCampo|numTabela {; *numCampo*}; *lista* ; *obrigatório* ; *nãoEditável* ; *nãoModificável* )<!-- END REF-->
<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| pontCampo&#124;numTabela | Ponteiro, Inteiro longo | &#8594;  | Ponteiro de campo ou número da tabela |
| numCampo | Integer | &#8594;  | Número de campo se o número da tabela for passado como primeiro parâmetro |
| lista | Text | &#8592; | Lista associada ao campo ou string vazia |
| obrigatório | Boolean | &#8592; | True = Obrigatório, False = Opcional |
| nãoEditável | Boolean | &#8592; | True=não editável, False = Editável |
| nãoModificável | Boolean | &#8592; | True = não modificável, False = modificável |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Summary-->O comando GET FIELD ENTRY PROPERTIES retorna as propriedades de entrada de dados para o campo especificado por *numTabela* e *numCampo* ou por *pontCampo*.<!-- END REF-->  
  
Pode passar:  
  
 \* números de tabela e de campo em *numTabela* e *numCamp*, ou   
 \* um ponteiro ao campo em *pontCampo.*.

**Nota**: este comando retorna as propriedades definidas a nível da janela de estrutura da banco. Propriedades similares podem ser definidas a nível dos formulários.  
  
Quando tiver executado o comando:  
* O parâmetro *list* *a* retorna o nome da lista associada ao campo (se houver). É possível associar uma lista aos seguintes tipos de campos: String, Texto, Real, Inteiro, Inteiro longo, Data, Hora e Booleano.  
Se nenhuma lista estiver associada ao campo ou se o tipo do campo não permitir a asociação de listas, uma string vazia ("") é retornada.
* O parâmetro *obrigatório* retorna True se o campo for “Obligatorio”; do contrário False. O atributo obrigatório pode ser associado a todo tipo de campos, exceto BLOB.
* O parâmetro *nãoEditável* retorna True se o campo dispôr do atributo “*nãoEditável*”, do contrário False. Un campo não editável unicamente pode ser lido, não aceita entrada de dados. O atributo “não editável” pode ser associado a campos de todos os tipos, exceto para os tipos BLOB.
* O parâmetro *nãoModificável* retorna True se o campo for “não modificável”, do contrário False. Un campo não modificável aceita apenas uma entrada e não pode ser modificado depois disso. O atributo “Não modificável” pode ser definido para todos os tipos de campos, exceto para BLOB.

#### Ver também 

[GET FIELD PROPERTIES](get-field-properties.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[GET TABLE PROPERTIES](get-table-properties.md)  