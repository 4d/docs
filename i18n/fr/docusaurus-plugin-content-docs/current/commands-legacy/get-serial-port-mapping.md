---
id: get-serial-port-mapping
title: GET SERIAL PORT MAPPING
slug: /commands/get-serial-port-mapping
displayed_sidebar: docs
---

<!--REF #_command_.GET SERIAL PORT MAPPING.Syntax-->**GET SERIAL PORT MAPPING** ( *tabNums* ; *tabLibellés* )<!-- END REF-->
<!--REF #_command_.GET SERIAL PORT MAPPING.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabNums | Integer array | &#8592; | Tableau de numéros de ports série |
| tabLibellés | Text array | &#8592; | Tableau de noms de ports série |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET SERIAL PORT MAPPING.Summary-->La commande **GET SERIAL PORT MAPPING** retourne deux tableaux *tabNums* et *tabLibellés* contenant respectivement la liste des numéros et des noms des ports série de la machine courante.<!-- END REF--> 

Cette commande est utile sous Mac OS X car le système alloue dynamiquement les numéros des ports série lorsque vous utilisez un adaptateur série USB. A l’aide de cette commande, vous pouvez adresser les ports série étendus via leur nom (invariable), quel que soit leur numéro.

**Note :** Cette commande ne retourne pas de valeurs significatives avec les ports standard. Si vous souhaitez adresser un port standard, vous devez passer directement sa valeur (0 ou 1) à la commande [SET CHANNEL](set-channel.md) (ancien mode de fonctionnement de 4D). 

#### Exemple 

Cette méthode projet permet d'adresser le même port série (sans protocole), quel que soit le numéro qui lui a été attribué : 

```4d
 ARRAY TEXT($tNomPorts;0)
 ARRAY LONGINT($tNumPorts;0)
 var $vNumport;$vNumportFinal : Integer
 
  //Connaître les numéros actuels des ports série
 GET SERIAL PORT MAPPING($tNumPorts;$tNomPorts)
 $vNumport:=Find in array($tNomPorts;vNomport)
  // vNomport contient le nom du port à utiliser, il peut provenir d'une boîte de dialogue,
  // d'une valeur stockée dans un champ, etc.
 If(tNumPorts{$vNumport}=0)
    $vNumportFinal:=0 //cas particulier sous Mac OS X
 Else
    $vNumportFinal:=tNumPorts{$vNumport}+100
 End if
 SET CHANNEL($vNumportFinal;params) //params contient les paramètres de communication
 ... //Effectuer ici les opérations souhaitées
 SET CHANNEL(11) //Fermeture du port
```

#### Voir aussi 

[SET CHANNEL](set-channel.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 909 |
| Thread safe | &check; |
| Interdite sur le serveur ||


