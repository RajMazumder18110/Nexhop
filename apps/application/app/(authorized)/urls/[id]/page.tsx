/** @notice Library imports */

const AuthorizedSingleUrlsPage = async (props: PageProps<"/urls/[id]">) => {
  const { id } = await props.params;
  return <div>AuthorizedSingleUrlsPage {id}</div>;
};

export default AuthorizedSingleUrlsPage;
