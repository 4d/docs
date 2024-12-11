---
id: php-execute
title: PHP Execute
slug: /commands/php-execute
displayed_sidebar: docs
---

<!--REF #_command_.PHP Execute.Syntax-->**PHP Execute** ( *cheminScript* {; *nomFonction* {; *résultatPHP* {; *param*} {; *param2* ; ... ; *paramN*}}} ) : Boolean<!-- END REF-->
<!--REF #_command_.PHP Execute.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminScript | Text | &#8594;  | Chemin d’accès au script PHP ou "" pour exécuter une fonction PHP |
| nomFonction | Text | &#8594;  | Fonction PHP à exécuter |
| résultatPHP | *, Variable, Field | &#8592; | Résultat d’exécution de la fonction PHP ou * pour ne pas recevoir de résultat |
| param | Text, Boolean, Real, Integer, Date, Time | &#8594;  | Paramètre(s) de la fonction PHP |
| Résultat | Boolean | &#8592; | Vrai = exécution correcte, Faux = erreur d’exécution |

<!-- END REF-->

:::info Compatibilité

**PHP est obsolète dans 4D**. Il est désormais recommandé d'utiliser la classe [`4D.SystemWorker`](../API/SystemWorkerClass.md).

:::

#### Description 

<!--REF #_command_.PHP Execute.Summary-->La commande **PHP Execute** permet d’exécuter un script ou une fonction PHP.<!-- END REF--> 

Passez dans le paramètre *cheminScript* le chemin d’accès du fichier de script PHP à exécuter. Il peut s’agir d’un chemin d’accès relatif si le fichier est situé à côté de la structure de la base ou d’un chemin absolu. Le chemin d’accès peut être exprimé en syntaxe système ou Posix.   
Si vous souhaitez exécuter directement une fonction PHP standard, passez une chaîne vide ("") dans *cheminScript*. Le nom de la fonction doit être passé en deuxième paramètre. 

Passez dans le paramètre *nomFonction* un nom de fonction PHP si vous souhaitez exécuter une fonction spécifique dans le script *cheminScript*. Si vous passez une chaîne vide ou omettez le paramètre *nomFonction*, le script est exécuté entièrement. 

**Note** : PHP tient compte de la casse des caractères dans le nom de la fonction. N’utilisez pas de parenthèses, saisissez uniquement le nom de la fonction.

Le paramètre *résultatPHP* reçoit le résultat de l’exécution de la fonction PHP. Vous pouvez passer soit :

* une variable, un tableau ou un champ afin de recevoir le résultat,
* le caractère \* si la fonction ne retourne pas de résultat ou si vous ne souhaitez pas le récupérer.

*résultatPHP* peut être de type texte, entier long, réel, booléen, date ainsi que (hormis pour les tableaux) BLOB et heure. 4D effectuera la conversion des données et les ajustements nécessaires suivant les principes décrits dans le paragraphe *Conversion of data returned* ci-dessous. 

* Si vous avez passé un nom de fonction dans *nomFonction*, *résultatPHP* recevra ce que le développeur PHP a retourné avec la commande **return** depuis le corps de la fonction.
* Si vous utilisez la commande sans passer de nom de fonction dans *nomFonction*, *résultatPHP* recevra ce que le développeur PHP a retourné avec la commande **echo** (ou une commande similaire).

Si vous appelez une fonction PHP qui attend des arguments, utilisez le(s) paramètre(s) *param1...N* pour passer une ou plusieurs valeur(s). Les valeurs doivent être séparées par des points-virgules. Vous pouvez passer des valeurs de type alpha, texte, booléen, réel, entier, entier long, date ou heure. Les images, BLOBs et objets ne sont pas admis. Vous pouvez envoyer un tableau, il est nécessaire dans ce cas de passer un pointeur sur le tableau à la commande [PHP Execute](php-execute.md), sinon c'est l'index courant du tableau qui est envoyé sous forme d'entier (cf. exemple). La commande accepte tous les types de tableaux sauf les tableaux pointeur, les tableaux image et les tableaux 2D.  
Les paramètres *param1...N* sont envoyés au PHP au format JSON en utf-8\. Ils sont automatiquement décodés avec la commande PHP **json\_decode** avant d'être passés à la fonction PHP *nomFonction*.

**Note :** Pour des raisons techniques, la taille des paramètres passés via le protocole fast cgi ne doit pas dépasser 64 Ko. Vous devez tenir compte de cette limitation si vous utilisez des paramètres de type Texte. 

La commande retourne Vrai si l’exécution s’est déroulée correctement côté 4D, c’est-à-dire si le lancement de l’environnement d’exécution, l’ouverture du script et l’établissement de la communication avec l’interpréteur PHP ont été réussis. Dans le cas contraire, une erreur est générée, que vous pouvez intercepter avec la commande [ON ERR CALL](on-err-call.md) et analyser avec [Last errors](last-errors.md) .   
En outre, le script lui-même peut générer des erreurs PHP. Dans ce cas, vous devez utiliser la commande [PHP GET FULL RESPONSE](php-get-full-response.md) afin d’analyser la source de l’erreur (voir exemple 4). 

