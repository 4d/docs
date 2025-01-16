---
id: test-semaphore
title: Test semaphore
slug: /commands/test-semaphore
displayed_sidebar: docs
---

<!--REF #_command_.Test semaphore.Syntax-->**Test semaphore** ( *semaforo* ) : Boolean<!-- END REF-->
<!--REF #_command_.Test semaphore.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| semaforo | Text | &#8594;  | Semáforo a testar |
| Resultado | Boolean | &#8592; | True = o semáforo existe, False = o semáforo não existe |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Test semaphore.Summary-->O comando Test semaphore lhe permite provar a existência de um semáforo.<!-- END REF-->

A diferença entre a função [Semaphore](semaphore.md "Semaphore") e Test semaphore é que Test semaphore não cria o *semaforo* se este não existe. Se o *semaforo* existe, a função devolve [True](true.md "True"). Do contrário, devolve [False](false.md "False"). 

#### Exemplo 

O exemplo a seguir lhe permite conhecer o estado de um processo (em nosso caso, a modificação de um código) sem modificar *semaforo*:

```4d
 $Win:=Open window(x1;x2;y1;y2;-Palette window)
 Repeat
    If(Test semaphore("Código de encriptação"))
       POSIÇAO MENSAGEM($x3;$y3)
       MESSAGE("O código de encriptação está sendo modificado.")
    Else
       POSIÇAO MENSAGEM($x3;$y3)
       MESSAGE("A modificação do código de encriptação for autorizada.")
    End if
 Until(StopInfo)
 CLOSE WINDOW
```

#### Ver também 

[CLEAR SEMAPHORE](clear-semaphore.md)  
[Semaphore](semaphore.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 652 |
| Thread-seguro | &check; |


