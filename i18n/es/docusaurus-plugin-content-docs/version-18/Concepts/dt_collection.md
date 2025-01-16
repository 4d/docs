---
id: collection
title: Collection
---

Las colecciones son listas ordenadas de valores de tipos similares o diferentes (texto, número, objeto, booleano, colección o null).

Para gestionar las variables de tipo Colección se debe utilizar la notación de objetos (ver [Sintaxis-básica](Conceptos/dt_object.md#sintaxis-básica)).

Para acceder a un elemento de la colección, hay que pasar el número del elemento entre corchetes:

```4d
collectionRef[expression]
```

Puede pasar toda expresión 4D válida que devuelva un entero positivo en la expresión. Ejemplos:

```4d
 myCollection[5]  //acceso al 6º elemento de la colección
 myCollection[$var]
```

**Atención:** los elementos de la colección están numerados desde 0.

Puede asignar un valor a un elemento de la colección u obtener el valor de un elemento de la colección utilizando la notación de objetos:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

Si se asigna un índice de elemento que sobrepasa el último elemento existente de la colección, la colección se redimensiona automáticamente y a todos los nuevos elementos intermedios se les asigna un valor nulo:

```4d
 C_COLLECTION(myCol)
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Inicialización

Las colecciones deben haber sido inicializadas, por ejemplo utilizando el comando `New collection`, de lo contrario al intentar leer o modificar sus elementos se generará un error de sintaxis.

Ejemplo:
```4d
 C_COLLECTION($colVar) //creación de una variable 4D de tipo colección
 $colVar:=Nueva colección //inicialización de la colección y asignación a la variable 4D
```

### Colección estándar o compartida

Puede crear dos tipos de colecciones:

- colecciones estándar (no compartidas), utilizando el comando `New collection`. Estas colecciones pueden ser editadas sin ningún control de acceso específico, pero no pueden ser compartidas entre procesos.
- colecciones compartidas, utilizando el comando `New shared collection`. Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos. El acceso a estas colecciones es controlado por estructuras `Use...End use`. Para más información, consulte la sección [Objetos y colecciones compartidos](Concepts/shared.md).

## Métodos de colección

Las referencias a colecciones 4D se benefician de métodos especiales (a veces llamados *funciones miembro*). Gracias a la notación de objetos, estos métodos pueden aplicarse a las referencias de la colección utilizando la siguiente sintaxis:

> {$result:=}myCollection.memberFunction( {params} )

Tenga en cuenta que, aunque no tenga parámetros, una función miembro debe ser llamada con paréntesis (), de lo contrario se genera un error de sintaxis.

Por ejemplo:

```4d
$newCol:=$col.copy() //copia de $col a $newCol
$col.push(10;100) //añade de 10 y 100 a la colección
```

Algunos métodos devuelven la colección original después de la modificación, para que pueda ejecutar las llamadas en una secuencia:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### parámetro rutaPropiedad


Varios métodos aceptan una _propertyPath_ como parámetro. Este parámetro significa:

- o bien un nombre de propiedad del objeto, por ejemplo "apellido"
- o una ruta de propiedades del objeto, es decir, una secuencia jerárquica de subpropiedades vinculadas con caracteres de punto, por ejemplo "empleado.hijos.nombre".

**Atención:** cuando se utilizan métodos y parámetros propertyPath, no se puede utilizar ".", "[ ]", o espacios en los nombres de las propiedades ya que impedirá que 4D analice correctamente la ruta:

```4d
 $vmin:=$col.min("My.special.property") //indefinido
 $vmin:=$col.min(["My.special.property"]) //error
```
