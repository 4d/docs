---
id: receive-variable
title: RECEIVE VARIABLE
slug: /commands/receive-variable
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE VARIABLE.Syntax-->**RECEIVE VARIABLE** ( *variavel* )<!-- END REF-->
<!--REF #_command_.RECEIVE VARIABLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| variavel | Variable | &#8592; | Variável na qual receber |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RECEIVE VARIABLE.Summary-->RECEIVE VARIABLE recebe a *variavel*, que anteriormente foi enviada pelo [SEND VARIABLE](send-variable.md "SEND VARIABLE") do documento ou porta serial aberta anteriormente pelo [SET CHANNEL](set-channel.md "SET CHANNEL").<!-- END REF--> 

No modo interpretado, se a variável não existe antes da chamada a RECEIVE VARIABLE, a variável é criada, escrita e atribuída de acordo com o que foi recebido. No modo compilado, a variável deve ser do mesmo tipo, como o que é recebida. Em ambos os casos, o conteúdo da variável são substituídos com o que é recebido.

**Notas:**

1\. Se você receber uma variável de um documento utilizando este comando, o documento deve ter sido aberto usando o comando [SET CHANNEL](set-channel.md "SET CHANNEL"). Você não pode usar RECEIVE VARIABLE com um documento aberto com [Open document](open-document.md "Open document"), [Append document](append-document.md "Append document") ou [Create document](create-document.md "Create document").  
  
2\. Este comando não suporta variáveis de array. Se você quiser enviar e receber arrays de um documento ou através de uma porta serial, use os *Comandos BLOB*.

3\. Durante a execução das RECEIVE VARIABLE, o usuário pode interromper a recepção pressionando Ctrl-Alt-Shift (Windows) ou Command + Option + Shift (Macintosh). Esta interrupção gera um erro -9994, que você pode pegar com um método de tratamento de erros instalado usando [ON ERR CALL](on-err-call.md "ON ERR CALL"). Normalmente, você só precisa manipular a interrupção de uma recepção ao comunicar-se através de uma porta serial.

#### Exemplo 

Veja o exemplo para o comando [RECEIVE RECORD](receive-record.md "RECEIVE RECORD").

#### Variáveis e conjuntos do sistema 

A variável de sistema OK é definida como 1 se a variável for recebida. Caso contrário, a variável de sistema OK é definido como 0.

#### Ver também 

[ON ERR CALL](on-err-call.md)  
[RECEIVE RECORD](receive-record.md)  
[SEND RECORD](send-record.md)  
[SEND VARIABLE](send-variable.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 81 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |
| Proibido no servidor ||


