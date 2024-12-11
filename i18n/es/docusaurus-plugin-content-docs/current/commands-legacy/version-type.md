---
id: version-type
title: Version type
slug: /commands/version-type
displayed_sidebar: docs
---

<!--REF #_command_.Version type.Syntax-->**Version type**  : Integer<!-- END REF-->
<!--REF #_command_.Version type.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Información sobre el tipo de versión (bitfield) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Version type.Summary-->El comando Version type devuelve un valor numérico que representa el tipo de versión de 4D o de 4D Server que está utilizando.<!-- END REF--> 4D ofrece las siguientes constantes predefinidas, que se encuentran en el tema *Entorno 4D*:

| Constante          | Tipo         | Valor | Comentario                                                   |
| ------------------ | ------------ | ----- | ------------------------------------------------------------ |
| 64 bit version     | Entero largo | 1     |                                                              |
| Demo version       | Entero largo | 0     |                                                              |
| Merged application | Entero largo | 2     | La version es una aplicación fusionada con 4D Volume Desktop |

**Nota:** en las versiones actuales de 4D, el modo demostración no está disponible.

Version type devuelve un valor en forma de un *campo de bits*; es necesario utilizar los operadores de bits para interpretarlo (ver los ejemplos).

#### Ejemplo 

Esta prueba permite ejecutar código diferente dependiendo de que versión es una aplicación fusionada o una base abierta por 4D/4D Server:

```4d
 If(Version type?? Merged application)
  // Estamos en una aplicación fusionada
 Else
  // Estamos en una base ejecutada por 4D
 End if
```

#### Ver también 

[Application type](application-type.md)  
[Application version](application-version.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 495 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


