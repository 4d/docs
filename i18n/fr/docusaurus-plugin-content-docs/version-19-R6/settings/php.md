---
id: php
title: Page PHP
---

Dans 4D, vous pouvez exécuter des scripts PHP en configurant directement la page PHP des Propriétés de la base de données (voir [Exécution de scripts PHP dans 4D](https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.en.html) dans le manuel *Langage* de 4D).

## Interpréteur

-   **IP Address** and Port number By default, 4D provides a PHP interpreter, compiled in FastCGI. Pour des raisons liées à l'architecture interne, les demandes d'exécution vont vers l'interpréteur PHP à une adresse HTTP spécifique. Par défaut, 4D utilise l'adresse 127.0.0.1 et le port 8002. Vous pouvez modifier cette adresse et/ou ce port s'ils sont déjà utilisés par un autre service ou si vous avez plusieurs interpréteurs sur la même machine. To do this, you modify the **IP Address** and **Port number** parameters.\
  Note that the HTTP address must be on the same machine as 4D.

-   **External interpreter** If you use an external PHP interpreter, it must be compiled in FastCGI and be on the same machine as 4D (see "Using another PHP interpreter or another php.ini file" in [Executing PHP scripts in 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html)). Sélectionnez cette option pour que 4D ne tente pas de se connecter avec l'interpréteur interne lors de l'exécution d'une requête PHP. A noter que cette configuration nécessite une exécution et un contrôle manuels de l'interpréteur externe.

**4D Server** : Ces paramètres sont partagés entre 4D Server et les machines distantes 4D ; il n'est donc pas possible d'utiliser un interpréteur externe sur le serveur et d'utiliser simultanément l'interpréteur interne sur les machines clientes (et vice versa). De plus, si le serveur utilise un interpréteur externe sur le port 9002, les machines clientes doivent également utiliser un interpréteur sur ce port.

## Options

Ces options sont liées à la gestion automatique de l'interpréteur PHP 4D et sont désactivées lorsque l'option **Interpréteur externe** est sélectionnée.

-   **Nombre de process** : L'interpréteur PHP 4D pilote un ensemble de process d'exécution système appelés "process enfants". A des fins d'optimisation, il peut exécuter et conserver jusqu'à cinq process enfants simultanément par défaut. Vous pouvez modifier le nombre de process enfants en fonction de vos besoins. Par exemple, vous pouvez augmenter cette valeur si vous faites appel à l'interpréteur PHP de manière intensive. Pour plus d'informations, reportez-vous à la section "Architecture" dans [Exécution de scripts PHP dans 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html).

    > **Note** : Sous Mac OS, tous les process enfants partagent le même port. Sous Windows, chaque process enfant utilise un numéro de port spécifique. Le premier numéro est celui défini pour l'interpréteur PHP ; les autres process enfant incrémentent ce numéro. Par exemple, si le port par défaut est 8002 et que vous lancez 5 process enfants, ils utiliseront les ports 8002 à 8006.

-   **Relancer l'interpréteur après X requêtes** : pour définir le nombre maximum de requêtes acceptées par l'interpréteur PHP de 4D. Lorsque ce nombre est atteint, l'interpréteur redémarre. Pour plus d'informations sur ce paramètre, reportez-vous à la documentation FastCGI-PHP.
> **Note**: Dans cette boîte de dialogue, les paramètres sont spécifiés par défaut pour toutes les machines connectées et toutes les sessions. Vous pouvez également les modifier et les lire séparément pour chaque machine et chaque session en utilisant les commandes [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) et [Get database parameter](https://doc.4d.com/4dv19R/help/command/en/page643.html). Les paramètres modifiés par la commande [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) sont prioritaires pour la session courante.