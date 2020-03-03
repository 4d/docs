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

Vous pouvez connecter un utilisateur à votre application en passant le nom et le mot de passe de l'utilisateur dans [`$directory/login`](directory_login). Une fois connecté, vous pouvez récupérer le nom de l'utilisateur en utilisant [`$directory/currentUser`](directory_currentUser) et savoir s'il appartient à un groupe spécifique en utilisant [`$directory/currentUserBelongsTo`](directory_currentUserBelongsTo). Pour déconnecter l'utilisateur actuel, appelez [`$directory/logout`](directory_logout).