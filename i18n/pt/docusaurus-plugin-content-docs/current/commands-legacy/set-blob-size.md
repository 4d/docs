---
id: set-blob-size
title: SET BLOB SIZE
slug: /commands/set-blob-size
displayed_sidebar: docs
---

<!--REF #_command_.SET BLOB SIZE.Syntax-->**SET BLOB SIZE** ( *BLOB* ; *tamanho* {; *preenchimento*} )<!-- END REF-->
<!--REF #_command_.SET BLOB SIZE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | Campo ou variável BLOB |
| tamanho | Integer | &#8594;  | Novo tamanho do BLOB |
| preenchimento | Integer | &#8594;  | Código ASCII do caractere de preenchimento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET BLOB SIZE.Summary-->SET BLOB SIZE redimensiona o BLOB *blob* de acordo com o valor passado no *tamanho*.<!-- END REF-->

Se você deseja alocar novos bytes para um BLOB e deseja que os bytes sejam inicializados com um valor específico, passe o valor (0 .. 255) para o parâmetro de *preenchimento*.

##### Nota 

**Nota de compatibilidade**: como este comando altera o blob passado como parâmetro, não é compatível com objetos blob (tipo 4D.Blob). Ver *Passing blobs and blob objects to 4D commands* em developer.4d.com

#### Tratamento de erro 

Se você não pode redimensionar um BLOB devido a memória insuficiente, o erro -108 é gerado. Você pode interceptar esse erro usando um método de interrupção [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Exemplo 1 

Quando você está no meio de um processo longo ou interprocesso BLOB, é uma boa idéia liberar a memória que ocupa. Para isso, escreva:

```4d
 SET BLOB SIZE(aProcessBLOB;0)
 SET BLOB SIZE(◊anInterprocessBLOB;0)
```

#### Exemplo 2 

O exemplo a seguir cria um BLOB de 16K cheios de 0xFF:

```4d
 var vxData : Blob
 SET BLOB SIZE(vxData;16*1024;0xFF)
```

#### Ver também 

[BLOB size](blob-size.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 606 |
| Thread-seguro | &check; |


