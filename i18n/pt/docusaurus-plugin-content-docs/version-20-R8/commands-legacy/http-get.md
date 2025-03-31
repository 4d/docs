---
id: http-get
title: HTTP Get
slug: /commands/http-get
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Get.Syntax-->**HTTP Get** ( *url* ; *resposta* {; *nomesCab* ; *valoresCab*}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.HTTP Get.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| url | Text | &#8594;  | URL ao qual enviar o pedido |
| resposta | Text, Blob, Picture, Object | &#8592; | Resposta da solicitação |
| nomesCab | Text array | &#8594;  | Nomes dos cabeçalhos da solicitação |
| &#8592; | Nomes dos cabeçalhos devolvidos |
| valoresCab | Text array | &#8594;  | Valores dos cabeçalhos da solicitação |
| &#8592; | Valores dos cabeçalhos devolvidos |
| * | Operador | &#8594;  | Se passado, a conexão se mantém (keep-alive)Se omitida,a conexão é fechada automaticamente |
| Resultado | Integer | &#8592; | Código de estado HTTP |

<!-- END REF-->

:::info Compatibilidade

Esse comando é mantido apenas por motivos de compatibilidade. Agora é recomendável usar [`4D.HTTPRequest class`](../API/HTTPRequestClass.md).

:::

#### Descrição 

<!--REF #_command_.HTTP Get.Summary-->O comando **HTTP Get** envia diretamente um pedido HTTP GET a um URL específico e processa a resposta do servidor HTTP.<!-- END REF-->

Passe no parâmetro *url* o URL ao qual enviar a solicitação. A sintaxes a utilizar é:

```RAW
http://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

Por exemplo, pode passar as seguintes cadeias:  

```RAW
    http://www.myserver.com    http://www.myserver.com/path    http://www.myserver.com/path?name="jones"    https://www.myserver.com/login (*)    http://123.45.67.89:8083    http://john:smith@123.45.67.89:8083    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

*(\*)* Durante as solicitações HTTPS, a autoridade do certificado não é verificada.  
*(\*\*)* Para saber mais sobre endereços IPv6 em urls, veja [RFC 2732](https://www.ietf.org/rfc/rfc2732.txt).

Depois da execução do comando, o parâmetro *resposta* recupera o resultado do pedido devolvido pelo servidor. Este resultado corresponde ao corpo (body) da resposta, sem os cabeçalhos (headers).  
Pode passar variáveis de diferentes tipos em *resposta*:

* Texto: quando o resultado se espera em forma de texto (ver nota abaixo)
* BLOB: quando o resultado se espera em forma binária.
* Imagem: quando o resultado se espera em forma de imagem.
* Objeto: quando o resultado se espera em forma de objeto *C\_OBJECT*.

**Nota:** quando se passar uma variável de texto em *resposta*, 4D tentará decodificar os dados devolvidos desde o servidor. 4D primeiro tenta recuperar o conjunto de caracteres do cabeçalho de *tipo de conteúdo*, depois do conteúdo utilizando um BOM e, finalmente, busca qualquer atributo *http-equiv charset* (em conteúdo html) ou *codificação* (para xml). Se não puder detectar nenhum charset, 4D tentará decodificar a resposta em ANSI. Se a conversão falhar, o texto resultante ficará vazio. Se não tiver certeza se o servidor devolve uma informação charset ou BOM, mas conhece a codificação, é mais preciso passar *resposta* em BLOB e chamar ao [Convert to text](convert-to-text.md).

Se passado um BLOB, conterá o texto, a imagem ou todo tipo de conteúdo (.wav, .zip, etc.) devolvido pelo servidor. A continuação, deve gerenciar a recuperação destes conteúdos (os cabeçalhos não estão incluídos no BLOB). Se passar um objeto de tipo *C\_OBJECT*, se a petição devolve um resultado com o conteúdo tipo "aplicação/json" (ou "*algo*/json"), 4D tenta analisar o conteúdo JSON para gerar o objeto.   
  
Em *nomesCab* e *valoresCab* passe os arrays que contém os nomes e os valores dos cabeçalhos da solicitação.  
Depois da execução do método, estes arrays contém os nomes e os valores dos cabeçalhos devolvidos pelo servidor HTTP. Especificamente, este principio lhe permite administrar seus cookies.

O parâmetro *\** permite ativar o mecanismo keep-alive para a conexão ao servidor. Por defeito, este parâmetro se omite, keep-alive não está ativo.   
  
O comando devolve o código do estado HTTP padrão (200=OK...) tal qual foi devolvido pelo servidor. A lista de códigos de estado HTTP está no *RFC 2616*.  
Caso a conexão ao servidor não seja possível por uma razão relacionada com a rede (DNS Failed, Server not reachable...), o comando devolve 0 e é gerado um erro. Você pode interceptar utilizando um método instalado pelo comando [ON ERR CALL](on-err-call.md).

#### Exemplo 1 

Recuperação do logo 4D no sitio web de 4D:

```4d
 var URLPic_t : Text
 URLPic_t:="http://www.4d.com/sites/all/themes/dimention/images/home/logo4D.jpg"
 ARRAY TEXT(HeaderNames_at;0)
 ARRAY TEXT(HeaderValues_at;0)
 var Pic_i : Picture
 $httpResponse:=HTTP Get(URLPic_t;Pic_i;HeaderNames_at;HeaderValues_at)
```

#### Exemplo 2 

Recuperação de um RFC:

```4d
 var URLText_t : Text
 var Text_t : Text
 URLText_t:="http://tools.ietf.org/rfc/rfc1.txt"
 ARRAY TEXT(HeaderNames_at;0)
 ARRAY TEXT(HeaderValues_at;0)
 $httpResponse:=HTTP Get(URLText_t;Text_t;HeaderNames_at;HeaderValues_at)
```

#### Exemplo 3 

Recuperação de um vídeo:

```4d
 var vBlob : Blob
 $httpResponse:=HTTP Get("http://www.example.com/video.flv";vBlob)
 BLOB TO DOCUMENT("video.flv";vBlob)
```

#### Ver também 

[HTTP Request](http-request.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1157 |
| Thread-seguro | &check; |
| Modificar variáveis | error |


