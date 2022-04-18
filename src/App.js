function App() {
  return (
    <article className="w-96 m-auto md:container bg-gray-200 md:bg-gray-900 rounded-md md:rounded:lg shadow border p-4 mt-8 md:p-8 md:m-10">
      <h1 className="text-3xl text-gray-700 md:text-gray-50 font-bold mb-5">
        How To Use Tailwind CSS With React
      </h1>
      <h2 className="text-gray-500 md:text-gray-200 text-lg mb-16">
        Setting Up Tailwind CSS In Your React Project With Ease
      </h2>
      <footer className="text-gray-500 md:text-gray-200">
        <hr />
        <p>
          Read{" "}
          <a
            className="text-blue-700 md:text-blue-300 underline"
            href="https://medium.com/codingthesmartway-com-blog/how-to-use-tailwind-css-with-react-9dd78bbdc0e0"
          >
            this tutorial
          </a>
        </p>
        <p>
          From{" "}
          <a
            className="text-blue-700 md:text-blue-300 underline"
            href="https://medium.com/@s_eschweiler"
          >
            Sebastian Eschweiler
          </a>
        </p>
      </footer>
    </article>
  );
}
export default App;
