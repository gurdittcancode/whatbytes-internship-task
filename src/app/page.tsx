import SubjectWiseAnalysis from "@/components/SubjectAnalysis";

export default function Home() {
  return (
    <div className="">
      <h1>Skill Test</h1>
      <div className="mt-20 flex justify-between">
        {/* main section */}
        <div>Charts Sections</div>
        <div>
          <SubjectWiseAnalysis />
        </div>
      </div>
    </div>
  );
}
