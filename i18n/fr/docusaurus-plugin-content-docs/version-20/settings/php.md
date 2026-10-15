---
id: php
title: Page PHP
---

In 4D, you can execute PHP scripts directly by configuring the PHP page of the Database Settings (see [Executing PHP scripts in 4D](https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.en.html) in the 4D *Language Reference* manual).

## Interpréteur

- **IP Address** and Port number
  By default, 4D provides a PHP interpreter, compiled in FastCGI. Pour des raisons liées à l'architecture interne, les demandes d'exécution vont vers l'interpréteur PHP à une adresse HTTP spécifique. Par défaut, 4D utilise l'adresse 127.0.0.1 et le port 8002. Vous pouvez modifier cette adresse et/ou ce port s'ils sont déjà utilisés par un autre service ou si vous avez plusieurs interpréteurs sur la même machine. To do this, you modify the **IP Address** and **Port number** parameters.\
  Note that the HTTP address must be on the same machine as 4D.

- **External interpreter**
  If you use an external PHP interpreter, it must be compiled in FastCGI and be on the same machine as 4D (see "Using another PHP interpreter or another php.ini file" in [Executing PHP scripts in 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html)).
  Sélectionnez cette option pour que 4D ne tente pas de se connecter avec l'interpréteur interne lors de l'exécution d'une requête PHP. A noter que cette configuration nécessite une exécution et un contrôle manuels de l'interpréteur externe.

**4D Server:** These settings are shared between 4D Server and the 4D remote machines so it is not possible to use an external interpreter on the server machine and simultaneously use the internal interpreter on the client machines (and vice versa). De plus, si le serveur utilise un interpréteur externe sur le port 9002, les machines clientes doivent également utiliser un interpréteur sur ce port.

## Options

These options are related to the automatic management of the 4D PHP interpreter and are disabled when the **External interpreter** option is selected.

- **Number of processes**: The 4D PHP interpreter drives a set of system execution processes called "child processes". A des fins d'optimisation, il peut exécuter et conserver jusqu'à cinq process enfants simultanément par défaut. Vous pouvez modifier le nombre de process enfants en fonction de vos besoins. Par exemple, vous pouvez augmenter cette valeur si vous faites appel à l'interpréteur PHP de manière intensive. For more information, refer to the "Architecture" section in [Executing PHP scripts in 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html).

  > **Note:** Under Mac OS, all child processes share the same port. Sous Windows, chaque process enfant utilise un numéro de port spécifique. Le premier numéro est celui défini pour l'interpréteur PHP ; les autres process enfant incrémentent ce numéro. Par exemple, si le port par défaut est 8002 et que vous lancez 5 process enfants, ils utiliseront les ports 8002 à 8006.

- **Restart the interpreter after X requests**: This sets the maximum number of requests that the 4D PHP interpreter accepts. Lorsque ce nombre est atteint, l'interpréteur redémarre. Pour plus d'informations sur ce paramètre, reportez-vous à la documentation FastCGI-PHP.

  > **Note:** In this dialog box, the parameters are specified by default for all connected machines and all sessions. You can also modify and read them separately for each machine and each session using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) and [Get database parameter](https://doc.4d.com/4dv19R/help/command/en/page643.html) commands. The parameters modified by the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command have priority for the current session.