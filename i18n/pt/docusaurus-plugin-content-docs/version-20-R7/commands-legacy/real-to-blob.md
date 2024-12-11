---
id: real-to-blob
title: REAL TO BLOB
slug: /commands/real-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.REAL TO BLOB.Syntax-->**REAL TO BLOB** ( *real* ; *BLOB* ; *realFormat* {; offset | *} )<!-- END REF-->
<!--REF #_command_.REAL TO BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| real | Real | &#8594;  | Valor de tipo real a escrever no BLOB |
| Blob | Blob | &#8594;  | BLOB a receber o valor Real |
| realFormat | Integer | &#8594;  | 0 Formato real nativo 1 Formato real estendido 2 Formato real doble Macintosh 3 Formato real duplo Windows |
| offset &#124; * | Variável, Operador |&#8596;  | Offset no BLOB (expressado em bytes) ou * para adicionar o valor |
|||| Novo offset depois da escritura se * for omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.REAL TO BLOB.Summary-->O comando REAL TO BLOB grava o valor *real* no BLOB *blob*.<!-- END REF-->

O parâmetro *realFormat* corrige o formato interno e ordenação de bytes do valor real a ser escrito. Você passa uma das seguintes constantes pré-definidas fornecidas por 4D:

| Constante                    | Tipo          | Valor |
| ---------------------------- | ------------- | ----- |
| Native real format           | Inteiro longo | 0     |
| Extended real format         | Inteiro longo | 1     |
| Macintosh double real format | Inteiro longo | 2     |
| PC double real format        | Inteiro longo | 3     |

**Nota sobre a independência de plataforma:** Se você trocar BLOBs entre as plataformas Macintosh e PC, cabe a você a gerenciar os formatos e troca de bytes ao usar este comando.

Se você especificar o parâmetro opcional \*, o valor real é anexado ao BLOB, o tamanho do BLOB é prorrogado em conformidade. Usando o parâmetro opcional *\**, você pode armazenar qualquer número sequencial [Inteiro](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"), [Inteiro longo](# "Number between -2^31..(2^31)-1 (4-byte Integer)"), Real ou valores de texto (ver outros comandos BLOB) em um BLOB, enquanto o BLOB cabe na memória. 

Se você não especificar o parâmetro opcional *\** ou o parâmetro variável *offset*, o valor real é armazenado no início do BLOB, substituindo o conteúdo anterior, o tamanho do BLOB é ajustado em conformidade. 

Se você passar o parâmetro variável *offset*, o valor real está escrito no offset (a partir do zero) dentro do BLOB. Não importa onde você escreve o valor real, o tamanho do BLOB é aumentado de acordo com o local que você passou (até 8 ou 10 bytes, se necessário). Novos bytes alocados, com exceção do que você está escrevendo, são inicializados em zero.

Após a chamada, o parâmetro variável *offset* é devolvido, incrementado pelo número de bytes que foram escritos. Portanto, você pode reutilizar a mesma variável com outro comando de escrita BLOB para gravar outro valor. 

##### Nota 

**Nota de compatibilidade**: como este comando altera o blob passado como parâmetro, não é compatível com objetos blob (tipo 4D.Blob). Ver *Passing blobs and blob objects to 4D commands* em developer.4d.com

#### Exemplo 1 

Depois de executar este código:

```4d
 var vrValor : Real
 vrValor:=...
 REAL TO BLOB(vrValor;vxBlob;Extended real format)
```

* Em todas as plataformas, o tamanho do *vxBlob* é de 10 bytes

#### Exemplo 2 

Depois de executar esse código:

```4d
 var vrValor : Real
 vrValor:=...
 REAL TO BLOB(vrValor;vxBlob;Native real format)
```

* Em todas as plataformas, o tamanho de *vxBlob* é 8 bytes

#### Exemplo 3 

Depois de executar este código:

```4d
 SET BLOB SIZE(vxBlob;100)
 var vrValor : Real
 vrValor:=...
 INTEGER TO BLOB(vrValor;vxBlob;Windows Double real format) // o Formato real doble Macintosh
```

* Em todas as plataformas, o tamanho do *vxBlob* é de 8 bytes

#### Exemplo 4 

Depois de executar este código:

```4d
 SET BLOB SIZE(vxBlob;100)
 var vrValor : Real
 vrValor:=...
 vlOffset:=50
 REAL TO BLOB(vrValor;vxBlob;Windows Double real format;vlOffset) // o Formato real doble Macintosh
```

* Em todas as plataformas, o tamanho de vxBlob é de 100 bytes
* Em todas as plataformas, o valor real é armazenado nos bytes #50 até o #57
* Os outros bytes do BLOB são inalterados
* A variável *vlOffset* foi incrementada em 8 (e agora é igual a 58)

#### Exemplo 5 

Depois de executar este código:

```4d
 var vrValor : Real
 vrValor:=...
 REAL TO BLOB(vrValor;vxBlob;Macintosh double real format) // o Formato real doble Windows
```

* Em todas as plataformas, o tamanho do *vxBlob* é de 8 bytes

#### Exemplo 6 

Depois de executar este código:

```4d
 SET BLOB SIZE(vxBlob;100)
 REAL TO BLOB(vrValor;vxBlob;Extended real format;*)
```

* Em todas as plataformas, o tamanho do vxBlob é de 110 bytes
* Em todas as plataformas, o valor real é armazenado nos bytes #100 a #109
* Os outros bytes do BLOB são inalterados

#### Ver também 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 552 |
| Thread-seguro | &check; |
| Proibido no servidor ||


