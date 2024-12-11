---
id: wa-open-forward-url
title: WA OPEN FORWARD URL
slug: /commands/wa-open-forward-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN FORWARD URL.Syntax-->**WA OPEN FORWARD URL** ( {* ;} *objeto* )<!-- END REF-->
<!--REF #_command_.WA OPEN FORWARD URL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA OPEN FORWARD URL.Summary-->O comando WA OPEN FORWARD URL carrega na área web designada pelos parâmetros \* e *objeto* a URL passada no parâmetro url.<!-- END REF-->  

 Se for passada uma string vazia em url, o comando [WA Forward URL available](wa-forward-url-available.md) não faz nada e não é gerado nenhum erro. Para carregar uma página vazia na área web, passe a cadeia "about:blank" em url.  

#### Ver também 

[WA OPEN BACK URL](wa-open-back-url.md)  
[WA OPEN URL](wa-open-url.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1022 |
| Thread-seguro | &check; |
| Proibido no servidor ||


