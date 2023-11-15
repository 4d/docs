---
id: php
title: Págin PHP
---

You can [execute PHP scripts in 4D](https://doc.4d.com/4Dv20/4D/20.1/Executing-PHP-scripts-in-4D.300-6480814.en.html). This page allows you to configure the interpreter.


:::note

These settings are specified for all connected machines and all sessions. You can also modify and read them separately for each machine and each session using the [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html) and [`Get database parameter`](https://doc.4d.com/4dv20/help/command/en/page643.html) commands. The parameters modified by the `SET DATABASE PARAMETER` command have priority for the current session.

:::


## Intérprete

### Dirección IP

Address of the PHP interpreter where PHP execution requests must be adressed. Por defecto, 4D utiliza la dirección 127.0.0.1.

Note that the HTTP address must be on the same machine as 4D.

### Número de puerto

Número de puerto del intérprete PHP. Por defecto, 4D utiliza el puerto 8002.

Puede cambiar la dirección y/o el puerto si ya están siendo utilizados por otro servicio o si tiene varios intérpretes en la misma máquina. 


