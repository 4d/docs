---
id: version-18.0-directory
title: '$directory'
original_id: directory
---

Le répertoire gère l'accès des utilisateurs via les requêtes REST.

## Syntaxe

| Syntaxe                                                               | Méthode | Description                                                               |
| --------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------- |
| [**$directory/currentUser**](#directorycurrentuser)                   | `GET`   | Retourne des informations sur l'utilisateur courant                       |
| [**$directory/currentUserBelongsTo**](#directorycurrentuserbelongsto) | `POST`  | Indique si l'utilisateur courant appartient à un groupe spécifique        |
| [**$directory/login**](#directorylogin)                               | `POST`  | Ouvre une session REST sur votre application 4D et connecte l'utilisateur |
| [**$directory/logout**](#directorylogout)                             | `GET`   | Déconnecte l'utilisateur courant                                          |


## $directory/currentUser

Retourne des informations sur l'utilisateur courant

### Description

En appelant `$directory/currentUser` après la connexion d'un utilisateur, vous pouvez récupérer les informations suivantes :

| Propriété | Type   | Description                                                |
| --------- | ------ | ---------------------------------------------------------- |
| userName  | Chaine | Nom d'utilisateur saisi pour se connecter à l'application. |
| fullName  | Chaine | Nom complet de l'utilisateur.                              |
| ID        | Chaine | UUID référençant l'utilisateur.                            |


### Exemple

Appelez `$directory/currentUser` pour identifier l'utilisateur courant de votre application.

`GET  /rest/$directory/currentUser`

**Résultat** :

    {
        "result": {
            "userName": "jsmith", 
            "fullName": "John Smith", 
            "ID": "12F169764253481E89F0E4EA8C1D791A"
        }
    }
    

Si aucun utilisateur n'est connecté, le résultat est le suivant :

    {
        "result": null
    }
    

## $directory/currentUserBelongsTo

Indique si l'utilisateur courant appartient à un GroupID ou GroupName spécifique.

### Description

Pour savoir si l'utilisateur actuellement connecté appartient à un groupe spécifique, utilisez `$directory/currentUserBelongsTo`. Vous pouvez passer soit l'ID du groupe (qui correspond au numéro de référence UUID du groupe) soit son nom tel que défini dans le répertoire du datastore.

Si nous voulons vérifier que l'utilisateur actuel est membre du groupe Ventes, nous devons passer *GroupID* ou *GroupName* dans le `POST`.

### Exemple

Vous trouverez ci-dessous un exemple de la façon de passer le GroupID ou GroupName dans les données `POST`.

`POST  /rest/$directory/currentUserBelongsTo`

**POST data**:

`["88BAF858143D4B13B26AF48C7A5A7A68"]`

ou

`["Ventes"]`

**Résultat** :

Si l'utilisateur courant appartient au groupe spécifié dans le tableau, la réponse sera la suivante :

    {
        "result": true
    }
    

Sinon, elle retournera :

    {
         "result": false
    }
    

## $directory/login

Ouvre une session REST sur votre application 4D et connecte l'utilisateur.

### Description

Utilisez `$directory/login` pour ouvrir une session dans votre application 4D via REST et connectez un utilisateur. Vous pouvez également modifier le timeout par défaut de la session 4D.

Tous les paramètres doivent être passés dans les **en-têtes** d'une méthode POST :

| Clé de l'en-tête   | Valeur de l'en-tête                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| username-4D        | Utilisateur - Non obligatoire                                                                      |
| password-4D        | Mot de passe - Non obligatoire                                                                     |
| hashed-password-4D | Mot de passe hâché - Non obligatoire                                                               |
| session-4D-length  | Timeout d'inactivité de la session (en minutes). Ne peut pas être inférieur à 60 - Non obligatoire |


### Exemple

```4d
C_TEXT($response;$body_t)
ARRAY TEXT($hKey;3)
ARRAY TEXT($hValues;3)
$hKey{1}:="username-4D"
$hKey{2}:="hashed-password-4D"
$hKey{3}:="session-4D-length"
$hValues{1}:="john"
$hValues{2}:=Generate digest("123";4D digest)
$hValues{3}:=120
$httpStatus:=HTTP Request(HTTP POST method;"database.example.com:9000";$body_t;$response;$hKey;$hValues)
```

**Résultat** :

Si la connexion a réussi, le résultat sera le suivant :

    {
        "result": true
    }
    

Sinon, la réponse sera la suivante :

    {
         "result": false
    }
    

## $directory/logout

Déconnecte l'utilisateur courant.

### Description

Pour déconnecter l'utilisateur courant de votre application, utilisez `$directory/logout`.

### Exemple

Vous appelez `$directory/logout` pour déconnecter l'utilisateur courant de l'application.

`GET  /rest/$directory/logout`

**Résultat** :

Si la déconnexion a réussi, le résultat sera le suivant :

    {
        "result": true
    }
    

Sinon, la réponse sera la suivante :

    {
         "result": false
    }