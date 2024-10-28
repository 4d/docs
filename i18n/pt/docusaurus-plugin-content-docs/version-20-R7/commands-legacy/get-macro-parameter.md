---
id: get-macro-parameter
title: GET MACRO PARAMETER
slug: /commands/get-macro-parameter
displayed_sidebar: docs
---

<!--REF #_command_.GET MACRO PARAMETER.Syntax-->**GET MACRO PARAMETER** ( *seletor* ; *paramTexto* )<!-- END REF-->
<!--REF #_command_.GET MACRO PARAMETER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| seletor | Integer | &#8594;  | Seleção a usar |
| paramText | Text | &#8592; | Texto retornado |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.GET MACRO PARAMETER.Summary-->O comando GET MACRO PARAMETER retorna, no parâmetro *paramText*, uma parte ou a totalidade do texto do método desde o qual é chamado.<!-- END REF-->  
  
O parâmetro *seletor* permite definir o tipo de informação a recuperar. Pode passar uma das seguintes constantes, do tema “”:  
  
| Constante               | Tipo          | Valor |
| ----------------------- | ------------- | ----- |
| Full method text        | Inteiro longo | 1     |
| Highlighted method text | Inteiro longo | 2     |
  
  
Se passa Full method text em seletor, o texto inteiro do método em *paramText.* Se passa Highlighted method text em *seletor*, apenas o texto selecionado em método será devolvido em *paramText*.

#### Exemplo 

Consulte o exemplo do comando [SET MACRO PARAMETER](set-macro-parameter.md "SET MACRO PARAMETER").

#### Ver também 

[SET MACRO PARAMETER](set-macro-parameter.md)  