import Image from "next/image";
import CardFilm from "./Components/CardFilm/cardFilm";

export default function Home() {
  return (
    <main className="flex-auto">
      <CardFilm title="Robots" image=".\assets\fireship.jpg" link="https://www.youtube.com/watch?v=2hlD7dWp09M&pp=ygUIZmlyZXNoaXA%3D"/>
      <CardFilm title="Devin" image=".\assets\fireship.jpg" link="https://www.youtube.com/watch?v=AgyJv2Qelwk"/>
      <CardFilm title="Web Development" image=".\assets\fireship.jpg" link="https://www.youtube.com/shorts/aXcuz6fn8_w"/>
      <CardFilm title="Adeus Devs" image=".\assets\manodeyvin.jpg" link="https://www.youtube.com/watch?v=wQLYf8mrRDI"/>
      <CardFilm title="Tech Lead" image=".\assets\manodeyvin.jpg" link="https://www.youtube.com/watch?v=ny1as30brJA"/>
      <CardFilm title="React Dev Java" image=".\assets\manodeyvin.jpg" link="https://www.youtube.com/watch?v=sft_LFacUVY&t=1057s"/>
      <CardFilm title="Sort Algo" image=".\assets\john.jpg" link="https://www.youtube.com/shorts/xsoJsd48lZQ"/>
      <CardFilm title="Char?" image=".\assets\john.jpg" link="https://www.youtube.com/shorts/f6wEtOPtZEE"/>
      <CardFilm title="Top Techniques" image=".\assets\john.jpg" link="https://www.youtube.com/watch?v=YpS0Jh5yqIw&list=PLkeaG1zpPTHhwSRmwO81eegWXdM3Vd76_"/>
      <CardFilm title="Br fora" image=".\assets\cdftv.jpg" link="https://www.youtube.com/watch?v=i9E66xzoz5Y"/>
      <CardFilm title="Prog ruim" image=".\assets\cdftv.jpg" link="https://www.youtube.com/watch?v=JuAvhd_-klA"/>
      <CardFilm title="Segurança" image=".\assets\cdftv.jpg" link="https://www.youtube.com/watch?v=ddeyj_Zs8Jc"/>

    </main>
  );
}
