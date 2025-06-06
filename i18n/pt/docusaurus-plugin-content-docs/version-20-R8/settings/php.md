---
id: php
title: Página PHP
---

Você pode [executar scripts PHP em 4D](https://doc.4d.com/4Dv20/4D/20.1/Executing-PHP-scripts-in-4D.300-6480814.en.html). Essa página permite que você configure o interpretador.

:::note

Estas configurações são especificadas para todas as máquinas conectadas e todas as sessões. Você também pode modificá-los e lê-los separadamente para cada máquina e cada sessão usando os comandos [`SET DATABASE PARAMETER`](../commands-legacy/set-database-parameter.md) e [`Obter parâmetro do banco de dados`](../commands-legacy/get-database-parameter.md). Os parâmetros modificados pelo comando `SET DATABASE PARAMETER` têm prioridade para a sessão atual.

:::

## Intérprete

### Endereço IP

Endereço do interpretador PHP em que as solicitações de execução PHP devem ser endereçadas. Por padrão, 4D usa o endereço 127.0.0.1.

Observe que o endereço HTTP deve estar na mesma máquina que o 4D.

### Número da porta

Número da porta do interpretador PHP. Por padrão, 4D usa a porta 8002.

Você pode alterar o endereço e/ou porta se eles já forem usados por outro serviço ou se você tiver vários intérpretes na mesma máquina.


