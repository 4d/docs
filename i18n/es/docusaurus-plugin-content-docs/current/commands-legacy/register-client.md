---
id: register-client
title: REGISTER CLIENT
slug: /commands/register-client
displayed_sidebar: docs
---

<!--REF #_command_.REGISTER CLIENT.Syntax-->**REGISTER CLIENT** ( *nomCliente* {; *periodo*}{; *} )<!-- END REF-->
<!--REF #_command_.REGISTER CLIENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomCliente | Text | &#8594;  | Nombre de la sesión 4D Client |
| periodo | Integer | &#8594;  | **Ignorado desde la versión 11.3*** |
| * | Operador | &#8594;  | Proceso local |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.REGISTER CLIENT.Summary-->El comando REGISTER CLIENT “registra” un equipo cliente 4D con el nombre especificado en *nomCliente* en 4D Server, con el fin de permitir a otros clientes o eventualmente 4D Server (utilizando procedimientos almacenados) ejecutar métodos utilizando el comando [EXECUTE ON CLIENT](execute-on-client.md "EXECUTE ON CLIENT").<!-- END REF--> Una vez registrado, un cliente 4D puede ejecutar uno o varios métodos para otros clientes.

**Notas**:

* También puede registrar automáticamente cada puesto cliente que se conecte a 4D Server utilizando la opción “Registrar los clientes al inicio...” en la caja de diálogo de Preferencias.
* Si este comando se utiliza con 4D en modo local, no tiene efecto.
* Más de una estación 4D client puede tener el mismo nombre registrado.

  
Cuando se ejecuta este comando, un proceso, llamado *nomCllient*, se crea en el equipo cliente. Este proceso sólo puede ser abortado por el comando [UNREGISTER CLIENT](unregister-client.md "UNREGISTER CLIENT").   
Si pasa el parámetro opcional *\**, el proceso creado es local. 4D añade automáticamente el signo dólar ($) al comienzo del nombre del proceso. De lo contrario, el proceso es global. 

**Nota de compatibilidad:** a partir de la versión 11.3 de 4D, se han optimizado los mecanismos de comunicación servidor/cliente. Ahora el servidor envía las peticiones de ejecución directamente a los clientes registrados cuando es necesario (tecnología "push"). El principio anterior donde los clientes buscaban periodicamente el servidor, ya no se usa. El parámetro *periodo* se ignora si se pasa.

Una vez ejecutado el comando, no es posible modificar rápidamente el nombre del cliente 4D o el periodo de interrogación al servidor. Para hacerlo, debe llamar al comando [UNREGISTER CLIENT](unregister-client.md "UNREGISTER CLIENT"), y luego ejecutar el comando REGISTER CLIENT.

Si un cliente 4D está registrado correctamente, la variable sistema OK es igual a 1\. Si el cliente 4D ya fue registrado, el comando no hace nada y OK toma el valor 0.

#### Ejemplo 

En el siguiente ejemplo, vamos a crear un sistema de mensajería pequeño que permita a los puestos clientes comunicarse entre ellos. 

1) Este método, Registro, le permite registrar un cliente 4D y conservarlo listo para recibir un mensaje de otro 4D Client:

```4d
  //Debe salir del registro antes de registrarse con otro nombre
 UNREGISTER CLIENT
 Repeat
    vNomPseudo:=Request("Introduzca su nombre:";"Usuario";"OK";"Cancelar")
 Until((OK=0)|(vNomPseudo#""))
 If(OK=0)
    ... // No hacer nada
 Else
    REGISTER CLIENT(vNomPseudo)
 End if
```

2) La siguiente instrucción le permite obtener una lista de los 4D Clients registrados. Puede colocarse en el Método de base On Startup:

```4d
 PrListClient:=New process("Lista_4D Client";32000;"Lista de clientes registrados")
```

3) El método Lista\_4DClient le permite recuperar todos los 4D Clients registrados y las personas que pueden recibir mensajes:

```4d
 If(Application type=4D Client)
  // el código a continuación sólo es válido en modo cliente-servidor
    $Ref:=Open window(100;100;300;400;-(Palette window+Has window title);"Lista de clientes registrados")
    Repeat
       GET REGISTERED CLIENTS($ListClient;$ListeCharge)
  //Retrieve the registered clients in $ClientList
       ERASE WINDOW($Ref)
       GOTO XY(0;0)
       For($p;1;Size of array($ListClient))
          MESSAGE($ListClient{$p}+Char(Carriage return))
       End for
  //Mostrar cada segundo
       DELAY PROCESS(Current process;60)
    Until(False) // Bucle infinito
 End if
```

4) El siguiente método le permite enviar un mensaje a otro cliente 4D registrado. Llama al método Mostrar\_Mensaje (ver a continuación).

```4d
 $Destinatario:=Request("Destinatario del mensaje:";"")
  // Introduza el nombre de las personas visibles en la ventana generada por el
  // Método de base On Startup
 If(OK#0)
    $Mensaje:=Request("Mensaje:") // mensaje
    If(OK#0)
       EXECUTE ON CLIENT($Destinatario;"Mostrar_Mensaje";$Mensaje) // Enviar mensaje
    End if
 End if
```

5) Este es el método Mostrar\_Mensaje:

```4d
 var $1 : Text
 ALERT($1)
```

6) Finalmente, este método permite a un puesto cliente no ser visible para los otros clientes 4D y no recibir más mensajes:

```4d
 UNREGISTER CLIENT
```

#### Variables y conjuntos del sistema 

Si el cliente 4D está registrado correctamente, la variable sistema OK es igual a 1\. Si 4D Client ya fue registrada, el comando no hace nada y OK toma el valor 0.

#### Ver también 

[EXECUTE ON CLIENT](execute-on-client.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[UNREGISTER CLIENT](unregister-client.md)  