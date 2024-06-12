export const ListParentOrderList=() => {
  return <ol>
    <ListItems/>
  </ol>;
};

export const ListParentUnOrderList=() => {
  return <ul>
      <ListItems/>
  </ul>;
};


const ListItems = () => {
  return (
    <div>
      <li>Appli</li>
      <li>orenge</li>
      <li>banana</li>
    </div>
  );
};


