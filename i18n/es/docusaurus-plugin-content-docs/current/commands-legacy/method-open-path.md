---
id: method-open-path
title: METHOD OPEN PATH
slug: /commands/method-open-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD OPEN PATH.Syntax-->**METHOD OPEN PATH** ( *ruta* {; *line*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD OPEN PATH.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta | Text | &#8594;  | Ruta del método a abrir |
| line | Number | &#8594;  | Line number |
| * | Operador | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente(parámetro ignorado fuera de este contexto) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.METHOD OPEN PATH.Summary-->El comando **METHOD OPEN PATH** abre, en el editor de métodos de 4D, el método cuya ruta de acceso interna se pasa en el parámetro *ruta*.<!-- END REF-->

El comando es asíncrono: vuelve inmediatamente al método llamante y no espera a que se abra el editor de métodos.

Este comando puede abrir todo tipo de métodos (objeto, formulario, trigger, proyecto o base); sin embargo. el método ya debe existir. Si el parámetro *ruta* no corresponde a un método existente, se devuelve el error -9801 "Imposible abrir el método".

Puede ejecutar este comando desde un componente, pero en este caso, debe pasar el parámetro *\** ya que el acceso al código del componente es de sólo lectura. Si omite el parámetro *\** en este contexto, se genera el error -9763.

#### Ver también 

*Comandos del tema Acceso objetos diseño*  
[METHOD Get path](method-get-path.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1213 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


