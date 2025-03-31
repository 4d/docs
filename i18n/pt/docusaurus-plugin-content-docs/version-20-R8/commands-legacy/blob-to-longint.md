---
id: blob-to-longint
title: BLOB to longint
slug: /commands/blob-to-longint
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to longint.Syntax-->**BLOB to longint** ( *BLOB* ; *byteOrdem* {; *offset*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to longint.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB do qual obter o valor inteiro longo |
| byteOrdem | Integer | &#8594;  | 0 Ordem de bytes nativo 1 Ordem de bytes Macintosh 2 Ordem de bytes PC |
| offset | Variable |&#8596;  | Offset no BLOB (expressado em bytes) |
| || | Novo offset depois da leitura |
| Resultado da função | Integer | &#8592; | Valor inteiro longo (4 bytes) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BLOB to longint.Summary-->O comando BLOB to longint retorna um valor de tipo Inteiro longo (4 bytes) lido do BLOB *blob*.<!-- END REF-->

O parâmetro *byteOrder* fixa a ordem dos bytes do valor inteiro longo de 4-byte a ser lido. Você passa uma das seguintes constantes pré-definidas fornecidas por 4D:

| Constante               | Tipo          | Valor |
| ----------------------- | ------------- | ----- |
| Native byte ordering    | Inteiro longo | 0     |
| Macintosh byte ordering | Inteiro longo | 1     |
| PC byte ordering        | Inteiro longo | 2     |

**Nota sobre a independência de plataforma:** Se você intercambiar BLOBs entre as plataformas Macintosh e PC, cabe a você a gerenciar os problemas da troca de bytes ao usar este comando.

Se você especificar o parâmetro opcional *offset* , o valor inteiro de 4-byte é lido no offset (a partir de zero) dentro do BLOB. Se você não especificar o parâmetro opcional *offset*, os quatro primeiros bytes do BLOB são lidos.

**Nota:** Você deve passar um valor de offset entre 0 (zero) e o tamanho do BLOB menos 4\. Se você não fizer isso, um erro -111 é gerado.

Após a chamada, a variável é incrementada pelo número de bytes lidos. Portanto, você pode reutilizar a mesma variável com outro comando de leitura BLOB para ler outro valor.

#### Exemplo 

O exemplo a seguir lê 20 valores Inteiro longo de um BLOB, iniciando no offset 0x200:

```4d
 $vlOffset:=0x200
 For($viLoop;0;19)
    $vlValor:=BLOB to longint(vxUnBlob;PC byte ordering;$vlOffset)
  // Fazer algo com $vlValor
 End for
```

#### Ver também 

[BLOB to integer](blob-to-integer.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 551 |
| Thread-seguro | &check; |


