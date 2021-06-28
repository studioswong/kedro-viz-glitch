import KedroViz from "@quantumblack/kedro-viz";
import * as sourceDomainModel from "./data/source_domain_model.json"
import * as representativePipeline from "./data/complete_demo_pipeline.json"
import { source } from "common-tags";
export const dataSources = {
  sourceDomainModel: () => sourceDomainModel,
  representativePipeline: () => representativePipeline
};

const App = ({ initialData }) => {
const visibleSetting = { sidebar: false, miniMap: false };


  return (
    <div style={{ height: "100vh" }}>
      <KedroViz data={dataSources.representativePipeline} visible={visibleSetting} />
    </div>
  );
};

App.defaultProps = {
  initialData: "layers",
};

export default App;
