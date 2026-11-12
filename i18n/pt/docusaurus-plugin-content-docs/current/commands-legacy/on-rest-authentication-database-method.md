---
id: on-rest-authentication-database-method
title: On REST Authentication database method
slug: /commands/on-rest-authentication-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On REST Authentication database method.Syntax-->$1, $2, $3, $4 -> On REST Authentication database method -> $0<!-- END REF-->
<!--REF #_command_.On REST Authentication database method.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| $1 | Texto | &#8592; | Nome de usuário |
| $2 | Texto | &#8592; | Senha |
| $3 | Booleano | &#8592; | True = modo Digest, False = modo Basic |
| $4 | Texto | &#8592; | Endereço IP do caller |
| $0 | Boolean | &#8592; | True = pedido aceito, False = pedido rejeitado |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|14|Created|
|14 R3|Renamed|
|18|Modified|
|18|Renamed|
|20 R6|Modified|

</details>
</div>

## Descrição 

<!--REF #_command_.On REST Authentication database method.Summary-->**On REST Authentication database method** está obsoleto em projetos desde 4D 20 R6.<!-- END REF-->

A [Force login authentication](../REST/authUsers.md) é recomendada em seu lugar. Em projetos convertidos, pode atualizar sua configuração clicando no botão das configurações [**Activate REST authentication through ds.authentify() function**](../settings/web.md#access) Veja também [este artigo](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/) para saber como migrar seu código se necessário.


