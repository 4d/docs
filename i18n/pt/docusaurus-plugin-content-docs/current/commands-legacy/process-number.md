---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *nome* {; *} ) : Integer<!-- END REF-->
<!--REF #_command_.Process number.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nome | Text | &#8594;  | Nome do processo do qual recuperar o número |
| * | Operator |  &#8594;  | Devolver o número do processo servidor |
| Resultado | Integer | &#8592; | Número de processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Process number.Summary-->Process number devolve o número do processo cujo nome é passado em *nome*.<!-- END REF--> Se não se encontra nenhum processo, Process number devolve 0.

O parâmetro opcional *\** lhe permite recuperar, a partir de 4D Client, o número de um processo que se está executando no servidor (um procedimento armazenado). Neste caso, o valor devolvido é negativo. Esta opção é particularmente útil quando se utilizam os comandos [GET PROCESS VARIABLE](get-process-variable.md "GET PROCESS VARIABLE") e [SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE"). Para maior informação, consulte as descrições destes comandos.

Se o comando se executa com o parâmetro *\** desde um processo na máquina servidor, o valor devolvido é positivo.

#### Exemplo 

Você pode criar uma paleta flutuante, que é executado em um processo separado, em que você implementou suas próprias ferramentas para interagir com o ambiente Desenho. Por exemplo, quando você seleciona um elemento em uma lista hierárquica de palavras-chave, você deseja colar algum texto na janela no primeiro plano do ambiente Desenho. Para fazer isso, você pode usar a área de transferência, mas o evento de colar deve ocorrer dentro do processo Desenho. A função a seguir retorna o número do processo Desenho (se ativo):

```4d
  // Método de projeto Número processo Desenho
  // Número processo Desenho -> Inteiro longo
  // Número processo Desenho -> Número do processo de Desenho
 
 $0:=Process number("Processo Desenho")
  // Nota: Este pode não funcionar no futuro se a fonte muda
```

Com esta função, o método de projeto listado cola o texto recebido como parâmetro na janela do primeiro plano no ambiente Desenho (se aplicado):

```4d
  // Método de projeto COLAR TEXTO EM DESENHO
  // PEGAR TEXTO EM DESENHO ( Text )
  //PEGAR TEXTO EM DESENHO (Texto a pegar na janela de Desenho do primeiro plano)
 
 var $1 : Text
 var $vlDesenhoPID;$vlCont : Integer
 
 $vlDiseñoPID:=Numero processo Desenho
 If($vlDesenhoPID&NBSP;#&NBSP;0)
  // Coloque o texto na área de transferência
    SET TEXT TO PASTEBOARD($1)
  // Gerar um evento Ctrl-V / Comando-V
    POST KEY(ASCII("v");Command key mask;$vlDesenhoPID)
  // Chamar repetidamente DELAY PROCESS para que o temporizador possa passar
  // sobre o evento ao processo Desenho
    For($vlCont;1;5)
       DELAY PROCESS(Current process;1)
    End for
 End if
```

#### Ver também 

[GET PROCESS VARIABLE](get-process-variable.md)  
[Process info](../commands/process-info.md)  
[Process state](process-state.md)  
[SET PROCESS VARIABLE](set-process-variable.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 372 |
| Thread-seguro | &check; |


