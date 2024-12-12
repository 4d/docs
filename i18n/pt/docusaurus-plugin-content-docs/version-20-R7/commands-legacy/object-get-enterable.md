---
id: object-get-enterable
title: OBJECT Get enterable
slug: /commands/object-get-enterable
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get enterable.Syntax-->**OBJECT Get enterable** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get enterable.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome objeto (string). Se omitido, objeto é uma variável ou um campo. |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou Variável ou campo (se * é omitido) |
| Resultado | Boolean | &#8592; | True = objeto editável, ou então, falso |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT Get enterable.Summary-->O comando OBJECT Get enterable devolve True se o objeto ou grupo de objetos designado por *objeto* tem o atributo **editável**; do contrário, devolve False.<!-- END REF--> 

Se passa o parâmetro opcional *\**, indica que o parâmetro objeto é um nome de objeto (string) Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passa uma referência de campo o variável (campo ou variável objeto unicamente) ao invés de uma string.

#### Ver também 

[OBJECT SET ENTERABLE](object-set-enterable.md)  