import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-1">
        <label>Upload PDF</label>
        <Input type="file" />
      </div>
    </div>
  );
}
