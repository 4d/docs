---
id: get-automatic-relations
title: GET AUTOMATIC RELATIONS
slug: /commands/get-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.GET AUTOMATIC RELATIONS.Syntax-->**GET AUTOMATIC RELATIONS** ( *um* ; *muitos* )<!-- END REF-->
<!--REF #_command_.GET AUTOMATIC RELATIONS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| um | Boolean | &#8592; | Estado de todas as relações Muitos a Um |
| muitos | Boolean | &#8592; | Estado de todas as relações Um a Muitos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET AUTOMATIC RELATIONS.Summary-->O comando GET AUTOMATIC RELATIONS lhe permite saber se o estado automático/manual de todas as relações manuais Muitos a Um e Um a Muitos do banco tenham sido modificadas no processo atual.<!-- END REF-->

* *um*: este parâmetro devolve [True](true.md "True") se uma chamada anterior ao comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") torna automáticas todas as relações manuais Muitos a Um, por exemplo SET AUTOMATIC RELATIONS(True;False).
Este parâmetro devolve [False](false.md "False") se o comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") não foi chamado ou se sua execução prévia não modificou as relações manuais Muitos a Um, por exemplo SET AUTOMATIC RELATIONS(False;False). 
* *muitos*: este parâmetro devolve [True](true.md "True") se a chamada prévia ao comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") torna automática todas as relações manuais Um a Muitos, por exemplo SET AUTOMATIC RELATIONS(True;True).
Este parâmetro devolve [False](false.md "False") se o comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") não foi chamado ou se sua execução prévia não modificou as relações manuais Um a Muitos, por exemplo SET AUTOMATIC RELATIONS(True;False).

#### Exemplo 

Consulte o exemplo do comando [GET FIELD RELATION](get-field-relation.md "GET FIELD RELATION").

#### Ver também 

[GET FIELD RELATION](get-field-relation.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 899 |
| Thread-seguro | &check; |


