---
id: backup
slug: backup
title: Sauvegarde
---

Une sauvegarde peut être déclenchée de trois manières :

- Manuellement, via la commande **Sauvegarde...** du menu **Fichier** de 4D ou le bouton **Sauvegarde** du [Centre de sécurité et de maintenance (CSM)](MSC/backup.md).
- Automatiquement, via le programmateur paramétrable dans les Propriétés,
- Par programmation, à l’aide de la commande `BACKUP`.

> 4D Server : Il est possible de déclencher “manuellement” une sauvegarde depuis un poste distant, via une méthode appelant la commande `BACKUP`. Dans tous les cas, la commande sera exécutée sur le serveur.

## Sauvegarde manuelle

1. Choisissez la commande **Sauvegarde...** dans le menu **Fichier** de 4D.
   La fenêtre de sauvegarde s'affiche:
   ![](../assets/en/Backup/backup01.png)
   Vous pouvez voir l'emplacement du dossier de sauvegarde en utilisant le menu déroulant à côté de la zone "Destination de la sauvegarde". Cet emplacement est défini dans la Page **Sauvegarde/Configuration** des Propriétés de la base.

- Vous pouvez également sélectionner [Centre de sécurité et de maintenance](MSC/overview.md) de 4D et afficher la [Page Sauvegarde](MSC/backup.md).

Le bouton **Propriétés de la base...** provoque l’affichage de la boîte de dialogue des Propriétés de structure.

2. Cliquez sur le bouton **Sauvegarde** pour déclencher la sauvegarde avec les paramètres courants.

## Sauvegarde automatique périodique

Les sauvegardes périodiques sont déclenchées automatiquement. Elles sont configurées dans la Page **Sauvegarde/Périodicité** des **Propriétés**.

Les sauvegardes s'effectuent automatiquement au moment défini, sans intervention de l’utilisateur. Pour plus d’informations sur le fonctionnement de cette boîte de dialogue, reportez-vous à la section [Définir des sauvegardes périodiques](settings.md#scheduler).

## Commande BACKUP

Lorsque la commande `BACKUP` est exécutée depuis une méthode, la sauvegarde est alors déclenchée avec les paramètres courants définis dans les propriétés. Vous pouvez utiliser la Méthode base `On Backup Startup` et `On Backup Shutdown` afin de contrôler le déroulement de la sauvegarde (cf. le manuel _Langage de 4D_).

## Déroulement de la sauvegarde

Une fois qu’une sauvegarde a été déclenchée, 4D affiche une boîte de dialogue comportant un thermomètre indiquant la progression de l’opération :

![](../assets/en/Backup/backupProgress.png)

Le thermomètre est également affiché en bas de la page [“Sauvegarde” du CSM](MSC/backup.md) si vous avez utilisé cette boîte de dialogue.

