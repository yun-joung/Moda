
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
			products: [],
			product: [],
			buyProducts:[]
        },
        actions: {
            getProducts: async () => {
                try {
					const response = await fetch("https://random-data-api.com/api/commerce/random_commerce?size=30", {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log("--Products--", json);
					setStore({ products: json });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			getProductById: async (id) => {
				const store = getStore();
				const product = store.products.find(item => item.id == id)
				console.log("--Product--", product);
				setStore({ product: product });
			},
			buyProducto: (item) => {
				console.log("--item--", item);
				const store = getStore()
				setStore({ buyProducts: [...store.buyProducts, item] })
                getActions().setLocalStorage()
			},
			eliminarLista: (id) => {
                const store = getStore()
                const newLista = store.buyProducts.filter(item => item.id !== id)
                setStore({
                    buyProducts: newLista
                })
                getActions().setLocalStorage()
            },
			setLocalStorage: () => {
                const store = getStore()
                const Compralist = store.buyProducts
                localStorage.setItem("Compralist", JSON.stringify(Compralist))
            },
            getLocalStorage: () => {
                if (localStorage.getItem("Compralist")) {
                    const data = localStorage.getItem("Compralist")
                    setStore({
                        buyProducts: JSON.parse(data)
					})
				}
				const store = getStore();
				const buyProducts = store.buyProducts
				console.log("--buyProducts--", buyProducts);
			}
        }
    }
}

export default getState;