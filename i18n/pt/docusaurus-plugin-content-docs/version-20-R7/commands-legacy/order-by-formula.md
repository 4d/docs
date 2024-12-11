---
id: order-by-formula
title: ORDER BY FORMULA
slug: /commands/order-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.ORDER BY FORMULA.Syntax-->**ORDER BY FORMULA** ( *tabela* ; *expressao* {; >ou<}{; *expressao2* ; >ou<2 ; ... ; *expressaoN* ; >ou<N} )<!-- END REF-->
<!--REF #_command_.ORDER BY FORMULA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela na qual vai ordenar os registros |
| expressao | Expression | &#8594;  | Fórmula de ordem para cada nível (pode ser de tipo Alfanumérico, Real, Inteiro, Inteiro longo, Data, Hora ou Booleano) |
| >ou< | Operador | &#8594;  | Sentido da ordenação para cada nível: > ordem crescente, ou < ordem decrescente |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ORDER BY FORMULA.Summary-->**ORDER BY FORMULA** ordena (reordena) os registros da seleção atual de *tabela* para o processo atual.<!-- END REF--> Una vez efetuada a ordenação, o primeiro registro da nova seleção atual é convertido no novo registro atual. **Nota**: deve especificar a *tabela*. Não pode utilizar uma tabela por padrão.

Pode ordenar a seleção em um ou vários níveis. Para cada nível de ordenação, você passa uma expressão em *expressao* e um critério de ordenação em *\>* ou *<*. Se passa o símbolo “maior que” (*\>*) a ordem é crescente. Se passa o símbolo "menor que " (*<*) a ordem é decrescente. Se não especifica o critério de ordenação, a ordem por padrão é crescente.  
  
O parâmetro *formula* pode ser de tipo Alfa, Real (Numérico), Inteiro, Inteiro longo, Data, Hora ou Booleano.

**Aviso:** Parâmetros ($1...$n) não são compatíveis em *formula*. 

**Nota: Se** **ORDER BY FORMULA** for usado em conjunção com [PRINT SELECTION](print-selection.md), [BREAK LEVEL](break-level.md) e uma variável local, os três comandos devem ser executados, desde o mesmo método, senão um erro será gerado. Isso é porque [PRINT SELECTION](print-selection.md) precisa reavaliar *formula* para computar as quebras de valores. Por exemplo, se executar **ORDER BY FORMULA**( \[T1\] ; \[T1\]f1 > $value) a partir de um método, a ordenação é feita e o método termina. Qualquer chamada subsequente a [PRINT SELECTION](print-selection.md) e [BREAK LEVEL](break-level.md) vai falhar porque *$value* não existe mais e *formula* não pode ser reavaliada. 

  
Sem importar a maneira em que se define uma ordenação, se a operação de ordenação vai a demorar um certo tempo, 4D mostra automaticamente uma mensagem que contém um termômetro de progresso. Estas mensagens podem ser ativadas e desativadas utilizando os comandos [MESSAGES ON](messages-on.md) e [MESSAGES OFF](messages-off.md). Se for mostrado o termômetro de progressão, o usuário pode clicar no botão Deter para interromper a ordenação. Se a ordenação é completada corretamente, OK toma o valor 1\. Do contrário, se a ordenação for interrompida, OK toma o valor 0 (zero).  
  
**4D Server**: a partir da versão 11 de 4D Server, este comando é executado no servidor, o qual otimiza sua execução. Note que quando as variáveis são chamadas diretamente na expressão, a ordenação se calcula com o valor da variável na máquina cliente.Por exemplo, **ORDER BY FORMULA(\[mytable\];\[mytable\]myfield\*myvariable)** será executado no servidor mas com os conteúdos de minhavariavel da máquina cliente.

> **Nota de Compatibilidade:** Até 4D Server v11, esse comando era executado na máquina cliente. Para compatibilidade reversa, essa operação é mantida em bancos de dados convertidos. Entretanto, uma propriedade de compatibilidade ou um seletor do comando [SET DATABASE PARAMETER](set-database-parameter.md) ativa execução do lado do servidor em bancos de dados convertidos.

#### Exemplo 

Este exemplo ordena os registros da tabela \[Pessoas\] em ordem descendente, baseado na longitude do sobrenome de cada pessoa. O registro da pessoa com o sobrenome mais longo será o primeiro registro da seleção atual:

```4d
 ORDER BY FORMULA([Pessoas];Length([Pessoas]Sobrenome);<)
```

#### Ver também 

[ORDER BY](order-by.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 300 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Modificar o registro atual ||


