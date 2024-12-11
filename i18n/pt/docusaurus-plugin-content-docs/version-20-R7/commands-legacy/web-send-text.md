---
id: web-send-text
title: WEB SEND TEXT
slug: /commands/web-send-text
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND TEXT.Syntax-->**WEB SEND TEXT** ( *textoHTML* {; *semContexto*} )<!-- END REF-->
<!--REF #_command_.WEB SEND TEXT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| textoHTML | Text | &#8594;  | Texto do campo HTML ou variável a ser enviado ao navegador Web |
| semContexto | Text | &#8594;  | True = Vai para o modo não contextual se False; se omitido = permanece no modo atual. |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB SEND TEXT.Summary-->O comando WEB SEND TEXT enviar diretamente os dados de texto com formato HTML.<!-- END REF-->  

O parâmetro *textoHTML* contém os dados a enviar. Como 4D não realiza nenhum controle sobre o conteúdo deste parâmetro, tenha certeza de que a codificação HTML seja correta.  
  
As eventuais referências as variáveis 4D e etiquetas de tipo *4DSCRIPT* no texto sempre se analisam.

Por padrão, se omite o parâmetro *tipo*, 4D assume que os dados enviados são de tipo "text/html". O comando equivale exatamente ao envio de um BLOB de tipo "text/html" utilizando o comando [WEB SEND BLOB](web-send-blob.md). 

Também pode utilizar o parâmetro *tipo* para especificar o tipo MIME do texto a enviar. Para maior informação sobre os tipos MIME suportados, consulte a descrição do comando [WEB SEND BLOB](web-send-blob.md).

#### Exemplo 

O método abaixo: 

```4d
 TEXT TO BLOB(""+String(Current time)+"";$blob;UTF8 Text without length)
 WEB SEND BLOB($blob;"text/html")
```

... pode ser substituído por uma linha só

```4d
 WEB SEND TEXT(""+String(Current time)+"")
```

#### Ver também 

[WEB SEND BLOB](web-send-blob.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 677 |
| Thread-seguro | &check; |
| Proibido no servidor ||


