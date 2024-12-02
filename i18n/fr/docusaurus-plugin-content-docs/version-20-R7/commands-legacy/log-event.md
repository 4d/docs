---
id: log-event
title: LOG EVENT
slug: /commands/log-event
displayed_sidebar: docs
---

<!--REF #_command_.LOG EVENT.Syntax-->**LOG EVENT** ( {*typeSortie* ;} *message* {; *importance*} )<!-- END REF-->
<!--REF #_command_.LOG EVENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| typeSortie | Integer | &#8594;  | Type de sortie du message |
| message | Text | &#8594;  | Contenu du message |
| importance | Integer | &#8594;  | Niveau d’importance du message (Windows uniquement) |

<!-- END REF-->

#### Description 

<!--REF #_command_.LOG EVENT.Summary-->La commande **LOG EVENT** vous permet de mettre en place un système personnalisé d'enregistrement des événements internes qui se produisent au cours de l'utilisation de votre application.<!-- END REF--> Vous pouvez ainsi contrôler le déroulement d’une session de travail.

Passez dans le paramètre *message* les informations personnalisées à noter en fonction de l'événement. 

Le paramètre facultatif *typeSortie* vous permet de préciser le canal de sortie emprunté par le *message*. Vous pouvez passer dans ce paramètre une des constantes suivantes, placées dans le thème *Journal d'événements* :

| Constante               | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Into 4D commands log    | Entier long | 3      | Indique à 4D d'inscrire le *message* dans le fichier d’historique des commandes de 4D, si ce fichier a été activé. Ce fichier d'historique peut être activé à l’aide de la commande [SET DATABASE PARAMETER](set-database-parameter.md) (sélecteur 34).<br/>**Note :** Les fichiers d’historique de 4D sont regroupés dans le dossier **Logs** (cf. commande [Get 4D folder](get-4d-folder.md)).   |
| Into 4D debug message   | Entier long | 1      | Indique à 4D d'envoyer le *message* dans l'environnement de débogage du système. Le résultat dépend de la plate-forme :<br/>sous Mac OS : la commande envoie le message à la Consolesous Windows : la commande envoie le message en tant que message de débogage. Pour pouvoir lire ce message, vous devez disposer de Microsoft Visual Studio ou de l’utilitaire DebugView pour Windows (<http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx>)  |
| Into 4D diagnostic log  | Entier long | 5      | Indique à 4D d’inscrire le *message* dans le fichier de diagnostic de 4D, si ce fichier a été activé. <br/>Le fichier de diagnostic peut être activé à l’aide de la commande [SET DATABASE PARAMETER](set-database-parameter.md) (sélecteur 79).     |
| Into 4D request log     | Entier long | 2      | Indique à 4D d'inscrire le *message* dans le fichier d’historique des requêtes de 4D, si ce fichier a été activé  |
| Into system standard outputs | Entier long | 6     | Indique à 4D d'envoyer le *message* dans un flux de sortie standard. Le message est envoyé à **stdout** si *importance* \= Information message ou Warning message et **stderr** si *importance* \= Error message         |
| Into Windows log events | Entier long | 0      | Indique à 4D d'envoyer le *message* vers l’“Observateur d’événements” de Windows. Ce journal reçoit et stocke des messages en provenance des applications en cours d’exécution. Dans ce cas, vous pouvez définir le niveau d'importance du *message* via le paramètre *importance* (cf. ci-dessous).**<br/>Notes :** Pour que cette fonctionnalité soit disponible, le service Observateur d’événements de Windows doit être démarré.Sous Mac OS, la commande ne fait rien avec ce type de sortie. |

Si vous ne passez pas le paramètre *typeSortie*, la valeur 0 (Into Windows log events) est utilisée par défaut.

Vous pouvez attribuer au *message* un niveau d’importance via le paramètre facultatif *importance* afin de faciliter la lecture du journal d’événements. Il existe trois niveaux d’importance : Information, Avertissement et Erreur. 4D vous propose les constantes prédéfinies suivantes :

| Constante           | Type        | Valeur |
| ------------------- | ----------- | ------ |
| Error message       | Entier long | 2      |
| Information message | Entier long | 0      |
| Warning message     | Entier long | 1      |

Si vous ne passez pas le paramètre *importance* ou passez une valeur invalide, la valeur par défaut (0) est utilisée.

:::note

Le paramètre *importance* est utilisé uniquement avec les paramètres *typeSortie* `Into Windows log events`, `Into 4D diagnostic log` et `Into system standard outputs`.

:::

#### Exemple 

Afin de conserver une trace des lancements de votre base sous Windows, vous pouvez écrire, dans la [On Startup database method](on-startup-database-method.md) :

```4d
 LOG EVENT(Into Windows log events;"Démarrage de la base Facturation")
```

A chaque ouverture de la base, cette information sera inscrite dans l’Observateur d’événements de Windows, avec le niveau d’importance 0.

#### Voir aussi 

[SET DATABASE PARAMETER](set-database-parameter.md)  