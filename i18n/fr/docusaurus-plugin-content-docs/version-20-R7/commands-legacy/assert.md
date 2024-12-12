---
id: assert
title: ASSERT
slug: /commands/assert
displayed_sidebar: docs
---

<!--REF #_command_.ASSERT.Syntax-->**ASSERT** ( *expressionBool* {; *texteMessage*} )<!-- END REF-->
<!--REF #_command_.ASSERT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| expressionBool | Boolean | &#8594;  | Expression booléenne |
| texteMessage | Text | &#8594;  | Texte du message d’erreur |

<!-- END REF-->

#### Description 

<!--REF #_command_.ASSERT.Summary-->La commande **ASSERT** évalue l'assertion *expressionBool* passée en paramètre et, si elle retourne faux, interrompt l'exécution du code en affichant une erreur.<!-- END REF--> La commande fonctionne en mode interprété et en mode compilé. 

Si l’expression est vraie, il ne se passe rien. Si l’expression est fausse, la commande déclenche l’erreur -10518 et affiche par défaut le texte de l’assertion précédé du message "Fausse assertion :". Vous pouvez intercepter cette erreur via une méthode installée par la commande [ON ERR CALL](on-err-call.md), afin par exemple d’alimenter un fichier d’historique. 

Optionnellement, vous pouvez passer un paramètre *texteMessage* afin d'afficher un message d'erreur personnalisé au lieu du texte de l'assertion. 

Une assertion est une instruction insérée dans le code d'une méthode et chargée de détecter des éventuelles anomalies au cours de son exécution. Le principe consiste à vérifier qu’une expression est vraie à un instant donné et, dans le cas contraire, produire une exception. Les assertions sont surtout utilisées pour détecter des cas qui ne devraient jamais arriver en temps normal. Elles servent donc essentiellement à détecter des bogues de programmation. Il est possible d’activer ou de désactiver globalement toutes les assertions d’une application (par exemple en fonction du type de version) via la commande [SET ASSERT ENABLED](set-assert-enabled.md). Pour plus d’informations sur les assertions en programmation, reportez-vous à l’article (en anglais) qui leur est consacré sur Wikipedia : [http://en.wikipedia.org/wiki/Assertion\_(computing)](http://en.wikipedia.org/wiki/Assertion%5F%28computing%29)

#### Exemple 1 

Avant d’effectuer des opérations sur un enregistrement, le développeur souhaite s’assurer qu’il est bien chargé en lecture écriture :

```4d
 READ WRITE([Table 1])
 LOAD RECORD([Table 1])
 ASSERT(Not(Locked([Table 1])))  //déclenche l'erreur  -10518  si l'enregistrement est verrouillé
```

#### Exemple 2 

Une assertion peut permettre de tester les paramètres passés à une méthode projet pour détecter des valeurs aberrantes. Dans cet exemple, un message d’alerte personnalisé est utilisé.

```4d
  // Méthode qui retourne le numéro d'un client en fonction de son nom passé dans  $1
 var $1 : Text // Nom du client
 ASSERT($1#"";"Recherche d’un nom de client vide")
     // Un nom vide dans ce cas est une valeur aberrante
     // Si assertion fausse, affichera dans la boîte de dialogue d'erreur :
     // "Fausse assertion : Recherche d’un nom de client vide"
```

#### Voir aussi 

[Asserted](asserted.md)  
[Get assert enabled](get-assert-enabled.md)  
[SET ASSERT ENABLED](set-assert-enabled.md)  