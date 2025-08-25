---
id: this
title: This
displayed_sidebar: docs
---

<!--REF #_command_.This.Syntax-->**This** : Object<!-- END REF-->

<!--REF #_command_.This.Params-->

| Parámetros | Tipo   |                             | Descripción              |
| ---------- | ------ | --------------------------- | ------------------------ |
| Resultado  | Object | &#8592; | Elemento u objeto actual |

<!-- END REF-->

## Descripción

El comando `This` <!--REF #_command_.This.Summary-->devuelve una referencia al objeto procesado actualmente.<!-- END REF-->

En la mayoría de los casos, el valor de `This` está determinado por cómo se llama una función. No se puede definir por asignación durante la ejecución, y puede ser diferente cada vez que se llame a la función.

Este comando puede utilizarse en diferentes contextos, que se describen a continuación. Dentro de estos contextos, accederá a propiedades de elementos de objetos/colecciones o a atributos de entidades a través de **This.<*propertyPath*\>**. Por ejemplo, *This.name* o *This.employer.lastName* son rutas válidas a propiedades de objetos, elementos o entidades.

En cualquier otro contexto, el comando devuelve **Null**.

## Función de clase

Cuando se utiliza una [función constructora de clase](../Concepts/classes.md#class-constructor) (con la función [`new()`](API/ClassClass.md#new)), su `This` está vinculado al nuevo objeto que se está construyendo.

```4d
//Class: ob

Class constructor  

    // Crear las propiedades en This 
    // asignándolas
    This.a:=42
```

```4d
// en un método 4D  
$o:=cs.ob.new()
$val:=$o.a //42
```

> Al llamar a la superclase del constructor en un constructor utilizando la palabra clave [Super](super.md), tenga en cuenta que `This` no debe ser llamado antes del constructor de la superclase, de lo contrario se genera un error. Ver [este ejemplo](super.md#example-1).

En todos los casos, `This` se refiere al objeto sobre el que se ha llamado el método, como si el método fuera una función del objeto.

```4d
//Clase: ob

Function f() : Integer
 return This.a+This.b
```

Entonces puede escribir en un método proyecto:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8

```

En este ejemplo, el objeto asignado a la variable $o no tiene su propia propiedad *f*, la hereda de su clase. Como *f* es llamado como un método de $o, su `This` se refiere a $o.

## Objeto fórmula

En el contexto de la ejecución de un objeto fórmula creado por los comandos [Formula](formula.md) o [Formula from string](formula-from-string.md), `This` devuelve una referencia al objeto actualmente procesado por la fórmula.

Por ejemplo, desea utilizar un método proyecto como una fórmula encapsulada en un objeto:

```4d
 var $person : Object := New object
 $person.firstName:="John"
 $person.lastName:="Smith"
 $person.greeting:=Formula(Greeting)
 $g:=$person.greeting("hello") // devuelve "hola John Smith"
 $g:=$person.greeting("hi") // devuelve "hi John Smith"
```

Con el método proyecto *Greeting*:

```4d
 #DECLARE($greeting : Text) : Text
 return $greeting+" "+This.firstName+" "+This.lastName
```

## List box

En el contexto de un list box asociado a una colección o una selección de entidades, durante los eventos [`On Display Detail`](../Events/onDisplayDetail.md) o [`On Data Change`](../Events/onDataChange.md), `This` devuelve una referencia al elemento de colección o entidad a la que accede el list box para mostrar la línea actual.

:::note

Si utiliza una colección de valores escalares en un list box, 4D crea un objeto para cada elemento con una única propiedad **value**. Así, el valor del elemento es devuelto por la expresión no asignable **This.value**.

:::

## Ejemplo 1

Una colección de objetos, cada uno con esta estructura:

```json
{  
"ID": 1234
"name": "Xavier",  
"revenues": 47300,  
"employees": [  
             "Allan",  
             "Bob", 
             "Charlie"  
            ] 
},{  
"ID": 2563
"name": "Carla",  
"revenues": 55000,  
"isFemale": true
"employees": [  
             "Igor",  
             "Jane"  
            ] 
},...
 
```

En el list box, cada columna se refiere a una de las propiedades del objeto, ya sea directamente (This.name), indirectamente (This.employees.length), o a través de una expresión (*getPicture*) en la que se puede usar directamente. El list box se ve así:

![](../assets/en/commands/pict3776706.en.png)

El método proyecto *GetPicture* se ejecuta automáticamente durante el evento **On display detail**:

```4d
  //GetPicture Method
 #DECLARE -> $genderPict : Picture
 If(This.isFemale)
    $genderPict:=Form.genericFemaleImage
 Else
    $genderPict:=Form.genericMaleImage
 End if
```

Una vez ejecutado el formulario, podrá ver el resultado:

![](../assets/en/commands/pict3783169.en.png)

## Ejemplo 2

Desea visualizar las entidades de la siguiente estructura en un list box:

![](../assets/en/commands/pict3872836.en.png)

Se crea un list box de tipo "Collection o entity selection" con la siguiente definición:

![](../assets/en/commands/pict3872844.en.png)

Note que:

- *This.ID*, *This.Title* y *This.Date* se refiere directamente a los atributos correspondientes en la base de datos ds.Event.
- *This.meetings* es un atributo relacionado (basado en el nombre de una relación de Uno a Muchos) que devuelve una selección de entidad de la base de datos ds.Meeting.
- **Form.eventList** es la selección de entidades que se adjunta al list box. El código de inicialización se puede poner en el evento on load del formulario:

```4d
 Case of  
    :(Form event code=On Load)  
       Form.eventList:=ds.Event.all() //devuelve una selección de entidad con todas las entidades  
 End case  
```

Una vez ejecutado el formulario, el list box se llena automáticamente con la selección de entidades:

![](../assets/en/commands/pict3872875.en.png)

## Ver también

[Self](../commands-legacy/self.md)\
[Super](super.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1470                        |
| Hilo seguro       | &check; |


