---
id:
  - dataClass
title:
  - dataClass
---



Los nombres de las clases de datos pueden utilizarse directamente en las peticiones REST para trabajar con entidades, selecciones de entidades o métodos de la clase de datos.

## Available syntaxes

| Sintaxis                                                                   | Ejemplo                     | Descripción                                                                                              |
| -------------------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| [**{dataClass}**](#dataClass)                                              | `/Employee`                 | Returns all the data (by default the first 100 entities) for the dataclass                               |
| [**{dataClass}({key})**](#dataclasskey)                                    | `/Employee(22)`             | Returns the data for the specific entity defined by the dataclass's primary key                          |
| [**{dataClass}:{attribute}(value)**](#dataclassattributevalue)             | `/Employee:firstName(John)` | Returns the data for one entity in which the attribute's value is defined                                |
| [**{dataClass}/{method}**](#dataclassmethod-and-dataclasskeymethod)        | `/Employee/getHighSalaries` | Ejecuta un método proyecto y devuelve un objeto o una colección (el método proyecto debe estar expuesto) |
| [**{dataClass}({key})/{method}**](#dataclassmethod-and-dataclasskeymethod) | `/Employee(22)/getAge`      | Devuelve un valor basado en un método de entidad                                                         |




## {dataClass}

Returns all the data (by default the first 100 entities) for a specific dataclass (*e.g.*, `Company`)

### Descripción

When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value using [`$top/$limit`]($top_$limit.md).

Here is a description of the data returned:

| Propiedad     | Tipo      | Descripción                                                                                                                                                                                     |
| ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __entityModel | Cadena    | Name of the dataclass.                                                                                                                                                                          |
| __COUNT       | Número    | Número de entidades en la clase de datos.                                                                                                                                                       |
| __SENT        | Número    | Number of entities sent by the REST request. This number can be the total number of entities if it is less than the value defined by `$top/$limit`.                                             |
| __FIRST       | Número    | Entity number that the selection starts at. Either 0 by default or the value defined by `$skip`.                                                                                                |
| __ENTITIES    | Colección | This collection of objects contains an object for each entity with all its attributes. All relational attributes are returned as objects with a URI to obtain information regarding the parent. |

Each entity contains the following properties:

| Propiedad   | Tipo   | Descripción                                                                                                |
| ----------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| __KEY       | Cadena | Valor de la llave primaria definida para la clase de datos.                                                |
| __TIMESTAMP | Fecha  | Timestamp of the last modification of the entity                                                           |
| __STAMP     | Número | Internal stamp that is needed when you modify any of the values in the entity when using `$method=update`. |

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md##selecting-attributes-to-get). Por ejemplo:

 `GET  /rest/Company/name,address`



### Ejemplo

Devuelve todos los datos de una clase de datos específica.

 `GET  /rest/Company`

**Result**:

````
{
    "__entityModel": "Company",
    "__GlobalStamp": 51,
    "__COUNT": 250,
    "__SENT": 100,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",
            "__STAMP": 1,
            "ID": 1,
            "name": "Adobe",
            "address": null,
            "city": "San Jose",
            "country": "USA",
            "revenues": 500000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"
                }
            }
        },
        {
            "__KEY": "2",
            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",
            "__STAMP": 1,
            "ID": 2,
            "name": "Apple",
            "address": null,
            "city": "Cupertino",
            "country": "USA",
            "revenues": 890000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"
                }
            }
        },
        {
            "__KEY": "3",
            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",
            "__STAMP": 2,
            "ID": 3,
            "name": "4D",
            "address": null,
            "city": "Clichy",
            "country": "France",
            "revenues": 700000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"
                }
            }
        },
        {
            "__KEY": "4",
            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",
            "__STAMP": 1,
            "ID": 4,
            "name": "Microsoft",
            "address": null,
            "city": "Seattle",
            "country": "USA",
            "revenues": 650000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"
                }
            }
        }
.....//more entities here 
    ]
}
````


## {dataClass}({key})

Returns the data for the specific entity defined by the dataclass's primary key, *e.g.*, `Company(22) or Company("IT0911AB2200")`

### Descripción

By passing the dataclass and a key, you can retrieve all the public information for that entity. La clave es el valor del atributo definido como llave primaria para su clase de datos. For more information about defining a primary key, refer to the **Modifying the Primary Key** section in the **Data Model Editor**.

