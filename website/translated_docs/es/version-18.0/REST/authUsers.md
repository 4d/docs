---
id: version-18.0-authUsers
title: Sessions and Users
original_id: authUsers
---

## Session cookie

Each REST request is handled through a specific session on the 4D server.

When a first valid REST request is received, the server creates the session and sends a **session cookie** named `WASID4D`, containing the session UUID, for example:

    WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3
    

In the subsequent REST requests, make sure this cookie is included in the header so that you will reuse the same session. Otherwise, a new session will be opened, and another license used.

## Authenticating users

Once you have set up users and groups in your project's directory, you will need to have users log into the project to access and manipulate data.

You can log in a user to your application by passing the user's name and password to [`$directory/login`]($directory.md#directorylogin). Once logged in, you can retrieve the user's name by using [`$directory/currentUser`]($directory.md#directorycurrentUser) and can find out if he/she belongs to a specific group by using [`$directory/currentUserBelongsTo`]($directory.md#directorycurrentuserbelongsto). To log out the current user, call [`$directory/logout`]($directory.md#directorylogout).