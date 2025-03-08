import herbalife_chocolate from "./public/assets/herbalife_chocolate.png";
import herbalife_morango from "./public/assets/herbalife_morango.png";
import herbalife_coco from "./public/assets/herbalife_coco.png";
import herbalife_doce_de_leite from "./public/assets/herbalife_doce_de_leite.png";
import herbalife_pacoca from "./public/assets/herbalife_pacoca.png";
import herbalife_banana from "./public/assets/herbalife_banana.png";
import herbalife_abacaxi from "./public/assets/herbalife_abacaxi.png";
import herbalife_baunilha from "./public/assets/herbalife_baunilha.png";
import herbalife_cookies from "./public/assets/herbalife_cookies.png";
import herbalife_condicionador from "./public/assets/herbalife_condicionador.png";
import herbalife_desodorante from "./public/assets/herbalife_desodorante.png";
import herbalife_hidradante from "./public/assets/herbalife_hidratante.png";
import herbalife_sabonete from "./public/assets/herbalife_sabonete.png";
import herbalife_serum from "./public/assets/herbalife_serum.png";
import herbalife_shampoo from "./public/assets/herbalife_shampoo.png";
import herbalife_liftoff from "./public/assets/herbalife_liftoff.png";
import herbalife_multi from "./public/assets/herbalife_multi.png";
import herbalife_omega3 from "./public/assets/herbalife_omega3.png";
import herbalife_concentrate from "./public/assets/herbalife_concentrate.png";
import herbalife_onactive from "./public/assets/herbalife_onactive.png";
import herbalife_glutamina from "./public/assets/herbalife_glutamina.png";

