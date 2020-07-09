---
id: licenses
title: Gestion des licences 4D
---

Une fois installés sur votre disque, les produits 4D doivent être activés pour que vous puissiez les utiliser. Usually, the activation is automatic if you [sign in using your 4D account](GettingStarted/Installation.md) in the Welcome Wizard.

However, in specific cases you could need to activate your licenses manually, for example if:

- your configuration does not allow the automatic activation,
- you have purchased additional licenses. 

No activation is required for the following uses:

- 4D used in remote mode (connection to a 4D Server)
- 4D used in local mode with an interpreted database with no access to the Design environment.

## First activation

With 4D, select the **License Manager...** command from the **Help** menu of the application. With 4D Server, just launch the 4D Server application. The dialog box for choosing the [activation mode](#activation-mode) appears.

![](assets/en/getStart/server1.png)

4D offers three activation modes. We recommend **Instant Activation**.

### Instant Activation

Enter your user ID (email or 4D account) as well as your password. If you do not have an existing user account, you will need to create it at the following address:

[https://account.4d.com/us/login.shtml]()

![](assets/en/getStart/activ1.png)

Then enter the license number of the product you want to activate. This number is provided by email or by mail after a product is purchased.

![](assets/en/getStart/activ2.png)

### Activation différée

Si vous ne pouvez pas utiliser [l'activation immédiate](#instant-activation) parce que votre ordinateur n'a pas d'accès Internet, vous pouvez effectuer une activation différée comme décrit dans les étapes suivantes.

1. In the License Manager window, select the **Deferred Activation** tab.
2. Enter the License Number and your e-mail address, then click **Generate file** to create the ID file (*reg.txt*).

![](assets/en/getStart/activ3.png)

3. Save the *reg.txt* file to a USB drive and take it to a computer that has internet access.
4. On the machine with internet access, login to <https://activation.4d.com>.
5. On the Web page, click on the **Choose File...** button and select the *reg.txt* file from steps 3 and 4; then click on the **Activate** button.
6. Download the serial file(s).

![](assets/en/getStart/activ4.png)

7. Save the *license4d* file(s) on a shared media and transfer them back to the 4D machine from step 1.
8. Now back on the machine with 4D, still on the **Deferred Activation** page, click **Next**; then click the **Load...** button and select a *license4d* file from the shared media from step 7.

![](assets/en/getStart/activ5.png)

With the license file loaded, click on **Next**.

![](assets/en/getStart/activ6.png)

9. Click on the **Add N°** button to add another license. Repeat these steps until all licenses from step 6 have been integrated.

Your 4D application is now activated.

### Activation d’urgence

Ce mode permet l’activation exceptionnelle et temporaire de l’application 4D (5 jours maximum) sans connexion au site Internet de 4D. Cette activation ne peut être utilisée qu’une seule fois.

## Ajouter des licences

Vous pouvez à tout moment ajouter de nouvelles licences, par exemple pour étendre les capacités de votre application.

Choisissez la commande **Gestionnaire de licences...** dans le menu **Aide** de l’application 4D ou 4D Server puis cliquez sur le bouton **Actualiser** :

![](assets/en/getStart/licens1.png)

Ce bouton vous connecte à notre base clients et active automatiquement toutes les licences nouvelles ou mises à jour liées à la licence courante (la licence courante est affichée en **gras** dans la liste des Licences actives). Vous devrez simplement saisir vos identifiants 4D (compte et mot de passe). Vous devrez simplement saisir vos identifiants 4D (compte et mot de passe).

- Si vous avez acheté des expansions supplémentaires pour un 4D Server, vous n'avez pas besoin de saisir de numéro -- cliquez simplement sur **Actualiser**.
- A la première activation d'un 4D Server, vous devez uniquement saisir le numéro du serveur et toutes les licences d'expansion associées sont automatiquement affectées.

Vous pouvez utiliser le bouton **Actualiser** dans les contextes suivants :

- Lorsque vous avez acquis une expansion supplémentaire et souhaitez l'activer,
- Lorsque vous voulez mettre à jour un numéro de licence temporaire ayant expiré (Partenaires ou évolutions).

## 4D Online Store

Sur le site web 4D Store, vous pouvez commander, mettre à jour, étendre et gérer vos produits 4D. Vous pouvez vous connecter au store à l'adresse suivante : [https://store.4d.com/fr/](https://store.4d.com/us/) (veuillez sélectionner votre pays).

Cliquez sur **Se connecter** pour vous identifier à l'aide de votre compte existant ou sur **Nouveau compte** pour en créer un nouveau, puis suivez les instructions à l'écran.

### Gestion des licences

Après vous être identifié, vous pouvez cliquer sur le lien **Liste de mes licences** en haut de la partie droite de la fenêtre :

![](assets/en/getStart/licens2.png)

Vous pouvez ensuite gérer vos licences en les affectant à des projets.

Sélectionnez la licence que vous souhaitez dans la liste, puis cliquez sur **Lier à un projet... **:

![](assets/en/getStart/licens3.png)

Vous pouvez sélectionner un projet existant ou créer un nouveau :

![](assets/en/getStart/licens4.png)

![](assets/en/getStart/licens5.png)

Les projets vous permettent d'organiser vos licences comme vous le souhaitez :

![](assets/en/getStart/licens6.png)

## Dépannage

En cas d’échec du processus d’installation ou d’activation, veuillez consulter le tableau suivant, présentant les causes de dysfonctionnements les plus fréquentes :

| Symptômes                                                               | Causes possibles                                | Solution(s)                                                                                                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Impossible de télécharger le produit depuis le site Internet de 4D      | Site Internet indisponible, antivirus, firewall | 1- Réessayez ultérieurement OU 2- Désactivez temporairement votre antivirus ou votre firewall.                                                          |
| Impossible d’installer le produit sur le disque (installation refusée). | Droits d’accès utilisateur insuffisants         | Ouvrez une session avec des droits d’accès permettant l’installation d’applications (accès administrateur)                                              |
| Echec de l’activation en ligne                                          | Antivirus, firewall, proxy                      | 1- Désactivez temporairement votre antivirus ou votre firewall OU 2- Utilisez l’activation différée (non disponible avec les licences des versions "R") |


Si ces informations ne vous permettent pas de résoudre votre problème, veuillez contacter 4D ou votre distributeur local.

## Contacts

Pour toute question relative à l’installation ou l’activation de votre produit, veuillez contacter 4D Sas ou votre distributeur local. 

Pour la France :

- Web : [http://www.4d.com/fr/](https://us.4d.com/4d-technical-support)
- Téléphone : 0892 68 09 97 (0,34 Euro TTC/Min)

Retrouvez également en ligne la communauté des développeurs 4D à l’adresse : http://forums.4d.fr

- 
-