**Note :** PHP permet de configurer la gestion d’erreurs. Pour plus d’informations, reportez-vous par exemple à la page <http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting>.

##### Conversion des données retournées 

Le tableau suivant précise comment 4D interprète et convertit les données retournées en fonction du type du paramètre *résultatPHP*.

| **Type paramètre *résultatPHP*** | **Traitement 4D**                                                                                                                                                                                                                                       | **Exemple**                                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| BLOB                             | 4D récupère les données reçues sans aucune modification (\*).                                                                                                                                                                                           |                                                                                                                |
| Texte                            | 4D attend des données encodées en utf-8 (\*). Le développeur PHP peut avoir besoin d'utiliser la commande PHP **utf8\_encode**.                                                                                                                         | Exemple de script PHP : echo utf8\_encode(monTexte)                                                            |
| Date                             | 4D attend une date envoyée sous forme de chaîne au format RFC 3339 (appelé parfois DATE\_ATOM en PHP). Ce format est de type "AAAA-MM-JJTHH:MM:SS", par exemple : 2005-08-15T15:52:01+00:00\. 4D ignorera la partie heure et retournera la date en UTC. |                                                                                                                |
| Heure                            | 4D attend une heure envoyée sous forme de chaîne au format RFC 3339 (cf. type Date). 4D ignorera la partie date et retournera le nombre de secondes écoulées depuis minuit en considérant la date dans la zone horaire locale.                          | Exemple de script PHP pour envoyer 2h30'45" : echo date( DATE\_ATOM, mktime( 2,30,45))                         |
| Entier ou Réel                   | 4D interprète le numérique exprimé avec des chiffres, signe - ou +, exposant préfixé par 'e'. Tout caractère '.' ou ',' est interprété comme un séparateur décimal.                                                                                     | Exemple de script PHP : echo -1.4e-16;                                                                         |
| Booléen                          | 4D retournera Vrai s'il reçoit la chaine "true" depuis PHP ou si l'évaluation sous forme de numérique donne une valeur non nulle.                                                                                                                       | Exemple de script PHP : echo (a==b);                                                                           |
| Tableau                          | 4D considère que le tableau PHP a été retourné au format JSON.                                                                                                                                                                                          | Exemple de script PHP pour retourner un tableau de deux textes : echo json\_encode( array( "hello", "world")); |

(\*) Par défaut, les en-têtes HTTP ne sont pas retournés :  
\- si vous utilisez [PHP Execute](php-execute.md) en passant une fonction dans le paramètre *nomFonction*, les entêtes HTTP ne sont jamais retournés dans *résultatPHP*. Ils ne sont accessibles que via [PHP GET FULL RESPONSE](php-get-full-response.md).  
\- si vous utilisez [PHP Execute](php-execute.md) sans nom de fonction (*nomFonction* omis ou contenant une chaîne vide), vous pouvez retourner les en-têtes HTTP en fixant l'option PHP raw result à Vrai à l'aide de la commande [PHP SET OPTION](php-set-option.md).

**Note :** Si vous devez récupérer de gros volumes de données via PHP, il est généralement plus efficace de passer par le canal du buffer *stdOut* (commande **echo** ou similaire) que par le retour de fonction. Pour plus d'informations, reportez-vous à la description de la commande [PHP GET FULL RESPONSE](php-get-full-response.md). 

##### Utiliser les variables d’environnement 

Vous pouvez utiliser la commande [SET ENVIRONMENT VARIABLE](set-environment-variable.md) pour définir des variables d’environment utilisées par le script. Attention : après un appel à [LAUNCH EXTERNAL PROCESS](launch-external-process.md) ou **PHP Execute**, l’ensemble des variables d’environment est effacé.

##### Fonctions spéciales 

4D propose les fonctions spéciales suivantes :

* **quit\_4d\_php** : permet de quitter l’interpréteur PHP et tous ses process enfants. Si un process enfant au moins est en train d’exécuter un script, l’interpréteur ne quitte pas et la commande **PHP Execute** retourne Faux.
* **relaunch\_4d\_php** permet de relancer l’interpréteur PHP.

A noter que l’interpréteur est relancé automatiquement à la première requête envoyée par **PHP Execute**. 

#### Exemple 1 

Appel du script "myPhpFile.php" sans fonction. Voici le contenu du script :

```PHP
<
```

Le code 4D suivant :

```4d
 var $result : Text
 var $isOK : Boolean
 $isOK:=PHP Execute("C:\\php\\myPhpFile.php";"";$result)
 ALERT($Result)
```

... affichera la version php courante.

#### Exemple 2 

Appel de la fonction *myPhpFunction* dans le script "myNewScript.php" avec des paramètres. Voici le contenu du script :

```PHP

```

Appel avec fonction :

```4d
 var $result : Text
 var $param1 : Text
 var $param2 : Text
 var $isOk : Boolean
 $param1:="Hello"
 $param2 :="4D world !"
 $isOk:=PHP Execute("C:\\MonDossier\\myNewScript.php";"myPhpFunction";$result;$param1;$param2 )
 ALERT($result) // Affiche "Hello 4D world!"
```

