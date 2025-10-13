---
id: session
title: Session
displayed_sidebar: docs
---

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!--REF #_command_.Session.Params-->

| Paramètres | Type                       |                             | Description   |
| ---------- | -------------------------- | --------------------------- | ------------- |
| Résultat   | 4D.Session | &#8592; | Objet session |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                                                             |
| ------- | ------------------------------------------------------------------------- |
| 20 R8   | Prise en charge des sessions autonomes                                    |
| 20 R5   | Prise en charge des sessions utilisateurs distants et procédures stockées |
| 18 R6   | Ajout                                                                     |

</details>

## Description

La commande `Session` <!-- REF #_command_.Session.Summary -->retourne l'objet `Session` correspondant à la session utilisateur courante<!-- END REF -->.

Selon le process à partir duquel la commande est appelée, la session utilisateur courante peut être :

- une session web (lorsque les [sessions évolutives sont activées](WebServer/sessions.md#enabling-web-sessions)),
- une session de client distant,
- la session des procédures stockées,
- la session *designer* dans une application autonome.

Pour plus d'informations, voir le paragraphe [Types de session](../API/SessionClass.md#session-types).

Si la commande est appelée à partir d'un contexte non pris en charge (par exemple, les sessions évolutives désactivées), elle retourne *Null*.

## Sessions Web

L'objet `Session` des sessions web est disponible depuis n'importe quel process web :

- Méthodes base `On Web Authentication`, `On Web Connection`, et `On REST Authentication`,
- code traité par les balises 4D dans les pages semi-dynamiques (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- méthodes projet avec l'attribut "Disponible via balises HTML et URLs 4D (4DACTION...)" et appelées via les urls 4DACTION/
- méthodes base [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) et [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) pour les requêtes mobiles,
- Fonctions ORDA [appelées via des requêtes REST](../REST/ClassFunctions.md).

Pour plus d'informations sur les sessions utilisateur web, veuillez consulter la section [Sessions web](../WebServer/sessions.md).

## Sessions clients distants

L'objet `Session` des sessions client distants est disponible depuis :

- Les méthodes projet qui ont l'attribut [Exécuter sur serveur](../Project/code-overview.md#execute-on-server) (elles sont exécutées dans le process jumeau du process client),
- Les Triggers,
- Les [fonctions du modèle de données](../ORDA/ordaClasses.md) ORDA (sauf celles déclarées avec le mot-clé [`local`](../ORDA/ordaClasses.md#local-functions),
- Les méthodes base `On Server Open Connection` et `On Server Shutdown Connection`.

Pour plus d'informations sur les sessions utilisateur distantes, veuillez vous référer au paragraphe [**Sessions utilisateur client distants**](../Desktop/clientServer.md#remote-user-sessions).

## Session des procédures stockées

Tous les process des procédures stockées partagent la même session d'utilisateur virtuel. L'objet `Session` des procédures stockées est disponible depuis :

- les méthodes appelées avec la commande [`Execute on server`](../commands-legacy/execute-on-server.md),
- Les méthodes base `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown`, et `On System event`.

Pour des informations sur la session d'utilisateur virtuel des procédures stockées, veuillez vous référer à la page [4D Server et langage 4D](https://doc.4d.com/4Dv20/4D/20/4D-Server-and-the-4D-Language.300-6330554.en.html).

## Session autonome

L'objet `Session` est disponible à partir de n'importe quel process dans les applications autonomes (mono-utilisateur) afin que vous puissiez écrire et tester votre code client/serveur en utilisant l'objet `Session` dans votre environnement de développement 4D.

## Exemple

Vous avez défini la méthode `action_Session` ayant l'attribut "Disponible via Balises HTML et URLs 4D". Vous appelez la méthode en saisissant l'URL suivant dans votre navigateur :

```
IP:port/4DACTION/action_Session
```

```4d
  //méthode action_Session
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //appel de la fonction hasPrivilege
          WEB SEND TEXT("4DACTION -- Session is WebAdmin")
       Else
          WEB SEND TEXT("4DACTION -- Session is not WebAdmin")
       End if
    Else
       WEB SEND TEXT("4DACTION -- Sesion is null")
 End case
```

## Voir également

[Session storage](session-storage.md)  
[Session API](../API/SessionClass.md)  
[Sessions Web](../WebServer/sessions.md)  
[*Sessions évolutives pour les applications web avancées* (blog post)](https://blog.4d.com/scalable-sessions-for-advanced-web-applications/)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1714                        |
| Thread safe        | &check; |


