---
id: quit-4d
title: QUIT 4D
slug: /commands/quit-4d
displayed_sidebar: docs
---

<!--REF #_command_.QUIT 4D.Syntax-->**QUIT 4D** {( *tempo* )}<!-- END REF-->
<!--REF #_command_.QUIT 4D.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tempo | Integer | &#8594;  | Tempo (em seg) antes de sair do servidor |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QUIT 4D.Summary-->O comando QUIT 4Dfinaliza a aplicação 4D atual e retorna para o Desktop.<!-- END REF-->

O processamento de comando é diferente se for executado em 4D (modo local ou remoto) ou em 4D Server. 

##### Com o modo local 4D e modo remoto 

Depois que você chamar QUIT 4D, o atual processo pára a sua execução, em seguida, 4D atua da seguinte forma:

* Se houver um método [Método banco de dados On Exit](metodo-banco-de-dados-on-exit.md), 4D começa a executar esse método dentro de um processo local recém-criado. Por exemplo, você pode usar esse método de banco de dados para informar os outros processos, por meio da comunicação entre processos, que eles devem fechar (entrada de dados) ou interromper a execução das operações iniciadas no método [Método banco de dados On Startup](metodo-banco-de-dados-on-startup.md) (conexão de 4D para outro servidor de banco de dados). Note que 4D poderá eventualmente fechar, o método [Método banco de dados On Exit](metodo-banco-de-dados-on-exit.md) pode realizar todas as operações de limpeza ou o fechamento quiser, mas não pode recusar a sair e irá fazê-lo, em algum ponto final.
* Se não houver nenhum método [Método banco de dados On Exit](metodo-banco-de-dados-on-exit.md), 4D anula processo em execução um por um, sem distinção.

Se o usuário estiver realizando uma entrada de dados, os registros serão cancelados e não serão salvos.   
Se você quiser deixar o usuário salvar as modificações de entrada de dados feitas nas janelas abertas, você pode usar a comunicação entre processos para sinalizar todos os outros processos de usuário que o banco será fechado. Para fazer isso, você pode adotar duas estratégias:

* A realização das operações de dentro do processo atual antes de chamar QUIT 4D.
* Lidar com essas operações a partir do banco no método [Método banco de dados On Exit](metodo-banco-de-dados-on-exit.md).

Uma terceira estratégia também é possível. Antes de chamar QUIT 4D, você verifica se uma janela vai precisar de validação, se for esse o caso, você pode pedir ao usuário para validar ou anular as janelas e, em seguida, escolher Quit de novo. No entanto, do ponto de vista da interface do usuário, as duas primeiras estratégias são preferíveis.

**Nota:** O parâmetro *tempo* não pode ser usado com 4D.

##### Com 4D Server (Stored procedure) 

O comando QUIT 4D pode ser executado na máquina do servidor, em um procedimento armazenado. Neste caso, ele aceita o parâmetro de *tempo* opcional.  
  
O parâmetro *tempo* permite estabelecer um tempo limite para o 4D Server antes da aplicação, na verdade fecha, permitindo as máquinas clientes o tempo para desligar. Você deve passar um valor em segundos no *tempo*. Este parâmetro só é tido em consideração durante uma execução na máquina do servidor. Ele é ignorado em 4D.   

Se você não passar um parâmetro para o *tempo*, 4D Server irá esperar até que todas as máquinas clientes sejam desligadas antes de sair.

Ao contrário de 4D, o processamento de QUIT 4D por 4D Server é assíncrono: o método em que o comando é chamado não é interrompido depois de terem sido executados. 

Se houver um método *Método banco de dados On Server Shutdown*, ele é executado depois do atraso definido pelo parâmetro de tempo, ou depois de ter desligado todos os clientes, em função de seus parâmetros.

A ação do comando *Método banco de dados On Server Shutdown* utilizado em um procedimento armazenado é o mesmo que o outro para o comando Sair do menu Arquivo 4D Server: faz com que uma caixa de diálogo aparecer em cada máquina cliente indicando que o servidor está prestes a sair.

#### Exemplo 

O método de projeto listado aqui está associado com o item Quit ou Exit do menu no menu Arquivo.

```4d
  // Método de projeto M_SALIR
 
 CONFIRM("Tem certeza que você quer sair?")
 If(OK=1)
    QUIT 4D
 End if
```

#### Ver também 

[Método banco de dados On Exit](metodo-banco-de-dados-on-exit.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 291 |
| Thread-seguro | &check; |


