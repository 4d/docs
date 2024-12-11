---
id: set-channel
title: SET CHANNEL
slug: /commands/set-channel
displayed_sidebar: docs
---

<!--REF #_command_.SET CHANNEL.Syntax-->**SET CHANNEL** ( *porta* ; *configuraçao* ) <br/>
**SET CHANNEL** ( *operaçao* ; *documento* )<!-- END REF-->
<!--REF #_command_.SET CHANNEL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| porta | Integer | &#8594;  | Número da porta serial |
| configuraçao | Integer | &#8594;  | Configuração da porta serial |
| SET CHANNEL ( operaçao ; documento ) |
| Parâmetro | Tipo | Descrição |
| operaçao | Integer | &#8594;  | Operação de documento a ser realizada |
| documento | Text | &#8594;  | Nome do documento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET CHANNEL.Summary-->O comando SET CHANNEL abre uma porta serial ou um documento.<!-- END REF--> Você pode abrir apenas uma porta serial ou um documento de uma vez com este comando. Para fechar uma porta serial aberta, passe SET CHANNEL (11).

**Nota histórica:** Este comando era originalmente o primeiro comando 4D utilizado para trabalhar com portas seriais e documentos em disquetes. Desde aquela época, novos comandos foram adicionados. Hoje, você normalmente irá trabalhar com documentos no disco usando os comandos [Open document](open-document.md "Open document"), [Create document](create-document.md "Create document") e [Append document](append-document.md "Append document"). Com esses comandos, você pode ler e escrever caracteres para e de documentos usando [SEND PACKET](send-packet.md "SEND PACKET") ou [RECEIVE PACKET](receive-packet.md) (estes comandos funcionam com SET CHANNEL, também). No entanto, se você quiser usar os comandos [SEND VARIABLE](send-variable.md "SEND VARIABLE"), [RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE"), [SEND RECORD](send-record.md "SEND RECORD") e [RECEIVE RECORD](receive-record.md "RECEIVE RECORD"), você deve usar SET CHANNEL para acessar o documento no disco. 

A descrição de SET CHANNEL é composta de duas seções:

* Trabalhando com portas seriais
* Trabalhando com documentos

#### Trabalho com portas seriais: SET CHANNEL (porta, configurações) 

A primeira forma do comando SET CHANNEL abre uma porta serial, atribui o protocolo de criação e informação de outra porta. Os dados podem ser enviados com [SEND PACKET](send-packet.md "SEND PACKET"), [SEND RECORD](send-record.md "SEND RECORD") ou [SEND VARIABLE](send-variable.md "SEND VARIABLE") e recebido com [RECEIVE BUFFER](receive-buffer.md "RECEIVE BUFFER"), [RECEIVE PACKET](receive-packet.md), [RECEIVE RECORD](receive-record.md "RECEIVE RECORD") ou [RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE").

* O primeiro parâmetro, *porta*, seleciona a porta e o protocolo. Você pode dirigir até 99 portas seriais (uma de cada vez):

| **Valores porta** | **Descrição**                                                                        |               |
| ----------------- | ------------------------------------------------------------------------------------ | ------------- |
| 0                 | Porta impressora (Macintosh) ou COM2 (PC) sem protocolo                              |               |
| 1                 | Porta modem (Macintosh) ou COM1 (PC) sem protocolo                                   |               |
| 20                | Porta impressora (Macintosh) ou COM2 (PC) com protocolo de sofware tal               | como XON/XOFF |
| 21                | Porta modem (Macintosh) ou COM1 (PC) com protocolo de sofware tal como XON/XOFF      |               |
| 30                | Porta impressora (Macintosh) ou COM2 (PC) com protocolo de hardware tal como RTS/CTS |               |
| 31                | Porta modem (Macintosh) ou COM1 (PC) com protocolo de hardware tal como RTS/CTS      |               |
| 101 a 199         | Comunicação serial sem protocolo                                                     |               |
| 201 a 299         | Comunicação serial com protocolo de software tal como XON/XOFF                       |               |
| 301 a 399         | Comunicação serial com protocolo de hardware tal como RTS/CTS                        |               |

**Importante:** O valor que você passa na *porta* deve se referir a uma porta serial COM já existente e reconhecida pelo sistema operacional. Por exemplo, a fim de ser capaz de usar os valores de 101, 103 e 125, as portas seriais COM1, COM3 e COM25 deve ter sido configuradas corretamente.

##### Nota sobre as portas seriais 

Uma configuração padrão do Mac OS e Windows suportam duas portas seriais: no Mac OS, a porta do modem e a porta de impressora, no Windows, as portas COM1 e COM2\. No entanto, portas seriais adicionais podem ser adicionados através da utilização de placas de extensão. Originalmente, 4D só asignava duas portas seriais padrão e foi só depois que o apoio de portas adicionais foi implementado. Por razões de compatibilidade, os dois sistemas de endereçamento foram mantidos.  
\- Se você quiser um endereço de porta serial padrão (printer/COM2 ou modem/COM1), você pode passar no parâmetro porta os seguintes valores 0, 1, 20, 21, 30 e 31 (que correspondem a velho método de endereçamento), ou um valor maior que 100 (leia a explicação a seguir).   
\- Se você quer abordar portas seriais adicionais, você precisará passar o valor de N+100 (onde N é o valor da porta com o endereço). Você também pode considerar a adição de 100 ou 200 ao valor acima mencionado (N+100), se você quer selecionar, respectivamente, um software ou um protocolo de hardware. 

##### Exemplo 1 

Se você quiser usar a porta printer/COM2 sem protocolo, você pode usar uma das seguintes sintaxes:

```4d
 SET CHANNEL(0;param)
```

ou

```4d
 SET CHANNEL(102;param)
```

##### Exemplo 2 

Se você quiser usar a porta modem/COM1 com o protocolo XON / XOFF, você pode usar uma das seguintes sintaxes:

```4d
 SET CHANNEL(21;param)
```

ou

```4d
 SET CHANNEL(201;param)
```

##### Exemplo 3 

Se você quiser usar a porta COM 25 com o protocolo RTS / CTS, você precisa usar a seguinte sintaxe: 

```4d
 SET CHANNEL(325;param)
```

• As configurações de parâmetros definem a velocidade, o número de bits de dados, número de stop bits e a paridade. Você determina o valor das configurações adicionando a velocidade, bits de dados, bits de parada, e os valores de paridade, conforme listado na tabela a seguir. Por exemplo, para definir 1200 baud, 8 bits de dados, 1 bit de parada e sem paridade, você poderia adicionar 94 + 3072 + 16384 + 0 = 19550\. Você usaria então 19.550 como o valor do parâmetro de *configuraçao*. 

| **Valor a acumular** **em param** | **Descrição** |         |
| --------------------------------- | ------------- | ------- |
| Velocidade                        | 380           | 300     |
| (em baud)                         | 189           | 600     |
| 94                                | 1200          |         |
| 62                                | 1800          |         |
| 46                                | 2400          |         |
| 30                                | 3600          |         |
| 22                                | 4800          |         |
| 14                                | 7200          |         |
| 10                                | 9600          |         |
| 4                                 | 19200         |         |
| 2                                 | 28800         |         |
| 1                                 | 38400         |         |
| 0                                 | 57600         |         |
| 1022                              | 115200        |         |
| 1021                              | 230400        |         |
| Bits de dados                     | 0             | 5       |
| 2048                              | 6             |         |
| 1024                              | 7             |         |
| 3072                              | 8             |         |
| Bits de stop                      | 16384         | 1       |
| –32768                            | 1.5           |         |
| –16384                            | 2             |         |
| Paridade                          | 0             | Nenhuma |
| 4096                              | Ímpar         |         |
| 12288                             | Par           |         |

**Truque:** Os diferentes valores numéricos para serem acumulados e passados na *porta* e *configuraçao* (mas não incluindo os valores para COM1 ... COM99) estão disponíveis como constantes predefinidas no tema das *Comunicações* dentro do ambiente de desenho. Para COM1 ...COM99 , usar literais numéricos. 

#### Trabalhando com documentos em disco: SET CHANNEL (operação; documento) 

A segunda forma do comando SET CHANNEL permite criar, abrir e fechar um documento. Ao contrário dos comandos de documentos do sistema, ele pode abrir apenas um documento de cada vez. O documento pode ser lido ou escrito. Consulte a seção *Documentos de Sistema* para maiores informações a respeito.

O parâmetro de *operaçao* especifica a operação a ser realizada sobre o documento especificado por *documento*. A tabela a seguir lista os valores de funcionamento e à *operaçao* resultante, com valores diferentes para o *documento*. A primeira coluna apresenta os valores permitidos para a *operaçao*. A segunda coluna relaciona os valores permitidos para o *documento*. A terceira coluna lista o resultado da operação. 

Por exemplo, para exibir uma caixa de diálogo Abrir arquivo para abrir um arquivo de texto, você usaria a seguinte linha:

```4d
 SET CHANNEL(13;"")
```
  
  
| **Operação**                                               | **Documento**     | **Resultado**                                                                                                |
| ---------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------ |
| 10                                                         | Cadeia            | Abre o documento especificado pela String.                                                                   |
| Se o documento não existir, o documento é aberto e criado. |                   |                                                                                                              |
| 10                                                         | "" (cadena vacía) | Exibe a caixa diálogo Abrir Arquivo para abrir um arquivo.                                                   |
| Todos os tipos de arquivos são exibidos.                   |                   |                                                                                                              |
| 11                                                         | nenhum            | Fecha um arquivo aberto.                                                                                     |
| 12                                                         | "" (cadeia vazia) | Exibe a caixa de diálogo Salvar arquivo para criar um novo arquivo.                                          |
| 13                                                         | "" (cadeia vazia) | Exibe a caixa diálogo Abrir Arquivo para abrir um arquivo. Apenas os tipos de arquivo de texto são exibidos. |

  
Todas as operações nesta tabela atribui a variável de sistema de documentos, se necessário. Eles também definem a variável de sistema OK para 1 se a operação foi bem sucedida. Caso contrário, a variável de sistema OK é definido como 0.

##### Exemplo 4 

Veja os exemplos para os comandos [RECEIVE BUFFER](receive-buffer.md "RECEIVE BUFFER"), [SET TIMEOUT](set-timeout.md "SET TIMEOUT") e [RECEIVE RECORD](receive-record.md "RECEIVE RECORD").

#### Ver também 

[Append document](append-document.md)  
*Comunicações*  
[Create document](create-document.md)  
[GET SERIAL PORT MAPPING](get-serial-port-mapping.md)  
[Open document](open-document.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND PACKET](send-packet.md)  
[SEND RECORD](send-record.md)  
[SEND VARIABLE](send-variable.md)  
[SET TIMEOUT](set-timeout.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 77 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, Document |
| Proibido no servidor ||


