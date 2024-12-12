---
id: send-record
title: SEND RECORD
slug: /commands/send-record
displayed_sidebar: docs
---

<!--REF #_command_.SEND RECORD.Syntax-->**SEND RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.SEND RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela da qual enviar o registro corrente, ou Tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SEND RECORD.Summary-->SEND RECORD envia o registro atual de *tabela* à porta serial ou documento aberto pelo comando [SET CHANNEL](set-channel.md "SET CHANNEL").<!-- END REF--> O registro é enviado com um formato especial interno que pode ser lido somente por [RECEIVE RECORD](receive-record.md "RECEIVE RECORD"). Se não existe registro atual, SEND RECORD não tem efeito.

O registro completo é enviado. Isso significa que imagens e BLOBs armazenados ou com o registro também são enviados. 

**Importante:** Quando os registros estão sendo enviados e recebidos através de SEND RECORD e [RECEIVE RECORD](receive-record.md "RECEIVE RECORD"), a estrutura da tabela de origem e a estrutura da tabela de destino devem ser compatíveis. Se não forem, 4D irá converter valores de acordo com as definições de tabela quando [RECEIVE RECORD](receive-record.md "RECEIVE RECORD") for executado.

**Nota:** Se você enviar um registro para um documento utilizando este comando, o documento deve ter sido aberto usando o comando [SET CHANNEL](set-channel.md "SET CHANNEL"). Você não pode usar SEND RECORD com um documento aberto com [Open document](open-document.md "Open document"), [Append document](append-document.md "Append document") ou [Create document](create-document.md "Create document").

**Nota de compatibilidade**: Desde a versão 11 de 4D, este comando não suporta mais sub-tabelas.

#### Exemplo 

 Veja o exemplo para o comando [RECEIVE RECORD](receive-record.md).

#### Ver também 

[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND VARIABLE](send-variable.md)  