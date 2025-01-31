---
id: web-get-current-session-id
title: WEB Get Current Session ID
slug: /commands/web-get-current-session-id
displayed_sidebar: docs
---

<!--REF #_command_.WEB Get Current Session ID.Syntax-->**WEB Get Current Session ID**  : Text<!-- END REF-->
<!--REF #_command_.WEB Get Current Session ID.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | UUID da sessão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB Get Current Session ID.Summary-->O comando **WEB Get Current Session ID** devolve o ID da sessão aberta para a petição web.<!-- END REF--> Esta identificação é gerada automaticamente por 4D como um UUID.  
  
Se este comando se chama fora do contexto de uma sessão web, devolve uma cadeia vazia "".

#### Ver também 

[WEB LEGACY GET SESSION EXPIRATION](web-legacy-get-session-expiration.md)  
*Web Sessions Management (Legacy)*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1162 |
| Thread-seguro | &check; |


