---
id: configuration
title: Configuration du serveur
---

Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your database directly, *i.e.* to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.

Pour commencer à utiliser les fonctionnalités REST, vous devez démarrer et configurer le serveur 4D REST.

> - Sur 4D Server, l'ouverture d'une session REST nécessite une licence client 4D gratuite disponible.<br>
> - On 4D single-user, you can open up to three REST sessions for testing purposes.   
>     You need to manage the [session cookie](authUsers.md#session-cookie) to use the same session for your requesting application.



## Démarrage du serveur REST

Pour des raisons de sécurité, par défaut, 4D ne répond pas aux requêtes REST. If you want to start the REST Server, you must check the **Expose as REST server** option in the "Web/REST resource" page of the database settings in order for REST requests to be processed.

![alt-text](assets/en/REST/Settings.png)

> Les services REST utilisent le serveur HTTP 4D; vous devez donc vous assurer que le serveur Web 4D est lancé.

Le message d'avertissement "Attention, vérifiez les privilèges d'accès" s'affiche lorsque vous cochez cette option, pour attirer votre attention sur le fait que lorsque les services REST sont activés, l'accès par défaut aux objets de base de données est gratuit tant que les accès REST n'ont pas été configurés.


## Configuration de l'accès REST

Par défaut, les accès REST sont ouverts à tous les utilisateurs, ce qui n'est évidemment pas recommandé pour des raisons de sécurité et de contrôle de l'utilisation des licences clientes.

Vous pouvez configurer les accès REST de l'une des manières suivantes :
- assigning a **Read/Write** user group to REST services in the "Web/REST resource" page of the Database Settings;
- saisir d'une méthode base `On REST Authentication`pour intercepter et gérer chaque demande REST initiale.

> Vous ne pouvez pas utiliser les deux fonctionnalités simultanément. Une fois qu'une méthode base `On REST Authentication` a été définie, 4D lui donne entièrement le contrôle des requêtes REST .


### Utilisation des paramètres de la base

The **Read/Write** menu in the "Web/REST resource" page of the database settings specifies a group of 4D users that is authorized to establish the link to the 4D database using REST queries.

By default, the menu displays **<Anyone>**, which means that REST accesses are open to all users. Une fois que vous avez spécifié un groupe, seul un compte utilisateur 4D appartenant à ce groupe peut être utilisé pour [accéder à 4D via une requête REST](authUsers.md). Si un compte utilisé n'appartient pas à ce groupe, 4D renvoie une erreur d'authentification à l'expéditeur de la requête.

> Pour que ce paramètre prenne effet, la méthode base `On REST Authentication` ne doit pas être définie. S'il existe, 4D ignore les paramètres d'accès définis dans les propriétés de la base.

### Méthode base On REST Authentication
La méthode base `On REST Authentication` vous permet de contrôler de manière personnalisée l’ouverture des sessions REST sur 4D. Cette méthode base est automatiquement appelée lorsqu'une nouvelle session est ouverte à l'aide d'une requête REST. Lorsqu'une [requête d’ouverture de session REST](authUsers.md) est reçue, les identifiants de connexion sont fournis dans l’en-tête de la requête. La méthode base `On REST Authentication` est appelée afin de vous permettre d’évaluer ces identifiants. Vous pouvez utiliser la liste des utilisateurs de la base 4D ou votre propre table d’identifiants. Pour obtenir plus d'informations, veuillez vous reporter à la [documentation](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.fe.html) de la méthode base `On REST Authentication`.



## Exposer les tables et les champs

Une fois que les services REST sont activés dans la base 4D, par défaut une session REST peut accéder à toutes les tables et les champs du datastore, et utiliser leurs données. Par exemple, si votre base de données contient une table [Employee], il est possible d'écrire :

```
http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"

```
Cette requête retournera tous les employés dont le champ "salary" est supérieur à 10 000.

> Les tables et/ou champs 4D dont l'attribut est "invisible" sont également exposés par défaut dans REST.

Si vous souhaitez personnaliser les objets du datastore accessibles via REST, vous devez désactiver l'exposition de chaque table et/ou champ que vous souhaitez masquer. Lorsqu'une requête REST tente d'accéder à une ressource non autorisée, 4D retourne une erreur.

### Exposer des tables

Par défaut, toutes les tables sont exposées dans REST.

Pour des raisons de sécurité, vous pouvez choisir d'exposer uniquement certaines tables du datastore aux appels REST. Par exemple, si vous avez créé une table [Users] stockant les noms d'utilisateur et les mots de passe, il serait préférable de ne pas l'exposer.

Pour supprimer l'exposition REST d'une table :

1. Affichez l'Inspecteur de table dans l'Editeur de structure et sélectionnez la table à modifier.

2. Uncheck the **Expose as REST resource** option: ![alt-text](assets/en/REST/table.png) Do this for each table whose exposure needs to be modified.


### Exposer des champs

Par défaut, touts les champs d'une base 4D sont exposés dans REST.

Vous pouvez choisir d'exposer certains champs de vos tables à REST. Par exemple, si vous ne souhaitez pas exposer le champ [Employees]Salary.

Pour supprimer l'exposition REST d'un champ :

1. Affichez l'Inspecteur de champ dans l'Editeur de structure et sélectionnez le champ à modifier.

2. Uncheck the **Expose as REST resource** for the field. ![alt-text](assets/en/REST/field.png) Répétez cette opération pour chaque champ dont l'exposition doit être modifiée.

> Pour qu'un champ soit accessible via REST, la table parente doit l'être également. Si la table parente n'est pas exposée, aucun de ses champs ne le sera, quel que soit leur statut.
