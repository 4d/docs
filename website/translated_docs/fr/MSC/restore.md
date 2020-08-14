---
id: restore
title: Page restitution
sidebar_label: Page restitution
---

## Restauration d'une sauvegarde

You can manually restore an archive of the current application using the **Restore** page. This page provides several options that can be used to control the restoration:

![](assets/en/MSC/MSC_restore.png)

> 4D automatic recovery systems restore applications and include data log file when necessary.

The list found in the left part of the window displays any existing backups of the application. You can also click on the **Browse...** button found just under the area in order to open any other archive file from a different location. Il est alors ajouté à la liste des archives.

Lorsque vous sélectionnez une sauvegarde dans cette liste, la partie droite de la fenêtre affiche les informations relatives à cette sauvegarde :

- **Chemin d’accès** : chemin d’accès complet du fichier de sauvegarde sélectionné. Le bouton Montrer ouvre le dossier de sauvegarde dans une fenêtre système.
- **Date et heure** : date et heure de la sauvegarde.
- **Contenu** : contenu du fichier de sauvegarde. Chaque élément de la liste est associé à une case à cocher, permettant de spécifier si vous souhaitez ou non le restituer. Vous pouvez utiliser les boutons **Tout sélectionner** ou **Tout désélectionner** pour paramétrer la liste des éléments à restituer.
- **Emplacement des fichiers restitués** : dossier dans lequel seront placés les fichiers restitués. By default, 4D restores the files in a folder named “Archivename” (no extension) that is placed next to the Project folder. Pour modifier cet emplacement, cliquez sur le bouton **[...]** et désignez le dossier dans lequel vous souhaitez effectuer la restitution.

Le bouton **Restituer** lance la restitution manuelle des éléments sélectionnés.

## Intégration successive de plusieurs fichiers d’historiques

The **Integrate one or more log file(s) after restore** option allows you to integrate several data log files successively into an application. If, for example, you have 4 journal file archives (.4BL) corresponding to 4 backups, you can restore the first backup then integrate the journal (data log) archives one by one. Ce principe permet par exemple de récupérer un fichier de données alors que les derniers fichiers de sauvegarde de la base sont manquants.

Lorsque cette option est cochée, 4D affiche une boîte de dialogue standard d’ouverture de fichiers à l’issue de la restitution, vous permettant de sélectionner la sauvegarde d’historique à intégrer. La boîte de dialogue d’ouverture est affichée de nouveau après chaque intégration, jusqu’à ce qu’elle soit annulée.

## Restituer une base chiffrée

Keep in mind that the data encryption key (passphrase) may have been changed through several versions of backup files (.4BK), .journal files (.4BL) and the current application. Il est important que les clés de chiffrement soient toujours mises en correspondance.

Au moment de restituer une sauvegarde et d'intégrer le fichier d'historique courant dans une base chiffrée :

- Si vous restituez une sauvegarde à l'aide d'une ancienne phrase secrète, cette dernière sera demandée au prochain démarrage de la base.
- Après un chiffrement, à l'ouverture du fichier de données chiffrées, une sauvegarde est exécutée et un nouveau fichier journal est créé. Ainsi, il n'est pas possible de restituer un fichier chiffré .4BK avec une clé et d'intégrer les fichiers chiffrés .4BL avec une autre clé.

La séquence suivante illustre les principes d'une opération de clé multiple de sauvegarde/restitution :


| Opération                                | Fichiers générés                                   | Commentaire                                                                                                                                                                                                                                                                                           |
| ---------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New data file                            |                                                    |                                                                                                                                                                                                                                                                                                       |
| Ajouter des données (enregistrement # 1) |                                                    |                                                                                                                                                                                                                                                                                                       |
| Sauvegarder la base de données           | 0000.4BL et 0001.4BK                               |                                                                                                                                                                                                                                                                                                       |
| Ajouter des données (enregistrement # 2) |                                                    |                                                                                                                                                                                                                                                                                                       |
| Sauvegarder la base de données           | 0001.4BL et 0002.4BK                               |                                                                                                                                                                                                                                                                                                       |
| Ajouter des données (enregistrement # 3) |                                                    |                                                                                                                                                                                                                                                                                                       |
| Chiffrer un fichier de données avec clé1 | Fichier 0003.4BK (chiffré avec clé1)               | Le chiffrement sauvegarde les fichiers originaux (y compris le fichier journal) dans le dossier "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". À l'ouverture du fichier de données chiffrées, un nouveau fichier journal est créé et une sauvegarde est effectuée pour activer ce fichier journal. |
| Ajouter des données (enregistrement # 4) |                                                    |                                                                                                                                                                                                                                                                                                       |
| Sauvegarder la base de données           | Fichiers 0003.4BL et 0004.4BK (chiffrés avec clé1) | Il est possible de restituer 0003.4BK et d'intégrer 0003.4BL                                                                                                                                                                                                                                          |
| Ajouter des données (enregistrement # 5) |                                                    |                                                                                                                                                                                                                                                                                                       |
| Sauvegarder la base de données           | Fichiers 0004.4BL et 0005.4BK (chiffrés avec clé1) | Il est possible de restituer 0003.4BK et d'intégrer 0003.4BL + 0004.4BL. Il est possible de restituer 0004.4BK et d'intégrer 0004.4BL                                                                                                                                                                 |
| Ajouter des données (enregistrement # 6) |                                                    |                                                                                                                                                                                                                                                                                                       |
| Chiffrer un fichier de données avec clé2 | Fichier 0006.4BK (chiffré avec clé2)               | Le chiffrement sauvegarde les fichiers originaux (y compris le fichier journal) dans le dossier "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". À l'ouverture du fichier de données chiffrées, un nouveau fichier journal est créé et une sauvegarde est effectuée pour activer ce fichier journal. |
| Ajouter des données (enregistrement # 7) |                                                    |                                                                                                                                                                                                                                                                                                       |
| Sauvegarder la base de données           | Fichiers 0006.4BL et 0007.4BK (chiffrés avec clé2) | Il est possible de restituer 0006.4BK et d'intégrer 0006.4BL                                                                                                                                                                                                                                          |
| Ajouter des données (enregistrement # 8) |                                                    |                                                                                                                                                                                                                                                                                                       |
| Sauvegarder la base de données           | Fichiers 0007.4BL et 0008.4BK (chiffrés avec clé2) | Il est possible de restituer 0006.4BK et d'intégrer 0006.4BL + 0007.4BL. Il est possible de restituer 0007.4BK et d'intégrer 0007.4BL                                                                                                                                                                 |
> Au moment de restituer une sauvegarde et d'intégrer un ou plusieurs fichiers .4BL, les fichiers restitués .4BK et .4BL doivent avoir la même clé de chiffrement. Durant le processus d'intégration, si aucune clé de chiffrement valide n'est trouvée dans le trousseau de 4D lors de l'intégration du fichier .4BL, une erreur est générée.
> 
> Si vous avez stocké plusieurs clés de données sur le même appareil externe, la restitution d'une sauvegarde et l'intégration de fichiers d'historique permettront de trouver automatiquement la clé correspondant à l'appareil connecté.
