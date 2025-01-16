---
id: list-to-blob
title: LIST TO BLOB
slug: /commands/list-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.LIST TO BLOB.Syntax-->**LIST TO BLOB** ( *lista* ; *BLOB* {; *} )<!-- END REF-->
<!--REF #_command_.LIST TO BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| lista | Integer | &#8594;  | Lista hierárquica a armazenar no BLOB |
| Blob | Blob | &#8594;  | BLOB a receber a lista hierárquica |
| * | Operador | &#8594;  | * adicionar o valor |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LIST TO BLOB.Summary-->O comando LIST TO BLOB armazena a *lista* hierárquica no BLOB *blob*.<!-- END REF-->

Se você especificar o parâmetro opcional *\**, a lista hierárquica é anexada ao BLOB e o tamanho do BLOB é aumentado em conformidade. Usando o parâmetro opcional \*, você pode armazenar qualquer número de variáveis ou listas (ver outros comandos BLOB) em um BLOB, enquanto o BLOB couber na memória. 

Se você não especificar o parâmetro opcional *\**, a lista hierárquica é armazenada no início do BLOB, substituindo o conteúdo anterior, o tamanho do BLOB é ajustado em conformidade. 

Onde quer que a lista hierárquica seja armazenada, o tamanho do BLOB será aumentado, se necessário de acordo com o local especificado (até do tamanho da lista se necessário). Bytes modificados (exceto os que você definir) são colocados em 0 (zero). 

**Advertência:** Se você usar um BLOB para armazenar listas, você deve usar mais tarde o comando BLOB to list para ler o conteúdo do BLOB, porque as listas são armazenados em BLOBs usando um formato interno de 4D.

Após a chamada, se a lista tiver sido salva com sucesso, a variável OK é definida como 1\. Se a operação não pôde ser executada, a variável OK é definido como 0, por exemplo, se não havia memória suficiente.

**Nota sobre a independência de plataforma:** LIST TO BLOB e [BLOB to list](blob-to-list.md "BLOB to list") usam um formato interno de 4D para processamento de listas armazenadas em BLOBs. Como benefício, você não precisa se preocupar com a troca de bytes entre as plataformas ao usar esses dois comandos. Em outras palavras, um BLOB criado no Windows usando os comandos podem ser reutilizados em Macintosh, e vice-versa.

##### Nota 

**Nota de compatibilidade**: como este comando altera o blob passado como parâmetro, não é compatível com objetos blob (tipo 4D.Blob). Ver *Passing blobs and blob objects to 4D commands* em developer.4d.com

#### Exemplo 

Veja o exemplo para o comando [BLOB to list](blob-to-list.md "BLOB to list").

#### Ver também 

[BLOB to list](blob-to-list.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[SAVE LIST](save-list.md)  
[VARIABLE TO BLOB](variable-to-blob.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 556 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


