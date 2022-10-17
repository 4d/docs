---
id: plug-ins
title: Plug-ins
---

Ao desenvolver uma aplicação 4D, irá descobrir muitas capacidades que não notou quando começou. Pode mesmo aumentar a versão padrão de 4D adicionando **plug-ins** ao seu ambiente de desenvolvimento 4D.

## Por que a necessidade de um plug-in?

Embora 4D forneça centenas de métodos incorporados usados para manipular objectos, registos e implementar interface de utilizador, pode ser necessário algum uso ou recurso especial (por vezes dependente da plataforma): um pode precisar de ODBC sob Windows, outro pode precisar de serviços Apple sob macOS, enquanto outro pode querer implementar ferramentas estatísticas específicas, login na rede social, plataforma de pagamento, acesso a ficheiros através da rede, uma interface de utilizador especial, ou uma estrutura de imagem privada.

É óbvio que cobrir todas as áreas dos sistemas operativos MacOS e Windows através de comandos 4D levaria certamente a um produto com milhares de comandos, e ao mesmo tempo, a maioria dos usuários não teria necessidade de um conjunto tão grande de capacidades. Além disso, a criação de uma ferramenta tão abrangente tornaria o ambiente 4D incrivelmente complexo e levaria a maioria dos utilizadores meses de estudo antes de se poder esperar resultados úteis.

A natureza modular do ambiente 4D permite a criação de aplicações básicas mas não impede o desenvolvimento de sistemas altamente complexos. A arquitectura 4D Plug-in abre o ambiente 4D a qualquer tipo de aplicação ou utilizador. 4D Os Plug-ins multiplicam essa aplicação ou o poder e produtividade do usuário.

## O que é um plug-in e o que pode fazer?

Um plug-in é uma peça de código que a 4D lança ao iniciar. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade.

Normalmente, um plug-in faz coisas que:
- 4D não pode fazer (ou seja, tecnologia de plataforma específica),
- será muito difícil de escrever usando apenas 4D,
- só estão disponíveis como Ponto de Entrada Plug-in

Um plug-in contém normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma Área Externa e gerir um processo externo.

- Uma rotina **plug in** é uma rotina escrita em língua nativa (geralmente C ou C++) que provoca uma ação.
- Uma **área externa** é uma parte de um formulário que pode mostrar quase tudo e interagir com o usuário quando necessário.
- Um **processo externo** é um processo que corre sozinho, geralmente em loop, fazendo quase tudo o que quer. Todos os códigos de processo pertencem ao plug-in, 4D está simplesmente presente para receber/enviar eventos para o processo.

### Nota importante

Um plug-in pode ser muito simples, com apenas uma rotina executando uma tarefa muito pequena, ou pode ser muito complexo, envolvendo centenas de rotinas e áreas. Não há praticamente nenhum limite para o que um plug-in pode fazer, no entanto cada desenvolvedor de plug-in deve lembrar-se que um plug-in é uma peça de código de "amostra". É o plug-in que funciona dentro do 4D, e não o contrário. Como peça de código, é o anfitrião do 4D; não é uma aplicação isolada. Partilha o tempo e a memória da CPU com 4D e outros plug-ins, portanto, deve ser um código bem educado, utilizando apenas o que é necessário para rodar. Por exemplo, nos loops longos, um plug-in deve chamar a `PA_Yield()` para dar tempo ao planificador 4D, a menos que sua tarefa seja crítica tanto para ele quanto para o banco de dados.

## Como criar um plug-in?

4D fornece no GitHub um SDK plug-in de código aberto [****](https://github.com/4d/4D-Plugin-SDK), contendo o API de Plugin 4D e o Assistente de Plugin 4D:

- o [**4D Plugin API**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), escrito em C, acrescenta mais de 400 funções que o ajudam a criar facilmente os seus próprios plug-ins para adicionar novas funcionalidades à sua aplicação 4D. As funções API Plug-in 4D gerem todas as interacções entre a aplicação 4D e o seu plug-in.
- O [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) é uma ferramenta essencial que simplifica a tarefa de desenvolvimento de plug-ins 4D. Escreve o código 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu próprio código.

## Como instalar um plug-in?

Instala-se plug-ins no ambiente 4D copiando os seus arquivos para a pasta apropriada.

As pastas "PluginName.bundle" contêm tanto versões Windows como macOS de plug-ins 4D. A sua arquitetura interna específica permite ao Servidor 4D carregar a versão apropriada de acordo com a plataforma onde a máquina cliente será executada. Para instalar um plug-in em seu ambiente, só precisa colocar a pasta "PluginName.bundle" ou o pacote correspondente na pasta **PlugIns** desejada.

Pode colocar a pasta PlugIns em dois lugares diferentes:

- A nível da aplicação executável 4D, ou seja
  - Em Windows: ao lado do arquivo .exe
  - Em macOS: no primeiro nível da pasta Conteúdos dentro do pacote de aplicação.   
    Neste caso, os plug-ins estão disponíveis em todas as bases de dados abertas por esta aplicação.
- No mesmo nível que o arquivo de estrutura do banco de dados. Nesse caso, plug-ins só estão disponíveis no banco de dados em particular.

A escolha da localização depende de como se pretende utilizar o plug-in.

Se o mesmo plug-in for colocado em ambos os locais, 4D só carregará o localizado ao lado da estrutura. Numa aplicação que é compilada e fundida utilizando o Volume Desktop 4D, se existirem várias instâncias do mesmo plug-in presente, isto impedirá a aplicação de abrir.

Os plug-ins são carregados por 4D quando a aplicação for lançada, pelo que terá de abandonar a sua aplicação 4D antes de os instalar. Os plug-ins são carregados por 4D quando se lança a aplicação, pelo que terá que sair de sua aplicação 4D antes de instalar. Se qualquer plug-in necessitar de uma licença específica para utilização, será carregado mas não estará disponível para utilização.
