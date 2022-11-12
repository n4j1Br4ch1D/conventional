import Topbar from './application/Topbar';
import Sidebar from './application/Sidebar';
import Templates from './application/Templates';
import TemplateForm from './application/TemplateForm';

function Application() {
  return (

<div id="apllication-wrapper" className="pt-1">

<section className="flex bg-white border border-purple-900 mx-2 rounded-md shadow-md section relative overflow-hidden">

<Sidebar />

<div className="w-3/4 p-2">
<Topbar />
<TemplateForm />
<Templates />
</div>

</section>

</div>

  );
}

export default Application;
