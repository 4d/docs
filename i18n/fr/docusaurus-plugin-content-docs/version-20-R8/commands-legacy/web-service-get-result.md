---
id: web-service-get-result
title: WEB SERVICE GET RESULT
slug: /commands/web-service-get-result
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE GET RESULT.Syntax-->**WEB SERVICE GET RESULT** ( *valeurRetour* {; *nomRetour* {; *}} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE GET RESULT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| valeurRetour | Variable | &#8592; | Valeur retournée par le Web Service |
| nomRetour | Text | &#8594;  | Nom du paramètre à récupérer |
| * | Operator |  &#8594;  | Libérer la mémoire |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SERVICE GET RESULT.Summary-->La commande **WEB SERVICE GET RESULT** permet de récupérer une valeur renvoyée par le Web Service à l’issue du traitement effectué.<!-- END REF-->Cette commande doit être utilisée uniquement après la commande [WEB SERVICE CALL](web-service-call.md).

Le paramètre *valeurRetour* reçoit la valeur renvoyée par le Web Service. Passez dans ce paramètre une variable 4D. Cette variable est généralement *$0*, correspondant à la valeur retournée par la méthode proxy. Il est toutefois possible d’utiliser des variables intermédiaires (vous devez utiliser des variables process uniquement). 

**Note :** Chaque variable ou tableau 4D utilisé(e) doit être préalablement déclaré(e) à l’aide des commandes des thèmes “Compilateur” et “Tableaux”. 

Le paramètre optionnel *nomRetour* permet de spécifier le nom du paramètre à récupérer. Toutefois, comme la plupart des Web Services retournent une seule valeur, ce paramètre n’est généralement pas nécessaire. 

Le paramètre *\**, optionnel, indique au programme de libérer la mémoire consacrée au traitement de la requête. Vous devez passer ce paramètre après la récupération de la dernière valeur renvoyée par le Web Service.

#### Exemple 

Imaginons un Web Service retournant l’heure courante dans n’importe quelle ville du monde. Les paramètres reçus par le Web Service sont le nom de la ville et le code du pays. Le Web Service retourne alors l’heure correspondante. La méthode proxy d’appel pourrait être de la forme suivante :

```4d
 var $1 : Text
 var $2 : Text
 var $0 : Time
 
 WEB SERVICE SET PARAMETER("ville";$1)
 WEB SERVICE SET PARAMETER("code_pays";$2)
 
 WEB SERVICE CALL("http://www.villesdumonde.com/WS";"WSHeures#Heure_ville";"Heure_ville"; 
                   "http://www.villesdumonde.com/namespace/default")
 
 If(OK=1)
    WEB SERVICE GET RESULT($0;"retour";*) 
 End if
```

#### Voir aussi 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 779 |
| Thread safe | &check; |


