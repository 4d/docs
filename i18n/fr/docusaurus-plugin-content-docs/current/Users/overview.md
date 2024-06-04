---
id: overview
title: Présentation du contrôle des accès
---

Si plusieurs personnes utilisent une application, ce qui est souvent le cas dans une architecture client-serveur ou d'interfaces Web, vous devez contrôler ses accès ou proposer différentes fonctionnalités selon les utilisateurs connectés. Il est également essentiel d'assurer la sécurité des données sensibles, même dans les applications monoposte.

La stratégie de contrôle d'accès 4D dépend de la configuration de votre déploiement :

- dans les applications multi-utilisateurs, vous pouvez vous appuyer sur les utilisateurs et les groupes 4D,
- in single-user applications, user access is controlled through the system session, using commands such as [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html).

> Consultez le document [4D Security guide](https://blog.4d.com/4d-security-guide/) pour une vue d'ensemble des fonctions de sécurité de 4D.

## Contrôle des accès dans les applications multi-utilisateurs

Les applications multi-utilisateurs sont déployées avec 4D Server. Il peut s'agir d'applications client-serveur, Web ou REST.

Dans les applications multi-utilisateurs, le contrôle des accès se fait par le biais des [utilisateurs et des groupes 4D](handling_users_groups.md). Vous pouvez créer des utilisateurs, attribuer des mots de passe et créer des groupes d'accès qui ont différents niveaux de privilèges dans l'application.

Initiez le système de contrôle des accès par mot de passe 4D avec 4D Server, [en attribuant un mot de passe au Super utilisateur](handling_users_groups.md#designer-and-administrator). Tant que vous n'attribuez pas de mot de passe au Super utilisateur, tous les accès à l'application se font avec les droits d'accès du Super utilisateur, même si vous avez [configuré des utilisateurs et des groupes](handling_users_groups.md) (à l'ouverture N'importe quelle partie de l'application peut être ouverte.

Lorsqu’un mot de passe est affecté au Super_Utilisateur, tous les privilèges d’accès que vous avez affectés prennent effet. Pour se connecter à l'application ou à un [serveur à accès protégé](handling_users_groups.md#assigning-group-access), les utilisateurs distants doivent saisir un login/mot de passe.

Pour désactiver le système de restriction d’accès, il suffit de supprimer (mettre à blanc) le mot de passe du Super_Utilisateur.

## Contrôle d'accès dans les applications monoposte

Les applications monoposte sont des applications de bureau, déployées avec 4D ou fusionnées avec 4D Volume License. Dans les applications monoposte, tous les utilisateurs qui ouvrent l'application sont des [Super utilisateurs](handling_users_groups.md#designer-and-administrator); ils possèdent tous les privilèges et leur nom est "Super utilisateur". Le contrôle des accès n'est pas basé sur les utilisateurs et les groupes 4D, mais sur les **sessions utilisateur**.

### Identification de l'utilisateur

To identify the current user in a 4D single-user application, you can rely on the [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html) command, which returns the user who opened the system session. Ainsi, l'authentification des utilisateurs est déléguée au système d'exploitation.

Vous pouvez alors autoriser ou refuser les accès à votre application en utilisant un code suivant :

```4d
If(Current system user = $user) //you can store users in a database table
	// give access to some features
End if
```

If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the [`SET USER ALIAS`](https://doc.4d.com/4dv19R/help/command/en/page1666.html) command, for example:

```4d
SET USER ALIAS(Current system user)
```

### Protection des accès

#### Privilèges

Sur une machine partagée par plusieurs utilisateurs, vous pouvez installer l'application 4D dans un dossier et octroyer les privilèges d'accès utilisateur appropriés au dossier au niveau de l'OS.

#### Chiffrement des données

Si vous souhaitez protéger les accès aux données de l'application, nous vous recommandons de [chiffrer les données](MSC/encrypt.md) et de fournir la clé de chiffrement à l'utilisateur ou aux utilisateurs autorisés.
