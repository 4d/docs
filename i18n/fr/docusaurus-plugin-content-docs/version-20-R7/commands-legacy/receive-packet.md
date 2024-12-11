---
id: receive-packet
title: RECEIVE PACKET
slug: /commands/receive-packet
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE PACKET.Syntax-->**RECEIVE PACKET** ( {*docRef* ;} *réceptVar* ; stopCar | nbOctets )<!-- END REF-->
<!--REF #_command_.RECEIVE PACKET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Numéro de référence de document ou canal courant (port série ou document) |
| réceptVar | Text, Blob | &#8592; | Variable devant recevoir les données |
| stopCar &#124; nbOctets | Chaîne, Entier long | &#8594;  | Caractère(s) au(x)quel(s) stopper la réception des données ou Nombre d'octets à recevoir |

<!-- END REF-->

#### Description 

<!--REF #_command_.RECEIVE PACKET.Summary-->La commande **RECEIVE PACKET** lit des caractères depuis un port série ou un document.<!-- END REF-->

Si *docRef* est spécifié, la commande récupère des données depuis un document ouvert par la fonction [Open document](open-document.md), [Create document](create-document.md) ou [Append document](append-document.md). Si *docRef* est omis, la commande récupère des données depuis un port série ou un document ouvert par la commande [SET CHANNEL](set-channel.md). 

Dans tous les cas, les caractères lus sont retournés dans la variable *réceptVar*, qui doit être une variable de type Texte, Alpha ou BLOB. Si les données ont été envoyées par la commande [SEND PACKET](send-packet.md), le type doit correspondre à celui du paquet envoyé.

**Notes**

* Si le paquet reçu est de type BLOB, la commande ne tient pas compte du jeu de caractères éventuellement défini par la commande [USE CHARACTER SET](use-character-set.md). Le BLOB est retourné sans aucune modification.
* Si le paquet reçu est de type texte, la commande **RECEIVE PACKET** prend en charge les BOM (Byte Order Mark). Dans ce cas, si le jeu de caractères courant est de type Unicode (UTF-8, UTF-16 ou UTF-32), 4D tente d’identifier une BOM parmi les premiers octets reçus. Si elle est détectée, elle est filtrée de la variable *réceptVar* et 4D utilise le jeu de caractères qu’elle définit au lieu du jeu de caractères courant.

Si vous voulez recevoir un nombre prédéfini d'octets, passez ce nombre dans le paramètre *nbOctets*. Si la variable *réceptVar* est de type Texte, vous pouvez lire en un seul appel jusqu'à 2 Go de texte (limite théorique). 

Si vous voulez recevoir des données jusqu'à ce qu'une chaîne de caractères (comportant un ou plusieurs caractères) soit lue, passez-la dans le paramètre *stopCar* (la chaîne n'est pas retournée dans *réceptVar*).   
Dans ce cas, si la chaîne de caractères spécifiée par *stopCar* n'est pas trouvée :

* lorsque **RECEIVE PACKET** lit un document, l'exécution de la commande se terminera à la fin du document.
* lorsque **RECEIVE PACKET** lit des données en provenance du port série, la commande s'exécutera indéfiniment jusqu'à ce que le délai d'attente (s'il est fixé) soit écoulé (cf. la commande [SET TIMEOUT](set-timeout.md)) ou que l'utilisateur interrompe la réception (voir ci-dessous).

Pendant l'exécution d'un **RECEIVE PACKET**, l'utilisateur peut interrompre l'opération en appuyant sur les touches **Ctrl**+**Alt**+**Maj** (sous Windows) ou **Commande**+**Option**+**Maj** (sous Mac OS). Cette interruption génère une erreur -9994 que vous pouvez intercepter à l'aide d'une méthode installée par la commande [ON ERR CALL](on-err-call.md). Généralement, vous devez gérer les interruptions d'une réception uniquement lors d'une communication série. 

Lors de la lecture d'un document, le premier **RECEIVE PACKET** commence par lire le début du document. La lecture des paquets suivants débute au caractère situé immédiatement après le dernier octet lu.

**Note :** Ce fonctionnement est valide avec un document ouvert par [SET CHANNEL](set-channel.md). Cependant, pour un document ouvert par [Open document](open-document.md), [Create document](create-document.md) ou [Append document](append-document.md), vous pouvez aussi utiliser les commandes [Get document position](get-document-position.md) et [SET DOCUMENT POSITION](set-document-position.md)pour connaître et modifier la position à laquelle, dans le document, la prochaine écriture ([SEND PACKET](send-packet.md)) ou lecture (**RECEIVE PACKET**) aura lieu.

En cas de tentative de lecture après la fin d'un document, **RECEIVE PACKET** retourne les données lues jusqu'à ce point et la variable système OK prend la valeur 1\. Les **RECEIVE PACKET** suivants retourneront une chaîne vide et OK prendra la valeur zéro.

#### Exemple 1 

L'exemple suivant lit 20 caractères depuis un port série et les place dans la variable RécupVingt :

```4d
 RECEIVE PACKET(RécupVingt;20)
```

#### Exemple 2 

L'exemple suivant lit des données depuis le document référencé par la variable MonDoc et les place dans la variable *vData*. La commande récupère les données jusqu'à ce qu'elle rencontre un retour chariot :

```4d
 RECEIVE PACKET(MonDoc;vData;Char(Carriage return))
```

#### Exemple 3 

L'exemple suivant lit des données du document référencé par la variable MonDoc et les place dans la variable *vData*. La commande récupère les données jusqu'à ce qu'elle rencontre une balise HTML de fin de tableau (*</TD>*) : 

```4d
 RECEIVE PACKET(MonDoc;vData;"")
```

#### Exemple 4 

L'exemple suivant lit des données d'un document et les place dans des champs. Les données sont stockées dans des champs de longueur fixe. La méthode fait appel à une sous-routine pour éliminer les espaces superflus (situés derrière les valeurs). Le code de la sous-routine est présenté après la méthode : 

```4d
 $Doc :=Open document("";"TEXT") // Ouverture d'un document de type Texte
 If(OK=1) // Si le document est ouvert…
    Repeat // Boucle jusqu'à ce qu'il n'y ait plus de données
       RECEIVE PACKET($Doc;$Var1;15) // Lecture de 15 caractères
       RECEIVE PACKET($Doc;$Var2;15) // Même chose pour le second champ
       If(OK=1) // Si ce n'est pas la fin du document…
          CREATE RECORD([Personnes]) // Créer un nouvel enregistrement
          [Personnes]Prénom:=Elimine($Var1) // Sauvegarder le prénom
          [Personnes]Nom:=Elimine($Var2) // Sauvegarder le nom
          SAVE RECORD([Personnes]) // Sauvegarder l'enregistrement
       End if
    Until(OK=0)
    CLOSE DOCUMENT($Doc) // Fermeture du document
 End if
```

Les espaces superflus derrière les valeurs sont éliminés par la méthode suivante, appelée Elimine : 

```4d
 For($i;Length($1);1;-1) // Boucle sur la fin de la chaîne d'où démarrer
    If($1[[$i]]#" ") // Si ce n'est pas un espace…
       $i :=-$i  // Forcer la boucle à stopper
    End if
 End for
 $0:=Delete string($1;-$i;Length($1)) // Suppression des espaces
```

#### Variables et ensembles système 

Après un appel à **RECEIVE PACKET**, la variable système OK prend la valeur 1 si le paquet est reçu sans erreur. Sinon, OK prend la valeur 0.

#### Voir aussi 

[Get document position](get-document-position.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[SEND PACKET](send-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  
[SET TIMEOUT](set-timeout.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 104 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


