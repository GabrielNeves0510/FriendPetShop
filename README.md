# FriendPetShop
Entrada de Dados Direta: Os dados dos petshops são fornecidos diretamente como props dos componentes Petshop, eliminando a necessidade de buscar dados externos ou gerar aleatoriamente.
Cálculo do Melhor Petshop: A lógica para determinar o melhor petshop é implementada no componente Petshop, evitando complexidade adicional de gerenciamento de estado no componente pai App.
Visualização Simples: Optou-se por uma interface simples, com campos de entrada diretos e exibição do resultado imediatamente abaixo de cada petshop.
Lógica de Preços Diretamente nos Componentes: A lógica para calcular o preço total dos banhos é mantida dentro do próprio componente Petshop, tornando-o autossuficiente e fácil de entender.

Os dados dos petshops, como distância, preços de banho para cães pequenos e grandes, e preços de final de semana, são fornecidos diretamente no código como props dos componentes Petshop.
A entrada para a data é fornecida diretamente pelo usuário através de campos de texto nos componentes Petshop.
O cálculo do melhor petshop é baseado na distância, preço total dos banhos e se é fim de semana ou não.
Não há considerações adicionais para diferentes métricas de distância (por exemplo, tempo de viagem, custo de transporte).
Os preços dos banhos não mudam com base em outras variáveis além da data (por exemplo, tamanho do cão, serviços adicionais).

Certifique-se de ter o ambiente de desenvolvimento React configurado em sua máquina. Se ainda não tiver, você pode seguir as instruções de instalação disponíveis na documentação oficial do React: Getting Started.
