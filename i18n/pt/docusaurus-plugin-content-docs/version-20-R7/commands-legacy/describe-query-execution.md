---
id: describe-query-execution
title: DESCRIBE QUERY EXECUTION
slug: /commands/describe-query-execution
displayed_sidebar: docs
---

<!--REF #_command_.DESCRIBE QUERY EXECUTION.Syntax-->**DESCRIBE QUERY EXECUTION** ( *estado* )<!-- END REF-->
<!--REF #_command_.DESCRIBE QUERY EXECUTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| estado | Boolean | &#8594;  | True=Ativar análises de pesquisas internas, False=Desativar o análises de pesquisas internas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DESCRIBE QUERY EXECUTION.Summary-->O comando DESCRIBE QUERY EXECUTION permite ativar ou desativar o modo de análise da execução de pesquisas para o processo atual.<!-- END REF--> O comando funciona unicamente no contexto dos comandos de pesquisa da linguagem 4D tal como [QUERY](query.md).   
  
A chamada do comando com o parâmetro *estado* em [True](true.md "True") ativa o modo da análise de pesquisas. Neste modo, o motor de 4D registra internamente duas séries de informações específicas para cada pesquisa posterior efetuada sobre os dados:  

* Uma descrição interna detalhada da pesquisa justo antes de sua execução, em outras palavras, a pesquisa prévia (o plano de pesquisa),
* Uma descrição interna detalhada da pesquisa que foi executada realmente (a rota de pesquisa).
A informação registrada inclui o tipo de pesquisa (indexada, seqüencial), o número de registro encontrados e o tempo necessário para cada critério de pesquisa a executar. Pode ler esta informação utilizando os comandos [Last query plan](last-query-plan.md) e [Last query path](last-query-path.md).  
  
Geralmente, a descrição do plano de uma pesquisa e sua rota são idênticos, mas poderiam eventualmente ser diferentes porque 4D poderia implementar otimizações dinâmicas durante a execução da pesquisa para melhorar o rendimento. Por exemplo, una pesquisa indexada pode ser convertida dinamicamente em uma pesquisa seqüencial se o motor 4D estima que seria mais rápida, este é o caso, quando o número de registros nos quais é realizada a pesquisa for baixo.  
  
Passe [False](false.md "False") no parâmetro *estado* quando não necessite analisar as pesquisas. O modo de análise da execução das pesquisas pode tornar lenta a aplicação.

#### Exemplo 

O seguinte exemplo ilustra o tipo de informação obtida utilizando estes comandos:

```4d
 var $vResultPlan;$vResultPath : Text
 DESCRIBE QUERY EXECUTION(True) //modo análise
 QUERY([Employees];[Employees]LastName="T@";*) // Pesquisa dos empregados cujo sobrenome começa por T...
 QUERY([Employees];&;[Companies]Name="H@";*) // que trabalham para uma empresa cujo nome começa por H
 QUERY([Employees];&;[Employees]Salary>2500;*) // cujo salário é > 2500
 QUERY([Employees];&;[Cities]Pop<50000) // que vivem em uma cidade com menos de 50000 habitantes
 $vResultPlan:=Last query plan(Description in text format)
 $vResultPath:=Last query path(Description in text format)
 DESCRIBE QUERY EXECUTION(False) //Fim do modelo de análise
```

Depois de executar este código, *$vResultPlan* e *$vResultPath* contém descrições das pesquisas realizadas, por exemplo: 

```RAW
$vResultPlan :    Employees.LastName == T@ And  Employees.Salary > 2500 And Join on Table : Companies  :   Employees.Company = Companies.Name [index : Companies.Name ] LIKE H@ And Join  on Table : Cities  :  Employees.City = Cities.Name [index : Cities.Pop  ] < 50000$vResultPath : (Employees.LastName == T@ And Employees.Salary  > 2500) And (Join on Table : Companies  :  Employees.Company  = Companies.Name with filter {[index : Companies.Name ]  LIKE H@}) And (Join on Table : Cities  :  Employees.City = Cities.Name  with filter {[index : Cities.Pop ] < 50000})   (3 registros encontrados em 1  minuto)
```

Se a constante Description in XML Format se passa ao comando [Last query path](last-query-path.md "Last query path"), *$vResultPath* contém a descrição da pesquisa expressada em XML:

```XML
$vResultPath : 
   <QueryExecution>
      <steps description="And" time="0" recordsfounds="1227">
         <steps description="[Merge] : ACTORS with CITIES" time="13" recordsfounds="1227">
            <steps  description="[Join] : ACTORS.Birth_City_ID =CITIES.City_ID" time="13"  recordsfounds="1227"/>
         </steps>
      </steps>
   </QueryExecution>
```

#### Ver também 

[Last query path](last-query-path.md)  
[Last query plan](last-query-plan.md)  