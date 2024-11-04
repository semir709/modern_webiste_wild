const Contact = () => {
  return (
    <div data-scroll-section>
      <main className="px-[5%] pt-48">
        <section>
          <div className="relative h-[500px] w-full sm:flex">
            <div className="right-0 top-0 h-1/2 w-1/2 bg-blue-300 sm:absolute">
              2
            </div>
            <div className="w-1/2 bg-green-300">1</div>
            <div className="mt-auto h-1/2 w-1/2 bg-yellow-300">3</div>
          </div>
        </section>
        <section>2</section>
        <section>3</section>
      </main>
    </div>
  );
};

export default Contact;
