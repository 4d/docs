---
id: rollback
title: Page Retour en arrière
sidebar_label: Page Retour en arrière
---

La page Retour arrière du CSM permet d’accéder à la fonction de retour en arrière parmi les opérations effectuées dans le fichier de données. Elle s’apparente à une fonction d’annulation multi-niveaux. Elle est utile notamment lorsqu’un enregistrement a été supprimé par erreur dans la base de données.

Pour que cette fonction soit accessible, il est impératif que l'application travaille avec un fichier d’historique.

![](../assets/en/MSC/MSC_rollback1.png)

> If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in the **Values** column and a dialog requesting the passphrase or the data key is displayed if you click the **Rollback** button.

The contents and functioning of the list of operations are the same as for the [Activity analysis](analysis.md) window.

Pour effectuer un retour en arrière parmi les opérations, vous devez sélectionner la ligne située après laquelle toutes les opérations doivent être annulées. L’opération de la ligne sélectionnée sera la dernière conservée. Si par exemple vous souhaitez annuler une suppression, sélectionnez l’opération située juste avant la suppression. L'opération de suppression et les opérations suivantes seront annulées.

![](../assets/en/MSC/MSC_rollback2.png)

Next click on the **Rollback** button. 4D vous demande de confirmer l’opération. If you click **OK**, the data is then restored to the exact state it was in at the moment of the selected action.

Le menu situé en bas de la fenêtre vous permet de sélectionner le fichier d’historique à utiliser lorsque vous appliquez la fonction de retour en arrière à une base restituée. Dans ce cas, vous devez désigner le fichier d’historique correspondant à l’archive.

Here is how the rollback function works: when the user clicks the **Rollback** button, 4D shuts the current database and restores the last backup of the database data. La base restituée est ensuite ouverte et 4D intègre les opérations de l’historique jusqu’à l’opération sélectionnée. Si la base n’avait pas encore été sauvegardée, 4D repart d’un fichier de données vierge.
