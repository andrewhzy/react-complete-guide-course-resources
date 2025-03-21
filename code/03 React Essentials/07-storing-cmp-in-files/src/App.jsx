import CORE_CONCEPTS_ from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS_[0].title}
              description={CORE_CONCEPTS_[0].description}
              image={CORE_CONCEPTS_[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS_[1]} />
            <CoreConcept {...CORE_CONCEPTS_[2]} />
            <CoreConcept {...CORE_CONCEPTS_[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
