import React, { Suspense } from "react";
import { fakeImportComponent } from "./Helpers";
import Loading_2 from "../spinners/spinner2.gif";

const CastItem = ({ children }) => <div className="CastItem">{children}</div>;
const CastItemLazy = React.lazy(() =>
  fakeImportComponent(props => <CastItem {...props} />, 200)
);

const SeeAllCast = () => (
  <button style={{ fontSize: "20px" }}>See All (42) Cast</button>
);
const SeeAllCastLazy = React.lazy(() =>
  fakeImportComponent(() => <SeeAllCast />, 1000)
);

const cast = ["JavaScript", "JSX", "Hooks", "Suspense"];

export default () => (
  <div>
    <Suspense
      fallback={
        <img className="loading_2" alt="Second loading ..." src={Loading_2} />
      }
    >
      <div className="Cast">
        {cast.map(castItem => (
          <CastItemLazy key={castItem}>{castItem}</CastItemLazy>
        ))}
      </div>
      <br />
      <SeeAllCastLazy />
    </Suspense>
  </div>
);
