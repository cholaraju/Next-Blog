// import CreateBlogForm from "./_components/create-blog";
import dynamic from "next/dynamic";
const CreateBlogForm = dynamic(() => import("./_components/create-blog"), {
  ssr: false,
});

export default function CreateBlogPage() {
  return (
    <div>
      <CreateBlogForm />
    </div>
  );
}
