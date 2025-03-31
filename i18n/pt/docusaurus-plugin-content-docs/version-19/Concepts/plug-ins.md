---
id: plug-ins
title: Plug-ins
---

Ao desenvolver uma aplicação 4D, irá descobrir muitas capacidades que não notou quando começou. Pode mesmo aumentar a versão padrão de 4D adicionando **plug-ins** ao seu ambiente de desenvolvimento 4D.

## Porquê a necessidade de um plug-in?

Embora 4D ofereça centenas de métodos integrados, para manipular objetos, registros e implementar a interface do usuário, pode ser necessário algum uso ou recurso especial (às vezes dependente da plataforma): alguém pode precisar de ODBC no Windows, ou pode precisar de serviços da Apple no macOS, enquanto outro ainda pode querer implementar ferramentas estatísticas específicas, login em redes sociais, plataforma de pagamento, acesso a arquivos pela rede, uma interface de usuário especial ou uma estrutura de imagem privada.

É óbvio que cobrir todas as áreas dos sistemas operacionais macOS e Windows com comandos 4D certamente levaria a um produto com milhares de comandos e, em simultâneo, a maioria dos usuários não teria necessidade de um conjunto tão grande de recursos. Além disso, a criação de uma ferramenta tão abrangente tornaria o ambiente 4D incrivelmente complexo e levaria meses de estudo para a maioria dos usuários antes que resultados úteis pudesse ser esperados.

A natureza modular do ambiente 4D permite a criação de aplicativos básicos, mas não impede o desenvolvimento de sistemas altamente complexos. A arquitetura 4D Plug-in abre o ambiente 4D para qualquer tipo de aplicação ou usuário. Os 4D Plug-ins multiplicam o poder e a produtividade da aplicação ou do usuário.

## Por que a necessidade de um plug-in?

Um plug-in é um pedaço de código que 4D lança no início. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade.

Normalmente, um plug-in faz coisas que:
- 4D não pode fazer (ou seja, tecnologia de plataforma específica),
- será muito difícil de escrever usando apenas 4D,
- só estão disponíveis como Ponto de Entrada Plug-in

Um plug-in contém normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma Área Externa e gerir um processo externo.

- Uma rotina **plug in** é uma rotina escrita em língua nativa (geralmente C ou C++) que provoca uma ação.
- Uma **área externa** é uma parte de um formulário que pode mostrar quase tudo e interagir com o usuário quando necessário.
- Um **processo externo** é um processo que corre sozinho, geralmente em loop, fazendo quase tudo o que quer. Todos os códigos de processo pertencem ao plug-in, 4D está simplesmente presente para receber/enviar eventos para o processo.

### Nota importante

Um plug-in pode ser muito simples, com apenas uma rotina executando uma tarefa muito pequena, ou pode ser muito complexo, envolvendo centenas de rotinas e áreas. Não há praticamente nenhum limite para o que um plug-in pode fazer, no entanto cada desenvolvedor de plug-in deve lembrar-se que um plug-in é uma peça de código de "amostra". É o plug-in que funciona dentro do 4D, e não o contrário. Como peça de código, é o anfitrião do 4D; não é uma aplicação isolada. Partilha o tempo e a memória da CPU com 4D e outros plug-ins, portanto, deve ser um código bem educado, utilizando apenas o que é necessário para rodar. Por exemplo, nos loops longos, um plug-in deve chamar a `PA_Yield()` para dar tempo ao planificador 4D, a menos que sua tarefa seja crítica tanto para ele quanto para a aplicação.

## Como criar um plug-in?

4D fornece no GitHub um SDK plug-in de código aberto [****](https://github.com/4d/4D-Plugin-SDK), contendo o API de Plugin 4D e o Assistente de Plugin 4D:

- o [**4D Plugin API**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), escrito em C, acrescenta mais de 400 funções que o ajudam a criar facilmente os seus próprios plug-ins para adicionar novas funcionalidades à sua aplicação 4D. As funções API Plug-in 4D gerem todas as interacções entre a aplicação 4D e o seu plug-in.
- O [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) é uma ferramenta essencial que simplifica a tarefa de desenvolvimento de plug-ins 4D. Escreve o código 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu próprio código.

## Como instalar um plug-in?

Você instala plug-ins no ambiente 4D copiando seus arquivos para a pasta apropriada.

As pastas "PluginName.bundle" contêm versões Windows e macOS de plugins 4D. Sua arquitetura interna específica permite que 4D Server carregue a versão apropriada conforme a plataforma onde a máquina do cliente será executada. Para instalar um plug-in em seu ambiente, você só precisa colocar a pasta "PluginName.bundle" ou pacote em questão na pasta **Plugins** desejada.

Pode colocar a pasta Plugins em dois locais diferentes:

- Ao nível da aplicação 4D executável, ou seja:
  - No Windows: junto ao ficheiro .exe
  - No macOS: no primeiro nível da pasta Conteúdo no pacote da aplicação. Neste caso, os plug-ins estão disponíveis em cada projeto aberto por esta aplicação.
- Ao mesmo nível que a pasta Project. Nesse caso, os plug-ins só estão disponíveis nesse projeto específico.

A escolha do ubicação depende de como você deseja usar o plug-in.

Se o mesmo plug-in for colocado em ambos os locais, 4D só carregará o localizado ao lado da estrutura. Em uma aplicação compilada e fundida usando 4D Volume Desktop, se houver várias instâncias do mesmo plug-in presente, isso impedirá que a aplicação seja aberta.

Os plug-ins são carregados por 4D quando a aplicação for lançada, pelo que terá de abandonar a sua aplicação 4D antes de os instalar. Então abra seu projeto com 4D. Se qualquer plug-in necessitar de uma licença específica para utilização, será carregado, mas não estará disponível para utilização.