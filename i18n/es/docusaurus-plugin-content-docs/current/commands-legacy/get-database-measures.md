---
id: get-database-measures
title: Get database measures
slug: /commands/get-database-measures
displayed_sidebar: docs
---

<!--REF #_command_.Get database measures.Syntax-->**Get database measures** {( *opciones* )} -> Resultado<!-- END REF-->
<!--REF #_command_.Get database measures.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| opciones | Objeto | &#x1F852; | Opciones de retorno |
| Resultado | Objeto | &#x1F850; | Objeto que contiene las medidas de la base |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get database measures.Summary-->El comando **Get database measures** le permite obtener información detallada acerca de los eventos del motor de base de datos 4D.<!-- END REF--> La información reenviada incluye los accesos lectura/escritura a los datos desde/hacia el disco o la memoria caché, así como también la utilización de los índices de la base, las búsquedas y las ordenaciones.   

**Get database measures** devuelve un único objeto que contiene todas las medidas relevantes. El parámetro *opciones* le permite configurar las opciones para la información devuelta.

##### Presentación del objeto devuelto 

El objeto devuelto contiene una sola propiedad llamada "DB", que tiene la siguiente estructura básica:

```RAW
{    "DB": {        "diskReadBytes": {…},        "cacheReadBytes": {…},        "cacheMissBytes": {…},        "diskWriteBytes": {…},        "diskReadCount": {…},        "cacheReadCount": {…},        "cacheMissCount": {…},        "diskWriteCount": {…},        "dataSegment1": {…},        "indexSegment": {…},        "tables": {…},        "indexes": {…}    }}
```

Este objeto está compuesto de ocho propiedades que contienen las medidas básicas ("diskReadBytes", "cacheReadBytes", "cacheMissBytes", "diskWriteBytes", "diskReadCount", "cacheReadCount", "cacheMissCount", "diskWriteCount") y propiedades adicionales ("dataSegment1 "," indexSegment ", "tables", "index") que también pueden contener propiedades elementales, pero a un nivel diferente y con un alcance diferente (ver más adelante).   
  
**Nota**: una propiedad sólo está presente en el interior del objeto si éste recibe contenido. Cuando una propiedad no tiene ningún contenido, no está incluida en el objeto. Por ejemplo, si la base se ha abierto en modo de sólo lectura y los índices no se han utilizado, el objeto devuelto no contendrá "diskWriteBytes", "diskWriteCount", "indexSegment" e "indexes".

##### Propiedades elementales 

```undefined
"diskReadBytes": {
    "value": 33486473620,
    "history": [        // optional
        {"value": 52564,"time": -1665},
        {"value": 54202,"time": -1649},
            …
    ]
}
```

##### dataSegment1 y indexSegment 

```undefined
{
"DB": {
"diskReadBytes": {
    "value": 718260
    },
"diskReadCount": {
    "value": 229
    },

"dataSegment1": {
    "diskReadBytes": {
    "value": 679092
    },
    "diskReadCount": {
    "value": 212
    }
    },
"indexSegment": {
    "diskReadBytes": {
    "value": 39168
    },
    "diskReadCount": {
    "value": 17
    }
}
```

##### tables 

```undefined
"tables": {
    "Employees": {…)
    "Companies": {…)
    }
```

##### indexes 

```undefined
"indexes": {
    "Employees": {
        "EmpLastName": {
                    "diskReadBytes": {…},
                    "cacheReadBytes": {…},
                    "cacheMissBytes": {…},
                    "diskWriteBytes": {…},

                    "diskReadCount": {…},
                    "cacheReadCount": {…},
                    "cacheMissCount": {…},
                    "diskWriteCount": {…}
            }
        "EmpLastName (Keyword)": {...},
        "index3Name": {…},
        "index4Name": {…},
        …
        }
        "Companies": {
            "Name": 
            (...)
                "queryCount": {
                    "value": 41
                },
                "sortCount": {
                    "value": 3
                },
                "insertKeyCount": {
                    "value": 2
                },
                "deleteKeyCount": {
                    "value": 16
                }
    table3Name: {…}
}
```

##### Parámetro options 

El parámetro *opciones* le permite personalizar la información real que devuelve el comando. En *opciones*, se pasa un objeto que puede contener hasta tres propiedades: "withHistory", "historyLength" y "path".

