---
id: overview
title: Aperçu
sidebar_label: Aperçu
---

La fenêtre du Centre de sécurité et de maintenance (CSM) rassemble tous les outils nécessaires au contrôle, à l’analyse, à la maintenance, à la sauvegarde, au compactage et au chiffrement des fichiers de données et de structure. Le CSM est disponible dans toutes les applications 4D : 4D monoposte, 4D Server ou 4D Desktop.

**Note :** La fenêtre du CSM n'est pas accessible depuis une application 4D distante.

Vous pouvez accéder à la fenêtre du CSM de plusieurs manières. The way it is accessed also determines the way the application project is opened: in “maintenance” mode or “standard” mode. In maintenance mode, the project is not opened by 4D, only its reference is provided to the MSC. In standard mode, the project is opened by 4D.


## Accès au CSM en mode maintenance

In maintenance mode, only the MSC window is displayed (the project is not opened by the 4D application). This means that projects that are too damaged to be opened in standard mode by 4D can nevertheless be accessed. Moreover, certain operations (compacting, repair, and so on) require the project to be opened in maintenance mode (see [Feature availability](#feature-availability)).

Vous pouvez ouvrir le CSM en mode maintenance depuis deux emplacements :

- **From the standard project opening dialog box** The standard Open dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button: ![](assets/en/MSC/MSC_standardOpen.png)
- **Help/Maintenance Security Center** menu or **MSC** button in the tool bar (project not open)  
  ![](assets/en/MSC/mscicon.png)   
  When you call this function, a standard Open file dialog appears so that you can select the *.4DProject* or *.4dz* file of the to be examined. The project will not be opened by 4D.

## Accès au CSM en mode standard

In standard mode, a project is open. Dans ce mode, certaines fonctions de maintenance ne sont pas disponibles. Vous disposez de plusieurs possibilités pour accéder à la fenêtre du CSM :

- Utiliser le Menu **Aide/Centre de sécurité et de maintenance** ou le bouton **CSM** de la barre d’outils :  
  ![](assets/en/MSC/mscicon.png)
- Use the “msc” standard action that it is possible to associate with a menu command or a form object.
- Use the `OPEN SECURITY CENTER` language command.

## Disponibilité des fonctionnalités

Certaines fonctions du CSM ne sont pas disponibles suivant le mode d’ouverture du CSM :

- Backup function is only available when the project is open (the MSC must have been opened in standard mode).
- Les fonctions de compactage, retour arrière, restitution, réparation et chiffrement des données ne sont utilisables qu’avec des bases de données non ouvertes (le CSM doit avoir été ouvert en mode maintenance). If these functions are tried while the project is open in standard mode, a dialog warns you that it implies that the application be closed and restarted in maintenance mode.
- Dans les bases chiffrées, l'accès aux données chiffrées ou au fichier .journal nécessite qu'une clé de chiffrement des données valide soit fournie (voir [Page Chiffrement](encrypt.md)). Sinon, les données chiffrées ne sont pas visibles. 
