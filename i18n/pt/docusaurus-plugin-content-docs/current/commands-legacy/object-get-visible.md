---
id: object-get-visible
title: OBJECT Get visible
slug: /commands/object-get-visible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get visible.Syntax-->**OBJECT Get visible** ( {* ;} *objeto* ) -> Resultado<!-- END REF-->
<!--REF #_command_.OBJECT Get visible.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &srarr; | se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável ou campo |
| objeto | any | &srarr; | Nome de objeto (se * for especificado) ou variável ou campo (se * é omitido) |
| Resultado | Boolean | &larr; | True = objeto visível , ou então False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get visible.Summary-->O comando OBJECT Get visible devolve True se o objeto ou grupo de objetos designado por *objeto* tem o atributo visível e do contrário False.<!-- END REF-->  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto é* um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passa uma referência de campo ou variável (campo ou variável objeto únicamente) ao invés de uma string. 

#### Ver também 

[OBJECT SET VISIBLE](object-set-visible.md)  