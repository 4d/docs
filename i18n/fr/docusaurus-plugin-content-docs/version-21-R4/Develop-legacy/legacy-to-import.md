---
id: legacy-to-import
title: develop-legacy
draft: true
---



<!-- REF develop-semaphores.Desc -->
## Sémaphores  

Les sémaphores vous permettent de vous assurer que deux processus ou plus ne modifient pas la même ressource (fichier, enregistrement...) en même temps. Seul le processus qui pose le sémaphore peut le retirer.

:::info

Les [signaux](../API/SignalClass.md) peuvent également être utilisés pour gérer les interactions. Les signaux vous permettent de vous assurer qu'un ou plusieurs processus attendront qu'une tâche spécifique soit terminée avant de poursuivre leur exécution. Tout processus peut attendre et/ou libérer un signal.

:::

### Qu'est-ce qu'un sémaphore ?  

Dans un programme informatique, un sémaphore est un outil utilisé pour protéger des actions qui ne doivent être exécutées que par un seul processus ou utilisateur à la fois.

En 4D, le besoin classique d'utiliser des sémaphores concerne la modification d'un tableau interprocess : si un processus modifie les valeurs du tableau, un autre processus ne doit pas pouvoir faire la même chose en même temps. Le développeur utilise un sémaphore pour indiquer à un processus qu'il ne peut effectuer sa séquence d'opérations que si aucun autre processus n'effectue déjà les mêmes tâches. Lorsqu'un processus rencontre un sémaphore, trois possibilités se présentent :

- Il obtient immédiatement le droit de passer
- Il attend son tour jusqu'à obtenir le droit de passer
- Il poursuit son chemin, renonçant à exécuter les tâches.

Le sémaphore protège donc des parties du code. Il ne laisse passer qu'un seul processus à la fois et bloque l'accès jusqu'à ce que le processus détenant actuellement le droit d'utilisation abandonne ce droit en libérant le sémaphore.

### Commandes pour travailler avec les sémaphores  

En 4D, vous posez un sémaphore en appelant la commande [`Semaphore`](../commands/sempahore). Pour libérer un sémaphore, vous appelez la commande [`CLEAR SEMAPHORE`](../commands/clear-sempahore).

La commande [`Semaphore`](../commands/sempahore) a un comportement très particulier car elle effectue potentiellement deux actions simultanément :

- Si le sémaphore est déjà attribué, la fonction retourne **True**
- Si le sémaphore n'est pas attribué, la fonction l'attribue au processus et retourne **False** en même temps.

Cette double action effectuée par la même commande garantit qu'aucune opération externe ne peut s'insérer entre le test du sémaphore et son attribution.

Vous pouvez utiliser la commande [`Test semaphore`](../commands/test-semaphore) pour savoir si un sémaphore est déjà attribué ou non. Cette commande est principalement utilisée dans le cadre d'opérations longues, telles que la clôture annuelle des comptes, où [`Test semaphore`](../commands/test-semaphore) vous permet de contrôler l'interface afin d'empêcher l'accès à certaines opérations, comme l'ajout de données comptables.

### Comment utiliser les sémaphores  

Les sémaphores doivent être utilisés selon les principes suivants :

- Un sémaphore doit être posé et libéré dans la même méthode,
- L'exécution du code protégé par le sémaphore doit être aussi courte que possible,
- Le code doit être temporisé au moyen du paramètre tickCount de la commande [`Semaphore`](../commands/sempahore) pour attendre la libération du sémaphore.

Voici un code type pour utiliser un sémaphore :

```4d
 While(Semaphore("MySemaphore";300))
    IDLE
 End while
  // placer ici le code protégé par le sémaphore
 CLEAR SEMAPHORE("MySemaphore")
```

Un sémaphore qui n'est pas libéré peut bloquer une partie de la base de données. Poser et libérer les sémaphores dans la même méthode permet d'éliminer ce risque.

Minimiser le code protégé par le sémaphore augmente la fluidité de l'application et évite que le sémaphore ne devienne un goulot d'étranglement. 

Enfin, l'utilisation du paramètre optionnel *tickCount* de la commande [`Semaphore`](../commands/sempahore) est essentielle pour optimiser l'attente de la libération du sémaphore. Avec ce paramètre, la commande fonctionne de la manière suivante :

- Le processus attend au maximum le nombre de ticks spécifié (300 dans l'exemple) que le sémaphore soit disponible, sans que l'exécution du code ne passe à la ligne suivante,
- Si le sémaphore est libéré avant la fin de cette limite, il est immédiatement attribué au processus (Semaphore retourne False) et l'exécution du code reprend,
- Si le sémaphore n'est pas libéré avant la fin de cette limite, alors l'exécution du code reprend.

La commande priorise également les requêtes en établissant une file d'attente. Ainsi, le premier processus à demander un sémaphore sera le premier à l'obtenir. Notez que le temps d'attente est défini en fonction des spécificités de l'application.

### Sémaphores locaux ou globaux 

Il existe deux types de sémaphores en 4D : les sémaphores locaux et les sémaphores globaux.

- Un sémaphore local est accessible par tous les processus du même poste de travail et uniquement sur ce poste. Un sémaphore local peut être créé en préfixant le nom du sémaphore par un signe dollar ($). Vous utilisez les sémaphores locaux pour surveiller les opérations entre des processus s'exécutant sur le même poste de travail. Par exemple, un sémaphore local peut être utilisé pour surveiller l'accès à un tableau interprocess partagé par tous les processus de votre base de données mono-utilisateur ou du poste de travail.
- Un sémaphore global est accessible à tous les utilisateurs et à tous leurs processus. Vous utilisez les sémaphores globaux pour surveiller les opérations entre les utilisateurs d'une base de données multi-utilisateurs.

Les sémaphores globaux et locaux sont identiques dans leur logique. La différence réside dans leur portée.

En client/serveur, les sémaphores globaux sont partagés entre tous les processus s'exécutant sur tous les clients et serveurs. Un sémaphore local n'est partagé qu'entre les processus s'exécutant sur la machine où il a été créé.

Dans les applications 4D mono-utilisateur, les sémaphores globaux ou locaux ont la même portée car vous êtes le seul utilisateur. Toutefois, si votre base de données est utilisée dans les deux configurations, veillez à utiliser des sémaphores globaux ou locaux selon ce que vous souhaitez faire.

**Note :** Nous recommandons d'utiliser des sémaphores locaux lorsque vous avez besoin d'un sémaphore pour gérer un aspect local d'un client de l'application, tel que l'interface ou un tableau de variables interprocess. Si vous utilisez un sémaphore global dans ce cas, cela provoquerait non seulement des échanges réseau inutiles, mais pourrait aussi affecter inutilement d'autres machines clientes. L'utilisation d'un sémaphore local éviterait ces effets secondaires indésirables.


<!-- END REF -->