---
id: blob-to-integer
title: BLOB to integer
slug: /commands/blob-to-integer
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to integer.Syntax-->**BLOB to integer** ( *BLOB* ; *byteOrdem* {; *offset*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to integer.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB do qual obter o valor inteiro |
| byteOrdem | Integer | &#8594;  | 0 Ordem de bytes nativo 1 Ordem de bytes Macintosh 2 Ordem de bytes PC |
| offset | Variable | &#8596;  | Offset no BLOB (expressado em bytes) |
| || | Novo offset depois da leitura |
| Resultado da função | Integer | &#8592; | Valor inteiro (2 bytes) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BLOB to integer.Summary-->O comando BLOB to integer retorna um valor inteiro de 2 bytes inteiro lido do BLOB *blob*.<!-- END REF-->

O parâmetro *byteOrdem* fixa a ordenação de bytes de valor de 2 bytes inteiro a ser lido. Você passa uma das seguintes constantes pré-definidas fornecidas por 4D:

| Constante               | Tipo          | Valor |
| ----------------------- | ------------- | ----- |
| Native byte ordering    | Inteiro longo | 0     |
| Macintosh byte ordering | Inteiro longo | 1     |
| PC byte ordering        | Inteiro longo | 2     |

  
**Nota sobre a independência de plataforma:** Se você intercambiar BLOBs entre as plataformas Macintosh e PC, cabe a você a gerenciar os problemas da troca de bytes ao usar este comando.

Se você especificar o parâmetro opcional *offset* , o valor inteiro de 2-byte é lido no offset (a partir de zero) dentro do BLOB. Se você não especificar o parâmetro opcional *offset*, os dois primeiros bytes do BLOB são lidos.

**Nota:** Você deve passar um offset (em bytes) entre 0 (zero) e o tamanho do BLOB menos 2\. Se você não fizer isso, um erro -111 é gerado.

Após a chamada, a variável é incrementada pelo número de bytes lidos, portanto, você pode reutilizar a mesma variável com outro comando de leitura BLOB para ler outro valor. 

#### Exemplo 

O exemplo a seguir lê 20 valores inteiros de um BLOB, iniciando no offset 0x200:

```4d
 $vlOffset:=0x200
 For($viLoop;0;19)
    $viValor:=BLOB to integer(vxUnBlob;PC byte ordering;$vlOffset)
  // Fazer algo com $viValor
 End for
```

#### Ver também 

[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 549 |
| Thread-seguro | &check; |
| Proibido no servidor ||


