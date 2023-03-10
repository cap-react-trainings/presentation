import React from 'react';
import RoutingChapter from './chapters/06_routing/RoutingChapter';
import TableOfContents from './chapters/a_Intro/TableOfContents';
import ComparisonChapter from './chapters/comparison/ComparisonChapter';
import ComponentsChapter from './chapters/components_props/ComponentsProps';
import ConditionalRenderingChapter from './chapters/conditional_rendering/ConditionalRendering';
import ContextChapter from './chapters/context/ContextChapter';
import DatabindingHooksChapter from './chapters/databinding/DatabindingHooks';
import FormsChapter from './chapters/forms/FormsChapter';
import ReactBasicsChapter from './chapters/react_basics/ReactBasics';
import PerformanceChapter from './chapters/performance/PerformanceChapter';
import ReactNativeChapter from './chapters/react_native/ReactNative';
import StorybookChapter from './chapters/storybook/StorybookChapter';
import TestingChapter from './chapters/testing/TestingChapter';
import ReactLogo from './components/helper/ReactLogo';
import RevealWrapper from './components/reveal/RevealWrapper';
import Slide from './components/reveal/Slide';

const App: React.FC = () => {
  const chapter = [
    {
      title: 'Comparison of Frameworks',
      component: ComparisonChapter
    },
    {
      title: 'React in a nutshell 🥜',
      component: ReactBasicsChapter
    },
    {
      title: 'Components & Styling',
      component: ComponentsChapter
    },
    {
      title: 'Conditional Rendering',
      component: ConditionalRenderingChapter
    },
    {
      title: 'Hooks & Databinding',
      component: DatabindingHooksChapter
    },
    {
      title: 'Context',
      component: ContextChapter
    },
    {
      title: 'Routing',
      component: RoutingChapter
    },
    {
      title: 'Forms',
      component: FormsChapter
    },
    // {
    //   title: 'jo',
    //   component: PerformanceChapter
    // },
    {
      title: 'Testing',
      component: TestingChapter
    },
    {
      title: 'Atomic Design & Storybook',
      component: StorybookChapter
    },
    {
      title: 'Improving Performance',
      component: PerformanceChapter
    },
    {
      title: 'React Native',
      component: ReactNativeChapter
    }
  ];

  return (
    <RevealWrapper>
      <Slide isMain dataAutoAnimate>
        <ReactLogo scale={2} />
      </Slide>
      <Slide isMain data-auto-animate dataAutoAnimate>
        <h2>React Training</h2>
        <div style={{ marginTop: 50 }}>
          <ReactLogo />
        </div>
      </Slide>
      <Slide isMain>
        <h2>Why we are here</h2>
        <p>React: A JavaScript library for building user interfaces</p>
        <p>
          🖥 <a href='https://reactjs.org/'>https://reactjs.org</a>
        </p>
        <aside className='notes'>
          Heavily used in the industry. Makes it painless to create interactive UIs. React = `it reacts to user inputs``
        </aside>
      </Slide>
      <Slide isMain>
        <h2>🙋‍♀️ Who are you?</h2>
        <div style={{ textAlign: 'left', display: 'inline-block' }}>
          Let's get to know each other on{' '}
          <a
            style={{ color: '#F48FB1', textDecoration: 'underline' }}
            href='https://app.mural.co/invitation/mural/dcx6016/1671440000180?sender=u67ac3f75ad329840b6034527&key=5ba8746e-9bf6-4976-b7b9-6979d859125d'
          >
            Mural
          </a>
        </div>
      </Slide>
      <TableOfContents chapter={chapter} />
      {/* <ExampleChapter title='Example' index={0} /> */}
      {chapter.map((chapter, index) => (
        <chapter.component key={index} title={chapter.title} index={index + 1} />
      ))}
      <Slide isMain>
        <h2>Thanks a lot!</h2>
        <p>Please fill out our survey, so that we can keep on improving! 😊</p>
      </Slide>
    </RevealWrapper>
  );
};

export default App;
