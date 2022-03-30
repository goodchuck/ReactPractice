import React, { Component } from 'react';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';
import SassComponent from './SassComponent';

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
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