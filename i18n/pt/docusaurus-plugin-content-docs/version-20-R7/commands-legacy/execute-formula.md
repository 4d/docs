---
id: execute-formula
title: EXECUTE FORMULA
slug: /commands/execute-formula
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE FORMULA.Syntax-->**EXECUTE FORMULA** ( *instruçao* )<!-- END REF-->
<!--REF #_command_.EXECUTE FORMULA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| instruçao | Text | &#8594;  | Código a executar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.EXECUTE FORMULA.Summary-->**EXECUTE FORMULA** executa *instrução* como uma linha de código e opcionalmente, devolve seu valor resultante em *result*.<!-- END REF--> Este comando está desenhado para ser utilizado quando necessitar avaliar expressões que o usuário possa construir ou modificar. 

A string *instruçao* deve ser uma linha de código.\[#/descv\] Se *instruçao* for uma string vazia,EXECUTE FORMULA não faz nada. A regra geral é que se instrução puder ser executada como um método de uma-linha, então será executado propriamente. Use **EXECUTE FORMULA** apenas eventualmente, pois pode desacelerar a velocidade de execução. Em um banco de dados compilado, a linha de código não é compilada. Isso significa que instrução será compilada, mas não será verificada pelo compilador no momento da compilação.

**Nota:** a execução de fórmulas em modo compilado pode ser otimizada utilizando uma memória caché (ver \[#cmd id="63" anchor="2882913"/\] abaixo).

A instrução pode estar em:

* uma chamada a um método de projeto
* uma chamada a um comando 4D
* uma tarefa
  
  
**Notas:** 

* Se l *instrução* for um método projeto, se recomenda utilizar [EXECUTE METHOD](execute-method.md) que lhe permite passar parâmetros.
* Não se recomenda chamar a nenhum comando de declaração de variável como [C\_DATE](c-date.md) em *instrução* já que pode gerar conflitos no código.

A fórmula pode incluir variáveis de processo e variáveis entre processos. Entretanto, a declaração não pode conter o controle das instruções de fluxo (If, While, etc.), já que deve estar em uma linha de código.

Para garantir que a *instrução* seja avaliada corretamente, independentemente da linguagem 4D ou a versão utilizada, se recomenda utilizar a sintaxe de *token* para os elementos cujo nome possa variar entre diferentes versões (comandos, tabelas, campos, constantes). Por exemplo, para inserir o comando \[#cmd id="178"/\], introduza '**Current time:C178**'. Para saber mais, consulte *Usar tokens em fórmulas*. 

##### Cache para formulas em modo compilado 

Por otimização, cada fórmula executada vía **EXECUTE FORMULA** em modo compilado pode ser armazenada em uma memória caché na memória dedicada. A fórmula é armazenada em caché em forma tokenizada. Uma vez que se coloca na caché, suas execuções posteriores estão altamente otimizadas já que o passo de tokenização se evita.

O tamanho da cache é zero como padrão (sem caché); deve ser criada ou ajustada com o comando [SET DATABASE PARAMETER](set-database-parameter.md). Por exemplo:

```4d
 SET DATABASE PARAMETER(Number of formulas in cache;0) //sem caché de fórmulas
 SET DATABASE PARAMETER(Number of formulas in cache;3) //até três fórmulas podem ser armazenadas em cache para cada processo
```

O comando **EXECUTE FORMULA** utiliza a caché só quando se chama desde um banco de dados ou componente compilado.

#### Exemplo 

Se quiser executar instruções usando chamadas para comandos 4D e tabelas. Já que esses elementos poderiam ser renomeados, pode-se garantir a correta execução em versões futuras de seu aplicativo ao usar a sintaxe token, como mostrado abaixo:

```4d
 EXECUTE FORMULA("Year of:C25 ([Products:5]Creation_Date:2])+$add")
```

#### Ver também 

[Command name](command-name.md)  
[EDIT FORMULA](edit-formula.md)  
[SET DATABASE PARAMETER](set-database-parameter.md)  