---
id: append-document
title: Append document
slug: /commands/append-document
displayed_sidebar: docs
---

<!--REF #_command_.Append document.Syntax-->**Append document** ( *documento* {; *tipoArquivo*} ) : Time<!-- END REF-->
<!--REF #_command_.Append document.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text | &#8594;  | Nome de documento ou rota de acesso completa ou string vazia para caixa de diálogo de arquivo |
| tipoArquivo | Text | &#8594;  | Lista de tipos de documentos a serem pesquisados, ou "*" para não pesquisar os documentos |
| Resultado | Time | &#8592; | Número de referência de documento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Append document.Summary-->O comando Append document faz a mesma coisa que [Open document](open-document.md): permite abrir um documento em disco.<!-- END REF-->  
  
A única diferença é que Append document define a localização do arquivo ao final do documento enquanto que [Open document](open-document.md "Open document") o faz ao princípio.  
  
Para maior informação consulte [Open document](open-document.md) .

#### Exemplo 

O exemplo abaixo abre um documento existente chamado Nota, adiciona a string “e até logo” seguida por um retorno de carro ao final do documento, e fecha o documento. Se o documento já contiver a string “Adeus”, o documento conterá agora a string “Adeus e até logo”, seguido por um retorno de carro: 

```4d
 var vhDocRef : Time
 vhDocRef:=Append document("Nota.txt") // Abrir o documento Nota
 SEND PACKET(vhDocRef;" e até logo"+Char(13)) // Adicionar a string
 CLOSE DOCUMENT(vhDocRef) // Fechar o documento
```

#### Ver também 

[Create document](create-document.md)  
[Open document](open-document.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 265 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, Document, error |


