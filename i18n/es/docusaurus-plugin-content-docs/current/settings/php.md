---
id: php
title: Págin PHP
---

In 4D, you can execute PHP scripts directly by configuring the PHP page of the Database Settings (see [Executing PHP scripts in 4D](https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.en.html) in the 4D *Language Reference* manual).

## Intérprete

-   **IP Address** and Port number By default, 4D provides a PHP interpreter, compiled in FastCGI. For reasons related to the internal architecture, execution requests go to the PHP interpreter at a specific HTTP address. Por defecto, 4D utiliza la dirección 127.0.0.1 y el puerto 8002. You can change this address and/or port if they are already used by another service or if you have several interpreters on the same machine. To do this, you modify the **IP Address** and **Port number** parameters.\
  Note that the HTTP address must be on the same machine as 4D.

-   **External interpreter** If you use an external PHP interpreter, it must be compiled in FastCGI and be on the same machine as 4D (see "Using another PHP interpreter or another php.ini file" in [Executing PHP scripts in 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html)). Select this option so 4D does not attempt a connection with the internal interpreter when executing a PHP request. Note that this configuration requires your manual execution and control of the external interpreter.

**4D Server:** These settings are shared between 4D Server and the 4D remote machines so it is not possible to use an external interpreter on the server machine and simultaneously use the internal interpreter on the client machines (and vice versa). Also, if the server uses an external interpreter on port 9002, the client machines must also use an interpreter on this port.

## Opciones

These options are related to the automatic management of the 4D PHP interpreter and are disabled when the **External interpreter** option is selected.

-   **Number of processes**: The 4D PHP interpreter drives a set of system execution processes called "child processes". For optimization, it can run and keep up to five child processes simultaneously by default. You can modify the number of child processes according to your needs. For example, you may want to increase this value if you call on the PHP interpreter intensively. For more information, refer to the "Architecture" section in [Executing PHP scripts in 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html).

    > **Note:** Under Mac OS, all child processes share the same port. Under Windows, each child process uses a specific port number. The first number is the one set for the PHP interpreter; the other child processes increment this number. For example, if the default port is 8002 and you launch 5 child processes, they will use ports 8002 to 8006.

-   **Restart the interpreter after X requests**: This sets the maximum number of requests that the 4D PHP interpreter accepts. Cuando se alcanza este número, el intérprete se reinicia. For more information about this parameter, refer to the FastCGI-PHP documentation.
> **Note:** In this dialog box, the parameters are specified by default for all connected machines and all sessions. You can also modify and read them separately for each machine and each session using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) and [Get database parameter](https://doc.4d.com/4dv19R/help/command/en/page643.html) commands. The parameters modified by the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command have priority for the current session.