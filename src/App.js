import KedroViz from "@quantumblack/kedro-viz";
import * as sourceDomainModel from "./data/source_domain_model.json";
import * as representativePipeline from "./data/complete_demo_pipeline.json";

export const dataSources = {
  sourceDomainModel: () => sourceDomainModel.default,
  representativePipeline: () => representativePipeline.default,
};

const App = ({ initialData }) => {
  const visibleSetting = { sidebar: false, miniMap: false };

  return (
    <div style={{ height: "100vh" }}>
      <KedroViz
        data={dataSources.representativePipeline()}
        visible={visibleSetting}
      />
    </div>
  );
};

App.defaultProps = {
  initialData: "layers",
};

export default App;
