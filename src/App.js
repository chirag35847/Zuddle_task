import { SimpleGrid } from "@mantine/core";
import ResourcesCard from "./Resource/ResourcesCard";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-3">
      <h2 className="text-[2rem]">Some Title</h2>
      <SimpleGrid
        cols={4}
      >
        <ResourcesCard/>
        {/* <ResourcesCard/>
        <ResourcesCard/>
        <ResourcesCard/> */}
      </SimpleGrid>
    </div>
  );
}

export default App;
