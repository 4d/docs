---
id: object
title: Object
---

Las variables, campos o expresiones de tipo objeto pueden contener datos de diversos tipos. La estructura de los objetos nativos de 4D se basa en el principio clásico de los pares "propiedad/valor". La sintaxis de estos objetos se basa en la notación JSON:

- El nombre de una propiedad es siempre un texto, por ejemplo "Name". Debe seguir [reglas específicas](identifiers.md#object-properties).

- Un valor de propiedad puede ser del tipo siguiente:
    - número (Real, Entero, etc.)
    - text
    - null
    - boolean
    - puntero (almacenado como tal, evaluado con el comando `JSON Stringify` o al copiar),
    - fecha (tipo fecha o cadena en formato fecha ISO)
    - objeto(1) (los objetos pueden ser anidados en varios niveles)
    - imagen(2)
    - collection

(1)Los objetos ORDA como [entidades](ORDA/dsMapping.md#entity) o las [selecciones de entidades](ORDA/dsMapping.md#entity-selection) no pueden almacenarse en **campos objeto**; sin embargo, se soportan completamente en las **variables objeto** en memoria.

(2)Cuando se expone como texto en el depurador o se exporta a JSON, las propiedades de los objetos de tipo imagen indican "[objeto Imagen]".

:::caution

Tenga en cuenta que los nombres de las propiedades distinguen entre mayúsculas y minúsculas.

:::


Las variables, campos o expresiones de tipo Objeto se gestionan mediante la [notación de objetos](dt_object.md#syntax-basics) o los comandos disponibles en el tema **Objetos (Lenguaje)**. Tenga en cuenta que se pueden utilizar comandos específicos del tema **Búsquedas**, como `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE`, o `ORDER BY ATTRIBUTE` para llevar a cabo el procesamiento de los campos objetos.

Cada valor de propiedad al que se accede a través de la notación de objeto se considera una expresión. Puede utilizar estos valores siempre que se esperen expresiones 4D:

- en código 4D, ya sea escrito en los métodos (editor de código) o externalizado (fórmulas, archivos de etiquetas procesados por `PROCESS 4D TAGS` o el servidor web, archivos de exportación, documentos 4D Write Pro...),
- en las áreas de expresiones del depurador y del explorador de ejecución,
- en la lista de propiedades del editor de formularios para los objetos formulario: campo Variable o Expresión, así como diversas expresiones de list box y columnas (fuente de datos, color de fondo, estilo o color de fuente).

## Instanciación

Los objetos deben haber sido instanciados, de lo contrario intentar leer o modificar sus propiedades generará un error de sintaxis.

La instanciación de objetos puede realizarse de una de las siguientes maneras:

- utilizando el comando [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html),
- utilizando el operador `{}`.

:::info

Varios comandos y funciones 4D devuelven objetos, por ejemplo [`Get database measures`](https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html) o [`Archivo`](../API/FileClass.md#file). En este caso, no es necesario instanciar explícitamente el objeto, el lenguaje 4D lo hace por usted.

:::



### comando `New object`

El comando [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) crea un nuevo objeto vacío o precargado y devuelve su referencia.

Ejemplos:

```4d
 var $obVar : Object //declaración de una variable 4D de tipo objeto
 $obVar:=New object //instanciación de un objeto y asignación a la variable 4D

 var $obFilled : Object 
 $obFilled:=New object("name";"Smith";"age";42) //instanciación y asignación de un objeto pre-rellenado
```


### operador `{}`

El operador `{}` permite crear un **objeto literal**. Un literal de objeto es una lista separada por semicolumnas de cero o más pares de nombres de propiedades y valores asociados de un objeto, encerrados entre llaves (`{}`). La sintaxis literal de objeto crea objetos vacíos o llenos.

Dado que cualquier valor de propiedad se considera una expresión, puede crear subobjetos utilizando `{}` en los valores de propiedad.  También puede crear y hacer referencia a los **literales de colección**.

Ejemplos:

```4d
 var $o ; $o2 ; $o3 : Objeto //declaración de variables objeto
 $o := {} // instanciación de un objeto vacío 
 $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instanciación de un objeto
        // con propiedades {"a": "foo", "b":42, "c":{}, "d":false})

    // mismas propiedades utilizando variables
 var $a : Text
 var $b : Number
 var $c : Object
 $a:="foo"
 $b:=42
 $c:={}
 $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}

```

Puede mezclar las sintaxis `New object` y literal:

```4d
$o:={\
    ob1: {age: 42}; \
    ob2: New object("message"; "Hello"); \
    form1: Formula(return This.ob1.age+10); \
    form2 : Formula(ALERT($1)); \
    col: [1; 2; 3; 4; 5; 6]\
    }

$o.form1() //52
$o.form2($o.ob2.message) // muestra Hello
$col:=$o.col[5] //6
```




### Objeto estándar o compartido

Puede crear dos tipos de objetos:

- objetos regulares (no compartidos), utilizando el comando [`New object`](https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html) o la sintaxis literal de objeto (`{}`). Estos objetos pueden ser editados sin ningún control de acceso específico, pero no pueden ser compartidos entre procesos.
- objetos compartidos, utilizando el comando [`New shared object`](https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html). Estos objetos pueden ser compartidos entre procesos, incluidos los hilos apropiativos. El acceso a estos objetos se controla mediante estructuras `Use...End use`. Para más información, consulte la sección [Objetos y colecciones compartidos](shared.md).



## Propiedades

La notación de objetos puede utilizarse para acceder a los valores de las propiedades de objetos a través de una cadena de tokens. Con la notación de objetos, se puede acceder a las propiedades de los objetos de dos maneras:

- using a "dot" symbol: > object.propertyName

Ejemplo:
```4d
     employee.name:="Smith"
```

- using a string within square brackets: > object["propertyName"]

Ejemplos:
```4d
     $vName:=employee["name"]
     //o también:
     $property:="name"
     $vName:=employee[$property]

```

Como el valor de una propiedad de objeto puede ser un objeto o una colección, la notación objeto acepta una secuencia de símbolos para acceder a subpropiedades, por ejemplo:

```4d
 $vAge:=employee.children[2].age
```

La notación de objetos está disponible en cualquier elemento del lenguaje que pueda contener o devolver un objeto, es decir:




- con los **Objetos** mismos (almacenados en variables, campos, propiedades de objetos, arrays de objetos o elementos de colecciones). Ejemplos:

```4d
     $age:=$myObjVar.employee.age //variable
     $addr:=[Emp]data_obj.address //campo
     $city:=$addr.city //propiedad de un objeto
     $pop:=$aObjCountries{2}.population //array de objetos
     $val:=$myCollection[3].subvalue //elemento de colección
```
- **comandos 4D** que devuelven objetos. Ejemplo:

```4d
     $measures:=Get database measures. DB.tables
```

- **Métodos proyecto** que devuelven objetos. Ejemplo:

```4d
      // MyMethod1
     #DECLARE -> $o : Object
     $o:=New object("a";10;"b";20)

      //myMethod2
     $result:=MyMethod1.a //10
```

- **Collections** Example:

```4d
     myColl.length //tamaño de la colección
```


### Valor Null

Cuando se utiliza la notación de objetos, se soporta el valor **null** con el comando **Null**. Este comando puede utilizarse para asignar o comparar el valor nulo a propiedades de objetos o a elementos de colecciones, por ejemplo:

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

Para más información, consulte [Null e indefinido](dt_null_undefined.md).

### Valor indefinido

La evaluación de una propiedad de un objeto puede producir a veces un valor indefinido. Normalmente, al intentar leer o asignar expresiones indefinidas, 4D generará errores. Esto no ocurre en los siguientes casos:

- Leer una propiedad de un objeto o valor indefinido devuelve indefinido; asignar un valor indefinido a variables (excepto arrays) tiene el mismo efecto que llamar a [`CLEAR VARIABLE`](https://doc.4d.com/4dv19R/help/command/en/page89.html) con ellas:

```4d
     var $o : Object
     var $val : Integer
     $val:=10 //$val=10
     $val:=$o.a //$o. es indefinido (no hay error) y la asignación de este valor borra la variable
      //$val=0
```

- La lectura de la propiedad **length** de una colección indefinida produce 0:

```4d
     var $c : Collection //variable creada pero sin colección definida
     $size:=$c.length //$size = 0
```

- Un valor indefinido pasado como parámetro a un método proyecto se convierte automáticamente en 0 o "" según el tipo de parámetro declarado.

```4d
     var $o : Object
     mymethod($o.a) //Pasar un parámetro indefinido

      //En el método mymethod
     #Declare ($myText : Text) //El tipo de parámetro es texto
      // $myText contiene ""
```

- Una expresión de condición se convierte automáticamente en falsa cuando se evalúa a indefinido con las palabras clave If y Case of:

```4d
     var $o : Object
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```

La asignación de un valor indefinido a una propiedad de objeto existente reinicializa o borra su valor, dependiendo de su tipo:
 - Objeto, colección, puntero: Null
 - Imagen: imagen vacía
 - Booleano: False
 - Cadena: ""
 - Número: 0
 - Fecha: !00-00-00! Date: !00-00-00! if "Use date type instead of ISO date format in objects" setting is enabled, otherwise ""
 - Hora: 0 (número de ms)
 - Indefinido, Null: sin cambios

```4d
     var $o : Object
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- La asignación de un valor indefinido a una propiedad de objeto no existente no hace nada.


Cuando se esperan expresiones de un tipo determinado en su código 4D, puede asegurarse de que tienen el tipo correcto incluso cuando se evalúan como indefinidas, rodeándolas con el comando de transformación 4D apropiado: `String`, `Num`, `Date`, `Time`, `Bool`. Estos comandos devuelven un valor vacío del tipo especificado cuando la expresión se evalúa como indefinida. Por ejemplo:

```4d
 $myString:=Lowercase(String($o.a.b)) //asegurarse de obtener un valor de cadena aunque sea indefinido
  //para evitar errores en el código
```

Para más información, consulte [Null e indefinido](dt_null_undefined.md)


### Punteros

**Nota preliminar:** dado que los objetos se pasan siempre por referencia, no suele ser necesario utilizar punteros. Al pasar el objeto, internamente 4D utiliza automáticamente un mecanismo similar a un puntero, minimizando la necesidad de memoria y permitiendo modificar el parámetro y devolver las modificaciones. Como resultado, no es necesario utilizar punteros. Sin embargo, en caso de querer utilizar punteros, se puede acceder a los valores de las propiedades mediante punteros.

El uso de la notación de objetos con punteros es muy similar al uso de la notación de objetos directamente con objetos, excepto que el símbolo "punto" debe omitirse.

- Acceso directo:
> pointerOnObject->propertyName

- Acceso por nombre:
> pointerOnObject->["propertyName"]

Ejemplo:

```4d
 var vObj : Object
 var vPtr : Pointer
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```


## Resources

Los objetos utilizan *recursos* tales documentos, bloqueos de entidades y, por supuesto, memoria. Estos recursos se conservan siempre que los objetos los necesiten. Normalmente, no tiene que preocuparse por ellos, 4D libera automáticamente todos los recursos adjuntos a un objeto cuando detecta que el objeto en sí ya no está referenciado por ninguna variable u otro objeto.

Por ejemplo, cuando ya no hay más referencias a una entidad en la cual ha definido un bloqueo con [`$entity.lock()`](../API/EntityClass.md#lock), 4D liberará la memoria pero también liberará automáticamente el bloqueo asociado, por lo que una llamada a [`$entity.unlock()`](../API/EntityClass.md#unlock) es inútil.

Si desea liberar inmediatamente todos los recursos ocupados por un objeto sin tener que esperar que 4D lo haga automáticamente (al final de la ejecución del método para variables locales, por ejemplo), solo tiene que **anular todas sus referencias**. Por ejemplo:

```4d

$doc:=WP Import document("large_novel.4wp")
   ... // hacer algo con $doc
$doc:=Null  // liberar los recursos ocupados por $doc
   ... // continuar la ejecución con más memoria libre

```

## Ejemplos

La utilización de la notación de objetos simplifica el código 4D en el manejo de los mismos. Sin embargo, tenga en cuenta que la notación basada en comandos sigue siendo totalmente soportada.

- Escritura y lectura de propiedades de objetos (este ejemplo compara la notación de objetos y la notación de comandos):

```4d
  // Utilizando la notación objeto
 var $myObj : Object //declara un objeto variable 4D 
 $myObj:={} //crea un literal de objeto y lo asigna a la variable
 $myObj.age:=56
 $age:=$myObj.age //56

  // Utilizando la notación de comando
 var $myObj2 : Object //declara un objeto variable 4D
 OB SET($myObj2; "age";42) //crea un objeto y añade la propiedad age
 $age:=OB Get($myObj2; "age") //42

  // Por supuesto, ambas notaciones pueden mezclarse
 var $myObj3 : Object
 OB SET($myObj3; "age";10)
 $age:=$myObj3.age //10
```

- Creación de propiedades y asignación de valores, incluyendo objetos:

```4d
 var $Emp : Object
 $Emp:=New object
 $Emp.city:="London" //crea la propiedad city y establece su valor como"London"
 $Emp.city:="Paris" //modifica la propiedad city
 $Emp.phone:=New object("office";"123456789";"home";"0011223344")
  //crea la propiedad phone y establece su valor para un objeto
```

- Obtener un valor en un subobjeto es muy sencillo utilizando la notación de objetos:

```4d
 $vCity:=$Emp.city //"Paris"
 $vPhone:=$Emp.phone.home //"0011223344"
```

- Puede acceder a las propiedades como cadenas utilizando el operador `[]`

```4d
 $Emp["city"]:="Berlin" //modifica la propiedad city
  //esto puede ser útil para crear propiedades a través de variables
 var $addr : Text
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  // crea 4 propiedades vacías "address1...address4" en el objeto $Emp
```
