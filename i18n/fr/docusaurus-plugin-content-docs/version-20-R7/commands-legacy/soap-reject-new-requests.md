---
id: soap-reject-new-requests
title: SOAP REJECT NEW REQUESTS
slug: /commands/soap-reject-new-requests
displayed_sidebar: docs
---

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Syntax-->**SOAP REJECT NEW REQUESTS** ( *statutRejet* )<!-- END REF-->
<!--REF #_command_.SOAP REJECT NEW REQUESTS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| statutRejet | Boolean | &#8594;  | Vrai si rejet de nouvelles requêtes, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Summary-->La commande **SOAP REJECT NEW REQUESTS** permet d'indiquer si le serveur Web Services accepte ou non de nouvelles requêtes SOAP.<!-- END REF--> 

Dans *rejeterStatut*, passez **Vrai** pour rejeter de nouvelles requêtes SOAP. Passez **Faux** pour les autoriser. 

**Note** : Cette commande ne peut être exécutée que sur 4D Server. Si la méthode appelant la commande est exécutée localement sur un 4D distant ou monoposte, **SOAP REJECT NEW REQUESTS** ne fait rien.

#### Exemple 

Vous souhaitez rejeter les nouvelles requêtes reçues par votre serveur Web Services :

```4d
  //méthode à exécuter sur le serveur
 If(WEB Get server info.SOAPServerStarted)
    SOAP REJECT NEW REQUESTS(True)
 End if
```

#### Voir aussi 

[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  
[WEB Get server info](web-get-server-info.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1636 |
| Thread safe | &check; |
| Interdite sur le serveur ||


