---
id: blob
title: BLOB
---

- Um campo, variável ou expressão BLOB (Binary Large OBjects) é uma série contígua de bytes que pode ser tratada como um objeto completo ou cujos bytes podem ser direcionados individualmente. Um BLOB pode estar vazio (longitude nula) ou pode conter até 2147483647 bytes (2 GB).

> Como padrão, 4D estabelece o tamanho blob máximo para 2GB mas esse limite de tamanho pode ser menor dependendo de seu SO e de quanto espaço está disponível.

- Um BLOB é carregado totalmente na memória. Uma variável BLOB é mantida e existe apenas na memória. Um campo BLOB é carregado na memória desde o disco, como o resto do registro ao que pertence.
- Como os outros tipos de campo que podem reter uma grande quantidade de dados (tais como tipo de campo Imagem), os campos BLOB não são duplicados na memória quando um registro for modificado. Consequentemente o resultado devolvido pelos comandos `Old` e `Modified` não é significativo quando for aplicado a um campo BLOB.

## Passando parâmetros, ponteiros e resultados de funções

Os BLOBs em 4D podem ser passados como parâmetros aos comandos 4D ou às rotinas dos plugins que esperam parâmetros BLOB. Os BLOBS também podem ser passados como parâmetros para um método usuário ou serem retornados como resultado de uma função

Para passar um BLOB a seus próprios métodos, pode também definir um ponteiro ao BLOB e passar o ponteiro como um parâmetro.

**Exemplos:**
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

## Operador de atribuição

Pode atribuir BLOBS um para o outro.

**Exemplo:**
```4d
  ` Declara duas variáveis de tipo BLOB
 C_BLOB(vBlobA;vBlobB)
  ` Estabelece o tamanho do primeiro  BLOB a 10K
 SET BLOB SIZE(vBlobA;10*1024)
  ` Atribui o primeiro BLOB ao segundo
 vBlobB:=vBlobA
```

Entretanto, nenhum operador pode ser aplicado aos BLOBs.

## Direcionar os conteúdos de um BLOB

Cada byte de um BLOB pode ser dirigido individualmente utilizando os símbolos de colchetes {...}. Dentro de um BLOB, os bytes são numerados de 0 a N-1, onde N é o tamanho do BLOB. Exemplo:
```4d
  ` Declarar uma variável de tipo BLOB
 C_BLOB(vBlob)
  ` Estabelece o tamanho do BLOB para 256 bytes
 SET BLOB SIZE(vBlob;256)
  ` O loop abaixo inicia os 256 bytes do BLOB para zero
 For(vByte;0;BLOB size(vBlob)-1)
    vBlob{vByte}:=0
 End for
```
Como todos os bytes de um BLOB podem ser direcionados de forma individual, é possível armazenar o que quiser em um campo ou variável BLOB.
