---
id: execute-on-client
title: EXECUTE ON CLIENT
slug: /commands/execute-on-client
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE ON CLIENT.Syntax-->**EXECUTE ON CLIENT** ( *nomClient* ; *nomMéthode* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.EXECUTE ON CLIENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomClient | Text | &#8594;  | Nom d’inscription du 4D Client |
| nomMéthode | Text | &#8594;  | Nom de la méthode à exécuter |
| param | &#8594;  | Paramètre(s) de la méthode |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.EXECUTE ON CLIENT.Summary-->La commande **EXECUTE ON CLIENT** provoque l’exécution de la méthode *nomMéthode*, avec, éventuellement, le(s) paramètre(s) *param1.<!-- END REF-->.. paramN*, sur le ou les 4D Client inscrit(s) sous le nom *nomClient*. Le nom d’inscription du ou des 4D Client est défini par la commande [REGISTER CLIENT](register-client.md). 

Cette commande peut être appelée depuis un 4D Client ou une procédure stockée sur 4D Server.   
Si la méthode admet des paramètres, passez-les après le nom de la méthode.

L’exécution de la méthode sur le 4D Client s’effectue dans un process créé automatiquement sur le poste client, et portant le nom d’inscription du 4D Client.

Si cette commande est appelée plusieurs fois de suite pour un même 4D Client, les ordres d’exécution seront empilés. Par conséquent, les méthodes seront traitées les unes à la suite des autres : les exécutions sont asynchrones. Plus l’empilement est grand, plus la “charge de travail” est grande pour le 4D Client. Vous pouvez connaître l’état de la charge de travail de chaque client à l’aide de la commande [GET REGISTERED CLIENTS](get-registered-clients.md).

**Note :** L’empilement des ordres d’exécutions ne peut être modifié ou stoppé, sauf si le 4D Client est désinscrit à l’aide de la commande [UNREGISTER CLIENT](unregister-client.md).

Il est possible d’exécuter simultanément la même méthode sur plusieurs ou sur la totalité des 4D Clients inscrits : pour cela, passez le caractère joker (@) dans le paramètre *nomClient*.

#### Exemple 1 

Vous souhaitez exécuter sur le poste client “Client1” la méthode “GénéreNums”, comportant trois paramètres :

```4d
 EXECUTE ON CLIENT("Client1";"GénéreNums";12;$a;"Text")
```

#### Exemple 2 

Vous souhaitez que tous les clients inscrits exécutent la méthode “VideTemp” :

```4d
 EXECUTE ON CLIENT("@";"VideTemp")
```

#### Exemple 3 

Reportez-vous à l’exemple de la commande [REGISTER CLIENT](register-client.md).

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si 4D Server a correctement reçu la requête d’exécution d’une méthode — cela ne garantit pas toutefois la bonne exécution de la méthode sur le 4D Client.

#### Voir aussi 

[Execute on server](execute-on-server.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[REGISTER CLIENT](register-client.md)  
[UNREGISTER CLIENT](unregister-client.md)  