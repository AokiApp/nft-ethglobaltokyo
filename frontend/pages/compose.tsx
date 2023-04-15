// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/aokiapp_nft/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/aokiapp_nft/PlasmicGlobalVariant__Screen";
import { PlasmicCompose } from "../components/plasmic/aokiapp_nft/PlasmicCompose";
import { useRouter } from "next/router";

const strengthLength = 16;

function Compose() {
  const [strength, setStrength] = React.useState(
    Array(strengthLength)
      .fill(0)
      .map(() => 0)
  );

  const sliderContent = Array(strengthLength)
    .fill(0)
    .map((_, i) => {
      const nm = `slider${i}`;
      return (
        <div key={nm}>
          <input
            type="range"
            min="0"
            max="127"
            value={strength[i]}
            onChange={(e) => {
              const newStrength = [...strength];
              newStrength[i] = parseInt(e.target.value);
              setStrength(newStrength);
            }}
          />
        </div>
      );
    });
  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicCompose
          slider={sliderContent}
          pad={{
            onMouseMove: (e: React.PointerEvent<HTMLDivElement>) => {
              const x = e.nativeEvent.offsetX;
              const y = e.nativeEvent.offsetY;
              const w = e.target.clientWidth;
              const h = e.target.clientHeight;
              const i = Math.floor((x / w) * 127);
              const j = Math.floor((y / h) * 127);
              const newStrength = [...strength];
              newStrength[0] = i;
              newStrength[1] = j;
              setStrength(newStrength);
            },
          }}
        />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  );
}

export default Compose;