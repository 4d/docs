---
id: char
title: Char
slug: /commands/char
displayed_sidebar: docs
---

<!--REF #_command_.Char.Syntax-->**Char** ( *codigoCaracter* ) : Text<!-- END REF-->
<!--REF #_command_.Char.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| codigoCaracter | Integer | &#8594;  | Código del caracter |
| Resultado | Text | &#8592; | Caracter representado por codigoCaracter |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Char.Summary-->El comando **Char** devuelve el carácter cuyo código es *codigoCaracter*.<!-- END REF-->  

Pase un valor UTF-16 (entre 1 y 65535) en *codigoCaracter.*

**Tip:** el comando **Char** generalmente se utiliza para insertar en el editor de métodos los caracteres que no pueden ser introducidos desde el teclado o que deben ser interpretados como un comando de edición en el editor de métodos.

#### Ejemplo 

El siguiente ejemplo utiliza Char para insertar un retorno de carro en el texto de un mensaje de alerta:

```4d
 ALERT("Empleados: "+String(Records in table([Empleados]))+Char(Carriage return)+"Presione Aceptar para continuar.")
```

#### Ver también 

[Character code](character-code.md)  
*Códigos Unicode*  
*Símbolos de referencia de caracteres*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 90 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


