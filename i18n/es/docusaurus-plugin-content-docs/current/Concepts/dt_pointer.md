---
id: pointer
title: Puntero
---

Una variable o expresión puntero es una referencia a otra variable (incluyendo arrays y elementos de arrays), tabla, campo u objeto. No hay ningún campo de tipo Puntero.

Los punteros ofrecen una forma avanzada (en programación) de referirse a los datos. Cuando se utiliza el lenguaje, se accede a varios objetos -en particular, tablas, campos, variables, objetos y arrays- simplemente utilizando sus nombres. Sin embargo, con frecuencia es útil referirse a estos elementos y acceder a ellos sin conocer sus nombres. Esto es lo que los punteros le permiten hacer.

El concepto de los punteros no es tan raro en la vida cotidiana. A menudo se hace referencia a algo sin conocer su identidad exacta. Por ejemplo, puede decirle a un amigo: "Vamos a dar una vuelta en tu coche" en lugar de "Vamos a dar una vuelta en el coche con matrícula 123ABD." En este caso, se refiere al coche con matrícula 123ABD utilizando la frase " tu coche." La frase "coche con matrícula 123ABD" es como el nombre de un objeto, y usar la frase "tu coche" es como usar un puntero para referenciar el objeto.

Poder referirse a algo sin conocer su identidad exacta es muy útil. De hecho, su amigo podría comprarse un coche nuevo, y la frase " tu coche" seguiría siendo correcta: seguiría siendo un coche y usted podría seguir dando un paseo en él. Los punteros funcionan de la misma manera. Por ejemplo, un puntero podría referirse en un momento dado a un campo numérico llamado Edad, y más tarde referirse a una variable numérica llamada Vejez. En ambos casos, el puntero hace referencia a datos numéricos que podrían utilizarse en un cálculo.

Puede utilizar punteros para referenciar tablas, campos, variables, arrays, elementos de arrays y objetos. La siguiente tabla ofrece un ejemplo de cada tipo de datos:

| Tipo     | Referenciación                                                                              | Uso                                         | Asignación                                  |
| -------- | ------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| Tabla    | vpTable:=->[Table]      | DEFAULT TABLE(vpTable->) | n/a                                         |
| Campo    | vpField:=->[Table]Field | ALERT(vpField->)         | vpField->:="John"           |
| Variable | vpVar:=->Variable                                                           | ALERT(vpVar->)           | vpVar->:="John"             |
| Array    | vpArr:=->Array                                                              | SORT ARRAY(vpArr->;>)    | COPY ARRAY (Arr;vpArr->) |
| array    | vpElem:=->Array{1}                                                          | ALERT (vpElem->)         | vpElem->:="John"            |
| Object   | vpObj:=->myObject                                                           | ALERT (vpObj->myProp)    | vpObj->myProp:="John"       |

## Utilizar punteros: ejemplo básico

Lo más fácil es explicar el uso de los punteros mediante un ejemplo. Este ejemplo muestra cómo acceder a una variable a través de un puntero. Comenzamos creando una variable:

```4d
$MyVar:="Hello"
```

$MyVar es ahora una variable que contiene la cadena “Hello.” Ahora podemos crear un puntero a $MyVar:

```4d
C_POINTER($MyPointer)  
$MyPointer:=->$MyVar
```

El símbolo -> significa "obtener un puntero a." Este símbolo está formado por un guión seguido de un signo "mayor que". En este caso, obtiene el puntero que hace referencia o "apunta" a $MyVar. Este puntero se asigna a MyPointer con el operador de asignación.

$MyPointer es ahora una variable que contiene un puntero a $MyVar. $MyPointer no contiene " Hello ", que es el valor en $MyVar, pero se puede utilizar $MyPointer para obtener este valor. La siguiente expresión devuelve el valor de $MyVar:

```4d
$MyPointer->
```

En este caso, devuelve la cadena "Hello". El símbolo ->, cuando sigue a un puntero, hace referencia al objeto apuntado. Esto se llama desreferenciación.

Es importante entender que se puede utilizar un puntero seguido del símbolo -> en cualquier lugar donde se podría haber utilizado el objeto al que apunta el puntero. Esto significa que podría utilizar la expresión $MyPointer-> en cualquier lugar en el que pudiera utilizar la variable original $MyVar. Por ejemplo, la siguiente línea muestra un cuadro de alerta con la palabra Hello:

