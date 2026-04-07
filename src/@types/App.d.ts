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
  /** O ID do bloco de anúncio (ex: "1234567890") */
  dataAdSlot: string;
  /** O seu ID de editor (ex: "ca-pub-XXXXXXXXXXXXXXXX") */
  dataAdClient: string;
  /** Formato do anúncio. Padrão é 'auto' */
  dataAdFormat?: string;
  /** Se deve ser responsivo em largura total. Padrão é true */
  fullWidthResponsive?: boolean;
  /** Estilos customizados para o container */
  style?: React.CSSProperties;
}
