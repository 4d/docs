---
id: web-service-set-parameter
title: WEB SERVICE SET PARAMETER
slug: /commands/web-service-set-parameter
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE SET PARAMETER.Syntax-->**WEB SERVICE SET PARAMETER** ( *nombre* ; *valor* {; *tipoSOAP*} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE SET PARAMETER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombre | Text | &#8594;  | Nombre del parámetro a incluir en la petición SOAP |
| valor | Variable | &#8594;  | Variable 4D que contiene el valor del parámetro |
| tipoSOAP | Text | &#8594;  | Tipo SOAP del parámetro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB SERVICE SET PARAMETER.Summary-->El comando **WEB SERVICE SET PARAMETER** permite la definición de un parámetro utilizado por una petición SOAP cliente.<!-- END REF--> Llame este comando por cada parámetro en la petición (el número de veces que se llame el comando depende del número de parámetros).

Pase en *nombre* el nombre del parámetro tal como aparece en la petición SOAP.

En *valor*, pase la variable 4D que contiene el valor del parámetro. En el caso de los métodos proxy, esta variable es generalmente *$1*, *$2*, *$3*, etc., correspondiente a un parámetro 4D pasado al método proxy durante su llamada. Sin embargo, es posible utilizar variables intermediarias.

**Nota:** cada variable o array 4D utilizado debe declararse previamente utilizando los comandos de los temas *Compilador* y *Arrays*.

Por defecto, 4D determina automáticamente el tipo SOAP más apropiado para el parámetro *nombre* de acuerdo al contenido de *valor*. La indicación del tipo está incluida en la petición.  
  
Sin embargo, podría “forzar” la definición del tipo SOAP de un parámetro. En este caso, puede pasar el parámetro opcional *tipoSOAP* utilizando una de las siguientes cadenas de caracteres (tipos de datos primarios):

| **tipoSOAP**                | **Descripción**                                                       |
| --------------------------- | --------------------------------------------------------------------- |
| string                      | Cadena                                                                |
| int                         | Entero largo                                                          |
| boolean                     | Booleano                                                              |
| float                       | Real 32 bits                                                          |
| decimal                     | Real con décimal                                                      |
| double                      | Real 64 bits                                                          |
| duration                    | Duración en años, meses, días, horas, minutos, segundos, por ejemplo: |
| P1Y2M3DT10H30M              |                                                                       |
| datetime                    | Fecha y hora en formato ISO8601, por ejemplo 2003-05-31T13:20:00      |
| time                        | Hora, por ejemplo 13:20:00                                            |
| date                        | Fecha, por ejemplo 2003-05-31                                         |
| gyearmonth                  | Año y mes (calendario gregoriano), por ejemplo 2003-05                |
| gyear                       | Año (calendario gregoriano), por ejemplo 2003                         |
| gmonthday                   | Mes y día (calendario gregoriano), por ejemplo --05-31                |
| gday                        | Día (calendario gregoriano), por ejemplo ---31                        |
| gmonth                      | Mes (calendario gregoriano), por ejemplo --10--                       |
| hexbinary                   | Valor expresado en hexadecimal                                        |
| base64binary                | BLOB                                                                  |
| anyuri                      | Uniform Resource Identifier (URI), por ejemplo                        |
| http://www.empresa.com/page |                                                                       |
| qname                       | Nombre XML calificado (espacio de nombre y parte local)               |
| notation                    | Atributo notación                                                     |

* **Notas:**  
   * Para mayor información sobre tipos de datos XML, consulte el URL <http://www.w3.org/TR/xmlschema-2/>  
   * Este comando no soporta objetos blob (tipo 4D.Blob). Ver *Pasar blobs y objetos blob a comandos 4D* en developer.4d.com.

#### Ejemplo 

Este ejemplo define dos parámetros: 

```4d
 var $1 : Text
 var $2 : Text
 WEB SERVICE SET PARAMETER("ciudad";$1)
 WEB SERVICE SET PARAMETER("país";$2)
```

#### Ver también 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE GET RESULT](web-service-get-result.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 777 |
| Hilo seguro | &check; |


