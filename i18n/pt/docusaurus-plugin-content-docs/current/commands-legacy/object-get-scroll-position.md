---
id: object-get-scroll-position
title: OBJECT GET SCROLL POSITION
slug: /commands/object-get-scroll-position
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SCROLL POSITION.Syntax-->**OBJECT GET SCROLL POSITION** ( {* ;} *objeto* ; *vPosicao* {; *hPosicao*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET SCROLL POSITION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificar, objeto é um nome de objeto (string) se omitir, objeto é uma variável, um campo ou uma tabela. |
| objeto | any | &#8594;  | Nome de objeto (se * é especificado) ou variável ou campo ou tabela (se * é omitido) |
| vPosicao | Integer | &#8592; | Número da primeira linha exibido ou deslocamento vertical em pixels (imagens) |
| hPosicao | Integer | &#8592; | Número da primeira coluna exibido ou rolagem horizontal em pixels (imagens) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT GET SCROLL POSITION.Summary-->OBJECT GET SCROLL POSITION devolve, nos parâmetros *vPosição* e *hPosição*, informação relacionada com a posição das barras de rolagem do objeto de formulário designado pelos parâmetros *\** e *objeto*.<!-- END REF-->

Se você passar o parâmetro opcional *\**, indica que o parâmetro objeto é o nome do objeto do subformulário, lista hierárquica, área de rolagem, list box ou tipo imagem (nesse caso, passe uma string no objeto). Se você não passa esse parâmetro, você indica que o parâmetro objeto é uma tabela (formulário lista ou subformulário de tabela) ou uma variável (ListRef ou lista hierárquica, imagem ou variável list box ) ou um campo.

**Nota:** com objetos tipo subformulário, só a sintaxe usando um *\** é compatível. 

Se *objeto* designa um objeto de tipo lista (subformulário, formulário lista, lista hierárquica, área de rolagem ou list box), vPosicao, retorna o número da primeira linha exibida no objeto. hPosicao (list box apenas) retorna o número da primeira coluna que é completamente visível na parte esquerda da list box. Com outros tipos de objetos, esse parâmetro retorna 0.

Se *objeto* designa uma imagem (variável ou campo), *vPosição* retorna o movimento vertical e *hPosition* o movimento horizontal da imagem. Esses valores são expressos em pixels com respeito a origem da imagem no sistema de coordenadas local.

#### Ver também 

[OBJECT SET SCROLL POSITION ](object-set-scroll-position.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1114 |
| Thread-seguro | &check; |
| Proibido no servidor ||


