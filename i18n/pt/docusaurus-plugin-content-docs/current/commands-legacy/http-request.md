---
id: http-request
title: HTTP Request
slug: /commands/http-request
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Request.Syntax-->**HTTP Request** ( *metodoHTTP* ; *url* ; *conteúdo* ; *resultado* {; *nomCab* ; *valCab*}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.HTTP Request.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| metodoHTTP | Text | &#8594;  | Método HTTP para a solicitação |
| url | Text | &#8594;  | URL à qual enviar a solicitação |
| conteúdo | Text, Blob, Picture, Object | &#8594;  | Conteúdo do corpo(body)da solicitação |
| resultado | Text, Blob, Picture, Object | &#8592; | Resultado da solicitação |
| nomCab | Text array | &#8594;  | Nomes dos cabeçalhos da solicitação |
| &#8592; | Nomes dos cabeçalhos devolvidos |
| valCab | Text array | &#8594;  | Valores dos cabeçalhos da solicitação |
| &#8592; | Valores dos cabeçalhos devolvidos |
| * | Operador | &#8594;  | Se passada, a conexão se mantém (keep-alive)Se omitida, a conexão é fechada automaticamente. |
| Resultado | Integer | &#8592; | Código de estado HTTP |

<!-- END REF-->

:::info Compatibilidade

Esse comando é mantido apenas por motivos de compatibilidade. Agora é recomendável usar [`4D.HTTPRequest class`](../API/HTTPRequestClass.md).

:::

#### 

<!--REF #_command_.HTTP Request.Summary-->O comando **HTTP Request** permite enviar todo tipo de petição HTTP a um URL específico e processar a resposta do servidor HTTP.<!-- END REF-->

Passe no parâmetro *metodoHTTP* o método HTTP da petição. Pode utilizar uma das seguintes constantes, do tema *HTTP Client*:

| Constante           | Tipo   | Valor   | Comentário                                                 |
| ------------------- | ------ | ------- | ---------------------------------------------------------- |
| HTTP DELETE method  | Cadeia | DELETE  | Ver o *RFC 2616*                                           |
| HTTP GET method     | Cadeia | GET     | Ver o *RFC 2616*. Equivale a utilizar o comando *HTTP Get* |
| HTTP HEAD method    | Cadeia | HEAD    | Ver o *RFC 2616*                                           |
| HTTP OPTIONS method | Cadeia | OPTIONS | Ver o *RFC 2616*                                           |
| HTTP POST method    | Cadeia | POST    | Ver o *RFC 2616*                                           |
| HTTP PUT method     | Cadeia | PUT     | Ver o *RFC 2616*                                           |
| HTTP TRACE method   | Cadeia | TRACE   | Ver o *RFC 2616*                                           |

Passe no parâmetro *url* ou URL onde queira enviar a solicitação. A sintaxes a utilizar é:  

```RAW
http://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

Por exemplo, você pode passar as seguintes cadeias:  

```RAW
    http://www.myserver.com    http://www.myserver.com/path    http://www.myserver.com/path?name="jones"    https://www.myserver.com/login (*)    http://123.45.67.89:8083    http://john:smith@123.45.67.89:8083    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

  
*(\*)* Durante as solicitações HTTPS, a autoridade do certificado não se verifica.   
*(\*\*)* Para saber mais sobre endereços IPv6 em urls, veja [RFC 2732](https://www.ietf.org/rfc/rfc2732.txt).

Passe no parâmetro *conteúdo* o corpo (body) da petição. Os dados passados neste parâmetro dependem do método HTTP da solicitação.  
Pode enviar dados de tipo texto, BLOB, imagem ou objeto. Quando o content-type não é especificado, é utilizado os seguintes tipos:

* para os textos: texto/plano - UTF8
* para os BLOBs: aplicação/byte-stream
* para as imagens: tipo MIME conhecido (best for Web).
* para os objetos [C\_OBJECT](c-object.md): aplicação/json

Depois da execução do comando, o parâmetro *resposta* recupera o resultado do pedido devolvido pelo servidor. Este resultado corresponde ao corpo (body) da resposta, sem os cabeçalhos (headers). Pode passar variáveis de diferentes tipos em *resposta*:

* Texto: quando o resultado se espera em forma de texto codificado em UTF16 ou em forma de referencia árvore XML.
* BLOB: quando o resultado se espera em forma binária.
* Imagem: quando o resultado se espera em forma de imagem.
* Objeto [C\_OBJECT](c-object.md): quando o resultado esperado é um objeto.

**Nota:** quando se passa uma variável de texto em *resposta*, 4D tentará decodificar os dados devolvidos desde o servidor. 4D primeiro tenta recuperar o conjunto de caracteres do cabeçalho de *tipo de conteúdo*, depois do conteúdo utilizando um BOM e, finalmente, busca qualquer atributo *http-equiv charset* (em conteúdo html) ou *codificação* (para xml). Se não puder detectar nenhum charset, 4D tentará decodificar a resposta em ANSI. Se a conversão falhar, o texto resultante ficará vazio. Se não tiver certeza se o servidor devolve uma informação charset ou BOM, mas conhece a codificação, é preciso passar *resposta* em BLOB e chamar ao [Convert to text](convert-to-text.md).

Se passar uma variável de tipo objeto no parâmetro *resposta*, se a petição devolver um resultado com o conteúdo tipo "aplicação/json" (ou "algo/json"), 4D tenta analisar o conteúdo JSON para gerar o objeto. Senão um objeto *4DBlob* é retornado.

Se o resultado retornado pelo servidor não corresponder ao tipo de variável de respsota, será deixado em branco.

Em *nomCab* e *valoresCab* passe os arrays que contém os nomes e os valores dos cabeçalhos da solicitação.

Depois da execução do método, estes arrays contém os nomes e os valores dos cabeçalhos devolvidos pelo servidor HTTP. Especificamente, este principio lhe permite administrar seus cookies.

O parâmetro *\** permite ativar o mecanismo keep-alive para a conexão ao servidor. Por padrão, este parâmetro se omite, keep-alive não está ativo.  
  
O comando devolve o código do estado HTTP padrão (200=OK...) tal qual foi devolvido pelo servidor. A lista de códigos de estado HTTP está no *RFC 2616*.  
Caso a conexão ao servido não seja possível por uma razão relacionada com a rede (DNS Failed, Server not reachable...), o comando devolve 0 e é gerado um erro.Você pode interceptá-lo usando um método instalado pelo comando [ON ERR CALL](on-err-call.md).

#### Exemplo 1 

Eliminação de um registro em uma base remota:

```4d
 var $response : Text
 $body_t:="{record_id:25}"
 $httpStatus_l:=HTTP Request(HTTP DELETE method;"database.example.com";$body_t;$response)
```

**Nota:** Você deve processar a solicitação da maneira apropriada no servidor remoto, **HTTP Request** somente se encarrega da petição e do resultado devolvido.

#### Exemplo 2 

Adicionar um registro a uma base remota:

```4d
 var $response : Text
 $body_t:="{fName:'john',fName:'Doe'}"
 $httpStatus_l:=HTTP Request(HTTP PUT method;"database.example.com";$body_t;$response)
```

**Nota:** Você deve processar a solicitação da maneira apropriada no servidor remoto, **HTTP Request** somente se encarrega da petição e do resultado devolvido.

#### Exemplo 3 

Petição para adicionar um registro em JSON a um banco de dados remoto:

```4d
 var $content : Object
 OB SET($content;"lastname";"Doe";"firstname";"John")
 $result:=HTTP Request(HTTP PUT method;"database.example.com";$content;$response)
```

#### Ver também 

[HTTP Get](http-get.md)  