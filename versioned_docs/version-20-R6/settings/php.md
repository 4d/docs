---
id: php
title: PHP page
---

You can [execute PHP scripts in 4D](https://doc.4d.com/4Dv20/4D/20.1/Executing-PHP-scripts-in-4D.300-6480814.en.html). This page allows you to configure the interpreter.


:::note

These settings are specified for all connected machines and all sessions. You can also modify and read them separately for each machine and each session using the [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html) and [`Get database parameter`](https://doc.4d.com/4dv20/help/command/en/page643.html) commands. The parameters modified by the `SET DATABASE PARAMETER` command have priority for the current session.

:::


## Interpreter 

### IP Address

Address of the PHP interpreter where PHP execution requests must be adressed. By default, 4D uses the address 127.0.0.1. 

Note that the HTTP address must be on the same machine as 4D.

### Port number

Port number of the PHP interpreter. By default, 4D uses the port 8002. 

You can change the address and/or port if they are already used by another service or if you have several interpreters on the same machine. 


