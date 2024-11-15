---
id: application-version
title: Application version
slug: /commands/application-version
displayed_sidebar: docs
---

<!--REF #_command_.Application version.Syntax-->**Application version** {( *buildNum* {; *} )} : Text<!-- END REF-->
<!--REF #_command_.Application version.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| buildNum | Integer | &#8592; | Número de build |
| * | Operador | &#8594;  | Si pasa número de versión largo, de lo contrario número de versión corto |
| Resultado | Text | &#8592; | Número de versión en una cadena codificada |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Application version.Summary-->El comando Application version devuelve una cadena codificada que expresa el número de versión del entorno 4D que está utilizando.<!-- END REF-->   

\- Si no pasa el parámetro opcional *\**, devuelve una cadena de 4 caracteres, con el siguiente formato:

| **Caracteres** | **Descripción**    |
| -------------- | ------------------ |
| 1-2            | Número de versión  |
| 3              | Número "R"         |
| 4              | Número de revisión |

\- Si pasa el parámetro opcional *\**, devuelve una cadena de 8 caracteres, con el siguiente formato:

| **Caracteres**                                             | **Descripción**                     |
| ---------------------------------------------------------- | ----------------------------------- |
| 1                                                          | "F" representa una versión final    |
| "B" representa una versión beta                            |                                     |
| Los otros caracteres representan una versión interna de 4D |                                     |
| 2-3-4                                                      | Número de compilación interno de 4D |
| 5-6                                                        | Número de versión                   |
| 7                                                          | Número de "R"                       |
| 8                                                          | Número de revisión                  |

  
**Nota de c** **ompatibilidad (4D v14)**

La numeración de versiones ha cambiado desde la versión 14 de 4D: 

* el **número "R"** es el número de versión "R" de 4D, por ejemplo 3 para la versión R3 (contiene 0 para una versión "bug fix"),
* el **número de revisión** es el número de versión "bug fix" de 4D (contiene 0 para una versión "R").

En las versiones anteriores de 4D, el número de versión "R" era el número de actualización, designaba la revisión y el número de revisión era siempre 0\.   
  
Ejemplos para un número de versión corto:

| **Versiones** | **Valor devuelto** |                                     |
| ------------- | ------------------ | ----------------------------------- |
| 4D v13.1      | "1310"             | *Sistema de numeración anterior*    |
| 4D v14 R2     | "1420"             | Release R2                          |
| 4D v14 R3     | "1430"             | Release R3                          |
| 4D v14.1      | "1401"             | Primera versión "bug fix" de 4D v14 |
| 4D v14.2      | "1402"             | Segunda versión "bug fix" de 4D v14 |

Ejemplos para un número de versión largo:

| **Versiones**   | **Valor devuelto** |
| --------------- | ------------------ |
| 4D v12.5 beta   | "B0011250"         |
| 4D v14 R2 beta  | "B0011420"         |
| 4D v14 R3 final | "F0011430"         |
| 4D v14.1 beta   | "B0011401"         |

El comando Application version puede devolver información adicional en el parámetro opcional *numBuild*: el número de build de la versión actual de la aplicación 4D. Este es un número de compilación interno que se puede utilizar para el control de versiones, o al contactar al departamento de Servicios Técnicos de 4D.

**Nota:** en el caso de las aplicaciones compiladas y fusionadas con 4D Volume License, el número de build devuelto no es significativo. En este contexto, la información de versión es administrada por el desarrollador.

#### Ejemplo 1 

Este ejemplo muestra el número de versión del entorno 4D:

```4d
 $vs4Dversion:=Application version
 ALERT("Usted está utilizando la versión "+String(Num(Substring($vs4Dversion;1;2)))+"."+
 $vs4Dversion[[3]]+"."+$vs4Dversion[[4]])
```

#### Ejemplo 2 

Este ejemplo hace una prueba para verificar si usted está utilizando una versión final:

```4d
 If(Substring(Application version(*);1;1)#"F")
    ALERT("Por favor asegúrese de utilizar una versión final de 4D con esta base")
    QUIT 4D
 End if
```

#### Ejemplo 3 

Usted desea utilizar el valor de la versión corta de la aplicación devuelto por el comando para mostrar el nombre lanzamiento de la aplicación 4D. Puede escribir:

```4d
 var $Lon_build : Integer
 var $Txt_info;$Txt_major;$Txt_minor;$Txt_release;$Txt_version : Text
 
 $Txt_version:=Application version($Lon_build)
 
 $Txt_major:=$Txt_version[[1]]+$Txt_version[[2]] //número de versión, por ejemplo 14
 $Txt_release:=$Txt_version[[3]] //Rx
 $Txt_minor:=$Txt_version[[4]] //.x
 
 $Txt_info:="4D v"+$Txt_major
 If($Txt_release="0") //4D v14.x
    $Txt_info:=$Txt_info+Choose($Txt_minor#"0";"."+$Txt_minor;"")
 
 Else //4D v14 Rx
    $Txt_info:=$Txt_info+" R"+$Txt_release
 End if
```

#### Ver también 

[Application type](application-type.md)  
[Version type](version-type.md)  