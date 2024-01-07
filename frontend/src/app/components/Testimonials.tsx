const Testimonials = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="max-w-5xl m-auto">
        <div className="">
          <h3 className="uppercase text-brandColor font-semibold">#inovação</h3>
          <h4 className="text-4xl text-slate-700">
            <strong>TeslaBank fora das telinhas:</strong>
            <br /> Veja o que falam sobre nosso serviço
          </h4>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <h2 className="border-l-2 border-brandColor pl-2">Nikola Tesla</h2>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum scelerisque nisl quis viverra tincidunt. ”
            </p>
          </div>
          <div>
            <h2 className="border-l-2 border-brandColor pl-2">Nikola Tesla</h2>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum scelerisque nisl quis viverra tincidunt. ”
            </p>
          </div>
          <div>
            <h2 className="border-l-2 border-brandColor pl-2">Nikola Tesla</h2>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum scelerisque nisl quis viverra tincidunt. ”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
