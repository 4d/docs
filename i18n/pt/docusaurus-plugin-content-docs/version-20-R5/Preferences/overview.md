---
id: overview
title: Preferências
---

User preferences specify various settings affecting your working environment, e.g. default options, display themes, Code Editor features, shortcuts, etc. They are applied to all projects opened with your 4D or 4D Server application. Eles são aplicados a todos os projetos abertos com sua aplicação 4D ou 4D Server.

**4D Server**: Object locking occurs when two or more users try to modify the settings in the Preferences dialog box at the same time. Apenas um usuário pode utilizar a caixa de diálogo Preferências.

> 4D offers a different set of parameters specific to the open projet: **Settings** (available from the **Design** menu). Para mais informações, consulte o capítulo Parâmetros.

## Acesso

You can access the Preferences dialog box from the **Edit > Preferences...** menu (Windows) or the **4D** Application menu (macOS):

![](../assets/en/Preferences/overviewAccess.png)

Esta opção de menu está disponível mesmo quando não existe nenhum projeto aberto.

You can also display the Preferences dialog box in Application mode using the "Preferences" standard action (associated with a menu item or a button) or using the `OPEN SETTINGS WINDOW` command.

## Armazenamento

Settings made in the Preferences dialog box are saved in an XML format preferences file named **4D Preferences vXX.4DPreferences** that is stored in the active 4D folder of the current user, as returned by the [`Get 4D folder`](https://doc.4d.com/4Dv18R6/4D/18-R6/Get-4D-folder.301-5198423.en.html) command:

- Windows: `{disk}\Users\{UserName}\AppData\Roaming\4D`
- macOS: `{disk}:Users:{UserName}:Library:Application Support:4D`

## Personalização de parâmetros e redefinição de configurações

Nas caixas de diálogo de parâmetros, os parâmetros cujos valores foram modificados aparecem a negrito:

![](../assets/en/Preferences/overviewUser.png)

As preferências indicadas como personalizadas podem ter sido modificadas diretamente na caixa de diálogo, ou podem ter sido modificadas anteriormente no caso de uma base de dados convertida.

Um parâmetro continua a aparecer a negrito mesmo quando o seu valor é substituído manualmente pelos seus valores por defeito. Desta forma, é sempre possível identificar visualmente quaisquer parâmetros que tenham sido personalizados.

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click on the **Reset to factory settings** button:

![](../assets/en/Preferences/overviewSettings.png)

Este botão repõe todos os parâmetros da página atual. Fica ativo quando pelo menos um parâmetro tiver sido modificado na página atual.
