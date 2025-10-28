/** @notice Library imports */
import { Suspense } from "react";
/// Local Imports
import SingleLinkCompartment from "../compartments/SingleLinkCompartment";

const AuthorizedSingleUrlsPage = async (props: PageProps<"/urls/[id]">) => {
  return (
    <div>
      <h1>Single Link</h1>
      <Suspense fallback="SingleLink is loading...">
        <SingleLinkCompartment params={props.params} />
      </Suspense>
    </div>
  );
};

export default AuthorizedSingleUrlsPage;
