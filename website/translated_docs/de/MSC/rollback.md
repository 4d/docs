---
id: rollback
title: Seite Zurückfahren
sidebar_label: Seite Zurückfahren
---

Auf dieser Seite können Sie auf die Funktion Rollback für die im Logbuch ausgeführten Operationen zugreifen. Sie arbeitet ähnlich wie die Operation Rückgängig auf mehreren Ebenen. Das ist besonders hilfreich, wenn ein Datensatz versehentlich in der Datenbank gelöscht wurde.

Diese Funktion ist nur verfügbar, wenn die Datenbank mit einem Logbuch arbeitet.

![](assets/en/MSC/MSC_rollback1.png)

> If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in the **Values** column and a dialog requesting the passphrase or the data key is displayed if you click the **Rollback** button.

Die Liste ist genauso aufgebaut und funktioniert wie auf der Seite [Aktivitätsanalyse](analysis.md).

Um ein Rollback in den Operationen auszuführen, wählen Sie die Zeile, nach der alle Operationen annulliert werden sollen. Die Operation der gewählten Zeile bleibt als letzte erhalten. Wollen Sie z. B. einen Löschvorgang aufheben, wählen Sie die direkt davor liegende Operation. Diese bleibt dann erhalten, alle nachfolgenden Operationen werden annulliert.

![](assets/en/MSC/MSC_rollback2.png)

Next click on the **Rollback** button. Auf dem Bildschirm erscheint ein Dialogfenster zum Bestätigen. If you click **OK**, the data is then restored to the exact state it was in at the moment of the selected action.

Über das PopUp-Menü am unteren Rand wählen Sie das passende Logbuch zum Ausführen der Rollback-Funktion in einer wiederhergestellten Datenbank. In diesem Fall müssen Sie das passende Logbuch der Datei im Archiv angeben.

Here is how the rollback function works: when the user clicks the **Rollback** button, 4D shuts the current database and restores the last backup of the database data. Die wiederhergestellte Datenbank wird dann geöffnet. 4D integriert die Operationen des Logbuchs bis zur gewählten Operation. Wurde die Datenbank noch nicht gesichert, startet 4D mit einer leeren Datendatei.