---
id: directory
title: $directory
---

Le répertoire gère l'accès des utilisateurs via les requêtes REST.

## $directory/login

Ouvre une session REST sur votre application 4D et connecte l'utilisateur.

### Description

Utilisez `$directory/login` pour ouvrir une session dans votre application 4D via REST et connectez un utilisateur. Vous pouvez également modifier le timeout par défaut de la session 4D.

Tous les paramètres doivent être passés dans les **en-têtes** d'une méthode POST :

| Clé de l'en-tête  | Valeur de l'en-tête                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| username-4D       | Utilisateur - Non obligatoire                                                                                                         |
| password-4D       | Password in plain text - Not mandatory                                                                                                |
| session-4D-length | Timeout d'inactivité de la session (en minutes). Ne peut pas être inférieur à 60 - Non obligatoire |

:::caution

Since the password is transmitted in plain text, it is strongly recommended to use a secured https connection for the login request.

:::

### Exemple

```4d
C_TEXT($response;$body_t)
ARRAY TEXT($hKey;3)
ARRAY TEXT($hValues;3)
$hKey{1}:="username-4D"
$hKey{2}:="password-4D"
$hKey{3}:="session-4D-length"
$hValues{1}:="john"
$hValues{2}:="123"
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
