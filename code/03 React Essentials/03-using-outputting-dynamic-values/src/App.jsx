const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt() {
  console.log('Generating a random number...');
  const length = reactDescriptions.length;
  let randomNumber = Math.random();
  console.log('length:', length);
  console.log('randomNumber:', randomNumber);
  console.log('randomNumber * length:', randomNumber * length);
  console.log('Math.floor(randomNumber * length):', Math.floor(randomNumber * length));
  return Math.floor(randomNumber * length);
}

function Header() {
  const description = reactDescriptions[genRandomInt()];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
