---
id: open-settings-window
title: OPEN SETTINGS WINDOW
slug: /commands/open-settings-window
displayed_sidebar: docs
---

<!--REF #_command_.OPEN SETTINGS WINDOW.Syntax-->**OPEN SETTINGS WINDOW** ( *sélecteur* {; *accès* {; *typePropriétés*}} )<!-- END REF-->
<!--REF #_command_.OPEN SETTINGS WINDOW.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sélecteur | Text | &#8594;  | Clé désignant un thème ou une page de la boîte de dialogue des Préférences ou des Propriétés de la base |
| accès | Boolean | &#8594;  | Vrai=Verrouiller les autres pages de la boîte de dialogue, Faux ou omis=Laisser actives les autres pages de la boîte de dialogue |
| typePropriétés | Integer | &#8594;  | 0 ou omis = Propriétés structure (mode standard), 1 = Propriétés utilisateur, 2 = Propriétés utilisateur pour données |

<!-- END REF-->

#### Description 

<!--REF #_command_.OPEN SETTINGS WINDOW.Summary-->La commande **OPEN SETTINGS WINDOW** provoque l’ouverture de la boîte de dialogue des Préférences 4D ou des Propriétés de la base courante et l’affichage des paramètres ou de la page correspondant à la clé passée dans le paramètre *sélecteur*.<!-- END REF--> 

Le paramètre *sélecteur* doit contenir une “clé” désignant la boîte de dialogue et la page à ouvrir. Cette clé est construite de la manière suivante : */Dialogue{/Page{/Paramètres}}*. *Dialogue* indique la boîte de dialogue à afficher : vous pouvez passer "4D" (Préférences) ou "Database" (Propriétés de la base). Par exemple, pour désigner la page Compilateur des Propriétés de la base, *sélecteur* doit contenir "*/Database/Compiler*". La liste des clés est fournie ci-dessous. Si vous passez uniquement une barre oblique ("/") dans *sélecteur*, la commande affiche la première page de la boîte de dialogue des Propriétés de la base.

Le paramètre *accès* vous permet de contrôler les actions de l’utilisateur dans la boîte de dialogue des Préférences ou des Propriétés de la base en verrouillant les autres pages. Typiquement, vous pouvez souhaiter laisser l’utilisateur personnaliser certains paramètres, mais éviter que les autres puissent être modifiés. Dans ce cas, passez Vrai dans le paramètre *accès* : seule la page désignée par le paramètre *sélecteur* sera active et modifiable, l’accès à toutes les autres pages sera verrouillé (les clics sur les boutons de la barre de navigation seront sans effet). Si vous passez Faux ou omettez le paramètre *accès*, toutes les pages de la boîte de dialogue seront accessibles sans restriction. 

Le paramètre *typePropriétés* est pris en compte dans les bases configurées en mode "Propriétés utilisateur" uniquement (dans ce mode, des "propriétés utilisateur" ou des "propriétés utilisateur pour le fichier de données" personnalisées sont générées dans un fichier externe et utilisées à la place des propriétés standard, cf. section *Utiliser des propriétés utilisateur* dans le manuel *Mode Développement*). Dans ce contexte, ce paramètre vous permet d’indiquer si vous souhaitez accéder à la boîte de dialogue des "propriétés structure", des "propriétés utilisateur" ou des '"propriétés utilisateur pour fichier de données". Vous pouvez passer une des constantes suivantes, placées dans le thème *Environnement 4D* : 

| Constante              | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                   |
| ---------------------- | ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Structure settings     | Entier long | 0      | Accès aux "propriétés structure" (valeur par défaut si le paramètre est omis). Dans ce mode, les valeurs de *sélecteur* utilisables sont identiques à celles du mode standard.                                                                                                            |
| User settings          | Entier long | 1      | Accès aux "propriétés utilisateur". Dans ce mode, seules certaines clés sont utilisables dans le paramètre *sélecteur*.                                                                                                                                                                   |
| User settings for data | Entier long | 2      | Accès aux "propriétés utilisateur pour données", c'est-à-dire les propriétés utilisateur stockées au même niveau que le fichier de données. Dans ce mode, seules certaines clés peuvent être utilisées avec le paramètre *sélecteur* (même sous-ensemble que les propriétés utilisateur). |

