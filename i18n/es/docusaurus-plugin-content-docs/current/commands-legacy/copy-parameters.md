---
id: copy-parameters
title: Copy parameters
slug: /commands/copy-parameters
displayed_sidebar: docs
---

<!--REF #_command_.Copy parameters.Syntax-->**Copy parameters** {( *inicioDesde* )} : Collection<!-- END REF-->
<!--REF #_command_.Copy parameters.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| inicioDesde | Integer | &#8594;  | Índice de inicio(incluido) |
| Resultado | Collection | &#8592; | Nueva colección que contiene los parámetros pasados realmente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Copy parameters.Summary-->El comando Copy parameters devuelve una nueva colección que contiene todos los parámetros realmente pasados a un método o una función.<!-- END REF--> Este comando es útil cuando se necesita reenviar un número variado de parámetros de un método o función a otro método o función.

En el parámetro opcional *inicioDesde*, puede pasar el índice del parámetro desde el que se va a empezar a recoger los parámetros a reenviar. El propio parámetro *inicioDesde* está incluido.

Cuando se llama dentro de una fórmula, **Copy parameters** devuelve los parámetros pasados explícitamente utilizando *apply()* o *call()* (y no los pasados al método padre o función). 

**Copy parameters** devuelve una colección vacía si:

* no se llama en un método o función que haya sido llamado por otro método o función,
* no se ha pasado ningún parámetro al método padre o función.

#### Ejemplo 1 

Llamando a una función diferente dependiendo del primer parámetro y pasando otros parámetros a esta función:

```4d
 Function selectTask($task Text)
 Case of
    :($task="Task1")
       This.task1(Copy parameters(2))
    :($task="Task2")
       This.task2(Copy parameters(2))
 End case
```

O, llamando a otra función en otro objeto con **apply()** y pasar los parámetros:

```4d
 Function doSomething($param Text;$extraParameters Variant)
 This.delegate.doSomething.apply(This.delegate;Copy parameters)
```

#### Ejemplo 2 

Como el comando devuelve una colección, se puede utilizar con **.join()** para crear, por ejemplo, una lista html:

```4d
  // Clase
 
 Function list($typeText)->Text
  //tipo de lista es "u" u "o"
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

#### Ver también 

[Count parameters](count-parameters.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1790 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


