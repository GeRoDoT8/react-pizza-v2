import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="249" rx="0" ry="0" width="280" height="32" />
        <circle cx="122" cy="121" r="120" />
        <rect x="0" y="296" rx="11" ry="11" width="280" height="88" />
        <rect x="6" y="400" rx="8" ry="8" width="95" height="30" />
        <rect x="123" y="395" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
);

export default Skeleton;
