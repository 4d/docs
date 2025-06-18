---
id: date-time-formats
title: Formats date et heure
---

A tout moment dans vos projets 4D, vous pouvez être amené à formater des valeurs de date et/ou d'heure en fonction des spécificités de l'application, la plateforme ou l'interface.

4D comprend une liste étendue de motifs (*patterns*) que vous pouvez utiliser pour créer et appliquer des formats de date et d'heure personnalisés dans vos applications, en plus des formats par défaut. Les modèles de format personnalisés sont pris en charge par les fonctions suivantes :

- la commande [`String`](../commands-legacy/string.md),
- les commandes [`OBJECT SET FORMAT`](../commands-legacy/object-set-format.md) et [`OBJECT Get format`](../commands-legacy/object-get-format.md),
- les propriétés de format de date et d'heure pour les objets de formulaire, disponibles dans la liste des propriétés ou dans les propriétés JSON [`dateFormat`](../FormObjects/properties_Display.md/#date-format) et [`timeFormat`](../FormObjects/properties_Display.md/#time-format).

## Liste des motifs

Le tableau suivant répertorie tous les motifs pris en charge pour les formats de date et d'heure.

| Symbole | Description                                                              | Motif         | Exemple de sortie                                                                                     |
| ------- | ------------------------------------------------------------------------ | ------------- | ----------------------------------------------------------------------------------------------------- |
| G       | indicateur d'époque                                                      | G, GG, ou GGG | ap. J.-C.                                             |
|         |                                                                          | GGGG          | après Jésus-Christ                                                                                    |
|         |                                                                          | GGGGG         | A                                                                                                     |
| y       | année                                                                    | yy            | 96                                                                                                    |
|         |                                                                          | y ou yyyy     | 1996                                                                                                  |
| Y       | année de "Semaine de l'année"                                            | Y             | 1997                                                                                                  |
| u       | année prolongée                                                          | u             | 4601                                                                                                  |
| Q       | trimestre                                                                | Q             | 2                                                                                                     |
|         |                                                                          | QQ            | 02                                                                                                    |
|         |                                                                          | QQQ           | Q2                                                                                                    |
|         |                                                                          | QQQQ          | 2e trimestre                                                                                          |
|         |                                                                          | QQQQQ         | 2                                                                                                     |
| q       | trimestre seul                                                           | q             | 2                                                                                                     |
|         |                                                                          | qq            | 02                                                                                                    |
|         |                                                                          | qqq           | Q2                                                                                                    |
|         |                                                                          | qqqq          | 2e trimestre                                                                                          |
|         |                                                                          | qqqqq         | 2                                                                                                     |
| M       | mois de l'année                                                          | M             | 9                                                                                                     |
|         |                                                                          | MM            | 09                                                                                                    |
|         |                                                                          | MMM           | Sep                                                                                                   |
|         |                                                                          | MMMM          | septembre                                                                                             |
|         |                                                                          | MMMMM         | S                                                                                                     |
| L       | mois seul dans l'année                                                   | L             | 9                                                                                                     |
|         |                                                                          | LL            | 09                                                                                                    |
|         |                                                                          | LLL           | Sep                                                                                                   |
|         |                                                                          | LLLL          | septembre                                                                                             |
|         |                                                                          | LLLLL         | S                                                                                                     |
| w       | semaine de l'année                                                       | w             | 27                                                                                                    |
|         |                                                                          | ww            | 27                                                                                                    |
| d       | jour du mois                                                             | d             | 2                                                                                                     |
|         |                                                                          | dd            | 2                                                                                                     |
| D       | jour de l'année                                                          | D             | 189                                                                                                   |
| E       | jour de la semaine                                                       | E, EE, ou EEE | Tue                                                                                                   |
|         |                                                                          | EEEE          | Tuesday                                                                                               |
|         |                                                                          | EEEEE         | M                                                                                                     |
|         |                                                                          | EEEEEE        | ma                                                                                                    |
| e       | jour local de la semaine                                                 | e             | 2                                                                                                     |
|         |                                                                          | ee            | 02                                                                                                    |
|         |                                                                          | eee           | mar.                                                                                  |
|         |                                                                          | eeee          | Mardi                                                                                                 |
|         |                                                                          | eeeee         | T                                                                                                     |
|         |                                                                          | eeeeee        | ma                                                                                                    |
| c       | jour local de la semaine seul                                            | c ou cc       | 2                                                                                                     |
|         |                                                                          | ccc           | mar.                                                                                  |
|         |                                                                          | cccc          | mardi                                                                                                 |
|         |                                                                          | ccccc         | M                                                                                                     |
|         |                                                                          | cccccc        | ma                                                                                                    |
| a       | AM ou PM                                                                 | a, aa, ou aaa | PM [abbrev]                                       |
|         |                                                                          | aaaa          | PM [complet]                                      |
|         |                                                                          | aaaaa         | p                                                                                                     |
| b       | AM, PM, midi, minuit                                                     | b, bb, ou bbb | mid.                                                                                  |
|         |                                                                          | bbbb          | midnight                                                                                              |
|         |                                                                          | bbbbb         | md                                                                                                    |
| B       | périodes de jour flexibles                                               | B, BB, ou BBB | après-midi [abrégré]                              |
|         |                                                                          | BBBB          | de l'après-midi [complet]                         |
|         |                                                                          | BBBBB         | ap.m. [raccourci] |
| h       | heure en am/pm (1~12)                 | h             | 7                                                                                                     |
|         |                                                                          | hh            | 07                                                                                                    |
| H       | heure du jour (0~23)                  | H             | 0                                                                                                     |
|         |                                                                          | HH            | 00                                                                                                    |
| K       | heure en am/pm (0~11)                 | K             | 0                                                                                                     |
|         |                                                                          | KK            | 00                                                                                                    |
| k       | heure du jour (1~24)                  | k             | 24                                                                                                    |
|         |                                                                          | kk            | 24                                                                                                    |
| m       | minute en heure                                                          | m             | 4                                                                                                     |
|         |                                                                          | mm            | 04                                                                                                    |
| s       | seconde en minute                                                        | s             | 5                                                                                                     |
|         |                                                                          | ss            | 05                                                                                                    |
| X       | Time Zone: ISO8601 basic hm?, avec Z pour 0              | X             | -08, +0530, Z                                                                                         |
|         | Time Zone: ISO8601 basic hm, avec Z                      | XX            | -0800, Z                                                                                              |
|         | Time Zone: ISO8601 extended hm, avec Z                   | XXX           | -08:00, Z                                                                             |
|         | Time Zone: ISO8601 basic hms?, avec Z                    | XXXX          | -0800, -075258, Z                                                                                     |
|         | Time Zone: ISO8601 extended hms?, avec Z                 | XXXXX         | -08:00, -07:52:58, Z                                  |
| x       | Time Zone: ISO8601 basic hm?, sans Z pour 0              | x             | -08, +0530                                                                                            |
|         | Time Zone: ISO8601 basic hm, sans Z                      | xx            | -800                                                                                                  |
|         | Time Zone: ISO8601 extended hm, sans Z                   | xxx           | -08:00                                                                                |
|         | Time Zone: ISO8601 basic hms?, sans Z                    | xxxx          | -0800, -075258                                                                                        |
|         | Time Zone: ISO8601 extended hms?, sans Z                 | xxxxx         | -08:00, -07:52:58                                     |
| O       | Time Zone: short localized UTC                           | O             | UTC-8                                                                                                 |
|         | Time Zone: long localized UTC (=ZZZZ) | OOOO          | UTC-08:00                                                                             |
| z       | Time Zone: specific non-location                         | z, zz, ou zzz | UTC+1                                                                                                 |
|         |                                                                          | zzzz          | heure normale d'Europe centrale                                                                       |
|         |                                                                          | zzzzz         | heure normale d'Europe centrale                                                                       |
|         |                                                                          |               |                                                                                                       |
| '       | échappement pour le texte                                                | '             | '                                                                                                     |
| ' '     | deux guillemets simples en produisent un                                 | ' '           | ' '                                                                                                   |

