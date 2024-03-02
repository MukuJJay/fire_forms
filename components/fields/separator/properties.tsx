import { FormElementInstance } from "@/interfaces/form-elements";

const PropertiesComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  if (!instance.extraAttributes) {
    return null;
  }
  return <div>No Properties</div>;
};

export default PropertiesComponent;
