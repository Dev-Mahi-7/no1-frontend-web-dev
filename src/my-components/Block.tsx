import React from "react";

export interface BlockProps {
  heading?: string;
  mainDesc?: string[];
  pointer?: {
    title?: string;
    subDesc?: string[];
    point?: string[];
    moral?: string[];
  };
}

interface Props {
  data: BlockProps;
}

const Block: React.FC<Props> = ({ data }) => {
  return (
    <div className=" mb-3">
      {/* heading */}
      <h5 className="font-bold text-xl mb-1" >{data.heading}</h5>
      {/* main desc */}
      {data.mainDesc &&
        data.mainDesc.map((item, idx) => <p key={idx}  >{item}</p>)}
      {/* pointer */}
      <ul>
        {/* title */}
        {data.pointer?.title && <h6>{data.pointer.title}</h6>}
        {/* desc */}
        {data.pointer?.subDesc &&
          data.pointer?.subDesc.map((item, idx) => <p key={idx}>{item}</p>)}
      </ul>
      <ul>
        {/* sub desc */}
        {data.pointer?.subDesc &&
          data.pointer?.subDesc.map((item, idx) => <p key={idx}>{item}</p>)}
      </ul>
      <div className="">
        {data.pointer?.moral &&
          data.pointer?.moral.map((item, idx) => <h6 key={idx}>{item}</h6>)}
      </div>
    </div>
  );
};

export default Block;
