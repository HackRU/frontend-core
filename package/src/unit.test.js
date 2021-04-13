import React from 'react';
import { CoreModule, CoreProvider } from "./index";
import renderer from 'react-test-renderer';

const Test = CoreModule(({ text, logout, children }) => {
  return (
      <div>
          <button
              onClick={() => {
                  logout();
              }}>
                  {text}{children}
          </button>
      </div>
  );
}, ["text", "logout"]);

//CoreProvider first


// ReactComponent, ExpectedInputs
//({ Store, Linker, children })
test('Core Provider Test', () => {
    const tree = renderer.create(
      <CoreProvider Store={{
        logout: () => {
            i += 1;
            alert(i);
        }
    }} Linker={{
        Test
    }}>
        {[
            {
                module: "Test",
                params: {
                    text: "an outer button",
                    garbage: "YAS"
                },
                children: [{
                    module: "Test",
                    params: {
                        text: "an inner button"
                    },
                    children: [],
                }],
            },
            {
                module: "Test",
                params: {
                    text: "another outer button"
                },
                children: [],
            },    
            {
                module: "this one doesn't exist",
                params: {
                    text: "wrapped module",
                    garbage: "YAS"
                },
                children: [],
            }
        ]}
    </CoreProvider>
    ).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
});

// potentially break down to three to test store, linker, and children separately
test('Core Module Test', () => {
  

    const tree = renderer.create(
      Test
    ).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
});


