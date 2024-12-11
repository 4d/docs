---
id: longint-to-blob
title: LONGINT TO BLOB
slug: /commands/longint-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.LONGINT TO BLOB.Syntax-->**LONGINT TO BLOB** ( *longInt* ; *BLOB* ; *byteOrder* {; offset | *} )<!-- END REF-->
<!--REF #_command_.LONGINT TO BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| longInt | Integer | &#8594;  | Valor de tipo Inteiro longo a escrever no BLOB |
| Blob | Blob | &#8594;  | BLOB a receber o valor Inteiro longo |
| byteOrder | Integer | &#8594;  | 0 Ordem de bytes nativo 1 Ordem de bytes Macintosh 2 Ordem de bytes PC |
| offset &#124; * | Variável, Operador | &#8596;  | Offset no BLOB (expressado em bytes) ou * para adicionar o valor |
||| | Novo offset depois da escritura se * for omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LONGINT TO BLOB.Summary-->O comando LONGINT TO BLOB grava o valor *inteiro longo* de 4-byte no BLOB *blob*.<!-- END REF-->

O parâmetro *byteOrder* fixa a ordem dos bytes do valor inteiro longo de 4-byte a ser escrito. Você passa uma das seguintes constantes pré-definidas fornecidas por 4D:

| Constante               | Tipo          | Valor |
| ----------------------- | ------------- | ----- |
| Native byte ordering    | Inteiro longo | 0     |
| Macintosh byte ordering | Inteiro longo | 1     |
| PC byte ordering        | Inteiro longo | 2     |

**Nota sobre a independência de plataforma:** Se você intercambiar BLOBs entre as plataformas Macintosh e PC, cabe a você a gerenciar os problemas da troca de bytes ao usar este comando.

Se você especificar o parâmetro opcional \*, o valor inteiro de 4-byte é anexado ao BLOB e o tamanho do BLOB é aumentado em conformidade. Usando o parâmetro opcional \*, você pode armazenar qualquer número sequencial [Inteiro](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"), [Inteiro longo](# "Number between -2^31..(2^31)-1 (4-byte Integer)"), Real ou valores de texto (ver outros comandos BLOB) em um BLOB, enquanto o BLOB cabe na memória. 

Se você não especificar o parâmetro opcional \* nem o parâmetro variável *offset*, um valor inteiro de 4-bytes é armazenado no início do BLOB, substituindo o conteúdo anterior, o tamanho do BLOB é ajustado em conformidade. 

Se você passar o parâmetro *offset*, um valor inteiro de 4-byte é escrito no byte (a partir do zero) dentro do BLOB. Não importa onde você escreva o valor inteiro de 4-byte, o tamanho do BLOB é aumentado de acordo com o local que você passou (acima de 4 bytes, se necessário). Novos bytes alocados, com exceção do que você está escrevendo, são inicializados em zero. 

Após a chamada, o parâmetro variável *offset* é devolvido, incrementado pelo número de bytes que foram escritos. Portanto, você pode reutilizar a mesma variável com outro comando de escrita BLOB para gravar outro valor. 

##### Nota 

**Nota de compatibilidade**: como este comando altera o blob passado como parâmetro, não é compatível com objetos blob (tipo 4D.Blob). Ver *Passing blobs and blob objects to 4D commands* em developer.4d.com

#### Exemplo 1 

Depois de executar esse código:

```4d
 LONGINT TO BLOB(0x01020304;vxBlob;Native byte ordering)
```

* O tamanho de *vxBlob* é 4 bytes
* Em PowerPC *vxBLOB{0}=$01*, *vxBLOB{1}=$02*, *vxBLOB{2}=$03*, *vxBLOB{3}=$04*
* Em Intel:PC *vxBLOB{0}=$04*, *vxBLOB{1}=$03*, *vxBLOB{2}=$02*, *vxBLOB{3}=$01*

#### Exemplo 2 

Depois de executar este código:

```4d
 LONGINT TO BLOB(0x01020304;vxBlob;Macintosh byte ordering)
```

* O tamanho de *vxBlob*es 4 bytes
* Em todas as plataformas *vxBLOB{0}=$01*, *vxBLOB{1}=$02*, *vxBLOB{2}=$03*, *vxBLOB{3}=$04*

#### Exemplo 3 

Depois de executar esse código:

```4d
 LONGINT TO BLOB(0x01020304;vxBlob;PC byte ordering)
```

* O tamanho de *vxBlob* es 4 bytes
* Em todas as plataformas *vxBLOB{0}=$04*, *vxBLOB{1}=$03*, *vxBLOB{2}=$02*, *vxBLOB{3}=$01*

#### Exemplo 4 

Depois de executar esse código:

```4d
 SET BLOB SIZE(vxBlob;100)
 LONGINT TO BLOB(0x01020304;vxBlob;PC byte ordering;*)
```

* O tamanho de *vxBlob* é 104 bytes
* Em todas as plataformas *vxBLOB{100}=$04*, *vxBLOB{101}=$03*, *vxBLOB{102}=$02*, *vxBLOB{103}=$01*
* Os outros bytes do BLOB são inalterados

#### Exemplo 5 

Depois de executar esse código:

```4d
 SET BLOB SIZE(vxBlob;100)
 vlOffset:=50
 LONGINT TO BLOB(0x01020304;vxBlob;Macintosh byte ordering;vlOffset)
```

* O tamanho de *vxBlob* é 100 bytes
* Em todas as plataformas *vxBLOB{50}=$01*, *vxBLOB{51}=$02*, *vxBLOB{52}=$03*, *vxBLOB{53}=$04*
* Os outros bytes do BLOB são inalterados
* A variável *vlOffset* tem sido incrementada em 4 (e agora é igual a 54)

#### Ver também 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 550 |
| Thread-seguro | &check; |
| Proibido no servidor ||


