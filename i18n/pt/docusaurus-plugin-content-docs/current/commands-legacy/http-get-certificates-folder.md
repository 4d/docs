---
id: http-get-certificates-folder
title: HTTP Get certificates folder
slug: /commands/http-get-certificates-folder
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Get certificates folder.Syntax-->**HTTP Get certificates folder**  -> Resultado<!-- END REF-->
<!--REF #_command_.HTTP Get certificates folder.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &larr; | Rota completa da pasta de certificados ativa |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.HTTP Get certificates folder.Summary-->O comando **HTTP Get certificates folder** devolve a rota completa da pasta de certificados ativa do cliente.<!-- END REF--> 

#### Exemplo 

Você quer mudar temporalmente a pasta de certificados:

```4d
 var $certifFolder : Text
 $certifFolder :=HTTP Get certificates folder //guardar pasta atual
 HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")
 ... // Execução de petições específicas
 HTTP SET CERTIFICATES FOLDER($certifFolder) //restabelecer a pasta anterior
```

#### Ver também 

[HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md)  