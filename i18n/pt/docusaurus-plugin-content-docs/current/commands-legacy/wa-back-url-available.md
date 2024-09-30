---
id: wa-back-url-available
title: WA Back URL available
slug: /commands/wa-back-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Back URL available.Syntax-->**WA Back URL available** ( {* ;} *objeto* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WA Back URL available.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#x1F852; | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | Objeto de formulário | &#x1F852; | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| Resultado | Booleano | &#x1F850; | TRUE se houver uma URL anterior na sequência de URLs abertas; senão, FALSE |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA Back URL available.Summary-->O comando WA Back URL available descobre se existe uma URL anterior disponível na sequência de URLs abertas na área web designada pelos parâmetros \* e *objeto*.<!-- END REF-->  

O comando retorna *True* se existe uma URL e do contrário *False*. Particularmente, este comando pode ser utilizado em uma interface personalizada, para ativar ou desativar os botões de navegação.

#### Ver também 

[WA Forward URL available](wa-forward-url-available.md)  
[WA OPEN BACK URL](wa-open-back-url.md)  