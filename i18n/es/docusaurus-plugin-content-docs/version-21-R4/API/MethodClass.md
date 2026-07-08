---
id: MethodClass
title: Método
---

Un objeto `4D.Method` contiene un fragmento de código que se crea a partir de la fuente de texto y puede ser ejecutado. Los métodos `4D.Method` siempre se ejecutan en modo interpretado, independientemente del modo de ejecución del proyecto (interpretado/compilado). Esta funcionalidad está especialmente diseñada para permitir la ejecución dinámica y sobre la marcha de fragmentos de código.

Un objeto `4D.Method` se crea con la función `4D.Method.new()`.

Los objetos `4D.Method` heredan de la clase [`4D.Function`](./FunctionClass.md). Así, para ejecutar el objeto método, puede:

- almacenar un objeto `4D.Method` en una propiedad del objeto y utilizar el operador `()` después del nombre de la propiedad,
- o llamar directamente al objeto `4D.Method` usando la función [`call()`](#call) o [`apply()`](#apply) en él.

Ver ejemplos en el párrafo [Ejecución de código en los objetos Function](../API/FunctionClass.md#executing-code-in-function-objects).

:::tip Entrada de blog relacionada

[Execute Code from Text with 4D.Method](https://blog.4d.com/execute-code-from-text-with-4d-method)

:::

:::info

Esta clase es [**streamable**](../Concepts/dt_object.md#binary-streaming-variable-to-blob) en binario.

:::

### Ejemplos

#### Creación de un método dinámico de base

```4d
var $myCode : Text
$myCode:="#DECLARE ($number1:Integer;$number2:Integer):Integer "+Char(13)+"return $number1*$number2"

var $o:={}
$o.multiplication:=4D.Method.new($myCode) //poner objeto en una propiedad
var $result2:=$o.multiplication(2;3) // 6

var $result3:=4D.Method.new($myCode).call(Null; 10; 5) // 50
```

#### Uso de `This` dentro del código del método

```4d
var $myCode:="#DECLARE ($str1:text):text"+Char(13)+"return $str1+This.name"

var $o:={name: "John"}
$o.concat:=4D.Method.new($myCode)

var $result : Text
$result:=$o.concat("Hello ") // $result is "Hello John"
```

#### Utilizar un archivo de texto con comprobación sintáctica

```text
//Método 4d almacenado en un archivo de texto
var $newBusinessRules:=New shared object
Use ($newBusinessRules)
	$newBusinessRules.taxRate:=0.2
	$newBusinessRules.discountFormula:="price * quantity * discountRate"
	$newBusinessRules.approvalThreshold:=10000
	$newBusinessRules.freeShippingThreshold:=150
	$newBusinessRules.defaultCurrency:="EUR"
End use 

Use (Storage)
	Storage.businessRules:=$newBusinessRules
End use  
```

Este método se llama en el código:

```4d
var $myFile:=File("/DATA/BusinessRules.4dm")

var $myMethod:=4D.Method.new($myFile.getText())
// Verificación de errores de sintaxis
If ($myMethod.checkSyntax().success)
   $myMethod.call()
End if 
```

### Objeto Método

Los objetos 4D.Method ofrecen las siguientes propiedades y funciones:

|                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary -->               |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary -->                  |
| [<!-- INCLUDE #MethodClass.checkSyntax().Syntax -->](#checksyntax)<br/><!-- INCLUDE #MethodClass.checkSyntax().Summary --> |
| [<!-- INCLUDE #MethodClass.name.Syntax -->](#name)<br/><!-- INCLUDE #MethodClass.name.Summary -->                          |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary -->                |

## 4D.Method.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21 R3       | Añadidos       |

</details>

<!-- REF #4D.Method.new().Syntax -->**4D.Method.new**( *source* : Text {; name : Text } ) : 4D.Method<!-- END REF -->

<!-- REF #4D.Method.new().Params -->

<div class="no-index">

| Parámetros | Tipo                      |                             | Descripción                                                                                                                 |
| ---------- | ------------------------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------- |
| source     | Text                      |              ->             | Representación textual de un método 4D a encapsularse como un objeto                                                        |
| name       | Text                      |              ->             | Nombre del método a mostrar en el depurador. Si se omite, el nombre del método se mostrará como "anonymous" |
| Resultado  | 4D.Method | <- | Nuevo método objeto compartido                                                                                              |

</div>
<!-- END REF -->

#### Descripción

La función `4D.Method.new()` <!-- REF #4D.Method.new().Summary -->crea y devuelve un nuevo objeto `4D.Method` construido a partir del código *source*<!-- END REF -->.

En el parámetro *source*, pase el código fuente 4D del método como texto. Todos los caracteres de fin de línea son soportados (LF, CR, CRLF) utilizando el comando [`Char`](../commands/char) o una [secuencia de escape](../Concepts/quick-tour.md#escape-sequences).

En el parámetro opcional *name*, pase el nombre del método que se mostrará en el depurador 4D o en el explorador Runtime. Si omite este parámetro, el nombre del método aparecerá como "anonymous".

:::tip

Se recomienda nombrar explícitamente su método si lo desea:

- utilizar nombre de método persistente en la [ventana de evaluación del depurador](../Debugging/debugger#custom-watch-pane) (los métodos anónimos no son persistentes en el depurador).
- manipular el método volátil utilizando comandos como [`Method get path`](../commands/method-get-path) y [`Method resolve path`](../commands/method-resolve-path) (los métodos anónimos no tienen rutas).

:::

El objeto 4D.Method resultante puede ser verificado utilizando [`checkSyntax()`](#checksyntax) y ejecutado utilizando `()`, [`.apply()`](#apply) o [`.call()`](#call).

:::note

Los objetos método volátiles con nombre no son métodos proyecto, no se almacenan en archivos disco y no pueden ser llamados por comandos como [`EXECUTE METHOD`](../commands/execute-method). Por otra parte, dado que heredan de la clase [`4D.Function`](./FunctionClass.md), pueden utilizarse siempre que se espere un objeto `4D.Function`.

:::

#### Ejemplo

```4d
var $m:=4D.Method.new("#DECLARE ($t : Text) : Text \nreturn Uppercase($t)")

var $res:=$m.call(Null; "hello world")  //HELLO WORLD
```

<!-- INCLUDE FunctionClass.apply().Desc -->

#### Ejemplo

```4d
var $coll:=[10; 2]
var $myCode:="#DECLARE ($number1:Integer;$number2:Integer):Integer\n"+\
"return $number1*$number2"

$m:=4D.Method.new($myCode; "m_multiple")
var $result:=$m.apply(Null; $coll) //20

```

<!-- INCLUDE FunctionClass.call().Desc -->

#### Ejemplo

```4d
 var $m : 4D.Method
 var $myCode:="#DECLARE ($number1:Integer;$number2:Integer):Integer\n"+\
"return $number1*$number2"

$m:=4D.Method.new($myCode; "m_multiple")
var $result:=$m.call(Null; 10; 5) //50
```

## .checkSyntax()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21 R3       | Añadidos       |

</details>

<!-- REF #MethodClass.checkSyntax().Syntax -->**.checkSyntax**() : Object<!-- END REF -->

<!-- REF #MethodClass.checkSyntax().Params -->

<div class="no-index">

| Parámetros | Tipo   |                             | Descripción                                 |
| ---------- | ------ | --------------------------- | ------------------------------------------- |
| Resultado  | Object | <- | Objeto resultado de verificación sintáctica |

</div>
<!-- END REF -->

#### Descripción

La función `.checkSyntax()` <!-- REF #MethodClass.checkSyntax().Summary -->verifica la sintaxis del código fuente del objeto `4D.Method` y devuelve un objeto resultado<!-- END REF -->.

El objeto devuelto contiene las siguientes propiedades:

| Propiedad |                                                                                   | Tipo                 | Descripción                                                                                                                  |
| --------- | --------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| success   |                                                                                   | Boolean              | True si no se ha detectado ningún error de sintaxis, false en caso contrario                                                 |
| errors    |                                                                                   | Colección de objetos | **Disponible sólo en caso de error o de warning**. Colección de objetos que describen errores o advertencias |
|           | [].isError    | Boolean              | Error si es True, sino warning                                                                                               |
|           | [].message    | Text                 | Mensaje de error o advertencia                                                                                               |
|           | [].lineNumber | Integer              | Número de línea del error en el código                                                                                       |

#### Ejemplo

```4d
var $m : 4D.Method
var $check : Object
$m:=4D.Method.new("var $a:=2026\r$a:=current date")
$check:=$m.checkSyntax()
If ($check.success=False)
	ALERT("Syntax error: "+$check.errors[0].message)
End if 
```

## .name

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21 R3       | Añadidos       |

</details>

<!-- REF #MethodClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descripción

La propiedad `.name` <!-- REF #MethodClass.name.Summary -->contiene el nombre del objeto `4D.Method`, si fue declarado en el parámetro *name* del constructor `new()`<!-- END REF -->. En caso contrario, no se devuelve la propiedad.

Esta propiedad es de **solo lectura**.

<!-- INCLUDE FunctionClass.source.Desc -->

#### Ejemplo

```4d
var $myCode:="#DECLARE ():Real\n"+\
"return random*current time"
$m:=4D.Method.new($myCode)
$src:=$m.source //"#DECLARE() : Real\rreturn Random*Current time"
```
