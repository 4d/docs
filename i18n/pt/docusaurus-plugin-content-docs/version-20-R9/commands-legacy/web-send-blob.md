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

## Descrição 

<!--REF #_command_.WEB SEND BLOB.Summary-->O comando **WEB SEND BLOB** permite enviar o BLOB *blob* ao navegador.<!-- END REF-->  
  
O tipo de dados contidos no BLOB é indicado por *tipo*. Este parâmetro pode conter os seguintes valores:  

* *tipo* \= **String vazia** (""): neste caso, não necessita dar mais informação no BLOB. O navegador tentará interpretar os conteúdos do BLOB.
* *tipo* \= **Extensão de arquivo** (Exemplo: ".HTM", ".GIF", ".JPEG", etc.): neste caso, especifique o navegador, por sua extensão, o tipo MIME dos dados contidos no BLOB. O BLOB será interpretado de acordo com sua extensão. Entretanto, a extensão deve ser padrão para que o navegador possa interpretá-lo corretamente.
* *tipo* \= **Mime/Tipo** (Exemplo: “text/html”, “image/tiff”, etc.): neste caso, especifique diretamente ao navegador o tipo MIME dos dados contidos no BLOB. Esta solução oferece mais liberdade. Além disso, os tipos padrão, pode passar um tipo MIME personalizado para enviar os documentos proprietários em Intranet. Para fazer isso, só necessita configurar os navegadores com o fim de reconhecer o tipo enviado e executar a aplicação correspondente. O valor a passar no parâmetro tipo é, neste caso, “application/x-\[NomeTipo\]”. No navegador da máquina cliente, você referencia este tipo e o associa à ação “Launch the application”. O comando **WEB SEND BLOB** permite então enviar documentos de todo tipo, os clientes Intranet abrem automaticamente a aplicação associada.

**Nota:** para maior informação sobre os tipos MIME, consulte a página: <http://www.iana.org/assignments/media-types>.

A lista de tipos MIME e suas extensões de arquivo suportadas pelo servidor HTTP 4D é armazenada no arquivo “MimeTypes.xml” localizado na pasta “Resources” da aplicação 4D.

As referências às variáveis 4D e etiquetas de tipo *4DSCRIPT* na página sempre são analisadas. 

## Exemplo 

Consulte o exemplo da rotina [PICTURE TO BLOB](picture-to-blob.md).

## Ver também 

[WEB SEND FILE](web-send-file.md)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 654 |
| Thread-seguro | &check; |


