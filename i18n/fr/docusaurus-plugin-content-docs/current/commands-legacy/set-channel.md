---
id: set-channel
title: SET CHANNEL
slug: /commands/set-channel
displayed_sidebar: docs
---

<!--REF #_command_.SET CHANNEL.Syntax-->**SET CHANNEL** ( *port* ; *param* ) <br/>
**SET CHANNEL** ( *opération* ; *nomFichier* )<!-- END REF-->
<!--REF #_command_.SET CHANNEL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| port | Integer | &#8594;  | Numéro de port série |
| param | Integer | &#8594;  | Paramètres de communication |
| SET CHANNEL ( opération ; nomFichier ) |
| Paramètre | Type | Description |
| opération | Integer | &#8594;  | Opération à effectuer sur document |
| nomFichier | Text | &#8594;  | Nom du document |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET CHANNEL.Summary-->La commande **SET CHANNEL** permet d'ouvrir un port série ou un document.<!-- END REF--> Vous ne pouvez ouvrir qu'un port série ou un document à la fois avec cette commande.

**Note historique :** A l'origine, **SET CHANNEL** a été la première commande 4D permettant de travailler avec les ports série et des documents sur disque. Depuis, de nouvelles commandes ont été ajoutées. Aujourd'hui, vous pouvez généralement travailler avec des documents sur disque à l'aide des commandes [Open document](open-document.md), [Create document](create-document.md) et [Append document](append-document.md), puis lire et écrire des caractères dans les documents avec [Create document](create-document.md) et [RECEIVE PACKET](receive-packet.md) (ces deux commandes fonctionnent aussi avec **SET CHANNEL**). Cependant, si vous souhaitez utiliser les commandes [SEND VARIABLE](send-variable.md), [RECEIVE VARIABLE](receive-variable.md), [SEND RECORD](send-record.md) et [RECEIVE RECORD](receive-record.md), vous devez appeler **SET CHANNEL** pour accéder aux documents sur disque. 

La description de la commande **SET CHANNEL** se compose de deux sections :

* Travailler avec les ports série
* Travailler avec des documents

#### Travailler avec les ports série : REGLER SERIE(port;param) 

La première syntaxe de **SET CHANNEL** ouvre un port série et définit le protocole de communication ainsi que des informations supplémentaires. Les données peuvent être envoyées par les commandes [SEND PACKET](send-packet.md), [SEND RECORD](send-record.md) ou [SEND VARIABLE](send-variable.md), et reçues par les commandes [RECEIVE BUFFER](receive-buffer.md), [RECEIVE PACKET](receive-packet.md), [RECEIVE VARIABLE](receive-variable.md) ou [RECEIVE RECORD](receive-record.md).

* Le premier paramètre, *port*, définit le port et le protocole utilisés. Vous pouvez adresser jusqu'à 99 ports série (un par un).  
Le tableau suivant liste les valeurs possibles du paramètre *port* :  

| **Valeurs port** | **Description**                                                                  |  
| ---------------- | -------------------------------------------------------------------------------- |  
| 0                | Port imprimante (Mac) ou COM2 (Windows) sans protocole                           |  
| 1                | Port modem (Mac) ou COM1 (Windows) sans protocole                                |  
| 20               | Port imprimante (Mac) ou COM2 (Windows) avec protocole logiciel tel que XON/XOFF |  
| 21               | Port modem (Mac) ou COM1 (Windows) avec protocole logiciel tel que XON/XOFF      |  
| 30               | Port imprimante (Mac) ou COM2 (Windows) avec protocole matériel tel que RTS/CTS  |  
| 31               | Port modem (Mac) ou COM1 (Windows) avec protocole matériel tel que RTS/CTS       |  
| 101 à 199        | Communication série sans protocole\*                                             |  
| 201 à 299        | Communication série avec protocole logiciel tel que XON/XOFF\*                   |  
| 301 à 399        | Communication série avec protocole matériel tel que RTS/CTS\*                    |

**Important :** La valeur que vous passez dans *port* doit désigner un port série "logique" reconnu par votre système d'exploitation. Par exemple, pour que vous puissiez utiliser les valeurs 101, 203 et 325, les ports série COM1, COM3 et COM25 doivent avoir été correctement configurés. 

##### Note sur les ports série 

En standard, les systèmes Mac OS et Windows reconnaissent deux ports série logiques : sous Mac OS, le port modem et le port imprimante ; sous Windows, les ports COM1 et COM2\. Toutefois, des ports série supplémentaires peuvent être ajoutés, par l'intermédiaire de cartes d'extension. 4D n’adressait à l'origine que les deux ports série standard, et a intégré par la suite la gestion des ports série supplémentaires. Pour des raisons de compatibilité, les deux systèmes d’adressage ont été conservés.  

* Si vous souhaitez adresser uniquement un port série standard (imprimante/COM2 ou modem/COM1), vous pouvez passer dans le paramètre *port* soit une des valeurs 0, 1, 20, 21, 30 et 31 (correspondant à l’ancien mode de fonctionnement de 4D), soit une valeur > 100 (cf. ci-dessous).
* Si vous souhaitez adresser des ports série "étendus", vous devez passer dans *port* (pour adresser le Nième port série) la valeur N+100, augmentée éventuellement de 100 ou de 200, si vous voulez utiliser respectivement un protocole logiciel ou matériel.

##### Exemple 1 

Vous souhaitez utiliser le port imprimante/COM2 sans protocole, vous pouvez utiliser l'une des syntaxes suivantes :

```4d
 SET CHANNEL(0;param)
```

ou

```4d
 SET CHANNEL(102;param)
```

##### Exemple 2 

