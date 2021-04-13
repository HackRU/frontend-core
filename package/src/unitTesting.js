import React from 'react';
import { CoreModule, CoreProvider } from "@hackru/frontend-core";
import { render } from 'react-testing-library';

//CoreProvider first


// ReactComponent, ExpectedInputs
//({ Store, Linker, children })
test('Core Provider Test', () => {
    describe('Core Provider Test', () => {
        it('Linker1', () => {
            //const { container, getByText } = render()

        })
    })

});

// potentially break down to three to test store, linker, and children separately
test('Core Module Test', () => {
    
    describe('<Core Module Test />', () => {
        it('ConfigFile', () => {
          const utils = render(<h1>hello world </h1>); //mocked DOM (tag + content)
          expect(utils.container).toMatchSnapshot();

          // const { container, getByText } = render(<Greeting />)
          // expect(getByText('hello')).toBeInTheDocument() 
        });
        it('shows ? correctly', () => {
          const utils = render(<something />);
          utils.getByText('mesg');
          utils.getByText('(tex)'); 
          utils.getByText(/?/); 
        });

        it('renders invalid config file') //
      });
    
    describe('', () => {
      it('Login?', () => {
          const utils = render(<input/>);
          emailContent = utils.getElementById("email");
          
      });
    });

    // diff it clause per edge case
});


