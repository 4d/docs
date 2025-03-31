---
id: object-get-font-size
title: OBJECT Get font size
slug: /commands/object-get-font-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font size.Syntax-->**OBJECT Get font size** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get font size.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável ou campo. |
| objeto | any | &#8594;  | Nome de objeto (se * é especificado) ou Variável ou Campo (se * é omitido). |
| Resultado | Integer | &#8592; | Tamanho de fonte em pontos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get font size.Summary-->O comando OBJECT Get font size devolve o tamanho (em pontos) da fonte utilizada pelo objeto de formulário designado por *objeto*.<!-- END REF--> 

Se passa o parâmetro opcional *\**, indica que o parâmetro objeto é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, é passada uma referência de campo ou variável (campo ou variável objeto unicamente) ao invés de uma string.

#### Ver também 

[OBJECT SET FONT SIZE](object-set-font-size.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1070 |
| Thread-seguro | &cross; |


