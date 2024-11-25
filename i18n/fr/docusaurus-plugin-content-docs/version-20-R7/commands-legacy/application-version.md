---
id: application-version
title: Application version
slug: /commands/application-version
displayed_sidebar: docs
---

<!--REF #_command_.Application version.Syntax-->**Application version** {( *numBuild* {; *} )} : Text<!-- END REF-->
<!--REF #_command_.Application version.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| numBuild | Integer | &#8592; | Numéro de build |
| * | Opérateur | &#8594;  | Si passé = numéro de version long Si omis = numéro de version court |
| Résultat | Text | &#8592; | Numéro de version dans une chaîne encodée |

<!-- END REF-->

#### Description 

<!--REF #_command_.Application version.Summary-->**Application version** retourne une chaîne encodée qui exprime le numéro de version de l'environnement 4D que vous utilisez.<!-- END REF-->

Si vous ne passez pas le paramètre optionnel *\**, une chaîne de 4 caractères est retournée, formatée de la manière suivante :  

| **Caractères** | **Description**    |
| -------------- | ------------------ |
| 1-2            | Numéro de version  |
| 3              | Numéro "R"         |
| 4              | Numéro de révision |

Si vous passez le paramètre optionnel *\**, une chaîne de 8 caractères est retournée, formatée de la manière suivante :  

| **Caractères**                                              | **Description**                    |
| ----------------------------------------------------------- | ---------------------------------- |
| 1                                                           | "F" représente une version finale  |
| "B" représente une version beta                             |                                    |
| Les autres caractères représentent une version interne à 4D |                                    |
| 2-3-4                                                       | Numéro de compilation interne à 4D |
| 5-6                                                         | Numéro de version                  |
| 7                                                           | Numéro "R"                         |
| 8                                                           | Numéro de révision                 |

**Note de compatibilité (4D v14)**

**Attention**, la numérotation est modifiée à compter des versions 14 de 4D :

* le **numéro "R"** est le numéro de version "R" de 4D, par exemple 3 pour la version R3 (contient 0 pour une version "bug fix"),
* le **numéro de révision** est le numéro de version "bug fix" de 4D (contient 0 pour une version "R").

Dans les versions précédentes de 4D, le numéro de version "R" était le numéro de mise à jour, il désignait la révision. Le numéro de révision était toujours 0.

Exemples pour un numéro de version court :

| **Versions** | **Valeur retournée** |                                      |
| ------------ | -------------------- | ------------------------------------ |
| 4D v13.1     | "1310"               | *Précédent système de numérotation*  |
| 4D v14 R2    | "1420"               | Release R2                           |
| 4D v14 R3    | "1430"               | Release R3                           |
| 4D v14.1     | "1401"               | Première version "bug fix" de 4D v14 |
| 4D v14.2     | "1402"               | Seconde version "bug fix" de 4D v14  |

Exemples pour un numéro de version long :

| **Versions**     | **Valeur retournée** |
| ---------------- | -------------------- |
| 4D v12.5 beta    | "B0011250"           |
| 4D v14 R2 beta   | "B0011420"           |
| 4D v14 R3 finale | "F0011430"           |
| 4D v14.1 beta    | "B0011401"           |

La commande **Application version** peut retourner une information supplémentaire dans le paramètre optionnel *numBuild* : le numéro de "build" de la version courante de l’application 4D. Il s’agit d’un numéro de compilation interne qui peut être utile pour du versionning ou lors d’échanges avec les services techniques de 4D. 

**Note :** Dans le cas des applications compilées et fusionnées avec 4D Volume Licence, le numéro de build retourné n'est pas significatif. Dans ce contexte, les informations de version sont gérées par le développeur. 

#### Exemple 1 

Cet exemple affiche le numéro de version de l'environnement 4D : 

```4d
 $vs4Dversion:=Application version
 ALERT("Vous utilisez la version "+String(Num(Sous chaine($vs4Dversion;1;2)))+"."+$vs4Dversion[[3]]+"."+$vs4Dversion[[4]])
```

#### Exemple 2 

Cet exemple teste si vous utilisez une version finale :

```4d
 If(Substring(Application version(*);1;1)#"F")
    ALERT("Veuillez vous assurer que vous utilisez une version finale de 4D avec cette base !")
    QUIT 4D
 End if
```

#### Exemple 3 

Le code suivant reconstitue le numéro de version de l'application et permet de distinguer les versions v14 "bug fix" des versions v14 "R" :

```4d
 var $Lon_build : Integer
 var $Txt_info;$Txt_major;$Txt_minor;$Txt_release;$Txt_version : Text
 
 $Txt_version:=Application version($Lon_build)
 
 $Txt_major:=$Txt_version[[1]]+$Txt_version[[2]] //numéro de version, p.e. 14
 $Txt_release:=$Txt_version[[3]] //Rx
 $Txt_minor:=$Txt_version[[4]] //.x
 
 $Txt_info:="4D v"+$Txt_major
 If($Txt_release="0") //4D v14.x
    $Txt_info:=$Txt_info+Choose($Txt_minor#"0";"."+$Txt_minor;"")
 
 Else //4D v14 Rx
    $Txt_info:=$Txt_info+" R"+$Txt_release
 End if
```

#### Voir aussi 

[Application type](application-type.md)  
[Version type](version-type.md)  