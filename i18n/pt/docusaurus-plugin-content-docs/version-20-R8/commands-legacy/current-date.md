---
id: current-date
title: Current date
slug: /commands/current-date
displayed_sidebar: docs
---

<!--REF #_command_.Current date.Syntax-->**Current date** {( * )} : Date<!-- END REF-->
<!--REF #_command_.Current date.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Devolve a data atual do servidor |
| Resultado | Date | &#8592; | Data atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Current date.Summary-->O comando Current date retorna a data atual tal como está definida no relógio do sistema.<!-- END REF-->se passado o parâmetro asterisco (\*) durante a execução desta função em um equipo cliente 4D Client, a função devolve a data atual do servidor.

#### Exemplo 1 

O seguinte exemplo mostra uma caixa de diálogo de alerta com a data atual: 

```4d
 ALERT("The date is "+String(Current date)+".")
```

#### Exemplo 2 

Se desenvolve uma aplicação para o mercado internacional, necessita saber se a versão de 4D com a qual é executada sua aplicação funciona com as datas de formato MM/DD/YYYY (versão US) ou DD/MM/YYYY (versão francesa). Esta informação é útil para personalizar corretamente as áreas de entrada. 

O seguinte método de projeto permite fazer isso:

```4d
  // Função global Sys date format
  // Sys date format -> String
  // Sys date format -> Formato de dados 4D por padrão
 
 C_STRING(31;$0;$vsDate;$vsMDY;$vsMonth;$vsDay;$vsYear)
 var $1;$vlPos : Integer
 var $vdDate : Date
 
  //Obter uma data na qual os valores de mês, dia e ano sejam todos diferentes
 $vdDate:=Current date
 Repeat
    $vsMonth:=String(Month of($vdDate))
    $vsDay:=String(Day of($vdDate))
    $vsYear:=String(Year of($vdDate)%100)
    If(($vsMonth=$vsDay)|($vsMonth=$vsYear)|($vsDay=$vsYear))
       vOK:=0
       $vdDate:=$vdDate+1
    Else
       vOK:=1
    End if
 Until(vOK=1)
 $0:="" // Inicialização do resultado da função
 $vsDate:=String($vdDate)
 $vlPos:=Position("/";$vsDate) // Procurar o primeiro separador / na string ../../..
 $vsMDY:=Substring($vsDate;1;$vlPos-1) // Extrair os primeiros dígitos da data
 $vsDate:=Substring($vsDate;$vlPos+1) // Eliminar os primeiros dígitos e o primeiro separador /
 Case of
    :($vsMDY=$vsMonth) // Os dígitos expressam o mês
       $0:="MM"
    :($vsMDY=$vsDay) //Os dígitos expressam o dia
       $0:="DD"
    :($vsMDY=$vsYear) //Os dígitos expressam o ano
       $0:="YYYY"
 End case
 $0:=$0+"/" //Iniciar a construção do resultado da função
 $vlPos:=Position("/";$vsDate) // Procurar o segundo separador na string ../..
 $vsMDY:=Substring($vsDate;1;$vlPos-1) // Extrair os seguintes dígitos da data
 $vsDate:=Substring($vsDate;$vlPos+1) // Reduzir a string aos últimos dígitos da data
 Case of
    :($vsMDY=$vsMonth) // Os dígitos expressam o mês
       $0:=$0+"MM"
    :($vsMDY=$vsDay) // Os dígitos expressam o dia
       $0:=$0+"DD"
    :($vsMDY=$vsYear) // Os dígitos expressam o ano
       $0:=$0+"YYYY"
 End case
 $0:=$0+"/" //Iniciar a construção do resultado da função
 Case of
    :($vsDate=$vsMonth) // Os dígitos expressam o mês
       $0:=$0+"MM"
    :($vsDate=$vsDay) // Os dígitos expressam o dia
       $0:=$0+"DD"
    :($vsDate=$vsYear) // Os dígitos expressam o ano
       $0:=$0+"YYYY"
 End case
  //Neste momento $0 é igual a MM/DD/YYYY ou DD/MM/YYYY ou...
```

#### Ver também 

[Day of](day-of.md)  
[Month of](month-of.md)  
[Year of](year-of.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 33 |
| Thread-seguro | &check; |


