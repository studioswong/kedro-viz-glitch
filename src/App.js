import KedroViz from "@quantumblack/kedro-viz";
import * as data from "./structure.json"



export const dataSources = {
  
  layers: () => data
};

console.log(data)

const App = ({ initialData }) => {

  const visibleSetting = { sidebar: false };

  return (
    <div style={{ height: "100vh" }}>
      <KedroViz data={dataSources["layers"]()} visible={visibleSetting} />
    </div>
  );
};

App.defaultProps = {
  initialData: "layers",
};

export default App;
