---
id: authUsers
title: Authenticating Users
---

Once you have set up users and groups in your project's directory, you will need to have users log into the project to access and manipulate data.

You can log in a user to your application by passing the user's name and password to [`$directory/login`](directory_login). Once logged in, you can retrieve the user's name by using [`$directory/currentUser`](directory_currentUser) and can find out if he/she belongs to a specific group by using [`$directory/currentUserBelongsTo`](directory_currentUserBelongsTo). To log out the current user, call [`$directory/logout`](directory_logout).