## Explorer les motifs

### `y` vs `Y`

`y` est l'année civile, tandis que `Y` est l'année basée sur le numéro de semaine. Par exemple, si les premiers jours de janvier 2010 ne sont pas la semaine 1, alors y = 2010 mais Y = 2009 (jusqu'à la date à laquelle la première semaine de 2010 commence).

### `L` (seul) vs `M`

Dans certaines langues (russe, slovaque), le mois utilisé seul est différent du mois dans une date. Dans "10 janvier 2010", "janvier" ne s'écrit pas de la même manière que dans "*rendez-vous* en janvier".

### `e` vs `c`

Même remarque que pour `L` et `M` : `c` est pour un jour utilisé seul "tous les mardis") et `e` est pour un jour dans une date ("mardi 15 janvier 1951").

### `E` vs `e`

`e` est basé sur les paramètres du système : si la semaine est définie dans le système comme commençant un mercredi, alors mercredi aura la valeur numérique "1" (ou zéro) tandis que "E" renvoie toujours la même valeur (de 1 à 7 ou de 0 à 6).

### Zéros non significatifs

En général, lorsque le nombre de lettres dans la chaîne de formatage est supérieur au nombre attendu, des zéros non significatifs sont ajoutés. Ex : "yyyyyy" donnerait "001996".

### Parties traduites

Certaines parties des sorties, telles que "minuit" ou "mardi", sont localisées, en fonction des paramètres régionaux.

Par exemple, pour l'heure `13:25:34`, "B" affichera *in the afternoon* sur un système américain, et *après-midi* sur un système français.

### Lettres supplémentaires

Les chaînes de formatage peuvent contenir des caractères qui ne doivent pas être interprétés comme des caractères de formatage : s'ils sont compris entre "a" et "z" ou entre "A" et "Z", ils doivent être placés entre guillemets simples.

Par exemple :

"15:30:00" avec le motif "HH 'heures et' mm 'minutes'" produit "15 heures et 30 minutes".

### Espaces de début et de fin

Les espaces de début et de fin des motifs sont automatiquement supprimés dans les sorties. Si vous souhaitez ajouter des espaces avant ou après la chaîne résultante, vous devez les placer entre guillemets simples.

Par exemple :

" HH : mm : ss " ---> "09 : 10 : 25"
"' 'HH : mm : ss' '" ---> " 09 : 10 : 25 "

## Exemples

| Date ou heure                            | Motif                        | Résultat                         | Commentaires           |
| ---------------------------------------- | ---------------------------- | -------------------------------- | ---------------------- |
| 15/06/2000                               | "QQQQ"                       | "2e trimestre"                   | localisé               |
| 17/03/2001                               | "D"                          | "76"                             | 76e jour de l'année    |
| 17/03/1954                               | "w"                          | "11"                             | 11e semaine de l'année |
| 17/03/1954                               | "eeee"                       | "Mercredi"                       | localisé               |
| 15:00:00 | "a"                          | "PM"                             |                        |
| 18:00:00 | "K a"                        | "6 PM"                           |                        |
| 13:30:15 | "hh:mm aa O" | "01:30 PM UTC+1" |                        |

## Voir également

Voir [ce billet de blog](https://blog.4d.com/tailored-customization-for-dates-and-times) pour plus d'informations sur les formats personnalisés de date et d'heure.
