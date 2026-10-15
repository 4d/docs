---
id: php
title: Págin PHP
---

In 4D, you can execute PHP scripts directly by configuring the PHP page of the Database Settings (see [Executing PHP scripts in 4D](https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.en.html) in the 4D *Language Reference* manual).

## Intérprete

- **IP Address** and Port number
  By default, 4D provides a PHP interpreter, compiled in FastCGI. Por razones relacionadas con la arquitectura interna, las peticiones de ejecución van al intérprete PHP en una dirección HTTP específica. Por defecto, 4D utiliza la dirección 127.0.0.1 y el puerto 8002. Puede cambiar esta dirección y/o puerto si ya están siendo utilizados por otro servicio o si tiene varios intérpretes en la misma máquina. To do this, you modify the **IP Address** and **Port number** parameters.\
  Note that the HTTP address must be on the same machine as 4D.

- **External interpreter**
  If you use an external PHP interpreter, it must be compiled in FastCGI and be on the same machine as 4D (see "Using another PHP interpreter or another php.ini file" in [Executing PHP scripts in 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html)).
  Seleccione esta opción para que 4D no intente una conexión con el intérprete interno durante la ejecución de una petición PHP. Tenga en cuenta que esta configuración requiere su ejecución manual y el control del intérprete externo.

**4D Server:** These settings are shared between 4D Server and the 4D remote machines so it is not possible to use an external interpreter on the server machine and simultaneously use the internal interpreter on the client machines (and vice versa). Además, si el servidor utiliza un intérprete externo en el puerto 9002, las máquinas cliente también deben utilizar un intérprete en este puerto.

## Opciones

These options are related to the automatic management of the 4D PHP interpreter and are disabled when the **External interpreter** option is selected.

- **Number of processes**: The 4D PHP interpreter drives a set of system execution processes called "child processes". Para su optimización, puede ejecutar y mantener hasta cinco procesos hijo simultáneamente por defecto. Puede modificar el número de procesos hijos según sus necesidades. Por ejemplo, puede que desee aumentar este valor si utiliza el intérprete PHP de forma intensiva. For more information, refer to the "Architecture" section in [Executing PHP scripts in 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html).

  > **Note:** Under Mac OS, all child processes share the same port. En Windows, cada proceso hijo utiliza un número de puerto específico. El primer número es el definido para el intérprete PHP; los otros procesos hijo incrementan este número. Por ejemplo, si el puerto por defecto es 8002 y lanza 5 procesos hijo, éstos utilizarán los puertos 8002 a 8006.

- **Restart the interpreter after X requests**: This sets the maximum number of requests that the 4D PHP interpreter accepts. Cuando se alcanza este número, el intérprete se reinicia. Para más información sobre este parámetro, consulte la documentación FastCGI-PHP.

  > **Note:** In this dialog box, the parameters are specified by default for all connected machines and all sessions. You can also modify and read them separately for each machine and each session using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) and [Get database parameter](https://doc.4d.com/4dv19R/help/command/en/page643.html) commands. The parameters modified by the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command have priority for the current session.