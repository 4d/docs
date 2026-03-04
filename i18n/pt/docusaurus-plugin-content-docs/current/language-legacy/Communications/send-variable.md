---
id: send-variable
title: SEND VARIABLE
slug: /commands/send-variable
displayed_sidebar: docs
---

<!--REF #_command_.SEND VARIABLE.Syntax-->**SEND VARIABLE** ( *variavel* : Variable )<!-- END REF-->
<!--REF #_command_.SEND VARIABLE.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| variavel | Variable | &#8594; | Variável a ser enviada |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.SEND VARIABLE.Summary-->SEND VARIABLE envia *variavel* para o documento ou a porta serial aberta anteriormente pelo [SET CHANNEL](set-channel.md "SET CHANNEL").<!-- END REF--> A variável é enviada com um formato especial interno que pode ser lido somente por [RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE"). SEND VARIABLE envia a variável completa (incluindo o tipo e o valor).

**Notas:**

1. Se você enviar uma variável para um documento utilizando este comando, o documento deve ter sido aberto usando o comando [SET CHANNEL](set-channel.md "SET CHANNEL"). Você não pode usar SEND VARIABLE com um documento aberto com [Open document](../commands/open-document), [Create document](../commands/create-document) ou [Append document](../commands/append-document).
2. Este comando não suporta variáveis de array. Se você quiser enviar e receber arrays de um documento ou através de uma porta serial, use os novos comandos BLOB introduzidos na versão 6.

## Exemplo 

Veja o exemplo para o comando [RECEIVE RECORD](receive-record.md "RECEIVE RECORD").

## Ver também 

[RECEIVE RECORD](../commands/receive-record)  
[RECEIVE VARIABLE](../commands/receive-variable)  
[SEND RECORD](../commands/send-record)  
[SET CHANNEL](../commands/set-channel)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 80 |
| Thread-seguro | yes |


