---
id: get-serial-port-mapping
title: GET SERIAL PORT MAPPING
slug: /commands/get-serial-port-mapping
displayed_sidebar: docs
---

<!--REF #_command_.GET SERIAL PORT MAPPING.Syntax-->**GET SERIAL PORT MAPPING** ( *arrNumeros* ; *arrNombres* )<!-- END REF-->
<!--REF #_command_.GET SERIAL PORT MAPPING.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrNumeros | Integer array | &#8592; | Array de números de puertos |
| arrNombres | Text array | &#8592; | Array de nombres de puertos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET SERIAL PORT MAPPING.Summary-->El comando GET SERIAL PORT MAPPING devuelve dos arrays, *arrNumeros* y *arrNombres*, que contienen los números y nombres de puertos seriales del equipo actual.<!-- END REF-->

Este comando es útil en Mac OS X, donde el sistema operativo asigna dinámicamente el número de puerto cuando utiliza un adaptador serial USB. Puede direccionar cualquier puerto serial extendido utilizando su nombre (estático), sin importar su número actual.

**Nota:** este comando no devuelve valores significativos con puertos estándar. Si quiere direccionar un puerto estándar, debe pasar su valor (0 o 1) directamente utilizando el comando [SET CHANNEL](set-channel.md "SET CHANNEL") (modo antiguo de funcionamiento de 4D). 

#### Ejemplo 

Este método de proyecto puede utilizarse para direccionar el mismo puerto serial (sin protocolo), sin importar el número que se le haya asignado: 

```4d
 ARRAY TEXT($arrNombrePuertos;0)
 ARRAY LONGINT($arrNumsPuertos;0)
 var $vNumPuerto;$vNumPuertoFinal : Integer
 
  //Buscar los números actuales de los puertos seriales
 GET SERIAL PORT MAPPING($arrNumsPuertos;$arrNombrePuertos)
 $vPortNum:=Find in array($arrNombrePuertos;vNombrePuerto)
  // vNombrePuerto contiene el nombre del puerto a utilizar; puede venir de una ventana,
  // de un valor almacenado en un campo, etc.
 If(arrNumsPuertos{$vNumPuerto}=0)
    vNumPuertoFinal:=0 //caso especial sobre Mac OS X
 else
    vNumPuertoFinal:=arrNumsPuertos{$vNumPuerto}+100
 End if
 SET CHANNEL(vNumPuertoFinal;params) //params contiene los parámetros de comunicación
 ... //Efectuar las operaciones deseadas
 SET CHANNEL(11) //Cierre del puerto
```

#### Ver también 

[SET CHANNEL](set-channel.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 909 |
| Hilo seguro | &check; |


