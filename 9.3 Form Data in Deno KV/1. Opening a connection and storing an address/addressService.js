const addAddress = async (addressData) => {
  const kv = await Deno.openKv();
  await kv.set(["addresses", addressData.name], addressData);
};

export { addAddress };