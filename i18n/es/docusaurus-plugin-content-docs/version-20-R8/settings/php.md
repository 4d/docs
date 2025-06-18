---
id: php
title: Págin PHP
---

Puede [ejecutar scripts PHP en 4D](https://doc.4d.com/4Dv20/4D/20.1/Executing-PHP-scripts-in-4D.300-6480814.en.html). Esta página le permite configurar el intérprete.

:::note

Estos parámetros se especifican para todas las máquinas conectadas y todas las sesiones. También puede modificarlos y leerlos por separado para cada máquina y cada sesión utilizando los comandos [`SET DATABASE PARAMETER`](../commands-legacy/set-database-parameter.md) y [`Get database parameter`](../commands-legacy/get-database-parameter.md). Los parámetros modificados por el comando `SET DATABASE PARAMETER` tienen prioridad para la sesión actual.

:::

## Intérprete

### Dirección IP

Dirección del intérprete PHP al que deben dirigirse las peticiones de ejecución de PHP. Por defecto, 4D utiliza la dirección 127.0.0.1.

Tenga en cuenta que la dirección HTTP debe estar en la misma máquina que 4D.

### Número de puerto

Número de puerto del intérprete PHP. Por defecto, 4D utiliza el puerto 8002.

Puede cambiar la dirección y/o el puerto si ya están siendo utilizados por otro servicio o si tiene varios intérpretes en la misma máquina.


