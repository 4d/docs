---
id: receive-packet
title: RECEIVE PACKET
slug: /commands/receive-packet
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE PACKET.Syntax-->**RECEIVE PACKET** ( {*docRef* ;} *receiveVar* ; stopChar | numBytes )<!-- END REF-->
<!--REF #_command_.RECEIVE PACKET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Número de referência do documento, o canal atual (porta serial ou documento) |
| receiveVar | Text, Blob | &#8592; | Variável a receber os dados |
| stopChar &#124; numBytes | String, Inteiro longo | &#8594;  | Caractere(s) no qual parar a recepção, ou Número de bytes a receber |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RECEIVE PACKET.Summary-->RECEIVE PACKET lê caracteres a partir de uma porta serial ou de um documento.<!-- END REF-->

Se *docRef* é especificado, este comando recupera dados de um documento aberto, usando [Open document](open-document.md), [Create document](create-document.md) ou [Append document](append-document.md). Se *docRef* for omitido, o comando recupera dados da porta serial ou o documento aberto usando [SET CHANNEL](set-channel.md).

Seja qual for a fonte, os caracteres lidos são retornados em *receiveVar*, que deve ser um texto, String ou variável BLOB. Se os caracteres foram enviados pelo comando [SEND PACKET](send-packet.md), o tipo deve corresponder ao do pacote enviado. 

**Notas:**

* Quando o pacote recebido é do tipo BLOB, o comando não leva em conta qualquer conjunto de caracteres definido pelo comando [USE CHARACTER SET](use-character-set.md). O BLOB é retornado sem nenhuma modificação
* Quando o pacote recebido é do tipo texto, o comando RECEIVE PACKET suporta Byte Order Marks (BOM). Neste caso, se o conjunto de caracteres atual é do tipo Unicode (UTF-8, UTF-16 ou UTF-32), 4D tenta identificar um BOM entre os primeiros bytes recebidos. Se algum for detectado, ele é filtrado da variável *receiveVar* e 4D usa o conjunto de caracteres que define, em vez do conjunto de caracteres atual.

Para ler um determinado número de caracteres, passe este número em *numBytes*. Se a variável *receiveVar* é do tipo de texto, em uma única chamada você pode ler até 2 GB de texto (valor teórico). 

Para receber dados até que uma cadeia particular (composta por um ou mais caracteres) passe essa cadeia em *stopChar* (a cadeia não é devolvida em *receiveVar*).

Neste caso, se a seqüência de caracteres especificada pelo *stopChar* não é encontrada:

* Quando RECEIVE PACKET estiver lendo um documento, ele irá parar de ler no final do documento.
* Quando RECEIVE PACKET estiver lendo a partir de uma porta serial, ele vai tentar esperar indefinidamente até que o tempo limite (se houver) haja decorrido (ver [SET TIMEOUT](set-timeout.md)) ou até que o usuário interrompa a recepção (veja abaixo).

Durante a execução do RECEIVE PACKET, o usuário pode interromper a recepção pressionando Ctrl-Alt-Shift (Windows) ou Command + Option + Shift (Macintosh). Esta interrupção gera um erro -9994, que você pode pegar com um método de tratamento de erros instalado usando [ON ERR CALL](on-err-call.md). Normalmente, você só terá de lidar com a interrupção de uma recepção na comunicação através de uma porta serial.

Ao ler um documento, o primeiro RECEIVE PACKET começa a ler no início do documento. A leitura de cada pacote subseqüente começa no caractere após o último byte lido.

**Nota:** Este comando é útil para um documento aberto com [SET CHANNEL](set-channel.md). Por outro lado, para um documento aberto com o [Open document](open-document.md), [Create document](create-document.md) ou [Append document](append-document.md) você pode usar os comandos [Get document position](get-document-position.md) e [SET DOCUMENT POSITION](set-document-position.md) para obter e alterar o local no documento onde acontecerá a próxima escrita ([SEND PACKET](send-packet.md)) ou leitura (RECEIVE PACKET).

Ao tentar ler após o final de um arquivo, RECEIVE PACKET retornará os dados lidos até aquele ponto e a variável OK será definido como 1\. Então, o próximo RECEIVE PACKET irá retornar uma string vazia e definir a variável OK para zero.

**Nota:** Em modo não-Unicode (modo de compatibilidade), quando você usar o comando RECEIVE PACKET para ler caracteres de um documento do Windows e não quiser usar mapas para converter caracteres ASCII em caracteres Windows Mac OS, você pode usar a função *Win to Mac*.

#### Exemplo 1 

O exemplo a seguir lê 20 caracteres de uma porta serial na variável *getTwenty*:

```4d
 RECEIVE PACKET(getTwenty;20)
```

#### Exemplo 2 

O exemplo a seguir lê os dados do documento referenciado pela variável *myDoc* na variável *vData*. Ele lê até encontrar um retorno de carro:

```4d
 RECEIVE PACKET(myDoc;vData;Char(Carriage return))
```

#### Exemplo 3 

O exemplo a seguir lê os dados do documento referenciado pela variável *myDoc* na variável *vData*. Ele lê até encontrar o  (Fim da célula da tabela)  

```4d
 RECEIVE PACKET(myDoc;vData;"")
```

#### Exemplo 4 

O exemplo a seguir lê dados de um documento em campos. Os dados são armazenados como campos de comprimento fixo. O método chama uma subrotina para retirar espaços à direita (espaços no final da cadeia). A sub-rotina segue o método: 

```4d
 $vhDocRef :=Open document("";"TEXT") // Abertura de um documento de tipo TEXTO
 If(OK=1) // Se o documento está aberto
    Repeat // Loop até que não haja mais dados 
       RECEIVE PACKET($vhDocRef;$Var1;15) // Leitura de 15 caracteres
       RECEIVE PACKET($vhDocRef;$Var2;15) // Faz o mesmo para o segundo campo
       If(($Var1#"")|($Var2#"")) // Se pelo menos um dos campos não estiver vazio
          CREATE RECORD([Pessoas]) // Cria um novo registro
          [Pessoas]Nome:=Strip($Var1) // Salva o nome
          [Pessoas]Sobrenome:=Strip($Var2) // Salva o sobrenome 
          SAVE RECORD([Pessoas]) // Salvar o registro
       End if
    Until(OK=0)
    CLOSE DOCUMENT($vhDocRef) // Fecha o documento
 End if
```

Os espaços no final dos dados são removidos através do seguinte método, chamado Strip:

```4d
 For($i;Length($1);1;-1) // Loop desde o fim da string ao início 
    If($1[[$i]]#" ") // Se não é um espaço…
       $i :=-$i  // Forçar o loop a parar 
    End if
 End for
 $0:=Delete string($1;-$i;Length($1)) // Apagar os espaços
```

#### Variáveis e conjuntos do sistema 

Depois de um chamado a RECEIVE PACKET, a variável sistema OK recebe o valor 1 se o pacote é recebido sem erros. Caso contrário, a variável sistema OK recebe o valor 0.

#### Ver também 

[Get document position](get-document-position.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[SEND PACKET](send-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  
[SET TIMEOUT](set-timeout.md)  
[USE CHARACTER SET](use-character-set.md)  