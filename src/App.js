import KedroViz from "@quantumblack/kedro-viz";
import * as sourceDomainModel from "./data/source_domain_model.json"
import * as representativePipeline from "./data/complete_demo_pipeline.json"

const App = ({ initialData }) => {
const visibleSetting = { sidebar: false, miniMap: false };
const dataSources = {
  sourceDomain : sourceDomainModel,
  complete : representativePipeline
}

  return (
    <div style={{ height: "100vh" }}>
      <KedroViz data={dataSources.sourceDomainModel} visible={visibleSetting} />
    </div>
  );
};

App.defaultProps = {
  initialData: "layers",
};

export default App;
