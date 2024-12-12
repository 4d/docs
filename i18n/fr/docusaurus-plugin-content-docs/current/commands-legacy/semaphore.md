---
id: semaphore
title: Semaphore
slug: /commands/semaphore
displayed_sidebar: docs
---

<!--REF #_command_.Semaphore.Syntax-->**Semaphore** ( *sémaphore* {; *nbTicks*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Semaphore.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sémaphore | Text | &#8594;  | Sémaphore à tester et à positionner |
| nbTicks | Integer | &#8594;  | Temps d’attente maximum |
| Résultat | Boolean | &#8592; | sémaphore a été correctement créé (Faux) ou sémaphore était déjà créé (Vrai) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Semaphore.Summary-->Un sémaphore est un drapeau visible par chaque poste client ou chaque process sur un même poste.<!-- END REF--> Un sémaphore a simplement pour rôle d'exister ou de ne pas exister. Chaque méthode exécutée par un utilisateur peut tester la présence d'un sémaphore. Un sémaphore ne peut être effacé que par le poste client ou le process qui l'a créé. En créant et en testant des sémaphores, vous permettez aux méthodes de communiquer entre les postes clients et les process. Les sémaphores ne servent pas à protéger l'accès aux enregistrements — cette gestion est effectuée automatiquement par 4D et 4D Server. Les sémaphores ont pour but d'éviter que plusieurs utilisateurs ou process effectuent la même opération en même temps. 

La fonction **Semaphore** retourne Vrai et ne fait rien si *sémaphore* existe. Si *sémaphore* n'existe pas, **Semaphore** le crée et retourne Faux. Un seul utilisateur à la fois peut créer un sémaphore. Si **Semaphore** retourne Faux, cela indique que *sémaphore* n'existait pas, mais cela signifie également que *sémaphore* a été créé et positionné dans le process d'où l'appel a été effectué.

**Semaphore** retourne Faux si le *sémaphore* n'existait pas. La fonction retourne également Faux si le sémaphore avait été déjà positionné par le process d'où l'appel a été effectué. 

Un sémaphore est limité à 255 caractères, métacaractère ($) inclus. Si vous passez une chaîne plus longue, elle est tronquée. Attention, 4D tient compte de la casse des caractères en ce qui concerne les noms de sémaphores (le programme considère par exemple que "MonSémaphore" est différent de "monsémaphore"). 

Le paramètre optionnel *nbTicks* vous permet de spécifier un délai d’attente en ticks (1 tick = 1/60ème de seconde) si *sémaphore* est déjà positionné. Dans ce cas, avant de retourner Vrai, la fonction attend, dans la limite du temps fixé, que *sémaphore* se libère (auquel cas elle retourne Faux). Si le délai expire sans que *sémaphore* ait été libéré, **Semaphore** retourne Vrai.

Il y a deux types de sémaphores dans 4D : les sémaphores locaux et les sémaphores globaux. 

* Un sémaphore local est visible par tous les process d'un même poste et seulement sur ce poste. Vous déclarez un sémaphore local en préfixant son nom avec le signe dollar ($). Les sémaphores locaux permettent de contrôler des opérations entre les différents process exécutés sur le même poste. Par exemple, un sémaphore local peut être utilisé pour gérer les accès à un tableau interprocess appelé par tous les process d'une base de données mono-utilisateur ou d'un poste client.
* Un sémaphore global est visible par tous les utilisateurs et tous les process. Les sémaphores globaux permettent de contrôler des opérations entre les postes clients d'une base multi-utilisateurs.

Le principe de fonctionnement des sémaphores globaux et locaux est identique. Leur différence réside uniquement dans leur portée, c'est-à-dire leur visibilité. En client-serveur, les sémaphores globaux sont visibles pour tous les process de tous les postes clients et du serveur. Un sémaphore local n'est visible que pour les process du poste sur lequel il a été créé. 

Avec 4D, les sémaphores globaux et locaux ont la même portée car il n'y a qu'un seul utilisateur. Cependant, si votre base est utilisée dans les deux environnements, n'hésitez pas à employer des sémaphores globaux et locaux, en fonction de vos besoins. 

