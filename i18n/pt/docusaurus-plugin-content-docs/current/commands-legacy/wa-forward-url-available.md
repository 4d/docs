---
id: wa-forward-url-available
title: WA Forward URL available
slug: /commands/wa-forward-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Forward URL available.Syntax-->**WA Forward URL available** ( {* ;} *objeto* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WA Forward URL available.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#x1F852; | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#x1F852; | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| Resultado | Boolean | &#x1F850; | TRUE se houver uma URL depois da sequencia de URLs abertas; senão, FALSE |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA Forward URL available.Summary-->O comando WA Forward URL available permite conhecer se existe uma URL seguinte disponível na sequência de URLs abertas na área web designada pelos parâmetros *\** e *objeto*.<!-- END REF-->  
  
O comando retorna *True* se existir um URL e do contrário *False*. Particularmente, este comando pode ser utilizado, em uma interface personalizada, ativar ou desativar os botões de navegação.

#### Ver também 

[WA Back URL available](wa-back-url-available.md)  
[WA OPEN FORWARD URL](wa-open-forward-url.md)  