---
id: object-get-font
title: OBJECT Get font
slug: /commands/object-get-font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font.Syntax-->**OBJECT Get font** ( {* ;} *objeto* ) -> Resultado<!-- END REF-->
<!--REF #_command_.OBJECT Get font.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#x1F852; | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável ou campo |
| objeto | Objeto de formulário | &#x1F852; | Nome de objeto (se * for especificado) ou Variável ou campo (se * for omitido). |
| Resultado | Texto | &#x1F850; | Nome da fonte |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get font.Summary-->O comando OBJECT Get font devolve o nome da fonte utilizada pelo objeto de formulário designado por *objeto*.<!-- END REF-->

Se passa o parâmetro opcional *\**, indica que o parâmetro objeto é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto é* um campo ou uma variável. Neste caso, se passa uma referência de campo ou variável (campo ou variável objeto unicamente) ao invés de uma string.

#### Ver também 

[OBJECT SET FONT](object-set-font.md)  