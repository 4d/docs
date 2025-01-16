---
id: metodo-base-on-host-database-event
title: Metodo base On Host Database Event
slug: /commands/metodo-base-on-host-database-event
displayed_sidebar: docs
---

<!--REF #_command_.Metodo base On Host Database Event.Syntax-->$1 -> Método base On Host Database Event<!-- END REF-->
<!--REF #_command_.Metodo base On Host Database Event.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| $1 | Entero largo | &#8592; | Código del evento |

<!-- END REF-->

#### Description 

<!--REF #_command_.Metodo base On Host Database Event.Summary-->El **Método base On Host Database Event** permite a los componentes 4D ejecutar código cuando se abre y cierra la base local.<!-- END REF-->  
  
**Nota**: por razones de seguridad, la ejecución de este método base debe ser autorizada explícitamente en la base local. Para obtener más información sobre este punto, consulte el manual de *Diseño*.  
  
El **Método base On Host Database Event** se ejecuta automáticamente solamente en bases utilizadas como componentes de bases locales (cuando se autoriza en las propiedades de la base local). Se llama cuando se producen eventos relacionados con la apertura y cierre de la base local.  
  
Para procesar un evento, debe probar el valor del parámetro $1 en el método, y compararlo con una de las siguientes constantes, disponibles en el tema "*Eventos de la base*":  
  
| Constante                       | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                          |
| ------------------------------- | ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On after host database exit     | Entero largo | 4     | El [Semaphore](semaphore.md) de la base local acaba de terminar su ejecución                                                                                                                                                                                                                        |
| On after host database startup  | Entero largo | 2     | El de la base local acaba de terminar su ejecución                                                                                                                                                                                                                                                  |
| On before host database exit    | Entero largo | 3     | La base local se está cerrando. El [Semaphore](semaphore.md) de la base local aún no se ha llamado. <br/>El [Semaphore](semaphore.md) de la base loal no se llama mientras el [Método base On Host Database Event](metodo-base-on-host-database-event.md) del componente se esté ejecutando |
| On before host database startup | Entero largo | 1     | La base local se ha iniciado. El de la base local aún no se ha llamado. <br/>El método base On Startup de la base local no se llama mientras el [Método base On Host Database Event](metodo-base-on-host-database-event.md) del componente se esté ejecutando                               |

Esto permite a los componentes 4D cargar y guardar preferencias o estados de usuario relacionados con el funcionamiento de la base local.

#### Ejemplo 

Ejemplo de estructura tipo de un método base On Host Database Event:

```4d
  // Método base On Host Database Event
 var $1 : Integer
 Case of
    :($1=On before host database startup)
  // poner aquí el código a ejecutar antes del método base "On Startup"
  // de la base local
    :($1=On after host database startup)
  // poner aquí el código a ejecutar después del método base "On Startup"
  // de la base local
    :($1=On before host database exit)
  // poner aquí el código a ejecutar antes del método base "On Exit"
  // de la base local
    :($1=On after host database exit)
  // poner aquí el código a ejecutar después del método base "On Exit"
  // de la base local
 End case
```
