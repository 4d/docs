---
id: beep
title: BEEP
slug: /commands/beep
displayed_sidebar: docs
---

<!--REF #_command_.BEEP.Syntax-->**BEEP**<!-- END REF-->
<!--REF #_command_.BEEP.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.BEEP.Summary-->La commande **BEEP** provoque l'émission d'un bip sonore.<!-- END REF--> Votre PC ou votre Macintosh peut émettre un autre son qu'un bip en fonction du son sélectionné dans le tableau de bord de contrôle du son.

**ATTENTION :** N'appelez pas la commande **BEEP** à partir d'un process de connexion Web car le bip sonore se produira sur le poste serveur Web 4D et non sur le poste du navigateur Web. 

#### Exemple 

Dans l'exemple suivant, un bip est émis et une alerte affichée lorsqu'aucun enregistrement n'est trouvé par une recherche :

```4d
 QUERY([Clients];[Clients]Nom=$vsNomAChercher)
 If(Records in selection([Clients])=0)
    BEEP
    ALERT("Il n'y a aucun client de ce nom.")
 End if
```

#### Voir aussi 

[PLAY](play.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 151 |
| Thread safe | &check; |


