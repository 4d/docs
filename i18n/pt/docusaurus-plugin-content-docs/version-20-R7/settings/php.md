---
id: php
title: Página PHP
---

Puede [ejecutar scripts PHP en 4D](https://doc.4d.com/4Dv20/4D/20.1/Executing-PHP-scripts-in-4D.300-6480814.en.html). Essa página permite que você configure o interpretador.

:::note

These settings are specified for all connected machines and all sessions. You can also modify and read them separately for each machine and each session using the [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html) and [`Get database parameter`](https://doc.4d.com/4dv20/help/command/en/page643.html) commands. Los parámetros modificados por el comando `SET DATABASE PARAMETER` tienen prioridad para la sesión actual.

:::

## Intérprete

### Endereço IP

Endereço do interpretador PHP em que as solicitações de execução PHP devem ser endereçadas. Por padrão, 4D usa o endereço 127.0.0.1.

Observe que o endereço HTTP deve estar na mesma máquina que o 4D.

### Número da porta

Número da porta do interpretador PHP. Por padrão, 4D usa a porta 8002.

You can change the address and/or port if they are already used by another service or if you have several interpreters on the same machine.