const products = [
  {
    id: 1,
    name: "Shake Morango",
    image: herbalife_morango,
    video: "https://www.youtube.com/embed/UhqzOE_rYO8?si=ofFGAdwhgy7AKa8C",
    description:
      "Delicie-se com o sabor refrescante do morango em cada gole. Um shake delicioso e perfeito para começar o dia ou recarregar suas energias!",
  },
  {
    id: 2,
    name: "Shake Chocolate",
    image: herbalife_chocolate,
    video: "https://www.youtube.com/embed/Qur98N6xG4I?si=3vEj2TqnPVHl9CFg",
    description:
      "Sabor intenso de chocolate, cremoso e irresistível. Uma opção rica e reconfortante para quem ama o gosto do chocolate em seu shake.",
  },
  {
    id: 3,
    name: "Shake Coco",
    image: herbalife_coco,
    video: "https://www.youtube.com/embed/55PW8emjq5I?si=4BNMwWQb5LQcpXgA",
    description:
      "O frescor e a suavidade do coco em um shake delicioso! Ideal para quem procura uma experiência tropical e cheia de sabor.",
  },
  {
    id: 4,
    name: "Shake Doce de Leite",
    image: herbalife_doce_de_leite,
    video: "https://www.youtube.com/embed/hhKyXVGzfzU?si=S9_HYNY0wFrr6tHa",
    description:
      "O sabor aconchegante do doce de leite transformado em um shake cremoso e doce, perfeito para quem gosta de um toque de nostalgia em seu lanche.",
  },
  {
    id: 5,
    name: "Shake Banana",
    image: herbalife_banana,
    video: "https://www.youtube.com/embed/kfA4sO2DsRI?si=a1tuti81v_dSQsBt",
    description:
      "Uma mistura cremosa de banana, rica em sabor e energia. Perfeito para quem busca um shake nutritivo e delicioso a qualquer hora do dia.",
  },
  {
    id: 6,
    name: "Shake Paçoca",
    image: herbalife_pacoca,
    video: "https://www.youtube.com/embed/1HkOYbHuU3Y?si=AvUC_YY19j6Sb0EJ",
    description:
      "O sabor da tradicional paçoca em um shake cremoso e delicioso, com aquele gostinho de festa junina que vai te conquistar logo no primeiro gole.",
  },
  {
    id: 7,
    name: "Shake Abacaxi",
    image: herbalife_abacaxi,
    video: "https://www.youtube.com/embed/HsftCon3Sk0?si=fq3PJQrKPKFbE-x5",
    description:
      "Delicie-se com o sabor tropical do nosso Shake de Abacaxi! Feito com abacaxi fresco e um toque de cremosidade, este shake é a combinação perfeita de doce e refrescante. Ideal para quem busca uma opção leve e cheia de sabor, é como uma brisa de verão em cada gole.",
  },
  {
    id: 8,
    name: "Shake Baunilha",
    image: herbalife_baunilha,
    video: "https://www.youtube.com/embed/KvSC09XB4AM?si=FG74IzBLn3Nk9T4H",
    description:
      "Clássico e irresistível, o Shake de Baunilha é a escolha perfeita para os amantes de sabores tradicionais. Com um aroma suave e um sabor cremoso, este shake é feito com baunilha de alta qualidade.",
  },
  {
    id: 9,
    name: "Shake Cookies and Cream",
    image: herbalife_cookies,
    video: "https://www.youtube.com/embed/FKQV0zCg0fU?si=7-qcj8r-cF5Nj7_D",
    description:
      "Para os fãs de combinações indulgentes, o Shake Cookies and Cream é a escolha certa! Feito com pedaços crocantes de biscoitos e um creme suave, este shake oferece uma experiência única de texturas e sabores. Cada gole é uma explosão de doçura e crocância, perfeito para quem quer se mimar com algo especial.",
  },
  {
    id: 10,
    name: "Liftoff®",
    image: herbalife_liftoff,
    video: "https://www.youtube.com/embed/6l74JlfEu0o?si=ejVU1zDHWdCyay-m",
    description:
      "O Liftoff® é um suplemento energético em forma de tabletes efervescentes, desenvolvido para proporcionar um impulso de energia rápida e duradoura. Com uma combinação de cafeína, vitaminas do complexo B e taurina, é ideal para quem precisa de um boost de energia mental e física ao longo do dia.",
  },
  {
    id: 11,
    name: "Multivitaminas & Minerais",
    image: herbalife_multi,
    video: "https://www.youtube.com/embed/XLBdCnBIfjs?si=TXC8cMN4Ps3rmq8l",
    description:
      "As Multivitaminas & Minerais da Herbalife são formuladas para complementar a sua dieta diária, fornecendo nutrientes essenciais que apoiam o funcionamento do corpo e a manutenção da saúde geral. Com uma mistura equilibrada de vitaminas e minerais, este suplemento ajuda a preencher lacunas nutricionais e a promover o bem-estar.",
  },
  {
    id: 12,
    name: "Herbalifeline Ômega 3",
    image: herbalife_omega3,
    video: "https://www.youtube.com/embed/TlZsvrjtShA?si=F9xGtE4Vf6abc3EL",
    description:
      "O Herbalifeline Ômega 3 é um suplemento rico em ácidos graxos essenciais, como EPA e DHA, que apoiam a saúde cardiovascular, cerebral e articular. Formulado com óleos de peixe de alta qualidade, é uma excelente opção para quem busca manter o equilíbrio nutricional e promover a saúde geral.",
  },
  {
    id: 13,
    name: "Fiber Concentrate",
    image: herbalife_concentrate,
    video: "https://www.youtube.com/embed/kzuIBWO9ngg?si=WHUM4Kw_eYtfPLSk",
    description:
      "O Fiber Concentrate é um suplemento rico em fibras solúveis, que auxilia na digestão e promove a sensação de saciedade. Com uma fórmula fácil de misturar, é ideal para quem deseja melhorar o trânsito intestinal e manter uma dieta equilibrada e saudável.",
  },
  {
    id: 14,
    name: "OnActive Drink",
    image: herbalife_onactive,
    video: "https://www.youtube.com/embed/TXo_htzadKs?si=eyuFrsMs3V5o2HH9",
    description:
      "O OnActive Drink é uma bebida funcional enriquecida com vitamina C e outros nutrientes essenciais, desenvolvida para fortalecer o sistema imunológico e promover a saúde geral. Com um sabor refrescante, é perfeito para quem busca uma forma prática e deliciosa de cuidar da imunidade.",
  },
  {
    id: 15,
    name: "Herbalife24® Glutamina",
    image: herbalife_glutamina,
    video: "https://www.youtube.com/embed/SfRcs0jU98k?si=OT8LkICBaB7k3_v3",
    description:
      "A Herbalife24® Glutamina é um suplemento formulado para atletas e praticantes de atividades físicas, ajudando na recuperação muscular e no suporte ao sistema imunológico. Com glutamina de alta qualidade, este produto é ideal para quem busca melhorar o desempenho e a recuperação pós-treino.",
  },
  {
    id: 16,
    name: "Soft Green Desodorante Roll-on",
    image: herbalife_desodorante,
    video: "https://www.youtube.com/embed/IntBQw59Ob8?si=ilSfZTP9Wr8XmSkM",
    description:
      "O Soft Green Desodorante Roll-on oferece proteção duradoura contra odores, mantendo você fresco e confiante ao longo do dia. Com uma fórmula suave e sem álcool, é ideal para peles sensíveis, proporcionando uma sensação de leveza e conforto.",
  },
  {
    id: 17,
    name: "Herbal Aloe Condicionador Fortificante",
    image: herbalife_condicionador,
    video: "https://www.youtube.com/embed/z5TPi1yr-rw?si=uPIW1RnSIrdBSAhS",
    description:
      "O Herbal Aloe Condicionador Fortificante é enriquecido com Aloe Vera e ingredientes naturais que nutrem e revitalizam os cabelos, deixando-os macios, brilhantes e fáceis de pentear. Perfeito para cabelos danificados que precisam de cuidados intensivos.",
  },
  {
    id: 18,
    name: "Herbal Aloe Shampoo Fortificante",
    image: herbalife_shampoo,
    video: "https://www.youtube.com/embed/z5TPi1yr-rw?si=uPIW1RnSIrdBSAhS",
    description:
      "O Herbal Aloe Shampoo Fortificante limpa suavemente o couro cabeludo e os fios, removendo impurezas sem ressecar. Com Aloe Vera e extratos botânicos, fortalece os cabelos, promovendo crescimento saudável e uma aparência vibrante.",
  },
  {
    id: 19,
    name: "Soft Green Hidratante Corporal",
    image: herbalife_hidradante,
    video: "https://www.youtube.com/embed/eDguTDUmSkQ?si=rqE2RqWaumpCIXai",
    description:
      "O Soft Green Hidratante Corporal é formulado para nutrir e hidratar profundamente a pele, deixando-a macia e suave. Com uma textura leve e de rápida absorção, é perfeito para uso diário, proporcionando uma sensação refrescante e revitalizante.",
  },
  {
    id: 20,
    name: "Soft Green Sabonete Líquido para as Mãos",
    image: herbalife_sabonete,
    video: "https://www.youtube.com/embed/AbntdGjbgvQ?si=NxCi5aMJwzvKZERN",
    description:
      "O Soft Green Sabonete Líquido para as Mãos limpa e cuida da sua pele com uma fórmula suave e hidratante. Ideal para uso frequente, ele remove impurezas enquanto mantém a maciez e a hidratação natural das mãos.",
  },
  {
    id: 21,
    name: "Herbalife SKIN® Sérum Facial Redutor de Linhas",
    image: herbalife_serum,
    video: "https://www.youtube.com/embed/Sf1LEXZ4F18?si=OWUjtTeaESM6oUEj",
    description:
      "O Herbalife SKIN® Sérum Facial Redutor de Linhas é um tratamento avançado que ajuda a reduzir a aparência de linhas finas e rugas. Com uma fórmula rica em antioxidantes e nutrientes, ele revitaliza a pele, promovendo uma aparência mais jovem e radiante.",
  },
];

export default products;