| **Propiedad**   | **Tipo**                 | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "withHistory"   | Booleano                 | "true" significa que el objeto "history" será devuelto por la función dentro del objeto devuelto; "false" significa que el objeto devuelto por la función no contendrá el objeto "history"                                                                                                                                                                                                                                                                                                                                                                  |
| "historyLength" | número                   | Define el tamaño del array history devuelto en segundos(\*).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| "path"          | cadena\|array de cadenas | Ruta completa de la propiedad específica o array de rutas completas de las propiedades específicas que desea obtener. Si pasa una cadena, sólo el valor correspondiente se devuelve en el objeto "DB" (si la ruta es válida). Ejemplo "DB.tables.Employees.records.diskWriteBytes". Cuando se pasa un array de cadenas, todos los valores correspondientes son devueltos en el objeto "DB" (si las rutas son válidas). Ejemplo: \["DB.tables.Employee.records.diskWriteBytes", "DB.tables.Employee.records.diskReadCount","DB.dataSegment1.diskReadBytes"\] |

(\*) Como se describió anteriormente, la historia no se almacena como una secuencia de segundos, sino sólo con valores relevantes. Si no ocurre nada durante un par de segundos o más, nada se almacena y una brecha aparecerá en el array de historial interno. "time" puede contener, por ejemplo, -2, -4, -5, -10, -15, -30 con valores de 200, 300, 250, 400, 500,150\. Si la propiedad "historyLength" está definida en 600 (10 minutos), luego el array devuelto contendrá 0, -1, -2, -3 ... -599 para "time" y sólo los valores -2, -4, - 5, -10, -15, -30 se llenarán. Todos los demás valores se pondrán en 0 (cero) como valor. También como se describió anteriormente, el único límite del array interno es el tamaño (200), no el tiempo. Esto significa que si hay una baja actividad para una propiedad específica, el tiempo más antiguo puede ser muy grande (por ejemplo: -3600 para hace una hora). También puede contener menos de 200 valores si la base se acaba de iniciar. En estos casos, si el tiempo del historial interno es menor al solicitado o si todos los valores importantes que ya se han definido en el array devuelto, el valor devuelto será -1.  
Ejemplo: la base sólo se inició hace 20 segundos y la historia de la petición es de 60 segundos. Los valores devueltos entre 0 y -20 se definen con valores o ceros y los otros se establecerán con -1\. Cuando un valor "-1" se devuelve, esto significa que, o bien el tiempo de solicitud es demasiado antiguo o que el valor ya no está en el array de historia interna (es decir, se ha llegado al límite de los 200 elementos y se han eliminado los valores mayores).

##### Cliente/servidor y componentes 

Este comando devuelve la información sobre el uso de la base de datos. Esto significa que le devuelve un objeto válido con valores relevantes sólo cuando se le llama: 

* en modo local 4D (si se llama desde un componente, devuelve información acerca de la base de datos del host)
* en el servidor en modo cliente/servidor.

Si el comando se llama desde un 4D remoto, luego el objeto se deja vacío.   
En este contexto, si necesita obtener información acerca de la base de datos en el servidor, la forma más sencilla de realizar esta acción es crear un método con la opción "ejecutar en el servidor" activada.   
Este principio también funciona para un componente: si el componente se utiliza en un contexto local 4D, devolverá la información sobre la base local; en un contexto 4D remoto, devolverá la información sobre la base del servidor.

#### Ejemplo 1 

Usted desea obtener el objeto "history" en el objeto devuelto:

```4d
 var $param : Object
 var $measures : Object
 OB SET($param;"withHistory";True)
 $measures:=Get database measures($param)
```

#### Ejemplo 2 

```undefined
{
    "DB": {
        "cacheReadBytes": {
            "value": 9516637
        }
    }
}
```

#### Ejemplo 3 

Queremos obtener las medidas de bytes de caché en los últimos dos minutos:

```4d
 var $oParams : Object
 var $measures : Object
 OB SET($oParams;"path";"DB.cacheReadBytes")
 OB SET($oParams;"withHistory";True)
 OB SET($oParams;"historyLength";2*60)
 $measures:=Get database measures($oParams)
```
