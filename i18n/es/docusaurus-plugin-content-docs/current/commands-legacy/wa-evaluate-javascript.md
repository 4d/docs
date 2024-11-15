---
id: wa-evaluate-javascript
title: WA Evaluate JavaScript
slug: /commands/wa-evaluate-javascript
displayed_sidebar: docs
---

<!--REF #_command_.WA Evaluate JavaScript.Syntax-->**WA Evaluate JavaScript** ( {* ;} *objeto* ; *codeJS* {; *type*} )  : any<!-- END REF-->
<!--REF #_command_.WA Evaluate JavaScript.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| codeJS | Text | &#8594;  | Código JavaScript |
| type | Integer | &#8594;  | Tipo al cual convertir el resultado |
| Resultado | Date, Time, Object, Pointer, Real, Text | &#8592; | Resultado de ejecución |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WA Evaluate JavaScript.Summary-->El comando WA Evaluate JavaScript ejecuta en el área web designada por los parámetros *\** y *objeto* el código JavaScript pasado en *codeJS* y devuelve el resultado.<!-- END REF--> Este comando debe ser llamado después de cargar la página (el evento de formulario On End URL Loading debe haber sido generado).

Por defecto, el comando devuelve el resultado como cadenas. Puede utilizar el parámetro opcional *tipo* para especificar la digitación del valor devuelto. Para hacer esto, pase una de las siguientes constantes, del tema "*Tipos de campos y variables*":

| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Is Boolean    | Entero largo | 6     |
| Is collection | Entero largo | 42    |
| Is date       | Entero largo | 4     |
| Is longint    | Entero largo | 9     |
| Is object     | Entero largo | 38    |
| Is real       | Entero largo | 1     |
| Is text       | Entero largo | 2     |
| Is time       | Entero largo | 11    |

**Atención**: no se recomienda utilizar este comando para llamar directamente a una función JavaScript que muestre un diálogo (**alert(), print()**...) ya que el usuario no puede interactuar con el área web mientras se ejecuta el código 4D. Si necesita implementar dicha interfaz, puede llamar, por ejemplo, a **setTimeout(function(){alert();}, 50))** para dejar que termine la ejecución del código 4D y permitir la interacción del usuario.

#### Ejemplo 1 

Este ejemplo de código JavaScript hace que se muestre el URL anterior. 

```4d
 $result:=WA Evaluate JavaScript(MyWArea;"history.back()")
```

#### Ejemplo 2 

Este ejemplo muestra algunas evaluaciones con conversión de los valores recibidos.

  
Las funciones JavaScript se ubican en un archivo HTML:

```HTML
<!DOCTYPE html>
<html>
    <head>
        <script>
        function evalLong(){
            return 123;
        }
        function evalText(){
            return "456";
        }
        function evalObject(){
            return {a:1,b:"hello world"};
        }
        function evalDate(){
            return new Date();
        }
    </script>
    </head>
    <body>
        TEST PAGE
    </body>
</html>
```

Escriba en el método del formulario 4D:

```4d
 If(Form event code=On Load)
    WA OPEN URL(*;"Web Area";"C:\\myDatabase\\index.html")
 End if
```

Luego puede evaluar el código JavaScript desde 4D:

```4d
 $Eval1:=WA Evaluate JavaScript(*;"Web Area";"evalLong()";Is longint)
  //$Eval1 = 123
  //$Eval1 = "123" if type is omitted
 $Eval2:=WA Evaluate JavaScript(*;"Web Area";"evalText()";Is text)
  //$Eval2 = "456"
 $Eval3:=WA Evaluate JavaScript(*;"Web Area";"evalObject()";Is object)
  //$Eval3 = {"a":1,"b":"hello world"}
 $Eval4:=WA Evaluate JavaScript(*;"Web Area";"evalDate()";Is date)
  // $Eval4 = 06/21/13
  // $Eval4 = "2013-06-21T14:45:09.694Z" si el tipo se omite
```

#### Ver también 

[WA EXECUTE JAVASCRIPT FUNCTION](wa-execute-javascript-function.md)  