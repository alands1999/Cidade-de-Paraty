# Aplicativo de Turismo - Paraty

Este é um aplicativo desenvolvido em **React Native** que apresenta informações sobre restaurantes, passeios e hospedagens na cidade de **Paraty**. O projeto foi criado utilizando **react-navigation/stack** para gerenciar a navegação entre as telas.

## Tecnologias Utilizadas

- **React Native**
- **React Navigation (Stack Navigator)**

## Funcionalidades

- Apresenta opções de hospedagem, incluindo localização e preço médio.
- Exibe informações sobre restaurantes da região.
- Mostra sugestões de passeios turísticos.
- Navegação entre as telas de forma intuitiva.

## Estrutura do Projeto

```
/
|-- assets/               # Imagens utilizadas no projeto
|-- Componentes/          # Telas do aplicativo
|   |-- TelaInicial.js
|   |-- TelaRestaurantes.js
|   |-- TelaHospedagem.js
|   |-- TelaPasseios.js
|-- estilo/               # Arquivos de estilos
|-- App.js                # Arquivo principal do aplicativo
|-- package.json          # Dependências do projeto
```

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd nome-do-repositorio
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Execute o projeto:
   ```sh
   npx expo start
   ```
   ou, caso esteja utilizando React Native CLI:
   ```sh
   npx react-native run-android  # Para Android
   npx react-native run-ios      # Para iOS
   ```

## Exemplo de Código

Aqui está um exemplo de código de uma das telas do aplicativo:

```jsx
import { View, Text, Image } from "react-native";
import estilos from "./estilo";
import Img01 from '../../assets/hospedagens/hospedagem01.png';
import Img02 from '../../assets/hospedagens/hospedagem02.png';
import Img03 from '../../assets/hospedagens/hospedagem03.png';

export default function TelaHospedagem(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Pousadas e Hotéis em Paraty</Text>
            <Text style={estilos.texto}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>

            <View style={estilos.card}>
                <Image source={Img01} style={estilos.img} />
                <Text style={estilos.tituloCard}>Pousada Missanga</Text>
                <Text>Valor médio: R$ 350,00</Text>
                <Text>Localização: Próx. à Av. Roberto Silveira</Text>
            </View>
        </View>
    )
}
```

Este projeto foi criado com o objetivo de aplicar conceitos sobre rotas estudados na DevMedia. 🚀

## Imagens: 

![Tela Inicial](https://github.com/user-attachments/assets/5f02dc13-1686-4000-bb7a-064c693981c1)
![Restaurantes](https://github.com/user-attachments/assets/b54232d4-245f-432b-a8d0-e7fc243ce0c9)
![Passeios](https://github.com/user-attachments/assets/12f2283a-4e82-4714-bf62-b819d1175e29)
![Hospedagens](https://github.com/user-attachments/assets/86a4830c-681b-45f3-b0e3-45b1ab53a317)

