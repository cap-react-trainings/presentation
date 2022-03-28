import JSX from './chapters/02_jsx_tsx/JSX';
import ExampleChapter from './chapters/99_example/ExampleChapter';
import RevealWrapper from './components/reveal/RevealWrapper';
import React from 'react';
import ConditionalRendering from './chapters/03_conditional_rendering/ConditionalRendering';
import ComponentsProps from './chapters/04_components_props/ComponentsProps';

const App: React.FC = () => {
  return (
    <RevealWrapper>
      <JSX />
      <ConditionalRendering />
      <ComponentsProps />
    </RevealWrapper>
  );
};

export default App;
