---
id: overview
title: CSM
sidebar_label: CSM
---

La fenêtre du Centre de sécurité et de maintenance (CSM) rassemble tous les outils nécessaires au contrôle, à l’analyse, à la maintenance, à la sauvegarde, au compactage et au chiffrement des fichiers de données et de structure. Le CSM est disponible dans toutes les applications 4D : 4D monoposte, 4D Server ou 4D Desktop.

**Note:** The MSC window is not available from a 4D remote connection.

Vous pouvez accéder à la fenêtre du CSM de plusieurs manières. Le mode d’accès détermine également le mode d’ouverture du projet d'application : mode “maintenance” ou mode “standard”. En mode maintenance, le projet n’est pas ouvert par 4D, seule sa référence est fournie au CSM. En mode standard, le projet est ouvert par 4D.

## Accès au CSM en mode maintenance

En mode maintenance, seule la fenêtre du CSM est affichée (le projet n’est pas ouvert par l’application 4D). Ce principe permet notamment d’accéder à des projets trop endommagés pour pouvoir être ouvertes en mode standard par 4D. Moreover, certain operations (compacting, repair, and so on) require the project to be opened in maintenance mode (see [Feature availability](#feature-availability)).

Vous pouvez ouvrir le CSM en mode maintenance depuis deux emplacements :

- **From the standard project opening dialog box**
  The standard Open dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button:
  ![](../assets/en/MSC/MSC_standardOpen.png)
- **Help/Maintenance Security Center** menu or **MSC** button in the tool bar (project not open)\
  ![](../assets/en/MSC/mscicon.png)\
  When you call this function, a standard Open file dialog appears so that you can select the _.4DProject_ or _.4dz_ file of the to be examined. Le projet ne sera pas ouvert par 4D.

## Accès au CSM en mode standard

En mode standard, un projet est ouvert. Dans ce mode, certaines fonctions de maintenance ne sont pas disponibles. Vous disposez de plusieurs possibilités pour accéder à la fenêtre du CSM :

- Use the **Help/Maintenance Security Center** menu or the **MSC** button in the 4D toolbar:\
  ![](../assets/en/MSC/mscicon.png)
- Utiliser l'action standard “Csm” qu’il est possible d’associer à une commande de menu ou à un objet de formulaire.
- Use the `OPEN SECURITY CENTER` language command.

## Disponibilité des fonctionnalités

Certaines fonctions du CSM ne sont pas disponibles suivant le mode d’ouverture du CSM :

- Les informations relatives à la sauvegarde sont disponibles uniquement lorsque le projet est ouvert (le CSM doit avoir été ouvert en mode standard).
- Les fonctions de compactage, retour arrière, restitution, réparation et chiffrement des données ne sont utilisables qu’avec des bases de données non ouvertes (le CSM doit avoir été ouvert en mode maintenance). Si ces fonctions sont utilisées alors que le projet est ouvert en mode standard, une boîte de dialogue s’affiche, vous permettant de relancer l’application en mode maintenance.
- In encrypted databases, access to encrypted data or to the .journal file requires that a valid encryption data key be provided (see [Encrypt page](encrypt.md)). Sinon, les données chiffrées ne sont pas visibles.
