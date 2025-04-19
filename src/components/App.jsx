import "./App.css";
import Product from "./Product";
import Mailbox1 from "./Mailbox1";

// =================================================== Task 1: Product Menu ========================================== //
// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//       <Product name="Quesadilla + Szaverma!!!" price={9.75} />
//     </div>
//   );
// }

// =================================================== Task 2.1: Messages ========================================== //
export default function App() {
  return (
    <div>
      <h1>Gmail messages</h1>
      <Mailbox1 username="Harrison Wells" messages={0} />
      <Mailbox1
        username="Barry Allen"
        messages={[
          "message 1",
          "message 2",
          "message 3",
          "message 4",
          "message 5",
        ]}
      />
    </div>
  );
}
