---
id: is-soap-request
title: Is SOAP request
slug: /commands/is-soap-request
displayed_sidebar: docs
---

<!--REF #_command_.Is SOAP request.Syntax-->**Is SOAP request**  : Boolean<!-- END REF-->
<!--REF #_command_.Is SOAP request.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True si la petición es SOAP; de lo contrario, False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is SOAP request.Summary-->El comando **Is SOAP request** devuelve [True](true.md "True") si el código en ejecución hace parte de una petición SOAP.<!-- END REF--> 

Este comando puede utilizarse por razones de seguridad en el *Método de base On Web Authentication* para determinar la naturaleza de las peticiones recibidas.

#### Ver también 

[SOAP DECLARATION](soap-declaration.md)  