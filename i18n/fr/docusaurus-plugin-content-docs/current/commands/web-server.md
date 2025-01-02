---
id: web-server
title: WEB Server
displayed_sidebar: docs
---

<!-- REF #_command_.WEB Server.Syntax -->**WEB Server** : 4D.WebServer<br/>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->

<!--REF #_command_.WEB Server.Params-->

| Paramètres | Type                         |   | Description                                                                          |
| ---------- | ---------------------------- | - | ------------------------------------------------------------------------------------ |
| option     | Integer                      | → | Serveur Web à référencer (défaut si omis = `Web server database`) |
| Résultat   | 4D.WebServer | ← | Objet Serveur Web                                                                    |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*

<details><summary>Historique</summary>

| Release | Modifications                                             |
| ------- | --------------------------------------------------------- |
| 18 R3   | Ajout                                                     |
| 19      | prise en charge de .sessionCookieSameSite |

</details>

#### Description

La commande `WEB Server` <!-- REF #_command_.WEB Server.Summary -->retourne l'objet Web server par défaut, ou l'objet Web server défini via le paramètre *option*<!-- END REF -->.

Par défaut, si le paramètre *option* est omis, la commande renvoie une référence au serveur Web de la base de données, c'est-à-dire le serveur Web par défaut. Pour désigner le serveur Web à renvoyer, vous pouvez passer l'une des constantes suivantes dans le paramètre *option* :

| Constante                      | Valeur | Commentaire                                                                 |
| ------------------------------ | ------ | --------------------------------------------------------------------------- |
| `Web server database`          | 1      | Le serveur Web de la base courante (par défaut si omis)  |
| `Web server host database`     | 2      | Le serveur Web de la base hôte du composant                                 |
| `Web server receiving request` | 3      | Le serveur Web ayant reçu la requête (serveur Web cible) |

L'objet **Web server retourné** contient les valeurs courantes des [propriétés du serveur Web](../API/WebServerClass.md).

#### Exemple

L'objet Web server retourné contient les valeurs courantes des propriétés du serveur Web.

```4d
  // Méthode d'un composant
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

#### Voir également

[WEB Server list](web-server-list.md)\
[webServer.stop()](../API/WebServerClass.md#stop)
