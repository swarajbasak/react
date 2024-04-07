import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/products", element: <Products /> },
			{ path: "/products/:productId", element: <ProductDetail /> },
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