```4d
ALERT($MyPointer->)
```

También puede utilizar $MyPointer para cambiar los datos en $MyVar. Por ejemplo, la siguiente instrucción almacena la cadena "Goodbye" en la variable $MyVar:

```4d
$MyPointer->:="Goodbye"
```

Si examina los dos usos de la expresión $MyPointer->, verá que actúa igual que si hubiera utilizado $MyVar en su lugar. En resumen, las dos líneas siguientes realizan la misma acción: ambas muestran un cuadro de alerta con el valor actual de la variable $MyVar:

```4d
ALERT($MyPointer->)
ALERT($MyVar)
```

Las siguientes dos líneas realizan la misma acción - ambas asignan la cadena "Goodbye" a $MyVar:

```4d
$MyPointer->:="Goodbye"
$MyVar:="Goodbye"
```

## Operadores en punteros

Con:

```4d
  ` vPtrA y vPtrB apuntan al mismo objeto
 vPtrA:=->anObject
 vPtrB:=->anObject
  ` vPtrC apunta a otro objeto
 vPtrC:=-anotherObject
```

| Operación   | Sintaxis          | Devuelve | Expression    | Valor |
| ----------- | ----------------- | -------- | ------------- | ----- |
| Igual       | Puntero = Puntero | Boolean  | vPtrA = vPtrB | True  |
|             |                   |          | vPtrA = vPtrC | False |
| Desigualdad | Puntero # Puntero | Boolean  | vPtrA # vPtrC | True  |
|             |                   |          | vPtrA # vPtrB | False |

## Principales usos

### Punteros a tablas

En cualquier lugar en el que el lenguaje espere ver una tabla, se puede utilizar un puntero desreferenciado a la tabla. Se crea un puntero a una tabla utilizando una línea de instrucción como esta:

```4d
$TablePtr:=->[anyTable]
```

También puede obtener un puntero a una tabla utilizando el comando `Table`:

```4d
$TablePtr:=Table(20)
```

Puedes utilizar el puntero desreferenciado en los comandos, así:

```4d
DEFAULT TABLE($TablePtr->)
```

### Punteros a campos

En cualquier lugar en el que el lenguaje espere ver un campo, se puede utilizar un puntero desreferenciado para referenciar el campo. Se crea un puntero a un campo utilizando una línea de instrucción como esta:

```4d
$FieldPtr:=->[aTable]ThisField
```

También puede obtener un puntero a un campo utilizando el comando `Campo`, por ejemplo:

```4d
$FieldPtr:=Field(1;2)
```

Puedes utilizar el puntero desreferenciado en los comandos, así:

```4d
OBJECT SET FONT($FieldPtr->;"Arial")
```

### Punteros a variables locales

Cuando se utilizan punteros a variables de proceso o locales, hay que asegurarse de que la variable a la que se apunta ya está definida cuando se utilice el puntero. Tenga en cuenta que las variables locales se borran cuando el método que las creó ha terminado su ejecución y las variables de proceso se borran al final del proceso que las creó. Cuando un puntero llama a una variable que ya no existe, esto provoca un error de sintaxis en modo interpretado (variable no definida) pero puede generar un error más grave en modo compilado.

Los punteros a variables locales permiten guardar las variables del proceso en muchos casos. Los punteros a variables locales sólo pueden utilizarse dentro del mismo proceso. En el depurador, cuando se muestra un puntero a una variable local que ha sido declarada en otro método, el nombre del método original se indica entre paréntesis, después del puntero. Por ejemplo, si se escribe en Method1:

```4d
 $MyVar:="Hello world"
 Method2(->$MyVar)
```

En Method2, el depurador mostrará $1 de la siguiente manera:

| $1 | ->$MyVar (Method1) |
| -- | ------------------------------------- |

El valor de 1 dólar será:

| $MyVar (Method1) | "Hello world" |
| ----------------------------------- | ------------- |

### Punteros a elementos del array

Puede crear un puntero a un elemento del array. Por ejemplo, las siguientes líneas crean un array y asignan un puntero al primer elemento del array a una variable llamada $ElemPtr:

