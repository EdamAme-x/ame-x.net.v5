import { BottomLuster } from "@/components/ui/bottom-luster";
import { MagicCard } from "@/components/ui/magic-card";
import { RichText } from "@/components/ui/rich-text";
import SparklesText from "@/components/ui/sparkles-text";

export default function Home() {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="w-4/5 max-w-[400px] h-[200px]">
        <BottomLuster className="rounded-md" effect={false}>
          <MagicCard gradientColor="#070707" gradientSize={150} gradientOpacity={80} className="w-full h-full grid place-items-center border border-white/20 bg-[#010101] rounded-md">
            <h1 className="text-xl md:text-2xl font-bold pointer-events-none">
              <RichText>
                Currently, being{" "}
                <SparklesText className="text-4xl md:text-6xl" colors={{
                  first: "#ffffffcc",
                  second: "rgb(192 132 252)"
                }}>
                  <RichText className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animation-[moving_5s_linear_infinite]">Redesigned</RichText>
                </SparklesText>
              </RichText>
            </h1>
          </MagicCard>
        </BottomLuster>
      </div>
    </div>
  );
}
