---
id: soap-reject-new-requests
title: SOAP REJECT NEW REQUESTS
slug: /commands/soap-reject-new-requests
displayed_sidebar: docs
---

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Syntax-->**SOAP REJECT NEW REQUESTS** ( *rejeitarEstado* : Boolean )<!-- END REF-->
<!--REF #_command_.SOAP REJECT NEW REQUESTS.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rejeitarEstado | Boolean | &#8594; | True se novas petições forem rejeitadas, senão false |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|17 R4|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Summary-->O comando **SOAP REJECT NEW REQUESTS** especifica se o servidor de serviços web aceita ou não novas solicitações SOAP.<!-- END REF--> 

Em *estadoRecusar*, passe **True** para recusar as novas solicitações SOAP. Ao passar **False** se especificar que são permitidos novas solicitações SOAP.

**Nota**: este comando só pode ser executado em 4D Server. Se o método que chamar ao comando for executado localmente em um cliente remoto ou em um único usuário 4D, **SOAP REJECT NEW REQUESTS** não fizer nada.

## Exemplo 

Se quiser recusar qualquer petição nova a seu servidor de serviços web:

```4d
  //método a executar no servidor
 If(WEB Get server info.SOAPServerStarted)
    SOAP REJECT NEW REQUESTS(True)
 End if
```

## Ver também 

[REJECT NEW REMOTE CONNECTIONS](../commands/reject-new-remote-connections)  
[WEB Get server info](../commands/web-get-server-info)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1636 |
| Thread-seguro | yes |


