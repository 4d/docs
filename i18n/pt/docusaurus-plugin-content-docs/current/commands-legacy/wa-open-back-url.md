---
id: wa-open-back-url
title: WA OPEN BACK URL
slug: /commands/wa-open-back-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN BACK URL.Syntax-->**WA OPEN BACK URL** ( {* ;} *objeto* )<!-- END REF-->
<!--REF #_command_.WA OPEN BACK URL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WA OPEN BACK URL.Summary-->O comando WA OPEN BACK URL carrega na área web designada pelos parâmetros *\** e *objeto* a URL antecedente na sequência das URLs abertos.<!-- END REF-->  
  
Se não houver um URL antecedente, o comando não faz nada. Pode testar a disponibilidade de uma URL antecedente com a ajuda do comando [WA Back URL available](wa-back-url-available.md)

#### Ver também 

[WA OPEN FORWARD URL](wa-open-forward-url.md)  
[WA OPEN URL](wa-open-url.md)  