Le bouton **Arrêter** permet à l’utilisateur d’interrompre la sauvegarde à tout instant (cf. paragraphe [En cas de problème au cours de la sauvegarde](backup.md#handling-backup-issues)).

Le compte-rendu de la dernière sauvegarde (succès ou échec) est stocké dans la zone "Informations sur la dernière sauvegarde" dans la [Page Sauvegarde du CSM](MSC/backup.md) ou dans la **Page de maintenance** de 4D Server. Il est également enregistré dans le **Backup journal.txt**.

### Accès à l'application durant la sauvegarde

4D verrouille les process liés aux types de fichiers inclus dans la sauvegarde : si seul le fichier de structure est sauvegardé, l’accès à la structure est impossible mais l’accès aux données est autorisé. Pendant la sauvegarde, les accès à l'application sont restreints par 4D en fonction du contexte.

A l’inverse, si seul le fichier de données est sauvegardé, l’accès à la structure reste autorisé. Dans ce cas, les possibilités d’accès à l'application sont les suivantes :

- Avec 4D version monoposte, l'application est verrouillée en lecture et en écriture, tous les process sont gelés. Toute action est alors impossible.
- Avec 4D Server, l'application est verrouillée uniquement en écriture, les postes clients peuvent consulter les données. Si un poste client envoie une requête d’ajout, de suppression ou de modification au serveur, il obtient une fenêtre l’invitant à attendre la fin de la sauvegarde. Une fois l'application sauvegardée, la fenêtre disparaît d’elle-même et l’action est exécutée. Pour annuler la requête en cours et ne pas avoir à attendre la fin de la sauvegarde, il suffit de cliquer sur le bouton **Annuler l’opération**. Cependant, si l’action en attente provient d’une méthode lancée avant la sauvegarde, il est déconseillé de l’annuler car seules les opérations restant à effectuer seront annulées. Or, une méthode “à moitié” exécutée peut conduire à des incohérences logiques dans les données.

> Lorsque l’action en attente provient d’une méthode et que l’utilisateur clique sur le bouton **Annuler l’opération**, 4D Server renvoie l’erreur -9976 (Cette commande ne peut être exécutée car la base est en cours de sauvegarde).

### En cas de problème au cours de la sauvegarde

Il est possible qu'une sauvegarde ne s’effectue pas correctement. Les causes de l’échec peuvent être diverses : interruption par l’utilisateur, fichier joint introuvable, disque de destination défaillant, transaction non terminée, etc. 4D traite l'incident selon la cause de l'échec.

Dans tous les cas, gardez à l'esprit que le statut de la dernière sauvegarde (réussie ou échouée) est stocké dans la zone Informations sur la dernière sauvegarde de la [page Sauvegarde du CSM](MSC/backup.md) ou dans la page **Maintenance** de 4D Server, ainsi que dans le **Backup journal.txt**.

- **Interruption par l’utilisateur** : le bouton **Arrêter** de la boîte de dialogue de progression de la sauvegarde permet aux utilisateurs d’interrompre la sauvegarde à tout instant. Dans ce cas, la copie des éléments est stoppée et l'erreur 1406 est générée. Vous pouvez intercepter cette erreur dans la Méthode base `On Backup Shutdown`.
- **Fichier joint introuvable** : lorsqu’un fichier joint est introuvable, 4D effectue une sauvegarde partielle (sauvegarde des fichiers de l'application et des fichiers joints accessibles) et retourne une erreur.
- **Sauvegarde impossible** (disque plein ou protégé en écriture, disque manquant, panne du disque, transaction non terminée, projet non lancé au moment d’une sauvegarde automatique périodique, etc.) : S’il s’agit du premier échec, 4D effectuera ultérieurement une seconde tentative. Le délai d’attente entre les deux tentatives est défini dans la Page **Sauvegarde/Sauvegarde& et Restitution** des Propriétés.
  Si la seconde tentative échoue également, une boîte de dialogue d’alerte système est affichée et une erreur est générée. Vous pouvez intercepter cette erreur dans la Méthode base `On Backup Shutdown`.

## Journal de sauvegarde (Backup Journal)

Pour faciliter le suivi et la vérification des sauvegardes, le module de sauvegarde résume chaque opération effectuée dans un fichier spécial, similaire à un journal d'activité. Comme un manuel intégré, toutes les opérations de la base de données (sauvegardes, restaurations, intégrations de fichiers d'historique) sont consignées dans ce fichier, qu’elles aient été planifiées ou exécutées manuellement. La date et l'heure auxquelles ces opérations ont eu lieu sont également notées dans le journal.

Le journal de sauvegarde s'appelle "Backup Journal[001].txt" et se trouve dans le dossier "Logs" du projet. Le journal de sauvegarde peut être ouvert avec n'importe quel éditeur de texte.

#### Gestion de la taille du journal de sauvegarde

Dans certaines stratégies de sauvegarde (par exemple, dans le cas où de nombreuses pièces jointes sont sauvegardées), le journal de sauvegarde peut rapidement atteindre une taille importante. Deux mécanismes peuvent être utilisés pour gérer cette taille :

- **Sauvegarde automatique** : Avant chaque sauvegarde, l'application examine la taille du fichier backup journal courant. Si elle est supérieure à 10 Mo, le fichier courant est archivé et un nouveau fichier est créé avec le numéro [xxx] incrémenté, par exemple "Backup Journal[002] .txt”. Une fois le numéro de fichier 999 atteint, la numérotation reprend à 1 et les fichiers existants seront remplacés.
- **Possibilité de réduire la quantité d'informations enregistrées** : Pour ce faire, il suffit de modifier la valeur de la clé `VerboseMode` dans le fichier _Backup.4DSettings_ du projet. Par défaut, cette clé est définie sur True. Si vous définissez la valeur de cette clé sur False, seules les informations principales sont stockées dans le journal de sauvegarde : la date et l'heure du début de l'opération et les éventuelles erreurs générées. Les clés XML concernant la configuration de la sauvegarde sont décrites dans le manuel _Sauvegarde des clés XML 4D_.

## backupHistory.json

Toutes les informations concernant les dernières opérations de sauvegarde et de restitution sont stockées dans le fichier **backupHistory.json** de l'application. Ce dernier enregistre le chemin de chaque fichier sauvegardé (y compris les pièces jointes) ainsi que le numéro, la date, l'heure, la durée et le statut de chaque opération. Afin de limiter la taille du fichier, le nombre d'opérations enregistrées et le nombre de sauvegardes disponibles ("Keep only the last X backup files") définies dans les propriétés de sauvegarde est identique.

Le fichier **backupHistory.json** se situe dans le dossier de destination de sauvegarde courant. Vous pouvez obtenir le chemin de ce fichier à l'aide de la déclaration suivante :

```4d
$backupHistory:=Get 4D file(Backup history file)
```

> **ATTENTION**\
> Supprimer ou déplacer le fichier **backupHistory.json** entraînera la réinitialisation du prochain numéro de sauvegarde.

> Le fichier **backupHistory.json** est formaté afin d'être utilisé par l'application 4D. Si vous recherchez un état lisible sur les opérations de sauvegarde, le journal de sauvegarde sera plus précis.
