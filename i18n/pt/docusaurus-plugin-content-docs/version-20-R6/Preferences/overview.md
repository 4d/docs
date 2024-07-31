---
id: overview
title: Preferências
---

User preferences specify various settings affecting your working environment, e.g. default options, display themes, Code Editor features, shortcuts, etc. They are applied to all projects opened with your 4D or 4D Server application. Eles são aplicados a todos os projetos abertos com sua aplicação 4D ou 4D Server.

**4D Server**: el bloqueo de objetos se produce cuando dos o más usuarios intentan modificar los parámetros de la caja de diálogo Preferencias al mismo tiempo. Apenas um usuário pode utilizar a caixa de diálogo Preferências.

> 4D ofrece un conjunto de parámetros específicos diferente para el proyecto abierto: **Parámetros** (disponible en el menú **Diseño**). Para mais informações, consulte o capítulo Parâmetros.

## Acesso

Puede acceder a la caja de diálogo Preferencias desde el menú **Editar > Preferencias...** (Windows) o el menú de la aplicación **4D** (macOS):

![](../assets/en/Preferences/overviewAccess.png)

Esta opção de menu está disponível mesmo quando não existe nenhum projeto aberto.

También puede mostrar el cuadro de diálogo de Preferencias en el modo Aplicación mediante la acción estándar "Preferencias" (asociada a un elemento de menú o a un botón) o mediante el comando `OPEN VENTANA DE AJUSTES`.

## Armazenamento

Settings made in the Preferences dialog box are saved in an XML format preferences file named **4D Preferences vXX.4DPreferences** that is stored in the active 4D folder of the current user, as returned by the [`Get 4D folder`](https://doc.4d.com/4Dv18R6/4D/18-R6/Get-4D-folder.301-5198423.en.html) command:

- Windows: `{disk}\Users\\{username\}\AppData\Roaming\4D`
- macOS: `{disk}:Users:\{username\}:Library:Application Support:4D`

## Personalização de parâmetros e redefinição de configurações

Nas caixas de diálogo de parâmetros, os parâmetros cujos valores foram modificados aparecem a negrito:

![](../assets/en/Preferences/overviewUser.png)

As preferências indicadas como personalizadas podem ter sido modificadas diretamente na caixa de diálogo, ou podem ter sido modificadas anteriormente no caso de uma base de dados convertida.

Um parâmetro continua a aparecer a negrito mesmo quando o seu valor é substituído manualmente pelos seus valores por defeito. Desta forma, é sempre possível identificar visualmente quaisquer parâmetros que tenham sido personalizados.

Para reiniciar los parámetros a sus valores por defecto y eliminar el estilo negrita que indica que han sido personalizados, haga clic en el botón **Restablecer los parámetros de fábrica**:

![](../assets/en/Preferences/overviewSettings.png)

Este botão repõe todos os parâmetros da página atual. Fica ativo quando pelo menos um parâmetro tiver sido modificado na página atual.
