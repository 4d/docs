---
id: milliseconds
title: Milliseconds
slug: /commands/milliseconds
displayed_sidebar: docs
---

<!--REF #_command_.Milliseconds.Syntax-->**Milliseconds**  : Integer<!-- END REF-->
<!--REF #_command_.Milliseconds.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de milissegundos passados desde que se iniciou o equipamento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Milliseconds.Summary-->Milliseconds  retorna o número de milissegundos ( 1milisegundo = 1 milésimo de segundo) passados desde que o equipamento foi iniciado.<!-- END REF-->

O valor devolvido é um inteiro longo de até 2^31 (ao redor de 2 bilhões de milissegundos ou 24 dias). Quando a máquina estiver funcionando durante mais de 24 dias, o número fica negativo.

O propósito do comando é medir curtos períodos de tempo com uma alta precisão. Uma gama de 24 dias é mais que suficiente para as comparações, mas deve ter cuidado. Ao comparar valores, sempre trabalhe com a diferença entre dois valores. Nunca compare os valores diretamente, já que um poderia ser negativo e o outro positivo.

#### Exemplo 

O código abaixo espera até 5 segundos para que um registro bloqueado seja desbloqueado ou finalizado:

```4d
 If(Locked([Table_1]))
    $starttime:=Milliseconds
    Repeat
       DELAY PROCESS(Current process;15)
       LOAD RECORD([Table_1])
       $waittime:=Milliseconds-$starttime
    Until(Not(Locked([Table_1]))|(Process aborted)|($waittime>5000)) //espera 5 segundos máximo
 End if
```

**Nota:** sempre compare a diferença entre duas chamadas de **Milliseconds** como é mostrada acima, nunca compare diretamente, por exemplo:  

```4d
 (Milliseconds>($starttime+5000)) //nunca faça dessa maneira, já que um poderia ser positivo e um negativo
```

#### Ver também 

[Current time](current-time.md)  
[Tickcount](tickcount.md)  
[Timestamp](timestamp.md)  