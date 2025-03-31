---
id: on-4d-mobile-authentication-database-method
title: On 4D Mobile Authentication database method
slug: /commands/on-4d-mobile-authentication-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On 4D Mobile Authentication database method.Syntax-->$1, $2, $3, $4 -> On 4D Mobile Authentication database method : Boolean<!-- END REF-->
<!--REF #_command_.On 4D Mobile Authentication database method.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| $1 | Texto | &#8592; | Nome de usuário |
| $2 | Texto | &#8592; | Senha |
| $3 | Booleano | &#8592; | True = modo Digest, False = modo Basic |
| $4 | Texto | &#8592; | Endereço IP do caller |
| Resultado | Boolean | &#8592; | True = pedido aceito, False = pedido rejeitado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.On 4D Mobile Authentication database method.Summary-->**On 4D Mobile Authentication database method** está obsoleto em projetos desde 4D 20 R6.<!-- END REF-->

A [Force login authentication](../REST/authUsers.md) é recomendada em seu lugar. Em projetos convertidos, pode atualizar sua configuração clicando no botão das configurações [**Activate REST authentication through ds.authentify() function**](../settings/web.md#access) Veja também [este artigo](https://blog.4d.com/force-login-now-is-the-default-mode-for-all-rest-authentications) para saber como migrar seu código se necessário.
