---
id: get-database-measures
title: Get database measures
slug: /commands/get-database-measures
displayed_sidebar: docs
---

<!--REF #_command_.Get database measures.Syntax-->**Get database measures** {( *options* )} -> Résultat<!-- END REF-->
<!--REF #_command_.Get database measures.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| options | Objet | &#x1F852; | Options de retour |
| Résultat | Objet | &#x1F850; | Objet contenant des mesures sur la base |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get database measures.Summary-->La commande **Get database measures** vous permet d'obtenir un ensemble d'informations détaillées sur les événements du moteur de base de données de 4D.<!-- END REF--> Les informations renvoyées concernent les accès en lecture/écriture aux données depuis ou vers le disque ou le cache ainsi que l'utilisation des index de la base, les recherches et les tris. 

**Get database measures** retourne un seul objet contenant toutes les mesures utiles. Le paramètre *options* vous permet de paramétrer les informations retournées. 

##### Présentation de l'objet retourné 

L'objet retourné par la commande contient une seule propriété, nommée "DB", dont la structure est la suivante :

```RAW
{    "DB": {        "diskReadBytes": {…},        "cacheReadBytes": {…},        "cacheMissBytes": {…},        "diskWriteBytes": {…},        "diskReadCount": {…},        "cacheReadCount": {…},        "cacheMissCount": {…},        "diskWriteCount": {…},        "dataSegment1": {…},        "indexSegment": {…},        "tables": {…},        "indexes": {…}    }}
```

Cet objet est composé de huit propriétés élémentaires qui contiennent les mesures de base ("diskReadBytes", "cacheReadBytes", "cacheMissBytes", "diskWriteBytes", "diskReadCount", "cacheReadCount", "cacheMissCount", "diskWriteCount") ainsi que des propriétés additionnelles ("dataSegment1", "indexSegment", "tables", "index") qui peuvent elles-mêmes contenir les propriétés élémentaires mais appliquées à des niveaux différents (voir ci-dessous).

**Note :** Une propriété est présente dans l'objet uniquement si elle contient des valeurs. Lorsqu'une propriété est vide, elle n'est pas incluse dans l'objet. Par exemple, si la base a été ouverte en mode lecture seulement et que les index n'ont pas été sollicités, l'objet retourné ne contiendra pas les propriétés "diskWriteBytes", "diskWriteCount", "indexSegment" et "indexes".

##### Propriétés élémentaires 

```undefined
"diskReadBytes": {
    "value": 33486473620,
    "history": [        // optionnel
        {"value": 52564,"time": -1665},
        {"value": 54202,"time": -1649},
            …
    ]
}
```

##### dataSegment1 et indexSegment 

```undefined
{
"DB": {
"diskReadBytes": {
    "value": 718260
    },
"diskReadCount": {
    "value": 229
    },

"dataSegment1": {
    "diskReadBytes": {
    "value": 679092
    },
    "diskReadCount": {
    "value": 212
    }
    },
"indexSegment": {
    "diskReadBytes": {
    "value": 39168
    },
    "diskReadCount": {
    "value": 17
    }
}
```

##### tables 

```undefined
"tables": {
    "Employees": {…)
    "Companies": {…)
    }
```

##### indexes 

```undefined
"indexes": {
    "Employees": {
        "EmpLastName": {
                    "diskReadBytes": {…},
                    "cacheReadBytes": {…},
                    "cacheMissBytes": {…},
                    "diskWriteBytes": {…},

                    "diskReadCount": {…},
                    "cacheReadCount": {…},
                    "cacheMissCount": {…},
                    "diskWriteCount": {…}
            }
        "EmpLastName (Keyword)": {...},
        "index3Name": {…},
        "index4Name": {…},
        …
        }
        "Companies": {
            "Name": 
            (...)
                "queryCount": {
                    "value": 41
                },
                "sortCount": {
                    "value": 3
                },
                "insertKeyCount": {
                    "value": 2
                },
                "deleteKeyCount": {
                    "value": 16
                }
    table3Name: {…}
}
```

##### Paramètre options 

Le paramètre *options* vous permet de personnaliser les informations retournées par la commande. Dans *options*, vous devez passer un objet pouvant contenir jusqu'à trois propriétés : "withHistory", "historyLength" et "path".

