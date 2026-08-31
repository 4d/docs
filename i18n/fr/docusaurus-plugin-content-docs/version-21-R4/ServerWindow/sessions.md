---
id: sessions
title: Sessions Page
---

La page **Sessions** répertorie toutes les sessions actives connectées au serveur, y compris les sessions Client, Web, REST et SOAP.

![](../assets/en/Admin/server-sessions-1.png)

Le bouton **Sessions** indique, entre parenthèses, le nombre total de sessions actives (ce nombre ne tient pas compte des filtres d'affichage appliqués à la fenêtre).

La page comporte un champ de recherche dynamique, des commandes de filtrage et des boutons d'administration. Vous pouvez modifier l’ordre des colonnes par simple glisser-déposer de la zone d’en-tête des colonnes.

Vous pouvez également trier la liste en cliquant sur l'en-tête d'une colonne. Cliquez plusieurs fois pour basculer entre l'ordre ascendant et l'ordre descendant.

![](../assets/en/Admin/server-sessions-sort-1.png)

## Liste des sessions

Chaque ligne correspond à une session active.

La liste fournit les informations suivantes :

- Icône représentant le type de session (logo Apple pour les sessions client macOS, logo Windows pour les sessions client Windows, globe pour les sessions Web, REST et SOAP). De plus, un indicateur visuel supplémentaire permet de savoir si la session est authentifiée.
- **Origine** : type de session (Client, Web, REST ou SOAP).
- **Nom d'utilisateur** : nom de l'utilisateur 4D connecté, ou l'alias défini à l'aide de la commande [`SET USER ALIAS`](../commands/set-user-alias) le cas échéant. Pour les sessions Web, REST ou SOAP, aucun nom d'utilisateur n'est affiché, sauf si un nom a été associé à la session à l'aide de la propriété `userName` de la fonction [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- **Date de connexion** : date et heure auxquelles la session a été établie.
- **Temps CPU** : temps CPU consommé par la session depuis sa création.
- **Activité** : pourcentage de l'activité du serveur actuellement consacré à la session (valeur dynamique).
- **Statut** : statut de la session. Les sessions client peuvent être **Online**, **[Sleeping](../Desktop/clientServer.md#management-of-sleeping-client-sessions)** ou **[Unreachable](../Desktop/clientServer.md#management-of-unreachable-peer)**. Les sessions Web, REST et SOAP ont toujours le statut **Online**.

Des informations supplémentaires sont disponibles dans le volet de détails lorsqu'une session est sélectionnée.

## Zone détails de la session

Lorsque vous sélectionnez une session, des informations supplémentaires s'affichent dans la zone inférieure.

### Sessions client

Les informations suivantes sont disponibles :

- **Nom utilisateur système** : nom de la session du système d'exploitation ouverte sur la machine distante.
- **Adresse IP** : adresse IP de la machine distante qui a ouvert la session.
- **Nom de machine** : Nom de la machine distante.
- **4D Write Pro** : indique si l'utilisateur de la session appartient à un groupe ayant accès à 4D Write Pro.
- **4D View Pro** : indique si l'utilisateur de la session appartient à un groupe ayant accès à 4D View Pro.

### Sessions REST, Web et SOAP

La zone de détails affiche des informations telles que :

- **Statut Guest** : indique si la session est une session Guest. Les sessions Guest sont des sessions Web non authentifiées.
- **Privilèges** : liste des privilèges associés à la session.
- **Adresse IP** : adresse IP de la machine distante qui a ouvert la session.
- **User agent** : identifie l'application cliente, le navigateur ou le service à l'origine de la session.

### Bouton IP Lookup

Le bouton IP Lookup est activé lorsqu'une adresse IP publique s'affiche. Vous pouvez cliquer sur le bouton pour obtenir la géolocalisation de la session sélectionnée.

Si cette information est disponible, la localisation s'affiche à côté du bouton IP Lookup sous la forme **Ville, Pays**. Sinon, le message **Introuvable** s'affiche.

## Recherche et filtrage

### Barre de recherche

La zone de recherche permet de limiter le nombre de lignes affichées dans la liste à celles qui correspondent au texte saisi. La recherche porte sur les colonnes **Nom utilisateur**, **Origine**, **Nom de la session** et **Adresse IP**.

La liste est mise à jour en temps réel au fur et à mesure que vous saisissez du texte.

Vous pouvez rechercher plusieurs valeurs en les séparant par un point-virgule (`;`). Dans ce cas, les valeurs sont combinées à l'aide de l'opérateur **OU**.

Par exemple, si vous écrivez :

```
John;Mary;REST
```

Seules les lignes contenant **John**, **Mary** ou **REST** dans les colonnes pouvant faire l'objet d'une recherche sont affichées.

### Filtres par type de session

La page Sessions propose également des filtres rapides permettant d'afficher uniquement certains types de sessions.

Les filtres suivants sont disponibles :

- **Sessions comptées**: afficher uniquement les sessions comptabilisées pour la consommation flottante de licences.
- **Clients** : afficher uniquement les sessions client desktop.
- **Web** : afficher uniquement les sessions Web et SOAP.
- **REST** : afficher uniquement les sessions REST.

Les filtres peuvent être activés ou désactivés individuellement, ou combinés avec d'autres filtres, et sont immédiatement appliqués à la liste des sessions.

## Boutons d’administration

Trois boutons d'administration sont disponiles : **Envoyer message** est activé lorsqu'une ou plusieurs sessions Client sont sélectionnées. **Visualiser process** est disponible lorsqu'une seule session, quel que soit son type, est sélectionnée, tandis que l'option **Déconnecter la session** est disponible lorsqu'une ou plusieurs sessions, quel que soit leur type, sont sélectionnées.
Vous pouvez sélectionner plusieurs lignes en appuyant sur la touche **Maj** pour une sélection continue ou **Ctrl** (Windows) / **Commande** (macOS) pour une sélection discontinue.

### Envoyer message

Ce bouton permet d'envoyer un message à la ou aux session(s) **Client** sélectionnée(s). Si aucune session client n'est sélectionnée, le bouton n'est pas actif. Lorsque vous cliquez sur le bouton, une boîte de dialogue apparaît, vous permettant saisir le message. La boîte de dialogue indique également le nombre de sessions client qui recevront le message :

![](../assets/en/Admin/server-message.png)

Le message s'affiche sous forme d'alerte sur les machines distantes concernées.

Vous pouvez effectuer la même action par programmation à l'aide de la commande [`SEND MESSAGE TO REMOTE USER`](../commands/send-message-to-remote-user).

### Visualiser process

Ce bouton permet d'afficher directement dans la [**page Process**](processes.md) les process associés à la session sélectionnée.

La liste des process est automatiquement filtrée en fonction de l'UUID de la session sélectionnée.

Lorsque plusieurs sessions sont sélectionnées, ce bouton est désactivé.

### Déconnecter la session

Ce bouton permet de forcer la déconnexion de la ou des sessions client(s) sélectionnée(s).

Une boîte de dialogue de confirmation s'affiche avant la déconnexion de la session afin de confirmer ou d'annuler cette opération (maintenez la touche **Alt** enfoncée tout en cliquant sur **Déconnecter l'utilisateur** pour vous déconnecter immédiatement sans afficher la boîte de dialogue de confirmation).

Vous pouvez effectuer la même opération par programmation à l'aide de la commande [`DROP REMOTE USER`](../commands/drop-remote-user).
