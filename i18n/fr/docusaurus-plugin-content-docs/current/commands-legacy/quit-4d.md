---
id: quit-4d
title: QUIT 4D
slug: /commands/quit-4d
displayed_sidebar: docs
---

<!--REF #_command_.QUIT 4D.Syntax-->**QUIT 4D** {( *délai* )}<!-- END REF-->
<!--REF #_command_.QUIT 4D.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| délai | Integer | &#8594;  | Délai (secondes) avant que le serveur ne quitte |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUIT 4D.Summary-->La commande **QUIT 4D**  vous permet de quitter l'application 4D courante et de retourner sur le Bureau du système d'exploitation.<!-- END REF--> 

Le mécanismes mis en jeu par la commande sont différents suivant qu'elle est exécutée sur 4D (mode local ou distant) ou 4D Server (procédure stockée). 

##### Avec 4D en mode local ou distant 

Après un appel à **QUIT 4D**, l'exécution du process courant est stoppée, puis 4D effectue les opérations suivantes :

* Si une [On Exit database method](on-exit-database-method.md) existe, 4D l'exécute dans un nouveau process local. Par exemple, vous pouvez utiliser cette méthode base pour informer les autres process, via la communication interprocess, qu'ils doivent être fermés (s'ils sont en saisie de données) ou stopper l'exécution des opérations démarrées dans la [On Startup database method](on-startup-database-method.md) (connexion de 4D à un autre serveur de bases de données). Notez que 4D quittera dans tous les cas : la [On Exit database method](on-exit-database-method.md) peut assurer le nettoyage et la fermeture de toutes les opérations que vous voulez, mais la fermeture de la base est inéluctable.
* S'il n'existe pas de [On Exit database method](on-exit-database-method.md), 4D ferme tous les process un par un, sans distinction.

Si l'utilisateur est en saisie de données, les enregistrements seront annulés et non validés.   
Si vous voulez permettre à l'utilisateur de sauvegarder ses modifications effectuées dans les fenêtres du process courant, vous pouvez utiliser la communication interprocess pour indiquer à tous les autres process utilisateur que la base est sur le point d'être quittée. Pour cela, vous pouvez adopter deux stratégies :

* Effectuer ces opérations depuis le process courant avant d'appeler **QUIT 4D**.
* Traiter ces opérations depuis la [On Exit database method](on-exit-database-method.md).

Une troisième stratégie est également possible. Avant d'appeler **QUIT 4D**, vous testez si une fenêtre nécessite une validation. Si c'est le cas, vous demandez à l'utilisateur de valider ou d'annuler cette fenêtre puis de choisir Quitter de nouveau. Cependant, du point de vue purement "interface utilisateur", les deux premières solutions sont préférables.

**Note :** Le paramètre *délai* n'est pas utilisable avec 4D en mode local ou distant.

##### Avec 4D Server (procédure stockée) 

La commande **QUIT 4D** peut être exécutée sur le poste serveur, dans une procédure stockée.   
Dans ce cas, elle admet le paramètre optionnel *délai*. Ce paramètre permet d’allouer à 4D Server un délai d’attente avant que l’application ne quitte réellement, laissant ainsi aux postes clients le temps de se déconnecter. Vous devez passer dans *délai* une valeur en secondes.   
Ce paramètre n’est pris en compte que dans le cadre d’une exécution sur le poste serveur. Avec 4D en mode local ou distant, il est ignoré.   
Si vous ne passez pas le paramètre *délai*, 4D Server attendra que tous les postes clients soient déconnectés avant de quitter.   
A la différence de 4D, le traitement de **QUIT 4D** par 4D Server est asynchrone : la méthode dans laquelle la commande est appelée n’est pas interrompue après son exécution. 

Si une *On Server Shutdown Database Method* existe, elle est exécutée à l’issue du délai défini par le paramètre *délai*, ou de la déconnexion de tous les clients, suivant vos paramétrages. 

L’action de la commande **QUIT 4D** utilisée dans une procédure stockée est équivalente à celle de la commande **Quitter** du menu **Fichier** de 4D Server : elle provoque l’apparition, sur chaque poste client, d’une boîte de dialogue signalant que le serveur est sur le point de quitter. 

#### Exemple 

La méthode projet suivante est associée à la commande **Quitter** du menu **Fichier**.

```4d
  // Méthode projet M_QUITTER
 
 CONFIRM("Etes-vous certain de vouloir quitter ?")
 If(OK=1)
    QUIT 4D
 End if
```

#### Voir aussi 

[On Exit database method](on-exit-database-method.md)  