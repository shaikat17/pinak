

const SubscriptionSection = () => {
  return (
    <section className="w-full mx-auto py-16 flex text-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <p className="my-4 text-lg text-gray-400 font-semibold uppercase">
        Subscribe to our Newsletter
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide">Get Update With Us</h2>
        <div className="mt-8">
          <form className="flex gap-0 flex-col sm:flex-row shadow-md">
            <input
              type="email"
              className="px-10 py-5 m-0 w-full sm:w-96 placeholder:text-lg"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="p-2 px-4 bg-[#3646A6] text-white font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
