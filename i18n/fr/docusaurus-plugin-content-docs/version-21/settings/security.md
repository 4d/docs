---
id: security
title: Page sécurité
---

Cette page regroupe les options relatives à la protection des accès et des données de vos applications desktop.

**Note** : Consultez le document [4D Security guide](https://blog.4d.com/4d-security-guide/) pour une vue d'ensemble des fonctions de sécurité de 4D.

## Accès des utilisateurs distants

> Ces paramètres ne s'appliquent pas aux bases projets ouvertes en monoposte.

- **Accès Développement et Explorateur d'exécution** : permet au groupe d’utilisateurs spécifié d’accéder au mode Développement de la base et d'afficher l'Explorateur d'exécution.

  A noter que :

  - La définition d’un groupe d’accès en Développement permet également de désactiver l’option **Créer une table** de la boîte de dialogue d’import de données. Pour plus d'informations sur cette boîte de dialogue, reportez-vous à [Importer des données depuis des fichiers](https://doc.4d.com/4Dv20/4D/20.2/Importing-data-from-files.300-6750325.en.html).

  - Le Super_Utilisateur et l'Administrateur ont toujours accès à l'environnement de développement et à l'Explorateur d'exécution, même s'ils ne font pas explicitement partie du groupe d'accès spécifié. Pour plus d'information sur les utilisateurs et les groupes d'utilisateurs, veuillez vous référer au chapitre [Utilisateurs et groupes](../Users/handling_users_groups.md).

- **Utilisateur par défaut** : lorsqu’un utilisateur est défini dans ce menu, chaque utilisateur ouvrant ou se connectant à la base dispose des privilèges et restrictions d’accès qui ont été assignés à cet utilisateur par défaut. Il n’est alors plus nécessaire de saisir un nom d’utilisateur. De plus, si vous n’avez pas associé de mot de passe à l’utilisateur par défaut, la boîte de dialogue de saisie du mot de passe n’apparaît pas, la base s’ouvre directement.
  L’intérêt de cette option est de simplifier les accès multiples à la base tout en maintenant un système complet de contrôle des données.

  - Si vous avez associé un mot de passe à l’utilisateur par défaut, une boîte de dialogue apparaît à l’ouverture de la base, les utilisateurs doivent uniquement saisir un mot de passe.
  - Si vous n'avez pas associé de mot de passe à l'Utilisateur par défaut, la boîte de dialogue d'identification de l'utilisateur ne s'affichera pas.**Note:** Vous pouvez “forcer” l'affichage de la boîte de dialogue d'identification de l'utilisateur lorsque le mode “Utilisateur par défaut” est actif, par exemple pour vous connecter en tant qu'Administrateur ou Super_Utilisateur. Pour cela, ouvrez (ou connectez-vous à) la base de données tout en maintenant la touche **Majuscule** enfoncée.

- **Afficher les utilisateurs dans la fenêtre Mots de passe** : si cette option est cochée, les utilisateurs doivent choisir leur nom dans une liste d’utilisateurs et saisir leur mot de passe dans la boîte de dialogue de saisie des mots de passe. Si cette option n’est pas cochée, les utilisateurs doivent saisir leur nom et leur mot de passe. Pour plus d’informations sur les deux versions de la boîte de dialogue de mots de passe, consultez la section "Accès au système" dans [Présentation du contrôle des accès](https://doc.4d.com/4Dv20/4D/20.2/Access-system-overview.300-6750353.en.html).

  - **Trier la liste des utilisateurs par ordre alphabétique** (option utilisable uniquement si la précédente est cochée) : Lorsque cette option est cochée, la liste des utilisateurs dans la boîte de dialogue de saisie des mots de passe est triée par ordre alphabétique.

- **Les utilisateurs peuvent changer leur mot de passe** : lorsque cette option est cochée, un bouton **Changer** est affiché dans la boîte de dialogue d’ouverture ou de connexion à la base. Si vous le souhaitez, vous pouvez masquer le bouton **Changer** afin de ne pas permettre aux utilisateurs de modifier leur mot du passe. Ce bouton permet à l’utilisateur d’accéder à la boîte de dialogue qui peut être utilisée pour changer son mot de passe (pour plus d'informations sur cette boîte de dialogue, consultez la rubrique "Modification du mot de passe par l'utilisateur" dans [Assurer la maintenance du système](https://doc.4d.com/4Dv20/4D/20.2/Ensuring-system-maintenance.300-6750352.en.html)). Il suffit pour cela de désélectionner cette option.

## Options

- **Filtrage des commandes et méthodes de projet dans l'éditeur de formules et dans les documents 4D View Pro et 4D Write Pro** :
  Pour des raisons de sécurité, 4D restreint par défaut l'accès aux commandes, fonctions et méthodes projet dans l'[éditeur de formules](https://doc.4d.com/4Dv20/4D/20.2/Formula-editor.200-6750079.en.html) en mode Application ou ajoutées aux zones multistyles (en utilisant [`ST INSERT EXPRESSION`](../commands-legacy/st-insert-expression.md)), documents 4D Write Pro et 4D View Pro : seules certaines fonctions et méthodes projet 4D qui ont été explicitement déclarées en utilisant la commande [`SET ALLOWED METHODS`](../commands/set-allowed-methods.md) peuvent être utilisées. A l'aide des options suivantes, vous pouvez supprimer complètement ou partiellement ce filtrage.
  - **Activé pour tous** (par défaut) : L'accès aux commandes, fonctions et méthodes projets est limité pour tous les utilisateurs, y compris au Super Utilisateur et à l'Administrateur.
  - **Désactivé pour le Super Utilisateur et l'Administrateur** : Cette option accorde, uniquement au Super Utilisateur et à l'Administrateur, un accès complet aux commandes et méthodes 4D. Elle peut être utilisée pour définir un mode d'accès illimité aux commandes et méthodes tout en gardant le contrôle des actions effectuées. En phase de développement, ce mode peut être utilisé pour tester librement toutes les formules, les états, etc. En cours d'exploitation, il peut être utilisé pour mettre en oeuvre des solutions sécurisées permettant un accès temporaire à toutes les commandes et méthodes. Cela consiste à changer l'utilisateur (via la commande [`CHANGE CURRENT USER`](../commands-legacy/change-current-user.md)) avant d'appeler une boîte de dialogue ou de démarrer un process d'impression qui nécessite un accès complet aux commandes, puis à retourner à l'utilisateur d'origine lorsque l'opération spécifique est terminée.
    **Note :** Si l'accès complet a été activé à l'aide de l'option précédente, cette option n'aura pas d'effet.
  - **Désactivé pour tous** : Cette option désactive le contrôle dans les formules. Lorsque cette option est cochée, les utilisateurs ont accès à l'ensemble des commandes, plug-ins et méthodes projets (à l'exception de ceux qui sont invisibles).
    Lorsque cette option est cochée, les utilisateurs ont accès à l'ensemble des commandes, plug-ins et méthodes projets (à l'exception de ceux qui sont invisibles). Lorsqu'elle est cochée, cette commande ne fait rien.

- **Autoriser les propriétés utilisateur** : Vous devez cocher cette option si vous souhaitez utiliser la fonctionnalité d’externalisation des propriétés utilisateur. Lorsque cette option est cochée, jusqu'à trois boîtes de dialogue sont disponibles pour définir les propriétés : **Propriétés structure**, **Propriétés utilisateur**, et **Propriétés utilisateur pour fichier de données**. Pour plus d'informations, reportez-vous à la section [User settings](../settings/overview.md#user-settings).

- **Exécuter la méthode "Sur événement base hôte" des composants** : La méthode [On Host Database Event](../commands-legacy/on-host-database-event-database-method.md) facilite les phases d'initialisation et de sauvegarde des composants 4D. Pour des raisons de sécurité, vous devez autoriser explicitement l’exécution de cette méthode dans chaque base hôte. Pour cela, vous devez cocher l'option. Cette option n'est pas cochée par défaut.

  Lorsque cette option est cochée :

  - les composants 4D sont chargés,
  - chaque méthode [On Host Database Event](../commands-legacy/on-host-database-event-database-method.md) du composant (s'il y en a) est appelée par le projet hôte,
  - le code de la méthode est exécuté.

  Lorsque cette option n’est pas cochée :

  - les composants 4D sont chargés mais ils doivent gérer eux-mêmes leurs phases d’initialisation et de sauvegarde.
  - le développeur du composant doit publier les méthodes du composant qui doivent être appelées par la base hôte lors de ces phases (démarrage et fermeture)
  - le développeur de la base hôte doit appeler les méthodes appropriées du composant au bon moment (doit être exposé dans la documentation du composant).