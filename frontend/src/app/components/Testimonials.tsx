const Testimonials = () => {

  const testimonials = [
      { id: 1, name: 'João Silva', text: 'Estou extremamente satisfeito com os serviços do TeslaBank. A facilidade de uso e a eficiência no processamento de transações são impressionantes. Além disso, a equipe de atendimento ao cliente sempre esteve pronta para resolver qualquer dúvida ou problema que eu tive. Recomendo o TeslaBank para todos que buscam uma experiência bancária moderna e eficaz.' },
      { id: 2, name: 'Maria Oliveira', text: 'Minha experiência com o TeslaBank tem sido incrível. A plataforma é intuitiva e oferece uma gama completa de serviços bancários. O aplicativo móvel é fácil de navegar, e as transações são processadas rapidamente. Além disso, a segurança das minhas informações sempre foi uma prioridade evidente. Estou muito satisfeita com o TeslaBank e continuarei usando seus serviços.' },
      { id: 3, name: 'Carlos Santos', text: 'O TeslaBank superou todas as minhas expectativas. A simplicidade na realização de transações e a inovação tecnológica empregada tornam este banco uma escolha excepcional. A equipe de suporte é ágil e competente, sempre pronta para auxiliar. Recomendo fortemente o TeslaBank para quem busca uma instituição financeira moderna e confiável.' }    
  ];

  return (
    <div className="h-screen flex items-center">
      <div className="max-w-5xl m-auto">
        <div className="">
          <h3 className="uppercase text-brandColor font-semibold">#inovação</h3>
          <h4 className="text-4xl text-slate-700 mb-16">
            <strong>TeslaBank fora das telinhas:</strong>
            <br /> Veja o que falam sobre nosso serviço
          </h4>
        </div>
        <div className="grid gap-12 grid-cols-3">
          {testimonials.map(testimonial => (
          <div key={testimonial.id}>
            <h2 className="border-l-2 border-brandColor pl-2 font-semibold text-4xl mb-4">{testimonial.name}</h2>
            <p>{testimonial.text}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
