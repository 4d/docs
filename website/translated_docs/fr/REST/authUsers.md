---
id: authUsers
title: Sessions et utilisateurs
---

## Cookie de session

Chaque requête REST est gérée via une session spécifique sur le serveur 4D.

Lorsqu'une première requête REST valide est reçue, le serveur crée la session et envoie **un cookie de session** nommé `WASID4D`, contenant l'UUID de session, par exemple :

    WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3
    

Assurez-vous, dans les requêtes REST, que ce cookie est inclus dans l'en-tête afin de réutiliser la même session. Sinon, une nouvelle session sera ouverte et une autre licence utilisée.

## Authentification des utilisateurs

Une fois que vous avez configuré les utilisateurs et les groupes dans le répertoire de votre projet, vous devrez demander aux utilisateurs de se connecter au projet pour accéder aux données et les manipuler.

You can log in a user to your application by passing the user's name and password to [`$directory/login`]($directory.md#directorylogin). Once logged in, you can retrieve the user's name by using [`$directory/currentUser`]($directory.md#directorycurrentUser) and can find out if he/she belongs to a specific group by using [`$directory/currentUserBelongsTo`]($directory.md#directorycurrentuserbelongsto). To log out the current user, call [`$directory/logout`]($directory.md#directorylogout).