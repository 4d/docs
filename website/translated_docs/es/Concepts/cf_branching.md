---
id: branching
title: Branching structures
---

A branching structure allows methods to test a condition and take alternative paths, depending on the result.


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

la expresión es TRUE sólo si ambos métodos son TRUE. Sin embargo, incluso si _MethodA_ devuelve FALSE, 4D seguirá evaluando _MethodB_, lo que supone una pérdida de tiempo inútil. En este caso, es más interesante utilizar una estructura como:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

El resultado es similar y _MethodB_ se evalúa sólo si es necesario.

### Example

```4d
  // Ask the user to enter a name
 $Find:=Request(Type a name)
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("You did not enter a name.")
 End if 
```

**Consejo:** la ramificación puede realizarse sin que las instrucciones se ejecuten en un caso u otro. Al desarrollar un algoritmo o una aplicación especializada, nada le impide escribir:

```4d
 If(Boolean_Expression)
 Else
    statement(s)
 End if
```
or:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
 End if
```

## Case of...Else...End case

La sintaxis de la estructura condicional `Case of...Else...End case` es:
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
Al igual que la estructura `If...Else...End if`, la estructura `Case of...Else...End case` también permite a su método elegir entre acciones alternativas. A diferencia de la estructura `If...Else...End`, la estructura `Case of...Else...End case` puede probar un número razonablemente ilimitado de expresiones booleanas y realizar una acción dependiendo de cuál sea TRUE.

Cada expresión booleana va precedida de dos puntos (`:`). Esta combinación de los dos puntos y la expresión booleana se llama un caso. Por ejemplo, la siguiente línea es un caso:

```4d
:(bValidate=1)
```

Sólo se ejecutarán las instrucciones que sigan al primer caso TRUE (y hasta el siguiente). Si ninguno de los casos es TRUE, no se ejecutará ninguna de las instrucciones (si no se incluye la parte `Else`).

Puede incluir una instrucción Else después del último caso. Si todos los casos son FALSE, se ejecutarán las instrucciones siguientes al `Else`.

### Example

Este ejemplo comprueba una variable numérica y muestra un cuadro de alerta con una palabra:

```4d
 Case of
    :(vResult=1) //Test if the number is 1
       ALERT("One.") //If it is 1, display an alert
    :(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    :(vResult=3) //Test if the number is 3
       ALERT("Three.") //If it is 3, display an alert
    Else //If it is not 1, 2, or 3, display an alert
       ALERT("It was not one, two, or three.")
 End case
```

Para comparar, aquí está la versión `If...Else...End if` del mismo método:

```4d
 If(vResult=1) //Test if the number is 1
    ALERT("One.") //If it is 1, display an alert
 Else
    If(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    Else
       If(vResult=3) //Test if the number is 3
          ALERT("Three.") //If it is 3, display an alert
       Else //If it is not 1, 2, or 3, display an alert
          ALERT("It was not one, two, or three.")
       End if
    End if
 End if
```

Remember that with a `Case of...Else...End case` structure, only the first TRUE case is executed. Even if two or more cases are TRUE, only the statements following the first TRUE case will be executed.

Consequently, when you want to implement hierarchical tests, you should make sure the condition statements that are lower in the hierarchical scheme appear first in the test sequence. For example, the test for the presence of condition1 covers the test for the presence of condition1&condition2 and should therefore be located last in the test sequence. For example, the following code will never see its last condition detected:

```4d
 Case of
    :(vResult=1)
       ... //statement(s)
    :((vResult=1) & (vCondition#2)) //this case will never be detected
       ... //statement(s)
 End case
```

In the code above, the presence of the second condition is not detected since the test "vResult=1" branches off the code before any further testing. For the code to operate properly, you can write it as follows:

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //this case will be detected first
       ... //statement(s)
    :(vResult=1)
       ... //statement(s)
 End case
```

Also, if you want to implement hierarchical testing, you may consider using hierarchical code.

**Tip:** Branching can be performed without statements to be executed in one case or another. Al desarrollar un algoritmo o una aplicación especializada, nada le impide escribir:
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

or:
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

or:
```4d
 Case of
    Else
       statement(s)
 End case
```
