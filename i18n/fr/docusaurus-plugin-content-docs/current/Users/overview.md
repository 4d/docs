---
id: overview
title: Présentation du contrôle des accès
---

Si plusieurs personnes utilisent une application, ce qui est souvent le cas dans une architecture client-serveur ou d'interfaces Web, vous devez contrôler ses accès ou proposer différentes fonctionnalités selon les utilisateurs connectés. Il est également essentiel d'assurer la sécurité des données sensibles, même dans les applications monoposte.

La stratégie de contrôle d'accès 4D dépend de la configuration de votre déploiement :

- dans les applications multi-utilisateurs, vous pouvez vous appuyer sur les utilisateurs et les groupes 4D,
- in single-user applications, user access is controlled through the system session, using commands such as [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html).

> For an overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).

## Contrôle des accès dans les applications multi-utilisateurs

Les applications multi-utilisateurs sont déployées avec 4D Server. Il peut s'agir d'applications client-serveur, Web ou REST.

In multi-user applications, access control is done through [4D users and groups](handling_users_groups.md). Vous pouvez créer des utilisateurs, attribuer des mots de passe et créer des groupes d'accès qui ont différents niveaux de privilèges dans l'application.

You initiate the 4D password access control system with 4D Server by [assigning a password to the Designer user](handling_users_groups.md#designer-and-administrator). Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have [set up users and groups](handling_users_groups.md) (when the application opens, no ID is required). N'importe quelle partie de l'application peut être ouverte.

Lorsqu’un mot de passe est affecté au Super_Utilisateur, tous les privilèges d’accès que vous avez affectés prennent effet. In order to connect to the application or to a [server with protected access](handling_users_groups.md#assigning-group-access), remote users must enter a login/password.

Pour désactiver le système de restriction d’accès, il suffit de supprimer (mettre à blanc) le mot de passe du Super_Utilisateur.

## Contrôle d'accès dans les applications monoposte

Les applications monoposte sont des applications de bureau, déployées avec 4D ou fusionnées avec 4D Volume License. In single-user applications all users opening the application are [Designers](handling_users_groups.md#designer-and-administrator), they have all privileges and their name is "Designer". Access control is not based upon 4D users and groups, but upon **user sessions**.

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

#### Privileges

Sur une machine partagée par plusieurs utilisateurs, vous pouvez installer l'application 4D dans un dossier et octroyer les privilèges d'accès utilisateur appropriés au dossier au niveau de l'OS.

#### Chiffrement des données

If you want to protect access to the application data, we recommend to [encrypt data](MSC/encrypt.md) and provide the encryption key to the authorized user(s).
