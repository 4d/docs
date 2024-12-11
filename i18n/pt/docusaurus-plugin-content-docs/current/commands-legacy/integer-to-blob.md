---
id: integer-to-blob
title: INTEGER TO BLOB
slug: /commands/integer-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.INTEGER TO BLOB.Syntax-->**INTEGER TO BLOB** ( *inteiro* ; *BLOB* ; *byteOrdem* {; offset | *} )<!-- END REF-->
<!--REF #_command_.INTEGER TO BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| inteiro | Integer | &#8594;  | Valor inteiro a escrever no BLOB |
| Blob | Blob | &#8594;  | BLOB a receber o valor inteiro |
| byteOrdem | Integer | &#8594;  | 0 Ordem de bytes em modo nativo 1 Ordem dos bytes Macintosh 2 Ordem dos bytes PC |
| offset &#124; * | Variável, Operador | &#8596; | Offset expressado em bytes no BLOB ou * para adicionar o valor |
|||| Novo offset depois de escrita se * for omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.INTEGER TO BLOB.Summary-->O comando INTEGER TO BLOB grava o valor inteiro de 2 bytes Inteiro no BLOB *blob*.<!-- END REF-->

O parâmetro *byteOrder* fixa a ordenação de bytes de valor de 2 bytes inteiro a ser escrito. Você passa uma das seguintes constantes pré-definidas fornecidas por 4D:

| Constante               | Tipo          | Valor |
| ----------------------- | ------------- | ----- |
| Native byte ordering    | Inteiro longo | 0     |
| Macintosh byte ordering | Inteiro longo | 1     |
| PC byte ordering        | Inteiro longo | 2     |

**Nota sobre a independência de plataforma:** Se você intercambiar BLOBs entre as plataformas Macintosh e PC, cabe a você a gerenciar os problemas da troca de bytes ao usar este comando.   

Se você especificar o parâmetro opcional \*, o valor inteiro de 2-byte é anexado ao BLOB e o tamanho do BLOB é aumentado em conformidade. Usando o parâmetro opcional \*, você pode armazenar qualquer número sequencial [Inteiro](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"), [Inteiro longo](# "Number between -2^31..(2^31)-1 (4-byte Integer)"), Real ou valores de texto (ver outros comandos BLOB) em um BLOB, enquanto o BLOB cabe na memória. 

Se você não especificar o parâmetro opcional \* ou o parâmetro variável offset, um valor inteiro de 2-bytes é armazenado no início do BLOB, substituindo o conteúdo anterior, o tamanho do BLOB é ajustado em conformidade. 

Se você passar o parâmetro *offset*, um valor inteiro de 2-byte é escrito no byte (a partir do zero) dentro do BLOB. Não importa onde você escreva o valor inteiro de 2-byte, o tamanho do BLOB é aumentado de acordo com o local que você passou (acima de 2 bytes, se necessário). Bytes recém-alocados, com exceção do que você está escrevendo, são inicializados em zero. 

Após a chamada, o parâmetro variável *offset* é devolvido, incrementado pelo número de bytes que foram escritos. Portanto, você pode reutilizar a mesma variável com outro comando de escrita BLOB para gravar outro valor. 

##### Nota 

**Nota de compatibilidade**: como este comando altera o blob passado como parâmetro, não é compatível com objetos blob (tipo 4D.Blob). Ver *Passing blobs and blob objects to 4D commands* em developer.4d.com

#### Exemplo 1 

Depois de executar este código:

```4d
 SET BLOB SIZE(vxBlob;100)
 vlOffset:=50
 INTEGER TO BLOB(518;vxBlob;Macintosh byte ordering;vlOffset)
```

* O tamanho de *vxBlob* é 100 bytes
* Em todas as plataformas *vxBLOB{50}* \= *$02* e *vxBLOB{51}* \= *$06*
* Os demais bytes do BLOB são inalterados
* A variável vlOffset foi incrementado em 2 (e agora é igual a 52)

#### Exemplo 2 

Depois de executar este código:

```4d
 INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering)
```

* O tamanho de *vxBlob* é 2 bytes
* Em todas as plataformas *vxBLOB{0}* \= *$06* e *vxBLOB{1}* \= *$02*

#### Exemplo 3 

Depois de executar este código:

```4d
 SET BLOB SIZE(vxBlob;100)
 INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering;*)
```

* O tamanho do *vxBlob* é de 102 bytes
* Em todas as plataformas *vxBLOB{100}* \= *$06* e *vxBLOB{101}* \= *$02*
* Os outros bytes do BLOB não mudam

#### Exemplo 4 

Depois de executar este código:

```4d
 INTEGER TO BLOB(0x0206;vxBlob;Native byte ordering)
```

* O tamanho do *vxBlob* é de 2 bytes
* Em Macintosh *vxBLOB{0}* \= *$02* y *vxBLOB{1}* \= *$06*
* Em PC *vxBLOB{0}* \= *$06* e *vxBLOB{1}* \= *$02*

#### Exemplo 5 

Depois de executar este código:

```4d
 INTEGER TO BLOB(0x0206;vxBlob;Macintosh byte ordering)
```

* O tamanho do *vxBlob* é de 2 bytes
* Em todas as plataformas *vxBLOB{0}* \= *$02* e *vxBLOB{1}* \= *$06*

#### Ver também 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 548 |
| Thread-seguro | &check; |
| Proibido no servidor ||


