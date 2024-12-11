---
id: application-type
title: Application type
slug: /commands/application-type
displayed_sidebar: docs
---

<!--REF #_command_.Application type.Syntax-->**Application type**  : Integer<!-- END REF-->
<!--REF #_command_.Application type.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Valeur numérique représentant le type de l'application |

<!-- END REF-->

#### Description 

<!--REF #_command_.Application type.Summary-->La fonction **Application type** renvoie une valeur numérique qui représente le type de l'environnement 4D que vous utilisez.<!-- END REF--> 4D vous fournit les constantes prédéfinies suivantes :

| Constante         | Valeur | Comment                                                                                                           |
| ----------------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| 4D Desktop        | 3      |                                                                                                                   |
| 4D Local mode     | 0      |                                                                                                                   |
| 4D Remote mode    | 4      |                                                                                                                   |
| 4D Server         | 5      |                                                                                                                   |
| 4D Volume desktop | 1      |                                                                                                                   |
| tool4d            | 6      | Pour plus d'informations, voir [tool4D](http://developer.4d.com/docs/next/Admin/cli#tool4d) sur developer.4d.com. |

**Note :** *4D Desktop* intègre certaines offres de déploiement, comme par exemple "4D SQL Desktop".

#### Exemple 

Quelque part dans votre code, ailleurs que dans la *On Server Startup Database Method*, vous voulez vérifier si l'utilisateur a ouvert la base avec 4D Server. Pour cela, vous pouvez écrire les lignes de code suivantes :

```4d
 If(Application type=4D Server)
  //Exécuter les actions nécessaires
 End if
```

#### Voir aussi 

[Application version](application-version.md)  
[Version type](version-type.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 494 |
| Thread safe | &check; |
| Interdite sur le serveur ||


