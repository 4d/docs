---
id: text-to-blob
title: TEXT TO BLOB
slug: /commands/text-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO BLOB.Syntax-->**TEXT TO BLOB** ( *texto* ; *BLOB* {; *textFormat* {; offset | *}} )<!-- END REF-->
<!--REF #_command_.TEXT TO BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| texto | Text | &#8594;  | Texto a escrever no BLOB |
| Blob | Blob | &#8594;  | BLOB a receber o texto |
| textFormat | Integer | &#8594;  | Formato e conjunto de caracteres de texto |
| offset &#124; * | Variável, Operador | &#8596; | Offset no BLOB (expressado em bytes) ou * para adicionar o valor |
||| | Novo offset depois da escritura se * for omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.TEXT TO BLOB.Summary-->O comando TEXT TO BLOB escreve o *texto* no BLOB *blob*.<!-- END REF-->

O parâmetro *textFormat* pode ser usado para definir o formato interno, o conjunto de caracteres o valor texto a ser escrito. Para fazer isso, passe uma das seguintes constantes (encontrado no tema *BLOB*) no parâmetro *textFormat*:

| Constante                | Tipo          | Valor |
| ------------------------ | ------------- | ----- |
| Mac C string             | Inteiro longo | 0     |
| Mac Pascal string        | Inteiro longo | 1     |
| Mac text with length     | Inteiro longo | 2     |
| Mac text without length  | Inteiro longo | 3     |
| UTF8 C string            | Inteiro longo | 4     |
| UTF8 text with length    | Inteiro longo | 5     |
| UTF8 text without length | Inteiro longo | 6     |

Se você omitir o parâmetro *textFormat*, por padrão 4D usa o formato Mac C string. Com bancos de dados criados a partir da versão 11, 4D funciona por padrão com o conjunto de caracteres Unicode (UTF8) para o gerenciamento de texto, por isso é recomendado o uso deste conjunto de caracteres.   

**Notas:**

* As constantes "UTF8" podem ser usadas somente quando o aplicativo é executado no modo Unicode.
* As constantes "Mac" não podem trabalhar com textos maiores que 32 KB.
* Se você deseja trabalhar com conjuntos de caracteres diferentes a UTF8, use o comando [CONVERT FROM TEXT](convert-from-text.md) .

A tabela a seguir descreve cada um desses formatos:

| **Formato texto**                  | **Descrição e exemplos**                                                   |
| ---------------------------------- | -------------------------------------------------------------------------- |
| C string                           | O texto termina em um caractere NULL (código ASCII $00).                   |
| UTF8                               | "" $00                                                                     |
| "Café" $43 61 66 C3 A9 00          |                                                                            |
| Mac                                | "" $00                                                                     |
| "Café" $43 61 66 8E 00             |                                                                            |
| Pascal string                      | O texto está precedido de um byte de comprimento.                          |
| UTF8                               | \-                                                                         |
| \-                                 |                                                                            |
| Mac                                | "" $00                                                                     |
| "Café" $04 43 61 66 8E             |                                                                            |
| Text with length                   | O texto está precedido por 4 bytes (UTF8) ou 2 bytes (Mac) de comprimento. |
| UTF8                               | "" $00 00 00 00                                                            |
| "Café" $00 00 00 05 43 61 66 C3 A9 |                                                                            |
| Mac                                | "" $00 00                                                                  |
| "Café" $00 04 43 61 66 8E          |                                                                            |
| Text without length                | O texto está composto somente por seus caracteres.                         |
| UTF8                               | "" Sem dados                                                               |
| "Café" $43 61 66 C3 A9             |                                                                            |
| Mac                                | "" Sem dados                                                               |
| "Café" $43 61 66 8E                |                                                                            |
  
  
Se você especificar o parâmetro opcional \*, o valor de texto é anexado ao BLOB, o tamanho do BLOB é aumentado em conformidade. Usando o parâmetro opcional \*, você pode armazenar qualquer número sequencial [Inteiro](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"), [Inteiro longo](# "Number between -2^31..(2^31)-1 (4-byte Integer)"), Real ou valores de texto (ver outros comandos BLOB) em um BLOB, enquanto o BLOB cabe na memória. 

Se você não especificar o parâmetro opcional \* nem o parâmetro de deslocamento variável, o valor de texto é armazenado no início do BLOB, substituindo o conteúdo anterior, o tamanho do BLOB é ajustado em conformidade.

Se você passar o parâmetro variável *offset*, o valor do Texto está escrito no offset (a partir do zero) dentro do BLOB. Não importa onde você escreva o valor de texto, o tamanho do BLOB é aumentado de acordo com o local que você passou (e até o tamanho do texto, se necessário). Novos bytes alocados, com exceção do que você está escrevendo, são inicializados em zero.

Após a chamada, o parâmetro variável *offset* é devolvido, incrementado pelo número de bytes que foram escritos. Entretanto, você pode reutilizar a mesma variável com outro comando de escrita BLOB para gravar outro valor.

##### Nota 

**Nota de compatibilidade**: como este comando altera o blob passado como parâmetro, não é compatível com objetos blob (tipo 4D.Blob). Ver *Passing blobs and blob objects to 4D commands* em developer.4d.com

#### Exemplo 

Depois de executar este código:

```4d
 SET BLOB SIZE(vxBlob;0)
 var vtValor : Text
 vtValor:="Café" // O comprimento de vtValor é 4 bytes
 TEXT TO BLOB(vtValor;vxBlob;Mac C string) // O tamanho do BLOB se torna 5 bytes
 TEXT TO BLOB(vtValor;vxBlob;Mac Pascal string) // O tamanho do BLOB se torna 5 bytes
 TEXT TO BLOB(vtValor;vxBlob;Mac text with length) // O tamanho do BLOB se torna 6 bytes
 TEXT TO BLOB(vtValor;vxBlob;Mac text without length) // O tamanho do BLOB se torna 4 bytes
 TEXT TO BLOB(vtValor;vxBlob;UTF8 C string) // O tamanho do BLOB se torna 6 bytes
 TEXT TO BLOB(vtValor;vxBlob;UTF8 text with length) // O tamanho do BLOB se torna 9 bytes
 TEXT TO BLOB(vtValor;vxBlob;UTF8 text without length) // O tamanho do BLOB se torna 5 bytes
```

#### Ver também 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[CONVERT FROM TEXT](convert-from-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 554 |
| Thread-seguro | &check; |


