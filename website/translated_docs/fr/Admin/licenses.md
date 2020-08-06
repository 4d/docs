---
id: licenses
title: Gestion des licences 4D
---

Once installed on your disk, you must activate your 4D products in order to be able to use them. Habituellement, l'activation est automatique si vous [vous connectez à l'aide de votre compte 4D](GettingStarted/Installation.md) dans l'assistant de bienvenue.

Cependant, dans des cas spécifiques, vous pourriez avoir besoin d'activer vos licences manuellement, si par exemple :

- votre configuration ne permet pas l'activation automatique,
- vous avez acheté des licences supplémentaires.

No activation is required for the following uses:

- 4D used in remote mode (connection to a 4D Server)
- 4D used in local mode with an interpreted database with no access to the Design environment.


## Première activation

With 4D, select the **License Manager...** command from the **Help** menu of the application. Pour activer 4D Server, lancez l'application 4D Server. The dialog box for choosing the [activation mode](#activation-mode) appears.

![](assets/en/getStart/server1.png)

4D offers three activation modes. **L'activation immédiate** est recommandée.

### Instant Activation

Enter your user ID (email or 4D account) as well as your password. If you do not have an existing user account, you will need to create it at the following address:

[https://account.4d.com/us/login.shtml](https://account.4d.com/us/login.shtml)

![](assets/en/getStart/activ1.png)

Then enter the license number of the product you want to activate. This number is provided by email or by mail after a product is purchased.

![](assets/en/getStart/activ2.png)


### Deferred Activation

If you are unable to use [instant activation](#instant-activation) because your computer does not have internet access, please proceed to deferred activation using the following steps.

1. Dans la fenêtre du Gestionnaire de licences de 4D accessible depuis le menu Aide, sélectionnez l'onglet **Activation différée**.
2. Entrez votre Numéro de licence ainsi que votre adresse E-mail, puis cliquez sur **Générer le fichier...** afin de créer le fichier d'ID (*reg.txt*).

![](assets/en/getStart/activ3.png)

3. Enregistrez le fichier *reg.txt* sur un support USB puis connectez ce support à un ordinateur qui a un accès Internet.
4. On the machine with internet access, login to [https://activation.4d.com](https://activation.4d.com).
5. Dans la page Web, cliquez sur le bouton **Parcourir...** et sélectionnez le fichier *reg.txt* généré lors des étapes 3 et 4 ; puis cliquez sur le bouton **Activer**.
6. Download the serial file(s).

![](assets/en/getStart/activ4.png)

7. Enregistrez le ou les fichier(s) *license4d* sur un support partagé et transférez-le(s) sur la machine 4D utilisée lors de l'étape 1.
8. De retour sur la machine avec 4D, toujours dans l'écran **Activation différée**, cliquez sur le bouton **Suivant** ; puis cliquez sur le bouton **Charger...** et sélectionnez un fichier *license4d* depuis le media partagé utilisé à l'étape 7.

![](assets/en/getStart/activ5.png)

Une fois le fichier de licence chargé, cliquez sur le bouton **Suivant**.

![](assets/en/getStart/activ6.png)

9. Cliquez sur le bouton **Ajouter N°** pour ajouter une autre licence. Repeat these steps until all licenses from step 6 have been integrated.

Your 4D application is now activated.

### Emergency Activation

This mode can be used for a special temporary activation of 4D (5 days maximum) without connecting to the 4D Web site. This activation can only be used one time.


## Adding licenses

You can add new licenses, for example to extend the capacities of your application, at any time.

Choisissez la commande **Gestionnaire de licences...** dans le menu **Aide** de l’application 4D ou 4D Server puis cliquez sur le bouton **Actualiser** :

![](assets/en/getStart/licens1.png)

Ce bouton vous connecte à notre base clients et active automatiquement toutes les licences nouvelles ou mises à jour liées à la licence courante (la licence courante est affichée en **gras** dans la liste des Licences actives). Vous devrez simplement saisir vos identifiants 4D (compte et mot de passe). You will just be prompted for your user account and password.

- Si vous avez acheté des expansions supplémentaires pour un 4D Server, vous n'avez pas besoin de saisir de numéro -- cliquez simplement sur **Actualiser**.
- At the first activation of a 4D Server, you just need to enter the server number and all the purchased expansions are automatically assigned.

Vous pouvez utiliser le bouton **Actualiser** dans les contextes suivants :

- When you have purchased an additional expansion and want to activate it,
- When you need to update an expired temporary number (Partners or evolutions).



## 4D Online Store

In 4D Store, you can order, upgrade, extend, and/or manage 4D products. You can reach the store at the following address: [https://store.4d.com/us/](https://store.4d.com/us/) (you will need to select your country).

Cliquez sur **Se connecter** pour vous identifier à l'aide de votre compte existant ou sur **Nouveau compte** pour en créer un nouveau, puis suivez les instructions à l'écran.

### License Management

Après vous être identifié, vous pouvez cliquer sur le lien **Liste de mes licences** en haut de la partie droite de la fenêtre :

![](assets/en/getStart/licens2.png)

Here you can manage your licenses by assigning them to projects.

Sélectionnez la licence que vous souhaitez dans la liste, puis cliquez sur **Lier à un projet:</p>

![](assets/en/getStart/licens3.png)

You can either select an existing project or create a new one:

![](assets/en/getStart/licens4.png)

![](assets/en/getStart/licens5.png)

You can use projects to organize your licenses according to your needs:

![](assets/en/getStart/licens6.png)


## Troubleshooting

If the installation or activation process fails, please check the following table, which gives the most common causes of malfunctioning:

| Symptoms                                                      | Possible causes                                            | Solution(s)                                                                                                                                     |
| ------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Impossible to download product from 4D Internet site          | Internet site unavailable, antivirus application, firewall | 1- Try again later OR 2- Temporarily disable your antivirus application or your firewall.                                                       |
| Impossible to install product on disk (installation refused). | Insufficient user access rights                            | Open a session with access rights allowing you to install applications (administrator access)                                                   |
| Failure of on-line activation                                 | Antivirus application, firewall, proxy                     | 1- Temporarily disable your antivirus application or your firewall OR 2- Use deferred activation (not available with licenses for "R" versions) |

If this information does not help you resolve your problem, please contact 4D or your local distributor.


## Contacts

Pour toute question relative à l’installation ou l’activation de votre produit, veuillez contacter 4D Sas ou votre distributeur local.

For the US:

- Web: [https://us.4d.com/4d-technical-support](https://us.4d.com/4d-technical-support)
- Telephone: 1-408-557-4600

For the UK:

- Web: [https://uk.4d.com/4d-technical-support](https://uk.4d.com/4d-technical-support)
- Telephone: 01625 536178
