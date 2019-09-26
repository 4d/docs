---
id: encrypt
title: Page chiffrement
sidebar_label: Page chiffrement
---

Vous pouvez vous aider de cette page pour chiffrer et déchiffrer (i.e. enlever le chiffrement) le fichier de données, en fonction du statut de l'attribut **Chiffrable** défini pour chaque table de la base. Pour des informations plus détaillées sur le chiffrement des données dans 4D, veuillez consulter la section "Chiffrer les données".

Un nouveau dossier est créé à chaque opération de chiffrement/déchiffrement. Il est nommé "Replaced Files (Encrypting) *yyyy-mm-dd hh-mm-ss*" ou "Replaced Files (Decrypting) *yyyy-mm-dd hh-mm-ss*".

> Le chiffrement est disponible uniquement en [mode maintenance](overview.md#display-in-maintenance-mode). Si vous tentez d'exécuter cette opération en mode standard, une fenêtre d'avertissement vous informera que la base sera fermée et redémarrée en mode maintenance.

**Attention :**

- Le chiffrement d'une base est une opération de longue durée. Un indicateur de progression de l'opération s'affiche (et peut être interrompu par l'utilisateur). À noter également que le chiffrement d'une base comprend toujours une étape de compactage.
- Chaque opération de chiffrement génère une copie du fichier de données, ce qui augmente la taille du dossier de l'application. Il est important de prendre cela en considération (notamment sous macOS, où les applications 4D apparaissent sous forme de paquet) afin de ne pas augmenter excessivement la taille de l'application. Le déplacement ou la suppression manuels des copies du fichier original dans le paquet peut aider à réduire la taille du paquet.

## Chiffrer des données pour la première fois

Trois étapes sont nécessaires pour effectuer le tout premier chiffrement de vos données à l'aide du CSM :

1. Dans l'éditeur de structure, cochez l'attribut **Chiffrable** pour chaque table dont vous souhaitez chiffrer les données. Consultez la section "Propriétés des tables". 
2. Ouvrez la page Chiffrement du CSM. Si vous ouvrez la page sans paramétrer les tables comme étant **Chiffrables**, le message suivant s'affiche : ![](assets/en/MSC/MSC_encrypt1.png) Sinon, le message suivant s'affiche : ![](assets/en/MSC/MSC_encrypt2.png) Cela signifie que le statut **Chiffrable** défini pour au moins une table a été modifié et que le fichier de données n'a toujours pas été chiffré. **Note** : Le même message s'affiche lorsque le statut **Chiffrable** a été modifié dans un fichier de données déjà chiffré ou après le déchiffrement d'un fichier de données (voir ci-dessous).
3. Cliquez sur le bouton de Chiffrement.  
    ![](assets/en/MSC/MSC_encrypt3.png)  
    Vous serez ensuite invité à saisir une phrase secrète pour votre fichier de données : ![](assets/fr/MSC/MSC_encrypt4.png) La phrase secrète est utilisée pour générer la clé de chiffrement des données. Une phrase secrète est une version plus sécurisée d'un mot de passe et peut contenir un grand nombre de caractères. Par exemple, vous pouvez saisir une phrase secrète telle que "Nous sommes allés à Montreux" ou "Ma toute 1ère et brillante phrase secrète !!" L'indicateur du niveau de sécurité peut vous aider à évaluer la sûreté de votre phrase secrète : ![](assets/en/MSC/MSC_encrypt5.png) (la couleur vert foncé correspond au niveau de sécurité le plus élevé)
4. Tapez sur Entrée pour confirmer votre phrase secrète sécurisée. 

Le processus de chiffrement est alors lancé. Si le CSM est ouvert en mode standard, la base de données est rouverte en mode maintenance.

