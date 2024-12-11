---
id: set-timeout
title: SET TIMEOUT
slug: /commands/set-timeout
displayed_sidebar: docs
---

<!--REF #_command_.SET TIMEOUT.Syntax-->**SET TIMEOUT** ( *secondes* )<!-- END REF-->
<!--REF #_command_.SET TIMEOUT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| secondes | Integer | &#8594;  | Nombre de secondes jusqu'au timeout |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET TIMEOUT.Summary-->La commande **SET TIMEOUT** vous permet de définir le temps d'attente maximum pour l'exécution d'une commande de communication série.<!-- END REF--> Si la commande ne se termine pas dans le temps *secondes* qui lui est imparti, la communication série est annulée, l'erreur –9990 est générée, et la variable système OK prend la valeur 0\. Vous pouvez intercepter cette erreur à l'aide d'une méthode installée par la commande [ON ERR CALL](on-err-call.md).

Notez que le délai défini représente la durée totale permise pour que la commande s'exécute, et non le délai d'attente entre chaque caractère reçu. Pour annuler un paramétrage précédent et ne pas spécifier de temps d'attente maximum, passez 0 dans le paramètre *secondes*.

Les commandes de communication série affectées par ce paramétrage sont les suivantes :

* [RECEIVE PACKET](receive-packet.md)
* [RECEIVE RECORD](receive-record.md)
* [RECEIVE VARIABLE](receive-variable.md)

#### Exemple 

L'exemple suivant fixe le port série devant recevoir des données et le timeout. Les données sont lues à l'aide de [RECEIVE PACKET](receive-packet.md). Si les données ne sont pas bien reçues dans le temps défini, une erreur survient :

```4d
  // Ouverture du port série
 SET CHANNEL(MacOS serial port;Speed 9600+Data bits 8+Stop bits one+Parity none)
 SET TIMEOUT(10) // Fixer le timeout à 10 secondes
 ON ERR CALL("INTERCEPTER ERREURS COMMUNICATIONS") // Traiter les interruptions éventuelles
 RECEIVE PACKET(vBuffer;Char(Carriage return)) // Lire jusqu'au retour chariot
 If(OK=0) // Si une erreur survient
    ALERT("Erreur lors de la réception des données.") // Informer l'utilisateur
 Else
    [Personnes]Nom:=vBuffer // Sauvegarder les données dans un champ
 End if
```

#### Voir aussi 

[ON ERR CALL](on-err-call.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 268 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


