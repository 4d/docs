---
id: web-send-blob
title: WEB SEND BLOB
slug: /commands/web-send-blob
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND BLOB.Syntax-->**WEB SEND BLOB** ( *BLOB* ; *tipo* )<!-- END REF-->
<!--REF #_command_.WEB SEND BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | Blob a enviar ao browser |
| tipo | Text | &#8594;  | Tipo de dados do BLOB |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB SEND BLOB.Summary-->O comando **WEB SEND BLOB** permite enviar o BLOB *blob* ao navegador.<!-- END REF-->  
  
O tipo de dados contidos no BLOB é indicado por *tipo*. Este parâmetro pode conter os seguintes valores:  

* *tipo* \= **String vazia** (""): neste caso, não necessita dar mais informação no BLOB. O navegador tentará interpretar os conteúdos do BLOB.
* *tipo* \= **Extensão de arquivo** (Exemplo: ".HTM", ".GIF", ".JPEG", etc.): neste caso, especifique o navegador, por sua extensão, o tipo MIME dos dados contidos no BLOB. O BLOB será interpretado de acordo com sua extensão. Entretanto, a extensão deve ser padrão para que o navegador possaa interpretá-lo corretamente.
* *tipo* \= **Mime/Tipo** (Exemplo: “text/html”, “image/tiff”, etc.): neste caso, especifique diretamente ao navegador o tipo MIME dos dados contidos no BLOB. Esta solução oferece mais liberdade. Além disso, os tipos padrão, pode passar um tipo MIME personalizado para enviar os documentos proprietarios em Intranet. Para fazer isso, só necessita configurar os navegadores com o fim de reconhecer o tipo enviado e executar a aplicação correspondente. O valor a passar no parâmetro tipo é, neste caso, “application/x-\[NomeTipo\]”. No navegador da máquina cliente, você referencia este tipo e o associa à ação “Launch the application”. O comando **WEB SEND BLOB** permite então enviar documentos de todo tipo, os clientes Intranet abrem automaticamente a aplicação associada.

**Nota:** Para maior informação sobre os tipos MIME, consulte a página: <http://www.iana.org/assignments/media-types>.

Esta é uma lista dos tipos MIME mais comuns:  

| **Extensão** | **Mime/Tipo**            |
| ------------ | ------------------------ |
| .htm         | text/html                |
| .html        | text/html                |
| .shtml       | text/html                |
| .shtm        | text/html                |
| .css         | text/css                 |
| .pdf         | application/pdf          |
| .rtf         | application/rtf          |
| .ps          | application/postscript   |
| .eps         | application/postscript   |
| .hqx         | application/mac-binhex40 |
| .js          | application/javascript   |
| .json        | application/json         |
| .txt         | text/plain               |
| .text        | text/plain               |
| .gif         | image/gif                |
| .jpg         | image/jpeg               |
| .jpeg        | image/jpeg               |
| .jpe         | image/jpeg               |
| .jfif        | image/jpeg               |
| .pic         | image/pict               |
| .pict        | image/pict               |
| .tif         | image/tiff               |
| .tiff        | image/tiff               |
| .mpeg        | video/mpeg               |
| .mpg         | video/mpeg               |
| .mov         | video/quicktime          |
| .moov        | video/quicktime          |
| .aif         | audio/aiff               |
| .aiff        | audio/aiff               |
| .wav         | audio/wav                |
| .ram         | audio/x-pn-realaudio     |
| .sit         | application/x-stuffit    |
| .bin         | application/x-stuffit    |
| .xml         | application/xml          |
| .z           | application/x-zip        |
| .zip         | application/x-zip        |
| .gz          | application/x-gzip       |
| .tar         | application/x-tar        |

**Nota:** A lista de tipos MIME suportada pelo servidor 4D HTTP é salva no arquivo "MimeTypes.xml" que se encontra na seguinte pasta da aplicação 4D: *\[Contents\]\\Native components\\HTTPServer.bundle\\Contents\\Resources*. 

As referências às variáveis 4D e etiquetas de tipo *4DSCRIPT* na página sempre são analisadas. 

#### Exemplo 

Consulte o exemplo da rotina [PICTURE TO BLOB](picture-to-blob.md).

#### Ver também 

[WEB SEND FILE](web-send-file.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 654 |
| Thread-seguro | &check; |
| Proibido no servidor ||


