import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TransactionsOfPayout from "./pages/TransactionsOfPayout";
import TransactionsOfTransfer from "./pages/TransactionsOfTransfer";
import TransactionsOfAllocation from "./pages/TransactionsOfAllocation";
import TransactionsOfIncome from "./pages/TransactionsOfIncome";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/transactionsoftransfer":
        title = "";
        metaDescription = "";
        break;
      case "/transactionsofallocation":
        title = "";
        metaDescription = "";
        break;
      case "/transactionsofincome":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TransactionsOfPayout />} />
      <Route
        path="/transactionsoftransfer"
        element={<TransactionsOfTransfer />}
      />
      <Route
        path="/transactionsofallocation"
        element={<TransactionsOfAllocation />}
      />
      <Route path="/transactionsofincome" element={<TransactionsOfIncome />} />
    </Routes>
  );
}
export default App;