**Note :** Les sémaphores locaux sont recommandés lorsque l'usage d'un sémaphore est nécessaire pour gérer un aspect local à un client de l'application, comme par exemple l'interface ou un tableau de valeurs interprocess. L'utilisation d'un sémaphore global provoquerait dans ce cas non seulement des échanges réseau inutiles, mais en plus pourrait affecter inutilement d'autres postes clients. Le sémaphore local évitera ces effets indésirables.

#### Exemple 1 

Le code type d'utilisation d'un sémaphore est le suivant :

```4d
 While(Semaphore("MonSemaphore";300))
    IDLE
 End while
  // placer ici le code protégé par le sémaphore
 CLEAR SEMAPHORE("MonSemaphore")
```

#### Exemple 2 

Dans l'exemple suivant, vous souhaitez empêcher que deux utilisateurs effectuent simultanément une mise à jour globale des prix dans une table \[Produits\]. Pour cela, des sémaphores sont utilisés :

```4d
 If(Semaphore("MAJPrix")) // Essai de création du sémaphore
    ALERT("Un autre utilisateur est déjà en train de mettre à jour les prix. Essayez plus tard.")
 Else
    MAJdesPrix // Méthode de mise à jour des prix
    CLEAR SEMAPHORE("MAJPrix")) // Effacer le sémaphore
 End if
```

#### Exemple 3 

L'exemple suivant illustre l'utilisation d'un sémaphore local. Dans une base comportant plusieurs process, vous souhaitez maintenir une liste de "Choses à faire". Vous envisagez de la maintenir à jour dans un tableau interprocess et non dans une table. Vous devez empêcher les accès simultanés à l'aide d'un sémaphore. Dans ce cas, il vous suffit d'utiliser un sémaphore local car la liste "Choses à faire" est pour votre utilisation personnelle.

Le tableau interprocess est initialisé dans la méthode base Sur ouverture :

```4d
 ARRAY TEXT(<>ListeAFaire;0) // La liste de choses à faire est vide
```

Voici la méthode utilisée pour ajouter des éléments à la "liste des choses à faire" :

```4d
  // Méthode projet AJOUTER LISTE A FAIRE
  // AJOUTER LISTE A FAIRE (Texte)
  // AJOUTER LISTE A FAIRE (Elément la liste à faire)
 
 var $1 : Text // Paramètre passé à la commande
 If(Not(Semaphore("$AccèsListe";300))) // Attendre 5 secondes si un sémaphore existe déjà
    $vlElem:=Size of array(<>ListeAFaire)+1
    INSERT IN ARRAY(<>ListeAFaire;$vlElem)
    <>ListeAFaire{$vlElem}:=$1
    CLEAR SEMAPHORE("$AccèsListe") // Effacer le sémaphore
 End if
```

Vous pouvez appeler cette méthode depuis n'importe quel process. 

#### Exemple 4 

Cette méthode permet de ne pas exécuter une méthode si le sémaphore est posé ; la méthode informe la méthode d'appel avec un code d'erreur et un texte en clair.

Syntaxe :   

```4d
 $L_Erreur:=Semaphore_proof(->$T_Text_error)
```

```4d
  // Structure de protection par sémaphore
 var $0 : Integer
 var $1 : Pointer // message d'erreur
 
   // Début de la méthode
 var $L_MyError : Integer
 $L_MyError:=1
 
 var $T_Sema_local : Text
 $T_Sema_local:="$tictac"
 
 If(Semaphore($T_Sema_local;300))
      // On a attendu 300 ticks mais le sémaphore
      // n'a pas été libéré par celui qui l'avait posé :
      // on arrive ici
    $L_MyError:=-1
 
 Else
 
        // Cette méthode n'est exécutée que par un process à la fois
 
        // Nous avons posé le sémaphore en même temps que nous entrions
        // il n'y a que nous qui pouvons le supprimer
 
        // Faire quelque chose
          ...
        // Finir en effaçant le sémaphore
    CLEAR SEMAPHORE($T_Sema_local)
 End if
 
 var $T_Message : Text
 If($L_MyError=-1)
    $T_Message:="Le sémaphore "+$T_Sema_local+" a bloqué l'accès à la suite du code"
 Else
    $T_Message:="OK"
 End if
 
 $0:=$L_MyError
 $1->:=$T_Message  // la méthode d'appel reçoit un code d'erreur et une explication en clair
```

#### Voir aussi 

[CLEAR SEMAPHORE](clear-semaphore.md)  
*Sémaphores et signaux*  
[Test semaphore](test-semaphore.md)  