Si vous passez une clé invalide, la première page de la boîte de dialogue des Propriétés de la base est affichée. 

##### Clés de chemins (mode standard) 

Voici la liste des clés utilisables dans le paramètre *sélecteur* en mode standard, c'est-à-dire avec les "propriétés structure" : 

*/4D* 
*/4D/General* 
*/4D/Structure* 
*/4D/Form editor* 
*/4D/Method editor* 
*/4D/Shortcuts* 
*/Database* 
*/Database/General* 
*/Database/Mover* 
*/Database/Interface* 
*/Database/Interface/Developper* 
*/Database/Interface/User* 
*/Database/Interface/Shortcuts* 
*/Database/Compiler* 
*/Database/Database* 
*/Database/Database/Data storage* 
*/Database/Database/Memory and cpu* 
*/Database/Database/International* 
*/Database/Backup* 
*/Database/Backup/Scheduler* 
*/Database/Backup/Configuration* 
*/Database/Backup/Backup and restore* 
*/Database/Client-Server* 
*/Database/Client-Server/Network* 
*/Database/Client-Server/IP configuration* 
*/Database/Web* 
*/Database/Web/Config* 
*/Database/Web/Options 1* 
*/Database/Web/Options 2* 
*/Database/Web/Log format* 
*/Database/Web/Log scheduler* 
*/Database/Web/Webservices* 
*/Database/SQL* 
*/Database/php* 
*/Database/Compatibility* 
*/Database/Security* 

**Note de compatibilité :** La commande continue de fonctionner avec les clés définies pour les versions 11.x et précédentes de 4D, la correspondance est établie automatiquement par le programme 4D. Il est toutefois conseillé de remplacer les anciens appels par les clés décrites ci-dessus.

##### Clés de chemins (mode Propriétés utilisateur) 

Voici la liste des clés utilisables dans le paramètre *sélecteur* en mode "propriétés utilisateur" :

*/Database* 
*/Database/Interface* 
*/Database/Database/Memory and cpu* 
*/Database/Client-Server* 
**/Database/Client-Server/Network* 
*/Database/Client-Server/IP configuration* 
*/Database/Web* 
*/Database/Web/Config* 
*/Database/Web/Options 1* 
*/Database/Web/Options 2* 
*/Database/Web/Log format* 
*/Database/Web/Log scheduler* 
*/Database/Web/Webservices* 
*/Database/SQL* 
*/Database/php* 

Clés supplémentaires en mode "Propriétés utilisateur pour fichier de données" :

*/Database/Backup* 
*/Database/Backup/Scheduler* */Database/Backup/Configuration* 
*/Database/Backup/Backup and restore*

#### Exemple 1 

Ouverture de la page “Méthodes” des Préférences 4D :   
  
```4d
 OPEN SETTINGS WINDOW("/4D/Method editor")
```

#### Exemple 2 

Accès aux paramétrages des raccourcis clavier dans les Propriétés de la base avec verrouillage des autres propriétés :   

```4d
 OPEN SETTINGS WINDOW("/Database/Interface/Shortcuts";True)
```

#### Exemple 3 

Ouverture des Propriétés de la base sur la première page des Propriétés de la base :  

```4d
 OPEN SETTINGS WINDOW("/")
```

#### Exemple 4 

Accès à la page Interface des Propriétés de la base en mode "Propriétés utilisateur" :

```4d
 OPEN SETTINGS WINDOW("/Database/Interface";False;1)
```

#### Variables et ensembles système 

Si la boîte de dialogue des préférences/propriétés est validée, la variable système OK retourne 1 ; si elle est annulée, OK retourne 0.


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 903 |
| Thread safe | &cross; |
| Modifie les variables | OK |


