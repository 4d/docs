---
id: open-data-file
title: OPEN DATA FILE
slug: /commands/open-data-file
displayed_sidebar: docs
---

<!--REF #_command_.OPEN DATA FILE.Syntax-->**OPEN DATA FILE** ( *cheminAccès* )<!-- END REF-->
<!--REF #_command_.OPEN DATA FILE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminAccès | Text | &#8594;  | Nom ou chemin d’accès complet du fichier de données à ouvrir |

<!-- END REF-->

#### Description 

<!--REF #_command_.OPEN DATA FILE.Summary-->La commande **OPEN DATA FILE** permet de changer à la volée le fichier de données ouvert par l’application 4D.<!-- END REF-->

Vous passez dans le paramètre *cheminAccès* le nom ou le chemin d’accès complet du fichier de données à ouvrir (fichier suffixé ".4DD"). Si vous passez uniquement un nom de fichier, il doit être placé à côté du fichier de structure de la base.

Si ce chemin d’accès désigne un fichier de données valide, 4D quitte la base en cours et la rouvre avec le fichier de données spécifié. En mode monoposte, la [On Exit database method](on-exit-database-method.md) et la [On Startup database method](on-startup-database-method.md) sont successivement appelées.

**Attention :** Comme cette commande provoque la fermeture préalable de l'application, elle doit être utilisée avec précaution dans la [On Exit database method](on-exit-database-method.md) ou une méthode appelée par cette méthode base afin de ne pas générer de boucle sans fin.

La commande est exécutée de manière asynchrone : après son appel, 4D continue d’exécuter le reste de la méthode. Ensuite, l’application se comporte comme si la commande **Quitter** avait été sélectionnée dans le menu **Fichier** : les boîtes de dialogue ouvertes sont annulées, les process ouverts ont 10 secondes pour se terminer avant d’être tués, etc.

Avant de lancer l’opération, la commande teste la validité du fichier de données spécifié. En outre, si le fichier a déjà été ouvert, la commande vérifie qu’il correspond bien à la structure courante.

Si vous passez une chaîne vide dans *cheminAccès*, la commande rouvre la base sans changer de fichier de données.

**4D Server :** A compter de 4D v13, cette commande peut être exécutée avec 4D Server. Dans ce contexte, elle effectue en interne un appel à [QUIT 4D](quit-4d.md) sur le serveur (entraînant l’apparition, sur chaque poste distant, d’une boîte de dialogue signalant que le serveur est en train de quitter) avant d'ouvrir le fichier désigné.

#### Exemple 

Dans le contexte du déploiement d'une application fusionnée, vous souhaitez ouvrir ou créer le fichier de données utilisateur dans la méthode base Sur ouverture. Cet exemple utilise le fichier de données par défaut (cf. *Gestion du fichier de données dans les applications finales*) :

```4d
 If(Data file="@default.4dd")
    If(Version type?? Application fusionnée)
       If(Is data file locked)
          $dataPath:=Get 4D folder(Active 4D Folder)+"data.4dd"
  //Si un fichier de données local existe déjà
          If(Test path name($dataPath)=Is a document)
             OPEN DATA FILE($dataPath) // on l'ouvre
          Else
             CREATE DATA FILE($dataPath) //on le crée
          End if
       End if
    End if
 End if
```

#### Voir aussi 

[CREATE DATA FILE](create-data-file.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 312 |
| Thread safe | &check; |
| Interdite sur le serveur ||


