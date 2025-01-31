---
id: base64-decode
title: BASE64 DECODE
slug: /commands/base64-decode
displayed_sidebar: docs
---

<!--REF #_command_.BASE64 DECODE.Syntax-->**BASE64 DECODE** ( *textoCodificado* {; *BLOB*}{; *} )<!-- END REF-->
<!--REF #_command_.BASE64 DECODE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| textoCodificado | Text, Blob | &#8594;  | Texto que contém o BLOB codificado no formato Base64 |
| &#8592; | Valor decodificado (se parâmetro decodificado for omitido) |
| Blob | Text, Blob | &#8592; | BLOB decodificado |
| * | Operador | &#8594;  | Decodificado em formato Base64URL |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BASE64 DECODE.Summary-->O comando **BASE64 DECODE** permite decodificar o texto ou valor de BLOB codificado em formato base64 ou Base64URL passado no parâmetro *aDecodificar*.<!-- END REF--> . Para sasber mais sobre os formatos Base64 e Base64URL, consule a descriçao do comando [BASE64 ENCODE](base64-encode.md)

Passe em *aDecodificar* o valor codificado de tipo texto ou BLOB, em Base64 ou Base64URL, a decodificar.

Se passar o parâmetro *decodificado*, o comando decodifica o conteúdo de *aDecodificar*  e o retorna no parâmetro *decodificado*. o parâmetro *aDecodificar* é deixado intacto. Se omitir o parâmetro *decodificado*  o comando modifica diretament o conteúdo do parâmetro *aDecodificar* 

Nota: se for passado uma variável de texto para receber o que decofica o comando, recebe os bytes decodificados interpretados como utf-8.

Como padrão, se for omitido o parâmetro *\**, o comando utiliza uma decodificação Base64\. Se passar o parâmetro *\**, o comando utiliza uma decodificação Base64URL. 

Se *aDecodificar* conter um conteúdo base64 não válido, se devolve um valor de tipo texto vazio ou blob.

#### Exemplo 

Este exemplo lhe permite transferir uma imagem através de um BLOB:

```4d
 var $sourceBlob : Blob
 var $minhaImagem : Picture
 $minhaImagem:=[pessoas]foto
 PICTURE TO BLOB($minhaImagem;$sourceBlob;".JPG")
 var $base64Text : Text
 BASE64 ENCODE($sourceBlob;$base64Text) //Codificar o texto
  // o binário é agora disponível como string de caracteres no $base64Text
 
 var $base64Text : Text
 var $targetBlob : Blob
 BASE64 DECODE($base64Text;$targetBlob) //Decodificar o texto
  // a codificação binária na base64 está agora disponível como um BLOB em $blobAlvo
```

#### Ver também 

[BASE64 ENCODE](base64-encode.md)  
[Generate digest](generate-digest.md)  
*Visão Geral dos comandos XML DOM*  
[XML DECODE](xml-decode.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 896 |
| Thread-seguro | &check; |


