---
id: choose
title: Choose
slug: /commands/choose
displayed_sidebar: docs
---

<!--REF #_command_.Choose.Syntax-->**Choose** ( *criterio* ; *valor* {; *valor2* ; ... ; *valorN*} )  : any<!-- END REF-->
<!--REF #_command_.Choose.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| criterio | Boolean, Integer | &#8594;  | Valor a probar |
| valor | Expression | &#8594;  | Valores posibles |
| Resultado | any | &#8592; | Valor de criterio |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Choose.Summary-->El comando **Choose** devuelve uno de los valores pasados en los parámetros *valor1*, *valor2*, etc.<!-- END REF--> en función del valor del parámetro *criterio*.

Puede pasar un parámetro *criterio* de tipo booleano o numérico:

* Si *criterio* es un booleano, **Choose** devuelve *valor1* si el booleano es igual a True y *valor2* si el booleano es igual a False. En este caso, el comando espera exactamente tres parámetros: *criterio*, *valor1* y *valor2*.
* Si *criterio* es un entero, **Choose** devuelve el valor cuya posición corresponde a *criterio*. Atención, la numeración de los valores comienza en 0 (la posición de *valor1* es 0). En este caso, el comando espera al menos dos parámetros: *criterio* y *valor1*.

El comando acepta todo los tipos de datos para el/los parámetro(s) *valor*, excepto imágenes, punteros, BLOBS y arrays. Sin embargo, debe asegurarse de que todos los valores pasados sean del mismo tipo, 4D no efectuará ninguna verificación en este punto.

Si ningún *valor* corresponde a *criterio*, **Choose** devuelve un valor “nulo” con respecto al tipo del parámetro *valor* (por ejemplo, 0 para el tipo numérico, “” para el tipo cadena, etc.).

Este comando permite generar código conciso que reemplaza las pruebas de tipo “Case of” que toman varias líneas (ver ejemplo 2). También es muy útil en los lugares donde pueden ejecutarse fórmulas: editor de búsquedas, aplicar una fórmula, editor de informes rápidos, columna calculada de listbox, etc.

**Atención:** el comando **Choose** evalúa cada parámetro *valor* antes de su ejecución. Esto significa que:

* Si *valor* es una expresión dinámica que causa efectos secundarios (actualización de un contador, modificación de cualquier tipo), estos efectos ocurrirán en todos los casos;
* Si un parámetro *valor* es una expresión no válida, **Choose** devolverá un error en todos los casos. Por ejemplo, el siguiente código devolverá un error:  
```4d  
 $res:=Choose(True;"red1";"blue"+2) //error  
```

#### Ejemplo 1 

Este es un ejemplo del uso típico de este comando con un criterio de tipo booleano:

```4d
 vTitulo:=Choose([Persona]Masculino;"Sr";"Sra")
```

Este código es estrictamente equivalente a:

```4d
 If([Persona]Masculino)
    vTitulo:="Sr"
 Else
    vTitulo:="Sra"
 End if
```

#### Ejemplo 2 

Este es un ejemplo del uso típico de este comando con un criterio de tipo numérico:

```4d
 vEstado:=Choose([Persona]Estado;"Soltero";"Casado";'"Viudo";"Separado")
```

Este código es estrictamente equivalente a:

```4d
 Case of
    :([Persona]Estado=0)
       vEstado:="Soltero"
    :([Persona]Estado=1)
       vEstado:="Casado"
    :([Persona]Estado=2)
       vEstado:="Viudo"
    :([Persona]Estado=3)
       vEstado:="Separado"
 End case
```


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 955 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


