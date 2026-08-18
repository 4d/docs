---
id: service
title: Enregistrer comme service
---

Sous Windows, 4D Server peut être lancé en tant que Service.

Une application 4D Server enregistrée comme service est automatiquement lancée au démarrage de la machine avec le projet courant, avant même l’ouverture d’une session utilisateur. Elle n'est pas fermée lorsque l'utilisateur quitte sa session.

Ce fonctionnement permet de garantir la disponibilité d’une application 4D Server, même en cas d’incident nécessitant le redémarrage de la machine. La maintenance peut être effectuée à distance.

:::note Notes

- Dans une application 4D Server enregistrée en tant que service, le [mode sans interface graphique](../Admin/cli.md) est activé par défaut.
- Pour plus d'informations sur les mécanismes de gestion des services, consultez la documentation Windows.

:::

Pour enregistrer une application 4D Server en tant que service, sélectionnez **Enregistrer l'application comme un Service** dans le [menu **Fichier**](./menus.md#file) de 4D Server. Au prochain démarrage de l'ordinateur, 4D Server sera automatiquement lancé et le projet courant ouvert. You can register any number of projects. Chaque projet ne peut être enregistré qu'une seule fois.

:::note

Sous Windows, cette commande peut apparaître grisée lorsque l'accès aux fonctions de gestion des services est restreint. Dans ce cas, pour pouvoir utiliser cette commande, vous devez lancer 4D Server avec des droits d'administrateur (pour ce faire, cliquez avec le bouton droit de la souris sur l'icône de l'application et sélectionnez la commande **Exécuter en tant qu'administrateur** dans le menu contextuel).

:::

:::warning

Lorsqu'il est enregistré en tant que service, 4D Server est configuré par défaut pour utiliser le "Compte système local". Vous devez changer ce compte et sélectionner un compte utilisateur valide disposant des droits d'accès et des paramètres requis pour utiliser votre application. En particulier, si vous souhaitez effectuer des impressions, vous devez ouvrir la session avec un compte utilisateur disposant de paramètres d'impression par défaut.  Le même problème se pose si vous souhaitez accéder à des volumes réseau. Pour changer de compte d'utilisateur, allez dans **Panneau de configuration > Système et sécurité > Outils d'administration > Services**. Dans la liste des **Services**, effectuez un clic droit sur 4D Server, choisissez l'option **Propriétés**, onglet **Connexion** et définissez le compte sous lequel le service doit s'exécuter (paramétrage utilisé au lancement suivant).

:::

Pour désenregistrer votre application, sélectionnez **Désenregistrer la base courante** dans le menu **Fichier** de 4D Server. Cette commande est grisée si le projet n'est pas enregistré en tant que service.

Pour désenregistrer simultanément tous les projets 4D Server, sélectionnez **Désenregistrer tous les services serveur** dans le menu **Fichier** de 4D Server. Cette commande est grisée si aucun service 4D Server n'est activé.

Vous ne pouvez pas désenregistrer 4D Server à partir du menu de 4D Server si l'application a été lancée comme un service au démarrage. Dans ce cas, les trois commandes de menu sont désactivées. Pour arrêter le service, utilisez le panneau de configuration **Services**.

