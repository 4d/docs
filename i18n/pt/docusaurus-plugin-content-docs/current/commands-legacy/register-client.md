---
id: register-client
title: REGISTER CLIENT
slug: /commands/register-client
displayed_sidebar: docs
---

<!--REF #_command_.REGISTER CLIENT.Syntax-->**REGISTER CLIENT** ( *nomeCliente* {; *periodo*}{; *} )<!-- END REF-->
<!--REF #_command_.REGISTER CLIENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeCliente | Text | &#8594;  | Nome da sessão 4D Client |
| periodo | Integer | &#8594;  | ***Ignorado a partir da versão 11.3*** |
| * | Operador | &#8594;  | Processo local |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.REGISTER CLIENT.Summary-->O comando REGISTER CLIENT “registra” uma máquina cliente com o nome especificado em *nomeCliente* no 4D Server, a fim de permitir outros clientes ou eventualmente 4D server (utilizando métodos armazenados) executar métodos fazendo uso do comando [EXECUTE ON CLIENT](execute-on-client.md).<!-- END REF--> Uma vez registrado, um cliente 4D pode executar um ou vários métodos para outros clientes.

**Notas:**

* Também pode registrar automaticamente cada máquina cliente que se conecte ao servidor 4D utilizando a opção "Registrar os clientes no começo... " na caixa de diálogo de preferências.
* Se este comando é utilizado com 4D em modo local, não tem efeito.
* Mais de uma estação 4D client pode ter o mesmo nome registrado.

Quando este comando é executado, um processo chamado *nomeCliente*, é criado na máquina cliente. Este processo somente pode ser interrompido pelo comando [UNREGISTER CLIENT](unregister-client.md). Se passar o parâmetro opcional \*, o processo criado é local. 4D adiciona automaticamente o símbolo dólar ($) ao começo do nome do processo. Do contrário, o processo é global.

**Nota de compatibilidade:** a partir da versão 11,3 de 4D, tem sido otimizados os mecanismos de comunicação servidor/cliente. Agora o servidor envia as petições de execução diretamente aos clientes registrados quando é necessário (tecnologia "push"). O principio anterior, onde os clientes procuravam periodicamente o servidor, não é mais usado. O parâmetro *periodo* é ignorado se passado.

Uma vez executado o comando, não é possível modificar rapidamente o nome do cliente 4D. Para poder fazê-lo, deve chamar o comando [UNREGISTER CLIENT](unregister-client.md) e depois o comando REGISTER CLIENT.

#### Exemplo 

No seguinte exemplo, vamos a criar um sistema de mensagens pequeno que permita aos clientes comunicar-se entre eles desde suas estações.

1) Este método, Registro, permite fazer o registro de um cliente 4D e mantê-lo pronto para receber uma mensagem de outro 4D Client:

```4d
  //Deverá sair do registro antes de fazer registro com outro nome
 UNREGISTER CLIENT
 Repeat
    vPseudoName:=Request("Escreva seu nome:";"Usuario";"OK";"Cancelar")
 Until((OK=0)|(vPseudoName#""))
 If(OK=0)
    ... // Não fazer nada
 Else
    REGISTER CLIENT(vPseudoName)
 End if
```

2) A seguinte instrução permite obter uma lista dos clientes registrados. Pode ser colocada no [On Startup Database Method](metodo-banco-de-dados-on-startup.md "On Startup Database Method"):

```4d
 PrClientList:=New process("4D Client List";32000;"Lista de clientes registrados")
```

3) O método 4D Client List permite recuperar todos os clientes 4D registrados e aqueles que podem receber mensagens:

```4d
 If(Application type=4D Remote Mode)
  // O código abaixo é válido somente no modo cliente-servidor
    $Ref:=Open window(100;100;300;400;-(Palette window+Has window title);"Lista de clientes registrados")
    Repeat
       GET REGISTERED CLIENTS($ClientList;$ListeCharge)
  //Restabelece os clientes registrados no $ClientList
       ERASE WINDOW($Ref)
       GOTO XY(0;0)
       For($p;1;Size of array($ClientList))
          MESSAGE($ClientList{$p}+Char(Carriage return))
       End for
  //Mostrar cada segundo
       DELAY PROCESS(Current process;60)
    Until(False) // Infinite loop
 End if
```

4) O seguinte método permite enviar mensagens a outro cliente 4D registrado. Este método chama o método Display\_Message (confira abaixo).

```4d
 $Addressee:=Request("Destinatário da mensagem:";"")
  // Escreva o nome das pessoas visíveis na janela gerada pelo
  // método On Startup database
 If(OK#0)
    $Message:=Request("Mensagem:") // mensagem
    If(OK#0)
       EXECUTE ON CLIENT($Destinatario;"Mostrar_Mensagem";$Mensagem) // Enviar mensagem
    End if
 End if
```

5) Este é o método Display\_Message:

```4d
 var $1 : Text
 ALERT($1)
```

6) Finalmente, este método permite a uma estação de trabalho de cliente não ser visível para outros clientes 4D e não receber mais mensagens:

```4d
 UNREGISTER CLIENT
```

#### Variáveis e conjuntos do sistema 

Se um cliente 4D está registrado corretamente, a variável do sistema OK é igual a 1\. Se o cliente 4D já está registrado, o comando não faz nada e OK é igual a 0.

#### Ver também 

[EXECUTE ON CLIENT](execute-on-client.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[UNREGISTER CLIENT](unregister-client.md)  