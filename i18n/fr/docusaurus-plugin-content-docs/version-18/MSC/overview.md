---
id: overview
title: Vue d’ensemble
sidebar_label: Vue d’ensemble
---

La fenêtre du Centre de sécurité et de maintenance (CSM) rassemble tous les outils nécessaires au contrôle, à l’analyse, à la maintenance, à la sauvegarde, au compactage et au chiffrement des fichiers de données et de structure. Le CSM est disponible dans toutes les applications 4D : 4D monoposte, 4D Server ou 4D Desktop.

**Note :** La fenêtre du CSM n'est pas accessible depuis une application 4D distante.

Vous pouvez accéder à la fenêtre du CSM de plusieurs manières. Le mode d’accès détermine également le mode d’ouverture de la base : mode “maintenance” ou mode “standard”. En mode maintenance, la base n’est pas ouverte par 4D, seule sa référence est fournie au CSM. En mode standard, la base est ouverte par 4D.

## Accès au CSM en mode maintenance

En mode maintenance, seule la fenêtre du CSM est affichée (la base n’est pas ouverte par l’application 4D). Ce principe permet notamment d’accéder à des bases trop endommagées pour pouvoir être ouvertes en mode standard par 4D. En outre, certaines opérations (compactage, réparation...) nécessitent que la base soit ouverte en mode maintenance (cf. [FFFF](#disponibilite-des-fonctionnalites)).

Vous pouvez ouvrir le CSM en mode maintenance depuis deux emplacements :

- **From the standard database opening dialog box** The standard Open database dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button: ![](../assets/en/MSC/MSC_standardOpen.png)
- **Help/Maintenance Security Center** menu or **MSC** button in the tool bar (database not open)  
  ![](../assets/en/MSC/mscicon.png) When you call this function, a standard Open file dialog appears so that you can indicate the database to be examined. La base ne sera pas ouverte par 4D.

## Accès au CSM en mode standard

En mode standard, une base de données est ouverte. Dans ce mode, certaines fonctions de maintenance ne sont pas disponibles. Vous disposez de plusieurs possibilités pour accéder à la fenêtre du CSM :

- Utiliser le Menu **Aide/Centre de sécurité et de maintenance** ou le bouton **CSM** de la barre d’outils :  
  ![](../assets/en/MSC/mscicon.png)
- Utiliser l'action standard “CSM” qu’il est possible d’associer à une commande de menu ou à un objet de formulaire (cf. section "Actions standard").

- Utiliser la commande `OPEN SECURITY CENTER`.

## Disponibilité des fonctionnalités

Certaines fonctions du CSM ne sont pas disponibles suivant le mode d’ouverture du CSM :

- Les informations relatives à la sauvegarde sont disponibles uniquement lorsque la base de données est ouverte (le CSM doit avoir été ouvert en mode standard).
- Les fonctions de compactage, retour arrière, restitution, réparation et chiffrement des données ne sont utilisables qu’avec des bases de données non ouvertes (le CSM doit avoir été ouvert en mode maintenance). Si ces fonctions sont utilisées alors que la base est ouverte en mode standard, une boîte de dialogue s’affiche, vous permettant de relancer l’application en mode maintenance.
- Dans les bases chiffrées, l'accès aux données chiffrées ou au fichier .journal nécessite qu'une clé de chiffrement des données valide soit fournie (voir [Page Chiffrement](encrypt.md)). Sinon, les données chiffrées ne sont pas visibles.
