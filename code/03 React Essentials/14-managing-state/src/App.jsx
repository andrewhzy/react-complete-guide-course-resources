import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');
  const [selectedTopic1, setSelectedTopic1] = useState('Please click a button');
  
  console.log('APP COMPONENT EXECUTING');

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => setSelectedTopic('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => setSelectedTopic('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => setSelectedTopic('props')}>Props</TabButton>
            <TabButton onSelect={() => setSelectedTopic('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
        <section id="examples-1">
          <h2>Examples-1</h2>
          <menu>
            <TabButton onSelect={() => setSelectedTopic1('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => setSelectedTopic1('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => setSelectedTopic1('props')}>Props</TabButton>
            <TabButton onSelect={() => setSelectedTopic1('state')}>State</TabButton>
          </menu>
          {selectedTopic1}
        </section>
      </main>
    </div>
  );
}

export default App;