4D propose de sauvegarder la clé de chiffrement (voir le paragraphe [Sauvegarder la clé de chiffrement](#saving-the-encryption-key) ci-dessous). Vous pouvez la sauvegarder à ce moment précis ou bien ultérieurement. Vous pouvez également ouvrir le fichier d'historique du chiffrement.

Si le processus de chiffrement est réussi, la page Chiffrement affiche les boutons Opérations de maintenance liées au chiffrement.

**Attention :** Durant l'opération de chiffrement, 4D créé un nouveau fichier de données vide et y insère des données à partir du fichier de données original. Les enregistrements correspondant aux tables "chiffrées" sont chiffrés puis copiés ; les autres enregistrements sont uniquement copiés (une opération de compactage est également exécutée). Si l'opération est réussie, le fichier de données original est déplacé vers un dossier "Replaced Files (Encrypting)". Si vous souhaitez transmettre un fichier de données chiffré, assurez-vous d'avoir préalablement déplacé/retiré tout fichier de données non chiffrées du dossier de la base de données.

## Opérations de maintenance liées au chiffrement

Lorsqu'une base est chiffrée (voir ci-dessus), la page Chiffrement propose plusieurs opérations de maintenance liées au chiffrement, qui correspondent à des scénarios standard. ![](assets/fr/MSC/MSC_encrypt6.png)

### Fournir la clé de chiffrement des données actuelle

Pour des raisons de sécurité, toutes les opérations de maintenance liées au chiffrement nécessitent la clé de chiffrement des données actuelle.

- If the data encryption key is already loaded in the 4D keychain(1), it is automatically reused by 4D.
- Si la clé de chiffrement des données n'est pas identifiée, vous devez la fournir. La boîte de dialogue suivante s'affiche : ![](assets/fr/MSC/MSC_encrypt7.png)

À ce stade, deux options s'offrent à vous :

- enter the current passphrase(2) and click **OK**. OU
- connect a device such as a USB key and click the **Scan devices** button. 

(1) The 4D keychain stores all valid data encrpytion keys entered during the application session.  
(2) The current passphrase is the passphrase used to generate the current encryption key.

In all cases, if valid information is provided, 4D restarts in maintenance mode (if not already the case) and executes the operation.

### Re-chiffrer les données à l'aide de la clé de chiffrement actuelle

This operation is useful when the **Encryptable** attribute has been modified for one or more tables containing data. In this case, to prevent inconsistencies in the data file, 4D disallows any write access to the records of the tables in the application. Re-encrypting data is then necessary to restore a valid encryption status.

1. Cliquez sur **Re-chiffrer les données à l'aide de la clé actuelle**.
2. Saisissez la clé de chiffrement des données actuelle.

The data file is properly re-encrypted with the current key and a confirmation message is displayed: ![](assets/fr/MSC/MSC_encrypt8.png)

### Changer votre phrase secrète et re-chiffrer les données

This operation is useful when you need to change the current encryption data key. For example, you may need to do so to comply with security rules (such as requiring changing the passphrase every three months).

1. Cliquez sur **Changer votre phrase secrète et re-chiffrer les données**.
2. Saisissez la clé de chiffrement des données actuelle.
3. Saisissez la nouvelle phrase secrète (pour plus de sécurité, il vous est demandé de la saisir deux fois) : ![](assets/en/MSC/MSC_encrypt9.png) Le fichier de données est entièrement déchiffré et un message de confirmation s'affiche : ![](assets/fr/MSC/MSC_encrypt8.png)

### Enlever le chiffrement de toutes les données

This operation removes all encryption from the data file. If you no longer want to have your data encrypted:

1. Cliquez sur **Enlever le chiffrement de toutes les données**.
2. Saisissez la clé de chiffrement de données actuelle (voir Fournir la clé de chiffrement des données actuelle).

The data file is fully decrypted and a confirmation message is displayed: ![](assets/en/MSC/MSC_encrypt10.png)

> Une fois que le fichier de données est déchiffré, le statut de chiffrement des tables ne correspond plus à leur attribut Chiffrable. Pour restituer un statut de mise en correspondance, vous devez décocher tous les attributs **Chiffrable** au niveau de la structure de la base.

## Sauvegarder la clé de chiffrement

4D allows you to save the data encryption key in a dedicated file. Storing this file on an external device such a USB key will facilitate the use of an encrypted database, since the user would only need to connect the device to provide the key before opening the database in order to access encrypted data.

You can save the encryption key each time a new passphrase has been provided:

- lorsque la base est chiffrée pour la première fois,
- lorsque la base est re-chiffrée avec une nouvelle phrase secrète.

Successive encryption keys can be stored on the same device.

## Fichier d'historique

After an encryption operation has been completed, 4D generates a file in the Logs folder of the database. It is created in XML format and named "*DatabaseName_Encrypt_Log_yyyy-mm-dd hh-mm-ss.xml*" or "*DatabaseName_Decrypt_Log_yyyy-mm-dd hh-mm-ss.xml*".

An Open log file button is displayed on the MSC page each time a new log file has been generated.

The log file lists all internal operations executed pertaining to the encryption/decryption process, as well as errors (if any).