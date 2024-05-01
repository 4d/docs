---
id: overview
title: Settings
---

Os parâmetros configuram o funcionamento do projeto atual. Esses parâmetros podem diferir para cada projeto. They include the listening ports, backup configurations, security options, Web parameters, etc.

![](../assets/en/settings/main.png)

> 4D provides another set of parameters, called **Preferences**, that apply to the 4D IDE application. For more information, refer to [Preferences](../Preferences/general.md).

## Aceder os parâmetros

Pode aceder à caixa de diálogo Parâmetros:

- using the **Design > Settings...** menu option
- by clicking **Settings** on the 4D toolbar
- on 4D Server, using the **Edit > Settings...** menu option

When [**User settings** mode is enabled](../Desktop/user-settings.md), **Settings...** is renamed **Structure Settings...** and two additional menu commands are available at each location:

- **User Settings...** gives you access to settings that can be stored externally in a user file. Se estas forem modificadas, serão utilizadas em vez dos parâmetros de estrutura.
- **User Settings for Data File...** gives you access to settings that can be stored externally in a user file attached to the current data file. Se eles forem modificados, serão usados em vez de parâmetros de usuário ou estrutura.

### Informações de bloqueio

O bloqueio pode ocorrer nos modos Projeto e Cliente/servidor quando:

- The _settings.4DSettings_ file is 'Read-only' (Projects only). A modificação de uma configuração exibirá um alerta para desbloqueá-la, se possível.
- Two or more users attempt to modify the same settings at the same time. The settings cannot be used until the first user frees it by closing the window. (Apenas cliente/servidor)

In both cases, the settings can be opened in 'Read-only', but cannot be used until the lock is removed.

## Personalização de parâmetros

In the Settings dialog boxes, parameters whose values have been modified appear **in bold**:

![](../assets/en/settings/customize-settings.png)

Parameters indicated as customized may have been modified directly in the dialog box, or may have been modified previously in the case of a converted project.

Um parâmetro continua a aparecer a negrito mesmo quando o seu valor é substituído manualmente pelos seus valores por defeito. Desta forma, é sempre possível identificar visualmente quaisquer parâmetros que tenham sido personalizados.

A maioria dos parâmetros é aplicada imediatamente. However, a few of them (such as the Startup environment setting) only take effect when the database is restarted. In this case, a dialog box appears to inform you that the change will take effect at the next startup.

## Repor os parâmetros

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click **Reset to factory settings**.

Este botão repõe todos os parâmetros da página atual. Fica ativo quando pelo menos um parâmetro tiver sido modificado na página atual.
