---
id: blob-to-real
title: BLOB to real
slug: /commands/blob-to-real
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to real.Syntax-->**BLOB to real** ( *BLOB* ; *formatoReal* {; *offset*} ) : Real<!-- END REF-->
<!--REF #_command_.BLOB to real.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB do qual obter o valor de tipo Real |
| formatoReal | Integer | &#8594;  | 0 Formato real nativo 1 Formato real extendido 2 Formato real duplo Macintosh 3 Formato real duplo Windows |
| offset | Variable |&#8596; | Offset no BLOB (expressado em bytes) |
| || | Novo offset depois da leitura |
| Resultado | Real | &#8592; | Valor real |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BLOB to real.Summary-->O comando BLOB to real retorna um valor Real lido a partir do BLOB *blob*.<!-- END REF-->

O parâmetro *formatoReal* corrige o formato interno e ordenação de bytes do valor real a ser lido. Você passa uma das seguintes constantes pré-definidas fornecidas por 4D:

| Constante                    | Tipo          | Valor |
| ---------------------------- | ------------- | ----- |
| Native real format           | Inteiro longo | 0     |
| Extended real format         | Inteiro longo | 1     |
| Macintosh double real format | Inteiro longo | 2     |
| PC double real format        | Inteiro longo | 3     |

**Nota sobre a independência de plataforma:** Se você intercambiar BLOBs entre as plataformas Macintosh e PC, cabe a você a gerenciar os problemas de formatos reais e da troca de bytes ao usar este comando.

Se você especificar o parâmetro opcional *offset*, o valor Real é lido no offset (a partir de zero) dentro do BLOB. Se você não especificar o parâmetro opcional offset, os primeiros 8 ou 10 bytes do BLOB são lidos. 

**Nota:** Você deve passar um valor de deslocamento entre 0 (zero) e o tamanho do BLOB menos 8 ou 10\. Se você não fizer isso, um erro -111 é gerado.

Após a chamada, a variável é incrementada pelo número de bytes lidos. Portanto, você pode reutilizar a mesma variável com outro comando de leitura BLOB para ler outro valor.

#### Exemplo 

O exemplo a seguir lê 20 valores Reais de um BLOB, iniciando no offset 0x200:

```4d
 $vlOffset:=0x200
 For($viLoop;0;19)
    $vrValor:=BLOB to real(vxSomeBlob;PC byte ordering;$vlOffset)
  // Fazer algo com $vrValor
 End for
```

#### Ver também 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 553 |
| Thread-seguro | &check; |


