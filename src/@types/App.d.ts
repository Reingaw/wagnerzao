type ChildrenType = { children: React.ReactNode };
type ReduceProvidersProps = ComponentType<ChildrenType>[];

type ToastContextProps = {
  toastData: ToastProps;
  setToastData: React.Dispatch<React.SetStateAction<ToastProps>>;
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

type ToastProps = {
  message: string;
  type: "success" | "error" | "info";
};

interface Window {
  adsbygoogle: any[];
}

interface AdSenseProps {
  dataAdSlot: string;
  dataAdClient: string;
  dataAdFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

interface AnkiCard {
  front: string;
  back: string;
  reading: string;
  notes: string;
}

type LanguageContextProps = {
  language: LanguageType;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
};

type LanguageType = "pt-BR" | "en-US";

interface requestParams {
  prefix: string;
  endpoint: string;
  params: Object;
}
