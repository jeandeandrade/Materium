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
    <div className="bg-linear-to-r from-sky-100 via-orange-100 to-blue-100 mt-6 text-center justify-center">
      <div className="w-3/5 mx-auto my-2 p-6 rounded-3xl">
        <h1 className="mt-6 text-3xl font-bold text-zinc-700">
          Do envio de cotações à avaliação de fornecedores — tudo o que sua
          empresa precisa para negociar matéria-prima com eficiência.
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-44 px-6 mt-12 font-bold">
        <div className="grid gap-6 items-center justify-center">
          <Mails size={70} className="text-zinc-700 mx-auto" />
          <h1 className="text-2xl">Cotações compartilhadas</h1>
        </div>

        <div className="grid gap-6 items-center justify-center">
          <UsersRound size={70} className="text-zinc-700 mx-auto" />
          <h1 className="text-2xl">Colaboração de Times</h1>
        </div>

        <div className="grid gap-6 items-center justify-center">
          <Book size={70} className="text-zinc-700 mx-auto" />
          <h1 className="text-2xl">Base de Conhecimento</h1>
        </div>

        <div className="grid gap-6 items-center justify-center">
          <Cable size={70} className="text-zinc-700 mx-auto" />
          <h1 className="text-2xl">Canais de Comunicação</h1>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 px-6 mt-32 font-bold">
        <div className="grid gap-6 items-center justify-center">
          <ChartNoAxesCombined size={70} className="text-zinc-700 mx-auto" />
          <h1 className="text-2xl">Insights & Análises</h1>
        </div>

        <div className="grid gap-6 items-center justify-center">
          <Cog size={70} className="text-zinc-700 mx-auto" />
          <h1 className="text-2xl">Mecanismos de Automação</h1>
        </div>

        <div className="grid gap-6 items-center justify-center">
          <MessageCircleHeart size={70} className="text-zinc-700 mx-auto" />
          <h1 className="text-2xl">Chats em Tempo Real</h1>
        </div>

        <div className="grid gap-6 items-center justify-center">
          <Network size={70} className="text-zinc-700 mx-auto" />
          <h1 className="text-2xl">Integrações</h1>
        </div>
      </div>
      <div className="mt-12">
        <Button />
      </div>
    </div>
  );
}
