---
id: soap-send-fault
title: SOAP SEND FAULT
slug: /commands/soap-send-fault
displayed_sidebar: docs
---

<!--REF #_command_.SOAP SEND FAULT.Syntax-->**SOAP SEND FAULT** ( *typeErreur* ; *description* )<!-- END REF-->
<!--REF #_command_.SOAP SEND FAULT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| typeErreur | Integer | &#8594;  | 1 = Erreur Client, 2 = Erreur Serveur |
| description | Text | &#8594;  | Description de l’erreur à envoyer au client SOAP |

<!-- END REF-->

#### Description 

<!--REF #_command_.SOAP SEND FAULT.Summary-->La commande **SOAP SEND FAULT** permet de retourner une erreur à un client SOAP en indiquant l’origine de l’erreur : client ou serveur.<!-- END REF--> Utiliser cette commande vous permet de signaler une erreur à un client sans devoir retourner de résultat. 

Par exemple, une erreur côté client peut être détectée lorsque vous publiez un Web Service “Racine\_carree” et qu’un client envoie une requête avec un nombre négatif ; vous pouvez utiliser cette commande afin d’indiquer au client qu’une valeur positive est requise. 

Une erreur possible côté serveur peut être par exemple un manque de mémoire survenu lors de l’exécution de la méthode. 

Passez dans *typeErreur* l’origine de l’erreur. Vous pouvez utiliser les constantes prédéfinies suivantes, placées dans le thème *Web Services (Serveur)* :

| Constante         | Type        | Valeur |
| ----------------- | ----------- | ------ |
| SOAP client fault | Entier long | 1      |
| SOAP server fault | Entier long | 2      |

Passez dans *description* un descriptif de l’erreur. Si l’implémentation du client est conforme, l’erreur pourra être traitée. 

#### Exemple 

Pour reprendre l’exemple du Web Service “Racine\_carree” fourni dans la description de la commande, l’instruction suivante peut être utilisée pour traiter les requêtes sur des nombres négatifs :

```4d
 SOAP SEND FAULT(SOAP client fault;"Valeurs positives requises")
```

#### Voir aussi 

[SOAP DECLARATION](soap-declaration.md)  
[SOAP Get info](soap-get-info.md)  