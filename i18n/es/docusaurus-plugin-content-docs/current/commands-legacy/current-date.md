---
id: current-date
title: Current date
slug: /commands/current-date
displayed_sidebar: docs
---

<!--REF #_command_.Current date.Syntax-->**Current date** {( * )} : Date<!-- END REF-->
<!--REF #_command_.Current date.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Devuelve la fecha actual del servidor |
| Resultado | Date | &#8592; | Fecha actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Current date.Summary-->El comando Current date devuelve la fecha actual tal como está definida en el reloj del sistema.<!-- END REF-->

**4D Server:** si pasa el parámetro asterisco (\*) durante la ejecución de esta función en un equipo cliente 4D Client, la función devuelve la fecha actual del servidor.

#### Ejemplo 1 

El siguiente ejemplo muestra una caja de diálogo de alerta con la fecha actual: 

```4d
 ALERT("The date is "+String(Current date)+".")
```

#### Ejemplo 2 

Si desarrolla una aplicación para el mercado internacional, usted necesita saber si la versión de 4D con la cual se ejecuta su aplicación funciona con las fechas con formato MM/DD/YYYY (versión US) o DD/MM/YYYY (versión francesa). Esta información es útil para la personalizar correctamente las áreas de entrada. 

El siguiente método de proyecto permite hacerlo:

```4d
  // Función global Sys date format
  // Sys date format -> Cadena
  // Sys date format -> Formato de datos 4D por defecto
 
 C_STRING(31;$0;$vsDate;$vsMDY;$vsMonth;$vsDay;$vsYear)
 var $1;$vlPos : Integer
 var $vdDate : Date
 
  //Obtener una fecha en la cual los valores de mes, día y año sean todos diferentes
 $vdDate:=Current date
 Repeat
    $vsMonth:=String(Month of($vdDate))
    $vsDay:=String(Day of($vdDate))
    $vsYear:=String(Year of($vdDate)%100)
    If(($vsMonth=$vsDay)|($vsMonth=$vsYear)|($vsDay=$vsYear))
       vOK:=0
       $vdDate:=$vdDate+1
    Else
       vOK:=1
    End if
 Until(vOK=1)
 $0:="" // Inicialización del resultado de la función
 $vsDate:=String($vdDate)
 $vlPos:=Position("/";$vsDate) // Buscar el primer separador / en la cadena ../../..
 $vsMDY:=Substring($vsDate;1;$vlPos-1) // Extraer los primeros dígitos de la fecha
 $vsDate:=Substring($vsDate;$vlPos+1) // Eliminar los primeros digitos y el primer separador /
 Case of
    :($vsMDY=$vsMonth) // Los dígitos expresan el mes
       $0:="MM"
    :($vsMDY=$vsDay) //Los dígitos expresan el día
       $0:="DD"
    :($vsMDY=$vsYear) //Los dígitos expresan el año
       $0:="YYYY"
 End case
 $0:=$0+"/" //Iniciar la construcción del resultado de la función
 $vlPos:=Position("/";$vsDate) // Buscar el segundo separador en la cadena ../..
 $vsMDY:=Substring($vsDate;1;$vlPos-1) // Extraer los siguientes dígitos de la fecha
 $vsDate:=Substring($vsDate;$vlPos+1) // Reducir la cadena a los últimos dígitos de la fecha
 Case of
    :($vsMDY=$vsMonth) // Los dígitos expresan el mes
       $0:=$0+"MM"
    :($vsMDY=$vsDay) // Los dígitos expresan el día
       $0:=$0+"DD"
    :($vsMDY=$vsYear) // Los dígitos expresan el año
       $0:=$0+"YYYY"
 End case
 $0:=$0+"/" //Iniciar la construcción del resultado de la función
 Case of
    :($vsDate=$vsMonth) // Los dígitos expresan el mes
       $0:=$0+"MM"
    :($vsDate=$vsDay) // Los dígitos expresan el día
       $0:=$0+"DD"
    :($vsDate=$vsYear) // Los dígitos expresan el año
       $0:=$0+"YYYY"
 End case
  //En este momento $0 es igual a MM/DD/YYYY o DD/MM/YYYY o...
```

#### Ver también 

[Day of](day-of.md)  
[Month of](month-of.md)  
[Year of](year-of.md)  