```4d
ARRAY REAL($anArray;10) //Crear un array
$ElemPtr:=->$anArray{1} //Crear un puntero al elemento de array
```

Puede utilizar el puntero desreferenciado para asignar un valor al elemento, así:

```4d
$ElemPtr->:=8
```

### Punteros a arrays

Puede crear un puntero a un array. Por ejemplo, las siguientes líneas crean un array y asignan un puntero al array a una variable llamada $ArrPtr:

```4d
ARRAY REAL($anArray;10) //Crear un array
$ArrPtr:=->$anArray //Crear un puntero al array
```

Es importante entender que el puntero apunta al array; no apunta a un elemento del array. Por ejemplo, puede utilizar el puntero desreferenciado de las líneas anteriores de esta manera:

```4d
SORT ARRAY($ArrPtr->;>) //Ordenar el array
```

Si debe referirse al cuarto elemento del array utilizando el puntero, haga lo siguiente:

```4d
 ArrPtr->{4}:=84
```

### Punteros como parámetros a los métodos

Puede pasar un puntero como parámetro de un método. Dentro del método, puede modificar el objeto referenciado por el puntero. Por ejemplo, el siguiente método, `takeTwo`, toma dos parámetros que son punteros. Cambia el objeto referenciado por el primer parámetro a caracteres en mayúsculas, y el objeto referenciado por el segundo parámetro a caracteres en minúsculas. Este es el método del proyecto:

```4d
  //Método proyecto takeTwo 
  //$1 - Puntero a un campo de cadena o variable. Cambie esto a mayúsculas.
  //$2 – Puntero a un campo de cadena o variable. Cambia esto a minúsculas.
 $1->:=Uppercase($1->)
 $2->:=Lowercase($2->)
```

La siguiente línea utiliza el método `takeTwo` para cambiar un campo a mayúsculas y para cambiar una variable a minúsculas:

```
takeTwo(->[myTable]myField;->$MyVar)
```

Si el campo [myTable]myField contenía la cadena "jones", se cambiaría por la cadena "JONES". Si la variable $MyVar contenía la cadena "HELLO", se cambiaría por la cadena "hello".

En el método takeTwo, y de hecho, siempre que se utilicen punteros, es importante que el tipo de datos del objeto al que se hace referencia sea correcto. En el ejemplo anterior, los punteros deben apuntar a algo que contenga una cadena o texto.

### Punteros a punteros

Si realmente le gusta complicar las cosas, puede utilizar punteros para referenciar otros punteros. Considere este ejemplo:

```4d
 $MyVar:="Hello"
 $PointerOne:=->$MyVar
 $PointerTwo:=->$PointerOne
 ($PointerTwo->)->:="Goodbye"
 ALERT(($PointerTwo->)->)
```

Muestra un cuadro de alerta con la palabra "Goodbye".

A continuación se explica cada línea del ejemplo:

- $MyVar:="Hello"
  \--> Esta línea pone la cadena "Hello" en la variable $MyVar.
- $PointerOne:=-$MyVar
  \--> $PointerOne ahora contiene un puntero a $MyVar.
- $PointerTwo:=->$PointerOne
  \--> $PointerTwo (una nueva variable) contiene un puntero a $PointerOne, que a su vez apunta a $MyVar.
- ($PointerTwo->)->:="Goodbye"
  \--> $PointerTwo-> hace referencia al contenido de $PointerOne, que a su vez hace referencia a $MyVar. Por lo tanto, ($PointerTwo->)-> referencia el contenido de $MyVar. Así que en este caso, a $MyVar se le asigna "Goodbye".
- ALERT (($PointerTwo->)->)
  \--> Lo mismo que: $PointerTwo-> referencia el contenido de $PointerOne, que a su vez referencia $MyVar. Por lo tanto, ($PointerTwo->)-> referencia el contenido de $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar.

La siguiente línea pone "Hello" en $MyVar:

```4d
($PointerTwo->)->:="Hello"
```

La siguiente línea obtiene "Hello de $MyVar y lo pone en $NewVar:

```
$NewVar:=($PointerTwo->)->
```

**Importante:** la desreferenciación múltiple requiere paréntesis.
