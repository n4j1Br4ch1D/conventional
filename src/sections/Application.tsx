import Sidebar from './application/Sidebar';
import Templates from './application/Templates';
import TemplateForm from './application/TemplateForm';
import Editor from './application/Editor';
import { useAppContext } from '../contexts/useAppContext';

function Application() {
  const { currentPanel } = useAppContext();
  let panel;
  if (currentPanel === 'templateForm') {
    panel = <TemplateForm />;
  } else if (currentPanel === 'editor') {
    panel = <Editor />;
  } else {
    panel = <Templates />;
  }

  return (
    <div id="apllication-wrapper" className="pt-1">
      <section className="flex h-i bg-white border border-purple-900 mx-2 rounded-md shadow-md section relative overflow-hidden">
        <Sidebar />
        <div className="w-3/4 p-2">{panel}</div>
      </section>
    </div>
  );
}

export default Application;
