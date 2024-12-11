---
id: web-service-get-info
title: WEB SERVICE Get info
slug: /commands/web-service-get-info
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE Get info.Syntax-->**WEB SERVICE Get info** ( *typeInfo* ) : Text<!-- END REF-->
<!--REF #_command_.WEB SERVICE Get info.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| typeInfo | Integer | &#8594;  | Information à récupérer |
| Résultat | Text | &#8592; | Information sur la dernière erreur SOAP |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SERVICE Get info.Summary-->La commande **WEB SERVICE Get info** retourne des informations relatives à l'erreur éventuellement générée lors de l’exécution de la dernière requête SOAP adressée à un Web Service.<!-- END REF--> Cette commande doit généralement être appelée dans le cadre d'une méthode d'appel sur erreur installée par la commande [ON ERR CALL](on-err-call.md).

Le paramètre *typeInfo* vous permet d’indiquer le type d’information que vous souhaitez obtenir. Vous devez passer une des constantes suivantes, placées dans le thème *Web Services (Client)* :

| Constante                    | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web Service detailed message | Entier long | 1      | Message détaillé décrivant l’erreur. Le type de message diffère suivant le type d’erreur principale. <br/>- Si erreur principale = 9910 (Erreur Web Service) : la cause de l’erreur SOAP est retournée (ex : “méthode appelée inexistante”).<br/>- Si erreur principale = 9911 (Erreur de l’analyseur xml) : l’emplacement de l’erreur dans le document xml est retourné.<br/>- Si erreur principale = 9912 (Erreur HTTP) :<br/>- si l’erreur HTTP est située dans l’intervalle \[300-400\] (problèmes lié à l’emplacement du document demandé), le nouvel emplacement de l’URL demandé est retourné. <br/>- pour tout autre code d’erreur HTTP, le <body> est renvoyé. <br/>- Si erreur principale = 9913 (Erreur réseau) : la cause de l’erreur réseau est retournée (ex : “AdresseServeur : erreur DNS”)<br/>- Si erreur principale = 9914 (Erreur interne) : la cause de l’erreur interne est retournée |
| Web Service error code       | Entier long | 0      | Code d’erreur principal (défini par 4D). Ce code est également retourné dans la variable système Error. <br/>Voici la liste des codes pouvant être retournés :<br/>9910 : Erreur Web Service (voir aussi Web Service origine erreur)<br/>9911 : Erreur de l’analyseur xml<br/>9912 : Erreur HTTP (voir aussi Web Service code erreur HTTP)<br/>9913 : Erreur réseau<br/>9914 : Erreur interne                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Web Service fault actor      | Entier long | 3      | Cause de l’erreur (retournée par le protocole SOAP — à utiliser en cas d’erreur principale 9910).<br/>- Version Mismatch (les versions ne correspondent pas).<br/>- Must Understand (un paramètre défini comme obligatoire n’a pas pu être interprété par le serveur)<br/>- Sender Fault<br/>- Receiver Fault<br/>- Encoding Unknown (encodage inconnu)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Web Service HTTP status code | Entier long | 2      | Code de statut HTTP (à utiliser en cas d’erreur principale 9912).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

Une chaîne vide est retournée lorsqu’aucune information n’est disponible, en particulier si la dernière requête SOAP n'a pas généré d'erreur.


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 780 |
| Thread safe | &check; |
| Interdite sur le serveur ||


