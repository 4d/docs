---
id: blob-to-text
title: BLOB to text
slug: /commands/blob-to-text
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to text.Syntax-->**BLOB to text** ( *BLOB* ; *formatoTexto* {; *offset* {; *compTexto*}} )  : Text<!-- END REF-->
<!--REF #_command_.BLOB to text.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB do qual obter o texto |
| formatoTexto | Integer | &#8594;  | Formato e conjunto de caracteres de texto |
| offset | Variable |&#8596; | Offset no BLOB (expressado em bytes) |
| || | Novo offset depois da leitura |
| compTexto | Integer | &#8594;  | Número de caracteres a serem lidos |
| Resultado | Text | &#8592; | Valor do texto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BLOB to text.Summary-->O comando BLOB to text retorna um valor de texto lido do BLOB *blob*.<!-- END REF-->

O parâmetro *formatoTexto* corrige o formato interno e o conjunto de caracteres do valor de texto a ser lido. Em bases de dados criadas a partir da versão 11, 4D usa o conjunto de caracteres Unicode (UTF8) por padrão para o gerenciamento de texto. Por razões de compatibilidade, este comando pode ser usado para "forçar" a conversão usando o conjunto de caracteres romanos Mac (utilizado em versões anteriores do 4D). O conjunto de caracteres é escolhido através do parâmetro *formatoTexto*. Para fazer isso, passe uma das seguintes constantes (encontrado no tema "BLOB") no parâmetro *formatoTexto*:

| Constante                | Tipo          | Valor |
| ------------------------ | ------------- | ----- |
| Mac C string             | Inteiro longo | 0     |
| Mac Pascal string        | Inteiro longo | 1     |
| Mac text with length     | Inteiro longo | 2     |
| Mac text without length  | Inteiro longo | 3     |
| UTF8 C string            | Inteiro longo | 4     |
| UTF8 text with length    | Inteiro longo | 5     |
| UTF8 text without length | Inteiro longo | 6     |

**Notas:**

* As constantes "UTF8" podem ser usadas somente quando o aplicativo é executado no modo Unicode.
* As constantes "Mac" não podem trabalhar com textos maiores que 32 KB.
* Se você deseja trabalhar com outros conjuntos de caracteres além de UTF8, use o comando [Convert to text](convert-to-text.md) .

Para obter mais informações sobre essas constantes e os formatos que representam, consulte a descrição do comando [TEXT TO BLOB](text-to-blob.md). 

**Atención:** O número de caracteres a ser lido é determinado pelo parâmetro *formatoTexto*, EXCETO para os formatos Mac Text without length e UTF8 Text without length, para o qual você deve especificar o número de caracteres a ser lido no parâmetro compTexto. Para os outros formatos, *compText* é ignorado e você pode omiti-lo. 

Se você especificar o parâmetro opcional *offset*, o valor Texto é lido no *offset* (a partir de zero) dentro do BLOB. Se você não especificar o parâmetro opcional offset, o início do BLOB é lido de acordo com o valor que você passa em formatoTexto. Observe que você deve passar o parâmetro variável *offset* quando você estiver lendo o texto sem comprimento.

**Nota:** Você deve passar um valor de deslocamento entre 0 (zero) e o tamanho do BLOB menos o tamanho do texto a ser lido. Se você não fizer isso, o resultado da função é imprevisível.

Após a chamada, a variável é incrementada pelo número de bytes lidos. Portanto, você pode reutilizar a mesma variável com outro comando de leitura BLOB para ler outro valor. 

#### Ver também 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[Convert to text](convert-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 555 |
| Thread-seguro | &check; |


