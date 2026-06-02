import { useState } from "react";
import { useToast } from "../../hooks/useToast.ts";
import { Bouncingtext } from "../../components/BouncingText/index.tsx";
import { Export, File, PaperPlaneRight, Trash } from "@phosphor-icons/react";
import {
  generateFlashcardsByFile,
  generateFlashcardsByPhrase,
} from "../../services/flashcardsService.ts";
import {
  FlashcardCreatorPage,
  FlashcardCreatorContainer,
  FlashCardCreatorLogo,
  FlashCardCreatorInputWrapper,
  FlashCardCreatorTextInput,
  FlashCardCreatorSendButton,
  FlashCardCreatorInput,
  FlashCardCreatorInputLabel,
  FlashCardCreatorCardsList,
  FlashCardCreatorCard,
  FlashCardCreatorExportButton,
  FlashCardCreatorClearButton,
} from "./styles";

export const FlashcardCreator = () => {
  const { setToastData } = useToast();

  const [cards, setCards] = useState<AnkiCard[]>([]);
  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(false);

  const isDisabled = cards.length > 0 || loading;

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const reader = new FileReader();

    reader.onload = async (e) => {
      const text = e.target?.result as string;
      // Separa o texto por quebra de linha e remove linhas vazias
      const sentences = text
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s !== "");

      try {
        setCards(await generateFlashcardsByFile(sentences));
        setToastData({
          message: "Cards gerados com sucesso!",
          type: "success",
        });
      } catch (error) {
        setToastData({
          message: "Falha ao gerar os cards.",
          type: "error",
        });
        console.error("Erro na comunicação com a API:", error);
      } finally {
        setLoading(false);
      }
    };

    reader.readAsText(file);
  };

  const handlePhraseSubmit = async () => {
    if (phrase.trim() === "") return;

    setLoading(true);

    try {
      setCards([await generateFlashcardsByPhrase(phrase)]);
      setToastData({
        message: "Card gerado com sucesso!",
        type: "success",
      });
    } catch (error) {
      setToastData({
        message: "Falha ao gerar o card.",
        type: "error",
      });
      console.error("Erro na comunicação com a API:", error);
    } finally {
      setLoading(false);
    }
  };

  const exportForAnki = () => {
    if (cards.length === 0) return;

    // O Anki aceita facilmente arquivos separados por tabulação (.txt ou .tsv)
    // Formato: Frente [TAB] Leitura 2x<br /> Notas 2x<br /> Verso
    const tsvContent = cards
      .map(
        (c) =>
          `${c.front}\t${c.reading}<br /><br />${c.notes.replace(/\n/g, "<br />")}<br /><br />${c.back}`,
      )
      .join("\n");

    const blob = new Blob([tsvContent], {
      type: "text/tab-separated-values;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `anki_deck_${Date.now()}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setToastData({
      message: "Deck exportado com sucesso!",
      type: "info",
    });
  };

  const clear = () => {
    setCards([]);
    setPhrase("");
  };

  return (
    <FlashcardCreatorPage>
      <FlashcardCreatorContainer>
        <FlashCardCreatorLogo
          src="/img/nihongo-logo.png"
          alt="Flashcard Creator"
        />
        <FlashCardCreatorInputWrapper>
          <FlashCardCreatorTextInput
            type="text"
            placeholder="Cole a frase/palavra aqui..."
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            disabled={isDisabled}
          />
          <FlashCardCreatorSendButton
            onClick={handlePhraseSubmit}
            disabled={isDisabled}
          >
            <span>
              <PaperPlaneRight size={20} />
            </span>
          </FlashCardCreatorSendButton>
          <span style={{ marginInline: "8px" }}>ou</span>
          <FlashCardCreatorInputLabel htmlFor="file-upload">
            <span>
              <File size={20} />
            </span>
            <FlashCardCreatorInput
              id="file-upload"
              type="file"
              accept=".txt"
              onChange={handleFileUpload}
              disabled={isDisabled}
            />
          </FlashCardCreatorInputLabel>
        </FlashCardCreatorInputWrapper>
        {loading && <Bouncingtext text="Gerando..." size={1} />}
        {cards.length > 0 && (
          <FlashCardCreatorCardsList>
            {cards.map((card, index) => (
              <FlashCardCreatorCard key={`${index}-${card.front}`}>
                <p>
                  <strong>Frente:</strong> {card.front}
                </p>
                <p>
                  <strong>Leitura:</strong> {card.reading}
                </p>
                <p>
                  <strong>Verso:</strong> {card.back}
                </p>
                <p>
                  <strong>Notas:</strong> {card.notes}
                </p>
              </FlashCardCreatorCard>
            ))}
            <FlashCardCreatorExportButton onClick={exportForAnki}>
              <Export size={20} />
            </FlashCardCreatorExportButton>
            <FlashCardCreatorClearButton onClick={() => clear()}>
              <Trash size={20} />
            </FlashCardCreatorClearButton>
          </FlashCardCreatorCardsList>
        )}
      </FlashcardCreatorContainer>
    </FlashcardCreatorPage>
  );
};
