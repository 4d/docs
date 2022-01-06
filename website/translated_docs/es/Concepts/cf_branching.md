---
id: branching
title: Estructuras condicionales
---

Una estructura de ramificación permite que los métodos prueben una condición y tomen caminos alternativos, en función del resultado.


## If...Else...End if

La sintaxis de la estructura condicional `If...Else...End if` es:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
    statement(s)
 End if
```

Tenga en cuenta que la parte `Else` es opcional; puede escribir:
```4d
 If(Boolean_Expression)
    statement(s)
 End if
```

La estructura `If...Else...End if` permite a su método elegir entre dos acciones, dependiendo de si una prueba (una expresión booleana) es TRUE o FALSE. Cuando la expresión booleana es TRUE, se ejecutan las sentencias que siguen inmediatamente a la prueba. Si la expresión booleana es FALSE, se ejecutan las instrucciones que siguen a la línea Else. El `Else` es opcional; si se omite Else, la ejecución continúa con la primera instrucción (si la hay) que sigue al `End if`.

Tenga en cuenta que la expresión booleana siempre se evalúa completamente. Considere en particular la siguiente prueba:

```4d
 If(MethodA & MethodB)
    ...
 End if
```

The expression is TRUE only if both methods are TRUE. Sin embargo, incluso si _MethodA_ devuelve FALSE, 4D seguirá evaluando _MethodB_, lo que supone una pérdida de tiempo inútil. En este caso, es más interesante utilizar una estructura como:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

El resultado es similar y _MethodB_ se evalúa sólo si es necesario.

### Ejemplo

```4d
  // Pedir al usuario que introduzca un nombre
 $Find:=Request(Type a name)
 Si(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("No ha introducido un nombre.")
 End if
 End if 
```

**Consejo:** la ramificación puede realizarse sin que las instrucciones se ejecuten en un caso u otro. Al desarrollar un algoritmo o una aplicación especializada, nada le impide escribir:

```4d
 If(Boolean_Expression)
 Else
    statement(s)
 End if
```
o:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
 End if
```

## Case of... Else...End case

A diferencia de la estructura `If...Else...End`, la estructura `Case of...
```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .

    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

Tenga en cuenta que la parte `Else` es opcional; puede escribir:
```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .

    :(Boolean_Expression)
       statement(s)
 End case
```
La sintaxis de la estructura condicional `Case of... Else...End case` es:

Cada expresión booleana va precedida de dos puntos (`:`). Esta combinación de los dos puntos y la expresión booleana se llama un caso. Por ejemplo, la siguiente línea es un caso:

```4d
:(bValidate=1)
```

Sólo se ejecutarán las instrucciones que sigan al primer caso TRUE (y hasta el siguiente). Si ninguno de los casos es TRUE, no se ejecutará ninguna de las instrucciones (si no se incluye la parte `Else`).

Puede incluir una instrucción Else después del último caso. Si todos los casos son FALSE, se ejecutarán las instrucciones siguientes al `Else`.

### Ejemplo

Este ejemplo comprueba una variable numérica y muestra un cuadro de alerta con una palabra:

```4d
 Case of
    :(vResult=1) //Probar si el número es 1
       ALERT("One.") //Si es 1, mostrar una alerta
    :(vResult=2) //Probar si el número es 2
       ALERT("Two.") //Si es 2, mostrar una alerta
    :(vResult=3) //Probar si el número es 3
       ALERT("Three.") //Si es 3, mostrar una alerta
    Else //Si no es 1, 2 o 3, mostrar una alerta
       ALERT("It was not one, two, or three.")
 //statement(s)
 End case
```

Para comparar, aquí está la versión `If...Else...End if` del mismo método:

```4d
 If(vResult=1) //Probar si el número es 1
    ALERT("One.") //Si es 1, mostrar una alerta
 Else
    If(vResult=2) //Probar si el número es 2
       ALERT("Two.") //Si es 2, mostrar una alerta
    Else
       If(vResult=3) //Probar si el número es 3
          ALERT("Three.") //Si es 3, mostrar una alerta
    Else //Si no es 1, 2 o 3, mostrar una alerta
       ALERT("It was not one, two, or three.")
       End if
    End if
 End if
```

Recuerde que con una estructura `Case of... Else...End case`, sólo se ejecuta el primer caso TRUE. Aunque dos o más casos sean TRUE, sólo se ejecutarán las instrucciones que siguen al primer caso TRUE.

En consecuencia, cuando quiera implementar pruebas jerárquicas, debe asegurarse de que las declaraciones de condición que están más abajo en el esquema jerárquico aparezcan primero en la secuencia de pruebas. Por ejemplo, si se quiere procesar el caso simple (vResult=1) y el caso complejo (vResult=1) & (vCondition#2) y se estructura el método de la siguiente manera: Por ejemplo, el siguiente código nunca verá detectada su última condición:

```4d
 Case of
    :(vResult=1) //Probar si el número es 1
       ALERT("One.") //Si es 1, mostrar una alerta
    :(vResult=2) //Probar si el número es 2
       ALERT("Two.") //Si es 2, mostrar una alerta
    :(vResult=3) //Probar si el número es 3
       ALERT("Three.") //Si es 3, mostrar una alerta
    Else //Si no es 1, 2 o 3, mostrar una alerta
       ALERT("It was not one, two, or three.")
 End case
```

En el código anterior, la presencia de la segunda condición no se detecta, ya que la prueba "vResult=1" ramifica el código antes de cualquier otra prueba. Para que el código funcione correctamente, puedes escribirlo así:

```4d
 If(vResult=1) //Probar si el número es 1
    ALERT("One.") //Si es 1, mostrar una alerta
 Else
    If(vResult=2) //Probar si el número es 2
       ALERT("Two.") //Si es 2, mostrar una alerta
    Else
       If(vResult=3) //Probar si el número es 3
          ALERT("Three.") //Si es 3, mostrar una alerta
    Else //Si no es 1, 2 o 3, mostrar una alerta
       ALERT("It was not one, two, or three.")
       End if
    End if
 End if
```

Además, si quiere implementar pruebas jerárquicas, puede considerar el uso de código jerárquico.

**Consejo:** la ramificación puede realizarse sin que las instrucciones se ejecuten en un caso u otro. Al desarrollar un algoritmo o una aplicación especializada, nada le impide escribir:
```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
      ...

    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

o:
```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
       statement(s)
       ...

    :(Boolean_Expression)
       statement(s)
    Else
 End case
```

o:
```4d
 Case of
    Else
       statement(s)
 End case
```
