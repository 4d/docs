---
id: directory
title: '$directory'
---

Le répertoire gère l'accès des utilisateurs via les requêtes REST.


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
$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)
```

**Résultat** :

Si la connexion a réussi, le résultat sera le suivant :

```
{
    "result": true
}
```

Sinon, la réponse sera la suivante :

```
{
     "result": false
}
```
