---
id: installation
title: Instalação e ativação
---

Bem-vindo a 4D! You will find below all necessary information about how to install and register your 4D application.

## Configuração necessária

Refer to the [product download page](https://us.4d.com/product-download) on the 4D web site for minimum Mac / Windows configuration for your 4D series.

All the details are available on the [Resources page](https://us.4d.com/resources/feature-release) of the 4D Web site.

## Instalação no disco

4D products are installed from the 4D Web site:

1. Using your browser, connect to the 4D Web site and go to the [Downloads](https://us.4d.com/product-download/Feature-Release) page.
2. Click on the download link that corresponds to your product and follow the instructions displayed on screen.

## Activation of a product

Uma vez instalados no seu disco, deve activar os seus produtos 4D para poder utilizá-los. You also need to activate any additional licenses you obtain.

Não precisa ativar nada para os usos abaixo:

- 4D usado em modo remoto (conexão ao servidor 4D)
- 4D used in local mode with an interpreted database with no access to the Design environment.

**Important:** You must have an Internet connection and an e-mail account in order to activate your products.

### Ativação de 4D

1. Launch the 4D application.
2. Select the **License Manager...** command from the **Help** menu.

![](../assets/en/getStart/helpMenu.png)

The **License Manager** dialog box is displayed (Instant Activation page is selected by default). See the following section.

> When you open/create a local interpreted application with 4D Developer Edition, an auto-activation mechanism is implemented. In this case, a dialog box informs you that you are going to be connected to our customer database and that your licenses will be activated (you will need to enter the password for your 4D account).

### Activate 4D Server

1. Launch the 4D Server application. Aparece a caixa de diálogo para escolher o [modo de ativação](#activation-mode).

![](../assets/en/getStart/helpMenu.png)

## 4D Activation mode

4D oferece três modos de ativação. Recomendamos **Instant Activation**.

### Ativação instantânea

Digite seu ID (email ou conta 4D) e sua senha. Se ainda não tiver uma conta de usuário, vai ter que criá-la no endereço a seguir:

[https://account.4d.com/us/login.shtml](https://account.4d.com/us/login.shtml)

![](../assets/en/getStart/activ1.png)

Depois entre o número de licença do produto que quiser ativar. Esse número é fornecido por email depois da compra do produto.

![](../assets/en/getStart/activ2.png)

### Ativação postergada

Se não puder usar [instant activation](#instant-activation) porque seu computador não tem acesso à internet, veja a ativação postergada usando os passos abaixo.

1. Na janela de License Manager, selecione a aba **Deferred Activation**.
2. Digite o número de licença e seu email e clique  **Generate file** para criar o arquivo ID  (*reg.txt*).

![](../assets/en/getStart/activ3.png)

3. Salve o arquivo *reg.txt* para um drive USB e leve ao computador que tenha acesso à internet.
4. No aparelho com acesso à internet, faça login a  [https://activation.4d.com](https://activation.4d.com).
5. Na página web, clique no botão **Choose File...** e selecione o arquivo *reg.txt* dos passos 3 e 4; depois clique no botão **Ativar**.
6. Baixe os arquivos seriais.

![](../assets/en/getStart/activ4.png)

7. Salve os arquivos *license4d* em uma mídia partilhda e os transfira para a máquina 4D do passo 1.
8. Agora de volta para a máquina com 4D, ainda na página **Deferred Activation**, clique **Next**; e depois clique no botão **Load...** e selecione o arquivo *license4d* da mídia social do passo 7.

![](../assets/en/getStart/activ5.png)

Com o arquivo licença carregado, clique em **Next**.

![](../assets/en/getStart/activ6.png)

9. Clique no botão **Add N°** e adicione outra licença. Repita esses passos até que todas as licenças do passo 6 tenham sido integradas.

Sua aplicação 4D agora está ativada.

### Ativação emergencial

Esse modo pode ser usado para ativação temporária especial de 4D (por no máximo 5 dias) sem conexão a um site 4D Web. Essa ativação só pode ser usada uma vez.

## Adicionar licenças

Pode adicionar novas licenças, por exemplo par aumentar as capacidades de sua aplicação, a qualquer momento.

Escolha o comando **License Manager...** a partir do menu **Help** da aplicação Servidor 4D ou 4D, depois clicar no botão **Refresh** :

![](../assets/en/getStart/licens1.png)

Este botão conecta você à nossa base de dados de clientes e ativa automaticamente quaisquer licenças novas ou actualizadas relacionadas com a licença atual (a licença actual é apresentada em **em negrito** na lista "Active Licenses"). Será pedido sua conta de usuário e senha.

- Se adquiriu expansões adicionais para um Servidor 4D, não necessita de introduzir qualquer número de licença -- basta clicar em **Atualizar**.
- Na primeira ativação de um Servidor 4D, basta introduzir o número do servidor e todas as expansões compradas são automaticamente atribuídas.

Pode utilizar o botão **Refresh** nos seguintes contextos:

- Quando tiver adquirido uma expansão adicional e quiser ativá-la,
- Quando for necessário atualizar um número temporário expirado (Parceiros ou evoluções).

## 4D Online Store

Na loja 4D, pode encomendar, atualizar, ampliar, e/ou gerir produtos 4D. Pode contactar a loja no seguinte endereço: [https://store.4d.com/us/](https://store.4d.com/us/) (terá de seleccionar o seu país).

Clique **Login** para entrar usando a sua conta existente ou **Nova Conta** para criar uma nova, depois siga as instruções na tela.

### Gestão de licenças

Depois de iniciar sessão, pode clicar em **Lista de licenças** no canto superior direito da página:

![](../assets/en/getStart/licens2.png)

Aqui pode gerir as suas licenças, atribuindo-as a projectos.

Seleccione a licença apropriada da lista e clique em **Link para um projeto... >**:

![](../assets/en/getStart/licens3.png)

Pode selecionar um projeto existente ou criar um novo:

![](../assets/en/getStart/licens4.png)

![](../assets/en/getStart/licens5.png)

Pode utilizar os projectos para organizar as suas licenças de acordo com as suas necessidades:

![](../assets/en/getStart/licens6.png)

## Resolução de problemas

Se a instalação ou o processo de ativação falhar, verificar a tabela seguinte, que apresenta as causas mais comuns de mau funcionamento:

| Sintomas                                                      | Possíveis causas                                           | Solução(ões)                                                                                                                                       |
| ------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Impossível descarregar o produto do sítio 4D da Internet      | Sítio Internet indisponível, aplicação antivírus, firewall | 1- Tente novamente mais tarde OU 2- Desative temporariamente a sua aplicação antivírus ou a sua firewall.                                          |
| Impossível instalar o produto em disco (instalação recusada). | Direitos de acesso insuficientes dos utilizadores          | Abrir uma sessão com direitos de acesso que lhe permita instalar aplicações (acesso de administrador)                                              |
| Falha da ativação on-line                                     | Aplicação antivírus, firewall, proxy                       | 1- Desative temporariamente a sua aplicação antivírus ou a sua firewall OU 2- Use ativação diferida (não disponível com licenças para versões "R") |

Se estas informações não o ajudarem a resolver o seu problema, por favor contate 4D ou o seu distribuidor local.

## Contactos

Para quaisquer questões sobre a instalação ou activação do seu produto, contacte 4D, Inc. ou o seu distribuidor local.

Para os EUA:

- Web: [https://us.4d.com/4d-technical-support](https://us.4d.com/4d-technical-support)
- Telefone: 1-408-557-4600

Para o Reino Unido:

- Web: [https://uk.4d.com/4d-technical-support](https://uk.4d.com/4d-technical-support)
- Telefone: 01625 536178

Find the 4D developer community on line here: [https://discuss.4d.com](https://discuss.4d.com).
