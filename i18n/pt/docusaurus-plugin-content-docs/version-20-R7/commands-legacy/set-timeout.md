---
id: set-timeout
title: SET TIMEOUT
slug: /commands/set-timeout
displayed_sidebar: docs
---

<!--REF #_command_.SET TIMEOUT.Syntax-->**SET TIMEOUT** ( *segundos* )<!-- END REF-->
<!--REF #_command_.SET TIMEOUT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| segundos | Integer | &#8594;  | Segundos até o timeout |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET TIMEOUT.Summary-->O comando SET TIMEOUT especifica quanto tempo um comando de porta serial tem para terminar.<!-- END REF--> Se o comando da porta serial não for concluído dentro do tempo especificado, em *segundos*, o comando da porta serial é cancelado, um erro -9990 é gerado, e a variável de sistema OK é definida como 0\. Você pode pegar o erro com um método de tratamento de erros instalado usando [ON ERR CALL](on-err-call.md "ON ERR CALL").

Note que o tempo é o tempo total permitido para o comando ser executado, e não o tempo entre caracteres recebidos. Para cancelar uma configuração anterior e parar de monitorar a comunicação da porta serial, utilize uma configuração de 0 para os *segundos*.

Os comandos que são afetados pela configuração de tempo limite são:

* [RECEIVE PACKET](receive-packet.md)
* [RECEIVE RECORD](receive-record.md "RECEIVE RECORD")
* [RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE")

#### Exemplo 

O exemplo a seguir define a porta serial para receber dados. Em seguida, ele define um limite de tempo. Os dados são lidos com [RECEIVE PACKET](receive-packet.md). Se os dados não forem recebidos em tempo, ocorre um erro:

```4d
 SET CHANNEL(MacOS serial port;Speed 9600+Data bits 8+Stop bits one+Parity none) // Abertura da porta serial
 SET TIMEOUT(10) // Fixar o timeout em 10 segundos
 ON ERR CALL("INTERCEPTAR ERROS COM") // Tratar as eventuais interrupções 
 RECEIVE PACKET(vtBuffer;Char(13)) // Ler até encontrar um retorno de carro
 If(OK=0)
    ALERT("Erro durante o recebimento de dados.")
 Else
    [Pessoas]Nome:=vtBuffer // Salvar os dados recebidos em um campo
 End if
 ON ERR CALL("")
```

#### Ver também 

[ON ERR CALL](on-err-call.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 268 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |
| Proibido no servidor ||


