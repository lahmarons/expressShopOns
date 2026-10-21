const {
  getProductById,
  checkStock,
} = require("../../src/catalog/catalogService");

test("getProductById : produit existant", async () => {
  const product = await getProductById(1);
  expect(product).toEqual({
    id: 1,
    name: "Casque Bluetooth",
    category: "audio",
    price: 89.9,
    stock: 12,
  });
});

test("reject le promesse si le produit n'existe pas", async () => {
  await expect(getProductById(99)).rejects.toThrow("produit introuvable : 99");
});

test("retourner false si le stock est insuffisant", async () => {
  expect.assertions(1);
  await expect(checkStock(2, 1)).resolves.toBe(true);
});
