---
id: soap-request
title: SOAP request
slug: /commands/soap-request
displayed_sidebar: docs
---

<!--REF #_command_.SOAP request.Syntax-->**SOAP request**  : Boolean<!-- END REF-->
<!--REF #_command_.SOAP request.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True se a petição for SOAP; senão, FAlse |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SOAP request.Summary-->O comando SOAP request devolve True se o código em execução for parte de uma petição SOAP.<!-- END REF-->  

Este comando pode ser utilizado por razões de segurança no *On Web Authentication Database Method* para determinar a natureza das petições recebidas.

#### Ver também 

[SOAP DECLARATION](soap-declaration.md)  