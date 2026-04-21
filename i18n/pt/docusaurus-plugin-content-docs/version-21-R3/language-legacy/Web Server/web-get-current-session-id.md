---
id: web-get-current-session-id
title: WEB Get current session ID
slug: /commands/web-get-current-session-id
displayed_sidebar: docs
---

<!--REF #_command_.WEB Get current session ID.Syntax-->**WEB Get current session ID**  : Text<!-- END REF-->
<!--REF #_command_.WEB Get current session ID.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | UUID da sessão |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|13|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.WEB Get current session ID.Summary-->O comando **WEB Get current session ID** devolve o ID da sessão aberta para a petição web.<!-- END REF--> Esta identificação é gerada automaticamente por 4D como um UUID.  
  
Se este comando se chama fora do contexto de uma sessão web, devolve uma cadeia vazia "".

## Ver também 

[WEB LEGACY GET SESSION EXPIRATION](../commands/web-legacy-get-session-expiration)  
*Web Sessions Management (Legacy)*  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1162 |
| Thread-seguro | yes |


