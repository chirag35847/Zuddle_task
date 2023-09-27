import { SimpleGrid } from "@mantine/core";
import ResourcesCard from "./Resource/ResourcesCard";
import ToDoCard from './todo/ToDoCard';
import DoneCard from "./Done/DoneCard";
import DoingCard from "./Doing/DoingCard";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-3">
      <h2 className="text-[2rem]">Some Title</h2>
      <SimpleGrid
        cols={{sm: 2, lg: 4,md:4,xl:4,xs:2}}
      >
        <ResourcesCard/>
        <ToDoCard/>
        <DoingCard/>
        <DoneCard/>
        {/* <ResourcesCard/>
        <ResourcesCard/>
        <ResourcesCard/> */}
      </SimpleGrid>
    </div>
  );
}

export default App;
