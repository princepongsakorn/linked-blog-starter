const Footer = () => {
  return (
    <footer className="bg-neutral-50">
      <div className="container mx-auto px-5">
        <div className="py-10 text-[#242424] flex flex-col items-center">
          <div className="text-center flex flex-col justify-center items-center">
            <p>Written by Pongsakorn Pongsutiyakorn</p>
            <div className="flex flex-row">
              <a
                href={`https://github.com/matthewwong525/linked-blog-starter`}
                className="mx-1 font-bold hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pongsakorn-pongsutiyakorn-a55242198/"
                className="mx-1 font-bold hover:underline"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
