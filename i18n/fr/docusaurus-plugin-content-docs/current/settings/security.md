---
id: security
title: Page sécurité
---

Cette page regroupe les options relatives à la protection des accès et des données de vos applications desktop.

**Note**: For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).

## Accès des utilisateurs distants

> Ces paramètres ne s'appliquent pas aux bases projets ouvertes en monoposte.

- **Design and Runtime Explorer Access**: Gives the specified group the ability to enter the Design environment of the database and display the Runtime Explorer.

  A noter que :

  - Setting an access group in the Design environment also lets you deactivate the **Create table** option in the data import dialog box. For more information about this dialog box, refer to [Importing data from files](https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html).

  - The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group.For more information about users and user groups, refer to the [Users and groups](https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html) chapter.

- **Default User**: When a Default User has been set, every user that opens the database or logs onto it has the same access privileges and restrictions defined for this Default User. Il n’est alors plus nécessaire de saisir un nom d’utilisateur. De plus, si vous n’avez pas associé de mot de passe à l’utilisateur par défaut, la boîte de dialogue de saisie du mot de passe n’apparaît pas, la base s’ouvre directement.
  L’intérêt de cette option est de simplifier les accès multiples à la base tout en maintenant un système complet de contrôle des données.

  - Si vous avez associé un mot de passe à l’utilisateur par défaut, une boîte de dialogue apparaît à l’ouverture de la base, les utilisateurs doivent uniquement saisir un mot de passe.
  - If you haven't associated a password with the Default User, the User Identification dialog box will not appear.**Note:** You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. To do so, press the **Shift** key while opening the database or connecting to it.

- **Display User List in Password Dialog Box**: If this option is checked, users must choose their name from the list of users and enter their password in the User Identification dialog box. Si cette option n’est pas cochée, les utilisateurs doivent saisir leur nom et leur mot de passe. For more information about the two versions of the password dialog box, see the section "Access system overview" in [Access system overview](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html).

  - **User List in Alphabetical Order** (only available if the previous option is checked): When this option is checked, the list of users in the password entry dialog box is sorted by alphabetical order.

- **Users can change their password**: When this option is checked, a **Change** button is displayed in the User Identification dialog box. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in [Ensuring system maintenance](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html)). If desired, you can hide the **Change** button so that users cannot modify their passwords. Il suffit pour cela de désélectionner cette option.

## Options

- **Filtering of commands and project methods in the formula editor and 4D Write Pro documents**:
  For security reasons, by default 4D restricts access to the commands, functions and project methods in the [Formula editor](https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html) in Application mode or added to mutlistyle areas or 4D Write Pro documents using the [ST INSERT EXPRESSION](https://doc.4d.com/4dv19R/help/command/en/page1281.html) command: only certain 4D functions and project methods that have been explicitly declared using the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command can be used. A l'aide des options suivantes, vous pouvez supprimer complètement ou partiellement ce filtrage.
  - **Enabled for all** (default option): Access to commands, functions and project methods is restricted for all users, including the Designer and the Administrator.
  - **Disable for the Designer and the Administrator**: This option grants full access to 4D commands and to methods only for the Designer and Administrator. Elle peut être utilisée pour définir un mode d'accès illimité aux commandes et méthodes tout en gardant le contrôle des actions effectuées. En phase de développement, ce mode peut être utilisé pour tester librement toutes les formules, les états, ets. En cours d'exploitation, il peut être utilisé pour mettre en oeuvre des solutions sécurisées permettant un accès temporaire à toutes les commandes et méthodes. This consists in changing the user (via the [CHANGE CURRENT USER](https://doc.4d.com/4dv19R/help/command/en/page289.html) command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed.
    **Note:** If full access has been enabled using the previous option, this option will have no effect.
  - **Disabled for all**: This option disables control within formulas. Lorsque cette option est cochée, les utilisateurs ont accès à l'ensemble des commandes, plug-ins et méthodes projets (à l'exception de ceux qui sont invisibles).
    **Note:** This option takes priority over the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command. Lorsqu'elle est cochée, cette commande ne fait rien.

- **Enable User Settings**: You need to check this option to be able to display separated dialog boxes for user settings. When this option is checked, up to three dialog boxes are available: **Structure Settings**, **User Settings**, and **User Settings for Data File**. For more information, refer to [User settings](overview.md#user-settings).

- **Execute "On Host Database Event" method of the components**: The [On Host Database Event database method](https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html) facilitates the initialization and backup phases for 4D components. Pour des raisons de sécurité, vous devez autoriser explicitement l’exécution de cette méthode dans chaque base hôte. Pour cela, vous devez cocher l'option. Cette option n'est pas cochée par défaut.

  Lorsque cette option est cochée :

  - les composants 4D sont chargés,
  - each [On Host Database Event database method](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html) of the component (if any) is called by the host database,
  - le code de la méthode est exécuté.

  Lorsque cette option n’est pas cochée :

  - les composants 4D sont chargés mais ils doivent gérer eux-mêmes leurs phases d’initialisation et de sauvegarde.
  - le développeur du composant doit publier les méthodes du composant qui doivent être appelées par la base hôte lors de ces phases (démarrage et fermeture)
  - le développeur de la base hôte doit appeler les méthodes appropriées du composant au bon moment (doit être exposé dans la documentation du composant).
