
import './App.css';
import keyConceptsImage from './assets/images/hand.png';
import stateImage from './assets/images/univers.png';
import componentsImage from './assets/images/check.png';
import eventsImage from './assets/images/food4.jpeg';
import Concept from "./componenets/Concept/Concept"; 
import Header from "./componenets/Header/Header";

const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];
function App() {
  return (
    <div className="App">
    <Header />
    <ul id="concepts">
     <Concept
        image={concepts[0].image}
        title={concepts[0].title}
        description={concepts[0].description}/>
       <Concept
        image={concepts[1].image}
        title={concepts[1].title}
        description={concepts[1].description}/>
         <Concept
        image={concepts[2].image}
        title={concepts[2].title}
        description={concepts[2].description}/>
    </ul>
      <ul id="concepts">
        <li className="concept">
          <img className="img"src={stateImage} alt="TODO: TITLE" />
          <h2>TODO: TITLE</h2>
          <p>TODO: DESCRIPTION</p>
          <li className="concept">
          <img className="img"src={eventsImage} alt="TODO: TITLE" />
          <h2>TODO: TITLE</h2>
          <p>TODO: DESCRIPTION</p>
        </li>
        </li>
      </ul>
    </div>
  );
}

export default App;
