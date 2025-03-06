---
id: interface
title: Página Interface
---

 
A página Interface é usada para definir várias opções relacionadas à interface do projeto.

## Geral

Esta área permite-lhe definir várias opções relativas ao ecrã.

![](../assets/en/settings/interface-page.png)

### Fonte a ser usada com o comando MESSAGE

Clique em **Select...** para definir a fonte e o tamanho dos caracteres usados pelo comando `MESSAGE`.

A fonte padrão e seu tamanho dependem da plataforma onde 4D está sendo executado.

> Esta propriedade também afecta as seguintes partes de 4D: <li>determinadas áreas de pré-visualização do Explorador</li><li>a régua do editor de formulários</li>
### Exibir janelas

Outras opções configuram a exibição de várias janelas no modo Aplicativo.

-   **Tela inicial**: Quando essa opção é desmarcada, a [tela inicial da barra de menu atual](Menus/bars.md#splash-screen) não é exibida no modo Aplicativo. Quando você oculta essa janela, cabe a você gerenciar a exibição de todas as suas janelas por meio de programação, por exemplo, no método de banco de dados `On Startup`.

-   **Progresso de descarga**: Quando esta opção estiver marcada, 4D exibe uma janela na parte inferior esquerda da tela enquanto os dados no cache são liberados. Como esta operação bloqueia temporariamente ações do usuário, exibindo esta janela permite que ele saiba que o movimento está em andamento.

:::note

Pode definir a frequência [de cache de flushing](database.md#memory-page) em **Settings** > **Database** > **Memória**.

:::

-   **Progresso da impressão**: Permite ativar ou desativar a exibição da caixa de diálogo de andamento da impressão durante a impressão.

-   **Usar o modo SDI no Windows**: Quando essa opção está marcada, 4D ativa automaticamente o [modo SDI (Single-Document Interface)](../Menus/sdi.md) em sua aplicação quando executada em um [contexto suportado](../Menus/sdi.md#sdi-mode-availability). Quando você selecionar esta opção, no Windows **Executar** menu da barra de menu 4D permite que você selecione o modo em que deseja testar a aplicação:

    ![](../assets/en/settings/sdi-mdi.png)

:::note

Esta opção pode ser selecionada no macOS, mas será ignorada quando o aplicativo for executado nesta plataforma.

:::



### Aparência

Esse menu permite que você selecione o esquema de cores a ser usado no nível do aplicativo principal. Um esquema de cores define um conjunto global de cores de interface para textos, planos de fundo, janelas, etc., usados em seus formulários.

> Esta opção só funciona no macOS. No Windows, é sempre utilizado o esquema "Light".

Os seguintes esquemas estão disponíveis:

-   **Light**: o aplicativo usará o tema padrão Light ![](../assets/en/settings/light-appearance.png)
-   **Escuro**: o aplicativo usará o tema escuro padrão ![](../assets/en/settings/dark-appearance.png)
-   **Herdado** (padrão): a aplicação herdará do nível de prioridade mais alto (ou seja, preferências do usuário do SO)

> Os temas predefinidos podem ser tratados com CSS. Para mais informações, consulte a seção [Media Queries](../FormEditor/createStylesheet.md#media-queries).

O esquema de aplicação principal será aplicado aos formulários por defeito. No entanto, ele pode ser substituído:

-   pelo comando [SET APPLICATION COLOR SCHEME](https://doc.4d.com/4dv19R/help/command/en/page1762.html) no nível da sessão de trabalho;
-   usando pela propriedade de formulário [esquema de cores](../FormEditor/propertiesForm.html#color-scheme) em cada nível de formulário (nível de prioridade mais alta). **Nota:** Quando impresso, os formulários sempre usam o esquema "Luz".

## Atalhos

Você usa a área de atalhos para visualizar e modificar atalhos padrão para três operações básicas de formulário 4D em seus aplicativos de desktop. Esses atalhos são idênticos em ambas as plataformas. Os ícones das teclas indicam as teclas correspondentes para Windows e macOS.

Os atalhos predefinidos são os seguintes:

-   Aceitar de formulário de entrada: **Enter**
-   Cancelamento de entrada: **Esc**
-   Adicionar a subform: **Ctrl+Shift+/** (Windows) ou **Comando+Shift+/** (macOS)

Para alterar o atalho de uma operação, clique no botão correspondente **Editar**. Aparece a seguinte caixa de diálogo:

![](../assets/en/settings/shortcut.png)

Para alterar o atalho, digite a nova combinação de teclas no seu teclado e clique em **OK**. Se você prefere não ter um atalho para uma operação, clique em **Limpar**.


