import "./table.css";
export const Table = () => {
  return (
    <table>
      <Tr></Tr>
    </table>
  );
};

const Tr = () => {
  return (
    <tr>
        <Th/>
      <Td1 />
    </tr>
  );
};

const Th = () => {
  return (
    <tr>
      <th> Stud id</th>
      <th>Stud name</th>
      <th>Gender</th>
      <th>SQL</th>
      <th>WebAppDev</th>
      <th>Math IT</th>
      <th>Stud Section</th>
    </tr>
  );
};

// const Td = () => {
//   return (
//     <tr>
//       <td>1</td>
//       <td>gnana</td>
//       <td>10th</td>
//       <td>99</td>
//     </tr>
//   );
// };

const Td1 = () => {
  return (
    <>
      <tr>
        <td>46j12035</td>
        <td>ravi</td>
        <td>10th</td>
        <td>78</td>
        <td>59</td>
        <td>89</td>
        <td>1</td>
      </tr>
      <tr>
        <td>46k58294</td>
        <td>rani</td>
        <td>10th</td>
        <td>88</td>
        <td>78</td>
        <td>72</td>
        <td>1</td>
      </tr>
      <tr>
        <td>46f32498</td>
        <td>nazma</td>
        <td>10th</td>
        <td>67</td>
        <td>69</td>
        <td>76</td>
        <td>1</td>
      </tr>
      <tr>
        <td>46l54693</td>
        <td>kiran</td>
        <td>10th</td>
        <td>71</td>
        <td>76</td>
        <td>75</td>
        <td>2</td>
      </tr>
      <tr>
        <td>46s21546</td>
        <td>chandeni</td>
        <td>10th</td>
        <td>65</td>
        <td>71</td>
        <td>62</td>
        <td>2</td>
      </tr>
      <tr>
        <td>46h23645</td>
        <td>asma</td>
        <td>10th</td>
        <td>77</td>
        <td>78</td>
        <td>64</td>
        <td>1</td>
      </tr>
    </>
  );
};
