---
id: unregister-client
title: UNREGISTER CLIENT
slug: /commands/unregister-client
displayed_sidebar: docs
---

<!--REF #_command_.UNREGISTER CLIENT.Syntax-->**UNREGISTER CLIENT**<!-- END REF-->
<!--REF #_command_.UNREGISTER CLIENT.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.UNREGISTER CLIENT.Summary-->La commande **UNREGISTER CLIENT** “désinscrit” le client 4D de 4D Server.<!-- END REF--> Il doit avoir été préalablement inscrit à l’aide de la commande [REGISTER CLIENT](register-client.md). 

Si le poste client n’était pas inscrit ou si la commande est exécutée sur 4D en mode local, la commande ne fait rien. 

**Note :** Un client 4D est automatiquement désinscrit lorsque l’application quitte. 

#### Exemple 

Reportez-vous à l’exemple de la commande [REGISTER CLIENT](register-client.md).

#### Variables et ensembles système 

Si le client est correctement désinscrit, la variable système OK prend la valeur 1\. Si le client n’était pas inscrit, OK prend la valeur 0.

#### Voir aussi 

[EXECUTE ON CLIENT](execute-on-client.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[REGISTER CLIENT](register-client.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 649 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


