import React, { useState } from "react";
import "./style.css";

type Props = {
  json: Array<ItemProps>;
};

type ItemProps = {
  label: string;
  id: string;
  children: Array<ItemProps>;
};

const Item = (props: ItemProps) => {
  const [childOpen, setChildOpen] = useState(false);

  const expend = () => {
      setChildOpen(!childOpen)
  }

  return (
    <div className="item" id={props.id}>
      <div className='content'>
          {props.children && props.children.length > 0 && <a onClick={expend} className='extender'>
              {childOpen ? '-' : '+'}
          </a>}
          <a onClick={expend}>{props.label}</a>
      </div>

      {props.children && props.children.length > 0 && (
        <div className={`child-container ${childOpen ? "open" : ""}`}>
          <TreeView json={props.children} />
        </div>
      )}
    </div>
  );
};

export const TreeView = (props: Props) => {
  return (
    <div className="tree">
      {props.json && props.json.map((item) => <Item key={item.id} {...item} />)}
    </div>
  );
};
