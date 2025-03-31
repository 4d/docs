---
id: compress-blob
title: COMPRESS BLOB
slug: /commands/compress-blob
displayed_sidebar: docs
---

<!--REF #_command_.COMPRESS BLOB.Syntax-->**COMPRESS BLOB** ( *BLOB* {; *compressão*} )<!-- END REF-->
<!--REF #_command_.COMPRESS BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB a ser comprimido |
| compressão | Integer | &#8594;  | Se não se omite: 1, compressão máxima possível 2, velocidade de compressão máxima |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.COMPRESS BLOB.Summary-->O comando COMPRESS BLOB comprime o BLOB blob usando o algoritmo de compressão interno de 4D.<!-- END REF--> Este comando só comprime o BLOB cujo tamanho é superior a 255 bytes.

O parâmetro de compressão opcional permite definir a forma como o BLOB é compactado: Passe neste parâmetro uma das seguintes constantes, localizadas no tema *BLOB*:

| Constante                  | Tipo          | Valor | Comentário                                                                                                                                             |
| -------------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Compact compression mode   | Inteiro longo | 1     | Comprimido tanto quanto possível (á custa da velocidade das operações de compressão e descompressão). Método padrão.                                   |
| Fast compression mode      | Inteiro longo | 2     | Comprimido tão rápido quanto possível (e será descomprimido tão rápido quanto possível), à custa da taxa de compressão (o BLOB comprimido será maior). |
| GZIP best compression mode | Inteiro longo | \-1   | Compressão GZIP mais compacta                                                                                                                          |
| GZIP fast compression mode | Inteiro longo | \-2   | Compressão GZIP mais rápida                                                                                                                            |

Se passar outro valor ou se ignorar o parametro compressão, o método de compressão 1 é utilizado (algoritmo interno compacto).

Após a chamada, a variável OK é definida como 1 se o BLOB foi bem compactado. Se a compressão não pôde ser executada, a variável OK é definida como 0\. Se a compressão não pôde ser realizada devido à falta de memória ou porque o real tamanho do blob é menor que 255 bytes, nenhum erro é gerado e o método continua a sua execução.

Nos demais casos (isto é, o BLOB estiver danificado), o erro -10600 é gerado. Esse erro pode ser tratado usando o comando [ON ERR CALL](on-err-call.md).

Depois que um BLOB foi compactado, você pode expandi-lo usando o comando [ON ERR CALL](on-err-call.md).

Para detectar se o BLOB foi compactado, use o comando [BLOB PROPERTIES](blob-properties.md).

Advertência: O BLOB comprimido ainda é um BLOB, então não há nada para impedi-lo de modificar o seu conteúdo. No entanto, se você fizer isso, o comando [EXPAND BLOB](expand-blob.md) não será capaz de descompactar o BLOB corretamente.

#### Exemplo 1 

Este exemplo testa se o BLOB *vxMeuBlob* é comprimido e, se não for, comprime-o:

```4d
 BLOB PROPERTIES(vxMeuBlob;$vlComprimido;$vlTamanhoExpandido;$vlTamanhoAtual)
 If($vlComprimido=Is not compressed)
    COMPRESS BLOB(vxMeuBlob)
 End if
 
```

Note, no entanto, que se você aplicar COMPRESS BLOB para um BLOB já compactado, o comando detecta-o e não faz nada.

#### Exemplo 2 

Este exemplo permite que você selecione um documento e, em seguida, comprima-o:

```4d
 $vhDocRef :=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    DOCUMENT TO BLOB(Document;vxBlob)
    If(OK=1)
       COMPRESS BLOB(vxBlob)
       If(OK=1)
          BLOB TO DOCUMENT(Document;vxBlob)
       End if
    End if
 End if
```

#### Exemplo 3 

Envio de dados HTTP "brutos" comprimidos usando GZIP:

```4d
 COMPRESS BLOB($blob;GZIP Best compression mode)
 var $vEncoding : Text
 $vEncoding:="Content-encoding: gzip"
 WEB SET HTTP HEADER($vEncoding)
 WEB SEND RAW DATA($blob ;*)
```

#### Variáveis e conjuntos do sistema 

A variável OK é definida como 1 se o BLOB foi compactado com sucesso, caso contrário, ela é definido como 0.

#### Ver também 

[BLOB PROPERTIES](blob-properties.md)  
[EXPAND BLOB](expand-blob.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 534 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |


