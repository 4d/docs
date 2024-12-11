---
id: send-packet
title: SEND PACKET
slug: /commands/send-packet
displayed_sidebar: docs
---

<!--REF #_command_.SEND PACKET.Syntax-->**SEND PACKET** ( {*docRef* ;} *pacote* )<!-- END REF-->
<!--REF #_command_.SEND PACKET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Número de referência do documento, o canal atual (porta serial ou documento) |
| pacote | Text, Blob | &#8594;  | String ou BLOB a ser enviado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SEND PACKET.Summary-->O comando SEND PACKET envia um pacote para uma porta serial ou a um documento.<!-- END REF--> Se *docRef* é especificado, o pacote é escrito no documento referenciado por *docRef*. Se *docRef* não for especificado, o pacote está escrito na porta serial ou no documento anteriormente aberto pelo comando [SET CHANNEL](set-channel.md). 

Um *pacote* é apenas um pedaço de dados, geralmente uma cadeia de caracteres.

Você também pode passar um BLOB no *pacote*. Isso lhe permite ignorar as restrições relacionadas com a codificação de caracteres enviados em modo texto (ver exemplo 2).

**Nota:** Quando você passa um BLOB no *pacote*, o comando não leva em conta qualquer conjunto de caracteres definido pelo comando [USE CHARACTER SET](use-character-set.md). O BLOB é enviado sem nenhuma modificação.

Antes de usar SEND PACKET, você deve abrir uma porta serial ou um documento com [SET CHANNEL](set-channel.md), ou abrir um documento com um dos comandos de documento.

Ao escrever um documento, o primeiro SEND PACKET começa a escrever no início do documento a menos que o documento seja aberto com [USE CHARACTER SET](use-character-set.md). Até que o documento seja fechado, cada pacote subseqüente é adicionado a quaisquer pacotes enviados anteriormente.

**Nota:** Este comando é útil para um documento aberto com [SET CHANNEL](set-channel.md). Por outro lado, para um documento aberto com o [Open document](open-document.md), [Create document](create-document.md) ou [Append document](append-document.md), você pode usar os comandos [Get document position](get-document-position.md) e [SET DOCUMENT POSITION](set-document-position.md) para obter e alterar o local no documento onde a próxima escrita (SEND PACKET) ou leitura ([RECEIVE PACKET](receive-packet.md)) irá ocorrer.

#### Exemplo 1 

O exemplo a seguir grava os dados dos campos para um documento. Ele grava os campos como campos de comprimento fixo. Campos de comprimento fixo são sempre um comprimento específico. Se um campo for menor que o comprimento especificado, o campo é preenchido com espaços. (Ou seja, os espaços são acrescentados para compensar o comprimento especificado). Embora o uso de campos de comprimento fixo seja um método ineficiente de armazenar dados, alguns sistemas de computadores e aplicativos ainda os usam:

```4d
 $vhDocRef :=Create document("") // Criar um documento
 If(OK=1) // O documento foi criado?
    For($vlRegistro;1;Records in selection([Pessoas])) //Loop uma vez para cada registro
  //Enviar um pacote. Criar o pacote de uma string de 15 espaços que contenham o primeiro campo de nome
       SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[Pessoas]Nome;1))
  // Enviar um segundo pacote. Criar o pacote de uma seqüência de 15 espaços que contenham o campo sobrenome
  // Este poderia ser o primeiro SEND PACKET, mas está separado para clarear
       SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[Pessoas]Sobrenome;1))
       NEXT RECORD([Pessoas])
    End for
  // Enviar um Char (26), que é usado como um marcador de fim-de-arquivo para alguns computadores
    SEND PACKET($vhDocRef;Char(SUB ASCII code))
    CLOSE DOCUMENT($vhDocRef) // Fechar o documento
 End if
```

#### Exemplo 2 

Este exemplo ilustra o envio e recuperação de caracteres estendidos através de um BLOB em um documento:

```4d
 var $enviar_blob : Blob
 var $receber_blob : Blob
 TEXT TO BLOB("âzértÿ";$enviar_blob;UTF8 text without length)
 SET BLOB SIZE($enviar_blob;16;255)
 $enviar_blob{6}:=0
 $enviar_blob{7}:=1
 $enviar_blob{8}:=2
 $enviar_blob{9}:=3
 $enviar_blob{10}:=0
 $vlDocRef:=Create document("blob.test")
 If(OK=1)
    SEND PACKET($vlDocRef;$enviar_blob)
    CLOSE DOCUMENT($vlDocRef)
 End if
 $vlDocRef:=Open document(document)
 If(OK=1)
    RECEIVE PACKET($vlDocRef;$receber_blob;65536)
    CLOSE DOCUMENT($vlDocRef)
 End if
```

#### Ver também 

[Get document position](get-document-position.md)  
[RECEIVE PACKET](receive-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 103 |
| Thread-seguro | &check; |
| Proibido no servidor ||