For more information about the data returned, refer to [{datastoreClass}](#datastoreclass).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md##selecting-attributes-to-get). Por ejemplo:

 `GET  /rest/Company(1)/name,address`

If you want to expand a relation attribute using `$expand`, you do so by specifying it as shown below:

 `GET  /rest/Company(1)/name,address,staff?$expand=staff`

### Ejemplo

La siguiente petición devuelve todos los datos públicos de la clase de datos Company cuya llave es 1.

 `GET  /rest/Company(1)`

**Result**:

````
{
    "__entityModel": "Company",
    "__KEY": "1",
    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",
    "__STAMP": 2,
    "ID": 1,
    "name": "Apple",
    "address": Infinite Loop,
    "city": "Cupertino",
    "country": "USA",
    "url": http://www.apple.com,
    "revenues": 500000,
    "staff": {
        "__deferred": {
            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"
        }
    }
}
````



## {dataClass}:{attribute}(value)

Returns the data for one entity in which the attribute's value is defined

### Descripción

By passing the *dataClass* and an *attribute* along with a value, you can retrieve all the public information for that entity. The value is a unique value for attribute, but is not the primary key.

 `GET  /rest/Company:companyCode(Acme001)`

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md##selecting-attributes-to-get). Por ejemplo:

 `GET  /rest/Company:companyCode(Acme001)/name,address`

If you want to use a relation attribute using [$attributes]($attributes.md), you do so by specifying it as shown below:

 `GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### Ejemplo

The following request returns all the public data of the employee named "Jones".

 `GET  /rest/Employee:lastname(Jones)`


## {dataClass}/{method} y {dataClass}({key})/{method}

Devuelve un objeto o una colección basada en un método proyecto.

### Descripción

Los métodos proyecto se llaman a través de una clase de datos (tabla) o una entidad (registro), y deben devolver un objeto o una colección.

`POST  /rest/Employee/getHighSalaries`

`POST  /rest/Employee(52)/getFullName`


### Configuración Web

Para ser llamado en una petición REST, un método debe:

- haber sido declarado como "Disponible vía el servidor REST" en 4D,
- tienen su tabla principal y su alcance definidos en consecuencia:
    -  **Tabla**: la tabla 4D (es decir, la clase de datos) sobre la que se llama al método. La tabla debe ser [expuesta a REST](configuration.md#exposing-tables-and-fields).
    -  **Alcance**: este ajuste es útil cuando el método utiliza el lenguaje clásico de 4D y, por tanto, necesita tener un contexto de base de datos del lado del servidor.
        - **Tabla** -para los métodos aplicados a toda la tabla (dataclass)
        - **Registro actual** -para los métodos aplicados al registro actual (entidad) utilizando la sintaxis `{dataClass}(key)/{method}`.
        - **Selección actual** -para los métodos aplicados a la selección actual

![alt-text](assets/en/REST/MethodProp.png)


### Pasar parámetros a un método

También puedes pasar parámetros a un método en un POST.

`POST  /rest/Employee/addEmployee`

Se pueden hacer POST de datos en el cuerpo de la consulta, por ejemplo:

["John","Smith"]




### Ejemplos

#### Alcance de la tabla

Llamada de un método `getAverage`:
- en la tabla [Employee]
- con el alcance de **Table**


```4d
    //getAverage  
ALL RECORDS([Employee])
$0:=New object("ageAverage";Average([Employee]age))
```

`POST  /rest/Employee/getAverage`

Result:
```
{
    "result": {
        "ageAverage": 44.125
    }
}
```



#### Alcance del registro actual

Llamada de un método `getFullName`:
- en la tabla [Employee]
- con el alcance de **Current record**

```4d
    //getFullName  
$0:=New object("fullName";[Employee]firstname+" "+[Employee]lastname)
```

`POST  /rest/Employee(3)/getFullName`

Result:
```
{
    "result": {
        "fullName": "John Smith"
    }
}
```



#### Alcance de la selección actual

Llamada de un método `updateSalary`:
- en la tabla [Employee]
- con el alcance de **Current selection**

```4d
    //updateSalary  
C_REAL($1;$vCount)
READ WRITE([Employee])
$vCount:=0
FIRST RECORD([Employee])
While (Not(End selection([Employee]))  
    [Employee]salary:=[Employee]salary * $1
    SAVE RECORD([Employee])
    $vCount:=$vCount+1
    NEXT RECORD([Employee])
End while 
UNLOAD RECORD([Employee])
$0:=New object("updates";$vCount)
```

`POST  /rest/Employee/updateSalary/?$filter="salary<1500"`

Datos POST (en el cuerpo de la petición): [1.5]

Result:
```
{
    "result": {
        "updated": 42
    }
}
```

