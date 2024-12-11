---
id: set-external-data-path
title: SET EXTERNAL DATA PATH
slug: /commands/set-external-data-path
displayed_sidebar: docs
---

<!--REF #_command_.SET EXTERNAL DATA PATH.Syntax-->**SET EXTERNAL DATA PATH** ( *leChamp* ; *chemin* )<!-- END REF-->
<!--REF #_command_.SET EXTERNAL DATA PATH.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leChamp | Text, Blob, Picture | &#8594;  | Champ pour lequel définir le lieu de stockage |
| chemin | Text, Integer | &#8594;  | Chemin d’accès et nom du fichier de stockage externe ou<br/>0 = utiliser la définition en structure<br/>1 = utiliser le dossier par défaut |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET EXTERNAL DATA PATH.Summary-->La commande **SET EXTERNAL DATA PATH** permet de définir ou de modifier, pour l’enregistrement courant, l’emplacement de stockage externe du champ *leChamp* passé en paramètre.<!-- END REF-->

4D autorise le stockage des données des champs de type Texte, Blob et Image *à l'extérieur* du fichier de données. Pour une description complète de cette fonctionnalité, reportez-vous au manuel *Mode Développement*.

Le paramétrage défini par cette commande sera appliqué uniquement lors du stockage sur disque de l’enregistrement courant. Si l’enregistrement courant est annulé, la commande ne fait rien. Les paramètres de stockage définis dans la structure de l’application ne sont pas modifiés.

Vous pouvez passer dans *chemin* soit un chemin d’accès personnalisé, soit une constante désignant un emplacement automatique :

* **chemin d’accès personnalisé au fichier**  
Dans ce cas, vous utilisez le stockage externe en "mode personnalisé". Dans ce mode, certaines fonctions de base de données de 4D ne sont pas disponibles automatiquement (cf. manuel *Mode Développement*). En particulier, vous devez gérer vous-même la création ou la modification des fichiers.  
Vous pouvez passer un chemin relatif au fichier de données ou un chemin absolu, incluant obligatoirement le nom du fichier de stockage et son extension. Vous devez utiliser la syntaxe système. Pour définir un chemin relatif au fichier de données, passez "../" (Windows) ou "..:" (OS X) au début de la chaîne. Vous pouvez désigner tout dossier, y compris le dossier par défaut des fichiers externes de la base (*nomBase*.ExternalData) - dans ce cas, les fichiers seront inclus lors de la sauvegarde de la base.  
Le fichier désigné par le paramètre *chemin* doit exister et être accessible au moment de l'exécution de la commande. A noter que si le chemin est invalide (fichier ou dossier manquant), une erreur est retournée uniquement dans le cas où *chemin* a été défini en absolu. Dans le cas où *chemin* a été défini en relatif, vous devez vous assurer de sa validité, aucune erreur n'est générée si le fichier n'est pas trouvé.  
Si vous stockez le fichier externe dans le même dossier que le fichier de données ou un de ses sous-dossiers, 4D considérera que le chemin défini est relatif au fichier de données et maintiendra le lien même si le dossier du fichier de données est déplacé ou renommé.  
A noter que ce principe permet de "partager" un même fichier externe entre plusieurs enregistrements. Toute modification effectuée sur ce fichier externe est disponible dans tous les enregistrements. Attention dans ce cas, si plusieurs process peuvent écrire simultanément les mêmes champs, vous devez empêcher les accès concurrents via des sémaphores afin de ne pas risque d’endommager les fichiers externes.
* **emplacement automatique**  
Vous pouvez désigner deux emplacements automatiques, à l’aide des constantes suivantes, placées dans le thème *Maintenance fichier de données* :  

| Constante                | Type        | Valeur | Comment                                                                                                                                                                                                                                                                   |  
| ------------------------ | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Use default folder       | Entier long | 1      | Les données du champ passé en paramètre seront stockées dans le dossier par défaut, nommé *nomBase*.ExternalData et placé à côté du fichier de données. Dans ce mode, les données externes sont gérées par 4D comme si elles étaient à l’intérieur du fichier de données. |  
| Use structure definition | Entier long | 0      | 4D utilisera les paramètres définis dans la structure pour le stockage du champ (cf. manuel *Mode Développement*). Si vous passez d’un stockage externe à un stockage interne, le fichier externe n’est pas supprimé.                                                     |

Une fois la commande exécutée, 4D maintient automatiquement le lien entre le champ de l’enregistrement et le fichier sur disque, il n’est pas nécessaire de réexécuter la commande (hormis si le *chemin* doit être modifié). Si 4D ne peut plus accéder aux données du champ (fichier de stockage renommé ou supprimé, chemin modifié...), le champ est vide mais aucune erreur n'est générée. 

**Note :** La commande **SET EXTERNAL DATA PATH** peut uniquement être exécutée sur 4D local ou 4D Server. Si elle est exécutée sur un 4D distant, elle ne fait rien.

#### Exemple 

Vous souhaitez enregistrer dans le champ image un fichier existant, stocké à l'extérieur des données, dans le dossier de la base :

```4d
 CREATE RECORD([Photos])
 [Photos]Nom:="Paris.png"
 SET EXTERNAL DATA PATH([Photos]Vignette;Get 4D folder(Database folder)+"custom"+Folder separator+[Photos]Nom)
  //"/custom/Paris.png" doit exister à côté du fichier de structure
 SAVE RECORD([Photos])
```

#### Voir aussi 

[Get external data path](get-external-data-path.md)  
[RELOAD EXTERNAL DATA](reload-external-data.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1134 |
| Thread safe | &check; |


