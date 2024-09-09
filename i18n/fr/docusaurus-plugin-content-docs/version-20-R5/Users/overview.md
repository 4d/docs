---
id: overview
title: Présentation du contrôle des accès
---

Si plusieurs personnes utilisent une application, ce qui est souvent le cas dans une architecture client-serveur ou d'interfaces Web, vous devez contrôler ses accès ou proposer différentes fonctionnalités selon les utilisateurs connectés. Il est également essentiel d'assurer la sécurité des données sensibles, même dans les applications monoposte.

La stratégie de contrôle d'accès 4D dépend de la configuration de votre déploiement :

- dans les applications multi-utilisateurs, vous pouvez vous appuyer sur les utilisateurs et les groupes 4D,
- dans les applications monoposte, l'accès des utilisateurs est contrôlé par la session du système, à l'aide de commandes telles que [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html).

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

Pour identifier l'utilisateur courant dans une application 4D monoposte, vous pouvez vous appuyer sur la commande [`Current system user`](https://doc.4d.com/4dv19R/help/command/fr/page484.html), qui retourne l'utilisateur ayant ouvert la session système. Ainsi, l'authentification des utilisateurs est déléguée au système d'exploitation.

Vous pouvez alors autoriser ou refuser les accès à votre application en utilisant un code suivant :

```4d
If(Current system user = $user) //vous pouvez stocker des utilisateurs dans une table de base de données
    // accorder les accès à certaines fonctionnalités
End if
```

Si vous souhaitez utiliser le nom d'utilisateur du système dans 4D au lieu du "Designer" (par exemple dans les fichiers journaux), vous pouvez appeler la commande [`SET USER ALIAS`](https://doc.4d.com/4dv19R/help/command/en/page1666.html), par exemple:

```4d
SET USER ALIAS(Current system user)
```

### Protection des accès

#### Privilèges

Sur une machine partagée par plusieurs utilisateurs, vous pouvez installer l'application 4D dans un dossier et octroyer les privilèges d'accès utilisateur appropriés au dossier au niveau de l'OS.

#### Chiffrement des données

Si vous souhaitez protéger les accès aux données de l'application, nous vous recommandons de [chiffrer les données](MSC/encrypt.md) et de fournir la clé de chiffrement à l'utilisateur ou aux utilisateurs autorisés.
