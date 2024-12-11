---
id: web-set-http-header
title: WEB SET HTTP HEADER
slug: /commands/web-set-http-header
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET HTTP HEADER.Syntax-->**WEB SET HTTP HEADER** ( cabeçalho|arrayCampo {; *valorArray*} )<!-- END REF-->
<!--REF #_command_.WEB SET HTTP HEADER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| cabeçalho&#124;arrayCampo | Texto, Array texto | &#8594;  | Campo ou variável contendo o cabeçalho HTTP requisitado ou campos cabeçalho HTTP |
| valorArray | Text array | &#8594;  | Conteúdo de campo de cabeçalho HTTP |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB SET HTTP HEADER.Summary-->O comando **WEB SET HTTP HEADER** permite definir os campos do cabeçalho HTTP da resposta enviada ao navegador web por 4D.<!-- END REF--> Só tem efeito em um processo web.  
Este comando lhe permite administrar os “cookies”.  

Há duas sintaxes disponíveis para este comando:

* **Primeira sintaxe: WEB SET HTTP HEADER (cabeçalho)**  
Passe no parâmetro *cabeçalho*, de tipo variável ou campo texto, os campos do cabeçalho HTTP que pretende definir. Esta sintaxe permite escrever tipos de cabeçalhos tais como "HTTP/1.0 200 OK"+Char(13)+"Set-Cookie: C=HELLO". Os campos de cabeçalho devem estar separados por um retorno de carro ou uma sequência cr/lf (retorno de carro + retorno de linha), em Windows e Mac OS, 4D se encarrega do formato da resposta.

  
Este é um exemplo de uma “cookie” personalizada:

```4d
 var $vTcookie : Text
 $vTcookie:="Set-Cookie: USER="+String(Abs(Random))+"; PATH=/"
 WEB SET HTTP HEADER($vTcookie)
```
  
  
**Nota**: o comando não aceitará uma constante de tipo texto literal como parâmetro *cabeçalho*; deve ser uma variável ou campo 4D.  
  
Para maior informação sobre a sintaxe a aplicar, por favor consulte R.F.Cs (Request For Comments) que se encontra em: [http://www.w3c.org](http://www.w3c.org/).  
* Segunda sintaxe **WEB SET HTTP HEADER** (arrayCampo; arrayValor)  
O cabeçalho HTTP foi definido através de dois arrays de texto, *campoArray e valorArray*. O cabeçalho será escrito abaixo:

```4d
 fieldArray{1}:="X-VERSION"
 fieldArray{2}:="X-STATUS"
 fieldArray{3}:="Set-Cookie"
 fieldArray{4}:="Server"
 
 valueArray{1}:="HTTP/1.0"*
 valueArray{2}:="200 OK"*
 valueArray{3}:="C=HELLO"
 valueArray{4}:="North_Carolina"
```

\* Os dois primeiros elementos são a primeira linha da resposta. Quando são introduzidos, deven ser os elementos 1 y 2 dos arrays. Contudo, é possível omitir eles e escrever somente o seguinte (4D se encarregará do formato do cabeçalho):

```4d
 fieldArray{1}:="Set-Cookie"
 valueArray{1}:="C=HELLO"
```
  
  
Se não especificar um estado, automaticamente será HTTP/1.0 200 OK. O campo **Server** é por padrão "4D/<version>".

Os campos **Date** e **Content-Length** sempre são definidos por padrão por 4D.

#### Ver também 

[WEB GET HTTP HEADER](web-get-http-header.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 660 |
| Thread-seguro | &check; |
| Proibido no servidor ||


