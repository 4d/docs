---
id: object-get-three-states-checkbox
title: OBJECT Get three states checkbox
slug: /commands/object-get-three-states-checkbox
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get three states checkbox.Syntax-->**OBJECT Get three states checkbox** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get three states checkbox.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| Resultado | Boolean | &#8592; | True = caixa de seleção de três estados, False = caixa de seleção padrão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get three states checkbox.Summary-->O comando **OBJECT Get three states checkbox** devolve o estado atual da propriedade "Três estados" da(s) caixa(s) de seleção designada(s) pelos parâmetros *objeto* e *\** .<!-- END REF-->

A propriedade "Três estados" se pode definir seja usando a lista de propriedades, ou utilizando o comando [OBJECT SET THREE STATES CHECKBOX](object-set-three-states-checkbox.md) se chama no processo atual.

#### Ver também 

[OBJECT SET THREE STATES CHECKBOX](object-set-three-states-checkbox.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1250 |
| Thread-seguro | &check; |
| Proibido no servidor ||


