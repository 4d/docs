---
id: object-get-title
title: OBJECT Get title
slug: /commands/object-get-title
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get title.Syntax-->**OBJECT Get title** ( {* ;} *objeto* ) -> Resultado<!-- END REF-->
<!--REF #_command_.OBJECT Get title.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#x1F852; | se especificado, objueto é um nome de objeto (string), se omitido, objeto é uma variável ou campo |
| objeto | any | &#x1F852; | Nome de objeto (se * é especificado) ou variável ou campo (se * for omitido) |
| Resultado | Text | &#x1F850; | Título do botão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get title.Summary-->O comando OBJECT Get title devolve o título (etiqueta) do objeto de formulário designado por *objeto* .<!-- END REF--> Você pode usar esse comando com todos os objetos simples que tenham uma etiqueta:   

* botões,
* caixas de seleção
* botões de opção
* texto estático
* áreas de grupo.

Se passar o parâmetro opcional *\**, indica que o parâmetro *objeto é* um nome de objeto (string). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável (campo ou variável objeto únicamente) ao invés de uma string. 

#### Ver também 

[OBJECT SET TITLE](object-set-title.md)  