---
id: spell-get-dictionary-list
title: SPELL GET DICTIONARY LIST
slug: /commands/spell-get-dictionary-list
displayed_sidebar: docs
---

<!--REF #_command_.SPELL GET DICTIONARY LIST.Syntax-->**SPELL GET DICTIONARY LIST** ( *langID* ; *langFichiers* ; *langNoms* )<!-- END REF-->
<!--REF #_command_.SPELL GET DICTIONARY LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| langID | Integer array | &#8592; | ID uniques des langues |
| langFichiers | Text array | &#8592; | Noms des fichiers de langue installés |
| langNoms | Text array | &#8592; | Noms locaux des langues |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SPELL GET DICTIONARY LIST.Summary-->La commande **SPELL GET DICTIONARY LIST** retourne dans les tableaux *langID*, *langFichiers* et *langNoms* les IDs, les noms de fichiers et les noms des langues correspondant aux fichiers de dictionnaires Hunspell installés sur la machine.<!-- END REF--> 

**Note :** Pour plus d'informations sur les dictionnaires Hunspell, reportez-vous à la section *Correction orthographique* dans le manuel *Mode Développement*. 

* *langID* reçoit les numéros d’ID générés automatiquement et utilisables avec la commande [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md).  
A noter que les IDs sont uniques et basés sur les noms de fichiers. Cette commande est donc principalement utile en phase de développement, il n’est pas nécessaire de regénérer des IDs à chaque exécution de la base.
* *langFichiers* reçoit les noms des fichiers de dictionnaires (sans extensions) installés sur le poste.
* *langNoms* reçoit les noms des langues exprimés dans la langue courante de l’application. Par exemple, pour un dictionnaire français, la valeur "français (France)" sera retournée sur une machine configurée en français et "French (France)" sur un système anglais. Le nom de la langue est suivi de "- Hunspell". Ce champ n’est valide que pour les fichiers "connus" de 4D. Pour les fichiers non connus (par exemple les fichiers personnalisés), le nom "N/A - Hunspell" est retourné. Ce principe n’empêche pas d’utiliser le dictionnaire (si le fichier concerné est valide), l’ID retourné pourra être passé à la commande [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md).

#### Exemple 

Vous avez placé "fr-classique+reforme1990.aff" et "fr-classique+reforme1990.dic" ainsi que "fr-dentiste.aff" et "fr-dentiste.dic" dans le répertoire Hunspell :

```4d
 ARRAY LONGINT($langID;0)
 ARRAY TEXT($dicName;0)
 ARRAY TEXT($langDesc;0)
 SPELL GET DICTIONARY LIST($langID;$dicName;$langDesc)
```

| **$langID** | **$dicName**             | **$langDesc**                |
| ----------- | ------------------------ | ---------------------------- |
| 65536       | en\_GB                   | anglais (Royaume-Uni)        |
| 65792       | en\_US                   | anglais (Etats-Unis)         |
| 131072      | de\_DE                   | allemand (Allemagne)         |
| 196608      | es\_ES                   | espagnol                     |
| 262144      | fr\_FR                   | français (France)            |
| 589824      | nb\_NO                   | norvégien bokmal (Norvege)   |
| 1074036166  | fr-classique+reforme1990 | français (France) - Hunspell |
| 1073901273  | fr-dentiste              | No description - Hunspell    |

#### Voir aussi 

[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  