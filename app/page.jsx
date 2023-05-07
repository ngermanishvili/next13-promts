import Feed from "@components/Feed";

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">AI-Powered Promts</span>
        </h1>
        <p className="desc text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          voluptatum, consectetur in perspiciatis sed eligendi ut qui repellat
          dolores architecto?
        </p>

        <Feed />
      </section>
    </div>
  );
};

export default Home;
