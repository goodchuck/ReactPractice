import React, { Component } from 'react';
import StyledComponent from './StyledComponent';

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />
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