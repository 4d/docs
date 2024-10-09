---
id: mail-new-attachment
title: MAIL New attachment
slug: /commands/mail-new-attachment
displayed_sidebar: docs
---

<!--REF #_command_.MAIL New attachment.Syntax-->**MAIL New attachment** ( *valor* {; *nome* {; *cid* {; *tipo* {; *disposição*}}}} ) -> Resultado<!-- END REF-->
<!--REF #_command_.MAIL New attachment.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| valor | Text, Blob, Object | &srarr; | Objeto (arquivo 4D, arquivo 4Dzip, blob 4D) ou rota do arquivo anexado (texto) ou blob contendo o anexo (BLOB) |
| nome | Text | &srarr; | Nome + extensão usada pelo cliente email para designar o anexo |
| cid | Text | &srarr; | ID do anexo (apenas mensagens HTML) ou "" se nenhum cid for exigido |
| tipo | Text | &srarr; | Valor de cabeçalho tipo conteúdo |
| disposição | Text | &srarr; | Valor do cabeçalho disposição conteúdo "inline" ou "anexo" |
| Resultado | Object | &larr; | Objeto anexo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.MAIL New attachment.Summary-->**Documentação movida**

A documentação para esse comando foi movida.<!-- END REF--> Visite *developer.4d.com* para documentação atualizada.

O comando **MAIL New attachment** permite criar um objeto anexo que pode adicioanr a um objeto *Email* object (ver *transporter.send( )*)
