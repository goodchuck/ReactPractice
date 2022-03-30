import React, { Component } from 'react';
import CSSModule from './CSSModule';

class App extends Component {
  render() {
    return (
      <div>
        <CSSModule />
      </div>
    )
  }
}

// const App = () => {
//   // const [visible, setVisible] = useState(false);
//   // return (
//   //   <div>
//   //     <button
//   //       onClick={() => {
//   //         setVisible(!visible);
//   //       }}
//   //     >
//   //       {visible ? '숨기기' : '보이기'}
//   //     </button>
//   //     <hr />
//   //     {visible && <Info />}
//   //   </div>
//   // );
//   return <Average />;
// };

export default App;