Vous souhaitez utiliser le port modem/COM1 avec le protocole XON/XOFF, vous pouvez utiliser l'une des syntaxes suivantes :

```4d
 SET CHANNEL(21;param)
```

ou

```4d
 SET CHANNEL(201;param)
```

##### Exemple 3 

Vous souhaitez utiliser le port COM25 avec le protocole RTS/CTS, vous devez utiliser la syntaxe suivante : 

```4d
 SET CHANNEL(325;param)
```

* Le second paramètre, *param*, permet de fixer la vitesse, le nombre de bits de données, le nombre de bits de stop et la parité. La valeur de *param* se calcule en additionnant les valeurs de vitesse, de bits de données, de bits de stop et de parité, telles que définies dans le tableau ci-dessous. Par exemple, pour paramétrer la communication à 1200 bauds, 8 bits de données, 1 bit de stop et aucune parité, passez 19550 (soit 94 + 3072 + 16384 + 0) dans le paramètre *param*.  
| **Contrôle**       | **Valeur** *param* **(à cumuler)** | **Fonction** |  
| ------------------ | ---------------------------------- | ------------ |  
| Vitesse (en bauds) | 380                                | 300          |  
| | 189              | 600                                |              |  
| | 94               | 1200                               |              |  
| | 62               | 1800                               |              |  
| | 46               | 2400                               |              |  
| | 30               | 3600                               |              |  
| | 22               | 4800                               |              |  
| | 14               | 7200                               |              |  
| | 10               | 9600                               |              |  
| | 4                | 19200                              |              |  
| | 2                | 28800                              |              |  
| | 1                | 38400                              |              |  
| | 0                | 57600                              |              |  
| | 1022             | 115200                             |              |  
| | 1021             | 230400                             |              |  
| Bits de données    | 0                                  | 5            |  
| | 2048             | 6                                  |              |  
| | 1024             | 7                                  |              |  
| | 3072             | 8                                  |              |  
| Bits de stop       | 16384                              | 1            |  
| | –32768           | 1,5                                |              |  
| | –16384           | 2                                  |              |  
| Parité             | 0                                  | Aucune       |  
| | 4096             | Impaire                            |              |  
| | 12288            | Paire                              |              |

**Astuce :** Les différentes valeurs numérique à cumuler et à passer dans les paramètres *port* et *param* (à l'exception des valeurs de COM1...COM99) sont disponibles en tant que **Constantes** prédéfinies dans le thème *Communications* de l'Explorateur, en mode Développement. Pour les valeurs de COM1...COM99, vous devez utiliser des valeurs numériques littérales.

Lorsque vous n'avez plus besoin d'un port série, vous devez le refermer. Pour cela, appelez de nouveau **SET CHANNEL** et passez-lui la valeur 11\. Exemple :

```4d
 SET CHANNEL(11) //Referme un port série préalablement ouvert
```

#### Travailler avec des documents : REGLER SERIE(opération;document) 

La seconde syntaxe de la commande **SET CHANNEL** vous permet de créer, ouvrir ou fermer un document. A la différence des commandes du thème *Documents système*, **SET CHANNEL** ne permet d'ouvrir qu'un document à la fois. Le document peut être "lu à partir de" ou "écrit dans". Reportez-vous à la section *Présentation des documents système* pour plus d'informations sur ce point. 

Le premier paramètre, *opération*, définit l'opération à effectuer avec le document désigné par *document*. Le tableau suivant dresse la liste les valeurs d'*opération* et le résultat obtenu, en fonction de la valeur de *document*.   
La première colonne fournit les valeurs possibles du paramètre *opération*. La deuxième colonne fournit les valeurs possibles du paramètre *document*. La troisième colonne décrit le résultat obtenu. Par exemple, pour afficher un fichier de type texte dans une boîte de dialogue standard d'ouverture de document, vous pouvez écrire l'instruction suivante :

```4d
 SET CHANNEL(13;"")
```

| **Opération** | **Document**     | **Résultat**                                                                                               |
| ------------- | ---------------- | ---------------------------------------------------------------------------------------------------------- |
| 10            | Chaîne           | Ouvre le document dont le nom est spécifié par Chaîne. Si le document n'existe pas, il est créé et ouvert. |
| 10            | "" (chaîne vide) | Affiche la boîte de dialogue d'ouverture de fichier. Tous les types de fichiers sont présentés.            |
| 11            | Aucun            | Referme un fichier ouvert.                                                                                 |
| 12            | "" (chaîne vide) | Affiche la boîte de dialogue standard d'enregistement de fichier, permettant de créer un nouveau fichier.  |
| 13            | "" (chaîne vide) | Affiche la boîte de dialogue d'ouverture de fichier. Seuls les fichiers de type Texte sont présentés.      |

Toutes les opérations décrites dans ce tableau modifient la variable système Document en conséquence. De plus, la variable système OK prend la valeur 1 si l'opération s'est déroulée correctement, 0 sinon.

##### Exemple 4 

Reportez-vous aux exemples des commandes [RECEIVE BUFFER](receive-buffer.md), [SET TIMEOUT](set-timeout.md) et [RECEIVE RECORD](receive-record.md).

#### Voir aussi 

[Append document](append-document.md)  
*Communications*  
[Create document](create-document.md)  
[GET SERIAL PORT MAPPING](get-serial-port-mapping.md)  
[Open document](open-document.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND PACKET](send-packet.md)  
[SEND RECORD](send-record.md)  
[SEND VARIABLE](send-variable.md)  
[SET TIMEOUT](set-timeout.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 77 |
| Thread safe | &check; |
| Modifie les variables | OK, Document |
| Interdite sur le serveur ||