| **Propriété**   | **Type**                     | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "withHistory"   | Booléen                      | "true" signifie que l'objet "history" devra être retourné par la commande; "false" signifie que l'objet retourné ne devra pas contenir d'objet "history"                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| "historyLength" | numérique                    | Définit la taille en secondes du tableau "history" retourné(\*).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| "path"          | chaîne \| tableau de chaînes | Chemin complet de la propriété spécifique ou tableau de chemins complets des propriétés spécifiques que vous voulez obtenir. Si vous passez une chaîne, seule la valeur correspondante est retournée dans l'objet "DB" (si le chemin est valide). Exemple : "DB.tables.Employees.records.diskWriteBytes". Si vous passez un tableau de chaînes, seules les valeurs correspondantes sont retournées dans l'objet "DB" (si les chemins sont valides). Exemple : \["DB.tables.Employee.records.diskWriteBytes", "DB.tables.Employee.records.diskReadCount","DB.dataSegment1.diskReadBytes"\] |

(\*) Comme décrit précédemment, l'historique n'est pas stocké sous forme d'une séquence de secondes mais uniquement sous forme de valeurs remarquables. Si rien ne se produit durant deux secondes ou plus, rien n'est stocké et une rupture apparaît dans le tableau "history". Par exemple, "time" peut contenir -2, -4, -5, -10, -15, -30 avec des valeurs "value" 200, 300, 250, 400, 500,150\. Si la propriété "historyLength" est fixée à 600 (10 minutes), le tableau retourné contiendra 0, -1, -2, -3 … -599 pour "time", et seules les propriétés "value" des secondes -2, -4, -5, -10, -15, -30 seront remplies. Toutes les autres propriétés "value" auront pour valeur 0 (zéro). De plus, comme décrit également, la seule limite du tableau d'historique interne est sa taille (200 éléments), et non le temps. Cela signifie que s'il y a une activité réduite pour une propriété spécifique, le moment le plus ancien peut ête très éloigné (p.e. -3600 pour il y a une heure). Il peut également contenir moins de 200 valeurs si la base vient juste d'être lancée. Dans ces cas, si l'heure interne de l'historique est plus récent que celui demandé OU si toutes les valeurs remarquables ont déjà ajoutées au tableau retourné, la valeur retournée sera -1\.   
Exemple : La base a été démarrée il y a 20 secondes et la taille demandée du tableau "history" est de 60 secondes. Les données retournées entre 0 et -20 seront bien constituées de valeurs et de 0, et les autres valeurs serront -1\. Lorsqu'une valeur "-1" est retournée, cela signifie soit que le temps demandé est top ancien, soit que la valeur n'est plus dans le tableau d'historique interne (c'est-à-dire que la limite des 200 éléments a été atteinte et que les valeurs plus anciennes ont été supprimées).

##### Client/serveur et composants 

Cette commande retourne des informations relatives à l'utilisation de la base de données. Cela signifie qu'elle ne retourne un objet valide contenant des valeurs significatives uniquement lorsqu'elle est appelée :

* 4D en mode local (lorsqu'elle est appelée depuis un composant, elle retourne les données de la base hôte),
* sur le serveur en mode client/serveur.

Si la commande est appelée depuis un 4D distant en mode client/serveur, l'objet est retourné vide.   
Dans ce contexte, si vous souhaitez obtenir des informations sur le serveur, le plus simple est de créer une méthode et d'activer l'option "Exécuter sur serveur". Ce principe fonctionne aussi pour un composant : si le composant est utilisé dans un contexte local, la commande retourne des informations sur la base hôte ; dans un contexte de 4D distant, elle retourne des informations sur la base du serveur. 

#### Exemple 1 

Vous souhaitez obtenir l'objet "history" dans l'objet retourné :

```4d
 var $param : Object
 var $measures : Object
 OB SET($param;"withHistory";True)
 $measures:=Get database measures($param)
```

#### Exemple 2 

```undefined
{
    "DB": {
        "cacheReadBytes": {
            "value": 9516637
        }
    }
}
```

#### Exemple 3 

Vous souhaitez obtenir les mesures d'octets lus dans le cache au cours des deux dernières minutes :

```4d
 var $oParams : Object
 var $measures : Object
 OB SET($oParams;"path";"DB.cacheReadBytes")
 OB SET($oParams;"withHistory";True)
 OB SET($oParams;"historyLength";2*60)
 $measures:=Get database measures($oParams)
```
