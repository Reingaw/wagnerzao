import { useEffect, useRef } from "react";

export const AdSense: React.FC<AdSenseProps> = ({
  dataAdSlot,
  dataAdClient,
  style,
}) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (
          window.adsbygoogle &&
          adRef.current &&
          !adRef.current.hasAttribute("data-adsbygoogle-status")
        ) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          console.log(`AdSense: Slot ${dataAdSlot} inicializado.`);
        }
      } catch (error) {
        console.error("AdSense Error: ", error);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [dataAdSlot]);

  return (
    <div style={{ textAlign: "center", overflow: "hidden", minWidth: "250px" }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style || { display: "block" }}
        data-ad-client={dataAdClient}
        data-ad-slot={dataAdSlot}
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </div>
  );
};
