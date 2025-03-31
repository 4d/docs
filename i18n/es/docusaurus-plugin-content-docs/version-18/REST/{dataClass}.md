---
id: "{dataClass}"
title: "{dataClass}"
---



Los nombres de las clases de datos pueden utilizarse directamente en las peticiones REST para trabajar con entidades, selecciones de entidades o métodos de la clase de datos.

## Sintaxis disponible

| Sintaxis                                                                           | Ejemplo                     | Descripción                                                                                              |
| ---------------------------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| [**\{dataClass\}**](#dataclass)                                                  | `/Employee`                 | Devuelve todos los datos (por defecto las 100 primeras entidades) de la clase de datos                   |
| [**\{dataClass\}({key})**](#dataclasskey)                                        | `/Employee(22)`             | Devuelve los datos de la entidad específica definida por la llave primaria de la clase de datos          |
| [**\{dataClass\}:\{attribute\}(value)**](#dataclassattributevalue)             | `/Employee:firstName(John)` | Devuelve los datos de una entidad en la que está definido el valor del atributo                          |
| [**\{dataClass\}/\{method\}**](#dataclassmethod-and-dataclasskeymethod)        | `/Employee/getHighSalaries` | Ejecuta un método proyecto y devuelve un objeto o una colección (el método proyecto debe estar expuesto) |
| [**\{dataClass\}({key})/\{method\}**](#dataclassmethod-and-dataclasskeymethod) | `/Employee(22)/getAge`      | Devuelve un valor basado en un método de entidad                                                         |

## \{dataClass\}

Devuelve todos los datos (por defecto las 100 primeras entidades) para una clase de datos específica (*por ejemplo*, `Company`)

### Descripción

Cuando se llama a este parámetro en la petición REST, se devuelven las 100 primeras entidades, a menos que se haya especificado un valor con [`$top/$limit`]($top_$limit.md).

A continuación se describen los datos devueltos:

| Propiedad     | Tipo       | Descripción                                                                                                                                                                                             |
| ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __entityModel | Text       | Nombre de la dataclass.                                                                                                                                                                                 |
| __COUNT       | Number     | Número de entidades en la clase de datos.                                                                                                                                                               |
| __SENT        | Number     | Número de entidades enviadas por la petición REST. Este número puede ser el número total de entidades si es menor que el valor definido por `$top/$limit`.                                              |
| __FIRST       | Number     | Número de entidad en la que comienza la selección. O bien 0 por defecto o el valor definido por `$skip`.                                                                                                |
| __ENTITIES    | Collection | Esta colección de objetos contiene un objeto para cada entidad con todos sus atributos. Todos los atributos relacionales se devuelven como objetos con una URI para obtener información sobre el padre. |

Cada entidad contiene las siguientes propiedades:

| Propiedad   | Tipo   | Descripción                                                                                                        |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| __KEY       | Text   | Valor de la llave primaria definida para la clase de datos.                                                        |
| __TIMESTAMP | Fecha  | Marca de tiempo de la última modificación de la entidad                                                            |
| __STAMP     | Number | Sello interno que se necesita cuando se modifica alguno de los valores de la entidad al utilizar `$method=update`. |

Si quiere especificar qué atributos quiere devolver, defínalos utilizando la siguiente sintaxis [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Por ejemplo:

 `GET  /rest/Company/name,address`

### Ejemplo

Devuelve todos los datos de una clase de datos específica.

 `GET  /rest/Company`

**Resultado**:

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

## \{dataClass\}({key})

Devuelve los datos de la entidad específica definida por la llave primaria de la clase de datos, *p. ej.*, `Company(22) o Company("IT0911AB2200")`

### Descripción

Pasando la clase de datos y una llave, se puede recuperar toda la información pública de esa entidad. Pasando la clase de datos y una llave, se puede recuperar toda la información pública de esa entidad. Para más información sobre la definición de una llave primaria, consulte la sección **Modifying the Primary Key** en el **Editor del modelo de datos**.


Si quiere especificar qué atributos quiere devolver, defínalos utilizando la siguiente sintaxis [{attribute1, attribute2, ...}](manData.md##selecting-attributes-to-get). Por ejemplo:

 `GET  /rest/Company(1)/name,address`

Si desea expandir un atributo de relación utilizando `$expand`, lo hará especificándolo como se muestra a continuación:

 `GET  /rest/Company(1)/name,address,staff?$expand=staff`

### Ejemplo

La siguiente petición devuelve todos los datos públicos de la clase de datos Company cuya llave es 1.

 `GET  /rest/Company(1)`

**Resultado**:

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

## \{dataClass\}:\{attribute\}(value)

Devuelve los datos de una entidad en la que está definido el valor del atributo

### Descripción

Pasando la *clase de datos* y un *atributo* junto con un valor, se puede recuperar toda la información pública de esa entidad. El valor es un valor único para el atributo, pero no es la llave primaria.

 `GET  /rest/Company:companyCode(Acme001)`

Si quiere especificar qué atributos quiere devolver, defínalos utilizando la siguiente sintaxis [{attribute1, attribute2, ...}](manData.md##selecting-attributes-to-get). Por ejemplo:

 `GET  /rest/Company:companyCode(Acme001)/name,address`

Si desea utilizar un atributo relacional utilizando [$attributes.md">]($attributes.md), lo hará especificándolo como se muestra a continuación:

 `GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### Ejemplo

La siguiente petición devuelve todos los datos públicos del empleado llamado "Jones".

 `GET  /rest/Employee:lastname(Jones)`

## \{dataClass\}/\{method\} y \{dataClass\}({key})/\{method\}

Devuelve un objeto o una colección basada en un método proyecto.

### Descripción

Los métodos proyecto se llaman a través de una clase de datos (tabla) o una entidad (registro), y deben devolver un objeto o una colección.

`POST  /rest/Employee/getHighSalaries`

`POST  /rest/Employee(52)/getFullName`

### Configuración Web

Para ser llamado en una petición REST, un método debe:

- haber sido declarado como "Disponible vía el servidor REST" en 4D,
- tienen su tabla principal y su alcance definidos en consecuencia:
  - **Tabla**: la tabla 4D (es decir, la clase de datos) sobre la que se llama al método. La tabla debe ser [expuesta a REST](configuration.md#exposing-tables-and-fields).
  - **Alcance**: este ajuste es útil cuando el método utiliza el lenguaje clásico de 4D y, por tanto, necesita tener un contexto de base de datos del lado del servidor.
    - **Tabla** -para los métodos aplicados a toda la tabla (dataclass)
    - **Registro actual** -para los métodos aplicados al registro actual (entidad) utilizando la sintaxis `\{dataClass\}(key)/{method}`.
    - **Selección actual** -para los métodos aplicados a la selección actual

![alt-text](../assets/en/REST/MethodProp.png)

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

Resultado:

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

Resultado:

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

POST data (in the request body): [1.5]

Resultado:

```
{
    "result": {
        "updated": 42
    }
}
```
