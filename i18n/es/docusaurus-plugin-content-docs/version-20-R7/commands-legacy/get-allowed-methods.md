---
id: get-allowed-methods
title: GET ALLOWED METHODS
slug: /commands/get-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.GET ALLOWED METHODS.Syntax-->**GET ALLOWED METHODS** ( *arrMetodos* )<!-- END REF-->
<!--REF #_command_.GET ALLOWED METHODS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrMetodos | Text array | &#8592; | Array de nombres de métodos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET ALLOWED METHODS.Summary-->El comando GET ALLOWED METHODS devuelve, en *arrMetodos*, los nombres de los métodos que pueden utilizarse para escribir fórmulas.<!-- END REF--> Estos métodos están listados al final de la lista de comandos en el editor.

Por defecto, los métodos no pueden ser utilizados en el editor de fórmulas. Los métodos deben ser autorizados explícitamente utilizando el comando [SET ALLOWED METHODS](../commands/set-allowed-methods.md "SET ALLOWED METHODS"). Si este comando no ha sido ejecutado, GET ALLOWED METHODS devuelve un array vacío.  
  
GET ALLOWED METHODS devuelve exactamente lo que se le pasó a [SET ALLOWED METHODS](../commands/set-allowed-methods.md "SET ALLOWED METHODS"), es decir un array alfa (el comando crea y dimensiona el array). Igualmente, si el carácter arroba (@) se utiliza para definir un grupo de métodos, se devuelve la cadena que contiene el carácter @ (y no los nombres de los métodos del grupo). 

Este comando es útil para conservar los parámetros del conjunto actual de métodos autorizados antes de la ejecución de una fórmula en un contexto específico (por ejemplo, un informe rápido). 

#### Ejemplo 

Este ejemplo autoriza un conjunto de métodos específicos para crear un informe: 

```4d
  //Almacenamiento de los parámetros actuales
 GET ALLOWED METHODS(metodosArray)
 
  //Definición de los métodos para el informe rápido
 arrMetodos_Reports{1}:="Reports_@"
 SET ALLOWED METHODS(arrMetodos_Reports)
 QR REPORT([Personas];"MiInforme")
 
  //Reestablecimiento de los parámetros actuales
 SET ALLOWED METHODS(arrMetodos)
```

#### Ver también 

[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 908 |
| Hilo seguro | &cross; |


