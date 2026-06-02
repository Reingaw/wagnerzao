import { createRequest } from "../libs/axios.ts";

const flashcard = createRequest("flashcards");

export const generateFlashcardsByFile = async (
  sentences: string[],
): Promise<AnkiCard[]> => {
  const cards = await flashcard
    .post("generate", { sentences })
    .then((res) => {
      if (res.data.cards.length === 0) {
        throw new Error("Nenhum card gerado.");
      }
      return res.data.cards;
    })
    .catch((err) => {
      throw new Error(err.message);
    });

  return cards;
};

export const generateFlashcardsByPhrase = async (
  sentence: string,
): Promise<AnkiCard> => {
  const card = await flashcard
    .post("generate-single", { sentence })
    .then((res) => {
      if (!res.data.card) {
        throw new Error("Nenhum card gerado.");
      }
      return res.data.card;
    })
    .catch((err) => {
      throw new Error(err.message);
    });

  return card;
};
