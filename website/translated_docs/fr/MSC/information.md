---
id: information
title: Page informations
sidebar_label: Page informations
---

La page “Informations” fournit diverses informations relatives à l’environnement 4D et l’environnement système, la base de données et les fichiers de l’application. Chaque page d’information est accessible via des onglets situés dans la partie supérieure de la fenêtre.

## Programme

This page indicates the name, version and location of the application as well as the active 4D folder (for more information about the active 4D folder, refer to the description of the `Get 4D folder` command in the *4D Language Reference* manual).

La partie centrale de la fenêtre affiche le nom et l’emplacement des fichiers de structure et de données ainsi que, le cas échéant, du fichier d'historique de la base. La partie inférieure de la fenêtre indique le nom du détenteur de la licence 4D, le type de licence, ainsi que le nom de l’utilisateur de la base lorsque les mots de passe sont activés — Super_Utilisateur dans le cas contraire.

- **Display and selection of pathnames**: On the **Program** tab, pathnames are displayed in pop-up menus containing the folder sequence as found on the disk:  
  ![](assets/en/MSC/MSC_popup.png) If you select a menu item (disk or folder), it is displayed in a new system window. The **Copy the path** command copies the complete pathname as text to the clipboard, using the separators of the current platform.

- **"Licenses" Folder** The **"Licenses" Folder** button displays the contents of the active Licenses folder in a new system window. Tous les fichiers de licence installés dans votre environnement 4D sont regroupés dans ce dossier, placé sur votre disque dur. Lorsqu’ils sont ouverts avec un navigateur Web, ces fichiers affichent des informations relatives aux licences qu’ils contiennent et à leurs caractéristiques. L’emplacement du dossier "Licenses" peut varier en fonction de la version ou de la langue de votre système d’exploitation. For more information about the location of this folder, refer to the `Get 4D folder` command. ***Note:** You can also access this folder from the “Update License” dialog box (available in the Help menu).*

## Tables

Cette page propose une vue d'ensemble de la base :

![](assets/fr/MSC/MSC_Tables.png)
> Les informations présentes dans cette page sont disponibles en mode standard et en mode maintenance.

La page liste toutes les tables de la base (y compris les tables invisibles) ainsi que leurs caractéristiques :

- **ID**: Internal number of the table.
- **Tables**: Name of the table. Les noms des tables supprimées sont affichés entre parenthèses (lorsqu'elles sont dans la corbeille).
- **Records**: Total number of records in the table. If a record is damaged or cannot be read, *Error* is displayed instead of the number. Dans ce cas, vous devez envisager d'utiliser les outils de vérification et de réparation.
- **Fields**: Number of fields in the table. Les champs invisibles sont comptés, en revanche les champs supprimés ne le sont pas.
- **Indexes**: Number of indexes of any kind in the table
- **Encryptable**: If checked, the **Encryptable** attribute is selected for the table at the structure level (see Encryptable paragraph in the Design Reference Manual).
- **Encrypted**: If checked, the records of the table are encrypted in the data file. ***Note:** Any inconstency between Encryptable and Encrypted options requires that you check the encryption status of the data file in the **Encrypt page** of the database.
- **Address Table Size**: Size of the address table for each table. La table d'adresses est une table interne qui stocke un élément par enregistrement créé dans la table. Elle établit le lien entre les enregistrements et leur adresse physique. Pour des raisons de performance, elle n'est pas redimensionnée lorsque des enregistrements sont supprimés. Sa taille peut donc être différente du nombre d'enregistrements actuel de la table. À noter que si cette différence est significative, il peut être intéressant de compacter les données avec l'option "Compacter la table d'adresses" afin d'optimiser la taille de la table d'adresses (voir [Page Compactage](compact.md)). ***Note:** Differences between address table size and record number can also result from an incident during the cache flush.*



## Données

The **Data** page provides information about the available and used storage space in the data file.
> Cette page n'est pas accessible en mode maintenance

Ces informations sont fournies sous forme de valeurs en octets et sont également représentées sous forme graphique :

![](assets/fr/MSC/MSC_Data.png)
> La page Données ne tient pas compte de la taille des données éventuellement stockées à l’extérieur du fichier de données (cf. section Stockage externe des données).

Des fichiers trop fragmentés réduisent les performances du disque dur et donc de la base. Si le taux d’occupation est trop faible, 4D vous le signale par une icône d’avertissement (qui apparaît dans le bouton Informations et dans l’onglet du type de fichier correspondant) et indique qu’un compactage est requis :![](assets/fr/MSC/MSC_infowarn.png)

Une icône d’avertissement est également affichée sur le bouton de la Page [Compactage](compact.md) : ![](assets/fr/MSC/MSC_compactwarn.png)
