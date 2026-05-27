import { useRef, useState } from "react";
import { useToast } from "../../hooks/useToast.ts";
import { AnimatedButton } from "../../components/AnimatedButton";
import { FlashcardCreatorContainer } from "./styles";

export const FlashcardCreator = () => {
  const { setToastData } = useToast();

  const createFlashcard = () => {
    setToastData({
      message: "Em breve um novo projeto!",
      type: "info",
    });
  };
  return (
    <FlashcardCreatorContainer>
      <h1>Flashcard Creator</h1>
      <AnimatedButton text="Criar" onClick={createFlashcard} />
    </FlashcardCreatorContainer>
  );
};
