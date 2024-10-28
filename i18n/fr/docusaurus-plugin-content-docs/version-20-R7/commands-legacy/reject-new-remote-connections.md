---
id: reject-new-remote-connections
title: REJECT NEW REMOTE CONNECTIONS
slug: /commands/reject-new-remote-connections
displayed_sidebar: docs
---

<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Syntax-->**REJECT NEW REMOTE CONNECTIONS** ( *statutRejet* )<!-- END REF-->
<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| statutRejet | Boolean | &#8594;  | Vrai si rejet des nouvelles connexions, sinon Faux. |

<!-- END REF-->

#### Description 

<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Summary-->La commande **REJECT NEW REMOTE CONNECTIONS** permet d'indiquer si le serveur d'application accepte ou non de nouvelles connexions depuis des 4D distants.<!-- END REF--> 

Dans *statutRejet*, passez **vrai** pour rejeter les nouvelles connexions distantes ou passez **faux** pour les autoriser.

**Note** : Cette commande ne peut être exécutée que sur 4D Server. Si la méthode appelant la commande est exécutée localement sur un 4D distant ou monoposte, **REJECT NEW REMOTE CONNECTIONS** ne fait rien.

#### Exemple 

Vous souhaitez rejeter puis accepter les nouvelles connexions distantes :

```4d
  // Rejetez les nouvelles connexions
 REJECT NEW REMOTE CONNECTIONS(True)
  // Exécutez l'opération de maintenance
 ...
  // Acceptez les nouvelles connexions
 REJECT NEW REMOTE CONNECTIONS(False)
```

#### Voir aussi 

[DROP REMOTE USER](drop-remote-user.md)  
[Application info](application-info.md)  
[SOAP REJECT NEW REQUESTS](soap-reject-new-requests.md)  