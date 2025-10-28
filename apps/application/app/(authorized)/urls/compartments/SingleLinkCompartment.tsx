/** @notice Library imports */

type SingleLinkCompartmentProps = {
  params: PageProps<"/urls/[id]">["params"];
};

const SingleLinkCompartment = async (props: SingleLinkCompartmentProps) => {
  const { id } = await props.params;
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>SingleLinkCompartment ${id}</div>;
};

export default SingleLinkCompartment;
