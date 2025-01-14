---
id: post-outside-call
title: POST OUTSIDE CALL
slug: /commands/post-outside-call
displayed_sidebar: docs
---

<!--REF #_command_.POST OUTSIDE CALL.Syntax-->**POST OUTSIDE CALL** ( *process* )<!-- END REF-->
<!--REF #_command_.POST OUTSIDE CALL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro du process |

<!-- END REF-->

#### Note de compatibilité 

<!--REF #_command_.POST OUTSIDE CALL.Summary-->Cette commande était nommée **CALL PROCESS** dans les versions précédentes de 4D.<!-- END REF--> 

#### Description 

**POST OUTSIDE CALL** appelle le formulaire affiché dans la fenêtre au premier plan de *process*. 

**Important :** **POST OUTSIDE CALL** ne fonctionne qu'avec des process tournant sur la même machine.

Si vous appelez un process qui n'existe pas, la commande ne fait rien. 

Si *process* (le process appelé) n'a aucune fenêtre ou si aucun formulaire n'est affiché, rien ne se passe. Le formulaire affiché dans le process appelé reçoit un événement On Outside Call. Cet événement doit avoir été sélectionné pour le formulaire dans la fenêtre des **propriétés de formulaire** en mode Développement, et vous devez le traiter dans la méthode formulaire. Si l'événement n'est pas sélectionné ou géré dans la méthode formulaire, la commande ne fait rien.

**Note :** La réception de l'événement On Outside Call dans un formulaire entrée provoque le changement du contexte de saisie du formulaire. En particulier, si un champ était en cours de modification, l'événement formulaire On Data Change est généré. 

Le process appelant (dans lequel la commande **POST OUTSIDE CALL** est exécutée) n'attend pas : **POST OUTSIDE CALL** a un effet immédiat. Il est de votre ressort d'écrire, si nécessaire, une boucle d'attente pour traiter une éventuelle réponse du process appelé à l'aide des variables interprocess ou des variables process (réservées à cette utilisation) pouvant être lues et écrites entre les deux process avec les commandes [GET PROCESS VARIABLE](get-process-variable.md) et [SET PROCESS VARIABLE](set-process-variable.md). 

Si vous voulez établir une communication entre des process qui n'affichent pas de formulaires, utilisez les commandes [GET PROCESS VARIABLE](get-process-variable.md) et [SET PROCESS VARIABLE](set-process-variable.md).

**POST OUTSIDE CALL** accepte la syntaxe alternative **POST OUTSIDE CALL**(-1). Pour ne pas ralentir l'exécution d'une méthode, 4D ne redessine pas les variables interprocess à chaque fois qu'elles sont modifiées. Si vous passez -1 au lieu du numéro du process dans le paramètre *process* de la commande **POST OUTSIDE CALL**, toutes les variables interprocess affichées dans toutes les fenêtres de tous les process seront mises à jour et redessinées.

#### Exemple 

Reportez-vous à l'exemple de la section [Semaphore](semaphore.md).

#### Voir aussi 

[Form event code](../commands/form-event-code.md)  
[GET PROCESS VARIABLE](get-process-variable.md)  
[SET PROCESS VARIABLE](set-process-variable.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 329 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


