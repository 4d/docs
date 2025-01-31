---
id: method-get-modification-date
title: METHOD GET MODIFICATION DATE
slug: /commands/method-get-modification-date
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET MODIFICATION DATE.Syntax-->**METHOD GET MODIFICATION DATE** ( *rota* ; *dataMod* ; *horaMod* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET MODIFICATION DATE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rota | Text, Text array | &#8594;  | Texto ou array que contém uma ou mais rotas de acesso |
| dataMod | Date, Date array | &#8592; | Data(s) de modificação do método |
| horaMod | Time, Integer array | &#8592; | Hora(s) de modificação do método |
| * | Operador | &#8594;  | Se passar = o comando é aplicado ao banco local quando é executado apartir de um componente (parâmetro ignorado fora deste contexto) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.METHOD GET MODIFICATION DATE.Summary-->O comando **METHOD GET MODIFICATION DATE** retorna nos parâmetros *dataMod* e *horaMod* as datas e horários da última modificação dos métodos designados pelo parâmetro rota.<!-- END REF-->

Pode utilizar dois tipos de sintaxe, baseadas em arrays ou variáveis:  
  
```4d
 var tVpath : Text // variáveis
 var vDate : Date
 var vTime : Time
 METHOD GET MODIFICATION DATE(tVpath;vDate;vTime) // data e hora de um só método
```

```4d
 ARRAY TEXT(arrPaths;0) // arrays
 ARRAY DATE(arrDates;0)
 ARRAY LONGINT(arrTimes;0)
 METHOD GET MODIFICATION DATE(arrPaths;arrDates;arrTimes) // datas e horas de vários métodos
```

Não é possível combinar as duas sintaxes.  
  
Se o comando for executado desde uma componente, é aplicado por padrão aos métodos da componente. Se passar o parâmetro *\**, acessa aos métodos do banco local.

#### Exemplo 1 

Se quiser conhecer as datas e horas de modificação por vários métodos:

```4d
 ARRAY TEXT(arrPaths;0)
 APPEND TO ARRAY(arrPaths;"MyMethod1")
 APPEND TO ARRAY(arrPaths;"MyMethod2")
 ...
 ARRAY DATE(arrDates;0)
 ARRAY LONGINT(arrTimes;0)
 METHOD GET MODIFICATION DATE(arrPaths;arrDates;arrTimes)
```

#### Exemplo 2 

Se quiser obter as datas de modificação dos métodos de um módulo com o prefixo "Web\_". Não é possível utilizar o símbolo "@" em uma rota; entretanto, pode escreverr:

```4d
 ARRAY TEXT($_webMethod;0)
 METHOD GET NAMES($_webMethod;"Web_@")
 ARRAY DATE($_date;0)
 ARRAY LONGINT($_time;0)
 METHOD GET MODIFICATION DATE($_webMethod;$_date;$_time)
```

  


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1170 |
| Thread-seguro | &cross; |


