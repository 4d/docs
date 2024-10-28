---
id: web-get-http-header
title: WEB GET HTTP HEADER
slug: /commands/web-get-http-header
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET HTTP HEADER.Syntax-->**WEB GET HTTP HEADER** ( cabeçalho|arrayCampo {; *valorArray*} )<!-- END REF-->
<!--REF #_command_.WEB GET HTTP HEADER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| cabeçalho&#124;arrayCampo | Texto, Array texto | &#8592; | Petição HTTP cabeçalho ou campos HTTP cabeçalho |
| valorArray | Text array | &#8592; | Conteúdo dos campos cabeçalho HTTP |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB GET HTTP HEADER.Summary-->O comando **WEB GET HTTP HEADER** retorna uma string ou dois arrays, que contém o cabeçalho HTTP utilizado na petição em processo.<!-- END REF-->

Este comando pode ser chamado desde qualquer método (*On Web Authentication Database Method* ou [QR SET DESTINATION](qr-set-destination.md), método chamado por '*/4DACTION*'...) executado em um processo web.

* **Primeira sintaxe**: **WEB GET HTTP HEADER**(cabeçalho)

Quando se utiliza esta sintaxe, o resultado devolvido na variável *cabeçalho* é o seguinte:

```4d
 "GET /page.html HTTP\1.0"+Char(13)+Char(10)+"User-Agent: browser"+Char(13)+Char(10)+"Cookie: C=HELLO"
```

Cada campo de cabeçalho está separado por uma sequencia CR+LF (Retorno de carro+Retorno de linha) em Windows e Mac OS.  
* **Segunda sintaxe:** **WEB GET HTTP HEADER** **(arrayCamp; arrayValores)**

Quando utiliza esta sintaxe, os resultados devolvidos nos arrays *arrayCamp e arrayValores* são do seguinte tipo:

| *arrayCampo{1} = "X-METHOD"*      | *valorArray{1} = "GET" \**        |
| --------------------------------- | --------------------------------- |
| *arrayCampo* *{2} = "X-URL"*      | *valorArray{2} = "/page.html" \** |
| *arrayCampo* *{3} = "X-VERSION"*  | *valorArray{3} = "HTTP/1.0" \**   |
| *arrayCampo* *{4} = "User-Agent"* | *valorArray{4} = "browser"*       |
| *arrayCampo* *{5} = "Cookie"*     | *valorArray{5} = "C=HELLO"*       |

  
\*Esses três primeiros elementos não são campos HTTP. Formam parte da primeira linha da petição.  

Para estar de acordo com o padrão HTTP, os nomes dos campos sempre são escritos em inglês.  
  
Esta é uma lista de alguns campos HTTP que podem ser utilizados em uma petição:

* **Accept**: conteúdo permitido pelo navegador..
* **Accept-Language**: idiomas aceitos pelo navegador (para informação). Permite selecionar uma página Web utilizando o idioma definido no navegador..
* **Cookie**: lista de cookies
* **From**: endereço de correio eletrônico do usuário do navegador.
* **Host**: nome ou endereço do servidor (por exemplo utilizando uma URL, http://meuservidorweb/minhapagina.html, **Host** toma o valor «meuservidorweb»). Permite administrar vários nomes que apontam ao mesmo endereço IP (virtual hosting).
* **Referer**: origem da petição (por exemplo http://meuservidorweb/minhapagina1.html), ou seja a página que o usuário mostra quando clicar no botão **Anterior**.
* **User-Agent**: nome e versão do navegador ou do proxy.

#### Exemplo 

O seguinte método permite recuperar o conteúdo de todo campo de cabeçalho de petição HTTP:  

```4d
  // Método de projeto GetHTTPField
  // GetHTTPField (Text) -> Text
  // GetHTTPField (Nome cabeçalho HTTP) -> Conteúdo cabeçalho HTTP
 
 var $0;$1 : Text
 var $vlElem : Integer
 ARRAY TEXT($nomes;0)
 ARRAY TEXT($valores;0)
 $0:=""
 WEB GET HTTP HEADER($nomes;$valores)
 $vlElem:=Find in array($nomes;$1)
 If($vlElem>0)
    $0:=$valores{$vlElem}
 End if
```

* Quando tiver escrito este método de projeto, pode ser chamada desta maneira:

```4d
  // Conteúdo do cabeçalho Cookie
 $cookie:=GetHTTPField("Cookie")
```

* Pode enviar diferentes páginas em função do idioma do navegador (por exemplo em [QR SET DESTINATION](qr-set-destination.md)):

```4d
 $idioma:=GetHTTPField("Accept-Language")
 Case of
    :($idioma="@fr@") //Francês (ver lista ISO 639)
       WEB SEND FILE("index_fr.html")
    :($idioma="@sp@") //Espanhol (ver lista ISO 639)
       WEB SEND FILE("index_es.html")
    Else
       WEB SEND FILE("index.html")
 End case
```
  
  
**Nota**: os navegadores web permitem definir vários idiomas por padrão. Estão listados no campo "Accept-Language", separados por um ";". Sua propriedade está definida de acordo com sua posição dentro da string; portanto é uma boa ideia testar a posição dos idiomas na string.  
* Este é um exemplo de hosts virtuais (por exemplo no [QR SET DESTINATION](qr-set-destination.md)). Os seguintes nomes "home\_site.com", "home\_site1.com" e "home\_site2.com" apontam ao mesmo endereço IP, por exemplo 192.1.2.3.

```4d
 $host:=GetHTTPField("Host")
 Case of
    :($host="www.site1.com")
       WEB SEND FILE("home_site1.com")
    :($host="www.site2.com")
       WEB SEND FILE("home_site2.com")
    Else
       WEB SEND FILE("home_site.com")
 End case
```

#### Ver também 

[WEB GET HTTP BODY](web-get-http-body.md)  
[WEB SET HTTP HEADER](web-set-http-header.md)  