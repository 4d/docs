---
id: security
title: Page sécurité
---

Cette page regroupe les options relatives à la protection des accès et des données de vos applications desktop.

**Note** : Consultez le document [4D Security guide](https://blog.4d.com/4d-security-guide/) pour une vue d'ensemble des fonctions de sécurité de 4D.

## Accès des utilisateurs distants

> Ces paramètres ne s'appliquent pas aux bases projets ouvertes en monoposte.

-   **Accès Développement et Explorateur d'exécution** : permet au groupe d’utilisateurs spécifié d’accéder au mode Développement de la base et d'afficher l'Explorateur d'exécution.

    A noter que :
    -   La définition d’un groupe d’accès en Développement permet également de désactiver l’option **Créer une table** de la boîte de dialogue d’import de données. Pour plus d’informations sur cette boîte de dialogue, reportez-vous à la section [Importer des données depuis des fichiers](https://doc.4d.com/4Dv19/4D/19/Importer-des-donnees-depuis-des-fichiers.300-5416859.fe.html).

    -   Le Super_Utilisateur et l’Administrateur ont toujours accès au mode Développement et à l'Explorateur d'exécution, même s’ils ne font pas explicitement partie du groupe d’accès défini.

-   **Utilisateur par défaut** : lorsqu’un utilisateur est défini dans ce menu, chaque utilisateur ouvrant ou se connectant à la base dispose des privilèges et restrictions d’accès qui ont été assignés à cet utilisateur par défaut. Il n’est alors plus nécessaire de saisir un nom d’utilisateur. De plus, si vous n’avez pas associé de mot de passe à l’utilisateur par défaut, la boîte de dialogue de saisie du mot de passe n’apparaît pas, la base s’ouvre directement. L’intérêt de cette option est de simplifier les accès multiples à la base tout en maintenant un système complet de contrôle des données.

    -   Si vous avez associé un mot de passe à l’utilisateur par défaut, une boîte de dialogue apparaît à l’ouverture de la base, les utilisateurs doivent uniquement saisir un mot de passe.
    -   Si vous n’avez pas associé de mot de passe à l’utilisateur par défaut, aucune boîte de dialogue n’apparaît.**Note** : Vous pouvez “forcer” l’affichage de la boîte de dialogue standard de saisie du mot de passe lorsque le mode “Utilisateur par défaut” est actif, par exemple pour pouvoir vous connecter en tant que Super_Utilisateur ou Administrateur. Pour cela, ouvrez (ou connectez-vous à) la base de données tout en maintenant la touche **Majuscule** enfoncée.

-   **Afficher les utilisateurs dans la fenêtre Mots de passe** : si cette option est cochée, les utilisateurs doivent choisir leur nom dans une liste d’utilisateurs et saisir leur mot de passe dans la boîte de dialogue de saisie des mots de passe. Si cette option n’est pas cochée, les utilisateurs doivent saisir leur nom et leur mot de passe. Pour plus d’informations sur les deux versions de la boîte de dialogue de mots de passe, reportez-vous au paragraphe "Accès aux bases protégées” dans la section [Présentation du contrôle des accès](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html).

    -   **Trier la liste des utilisateurs par ordre alphabétique** (option utilisable uniquement si la précédente est cochée) : lorsque cette option est sélectionnée, la liste des utilisateurs dans la boîte de dialogue de saisie des mots de passe est triée par ordre alphabétique.

-   **Les utilisateurs peuvent changer leur mot de passe** : lorsque cette option est cochée, un bouton **Changer** est affiché dans la boîte de dialogue d’ouverture ou de connexion à la base. Ce bouton permet à l’utilisateur d’accéder à la boîte de dialogue lui permettant de modifier son mot de passe (cf. paragraphe “Modification du mot de passe par l’utilisateur” dans la section [Assurer la maintenance du système](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html)). Si vous le souhaitez, vous pouvez masquer le bouton **Changer** afin de ne pas permettre aux utilisateurs de modifier leur mot du passe. Il suffit pour cela de désélectionner cette option.

## Options

-   **Filtering of commands and project methods in the formula editor and in the 4D View Pro and 4D Write Pro documents**: For security reasons, by default 4D restricts access to the commands, functions and project methods in the [Formula editor](https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html) in Application mode or added to multistyle areas (using [ST INSERT EXPRESSION](https://doc.4d.com/4dv19R/help/command/en/page1281.html)), 4D Write Pro and 4D View Pro documents: only certain 4D functions and project methods that have been explicitly declared using the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command can be used. A l'aide des options suivantes, vous pouvez supprimer complètement ou partiellement ce filtrage.
    -   **Activé pour tous** (par défaut) : L'accès aux commandes, fonctions et méthodes projets est limité pour tous les utilisateurs, y compris au Super Utilisateur et à l'Administrateur.
    -   **Désactivé pour le Super Utilisateur et l'Administrateur** : Cette option accorde, uniquement au Super Utilisateur et à l'Administrateur, un accès complet aux commandes et méthodes 4D. Elle peut être utilisée pour définir un mode d'accès illimité aux commandes et méthodes tout en gardant le contrôle des actions effectuées. En phase de développement, ce mode peut être utilisé pour tester librement toutes les formules, les états, etc. En cours d'exploitation, il peut être utilisé pour mettre en oeuvre des solutions sécurisées permettant un accès temporaire à toutes les commandes et méthodes. Le principe consiste à changer l'utilisateur courant (via la commande [CHANGE CURRENT USER](https://doc.4d.com/4dv19R/help/command/en/page289.html)) avant d'appeler un dialogue ou de démarrer un process d'impression qui requiert un accès total aux commandes, puis de retourner à l'utilisateur initial une fois l'opération terminée. **Note :** Si l'accès complet a été activé à l'aide de l'option précédente, cette option n'aura pas d'effet.
    -   **Désactivé pour tous** : Cette option désactive le contrôle dans les formules. Lorsque cette option est cochée, les utilisateurs ont accès à l'ensemble des commandes, plug-ins et méthodes projets (à l'exception de ceux qui sont invisibles). **Note :** Cette option est prioritaire sur la commande [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html). Lorsqu'elle est cochée, cette commande ne fait rien.

-   **Autoriser les propriétés utilisateur** : Vous devez cocher cette option si vous souhaitez utiliser la fonctionnalité d’externalisation des propriétés utilisateur. Lorsque cette option est cochée, jusqu'à trois boîtes de dialogue sont disponibles pour définir les propriétés : **Propriétés structure**, **Propriétés utilisateur**, et **Propriétés utilisateur pour fichier de données**. Pour plus d'informations, reportez-vous à la section [User settings](overview.md#user-settings).

-   **Exécuter la méthode "Sur événement base hôte" des composants** : La méthode base [Sur événement base hôte](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.fe.html) permet de faciliter les phases d’initialisation et de sauvegarde des composants 4D. Pour des raisons de sécurité, vous devez autoriser explicitement l’exécution de cette méthode dans chaque base hôte. Pour cela, vous devez cocher l'option. Cette option n'est pas cochée par défaut.

    Lorsque cette option est cochée :
    * les composants 4D sont chargés,
    * chaque méthode base [Sur événement base hôte](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.fe.html) des composants (s'il y en a) est appelée par la base hôte,
    * le code de la méthode est exécuté.

    Lorsque cette option n’est pas cochée :
    * les composants 4D sont chargés mais ils doivent gérer eux-mêmes leurs phases d’initialisation et de sauvegarde.
    * le développeur du composant doit publier les méthodes du composant qui doivent être appelées par la base hôte lors de ces phases (démarrage et fermeture)
    * le développeur de la base hôte doit appeler les méthodes appropriées du composant au bon moment (doit être exposé dans la documentation du composant).