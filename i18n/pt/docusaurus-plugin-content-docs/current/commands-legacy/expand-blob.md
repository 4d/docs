---
id: expand-blob
title: EXPAND BLOB
slug: /commands/expand-blob
displayed_sidebar: docs
---

<!--REF #_command_.EXPAND BLOB.Syntax-->**EXPAND BLOB** ( *BLOB* )<!-- END REF-->
<!--REF #_command_.EXPAND BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB a expandir |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.EXPAND BLOB.Summary-->O comando EXPAND BLOB expande o BLOB blob que anteriormente foi compactado usando o comando [COMPRESS BLOB](compress-blob.md "COMPRESS BLOB").<!-- END REF-->  
  
Após a chamada, a variável OK é definida como 1 se o BLOB foi expandido. Se a expansão não pode ser realizada, a variável OK é definido como 0.

Se a expansão não pôde ser realizada devido à falta de memória, nenhum erro é gerado e o método continua a sua execução.   
Em qualquer outro caso (ou seja, o BLOB não tenha sido comprimido ou está danificado), o erro -10600 é gerado. Esse erro pode ser tratado usando o comando [ON ERR CALL](on-err-call.md "ON ERR CALL"). 

Para verificar se o BLOB foi compactado, use o comando [BLOB PROPERTIES](blob-properties.md "BLOB PROPERTIES").

#### Exemplo 1 

Este exemplo testa se o BLOB *vxMyBlob* é comprimido e, em caso afirmativo, expande-lo: 

```4d
 BLOB PROPERTIES(vxMiBlob;$vlComprimido;$vlTamanhoExpandido;$vlTamanhoActual)
 If($vlComprimido#Is not compressed)
    EXPAND BLOB(vxMiBlob)
 End if
```

#### Exemplo 2 

Este exemplo testa se o BLOB vxMyBlob é comprimido e, em caso afirmativo, expande-lo:

```4d
 $vhDocRef :=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    DOCUMENT TO BLOB(Document;vxBlob)
    If(OK=1)
       BLOB PROPERTIES(vxBlob;$vlComprimido;$vlTamanhoExpandido;$vlTamahoActual)
       If($vlComprimido#Is not compressed)
          EXPAND BLOB(vxBlob)
          If(OK=1)
             BLOB TO DOCUMENT(Document;vxBlob)
          End if
       End if
    End if
 End if
```

#### Variáveis e conjuntos do sistema 

A variável OK é definida como 1 se o BLOB foi expandido com êxito, caso contrário, é definido como 0.

#### Ver também 

[BLOB PROPERTIES](blob-properties.md)  
[COMPRESS BLOB](compress-blob.md)  