#### Exemple 3 

Faire quitter l’interpréteur PHP :

```4d
 $ifOk:=PHP Execute("";"quit_4d_php")
```

#### Exemple 4 

Gestion des erreurs :

```4d
    // Installation de la méthode de gestion d’erreurs
 phpCommError:="" // Modifiée par PHPErrorHandler
 $T_saveErrorHandler :=Method called on error
 ON ERR CALL("PHPErrorHandler")
 
     // Exécution du script
 var $T_result : Text
 If(PHP Execute("C:\\MyScripts\\MiscInfos.php";"";$T_result))
              // Pas d’erreur, $T_Result contient le résultat
 Else
              // Une erreur a été détectée, gérée par PHPErrorHandler
          If(phpCommError="")
             ... // erreur PHP, utilisez PHP LIRE REPONSE COMPLETE
          Else
             ALERT(phpCommError)
          End if
 End if
 
  // Désinstallation de la méthode
 ON ERR CALL($T_saveErrorHandler)
```

La méthode PHP\_errHandler est la suivante :

```4d
 phpCommError:=""
 GET LAST ERROR STACK(tabCodes;tabComps;tabLibellés)
 For($i;1;Size of array(tabCodes))
       phpCommError:=phpCommError+String(tabCodes{$i})+" "+tabComps{$i}+" "+tabLibellés{$i}+Caractere(Retour chariot)
 End for
```

#### Exemple 5 

Création dynamique par 4D d’un script avant son exécution :

```4d
 DOCUMENT TO BLOB("C:\\Scripts\\MonScript.php";$blobDoc)
 If(OK=1)
       $strDoc:=BLOB to text($blobDoc;UTF8 text without length)
       
       $strPosition:=Position("function2Rename";$strDoc)
       
       $strDoc:=Insert string($strDoc;"_v2";Length("function2Rename")+$strPosition)
       
       TEXT TO BLOB($strDoc;$blobDoc;UTF8 text without length)
       BLOB TO DOCUMENT("C:\\Scripts\\MonScript.php";$blobDoc)
       If(OK#1)
          ALERT("Erreur à la création du script")
       End if
 End if
```

Le script est ensuite exécuté :

```4d
 $err:=PHP Execute("C:\\Scripts\\MonScript.php";"function2Rename_v2";*)
```

#### Exemple 6 

Récupération directe d’une valeur de type date et heure. Voici le contenu du script :

```PHP

```

Réception de la date côté 4D :

```4d
 var $phpResult_date : Date
 $result :=PHP Execute("C:\php_scripts\ReturnDate.php";"";$phpResult_date)
     //$phpResult_date vaut !05/04/2009 !
 
 var $phpResult_time : Time
 $result :=PHP Execute("C:\php_scripts\ReturnDate.php";"";$phpResult_time)
 
     //$phpResult_time vaut ?01 :02 :03 ?
```

#### Exemple 7 

Répartition de données dans des tableaux :

```4d
 ARRAY TEXT($arText ;0)
 ARRAY LONGINT($arLong ;0)
 $p1 :=","
 $p2 :="11,22,33,44,55"
 $phpok :=PHP Execute("";"explode";$arText;$p1;$p2)
 $phpok :=PHP Execute("";"explode";$arLong;$p1;$p2)
 
        // $arText contient les valeurs alpha "11", "22", "33", etc.
        // $arLong contient les numériques, 11, 22, 33, etc.
```

#### Exemple 8 

Initialisation d’un tableau :

```4d
 ARRAY TEXT($arText ;0)
 $phpok :=PHP Execute("";"array_pad";$arText;->$arText;50;"indéfini")
        // Exécute en php : $arrTest = array_pad($arrTest, 50, ’indéfini’);
        // Remplit le tableau $arText avec 50 éléments "indéfini"
```

#### Exemple 9 

Passage de paramètres via un tableau :

```4d
 ARRAY INTEGER($arInt;0)
 $phpok :=PHP Execute("";"json_decode";$arInt;"[13,51,69,42,7]")
        // Exécute en php : $arInt = json_decode(’[13,51,69,42,7]’);
        // Remplit le tableau avec des valeurs initiales
```

#### Exemple 10 

Utilisation basique de la fonction *trim* de PHP permettant d'enlever les espaces et/ou caractères invisibles de part et d'autre d'une chaîne de caractères :

```4d
 var $T_String : Text
 $T_String:="   Bonjour  "
 var $B : Boolean
 $B:=PHP Execute("";"trim";$T_String;$T_String)
```

Pour plus d'informations sur la fonction *trim*, veuillez vous reporter à la documentation PHP.

#### Voir aussi 

*Exécuter des scripts PHP dans 4D*  
[PHP GET FULL RESPONSE](php-get-full-response.md)  
[PHP SET OPTION](php-set-option.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1058 |
| Thread safe | &check; |
| Interdite sur le serveur ||


