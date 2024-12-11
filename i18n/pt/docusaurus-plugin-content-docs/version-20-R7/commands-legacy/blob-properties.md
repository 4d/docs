---
id: blob-properties
title: BLOB PROPERTIES
slug: /commands/blob-properties
displayed_sidebar: docs
---

<!--REF #_command_.BLOB PROPERTIES.Syntax-->**BLOB PROPERTIES** ( *BLOB* ; *comprimido* {; *descompTam* {; *tamanhoAtual*}} )<!-- END REF-->
<!--REF #_command_.BLOB PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB do qual obter informação |
| comprimido | Integer | &#8592; | 0 = BLOB não está comprimido 1 = BLOB comprimido modo compacto 2 = BLOB comprimido modo rápido |
| descompTam | Integer | &#8592; | Tamanho do BLOB (em bytes) quando não está comprimido |
| tamanhoAtual | Integer | &#8592; | Tamanho atual do BLOB (em bytes) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BLOB PROPERTIES.Summary-->O comando **BLOB PROPERTIES** retorna informações sobre o *blob* BLOB.<!-- END REF-->diz se o BLOB é comprimido ou não, e retorna um dos seguintes valores.

| Constante                  | Tipo          | Valor | Comentário                                                                                                                                             |
| -------------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Compact compression mode   | Inteiro longo | 1     | Comprimido tanto quanto possível (á custa da velocidade das operações de compressão e descompressão). Método padrão.                                   |
| Fast compression mode      | Inteiro longo | 2     | Comprimido tão rápido quanto possível (e será descomprimido tão rápido quanto possível), à custa da taxa de compressão (o BLOB comprimido será maior). |
| GZIP best compression mode | Inteiro longo | \-1   | Compressão GZIP mais compacta                                                                                                                          |
| GZIP fast compression mode | Inteiro longo | \-2   | Compressão GZIP mais rápida                                                                                                                            |
| Is not compressed          | Inteiro longo | 0     | Sem compressão                                                                                                                                         |

* Seja qual for o estado de compressão do BLOB, o parâmetro expandedSize retorna o tamanho do BLOB quando não é comprimido.
* O parâmetro *tamanhoAtual* retorna o tamanho atual do BLOB. Se o BLOB estiver compactado, você normalmente irá obter *tamanhoAtual* menor que *descompTam*. Se o BLOB não está compactado, você vai sempre obter *tamanhoAtual* igual descompTam.

#### Exemplo 1 

Veja os exemplos para os comandos [COMPRESS BLOB](compress-blob.md "COMPRESS BLOB") e [EXPAND BLOB](expand-blob.md "EXPAND BLOB").

#### Exemplo 2 

Depois que um BLOB foi comprimido, o método de projeto obtém a porcentagem de espaço salvo por compressão:

```4d
  // Método de projeto Espaço economizado por compressão
  // Espaço economizado pela compressão (Ponteiro {; Ponteiro } ) -> Inteiro Longo
  // Espaço economizado pela compressão ( -> BLOB {; -> bytesEconomizados } ) -> Porcentagem
 
 var $1;$2 : Pointer
 var $0;$vlComprimido;$vlDescompTam;$vlTamanhoAtual : Integer
 
 BLOB PROPERTIES($1->;$vlComprimido;$vlDescompTam;$vlTamanhoAtual)
 If($vlDescompTam=0)
    $0:=0
    If(Count parameters>=2)
       $2->:=0
    End if
 Else
    $0:=100-(($vlTamanhoAtual/$vlDescompTam)*100)
    If(Count parameters>=2)
       $2->:=$vlDescompTam-$vlTamanhoAtual
    End if
 End if
```

Depois que este método tenha sido adicionado à sua aplicação, você pode usá-lo desta maneira:

```4d
  // ...
 COMPRESS BLOB(vxBlob)
 $vlPorcentaje:=Espaço economizado pela compressão(->vxBlob;->vlTamanhoBlob)
 ALERT("A compressão economizou "+String(vlBlobSize)+" bytes, "+String($vlPorcentagem;"#0%")+
 " de espaço.")
```

#### Ver também 

[COMPRESS BLOB](compress-blob.md)  
[EXPAND BLOB](expand-blob.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 536 |
| Thread-seguro | &check; |
| Proibido no servidor ||


