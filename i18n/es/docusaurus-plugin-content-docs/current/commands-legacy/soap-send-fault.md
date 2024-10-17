---
id: soap-send-fault
title: SOAP SEND FAULT
slug: /commands/soap-send-fault
displayed_sidebar: docs
---

<!--REF #_command_.SOAP SEND FAULT.Syntax-->**SOAP SEND FAULT** ( *tipoError* ; *descripcion* )<!-- END REF-->
<!--REF #_command_.SOAP SEND FAULT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tipoError | Integer | &#8594;  | 1 = Error cliente, 2 = Error servidor |
| descripcion | Text | &#8594;  | Descripción del error a enviar al cliente SOAP |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SOAP SEND FAULT.Summary-->El comando **SOAP SEND FAULT** devuelve un error a un cliente SOAP indicando el origen del error: cliente o servidor.<!-- END REF--> Este comando permite indicar un error a un cliente sin tener que devolver un resultado. 

Por ejemplo, un error del lado del cliente puede ser detectado cuando publica un servicio web “Raiz\_cuadrada” y un cliente envía una petición con un número negativo; puede utilizar este comando con el fin de indicar al cliente que se necesita un valor positivo. 

Un error posible del lado del servidor podría ser por ejemplo, falta de memoria durante la ejecución del método. 

Pase el origen del error en tipoError. Puede utilizar las siguientes constantes predefinidas, ubicadas en el tema *Servicios Web (Servidor)*.

| Constante         | Tipo         | Valor |
| ----------------- | ------------ | ----- |
| SOAP client fault | Entero largo | 1     |
| SOAP server fault | Entero largo | 2     |

Pase en *descripcion* la descripción del error. Si la implementación del cliente es correcta, el error puede procesarse. 

#### Ejemplo 

Regresando al ejemplo del servicio Web “Raiz\_cuadrada” de la descripción del comando, la siguiente instrucción puede utilizarse para procesar peticiones con números negativos:

```4d
 SEND SOAP FAULT(SOAP client fault;"Valores positivos requeridos")
```

#### Ver también 

[SOAP DECLARATION](soap-declaration.md)  
[SOAP get info](soap-get-info.md)  