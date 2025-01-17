---
id: privileges
title: Privilèges
---

La protection des données tout en permettant un accès rapide et facile aux utilisateurs autorisés est un défi majeur pour les applications Web. L'architecture de sécurité ORDA est implémentée au cœur de votre datastore et vous permet de définir des privilèges spécifiques à toutes les sessions utilisateur web ou REST pour les différentes ressources de votre projet (datastore, dataclasses, fonctions, etc.).

## Vue d’ensemble

L'architecture de sécurité ORDA est basée sur les concepts de privilèges, d'actions de permission (lecture, création, etc.) et de ressources.

Lorsque les utilisateurs web ou REST sont enregistrés, leur session est automatiquement chargée avec les privilèges associés. Les privilèges sont assignés à la session en utilisant la fonction [`session.setPrivileges()`](../API/SessionClass.md#setprivileges).

Chaque requête utilisateur envoyée dans la session est évaluée par rapport aux privilèges définis dans le fichier `roles.json` du projet.

Si un utilisateur tente d'exécuter une action et ne dispose pas des droits d'accès appropriés, une erreur de privilège est générée ou, en cas de permission de lecture manquante sur les attributs, ils ne sont pas envoyés.

![schema](../assets/en/ORDA/privileges-schema.png)

### Voir également

Pour un aperçu détaillé de l'architecture des permissions, veuillez lire l'article de blog [**Filtrer l'accès à vos données avec un système complet de permissions**](https://blog.4d.com/filter-access-to-your-data-with-a-complete-system-of-permissions/).

## Resources

You can assign specific permission actions to the following resources in your project:

- le datastore
- une dataclass
- un attribut (y compris calculé et alias)
- une fonction de classe du modèle de données
- une fonction [singleton](../REST/$singleton.md)

Each time a resource is accessed within a session (whatever the way it is accessed), 4D checks that the session has the appropriate permissions, and rejects the access if it is not authorized.

Une action de permission définie à un certain niveau est héritée par défaut aux niveaux inférieurs, mais plusieurs niveaux de permissions peuvent être définis :

- Une action de permission définie au niveau du datastore est automatiquement assignée à toutes les dataclass.
- Une action de permission définie au niveau dataclass remplace le paramétrage du datastore (le cas échéant). Par défaut, tous les attributs de la dataclass héritent des permissions de la dataclass.
- Contrairement aux permissions des dataclass, une action de permission définie au niveau de l'attribut ne remplace pas la permission de la dataclass parente, mais y est ajoutée. Par exemple, si vous avez attribué le privilège "général" à une dataclass et le privilège "détail" à un attribut de la dataclass, les deux privilèges, "général" et "détail", doivent être définis dans la session afin d'accéder à l'attribut.

:::info

Les permissions contrôlent l'accès aux objets ou fonctions du datastore. Si vous voulez filtrer les données de lecture selon certains critères, vous pouvez envisager d'utiliser les [entity selections restreintes](entities.md#restricting-entity-selections) qui peuvent être plus appropriées dans ce cas.

:::

## Actions de permission

Les actions disponibles sont liées à la ressource cible.

| Actions     | datastore                                                                                                        | dataclass                                                                                                                                                                     | attribut                                                                                                                                                              | fonction du modèle de données ou fonction singleton                                                                                                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **create**  | Créer une entité dans n'importe quelle dataclass                                                                 | Créer une entité dans cette dataclass                                                                                                                                         | Créer une entité avec une valeur différente de la valeur par défaut autorisée pour cet attribut (ignoré pour les attributs alias). | n/a                                                                                                                                                                                                                                                                                                                                |
| **read**    | Lire les attributs de n'importe quelle dataclass                                                                 | Lire les attributs de cette dataclass                                                                                                                                         | Lire ce contenu d'attribut                                                                                                                                            | n/a                                                                                                                                                                                                                                                                                                                                |
| **update**  | Mettre à jour les attributs dans n'importe quelle dataclass.                                     | Mettre à jour les attributs de cette dataclass.                                                                                                               | Mettre à jour le contenu de cet attribut (ignoré pour les attributs alias).                                                        | n/a                                                                                                                                                                                                                                                                                                                                |
| **drop**    | Supprimer des données dans n'importe quelle dataclass.                                           | Supprimer des données dans cette dataclass.                                                                                                                   | Supprimer une valeur non nulle pour cet attribut (sauf pour les attributs alias et calculés).                                      | n/a                                                                                                                                                                                                                                                                                                                                |
| **execute** | Exécuter n'importe quelle fonction du projet (datastore, dataclass, entity selection, entity) | Exécuter n'importe quelle fonction de dataclass. Les fonctions de dataclass, d'entité et d'entity selection sont considérées comme des fonctions de dataclass | n/a                                                                                                                                                                   | Exécuter cette fonction                                                                                                                                                                                                                                                                                                            |
| **promote** | n/a                                                                                                              | n/a                                                                                                                                                                           | n/a                                                                                                                                                                   | Associe un privilège donné lors de l'exécution de la fonction. Le privilège est temporairement ajouté à la session et supprimé à la fin de l'exécution de la fonction. Par mesure de sécurité, seul le process exécutant la fonction reçoit le privilège, et non toute la session. |

**Notes :**

- Un alias peut être lu dès que les privilèges de session permettent l'accès à l'alias lui-même, même si les privilèges de session ne permettent pas l'accès aux attributs résolvant l'alias.
- Il est possible d'accéder à un attribut calculé même s'il n'y a pas de permissions sur les attributs sur lesquels il est construit.
- Vous pouvez assigner une action de permission à une classe singleton (type `singleton`), auquel cas elle sera appliquée à toutes ses fonctions exposées, ou bien à une fonction de singleton (type `singletonMethod`).
- Valeurs par défaut : dans l'implémentation actuelle, seul *Null* est disponible en tant que valeur par défaut.
- In REST [force login mode](../REST/authUsers.md#force-login-mode), the [`authentify()` function](../REST/authUsers.md#function-authentify) is always executable by guest users, whatever the permissions configuration.

Setting permissions requires to be consistent, in particular **update** and **drop** permissions also need **read** permission (but **create** does not need it).

## Privilèges et Rôles

Un **privilège** est la capacité technique d'exécuter des **actions** sur des **ressources**, tandis qu'un **rôle** est un privilège public destiné à être utilisé par un administrateur. Fondamentalement, un rôle rassemble plusieurs privilèges pour définir un profil utilisateur métier. Par exemple, "manageInvoices" pourrait être un privilège tandis que "secrétaire" pourrait être un rôle (qui inclut "manageInvoices" et d'autres privilèges).

Un privilège ou un rôle peut être associé à plusieurs combinaisons "action + ressource". Plusieurs privilèges peuvent être associés à une action. Un privilège peut inclure d'autres privilèges.

- Vous **créez** des privilèges et/ou des rôles dans le fichier `roles.json` (voir ci-dessous). Vous **configurez** leur portée en les assignant aux actions de permission appliquées aux ressources.

- Vous **autorisez** les privilèges et/ou les rôles pour chaque session utilisateur à l'aide de la fonction [`.setPrivileges()`](../API/SessionClass.md#setprivileges) de la classe `Session`.

### Exemple

Pour permettre un rôle dans une session :

```4d

exposed Function authenticate($identifier : Text; $password : Text)->$result : Text

    var $user : cs.UsersEntity

    Session.clearPrivileges()

    $result:="Your are authenticated as Guest"

    $user:=ds.Users.query("identifier = :1"; $identifier).first()

    If ($user#Null)
        If (Verify password hash($password; $user.password))
            Session.setPrivileges(New object("roles"; $user.role))
            $result:="Your are authenticated as "+$user.role
        End if
    End if


```

## `roles.json`

Le fichier `roles.json` décrit l'ensemble des paramètres de sécurité du projet.

### Fichier par défaut

Lorsque vous créez un projet, un fichier `roles.json` par défaut est créé à l'emplacement suivant : `<project folder>/Project/Sources/` (voir la section [Architecture](../Project/architecture.md#sources)).

Le fichier par défaut a le contenu suivant :

```json title="/Project/Sources/roles.json"

{
    "privileges": [
        {
            "privilege": "none",
            "includes": []
        }
    ],

    "roles": [],

    "permissions": {
        "allowed": [
            {
                "applyTo": "ds",
                "type": "datastore",
                "read": ["none"],
                "create": ["none"],
                "update": ["none"],
                "drop": ["none"],
                "execute": ["none"],
                "promote": ["none"]                
            }
        ]
    },

    "forceLogin": true

}

```

Pour un niveau de sécurité maximal, le privilège "none" est attribué à toutes les permissions du datastore, désactivant ainsi l'accès aux données pour tout l'objet `ds` par défaut. It is recommended not to modified or use this locking privilege, but to add specific permissions to each resource you wish to make available from web or REST requests ([see example below](#example-of-privilege-configuration)).

:::caution

Si aucun paramètre spécifique n'est défini dans le fichier `roles.json`, les accès ne sont pas limités. Cette configuration vous permet de développer l'application sans avoir à vous soucier des accès, mais est fortement déconseillée dans un environnement de production.

:::

:::note Compatibilité

Dans les versions précédentes, le fichier `roles.json` n'était pas créé par défaut. Depuis 4D 20 R6, lors de l'ouverture d'un projet existant qui ne contient pas de fichier `roles.json` ou les paramètres `"forceLogin" : true`, le bouton **Activer l'authentification REST via la fonction ds.authentify()** est disponible dans la page [**Fonctionnalités Web** de la boîte de dialogue Paramètres](../settings/web.md#access). Ce bouton met automatiquement à jour vos paramètres de sécurité (vous devrez peut-être modifier votre code, [voir cet article de blog](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/)).
:::

:::note Qodly Studio

Dans Qodly Studio for 4D, le mode peut être défini en utilisant l'option [**Force login**](../WebServer/qodly-studio.md#force-login) dans l'onglet Privileges.

:::

### Syntaxe

La syntaxe du fichier `roles.json` est la suivante:

| Nom de propriété |                                                                                     |                                                                                  | Type                             | Obligatoire | Description                                                                                                                        |
| ---------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| privileges       |                                                                                     |                                                                                  | Collection d'objets `privilege`  | X           | Liste de privilèges définis                                                                                                        |
|                  | \[].privilege  |                                                                                  | Text                             |             | Nom de privilège                                                                                                                   |
|                  | \[].includes   |                                                                                  | Collection de chaînes            |             | Liste de noms de privilèges inclus                                                                                                 |
| roles            |                                                                                     |                                                                                  | Collection d'objets `role`       |             | Liste de rôles définis                                                                                                             |
|                  | \[].role       |                                                                                  | Text                             |             | Nom de rôle                                                                                                                        |
|                  | \[].privileges |                                                                                  | Collection de chaînes            |             | Liste de noms de privilèges inclus                                                                                                 |
| permissions      |                                                                                     |                                                                                  | Object                           | X           | Liste d'actions autorisées                                                                                                         |
|                  | allowed                                                                             |                                                                                  | Collection d'objets `permission` |             | Liste de permissions autorisées                                                                                                    |
|                  |                                                                                     | \[].applyTo | Text                             | X           | Nom de [ressource](#resources) cible                                                                                               |
|                  |                                                                                     | \[].type    | Text                             | X           | Type de [ressource](#ressources) : "datastore", "dataclass", "attribute", "method", "singletonMethod", "singleton" |
|                  |                                                                                     | \[].read    | Collection de chaînes            |             | Liste de privilèges                                                                                                                |
|                  |                                                                                     | \[].create  | Collection de chaînes            |             | Liste de privilèges                                                                                                                |
|                  |                                                                                     | \[].update  | Collection de chaînes            |             | Liste de privilèges                                                                                                                |
|                  |                                                                                     | \[].drop    | Collection de chaînes            |             | Liste de privilèges                                                                                                                |
|                  |                                                                                     | \[].execute | Collection de chaînes            |             | Liste de privilèges                                                                                                                |
|                  |                                                                                     | \[].promote | Collection de chaînes            |             | Liste de privilèges                                                                                                                |
| forceLogin       |                                                                                     |                                                                                  | Boolean                          |             | True pour activer le [mode "forceLogin"](../REST/authUsers.md#force-login-mode)                                                    |

:::caution Rappel

- Le nom de privilège "WebAdmin" est réservé à l'application. Il est déconseillé d'utiliser ce nom pour les privilèges personnalisés.
- Les noms `privileges` et `roles` sont insensibles à la casse.

:::

### `Roles_Errors.json`

Le fichier `roles.json` est analysé par 4D au démarrage. Vous devez redémarrer l'application pour que les modifications dans ce fichier soient prises en compte.

En cas d'erreur(s) lors de l'analyse du fichier `roles.json`, 4D charge le projet mais désactive la protection globale d'accès - cela permet au développeur d'accéder aux fichiers et de corriger l'erreur. Un fichier d'erreur nommé `Roles_Errors.json` est généré dans le [dossier `Logs` du projet](../Project/architecture.md#logs) et décrit les lignes d'erreur. Ce fichier est automatiquement supprimé lorsque le fichier `roles.json` ne contient plus d'erreur.

Il est recommandé de vérifier au démarrage si un fichier `Roles_Errors.json` existe dans le dossier [Logs](.. Project/architecture.md#logs), ce qui signifie qu'il y a eu une erreur d'analyse et que les accès ne seront pas limités. Vous pouvez écrire par exemple :

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
If (Not(File("/LOGS/"+"Roles_Errors.json").exists))
…
Else // vous pouvez empêcher l'ouverture du projet
 ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")
 QUIT 4D
End if
```

## Exemple de configuration de privilèges

La bonne pratique est de garder verrouillés tous les accès aux données par défaut grâce au privilège "none" et de configurer le fichier `roles.json` pour n'ouvrir que les parties contrôlées aux sessions autorisées. Par exemple, pour autoriser certains accès aux sessions guest :

```json title="/Project/Sources/roles.json"

{
  "privileges": [
    {
      "privilege": "none",
      "includes": []
    }
  ],
  "roles": [],
  "permissions": {
    "allowed": [
      {
        "applyTo": "ds",
        "type": "datastore",
        "read": [
          "none"
        ],
        "create": [
          "none"
        ],
        "update": [
          "none"
        ],
        "drop": [
          "none"
        ],
        "execute": [
          "none"
        ],
        "promote": [
          "none"
        ]
      },
      {
        "applyTo": "ds.loginAs",
        "type": "method",
        "execute": [
          "guest"
        ]
      },
      {
        "applyTo": "ds.hasPrivilege",
        "type": "method",
        "execute": [
          "guest"
        ]
      },
      {
        "applyTo": "ds.clearPrivileges",
        "type": "method",
        "execute": [
          "guest"
        ]
      },
      {
        "applyTo": "ds.isGuest",
        "type": "method",
        "execute": [
          "guest"
        ]
      },
      {
        "applyTo": "ds.getPrivileges",
        "type": "method",
        "execute": [
          "guest"
        ]
      },
      {
        "applyTo": "ds.setAllPrivileges",
        "type": "method",
        "execute": [
          "guest"
        ]
      },
      {
        "applyTo": "mySingletonClass.createID",
        "type": "singletonMethod",
        "execute": [
          "guest"
        ]
      }
    ]
  },
  "forceLogin": true
}
```
