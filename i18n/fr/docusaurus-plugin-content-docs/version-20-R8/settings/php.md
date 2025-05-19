---
id: php
title: Page PHP
---

Vous pouvez [exécuter des scripts PHP dans 4D](https://doc.4d.com/4Dv20/4D/20.1/Executing-PHP-scripts-in-4D.300-6480814.en.html). Cette page vous permet de configurer l'interpréteur.

:::note

Ces paramètres sont définis pour toutes les machines connectées et toutes les sessions. You can also modify and read them separately for each machine and each session using the [`SET DATABASE PARAMETER`](../commands-legacy/set-database-parameter.md) and [`Get database parameter`](../commands-legacy/get-database-parameter.md) commands. Les paramètres modifiés par la commande `SET DATABASE PARAMETER` ont la priorité pour la session courante.

:::

## Interpréteur

### Adresse IP

Adresse de l'interpréteur PHP où les demandes d'exécution PHP doivent être adressées. Par défaut, 4D utilise l'adresse 127.0.0.1.

Notez que l'adresse HTTP doit être sur la même machine que 4D.

### Numéro de port

Numéro de port de l'interpréteur PHP. Par défaut, 4D utilise le port 8002.

Vous pouvez modifier cette adresse et/ou ce port s'ils sont déjà utilisés par un autre service ou si vous avez plusieurs interpréteurs sur la même machine.


