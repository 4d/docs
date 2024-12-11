---
id: blob
title: BLOB
---

- O campo, a variável ou a expressão BLOB (Binary Large OBjects) é uma série contígua de bytes que pode ser tratada como um único objeto ou cujos bytes podem ser endereçados individualmente. Um BLOB pode estar vazio (comprimento nulo) ou conter até 2147483647 bytes (2 GB).

> By default, 4D sets the maximum blob size to 2GB, but this size limit may be lower depending on your OS and how much space is available.

- Um BLOB é carregado na memória na sua totalidade. Uma variável BLOB é mantida e existe apenas na memória. A BLOB field is loaded into memory from the disk, like the rest of the record to which it belongs.
- Como os outros tipos de campo que podem reter uma grande quantidade de dados (tais como tipo de campo Imagem), os campos BLOB não são duplicados na memória quando um registro for modificado. Consequently, the result returned by the `Old` and `Modified` commands is not significant when applied to a BLOB field.

## Passagem de parâmetros, ponteiros e resultados de funções

4D BLOBs can be passed as parameters to 4D commands or plug-in routines that expect BLOB parameters. BLOBS can also be passed as parameters to a user method or be returned as a function result.

To pass a BLOB to your own methods, you can also define a pointer to the BLOB and pass the pointer as parameter.

**Exemplos:**
```4d
  Declarar uma variável do tipo BLOB
 C_BLOB(anyBlobVar)
  ` O BLOB é passado como parâmetro para um comando 4D
 SET BLOB SIZE(anyBlobVar;1024*1024)
  ` O BLOB é passado como parâmetro para uma rotina externa
 $errCode:=Do Something With This BLOB(anyBlobVar)
  ` O BLOB é passado como parâmetro para um método que retorna um BLOB
 C_BLOB(retrieveBlob)
 retrieveBlob:=Fill_Blob(anyBlobVar)
  ` Um ponteiro para o BLOB é passado como parâmetro para um método usuário
 COMPUTE BLOB(->anyBlobVar)
```
**Nota para  desenvolvedores de plugins:** um parâmetro BLOB se declara como "&O" (a letra "O", não o número "0").

## Operador de atribuição

É possível atribuir BLOBs uns aos outros.

**Exemplo:**
```4d
  ` Declarar duas variáveis do tipo BLOB
 C_BLOB(vBlobA; BlobB)
  ` Definir o tamanho do primeiro BLOB para 10K
 SET BLOB SIZE(vBlobA; 10*1024)
  ` Atribua o primeiro BLOB ao segundo
 vBlobB:=vBlobA
```

No entanto, nenhum operador pode ser aplicado a BLOBs.

## Endereçamento do conteúdo de um BLOB

You can address each byte of a BLOB individually using the curly brackets symbols {...}. Within a BLOB, bytes are numbered from 0 to N-1, where N is the size of the BLOB. Exemplo:
```4d
  ` Declare uma variável do tipo BLOB
 C_BLOB(vBlob)
  ` Definir o tamanho do BLOB para 256 bytes
 SET BLOB SIZE(vBlob;256)
  ` O loop abaixo inicializa os 256 bytes do BLOB a zero
 For(vByte;0;BLOB size(vBlob)-1)
    vBlob{vByte}:=0
 End for
```
Because you can address all the bytes of a BLOB individually, you can actually store whatever you want in a BLOB field or variable.
