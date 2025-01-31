---
id: register-client
title: REGISTER CLIENT
slug: /commands/register-client
displayed_sidebar: docs
---

<!--REF #_command_.REGISTER CLIENT.Syntax-->**REGISTER CLIENT** ( *nomClient* {; *période*}{; *} )<!-- END REF-->
<!--REF #_command_.REGISTER CLIENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomClient | Text | &#8594;  | Nom de la session cliente 4D |
| période | Integer | &#8594;  | *** Ignoré depuis la version 11.3 *** |
| * | Opérateur | &#8594;  | Process local |

<!-- END REF-->

#### Description 

<!--REF #_command_.REGISTER CLIENT.Summary-->La commande **REGISTER CLIENT** “inscrit” un poste client 4D sous le nom *nomClient* auprès de 4D Server, afin de permettre que d’autres clients ou éventuellement 4D Server (par l’intermédiaire de procédures stockées) puissent y exécuter des méthodes à l’aide de la commande [EXECUTE ON CLIENT](execute-on-client.md).<!-- END REF--> Une fois inscrit, un client 4D peut donc exécuter une ou plusieurs méthodes pour le compte d’autres clients.

**Notes :** 

* Vous pouvez également inscrire automatiquement chaque poste client qui se connecte à 4D Server via l'option “Inscrire les clients au démarrage pour Exécuter sur client” dans la boîte de dialogue des Préférences (cf. manuel Mode Développement).
* Lorsqu’elle est utilisée avec 4D en mode local, cette commande ne fait rien.
* Plusieurs postes clients 4D peuvent avoir le même nom d’inscription.

A l’issue de l’exécution de la commande, un process, nommé *nomClient*, est créé sur le poste client. Ce process ne peut être détruit que par la commande [UNREGISTER CLIENT](unregister-client.md).   
Si le paramètre optionnel *\** est passé, le process créé est local (4D ajoute automatiquement le signe $ au nom du process). Sinon, il est global. 

**Note de compatibilité :** Depuis la version 11.3 de 4D, les mécanismes de communication serveur/client ont été optimisés. Désormais, le serveur envoie directement aux clients inscrits les requêtes d'exécution lorsque c'est nécessaire (technologie "push"). Le principe précédent selon lequel les clients interrogeaient périodiquement le serveur n'est plus utilisé. Le paramètre *période* est ignoré lorsqu'il est passé.

Une fois la commande exécutée, il n’est pas possible de modifier “à la volée” le nom du client 4D. Pour cela, il est nécessaire d’appeler la commande [UNREGISTER CLIENT](unregister-client.md) puis d’exécuter à nouveau **REGISTER CLIENT**.

#### Exemple 

Les méthodes suivantes permettent de réaliser une petite messagerie entre les postes clients inscrits. 

1\. La méthode INSCRIPTION permet d’inscrire un client 4D et de le tenir prêt à recevoir un message de la part d’un autre client 4D :

```4d
  //Méthode INSCRIPTION
  //Il faut se désinscrire avant de s’inscrire sous un autre nom
 UNREGISTER CLIENT
 Repeat
    vNomPseudo:=Request("Entrez votre nom :";"Utilisateur";"OK";"Annuler")
 Until((OK=0)|(vNomPseudo#""))
 If(OK=0)
    ... // Ne rien faire
 Else
    REGISTER CLIENT(vNomPseudo;*)
 End if
```

2\. L’instruction suivante permet de connaître les clients inscrits. Elle peut être placée dans la :

```4d
  // Méthode base Sur ouverture
 PrListeClient:=New process("Liste_4DClients";32000;"Liste d'inscrits")
```

3\. La méthode Liste\_4DClients permet de récupérer tous les clients 4D inscrits et les personnes acceptant de recevoir des messages :

```4d
  // Méthode Liste_4DClients
 If(Application type=4D mode distant)
  // Le code ci-dessous n’est valable qu’en mode client-serveur
    $Ref:=Open window(100;100;300;400;-(Palette window+Has window title);"Liste d'inscrits")
    Repeat
       GET REGISTERED CLIENTS($ListeClient;$ListeCharge)
  //Récupération des clients inscrits dans $ListeClient
       ERASE WINDOW($Ref)
       GOTO XY(0;0)
       For($p;1;Size of array($ListeClient))
          MESSAGE($ListeClient{$p}+Char(Carriage return))
       End for
  //Afficher chaque seconde
       DELAY PROCESS(Current process;60)
    Until(False) // Boucle infinie
 End if
```

4\. La méthode Envoyer\_Message permet d’envoyer un message à un autre client 4D inscrit. 

```4d
  // Méthode Envoyer_Message
 $Destinataire:=Request("Destinataire du message :";"")
  // Saisir le nom d'une des personnes visibles dans la fenêtre générée par la méthode base Sur ouverture
 If(OK#0)
    $Message:=Request("Message :") // Contenu du message
    If(OK#0)
       EXECUTE ON CLIENT($Destinataire;"Afficher_Message";$Message) // Envoi du message
    End if
 End if
```

5\. La méthode Afficher\_Message affiche le message sur le poste client :

```4d
  // Méthode Afficher_Message
 var $1 : Text
 ALERT($1)
```

6\. Enfin, cette méthode permet à un poste client de n’être plus visible par les autres clients 4D et ne plus recevoir de message :

```4d
  // Méthode DÉSINSCRIPTION :
 UNREGISTER CLIENT
```

#### Variables et ensembles système 

Si le poste client est correctement inscrit, la variable système OK prend la valeur 1\. Si le poste était déjà inscrit, la commande ne fait rien et OK prend la valeur 0.

#### Voir aussi 

[EXECUTE ON CLIENT](execute-on-client.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[UNREGISTER CLIENT](unregister-client.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 648 |
| Thread safe | &cross; |
| Modifie les variables | OK |


