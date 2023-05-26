import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import TextArea from "@/components/atoms/Textarea";
import Layout from "@/components/templates/Layout";

export default function LiveCreate() {
  return (
    <Layout canGoBack title="Go Live">
      <form className=" space-y-4 py-10 px-4">
        <Input required label="Name" name="name" type="text" />
        <Input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="Description" />
        <Button text="Go live" />
      </form>
    </Layout>
  );
}
