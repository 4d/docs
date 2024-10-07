---
id: super
title: Super
slug: /commands/super
displayed_sidebar: docs
---

<!--REF #_command_.Super.Syntax-->**Super** {( *param* {; *param2* ; ... ; *paramN*} )} -> Resultado<!-- END REF-->
<!--REF #_command_.Super.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| param | any | &#x1F852; | Parámetro(s)a pasar al constructor padre |
| Resultado | Object | &#x1F850; | Padre del objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Super.Summary-->El comando **Super** realiza llamadas a la superclase.<!-- END REF--> 

**Super** se ha introducido por dos propósitos diferentes:

* en un **código de constructor**, el comando **Super** permite llamar al constructor de la superclase. Cuando el comando **Super** se utiliza en un constructor,  
aparece solo y debe utilizarse antes de la palabra clave [This ](this.md).
   * Si todos los constructores de clase de árbol heredado no se llaman correctamente, se genera el error -10748\. El desarrollador 4D debe asegurarse de que las llamadas sean válidas.
   * Si se llama al comando [This ](this.md) en un objeto cuyas superclases no se han construido, se genera el error -10743.
   * Si se llama **Super** fuera del alcance de un objeto, o si se llama en un objeto cuyo constructor de superclase ya se ha llamado, se genera el error 10746.

```4d
  // en el constructor myClass
 var $1;$2 : Text
 Super($1) //llama al constructor de la superclase con un parámetro texto
 This.param:=$2 // utiliza el segundo parámetro
```

* entro de una **función de miembro de clase**, **Super** designa el prototipo de la superclase y permite llamar a una función de la jerarquía de la superclase.

```4d
 Super.doSomething(42) //llama a la función "doSomething" declarada en superclases
```

#### Ejemplo 1 

Este ejemplo ilustra el uso de **Super** en un constructor de clase. Se llama al comando para evitar duplicar las partes del constructor que son comunes entre las clases Rectangle y Square.

```4d
  //Clase: Rectangle
 
 Class constructor
 var $1;$2 : Integer
 This.name:="Rectangle"
 This.height:=$1
 This.width:=$2
 
 Function sayName
 ALERT("Hi, I am a "+This.name+".")
 
 Function getArea
 var $0 : Integer
 $0:=This.height*This.width
```

```4d
  //Clase: Square
 
 Class extends Rectangle
 
 Class constructor
 var $1 : Integer
 
  // Llama la clase constructor padre con las longitudes
  // suministrado para el ancho y la alto del Rectangle
 Super($1;$1)
 
  // En las clases derivadas, se debe llamar a Super antes que
  // pueda utilizar 'This'
 This.name:="Square"
```

#### Ejemplo 2 

Este ejemplo ilustra el uso de **Super** en un método miembro de clase.

Creó la clase Rectangle con una función:

```4d
  //Clase: Rectangle
 
 Function nbSides
 var $0 : Text
 $0:="I have 4 sides"
```

También creó la clase Square con una función que llama a la función de superclass:

```4d
  //Clase: Square
 
 Clase extiende Rectangle
 
 Function description
 var $0 : Text
 $0:=Super.nbSides()+" which are all equal"
```

Entonces puedes escribir en un método proyecto:

```4d
 var $square : Object
 var $message : Text
 $square:=cs.Square.new()
 $message:=$square.description() //tengo 4 lados los cuales son todos iguales
```

#### Ver también 

[cs](cs.md)  
[This ](this.md)  