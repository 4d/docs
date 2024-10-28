---
id: reject
title: REJECT
slug: /commands/reject
displayed_sidebar: docs
---

<!--REF #_command_.REJECT.Syntax-->**REJECT** {( *campo* )}<!-- END REF-->
<!--REF #_command_.REJECT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo a rejeitar |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.REJECT.Summary-->REJECT tem duas sintaxes.<!-- END REF--> A primeira sintaxe não tem parâmetros. Neste caso, o comando rechaça a totalidade da entrada e obriga ao usuário a permanecer no formulário. A segunda sintaxe recusa somente o *campo* e obriga ao usuário a permanecer no campo. 

**Nota:** deve considerar utilizar as ferramentas integradas de validação de dados antes de utilizar este comando.

A primeira sintaxe de REJECT evita que o usuário aceite um registro incompleto. Pode alcançar ol mesmo resultado sem utilizar REJECT, associe a tecla Intro com um botão Sem ação e utilize os comandos [ACCEPT](accept.md) e [CANCEL](cancel.md) para aceitar ou cancelar o registro, uma vez os campos foram introduzidos corretamente. É recomendável utilizar esta segunda técnica e não a primeira sintaxe de REJECT.

Se utilizar a primeira sintaxe, você executa REJECT para evitar que o usuário aceite um registro, geralmente porque o registro está incompleto ou tem entradas incorretas. Se o usuário trata de aceitar o registro, a execução de REJECT evita a aceitação do registro; o registro permanece visualizado no formulário. O usuário deve continuar com a entrada de dados até que o registro seja aceitável ou o registro seja cancelado.

O melhor lugar para o comando REJECT, quando se utiliza esta sintaxe, é o método de objeto de um botão Aceitar associado a tecla Intro. Desta forma, a validação ocorre só quando o registro é aceito e o usuário não pode forçar a validação pressionando a tecla Enter.

A segunda sintaxe de REJECT se executa com o parâmetro *campo*. O cursor permanece na área de entrada do campo. Esta sintaxe de REJECTobriga ao usuário a introduzir um valor correto. É imperativo que chame o comando REJECT no evento de formulário On Data Change. Precisa colocar esta sintaxe do comando REJECT seja no método de formulário, ou no método de objeto da área de entrada. Se estiver usando REJECT para o formulário detalhado de um subformulário para uma tabela, coloque no método de formulário ou método de objeto para o Formulário Detalhado. Este comando não tem efeito nos campos nas áreas de subformulário.   
  
Pode usar [HIGHLIGHT TEXT](highlight-text.md) para selecionar os dados no campo que está sendo rejeitado.

#### Exemplo 1 

O seguinte exemplo é sobre um registro de transação bancária que ilustra a primeira sintaxe de REJECT utilizada no método de objeto de um botão Aceitar. A tecla Enter está definida como um equivalente do botão. Isto significa que inclusive se o usuário pressiona a tecla Enter para aceitar o registro, o método de objeto do botão será executado. Se a transação é um cheque, então deve haver um número de cheque. Se não houver um número de cheque, se recusa a validação: 

```4d
 Case of
    :(([Operaçao]Transação="Cheque") & ([Operaçao]Número Cheque="")) // Se é um cheque sem número.
       ALERT("Por favor introduza o número do cheque.") // Alerta do usuário
       REJECT // Recusar a entrada
       GOTO OBJECT([Operaçao]Número Cheque) // Ir ao campo Número Cheque
 End case
```

#### Exemplo 2 

O seguinte exemplo é parte de um método de objeto para um campo *\[Empregados\]Salario*. O método de objeto prova o campo *\[Empregados\]Salario* e recusa o campo se o valor for menor que $10.000\. Pode realizar a mesma operação especificando um valor mínimo para o campo no editor de formulários:   
  
```4d
 Case of
    :(FORM Event=On Data Change)
       If([Employees]Salary<10000)
          ALERT("Salário deve ser maior que $10000")
          REJECT([Employees]Salary)
       End if
 End case
```

#### Ver também 

[ACCEPT](accept.md)  
[CANCEL](cancel.md)  
[GOTO OBJECT](goto-object.md)  