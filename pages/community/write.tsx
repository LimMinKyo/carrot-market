import Button from "@/components/atoms/Button";
import TextArea from "@/components/atoms/Textarea";
import Layout from "@/components/templates/Layout";

export default function CommunityWrite() {
  return (
    <Layout canGoBack title="Write Post">
      <form className="p-4 space-y-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
}
