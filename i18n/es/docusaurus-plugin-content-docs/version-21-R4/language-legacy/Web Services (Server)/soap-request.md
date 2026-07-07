---
id: soap-request
title: SOAP request
slug: /commands/soap-request
displayed_sidebar: docs
---

<!--REF #_command_.SOAP Request.Syntax-->**SOAP request**  : Boolean<!-- END REF-->
<!--REF #_command_.SOAP Request.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True si la petición es SOAP; de lo contrario, False |
</div>
<!-- END REF-->



#### Descripción 

<!--REF #_command_.SOAP Request.Summary-->El comando **SOAP request** devuelve [True](../commands/true) si el código en ejecución hace parte de una petición SOAP.<!-- END REF--> 

Este comando puede utilizarse por razones de seguridad en el *Método de base On Web Authentication* para determinar la naturaleza de las peticiones recibidas.

#### Ver también 

[SOAP DECLARATION](../commands/soap-declaration)  