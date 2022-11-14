import Split from 'react-split';
import Topbar from './Topbar';

function Templates() {
  return (
    <>
      <Topbar />
      <Split className="split" minSize={20}>
        <div className="bg-indigo-300 py-80 rounded-md"></div>
        <div className="bg-indigo-400 py-80 rounded-md"></div>
      </Split>
    </>
  );
}

export default Templates;
