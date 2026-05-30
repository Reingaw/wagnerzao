export const professional = (language: string) => [
  {
    id: 1,
    title: language === "pt-BR" ? "Desenvolvedor II" : "Developer II",
    company: "Cogna Educação",
    period: `2022 - ${language === "pt-BR" ? "Presente" : "Present"}`,
  },
  {
    id: 2,
    title:
      language === "pt-BR" ? "Programador de Internet" : "Internet Developer",
    company: "Instituto de Crescimento Infantojuvenil",
    period: "2019 - 2021",
  },
  {
    id: 3,
    title:
      language === "pt-BR" ? "Técnico de Computador" : "Computer Technician",
    company: "ZAO Informática",
    period: "2006 - 2019",
  },
];
export const academic = (language: string) => [
  {
    id: 1,
    title:
      language === "pt-BR"
        ? "Arquitetura de Software"
        : "Software Architecture",
    company: `Anhanguera - ${language === "pt-BR" ? "Pós-Graduação" : "Postgraduate"}`,
    period: "2023 - 2024",
  },
  {
    id: 2,
    title: language === "pt-BR" ? "Ciência de Dados" : "Data Science",
    company: `Anhanguera - ${language === "pt-BR" ? "Pós-Graduação" : "Postgraduate"}`,
    period: "2022 - 2024",
  },
  {
    id: 3,
    title:
      language === "pt-BR"
        ? "Análise e Desenvolvimento de Sistemas"
        : "Analysis and Development of Systems",
    company: `Unigranrio - ${language === "pt-BR" ? "Graduação" : "Associate's Degree"}`,
    period: "2019 - 2022",
  },
  {
    id: 4,
    title: "Marketing",
    company: `Estácio de Sá - ${language === "pt-BR" ? "Graduação" : "Associate's Degree"}`,
    period: "2015 - 2018",
  },
];
