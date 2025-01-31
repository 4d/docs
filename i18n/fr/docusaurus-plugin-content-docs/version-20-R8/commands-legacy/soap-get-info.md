---
id: soap-get-info
title: SOAP Get info
slug: /commands/soap-get-info
displayed_sidebar: docs
---

<!--REF #_command_.SOAP Get info.Syntax-->**SOAP Get info** ( *numInfo* ) : Text<!-- END REF-->
<!--REF #_command_.SOAP Get info.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| numInfo | Integer | &#8594;  | Numéro du type d’information SOAP à lire |
| Résultat | Text | &#8592; | Information SOAP |

<!-- END REF-->

#### Description 

<!--REF #_command_.SOAP Get info.Summary-->La commande **SOAP Get info** permet de récupérer sous forme de chaîne de caractères différents types d’informations concernant une requête SOAP.<!-- END REF--> 

Lorsque vous traitez une requête SOAP, il peut être utile d’obtenir des informations supplémentaires — en-dehors des valeurs des paramètres RPC — sur la requête. Par exemple, pour des raisons de sécurité, vous pouvez utiliser cette commande dans la *Méthode base Sur authentification Web* afin de connaître le nom de la méthode Web Service demandée. 

Passez dans le paramètre *numInfo* le numéro du type d’information SOAP à connaître. Vous pouvez utiliser les constantes prédéfinies suivantes, placées dans le thème *Web Services (Serveur)* :

| Constante         | Type        | Valeur | Comment                                                                  |
| ----------------- | ----------- | ------ | ------------------------------------------------------------------------ |
| SOAP method name  | Entier long | 1      | Nom de la méthode offerte comme Web Service sur le point d’être exécutée |
| SOAP service name | Entier long | 2      | Nom du Web Service auquel appartient la méthode                          |

**Note :** Pour des raisons de sécurité également, il est possible de définir la taille maximale des requêtes Web Services adressées à 4D. Ce paramétrage est effectué à l’aide de la commande [SET DATABASE PARAMETER](set-database-parameter.md) (thème “Définition structure”).

#### Voir aussi 

[SET DATABASE PARAMETER](set-database-parameter.md)  
[SOAP SEND FAULT](soap-send-fault.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 784 |
| Thread safe | &check; |


