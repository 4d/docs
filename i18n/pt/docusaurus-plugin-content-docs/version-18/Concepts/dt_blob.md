---
id: blob
title: BLOB
---

- O campo, a variável ou a expressão BLOB (Binary Large OBjects) é uma série contígua de bytes que pode ser tratada como um único objeto ou cujos bytes podem ser endereçados individualmente. Um BLOB pode estar vazio (comprimento nulo) ou conter até 2147483647 bytes (2 GB).

> Por padrão, 4D define o tamanho máximo de blob para 2 GB, mas este limite de tamanho pode ser menor, dependendo do seu Sistema Operacional e da quantidade de espaço disponível.

- Um BLOB é carregado na memória na sua totalidade. Uma variável BLOB é mantida e existe apenas na memória. Um campo BLOB é carregado na memória desde o disco, como o resto do registro ao que pertence.
- Como os outros tipos de campo que podem reter uma grande quantidade de dados (tais como tipo de campo Imagem), os campos BLOB não são duplicados na memória quando um registro for modificado. Consequentemente o resultado devolvido pelos comandos `Old` e `Modified` não é significativo quando for aplicado a um campo BLOB.

## Passagem de parâmetros, ponteiros e resultados de funções

BLOBs 4D podem ser passados como parâmetros para comandos 4D ou rotinas de plugin que esperam por parâmetros BLOB. Os BLOBS também pode ser passado como parâmetros para um método usuário ou ser retornado como um resultado de função.

Para passar um BLOB para seus próprios métodos, você também pode definir um ponteiro para a BLOB e passar o ponteiro como parâmetro.

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

Você pode endereçar cada byte de um BLOB individualmente usando os símbolos de chaves {...}. Em um BLOB, os bytes são numerados de 0 a N-1, onde N é o tamanho do BLOB. Exemplo:
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
Porque você pode endereçar todos os bytes de um BLOB individualmente, você pode realmente armazenar o que quiser em uma variável ou campo BLOB.
