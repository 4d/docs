---
id: object-get-filter
title: OBJECT Get filter
slug: /commands/object-get-filter
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get filter.Syntax-->**OBJECT Get filter** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get filter.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável ou campo. |
| objeto | any | &#8594;  | Nome de objeto (se* for especificado) ou variável (se * é omitido) |
| Resultado | Text | &#8592; | Nome do filtro |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT Get filter.Summary-->O comando OBJECT Get filter devolve o nome de todo filtro associado com o objeto ou grupo de objetos designado por *objeto*.<!-- END REF-->  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro objeto é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passa uma referência de campo ou variável (campo ou variável objeto unicamente) ao invés de uma string.

#### Ver também 

[OBJECT SET FILTER](object-set-filter.md)  