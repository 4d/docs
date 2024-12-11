---
id: base64-encode
title: BASE64 ENCODE
slug: /commands/base64-encode
displayed_sidebar: docs
---

<!--REF #_command_.BASE64 ENCODE.Syntax-->**BASE64 ENCODE** ( *BLOB* {; *textoCodificado*}{; *} )<!-- END REF-->
<!--REF #_command_.BASE64 ENCODE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob, Text | &#8594;  | BLOB a codificar em formato Base64 |
| &#8592; | BLOB  codificado em formato Base64 |
| textoCodificado | Blob, Text | &#8592; | Resultado do BLOB codificado em formato Base64 |
| * | Operador | &#8594;  | Codificar no formato em Base64URL |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BASE64 ENCODE.Summary-->O comando **BASE64 ENCODE** codifica o texto ou BLOB passado no parâmetro em *aDecodificar* em formato base64 ou Base64URL.<!-- END REF-->

La codificación base64 modifica los datos codificados sobre 8 bits de manera que no conserven más de 7 bits útiles. Esta codificación es necesaria, por ejemplo, para la manipulación de BLOBs utilizando XML. Base64URL es una codificación alernativa con un procesamiento específico para las URLs y nombres de archivos (ver [rfc4648](https://tools.ietf.org/html/rfc4648#section-5)). 

Passe em *aCodificar* um valor texto ou blob a codificar.

**Nota:** quando passar um valor texto, o comando codifica a representação utf-8 do texto.

Se passar o parâmetro *textoEncode*, recebe os conteúdos do *blob* como texto ao final da execução do comando. Neste caso, o parâmetro *blob* mesmo não é modificado pelo comando.   
Se omitir o parâmetro *textoEncode*, o comando modifica diretamente o BLOB passado como parâmetro.  
  
Por padrão, se omitir o parâmetro *\**, o comando utiliza uma codificação Base64\. Se passa o parâmetro *\**, o comando utiliza uma codificação Base64URL.

#### Ver também 

[BASE64 DECODE](base64-decode.md)  
[Generate digest](generate-digest.md)  
*Visão Geral dos comandos XML DOM*  
[XML DECODE](xml-decode.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 895 |
| Thread-seguro | &check; |
| Proibido no servidor ||


