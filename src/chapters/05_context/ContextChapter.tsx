import React from 'react';
import Slide from '../../components/reveal/Slide';

const tree = `
// fetch user...
<Page user={props.user} />
// ... which renders ...
<PageLayout user={props.user} />
// ... which renders ...
<NavigationBar user={props.user} />
// ... which renders ...
<Link href={props.user.permalink}>
  <Avatar user={props.user} />
</Link>
`;

const contextWrap = `
const UserContext = React.createContext(null);

// fetch user...

<UserContext.Provider value={user}>
  <Page />
</UserContext.Provider>
`;

const treeAfter = `
const user = useContext(UserContext);

<Link href={user.permalink}>
  <Avatar user={user} />
</Link>
`;

const updateFromChild = `
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
`;

const ContextChapter: React.FC = () => {
  return (
    <>
      <Slide>
        <Slide isMain>
          <h2>5. Context</h2>
          <blockquote>
            &quot;Context provides a way to pass data through the component tree without having to pass props down manually at every
            level.&quot;
          </blockquote>
        </Slide>
        <Slide>
          <h2>When to use?</h2>
          {/* <p>Wrapping with data instead of passing it down</p> */}
          <ul className='fragment'>
            <li>locale preferences</li>
            <li>UI theme</li>
            <li>user objects</li>
          </ul>
          <aside className='notes'>
            Really use with care! Just if many components need all of the data. Resuability gets more difficult.
          </aside>
        </Slide>
        <Slide>
          <h2>🕵️ Be careful!</h2>
          <p className='fragment'>Is it easier to pass down components as props?</p>
          <p className='fragment'>Be aware of restricted reusability!</p>
          <p className='fragment'>Only use if many components need the data.</p>
          <aside className='notes'>
            Really use with care! Just if many components need all of the data. Resuability gets more difficult.
          </aside>
        </Slide>
        <Slide>
          <h2>From</h2>
          <pre className=''>
            <code data-trim data-noescape data-line-numbers>
              {tree}
            </code>
          </pre>
        </Slide>
        <Slide>
          <pre className=''>
            <code data-trim data-noescape data-line-numbers='1|1-7'>
              {contextWrap}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>To</h2>
          <pre className=''>
            <code data-trim data-noescape data-line-numbers='1|1-7'>
              {treeAfter}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>Update from child</h2>
          <pre className=''>
            <code data-trim data-noescape data-line-numbers>
              {updateFromChild}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>Further Reads</h2>
          <ul>
            <li>
              <a href='https://reactjs.org/docs/context.html'>React Docs</a>
            </li>
            <li>
              <a href='https://kentcdodds.com/blog/application-state-management-with-react'>🚀 Application State Management with React</a>
            </li>
            <li>
              <a href='https://kentcdodds.com/blog/how-to-use-react-context-effectively'>🚀 How to use React Context effectively</a>
            </li>
          </ul>
          <aside className='notes'>Recommend Kent C. Dotts blog posts. You won&apos;t need redux anymore!</aside>
        </Slide>
        <Slide>
          <h2>💪 Exercise</h2>
        </Slide>
      </Slide>
    </>
  );
};

export default ContextChapter;