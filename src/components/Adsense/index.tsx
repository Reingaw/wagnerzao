import { useEffect } from "react";

export const AdSense: React.FC<AdSenseProps> = ({
  dataAdSlot,
  dataAdClient,
  dataAdFormat = "auto",
  fullWidthResponsive = true,
  style = { display: "block" },
}) => {
  useEffect(() => {
    try {
      // O push({}) inicializa o anúncio no slot disponível
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className="ad-container" style={{ overflow: "hidden" }}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={dataAdClient}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
};
