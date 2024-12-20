---
id: call-worker
title: CALL WORKER
slug: /commands/call-worker
displayed_sidebar: docs
---

<!--REF #_command_.CALL WORKER.Syntax-->**CALL WORKER** ( *process* ; *formule* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.CALL WORKER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Text, Integer | &#8594;  | Nom ou numéro du process worker |
| formule | Object, Text | &#8594;  | Objet Formula ou Nom de la méthode projet |
| param | Expression | &#8594;  | Paramètre(s) passé(s) à la méthode |

<!-- END REF-->

#### Description 

<!--REF #_command_.CALL WORKER.Summary-->La commande **CALL WORKER** crée ou appelle le process worker dont vous avez passé le nom ou le numéro dans *process* et demande l’exécution du code désigné par la *formule* dans son contexte avec le ou les paramètre(s) optionnel(s) spécifié(s) dans *param*.<!-- END REF-->

La commande **CALL WORKER** encapsule *param* dans un message qu'elle envoie dans la boîte aux lettres du worker. Pour plus d'informations sur les process workers, reportez-vous à la section *A propos des workers*.

Dans le paramètre *process*, vous passez soit le nom soit le numéro du process worker :

* Si vous passez le numéro d'un process qui n'existe pas, ou si le process spécifié n'a pas été créé par **CALL WORKER** ni par 4D lui-même (tel quel le process principal de l’application), **CALL WORKER** ne fait rien.
* Si vous passez le nom d'un process qui n'existe pas, un nouveau process worker est créé.

**Note :** Le **process principal**, créé par 4D pour l'interface utilisateur et le mode application à l'ouverture de la base, est un process worker et peut être appelé par **CALL WORKER**. Le nom de ce process pouvant varier en fonction de la langue de 4D, il est préférable de le désigner par son numéro (toujours 1) lorsque vous utilisez **CALL WORKER**.

Le process worker est affiché dans la liste des process de l'Explorateur d'exécution et est retourné par la commande [Process info](../commands/process-info.md) lorsqu'elle est appliquée à ce process.

Dans le paramètre *formule*, vous désignez le code 4D que vous souhaitez exécuter dans le contexte du process worker. Vous pouvez passer soit : 

* un objet **formula** (voir *Objets Formula*). Les objets formula peuvent encapsuler toute expression exécutable, y compris les fonctions et les méthodes projet ;
* une **chaîne** contenant le nom d'une méthode projet.  
**Note :** Il n'est pas possible de passer une chaîne vide dans *méthode* lorsque la commande appelle le process principal (process n°1), puisqu'il n'est pas démarré via une méthode projet. Par conséquent, **CALL WORKER*(1;"")* ne fait rien.

Vous pouvez aussi passer des paramètres à la formule en utilisant un ou plusieurs paramètres *param*. Vous pouvez utiliser des *paramètres séquentiels* ou, si l'expression de la formule est une fonction ou une méthode projet, des *paramètres nommés*. Lors de l'exécution dans le contexte du formulaire, la formule du process reçoit les valeurs du paramètre soit dans les paramètres nommés soit dans *$1*, *$2*, et ainsi de suite. N'oubliez pas que des tableaux ne peuvent pas être passés en paramètre Notez qu'un tableau ne peut pas être passé comme paramètre à une méthode. Par ailleurs, dans le contexte de la commande **CALL WORKER**, les considérations suivantes doivent être prises en compte :

* Les pointeurs vers les tables ou les champs sont autorisés.
* Les pointeurs vers les variables, notamment les variables locales ou les variables process, ne sont pas recommandés car ils peuvent être indéfinis au moment de leur accès par la méthode du process.
* Les paramètres standard de type objet ou collection sont passés **par copie**, c'est-à-dire que 4D créera une copie de l'objet ou de la collection dans le process de destination si le worker est dans un process autre que celui qui appelle la commande **CALL WORKER**. Dans ce contexte, si vous souhaitez passer un paramètre objet ou collection **par référence**, vous devez utiliser un objet ou une collection partagé(e) (voir *Objets partagés et collections partagées*).

Un process worker reste actif jusqu’à la fermeture de l'application ou jusqu'à ce que la commande [KILL WORKER](kill-worker.md) soit appelée explicitement pour ce process. Pensez à appeler cette commande une fois que le process worker n'est plus utile afin de libérer l'espace mémoire. 

#### Exemple 

Dans un formulaire, un bouton démarre un calcul, par exemple des statistiques pour l'année sélectionnée. Ce bouton crée ou appelle un process worker qui effectue le calcul des données tandis que l'utilisateur peut continuer à travailler dans le formulaire.

Voici la méthode du bouton :

```4d
  //appelle le process worker vNomWorker avec le paramètre
 var $vAnn: éeInteger
 $vAnnée:=2015 //peut être sélectionné par l’utilisateur dans le formulaire
 CALL WORKER("monWorker";Formula(workerMethod);vAnnée;Current form window)
```

Voici le code de *méthodeWorker* :

```4d
  //voici la méthode du worker
  //peut être préemptif ou coopératif
 #DECLARE($vAnnéeInteger;$fenetreInteger) //référence de l'année et de la fenêtre
 var $vR: ésultatStatistiquesObject //stockage de résultats statistiques
 ... //calcul des statistiques
  //une fois le calcul terminé, rappel du formulaire avec les valeurs calculées
  //$vRésultatStatistiques peut afficher les résultats dans le formulaire
 CALL FORM($fenetre;Formula(affichageStats);vRésultatStatistiques)
```

#### Voir aussi 

*A propos des workers*  
[CALL FORM](../commands/call-form.md)  
[Current process name](current-process-name.md)  
[KILL WORKER](kill-worker.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1389 |
| Thread safe | &check; |


