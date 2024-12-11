---
id: web-service-set-option
title: WEB SERVICE SET OPTION
slug: /commands/web-service-set-option
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE SET OPTION.Syntax-->**WEB SERVICE SET OPTION** ( *option* ; *valeur* )<!-- END REF-->
<!--REF #_command_.WEB SERVICE SET OPTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Code de l’option à fixer |
| valeur | Integer, Text | &#8594;  | Valeur de l’option |

<!-- END REF-->

#### Note préliminaire 

<!--REF #_command_.WEB SERVICE SET OPTION.Summary-->Cette commande est destinée aux utilisateurs avancés des Web Services.<!-- END REF--> Son emploi est facultatif. 

#### Description 

La commande **WEB SERVICE SET OPTION** permet de définir différentes options qui seront utilisées lors de la prochaine requête SOAP déclenchée par la commande [WEB SERVICE CALL](web-service-call.md).   
Vous pouvez appeler cette commande autant de fois qu’il y a d’options à fixer. 

Passez dans le paramètre *option* le numéro de l’option à définir et dans le paramètre *valeur* la nouvelle valeur de l’option. Vous pouvez utiliser pour ces deux paramètres une des constantes prédéfinies suivantes, situées dans le thème *Web Services (Client)* :

| Constante                       | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------- | ----------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web Service display auth dialog | Entier long | 4      | *valeur* \= 0 (ne pas afficher le dialogue) ou 1 (afficher le dialogue)<br/>Cette option gère l’affichage de boîte de dialogue d’authentification lors de l’exécution de la commande [WEB SERVICE CALL](web-service-call.md). Par défaut, cette commande ne provoque jamais l'affichage de la boîte de dialogue, vous devez en principe utiliser la commande [WEB SERVICE AUTHENTICATE](web-service-authenticate.md). Toutefois, si vous souhaitez qu’une boîte de dialogue d’authentification apparaisse pour que l’utilisateur saisisse ses identifiants, vous devez utiliser cette option : passez 1 dans *valeur* pour afficher la boîte de dialogue, et 0 sinon. La boîte de dialogue n’apparaît que si le service Web requiert une authentification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Web Service HTTP compression    | Entier long | 6      | *valeur* \= Web Service compression <br/>Cette option permet d’activer un mécanisme interne de compression des requêtes SOAP afin d’accélérer les échanges inter-applications 4D. Lorsque vous exécutez l'instruction [WEB SERVICE SET OPTION](web-service-set-option.md)(Web Service compression HTTP; Web Service compression) sur le client 4D du Web Service, les données de la prochaine requête SOAP envoyée par le client seront compressées en utilisant un mécanisme standard HTTP ("gzip" ou "deflate" en fonction du contenu de la requête) avant leur envoi au serveur SOAP 4D. Le serveur décompressera et analysera la requête puis répondra en utilisant automatiquement le même mécanisme. Seule la requête suivant l’appel de la commande [WEB SERVICE SET OPTION](web-service-set-option.md) est affectée. Vous devez donc appeler cette commande chaque fois que vous voulez utiliser la compression. Par défaut, 4D ne compresse pas les requêtes HTTP des Web Services.<br/>**Note :** Ce mécanisme ne peut pas être utilisé pour des requêtes adressées à un serveur SOAP 4D d’une version antérieure à la 11.3\. Afin de vous permettre d’optimiser encore ce fonctionnement, des options supplémentaires configurent le seuil et le taux de compression des requêtes. Ces options sont accessibles via la commande [SET DATABASE PARAMETER](set-database-parameter.md). |
| Web Service HTTP timeout        | Entier long | 1      | *valeur*\= “timeout” de la partie cliente exprimé en secondes.<br/>Le timeout de la partie cliente est le délai d’attente du client Web Service en cas de non-réponse du serveur. A l’issue de ce délai, le client referme la session, la requête est perdue. <br/>Par défaut, ce délai est de 180 secondes. Il peut être modifié en raison de caractéristiques particulières (état du réseau, spécificités du Web Service, etc.).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Web Service reset auth settings | Entier long | 5      | *valeur* \= 0 (ne pas effacer les informations) ou 1 (les effacer)<br/>Cette option permet d’indiquer à 4D de mémoriser les informations d'authentification de l’utilisateur (nom d'utilisateur, mot de passe, méthode, etc.), dans le but de les réutiliser par la suite. Par défaut, ces informations sont effacées après chaque exécution de la commande [WEB SERVICE CALL](web-service-call.md). Passez 0 dans *valeur* pour les mémoriser et 1 pour les effacer. A noter que lorsque vous passez 0, les informations sont conservées pendant la session mais ne sont pas stockées.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Web Service SOAP header         | Entier long | 2      | *valeur* \= référence d’élément xml racine à insérer en tant que header (en-tête) de la requête SOAP.<br/>Cette option permet d’insérer un header dans la requête SOAP générée par la commande [WEB SERVICE CALL](web-service-call.md). Par défaut, les requêtes SOAP ne comportent pas d’en-tête spécifique. Cependant, certains Web Services requièrent la présence de cet en-tête, par exemple pour la gestion de paramètres d’identification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Web Service SOAP version        | Entier long | 3      | *valeur* \= Web Service SOAP\_1\_1 ou Web Service SOAP\_1\_2 <br/>Cette option permet de préciser la version du protocole SOAP utilisée dans la requête. Passez dans valeur la constante Web Service SOAP\_1\_1 pour indiquer la version 1.1 et la constante Web Service SOAP\_1\_2 pour indiquer la version 1.2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

L’ordre d’appel des options n’a pas d’importance. Si une même *option* est définie plusieurs fois, seule la valeur du dernier appel est prise en compte. 

#### Exemple 1 

Insertion d’un en-tête personnalisé dans la requête SOAP :

```4d
  // Création d’une référence XML
 var vRefRacine;vRefElement : Text
 vRefRacine:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vRefElement:=DOM Create XML element(vRefRacine;vxPath)
  //Modification de l’en-tête SOAP avec la référence
 WEB SERVICE SET OPTION(Web Service SOAP header;vRefElement)
```

#### Exemple 2 

Utilisation de la version 1.2 du protocole SOAP :

```4d
 WEB SERVICE SET OPTION(Web Service SOAP version;Web Service SOAP_1_2)
```

#### Voir aussi 

[WEB SERVICE CALL](web-service-call.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 901 |
| Thread safe | &check; |
| Interdite sur le serveur ||


