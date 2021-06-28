import KedroViz from "@quantumblack/kedro-viz";
import * as dataStructure from "./structure.json";

const App = ({ initialData }) => {
  const visibleSetting = { sidebar: false, miniMap: false };

  return (
    <div style={{ height: "100vh" }}>
      <KedroViz data={dataStructure.default} visible={visibleSetting} />
    </div>
  );
};

App.defaultProps = {
  initialData: "layers",
};

export default App;
