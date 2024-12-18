---
id: system-info
title: System info
slug: /commands/system-info
displayed_sidebar: docs
---

<!--REF #_command_.System info.Syntax-->**System info**  : Object<!-- END REF-->
<!--REF #_command_.System info.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Object | &#8592; | Informations système |

<!-- END REF-->

#### Description 

<!--REF #_command_.System info.Summary-->La commande **System info** retourne un objet contenant les informations sur le système d'exploitation ainsi que les caractéristiques matérielles et logicielles de la machine sur laquelle elle est exécutée.<!-- END REF-->

La commande retourne les informations suivantes :

| Propriété         |  |             | Type                                | Description                                                                                                                                                                                                             | Exemple                                                                         |
|-------------------|----------------|-------------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| accountName       |                |             | chaîne                              | Le nom du compte de l'utilisateur courant. Généralement utilisé pour identifier un compte dans le répertoire.                                                                                                           | "msmith"                                                                        |
| cores             |                |             | nombre                              | Nombre total de coeurs. Dans le cas de machines virtuelles, le nombre total de coeurs alloués à celles-ci.                                                                                                              | 4                                                                               |
| cpuThreads        |                |             | nombre                              | Nombre total de threads.                                                                                                                                                                                                | 8                                                                               |
| machineName       |                |             | chaîne                              | Le nom de la machine tel que défini dans les paramètres réseau du système d'exploitation.                                                                                                                               | "LAPTOP-M3BLHGSG"                                                               |
| macRosetta        |                |             | booléen                             | Vrai si 4D est émulé par Rosetta sur macOS, Faux sinon (non émulé ou sous Windows).                                                                                                                                     | Vrai                                                                            |
| model             |                |             | chaîne                              | Nom du modèle d'ordinateur.                                                                                                                                                                                             | "iMac12,2", "Dell", "Acer", "VMware", etc.                                      |
| networkInterfaces |                |             | collection                          | Adresses réseau physiques et actives uniquement.                                                                                                                                                                        |                                                                                 |
|                   | ipAddresses    |             | collection                          |                                                                                                                                                                                                                         |                                                                                 |
|                   |                | ip          | chaîne                              | L'adresse de l'interface réseau.                                                                                                                                                                                        | "129.186.81.80"                                                                 |
|                   |                | type        | chaîne                              | Le type de l'interface réseau.                                                                                                                                                                                          | "ipv4", "ipv6"                                                                  |
|                   | name           |             | chaîne                              | Le nom de l'interface.                                                                                                                                                                                                  | "Intel(R) 82574L Gigabit Network Connection"                                    |
|                   | type           |             | chaîne                              | Le type de l'interface (à noter que le type "ethernet" est fourni pour les interfaces bluetooth).                                                                                                                       | "wifi", "ethernet"                                                              |
| osVersion         |                |             | chaîne                              | La version du système d'exploitation et son numéro de build (\*).                                                                                                                                                        | "Windows 10 Pro (17763.1577)"                                                   |
| osLanguage        |                |             | chaîne                              | Langue du système défini par l'utilisateur courant. Exprimée dans la norme définie par la RFC 3066. Voir Codes de langue dans le manuel Mode Développement pour une liste complète.                                     | "fr", "en", "ja", "de", etc.                                                    |
| physicalMemory    |                |             | nombre                              | Le volume de stockage de la mémoire disponible sur la machine (en kilo-octets).                                                                                                                                         | 16777216                                                                        |
| processor         |                |             | chaîne                              | Le nom, le type et la vitesse du processeur.                                                                                                                                                                            | "Intel(R) Core(TM) i7-2600 CPU @ 3.40GHz"                                       |
| uptime            |                |             | nombre                              | La durée totale (en secondes) depuis que la machine a démarré.                                                                                                                                                          | 3600                                                                            |
| userName          |                |             | chaîne                              | L'utilisateur courant de la machine. Généralement utilisé comme nom d'affichage (c'est-à-dire lors de la connexion à votre ordinateur).                                                                                 | "Mary Smith"                                                                    |
| volumes           |                |             | collection                          |                                                                                                                                                                                                                         |                                                                                 |
|                   | available      |             | nombre                              | L'espace restant pouvant être utilisé.                                                                                                                                                                                  | 524288                                                                          |
|                   | capacity       |             | nombre                              | Le volume total possible (en kilo-octets).                                                                                                                                                                              | 1048576                                                                         |
|                   | disk           |             | objet \| collection (Mac seulement) |                                                                                                                                                                                                                         |                                                                                 |
|                   |                | description | chaîne                              | Un bref résumé décrivant le disque.                                                                                                                                                                                     | "HP LOGICAL VOLUME SCSI Disk Device"                                            |
|                   |                | identifier  | chaîne                              | ID du (des) disque(s) (UUID sur Mac et disque physique sous Windows)                                                                                                                                                    | Mac - "87547BDD-EA75-4F48-8BFA-9A7E393EEAB0", Windows - "\\\\.\\PHYSICALDRIVE0" |
|                   |                | size        | nombre                              | La capacité totale du disque (en kilo-octets).                                                                                                                                                                          | 104857600                                                                       |
|                   |                | interface   | chaîne                              | Le type d'interface sur la machine.                                                                                                                                                                                     | "USB", "network", "SATA", "SCSI", "cd/dvd", "PCI"                               |
|                   | fileSystem     |             | chaîne                              | Le système de fichiers utilisé par le système d'exploitation pour stocker et récupérer des fichiers sur le disque dur.                                                                                                  | "NTFS", "Journaled HFS+", "GPFS", etc.                                          |
|                   | mountPoint     |             | chaîne                              | Le répertoire dans le système de fichiers actuellement accessible sur lequel un système de fichiers supplémentaire est monté (c'est-à-dire logiquement attaché). Notez  que celui-ci est au format POSIX pour les Macs. | Mac -  "/Volumes/Free HD", Windows - "C:"                                       |
|                   | name           |             | chaîne                              | seulement sur mac - nom du volume                                                                                                                                                                                       | "iMac-27-Program6"                                                              |



(\*) Pour déterminer simplement la plate-forme utilisée, vous pouvez utiliser les commandes [Is macOS](is-macos.md) et [Is Windows](is-windows.md).

**Note** : Dans le cas de machines virtuelles, les informations retournées sont celles de la machine virtuelle.

#### Exemple 

Le code suivant sur une machine Windows :

```4d
 var $systemInfo : Object
 $systemInfo:=System info
```

retourne un objet contenant les informations suivantes :

```json
{
   "machineName":"LAPTOP-M3BLHGSG",
   "osVersion":"Windows 10 Pro 1809 (17763.1577)",
   "osLanguage":"fr",
   "accountName":"msmith",
   "userName":"mary smith",
   "processor":"Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz",
   "cores":4,
   "cpuThreads":8,
   "networkInterfaces":[
      {
         "type":"ethernet",
         "name":"Intel(R) 82574L Gigabit Network Connection",
         "ipAddresses":[
            {
               "type":"ipV4",
               "ip":"129.138.10.17"
            },
            {
               "type":"ipV6",
               "ip":"z1009:0yxw:0000:85v6:0000:0000:ut1s:8001"
            }
         ]
      },
      {
         "type":"wifi",
         "name":"Wi-Fi",
         "ipAddresses":[
            {
               "type":"ipV4",
               "ip":"129.138.50.8"
            },
            {
               "type":"ipV6",
               "ip":"a1002:0bc8:0000:85d6:0000:0000:ef1g:7001"
            }
         ]
      }
   ],
   "uptime":3600,
   "model":"HP",
   "macRosetta":false,
   "physicalMemory":16777216,
   "volumes":[
      {
         "mountPoint":"C:",
         "capacity":1048576,
         "available":524288,
         "fileSystem":"NTFS",
         "disk":{
            "identifier":"\\\\.\\PHYSICALDRIVE0",
            "interface":"SCSI",
            "size":157284382,
            "description":"Lecteur de disque"
         }
      },
      {
         "mountPoint":"E:",
         "capacity":51198972,
         "available":51025280,
         "fileSystem":"NTFS",
         "disk":{
            "identifier":"\\\\.\\PHYSICALDRIVE0",
            "interface":"SCSI",
            "size":157284382,
            "description":"Lecteur de disque"
         }
      }
   ]
}
```

#### Voir aussi 

[Application info](application-info.md)  
[Is macOS](is-macos.md)  
[Is Windows](is-windows.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1571 |
| Thread safe | &check; |


