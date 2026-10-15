---
id: receive-buffer
title: RECEIVE BUFFER
slug: /commands/receive-buffer
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE BUFFER.Syntax-->**RECEIVE BUFFER** ( *receiveVar* : Text )<!-- END REF-->
<!--REF #_command_.RECEIVE BUFFER.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| receiveVar | Text | &#8592; | Variable to receive data |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6.8.3|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.RECEIVE BUFFER.Summary-->RECEIVE BUFFER lê a porta serial que foi aberta anteriormente com [SET CHANNEL](../commands/set-channel).<!-- END REF--> A porta serial tem um buffer que preenche com caracteres até que um comando lê a partir do buffer. RECEIVE BUFFER recebe os caracteres do buffer serial, colocá-os em *receiveVar* e limpa o buffer. Se não houver caracteres no buffer, então *receiveVar* não conterá nada.

**Em Windows**  
A porta serial de buffer do Windows é limitada a 10 Kbytes. Isso significa que o buffer pode realizar um overflow. Quando ela estiver cheia e novos caracteres forem recebidos, os novos caracteres substituem os antigos caracteres. Os caracteres antigos estão perdidos e, portanto, é essencial que o buffer seja lido rapidamente quando novos caracteres são recebidos.

**Em Mac OS**  
A porta serial buffer no macOS é capacidade ilimitada (dependendo da memória disponível). Se o buffer estiver cheio e novos caracteres são recebidos, os novos caracteres substituem os antigos caracteres. Os caracteres antigos estão perdidos e, portanto, é essencial que o buffer seja lido rapidamente quando novos caracteres são recebidos. 

  
RECEIVE BUFFER é diferente de [RECEIVE PACKET](../commands/receive-packet), ele leva o que está no buffer e, em seguida, retorna imediatamente. [RECEIVE PACKET](../commands/receive-packet) aguarda até encontrar um caractere específico ou até que um determinado número de caracteres estejam no buffer

Durante a execução do RECEIVE BUFFER, o usuário pode interromper a recepção pressionando **Ctrl-Alt-Shift** (Windows) ou **Command** \+ **Option** \+ **Shift** (Macintosh). Esta interrupção gera um erro -9994, que você pode pegar com um método de tratamento de erros instalado usando [ON ERR CALL](../commands/on-err-call). 

## Exemplo 

O método de projeto LISTEN TO SERIAL PORT usa RECEIVE BUFFER para obter o texto da porta serial e acumulá-lo em uma variável interprocesso:

```4d
  // ESCUTAR PORTA SERIAL
  // Abrir a porta serial
 SET CHANNEL(201;Speed 9600+Data bits 8+Stop bits one+Parity none)
 <>IP_Escutar_Porta_Serial:=True
 While(<>IP_Escutar_Porta_Serial)
    RECEIVE BUFFER($vtBuffer)
    If((Length($vtBuffer)+Length(<>vtBuffer))>MAXTEXTLEN)
       <>vtBuffer:=""
    End if
    <>vtBuffer:=<>vtBuffer+$Buffer
 End while
```

Neste ponto, qualquer outro processo pode ler a interprocesso *vtBuffer* para trabalhar com os dados provenientes da porta serial.

Para parar de ouvir a porta serial, basta executar:

```4d
  // Deixar de escutar a porta serial
 ◊IP_Escutar_Porta_Serial:=False
```

Note que o acesso à variável interprocesso *vtBuffer* deve ser protegida por um semáforo, de modo que os processos não causarão conflito. Veja o comando [Semaphore](../commands/semaphore) para obter mais informações.

## Ver também 

[ON ERR CALL](../commands/on-err-call)  
[RECEIVE PACKET](../commands/receive-packet)  
[Semaphore](../commands/semaphore)  
[SET CHANNEL](../commands/set-channel)  
[USE CHARACTER SET](../commands/use-character-set)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 172 |
| Thread-seguro | yes |
| Modificar variáveis | error |


