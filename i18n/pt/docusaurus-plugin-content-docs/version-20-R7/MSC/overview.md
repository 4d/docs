---
id: overview
title: CSM
sidebar_label: CSM
---

A janela do Centro de Manutenção e Segurança (CMS) contém todas as ferramentas necessárias para verificação, análise, manutenção, backup, compactação e criptografia de arquivos de dados. A janela MSC está disponível em todas as aplicações 4D: 4D único usuário, 4D Server ou 4D Desktop.

**Nota:** la ventana del CSM no está disponible desde una conexión remota 4D.

Existem várias maneiras de abrir a janela do CSM. Como ele é acessado também determina como o projeto da aplicação é aberto: no modo de "manutenção" ou no modo "padrão". No modo de manutenção, o projeto não é aberto pelo 4D, apenas sua referência é fornecida ao CSM. No modo padrão, o projeto é aberto por 4D.

## Acesso no modo manutenção

No modo manutenção, somente a janela CSM é exibida (o projeto não é aberto pela aplicação 4D). Isso significa que os projetos que estão muito danificados para serem abertos no modo padrão por 4D podem, no entanto, ser acessados. Además, algunas operaciones (compactación, reparación, etc.) requieren que el proyecto se abra en modo mantenimiento (ver [Disponibilidad de las funcionalidades](#feature-availability)).

É possível abrir o CSM em modo de manutenção a partir de dois locais:

- **From the standard project opening dialog box**
 The standard Open dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button:
 ![](../assets/en/MSC/MSC_standardOpen.png)
- **Help/Maintenance Security Center** menu or **MSC** button in the tool bar (project not open)\
 ![](../assets/en/MSC/mscicon.png)\
 When you call this function, a standard Open file dialog appears so that you can select the *.4DProject* or *.4dz* file of the to be examined. O projeto não será aberto por 4D.

## Acesso ao modo padrão

No modo standard, está aberto um projeto. Neste modo, algumas funções de manutenção não estão disponíveis. Existem várias possibilidades de acesso à janela do CSM:

- Use o menu \*\*Centro de segurança e manutenção \*\* ou o botão **MSC** na barra de ferramentas 4D:\
 ![](../assets/en/MSC/mscicon.png)
- Use a ação padrão "msc" que pode ser associada a um comando de menu ou a um objeto de formulário.
- Utilice el comando `OPEN SECURITY CENTER`.

## Disponibilidade de funcionalidades

Certas funções do CSM não estão disponíveis dependendo do modo de abertura do CSM:

- A função de backup só está disponível quando o projeto está aberto (o CSM deve ter sido aberto no modo padrão).
- As funções de compactação, reversão, restauração, reparo e criptografia de dados só podem ser usadas com arquivos de dados que não estejam abertos (o CSM deve ter sido aberto no modo manutenção). Se essas funções forem tentadas enquanto o projeto estiver aberto no modo padrão, uma caixa de diálogo avisará que isso implica que a aplicação deve ser fechado e reiniciado no modo manutenção.
- En las bases encriptadas, el acceso a los datos encriptados o al archivo .journal requiere que se proporcione una clave de datos de encriptación válida (ver [Página cifrado](encrypt.md)). Caso contrário, os dados encriptados não são visíveis.
