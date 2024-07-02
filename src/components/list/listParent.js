import { ImageComponent1 } from "../image/ImageComponent";

export const ListParentOrderList = () => {
  return (
    <ol>
      {/* <ListItems/>
    <ListItems1/> */}
      <ListItems2 />
    </ol>
  );
};

export const ListParentUnOrderList = () => {
  return (
    <ul>
      <ListItems />
    </ul>
  );
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

export const ListItems1 = () => {
  const fruitsList = ["Appli", "banana", "Watermelon", "greaps"];
  return (
    <div>
      {fruitsList.map((eachfrut) => {
        return <h3>{eachfrut}</h3>;
      })}
    </div>
  );
};

export const ListItems2 = () => {
  const iplTeam = [
    {
      teamName: "CSK",
      teamPlayers: ["Msd", "jadeja", "Raina"],
      won: 5,
      wonYear: [2023, 2018, 2016, 2010],
      teamLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMx-aQvP_fuMtV-VJj1XUuFv2wcGRYWYaMA&s",
    },
    {
      teamName: "SRH",
      teamPlayers: ["bvi", "gabar", "Yraj"],
      won: 2,
      wonYear: [2023, 2018, 2016, 2010],
      teamLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjKyHp6P1O4jLdpebFHSMgalsxzrW7mOVAgRIrQrzws4RjrF8uGDBc5KOxnlAMJl5nXgk&usqp=CAU",
    },
    {
      teamName: "RCB",
      teamPlayers: ["Kohile", "Siraj", "Dkarhik"],
      won: 0,
      wonYear: [2023, 2018, 2016, 2010],
      teamLogo:
        "https://i.pinimg.com/originals/33/8c/c5/338cc5c01c06ef477b0c88c9983df677.png",
    },
  ];

  function filterData(iplTeam) {
    const newTeam = iplTeam.filter((eachteam) => eachteam.won >= 2);
    return newTeam;
  }

  function conutnMatch(iplTeam) {
    let total =iplTeam.reduce((acc, eachteam) => {
      return acc + eachteam.won;
    }, 0);
    return total;
  }
  // return (
  //   <div>
  //     <h3>total conutnmatch {conutnMatch(iplTeam)}</h3>
  //     {filterData(iplTeam).map((eachteam) => {
  //       return (
  //         <div>
  //           <h2>{eachteam.teamName}</h2>
  //           <img
  //             src={eachteam.teamLogo}
  //             height={200}
  //             width={200}
  //             alt={"teamlogo"}
  //           />
  //           {eachteam.teamPlayers.map((eachplayer) => {
  //             return (
  //               <>
  //                 <h5>{eachplayer}</h5>
  //               </>
  //             );
  //           })}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return(
    <>
       <h3>totalcount {conutnMatch(iplTeam)}</h3>
       <h3>total conut {conutnMatch(iplTeam)}</h3>
    </>
  )
};

export const Fruits = () => {
  const fruits = ["apple", "banana", "orange", "kiwi"];
  return (
    <div>
      {fruits.map((eachfrut) => {
        return <h2>{eachfrut}</h2>;
      })}
    </div>
  );
};

