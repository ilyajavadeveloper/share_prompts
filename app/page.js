import Feed from "@/app/components/Feed";

const Home = () => {
    return (
        <section className="w-full flex flex-col justify-start items-center min-h-screen text-center pt-20">
            <h1 className="text-5xl font-extrabold leading-tight">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          AI-Powered Prompts
        </span>
            </h1>

            <p className="text-center text-gray-600 text-lg mt-5 max-w-2xl">
                Share Prompts is an open-source AI prompting tool for the modern world to
                discover, create, and share creative prompts.
            </p>

            <Feed />
        </section>
    )
}

export default Home;
