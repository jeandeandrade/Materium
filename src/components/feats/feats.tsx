import {
  Mails,
  UsersRound,
  Book,
  Cable,
  ChartNoAxesCombined,
  Cog,
  MessageCircleHeart,
  Network,
} from "lucide-react";

import { Button } from "../buttons/button";

export function Feats() {
  return (
    <div className=" mt-6 text-center justify-center">
      <div className="w-3/5 mx-auto my-2 p-6 rounded-3xl">
        <h1 className="mt-6 text-3xl font-bold  text-[#005BAA]">
          Do envio de cotações à avaliação de fornecedores — tudo o que sua
          empresa precisa para negociar matéria-prima com eficiência.
        </h1>
      </div>
      <div className="w-full flex flex-col items-center">
        
        <div className="grid grid-cols-3 gap-44 px-6 mt-30 font-bold justify-center">
          <div className="grid gap-6 items-center justify-center">
            <Mails size={70} className=" text-[#005BAA] mx-auto" />
            <h1 className="text-2xl">Cotações compartilhadas</h1>
          </div>

          <div className="grid gap-6 items-center justify-center">
            <UsersRound size={70} className=" text-[#005BAA] mx-auto" />
            <h1 className="text-2xl">Colaboração de Times</h1>
          </div>

          <div className="grid gap-6 items-center justify-center">
            <Book size={70} className=" text-[#005BAA] mx-auto" />
            <h1 className="text-2xl">Base de Conhecimento</h1>
          </div>

          
        </div>
        <div className="grid grid-cols-3 gap-44 px-6 mt-30 font-bold justify-center">
          <div className="grid gap-6 items-center justify-center">
            <ChartNoAxesCombined size={70} className=" text-[#005BAA] mx-auto" />
            <h1 className="text-2xl">Insights & Análises</h1>
          </div>
          <div className="grid gap-6 items-center justify-center">
            <Cog size={70} className=" text-[#005BAA] mx-auto" />
            <h1 className="text-2xl">Mecanismos de Automação</h1>
          </div>

          <div className="grid gap-6 items-center justify-center">
            <MessageCircleHeart size={70} className=" text-[#005BAA] mx-auto" />
            <h1 className="text-2xl">Chats em Tempo Real</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-44 px-6 mt-30 font-bold justify-center">
          <div className="grid gap-6 items-center justify-center">
              <Cable size={70} className=" text-[#005BAA] mx-auto" />
              <h1 className="text-2xl">Canais de Comunicação</h1>
          </div>
         

          <div className="grid gap-6 items-center justify-center">
            <Network size={70} className=" text-[#005BAA] mx-auto" />
            <h1 className="text-2xl">Integrações</h1>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Button />
      </div>
    </div>
  );
}
