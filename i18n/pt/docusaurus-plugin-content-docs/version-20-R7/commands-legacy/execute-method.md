---
id: execute-method
title: EXECUTE METHOD
slug: /commands/execute-method
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE METHOD.Syntax-->**EXECUTE METHOD** ( *nomeMetodo* {; *resultado* {; *param*}}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.EXECUTE METHOD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeMetodo | Text | &#8594;  | Nome do método de projeto a ser executado |
| resultado | Variable, * | &#8592; | Variável que recebe o método de resultado ou * por um método não retornando um resultado |
| param | Expression | &#8594;  | Parâmetros do método |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.EXECUTE METHOD.Summary-->O comando EXECUTE METHOD provoca a execução do método de projeto *nomeMetodo* passando os parâmetros em *param1.<!-- END REF-->..paramN*. Pode passar o nome de um método que pode ser chamado desde o banco ou o componente que executa o comando.

Em *resultado*, pode passar uma variável que receba o resultado da execução de *nomeMetodo* (valor localizado em $0 ao interior de *nomeMetodo*). Se o método não devolve um resultado, passe *\** como segundo parâmetro.

O contexto de execução se conserva no método chamado, o que significa que o formulário atual e o evento de formulário atual permanecem definidos.

Se chama este comando desde um componente e passa um nome de método que pertence ao banco local em *nomeMetodo* (ou vice-versa), o método deve estar compartilhado (opção “Compartilhado entre componente e banco principal”, nas propriedades do método).

#### Variáveis e conjuntos do sistema 

Se este comando é executado corretamente, a variável sistema OK toma o valor 1; do contrário toma o valor 0.

#### Ver também 

[EXECUTE FORMULA](execute-formula.md)  