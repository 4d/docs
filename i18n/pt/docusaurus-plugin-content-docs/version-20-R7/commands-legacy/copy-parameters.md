---
id: copy-parameters
title: Copy parameters
slug: /commands/copy-parameters
displayed_sidebar: docs
---

<!--REF #_command_.Copy parameters.Syntax-->**Copy parameters** {( *inicioDesde* )} : Collection<!-- END REF-->
<!--REF #_command_.Copy parameters.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| inicioDesde | Integer | &#8594;  | Indice inicio (incluido) |
| Resultado | Collection | &#8592; | Nova coleção contendo parâmetros realmente passados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Copy parameters.Summary-->O comando Copy parameters devolve uma nova coleção que contém todos os parâmetros realmente passados a um método ou uma função.<!-- END REF--> Este comando é útil quando se necessita reenviar um número variado de parâmetros de um método ou função a outro método ou função.

No parâmetro opcional *inicioDesde*, pode passar o índice do parâmetro desde o qual vai começar a recolher os parâmetros a reenviar. O próprio parâmetro *inicioDesde* está incluido.

Quando chamar dentro de uma fórmula, **Copy parameters** devolve os parâmetros passados explícitamente utilizando *apply()* ou *call()* (e não os passados ao método pai ou função). 

**Copy parameters** devolve uma coleção vazia se:

* não chamar em um método ou função que tenha sido chamado por outro método ou função,
* não for passado nenhum parâmetro ao método pai ou função.

#### Exemplo 1 

Chamando a uma função diferente dependendo do primeiro parâmetro e passando outros parâmetros a esta função:

```4d
 Function selectTask($task Text)
 Case of
    :($task="Task1")
       This.task1(Copy parameters(2))
    :($task="Task2")
       This.task2(Copy parameters(2))
 End case
```

Ou, chamando a outra função em outro objeto com **apply()** e passar os parâmetros:

```4d
 Function doSomething($param Text;$extraParameters Variant)
 This.delegate.doSomething.apply(This.delegate;Copy parameters)
```

#### Exemplo 2 

Como o comando devolve uma coleção, pode ser utilizada com **.join()** para criar, por exemplo, uma lista html:

```4d
  // Classe
 
 Function list($typeText)->Text
  //tipo de lista é "u" ou "o"
 var $value : Collection
 $value:=Copy parameters(2)
 $html:="<"+$type+"l>
* "  
 $html+=$value.join("
* ")  
 $html+="
"
 return$html
 
  // Método
 
 $htmlList:=$c.list("u";"Alpha";"Bravo";"Charlie")
  // $htmlList = 
* Alpha
* Bravo
* Charlie

```

#### Ver também 

[Count parameters](count-parameters.md)  