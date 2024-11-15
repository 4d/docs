---
id: current-time
title: Current time
slug: /commands/current-time
displayed_sidebar: docs
---

<!--REF #_command_.Current time.Syntax-->**Current time** {( * )} : Time<!-- END REF-->
<!--REF #_command_.Current time.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Retourne l'heure courante sur le poste serveur |
| Résultat | Time | &#8592; | Heure courante |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current time.Summary-->La fonction **Current time** retourne l'heure courante définie dans l'horloge de votre système.<!-- END REF--> 

L'heure courante est toujours comprise entre *00:00:00* et *23:59:59*. Vous pouvez utiliser les fonctions [String](string.md) ou [Time string](time-string.md) pour convertir en chaîne alphanumérique l'expression de type heure retournée par **Current time**.

**4D Server :** Si vous passez le paramètre astérisque (\*) — lors d'une exécution sur un poste 4D Client —, la fonction retourne l'heure courante telle que définie dans l'horloge du poste serveur. 

#### Exemple 1 

L'exemple suivant vous permet de mesurer la durée d'une opération. Dans cet exemple, vous voulez chronométrer la méthode longueOpération :   
  
```4d
 $vhStartTime:=((Current date-!1980-01-01!)*86400)+Current time //Mémorisez le démarrage de l'opération en secondes écoulées après le 01/01/1980.
 longueOpération //Lancez l'opération
 $vhEndTime:=((Current date-!1980-01-01!)*86400)+Current time
 ALERT("L'opération a duré"+String($vhEndTime-$vhStartTime)+" secondes.") //Affichez la durée de l'opération
```

#### Exemple 2 

L'exemple suivant extrait les heures, minutes et secondes de l'heure courante :

```4d
 $vhMaintenant:=Current time
 ALERT("L'heure courante est : "+String($vhMaintenant\3600))
 ALERT("La minute courante est : "+String(($vhMaintenant\60)%60))
 ALERT("La seconde courante est : "+String($vhMaintenant%60))
```

#### Voir aussi 

[Milliseconds](milliseconds.md)  
[String](string.md)  
[Tickcount](tickcount.md)  