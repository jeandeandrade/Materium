import { Button } from "../buttons/button";

export function Hero() {
  return (
    <div className="mt-6 text-center items-center">
      <div className="w-4/5 mx-auto my-2 bg-sky-200 p-6 rounded-3xl">
        <h1 className="text-5xl text-zinc-700 font-semibold italic">
          Materium — o ecossistema digital da{" "}
          <span className="text-blue-400 font-bold italic underline">
            Matéria-Prima
          </span>
        </h1>
      </div>
      <div className="w-3/5 mx-auto my-2 p-6 rounded-3xl">
        <p className="mt-4 text-zinc-700 text-2xl font-normal">
          Tudo o que sua empresa precisa para comprar ou vender matéria-prima,
          em um só lugar. Conecte-se com empresas de confiança, envie e receba
          cotações em tempo real, negocie com segurança e avalie seus parceiros.
          Simplifique processos, reduza custos e impulsione sua cadeia de
          suprimentos com tecnologia de ponta.
        </p>
      </div>
      <Button />
    </div>
  );
}
