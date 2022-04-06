import JSX from './chapters/02_jsx_tsx/JSX';
import ExampleChapter from './chapters/99_example/ExampleChapter';
import RevealWrapper from './components/reveal/RevealWrapper';
import React from 'react';
import IntroChapter from './chapters/00_Intro/IntroChapter';
import ContextChapter from './chapters/05_context/ContextChapter';
import FormsChapter from './chapters/07_forms/FormsChapter';
import ConditionalRendering from './chapters/03_conditional_rendering/ConditionalRendering';
import ComponentsProps from './chapters/04_components_props/ComponentsProps';

const App: React.FC = () => {
  return (
    <RevealWrapper>
      <IntroChapter />
      {/* <ExampleChapter /> */}
      {/* more Chapters to come here... */}
      <JSX />
      <ContextChapter />
      <FormsChapter />
      <ConditionalRendering />
      <ComponentsProps />
    </RevealWrapper>
  );
};

export default App;
