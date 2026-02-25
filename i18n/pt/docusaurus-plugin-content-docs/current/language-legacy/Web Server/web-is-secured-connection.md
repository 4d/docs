---
id: web-is-secured-connection
title: WEB Is secured connection
slug: /commands/web-is-secured-connection
displayed_sidebar: docs
---

<!--REF #_command_.WEB Is secured connection.Syntax-->**WEB Is secured connection**  : Boolean<!-- END REF-->
<!--REF #_command_.WEB Is secured connection.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True = se a conexão web for segura, False = se a conexão web não for segura |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|13|Renomear|
|6.7|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.WEB Is secured connection.Summary-->O comando WEB Is secured connection retorna um booleano indicando se a conexão ao servidor web 4D se realiza em modo seguro através de TLS/SSL (a petição começa com “https:” ao invés de “http:”).<!-- END REF-->  

* Se a conexão se realiza em TLS/SSL, a função retorna True.
* Se a conexão se realiza em modo não seguro, a função retorna False.

**Nota**: Para maior informação sobre o protocolo TLS, consulte a seção [WEB SERVICE SET PARAMETER](../commands/web-service-set-parameter).   
  
Este comando permite, por exemplo, recusar as tentativas de conexão em modo não seguro.

## Ver também 

[GENERATE CERTIFICATE REQUEST](../commands/generate-certificate-request)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 698 |
| Thread-seguro | yes |


