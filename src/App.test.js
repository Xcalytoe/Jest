import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByRole('link', {name : /learn react/i});
//   expect(linkElement).toBeInTheDocument();
// });
test('check the colour of button', () => {
  render(<App/>);
  const buttonTest = screen.getByRole('button', {name: /Change color to red/i} );
  expect(buttonTest).toHaveStyle({backgroundColor: "red"})

})
// test('check the color of button on click', ()=>{
//   render(<App/>);
//   fireEvent
// })
