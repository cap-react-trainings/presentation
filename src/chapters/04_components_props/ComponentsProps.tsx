import React from 'react';
import Slide from '../../components/reveal/Slide';

const fnExample = `const Welcome: React.FC = (props: Pros) {
  return <h1>Hello, {props.name}</h1>;
}`;

const classExample = `class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`;

const bookList = `
  const BookList: React.FC = () => {
    const books: Book[] = [
      {id: 1, name: 'Moby Dick', author: 'Herman Melville'},
      {id: 2, name: 'Hamlet', author: 'Shakespeare'},]
    return (
      <>
       {books.map(book => (
         // always define keys when looping, unique identifier for React DOM
         <Book key={book.id} book={book} /> 
       ))}
      </>
    )
  }
  export default BookList;
`;

const book = `
  const interface Book {
    id: number;
    name: string;
    author; string;
  }

  const Book: React.FC = (props: Book) => {
    return (
      <>
        <h1>{props.name}</h1>
        <p>author: {props.author}</p>
      </>
    )
  }
`;

const bookDestructured = `
  const interface Book {
    id: number;
    name: string;
    author; string;
  }

  const Book: React.FC = ({ name, author }: Book) => {
    return (
      <>
        <h1>{name}</h1>
        <p>author: {author}</p>
      </>
    )
  }

  export default Book;
`;

const classStyled = `
  const Book: React.FC = ({ name, author }: Book) => {
    return (
      <>
        <h1 className='myHeadline'>{name}</h1>
        <p>author: {author}</p>
      </>
    )
  }
`;

const stylesAttribute = `
  const Book: React.FC = ({ name, author }: Book) => {
    return (
      <>
        <h1 className='myHeadline'>{name}</h1>
          // notice the double curly braces
        <p style={{ colour: 'green'}}>author: {author}</p>
      </>
    )
  }
`;

const ComponentsProps: React.FC = () => {
  return (
    <Slide>
      <Slide isMain>
        <h2>Components in React</h2>
        <p>JavaScript functions, accept Props and return React Elements (JSX)</p>
      </Slide>
      <Slide>
        <h2>Class Components vs. Functional Components</h2>
        <pre className='fragment'>
          <code data-trim data-noescape>
            {fnExample}
          </code>
        </pre>
        <pre className='fragment'>
          <code data-trim data-noescape>
            {classExample}
          </code>
        </pre>
        <p className='fragment'>same output</p>
      </Slide>
      <Slide>
        <h2>Class Components vs. Functional Components</h2>
        <p className='fragment'>Whats the differnce? When should I use which one?</p>
        <ul className='fragment'>
          <li>hisotrical reasons: no state-management / lifecycle hooks before 2019 in functional components</li>
          <li>nowadays: hardly any usage of class components</li>
          <li>functional components are easier to read and test, less code, better preformance</li>
        </ul>
        <a href='https://www.twilio.com/blog/react-choose-functional-components' target='_blank' className='fragment'>
          Read this blog article in case of further interest
        </a>
      </Slide>
      <Slide>
        <h2>Properties: Pass information down the component tree</h2>
        <p className='fragment'>Book-List which renders various Books from a Book component</p>
        <p className='fragment'>The Book component doesn't 'know' what to render so we need to pass the information</p>
      </Slide>
      <Slide>
        <h2>Properties: Pass information down the component tree</h2>
        <pre className='fragment'>
          <code data-trim data-noescape>
            {bookList}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Properties: not desctructured</h2>
        <pre className='fragment'>
          <code dta-trim data-noescape>
            {book}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Properties: desctructured</h2>
        <pre className='fragment'>
          <code dta-trim data-noescape>
            {bookDestructured}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Let's style our Booklist</h2>
        <ul className='fragment'>
          <li>via css classes</li>
          <li>via inline styling</li>
        </ul>
      </Slide>
      <Slide>
        <h2>className</h2>
        <p className='fragment'>instead of using the 'class'-attribute, React expects 'className'</p>
        <pre className='fragment'>
          <code dta-trim data-noescape>
            {classStyled}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Inline Styling</h2>
        <p className='fragment'>inline styling is also possible via the well known 'style'-attribute</p>
        <p className='fragment'>notice the double curly braces, usual CSS-syntax inside</p>
        <pre className='fragment'>
          <code dta-trim data-noescape>
            {stylesAttribute}
          </code>
        </pre>
      </Slide>
    </Slide>
  );
};

export default ComponentsProps;
