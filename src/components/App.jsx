import "./App.css";
import Product from "./Product";
import Mailbox1 from "./Mailbox1";
import Mailbox2 from "./Mailbox2";
import BookList from "./BookList";
// import { FavBooks } from "./BookList";
import { FavBooks } from "./FavBooks";
import { Alert1 } from "./Alert1";
import { Alert2 } from "./Alert2";
import { Alert3 } from "./Alert3";

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
// export default function App() {
//   return (
//     <div>
//       <h1>Gmail messages</h1>
//       <Mailbox1 username="Harrison Wells" messages={0} />
//       <Mailbox1
//         username="Barry Allen"
//         messages={[
//           "message 1",
//           "message 2",
//           "message 3",
//           "message 4",
//           "message 5",
//         ]}
//       />
//     </div>
//   );
// }

// =================================================== Task 2.2: Messages ========================================== //
// export default function App() {
//   return (
//     <div>
//       <h1>Ukr.net messages</h1>
//       <Mailbox2 name="Harrison Wells" unreadMessages={0} />
//       <Mailbox2
//         name="Barry Allen"
//         unreadMessages={[
//           "message 1",
//           "message 2",
//           "message 3",
//           "message 4",
//           "message 5",
//         ]}
//       />
//     </div>
//   );
// }

// =================================================== Task 3: Books ========================================== //

// export default function App() {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <BookList books={FavBooks} />
//     </>
//   );
// }

// =================================================== Task 4.1: Books ========================================== //
// const Card = ({ children }) => {
//   return <div>{children}</div>;
// };

// export default function App() {
//   return <Card>Text between opening and closing tag</Card>;
// }

// =================================================== Task 4.2: Books ========================================== //
// const Card = ({ children }) => {
//   return <div>{children}</div>;
// };

// export default function App() {
//   return (
//     <Card>
//       <h1>Card title</h1>
//       <p>Text between opening and closing tag</p>
//     </Card>
//   );
// }

// ====================================================== Task 5.1: In-built Styles ============================================= //

// export default function App() {
//   return (
//     <p
//       style={{
//         margin: 8,
//         padding: "12px 16px",
//         borderRadius: 4,
//         backgroundColor: "gray",
//         color: "white",
//       }}
//     >
//       Please update your email!
//     </p>
//   );
// }

// ====================================================== Task 5.2: In-built Styles ============================================= //

// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };

// export default function App() {
//   return (
//     <>
//       <p style={alertStyles}>Please update your email!</p>
//       <p style={alertStyles}>There was an error during transaction!</p>
//       <p style={alertStyles}>Payment received, thank you for your purchase!</p>
//     </>
//   );
// }

// ====================================================== Task 5.3: In-built Styles ============================================= //

// export default function App() {
//   return (
//     <>
//       <Alert1>Please update your email!</Alert1>
//       <Alert1>There was an error during transaction!</Alert1>
//       <Alert1>Payment received, thank you for your purchase!</Alert1>
//     </>
//   );
// }

// ====================================================== Task 5.4: In-built Styles ============================================= //

// export default function App() {
//   return (
//     <>
//       <Alert1 variant="info">
//         Would you like to browse our recommended products?
//       </Alert1>
//       <Alert1 variant="error">
//         There was an error during your last transaction
//       </Alert1>
//       <Alert1 variant="success">
//         Payment received, thank you for your purchase
//       </Alert1>
//       <Alert1 variant="warning">
//         Please update your profile contact information
//       </Alert1>
//     </>
//   );
// }

// ====================================================== Task 6: Vanilla CSS ============================================= //

// export default function App() {
//   return (
//     <>
//       <Alert2>Please update your email!</Alert2>
//       <Alert2>There was an error during transaction!</Alert2>
//       <Alert2>Payment received, thank you for your purchase!</Alert2>
//     </>
//   );
// }

// ====================================================== Task 6.1: Vanilla CSS ============================================= //

export default function App() {
  return (
    <>
      <Alert3 variant="info">
        Would you like to browse our recommended products?
      </Alert3>
      <Alert3 variant="error" outlined>
        There was an error during your last transaction
      </Alert3>
      <Alert3 variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert3>
      <Alert3 variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert3>
    </>
  );
}
