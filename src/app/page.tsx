import { Header } from "@/components/a_Header";
import { Hero } from "@/components/b_Hero";
import { MiniAbout } from "@/components/c_MiniAbout";
import { MainSlider } from "@/components/Comps/mainSlider";
import { Projects } from "@/components/d_Projects";
import { ExperienceUs } from "@/components/e_ExperienceUs";
import { HowWeWork } from "@/components/f_HowWeWork";
import { GetInTouch } from "@/components/g_GetInTouch";
import { OurServices } from "@/components/h_OurServices";
import { OurClients } from "@/components/i_OurClients";
import { GetInTouchFooter } from "@/components/j_getInTouchFooter";
import { Footer } from "@/components/k_footer";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  console.log("abc");
  return (
    <main className="flex border overflow-hidden min-h-screen max-w-screen flex-col gap-8 items-center ">
      {/* Header area */}
      <div className=" w-full">
        <Header />
        <Hero />
      </div>

      <OurServices />
      <Projects />
      <ExperienceUs />

      <GetInTouch/>
      
      {/* <MainSlider/> */}
      {/* Hello */}
      <HowWeWork />
      <OurClients />
      <GetInTouchFooter />

      {/* Footer area */}
      <div className=" w-full">
        <Separator />
        <Footer />
      </div>
    </main>
  );
}
