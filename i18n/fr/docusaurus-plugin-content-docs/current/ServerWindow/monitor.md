---
id: monitor
title: Page Moniteur
---

The **Monitor** page displays dynamic information concerning database use as well as information about the system and the 4D Server application.

![](../assets/en/Admin/server-admin.png)

> Sous Windows, certaines informations système affichées sur cette page sont récupérées via les outils "Analyseur de performance" de Windows. Ces outils sont accessibles uniquement si l'utilisateur ayant ouvert la session sur laquelle 4D Server a été lancé dispose des autorisations d'administration nécessaires.

## Zone graphique

La zone graphique permet de visualiser l’évolution en temps réel de plusieurs paramètres : le taux d’utilisation des processeurs, le trafic réseau et l'état de la mémoire. Vous sélectionnez le paramètre à afficher via le menu situé au centre la fenêtre :

![](../assets/en/Admin/server-graphic.png)

- **CPU Usage**: Overall CPU usage of the machine, for all applications taken together. La part spécifique de 4D Server dans ce taux d’utilisation est fournie dans la zone d’informations "Processeurs".
- **Network**: Number of bytes received per second by the machine (server or client). Le nombre d’octets envoyés est fourni dans la zone d’informations "Réseau".
- **Physical memory**: Quantity of RAM memory of machine used by 4D Server. Une vue plus détaillée de l’utilisation de la mémoire est fournie dans la zone d’informations "Mémoire".
- **Virtual memory**: Quantity of virtual memory used by the 4D Server application. Cette mémoire est allouée par le système en fonction des besoins de l’application. La valeur située en bas à droite de la zone indique la quantité de mémoire en cours d’utilisation. La valeur située en haut à gauche indique la quantité maximale de mémoire virtuelle utilisable. La valeur maximale est calculée dynamiquement en fonction des paramètres mémoire généraux de l’application.
- **Cache**: Quantity of cache memory used by the 4D Server application. La valeur située en bas à droite de la zone indique la quantité de mémoire en cours d’utilisation. The value found at the bottom right of the area indicates the quantity of memory currently being used.

A noter que lorsque cette option est sélectionnée, le défilement de la zone graphique est ralenti car une analyse efficace du cache s’effectue généralement sur une période d’observation assez longue.

## Zone Vue d’ensemble

La zone "Vue d’ensemble" fournit diverses informations relatives au système, à l’application et aux licences installées sur la machine de 4D Server.

- **System Information**: Computer, system and IP address of server
- **Application Information**: Internal version number of 4D Server and Volume Shadow Copy status
- **Maximum connections**: Number of simultaneous connections allowed by type of server
- **License**: Description of license. Lorsque la licence produit ou l'une de ses expansions expire dans moins de 10 jours, dans le cas d'un abonnement, 4D Server tente de renouveler automatiquement la licence depuis le compte de l'utilisateur 4D. Dans ce cas, si le renouvellement automatique échoue pour une raison quelconque (erreur de connexion, statut du compte invalide, contrat non prolongé...), une icône d'avertissement est affichée à côté de la licence afin d'alerter l'administrateur du serveur. Des informations supplémentaires relatives au statut du renouvellement de la licence peuvent être affichées dans une info-bulle lorsque vous survolez la zone avec la souris :

![](../assets/en/Admin/server-licence-failed.png)

Usually, you will need to check the [**Licences Manager**](Admin/licenses.md).

## Zone Détails

La zone "Détails" reprend une partie des informations affichées dans la zone graphique et propose des informations complémentaires.

- **Hard drive**: Overall capacity of the hard disk and distribution of the space used by the database data (data file + data index), the space used by other files and the free space available.
- **Memory**: RAM memory installed on the machine and amount of memory used by 4D Server, by other applications or that is free. La mémoire occupée par 4D Server peut également être affichée dynamiquement dans la zone graphique.
- **Processors**: Instant occupancy rate for processor(s) of the machine by 4D Server and by other applications. Ce taux est recalculé en permanence. Le taux d’occupation par 4D Server peut également être affiché dynamiquement dans la zone graphique.
- **Network**: Instantaneous number of bytes sent and received by the machine (server or client). Cette valeur est réactualisée en permanence. Le nombre d’octets reçus peut également être affiché dynamiquement dans la zone graphique.
