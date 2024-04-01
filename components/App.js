import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "./CryptoTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div style={{display: "flex", width: "auto", justifyContent: "center", zIndex: "100"}} className="column">
    <CryptoTracker cryptoName="coredaoorg" />
    </div>

  </QueryClientProvider>
);

export default App;
