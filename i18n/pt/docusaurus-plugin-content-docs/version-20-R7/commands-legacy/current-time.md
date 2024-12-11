---
id: current-time
title: Current time
slug: /commands/current-time
displayed_sidebar: docs
---

<!--REF #_command_.Current time.Syntax-->**Current time** {( * )} : Time<!-- END REF-->
<!--REF #_command_.Current time.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Devolve a hora atual do servidor |
| Resultado | Time | &#8592; | Hora atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Current time.Summary-->O comando Current time retorna a hora atual do relógio de sistema.<!-- END REF--> 

A hora atual sempre está entre *00:00:00* e *23:59:59*. Utilize [String](string.md "String") ou [Time string](time-string.md "Time string") para converter em cadeia a expressão de tipo hora retornada por Current time.

**4D Server:** se utilizar o parâmetro (\*) quando executa esta função em uma máquina 4D Client, a função devolve a hora atual do servidor.

#### Exemplo 1 

O exemplo a seguir lhe mostra como medir a duração de uma operação. Aqui, OperaçãoLonga é um método que necessita ser cronometrado:  
  
```4d
 $vhStartTime:=((Current date-!1980-01-01!)*86400)+Current time //Salva a hora de início, segundos depois de 1.1.1980
 LongOperation //Realizar a operação
 $vhEndTime:=((Current date-!1980-01-01!)*86400)+Current time
 ALERT("The operation took "+String($vhEndTime-$vhStartTime)+" seconds.") //Mostrar a duração da operação
```

#### Exemplo 2 

O exemplo a seguir extrai as horas, minutos e segundos da hora atual: 

```4d
 $vhAgora:=Current time
 ALERT("A hora atual é: "+String($vhAgora\3600))
 ALERT("O minuto atual é: "+String(($vhAgora\60)%60))
 ALERT("O segundo atual é: "+String($vhAgora%60))
```

#### Ver também 

[Milliseconds](milliseconds.md)  
[String](string.md)  
[Tickcount](tickcount.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 178 |
| Thread-seguro | &check; |


