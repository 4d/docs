---
id: mail-convert-to-mime
title: MAIL Convert to MIME
slug: /commands/mail-convert-to-mime
displayed_sidebar: docs
---

<!--REF #_command_.MAIL Convert to MIME.Syntax-->**MAIL Convert to MIME** ( *mail* {; *options*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.MAIL Convert to MIME.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| mail | Object | &#x1F852; | Email object |
| options | Object | &#x1F852; | Charset and encoding mail options |
| Resultado | Text | &#x1F850; | Email object converted to MIME |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.MAIL Convert to MIME.Summary-->**Documentação movida**

A documentação desse comando foi substituída.<!-- END REF--> Consulte *developer.4d.com/docs* para obter uma documentação atualizada.

O comando **MAIL Convert to MIME** converte um objeto email em texto MIME. Este comando é anexado internamente por *transporter.send( )* para formatar o objeto email antes de enviar. Pode ser usado para analisar o formato MIME do objeto.
