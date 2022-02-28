---
id: security
title: Page sécurité
---

Cette page regroupe les options relatives à la protection des accès et des données de vos applications desktop.

**Note** : Consultez le document [4D Security guide](https://blog.4d.com/4d-security-guide/) pour une vue d'ensemble des fonctions de sécurité de 4D.

## Accès aux données / Accès des utilisateurs distants

> Ces paramètres ne s'appliquent pas aux bases projets ouvertes en monoposte.

-   **Accès Développement et Explorateur d'exécution** : permet au groupe d’utilisateurs spécifié d’accéder au mode Développement de la base et d'afficher l'Explorateur d'exécution.

    A noter que :
    -   La définition d’un groupe d’accès en Développement permet également de désactiver l’option **Créer une table** de la boîte de dialogue d’import de données. Pour plus d’informations sur cette boîte de dialogue, reportez-vous à la section [Importer des données depuis des fichiers](https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html).

    -   Le Super_Utilisateur et l’Administrateur ont toujours accès au mode Développement et à l'Explorateur d'exécution, même s’ils ne font pas explicitement partie du groupe d’accès défini. Pour plus d'informations sur les contrôles d'accès dans 4D, reportez-vous au chapitre [Utilisateurs et groupes](https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html).

-   **Utilisateur par défaut** : lorsqu’un utilisateur est défini dans ce menu, chaque utilisateur ouvrant ou se connectant à la base dispose des privilèges et restrictions d’accès qui ont été assignés à cet utilisateur par défaut. Il n’est alors plus nécessaire de saisir un nom d’utilisateur. De plus, si vous n’avez pas associé de mot de passe à l’utilisateur par défaut, la boîte de dialogue de saisie du mot de passe n’apparaît pas, la base s’ouvre directement. L’intérêt de cette option est de simplifier les accès multiples à la base tout en maintenant un système complet de contrôle des données.

    -   Si vous avez associé un mot de passe à l’utilisateur par défaut, une boîte de dialogue apparaît à l’ouverture de la base, les utilisateurs doivent uniquement saisir un mot de passe.
    -   Si vous n’avez pas associé de mot de passe à l’utilisateur par défaut, aucune boîte de dialogue n’apparaît. **Note** : Vous pouvez “forcer” l’affichage de la boîte de dialogue standard de saisie du mot de passe lorsque le mode “Utilisateur par défaut” est actif, par exemple pour pouvoir vous connecter en tant que Super_Utilisateur ou Administrateur. Pour cela, ouvrez (ou connectez-vous à) la base de données tout en maintenant la touche **Majuscule** enfoncée.

-   **Afficher les utilisateurs dans la fenêtre Mots de passe** : si cette option est cochée, les utilisateurs doivent choisir leur nom dans une liste d’utilisateurs et saisir leur mot de passe dans la boîte de dialogue de saisie des mots de passe. Si cette option n’est pas cochée, les utilisateurs doivent saisir leur nom et leur mot de passe. Pour plus d’informations sur les deux versions de la boîte de dialogue de mots de passe, reportez-vous au paragraphe "Accès aux bases protégées” dans la section [Présentation du contrôle des accès](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html).

    -   **Trier la liste des utilisateurs par ordre alphabétique** (option utilisable uniquement si la précédente est cochée) : lorsque cette option est sélectionnée, la liste des utilisateurs dans la boîte de dialogue de saisie des mots de passe est triée par ordre alphabétique.

-   **Les utilisateurs peuvent changer leur mot de passe** : lorsque cette option est cochée, un bouton **Changer** est affiché dans la boîte de dialogue d’ouverture ou de connexion à la base. Ce bouton permet à l’utilisateur d’accéder à la boîte de dialogue lui permettant de modifier son mot de passe (cf. paragraphe “Modification du mot de passe par l’utilisateur” dans la section [Assurer la maintenance du système](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html)). Si vous le souhaitez, vous pouvez masquer le bouton **Changer** afin de ne pas permettre aux utilisateurs de modifier leur mot du passe. Il suffit pour cela de désélectionner cette option.

## Options

-   **Filtering of commands and project methods in the formula editor and 4D Write Pro documents**: For security reasons, by default 4D restricts access to the commands, functions and project methods in the [Formula editor](https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html) in Application mode or added to mutlistyle areas or 4D Write Pro documents using the [ST INSERT EXPRESSION](https://doc.4d.com/4dv19R/help/command/en/page1281.html) command: only certain 4D functions and project methods that have been explicitly declared using the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command can be used. A l'aide des options suivantes, vous pouvez supprimer complètement ou partiellement ce filtrage.
    -   **Activé pour tous** (par défaut) : L'accès aux commandes, fonctions et méthodes projets est limité pour tous les utilisateurs, y compris au Super Utilisateur et à l'Administrateur.
    -   **Désactivé pour le Super Utilisateur et l'Administrateur** : Cette option accorde, uniquement au Super Utilisateur et à l'Administrateur, un accès complet aux commandes et méthodes 4D. Elle peut être utilisée pour définir un mode d'accès illimité aux commandes et méthodes. During the development phase, this mode can be used to freely test all the formulas, reports, and so on. During operation, it can be used to set up secure solutions that allow access to commands and methods on a temporary basis. This consists in changing the user (via the [CHANGE CURRENT USER](https://doc.4d.com/4dv19R/help/command/en/page289.html) command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed. **Note:** If full access has been enabled using the previous option, this option will have no effect.
    -   **Désactivé pour tous** : Cette option désactive le contrôle dans les formules. Lorsque cette option est cochée, les utilisateurs ont accès à l'ensemble des commandes, plug-ins et méthodes projets (à l'exception de ceux qui sont invisibles). **Note :** Cette option est prioritaire sur la commande [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html). Lorsqu'elle est cochée, cette commande ne fait rien.

-   **Enable User Settings**: You need to check this option to be able to display separated dialog boxes for user settings. When this option is checked, up to three dialog boxes are available: **Structure Settings**, **User Settings**, and **User Settings for Data File**. For more information, refer to [User settings](overview.md#user-settings).

-   **Execute "On Host Database Event" method of the components**: The [On Host Database Event database method](https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html) facilitates the initialization and backup phases for 4D components. For security reasons, you must explicitly authorize the execution of this method in each host database. To do this, you must check this option. By default, it is not checked.

    When this option is checked:
    * 4D components are loaded,
    * each [On Host Database Event database method](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html) of the component (if any) is called by the host database,
    * the code of the method is executed.

    When it is not checked:
    * 4D components are loaded but they have to manage their initialization and backup phases themselves.
    * the developer of the component has to publish the component methods that must be called by the host database during these phases (startup and shutdown)
    * the developer of the host database must call the appropriate methods of the component at the right time (must be covered in the component documentation).