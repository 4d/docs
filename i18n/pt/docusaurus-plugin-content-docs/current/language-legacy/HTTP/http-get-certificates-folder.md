---
id: http-get-certificates-folder
title: HTTP Get certificates folder
slug: /commands/http-get-certificates-folder
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Get certificates folder.Syntax-->**HTTP Get certificates folder**  : Text<!-- END REF-->
<!--REF #_command_.HTTP Get certificates folder.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Rota completa da pasta de certificados ativa |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|14|Criado por|

</details>
</div>

:::info Compatibilidade

Esse comando é mantido apenas por motivos de compatibilidade. Agora é recomendável usar [`4D.HTTPRequest class`](../../API/HTTPRequestClass.md).

:::

## Descrição 

<!--REF #_command_.HTTP Get certificates folder.Summary-->O comando **HTTP Get certificates folder** devolve a rota completa da pasta de certificados ativa do cliente.<!-- END REF--> 

## Exemplo 

Você quer mudar temporalmente a pasta de certificados:

```4d
 var $certifFolder : Text
 $certifFolder :=HTTP Get certificates folder //guardar pasta atual
 HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")
 ... // Execução de petições específicas
 HTTP SET CERTIFICATES FOLDER($certifFolder) //restabelecer a pasta anterior
```

## Ver também 

[HTTP SET CERTIFICATES FOLDER](../commands/http-set-certificates-folder)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1307 |
| Thread-seguro | yes |


