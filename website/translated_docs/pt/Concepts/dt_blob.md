---
id: blob
title: BLOB
---

Um campo, variável ou expressão BLOB (Binary Large OBjects) é uma série contígua de bytes que pode ser tratada como um objeto completo ou cujos bytes podem ser direcionados individualmente. Um BLOB pode estar vazio (longitude nula) ou pode conter até 2147483647 bytes (2 GB).

> By default, 4D sets the maximum blob size to 2GB, but this size limit may be lower depending on your OS and how much space is available.

Um BLOB é carregado totalmente na memória. Uma variável BLOB é mantida e existe apenas na memória. Um campo BLOB é carregado na memória desde o disco, como o resto do registro ao que pertence.

Como os outros tipos de campo que podem reter uma grande quantidade de dados (tais como tipo de campo Imagem), os campos BLOB não são duplicados na memória quando um registro for modificado. Consequentemente o resultado devolvido pelos comandos `Old` e `Modified` não é significativo quando for aplicado a um campo BLOB.

## Parameter passing, Pointers and function results

Os BLOBs em 4D podem ser passados como parâmetros aos comandos 4D ou às rotinas dos plugins que esperam parâmetros BLOB. Os BLOBS também podem ser passados como parâmetros para um método usuário ou serem retornados como resultado de uma função

Para passar um BLOB a seus próprios métodos, pode também definir um ponteiro ao BLOB e passar o ponteiro como um parâmetro.

**Examples:**
```4d
  ` Declare a variable of type BLOB
 C_BLOB(anyBlobVar)
  ` The BLOB is passed as parameter to a 4D command
 SET BLOB SIZE(anyBlobVar;1024*1024)
  ` The BLOB is passed as parameter to an external routine
 $errCode:=Do Something With This BLOB(anyBlobVar)
  ` The BLOB is passed as a parameter to a method that returns a BLOB
 C_BLOB(retrieveBlob)
 retrieveBlob:=Fill_Blob(anyBlobVar)
  ` A pointer to the BLOB is passed as parameter to a user method
 COMPUTE BLOB(->anyBlobVar)
```
**Nota para  desenvolvedores de plugins:** um parâmetro BLOB se declara como "&O" (a letra "O", não o número "0").

## Assignment operator

Pode atribuir BLOBS um para o outro.

**Example:**
```4d
  ` Declare two variables of type BLOB
 C_BLOB(vBlobA;vBlobB)
  ` Set the size of the first BLOB to 10K
 SET BLOB SIZE(vBlobA;10*1024)
  ` Assign the first BLOB to the second one
 vBlobB:=vBlobA
```

Entretanto, nenhum operador pode ser aplicado aos BLOBs.

## Addressing BLOB contents

Cada byte de um BLOB pode ser dirigido individualmente utilizando os símbolos de colchetes {...}. Dentro de um BLOB, os bytes são numerados de 0 a N-1, onde N é o tamanho do BLOB. Example:
```4d
  ` Declare a variable of type BLOB
 C_BLOB(vBlob)
  ` Set the size of the BLOB to 256 bytes
 SET BLOB SIZE(vBlob;256)
  ` The loop below initializes the 256 bytes of the BLOB to zero
 For(vByte;0;BLOB size(vBlob)-1)
    vBlob{vByte}:=0
 End for
```
Como todos os bytes de um BLOB podem ser direcionados de forma individual, é possível armazenar o que quiser em um campo ou variável BLOB.
